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
    email = serializers.EmailField(required=False, allow_blank=True)
    username = serializers.CharField(required=False, allow_blank=True)
    password = serializers.CharField(write_only=True)

    def _pick_identifier(self, attrs):
        # Get the first non-empty identifier field
        for field_name in ['emailOrUsername', 'email_or_username', 'email', 'username']:
            value = attrs.get(field_name)
            if value and str(value).strip():
                return str(value).strip()
        return None

    def validate(self, attrs):
        identifier = self._pick_identifier(attrs)
        password = attrs.get("password")

        if not identifier:
            raise serializers.ValidationError({"detail": "Email or username is required"})
        
        if not password:
            raise serializers.ValidationError({"detail": "Password is required"})

        # Get the request from context for authentication
        request = self.context.get('request')

        # First try authenticating with the identifier as username
        user = authenticate(
            request=request, 
            username=identifier, 
            password=password
        )

        # If that fails, try to find by email and authenticate with username
        if user is None and '@' in identifier:
            try:
                # Look for user by email (case-insensitive)
                user_by_email = User.objects.get(email__iexact=identifier)
                user = authenticate(
                    request=request,
                    username=user_by_email.username,
                    password=password
                )
            except User.DoesNotExist:
                # User doesn't exist with this email
                pass
            except User.MultipleObjectsReturned:
                # Handle case where multiple users have the same email
                # Get the first active user
                users = User.objects.filter(email__iexact=identifier, is_active=True)
                if users.exists():
                    user_by_email = users.first()
                    user = authenticate(
                        request=request,
                        username=user_by_email.username,
                        password=password
                    )

        if user is None:
            raise serializers.ValidationError({"detail": "Invalid credentials"})

        if not user.is_active:
            raise serializers.ValidationError({"detail": "User account is disabled"})

        attrs["user"] = user
        return attrs