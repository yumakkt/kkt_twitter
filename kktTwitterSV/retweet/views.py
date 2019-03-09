from django.shortcuts import render

# Create your views here.
from retweet.models import ReTweet
from retweet.serializers import ReTweetSerializer
from rest_framework import viewsets
# Create your views here.
# tweet一覧（自分がフォローしてるユーザーの）
# 

class ReTweetViewSet(viewsets.ModelViewSet):
    
    queryset=ReTweet.objects.all()
    serializer_class=ReTweetSerializer