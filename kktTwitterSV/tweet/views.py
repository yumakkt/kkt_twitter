from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from user.models import User
from user.serializers import UserSerializer
from user.utils import IsMyself, kkt_twitter_jwt_payload_handler
from rest_framework_jwt.utils import jwt_encode_handler
from tweet.businesses.list_tweet import list_tweet
from tweet.models import Tweet
from tweet.serializers import TweetSerizlizer
# Create your views here.
# tweet一覧（自分がフォローしてるユーザーの）
# 

class TweetViewSet(viewsets.ModelViewSet):
    
    queryset=Tweet.objects.all()
    serializer_class=TweetSerizlizer