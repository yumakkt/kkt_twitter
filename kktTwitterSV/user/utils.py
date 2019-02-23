from rest_framework_jwt.utils import jwt_payload_handler
from rest_framework.permissions import IsAdminUser

def kkt_twitter_jwt_payload_handler(user):
    payload = jwt_payload_handler(user)
    payload["user_created_id"] = user.user_id
    return payload

class IsMyself(IsAdminUser):
    def has_permission(self, request, view):
        return int(view.kwargs['pk']) == request.user.id