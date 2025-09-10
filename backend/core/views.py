from django.contrib.auth import get_user_model, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings

from .serializers import RegisterSerializer, LoginSerializer
from core.tokens import token_generator, make_uid, parse_uid
from core.email_utils import send_html_email

User = get_user_model()

def tokens_for(user):
    r = RefreshToken.for_user(user)
    return {"access": str(r.access_token), "refresh": str(r)}

def health(_):  # simple JSON view already used
    from django.http import JsonResponse
    return JsonResponse({"status": "ok"})

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        s = RegisterSerializer(data=request.data)
        s.is_valid(raise_exception=True)
        user = s.save()
        return Response({"user": {"id": user.id, "username": user.username, "email": user.email},
                         "tokens": tokens_for(user)}, status=201)

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        s = LoginSerializer(data=request.data)
        s.is_valid(raise_exception=True)
        user = s.validated_data["user"]
        login(request, user)
        return Response({"user": {"id": user.id, "username": user.username, "email": user.email},
                         "tokens": tokens_for(user)})

class MeView(APIView):
    def get(self, request):
        u = request.user
        return Response({"id": u.id, "username": u.username, "email": u.email})

class LogoutView(APIView):
    def post(self, request):
        logout(request)  # client should discard tokens
        return Response({"detail": "Logged out"})

class ForgotPasswordView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        email = request.data.get("email", "").strip()
        if not email:
            return Response({"detail": "Email is required"}, status=400)
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            # do not leak existence
            return Response({"detail": "If the email exists, a reset link has been sent."})
        uid = make_uid(user.id)
        token = token_generator.make_token(user)
        # Frontend route that handles reset:
        fe = (settings.CORS_ALLOWED_ORIGINS[0] if getattr(settings, "CORS_ALLOWED_ORIGINS", []) else "http://localhost:5173")
        reset_url = f"{fe}/reset-password?uid={uid}&token={token}"
        html = f"<p>Hello {user.username},</p><p>Reset your password: <a href='{reset_url}'>{reset_url}</a></p>"
        send_html_email("Reset your password", email, html)
        return Response({"detail": "If the email exists, a reset link has been sent."})

class ResetPasswordView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        uid = request.data.get("uid")
        token = request.data.get("token")
        new_pw = request.data.get("new_password")
        if not (uid and token and new_pw):
            return Response({"detail": "uid, token, new_password are required"}, status=400)
        try:
            user = User.objects.get(pk=parse_uid(uid))
        except Exception:
            return Response({"detail": "Invalid link"}, status=400)
        if not token_generator.check_token(user, token):
            return Response({"detail": "Invalid or expired token"}, status=400)
        user.set_password(new_pw)
        user.save()
        return Response({"detail": "Password updated successfully"})
