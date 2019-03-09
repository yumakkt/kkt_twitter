from django.shortcuts import render

# Create your views here.
from like.models import Like
from like.serializers import LikeSerializer
from rest_framework import viewsets
# Create your views here.
# tweet一覧（自分がフォローしてるユーザーの）
# 

class LikeViewSet(viewsets.ModelViewSet):
    
    queryset=Like.objects.all()
    serializer_class=LikeSerializer