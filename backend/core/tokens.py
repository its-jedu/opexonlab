from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode

token_generator = PasswordResetTokenGenerator()

def make_uid(user_id: int) -> str:
    return urlsafe_base64_encode(force_bytes(user_id))

def parse_uid(uid: str) -> int:
    return int(force_str(urlsafe_base64_decode(uid)))
