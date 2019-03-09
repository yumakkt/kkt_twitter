from django.shortcuts import render

# Create your views here.
from follow.models import Follow
from follow.serializers import FollowSerializer
from rest_framework import viewsets
# Create your views here.
# tweet一覧（自分がフォローしてるユーザーの）
# 

class FollowViewSet(viewsets.ModelViewSet):
    
    queryset=Follow.objects.all()
    serializer_class=FollowSerializer