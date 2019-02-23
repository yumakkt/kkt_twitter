from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from user.models import User
from user.serializers import UserSerializer
from user.utils import IsMyself, kkt_twitter_jwt_payload_handler
from rest_framework_jwt.utils import jwt_encode_handler


# Create your views here.

class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def get_permissions(self):
        """
        認証メソッドをオーバーライド（settingsは読まなくなる。）
        """
        if self.action == 'list':
            # リスト（ユーザーのリストは管理者のみ叩ける。）
            permission_classes = (IsAdminUser,) # IsAdminUser
        elif self.action in ('update', 'partial_update', 'delete', 'retrieve'):
            # 更新・削除（自分のみできる。）
            permission_classes = (IsMyself,)
        else:
            permission_classes = (AllowAny,)
        return [permission() for permission in permission_classes]
        
    def update(self, request, *args, **kwargs):
        updated_response = super().update(request, *args, **kwargs)
        # メールアドレスが変更された時のためにnew_toknを返す。
        updated_response.data['new_token'] = jwt_encode_handler(kkt_twitter_jwt_payload_handler(request.user))
        return updated_response 

    
        