from django.core.mail import EmailMultiAlternatives
from django.conf import settings

def send_html_email(subject: str, to_email: str, html: str, text: str = ""):
    msg = EmailMultiAlternatives(
        subject=subject,
        body=text or " ",
        from_email=settings.DEFAULT_FROM_EMAIL or settings.EMAIL_HOST_USER,
        to=[to_email],
    )
    msg.attach_alternative(html, "text/html")
    msg.send()
