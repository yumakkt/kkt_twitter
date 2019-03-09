from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers
from follow.views import FollowViewSet

router = routers.DefaultRouter()
router.register(r'', FollowViewSet)

urlpatterns = router.urls