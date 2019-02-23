from rest_framework import serializers
from user.models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields =  '__all__'
        extra_kwargs = {
            'password': {'write_only': True, 'required': False},
            'email': {'required': False},
            'user_id': {'required': False}
        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            instance.set_password(validated_data.pop('password'))
        return super().update(instance, validated_data)
        
