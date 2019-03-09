from rest_framework import serializers
from retweet.models import ReTweet

class ReTweetSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = ReTweet
        fields = '__all__'