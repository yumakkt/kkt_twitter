from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers
from retweet.views import ReTweetViewSet

router = routers.DefaultRouter()
router.register(r'', ReTweetViewSet)

urlpatterns = router.urls