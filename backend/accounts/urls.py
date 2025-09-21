from django.urls import path
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, LoginView, MeView, LogoutView, ForgotPasswordView, ResetPasswordView

def health(_request):
    return JsonResponse({"status": "ok"})

urlpatterns = [
    path("health/", health),
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("me/", MeView.as_view(), name="me"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("forgot-password/", ForgotPasswordView.as_view(), name="forgot-password"),
    path("reset-password/", ResetPasswordView.as_view(), name="reset-password"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
]