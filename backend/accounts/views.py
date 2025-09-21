from django.contrib.auth import authenticate, get_user_model, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse

from drf_spectacular.utils import extend_schema, OpenApiResponse

from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    LoginResponseSerializer,
    MessageSerializer,
    UserOutSerializer,
)

User = get_user_model()


def health(_request):
    return JsonResponse({"status": "ok"})


class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    @extend_schema(
        request=RegisterSerializer,
        responses={
            201: UserOutSerializer,
            400: OpenApiResponse(description="Validation errors"),
        },
    )
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
      - email_or_username
      - email
      - username
    plus 'password'
    """
    permission_classes = [permissions.AllowAny]

    @extend_schema(
        request=LoginSerializer,
        responses={200: LoginResponseSerializer, 400: MessageSerializer},
        description="Login using username or email.",
    )
    def post(self, request):
        print("Login request data:", request.data)  # DEBUG
        serializer = LoginSerializer(data=request.data, context={'request': request})
        
        try:
            serializer.is_valid(raise_exception=True)
            print("Serializer validated successfully")  # DEBUG
        except Exception as e:
            print("Serializer validation error:", e)  # DEBUG
            return Response(
                {'error': str(e)}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        user = serializer.validated_data["user"]
        print("Authenticated user:", user.username, user.email)  # DEBUG
        
        refresh = RefreshToken.for_user(user)
        print("Tokens generated")  # DEBUG

        return Response(
            {
                "user": {"id": user.id, "username": user.username, "email": user.email},
                "tokens": {"refresh": str(refresh), "access": str(refresh.access_token)},
            },
            status=200,
        )


class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    @extend_schema(responses={200: UserOutSerializer})
    def get(self, request):
        u = request.user
        return Response({"id": u.id, "username": u.username, "email": u.email})


class LogoutView(APIView):
    @extend_schema(responses={200: MessageSerializer})
    def post(self, request):
        logout(request)
        return Response({"detail": "Logged out"})


class ForgotPasswordView(APIView):
    permission_classes = [permissions.AllowAny]

    @extend_schema(
        request=MessageSerializer,
        responses={200: MessageSerializer},
    )
    def post(self, request):
        return Response({"detail": "Forgot password not yet implemented"})


class ResetPasswordView(APIView):
    permission_classes = [permissions.AllowAny]

    @extend_schema(
        request=MessageSerializer,
        responses={200: MessageSerializer},
    )
    def post(self, request):
        return Response({"detail": "Reset password not yet implemented"})
