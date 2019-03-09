from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from user.models import User
from user.serializers import UserSerializer
from user.utils import IsMyself, kkt_twitter_jwt_payload_handler
from rest_framework_jwt.utils import jwt_encode_handler
from tweet.models import Tweet
from tweet.serializers import TweetSerizlizer
from rest_framework.response import Response
from tweet.businesses.main import (
    list_own_timeline,
    retrieve_tweet_by_id,
)
# Create your views here.
# tweet一覧（自分がフォローしてるユーザーの）
# リストのフィルタリング
# 次はページネーション

class TweetViewSet(viewsets.ModelViewSet):
    
    queryset=Tweet.objects.all()
    serializer_class=TweetSerizlizer

    def list(self, request):
        return Response(list_own_timeline(request.user.id))
    
    def retrieve(self, request, pk=None):
        return Response(retrieve_tweet_by_id(pk))
    
    def create(self, request):
        return Response(retrieve_tweet_by_id(pk))
    
    def update(self, request, pk=None):
        request.user.id
        request.data
        return Response(retrieve_tweet_by_id(pk))
    
