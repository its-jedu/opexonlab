from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers

User = get_user_model()

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
    email_or_username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        key = attrs["email_or_username"]
        pwd = attrs["password"]
        # try username first
        user = authenticate(username=key, password=pwd)
        if user is None:
            # fallback: treat key as email → find username
            try:
                u = User.objects.get(email=key)
                user = authenticate(username=u.username, password=pwd)
            except User.DoesNotExist:
                pass
        if user is None:
            raise serializers.ValidationError("Invalid credentials.")
        attrs["user"] = user
        return attrs
