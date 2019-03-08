from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers
from tweet.views import TweetViewSet

router = routers.DefaultRouter()
router.register(r'', TweetViewSet)

urlpatterns = router.urls
