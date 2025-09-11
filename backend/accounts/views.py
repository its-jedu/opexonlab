from django.contrib.auth import authenticate, get_user_model, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer

from django.http import JsonResponse

def health(_request):
    return JsonResponse({"status": "ok"})

User = get_user_model()

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(
                {"id": user.id, "username": user.username, "email": user.email},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    """
    Accepts ANY of:
      - emailOrUsername
      - email
      - username
    and 'password'
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        data = request.data or {}
        email_or_username = (
            data.get("emailOrUsername")
            or data.get("email")
            or data.get("username")
            or data.get("userName")
            or data.get("identifier")
        )
        password = data.get("password") or data.get("pass")

        if not email_or_username or not password:
            return Response({"detail": "Email/Username and password required"}, status=400)

        # Try authenticate as username first
        user = authenticate(request, username=email_or_username, password=password)

        # If that failed, try email lookup -> authenticate with its username
        if user is None:
            try:
                user_obj = User.objects.get(email__iexact=str(email_or_username).strip())
                user = authenticate(request, username=user_obj.username, password=password)
            except User.DoesNotExist:
                pass

        if user is None:
            return Response({"detail": "Invalid credentials"}, status=400)

        refresh = RefreshToken.for_user(user)
        return Response({
            "user": {"id": user.id, "username": user.username, "email": user.email},
            "tokens": {"refresh": str(refresh), "access": str(refresh.access_token)},
        }, status=200)


class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        u = request.user
        return Response({"id": u.id, "username": u.username, "email": u.email})


class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({"detail": "Logged out"})


class ForgotPasswordView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        return Response({"detail": "Forgot password not yet implemented"})


class ResetPasswordView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        return Response({"detail": "Reset password not yet implemented"})
