from rest_framework import serializers
from tweet.models import Tweet


class TweetSerizlizer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Tweet
        fields = '__all__'
