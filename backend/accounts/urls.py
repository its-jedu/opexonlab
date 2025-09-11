from django.urls import path
from django.http import JsonResponse
from .views import RegisterView, LoginView
# , MeView, LogoutView, ForgotPasswordView, ResetPasswordView, health


def health(_request):
    return JsonResponse({"status": "ok"})

urlpatterns = [
    path("health/", health),
    path("register/", RegisterView.as_view()),
    path("login/", LoginView.as_view()),
    # path("me/", MeView.as_view()),
    # path("logout/", LogoutView.as_view()),
    # path("forgot-password/", ForgotPasswordView.as_view()),
    # path("reset-password/", ResetPasswordView.as_view()),
]
