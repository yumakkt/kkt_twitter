from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers
from like.views import LikeViewSet

router = routers.DefaultRouter()
router.register(r'', LikeViewSet)

urlpatterns = router.urls
