from rest_framework import serializers
from like.models import Like

class LikeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Like
        fields = '__all__'