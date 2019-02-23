from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers
from user.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'', UserViewSet)

urlpatterns = [
    path('auth/', obtain_jwt_token),
] 

urlpatterns += router.urls