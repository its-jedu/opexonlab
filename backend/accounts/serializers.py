from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers

User = get_user_model()


# ---------- Input / Output helpers for docs ----------
class UserOutSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    username = serializers.CharField()
    email = serializers.EmailField()


class TokenPairSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    access = serializers.CharField()


class MessageSerializer(serializers.Serializer):
    detail = serializers.CharField()


class LoginResponseSerializer(serializers.Serializer):
    user = UserOutSerializer()
    tokens = TokenPairSerializer()
# ----------------------------------------------------


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        user = User(
            username=validated_data["username"],
            email=validated_data["email"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    # Accept multiple keys for the identifier to be frontend-friendly
    emailOrUsername = serializers.CharField(required=False, allow_blank=True)
    email_or_username = serializers.CharField(required=False, allow_blank=True)
    email = serializers.EmailField(required=False)
    username = serializers.CharField(required=False, allow_blank=True)

    password = serializers.CharField(write_only=True)

    def _pick_identifier(self, attrs):
        return (
            attrs.get("emailOrUsername")
            or attrs.get("email_or_username")
            or attrs.get("email")
            or attrs.get("username")
        )

    def validate(self, attrs):
        identifier = self._pick_identifier(attrs)
        password = attrs.get("password")

        if not identifier or not password:
            raise serializers.ValidationError({"detail": "Email/Username and password required"})

        # Try login with identifier as username first
        user = authenticate(username=str(identifier).strip(), password=password)

        # Fallback: if identifier is email, resolve to username then auth
        if user is None:
            try:
                u = User.objects.get(email__iexact=str(identifier).strip())
                user = authenticate(username=u.username, password=password)
            except User.DoesNotExist:
                pass

        if user is None:
            raise serializers.ValidationError({"detail": "Invalid credentials"})

        attrs["user"] = user
        return attrs
