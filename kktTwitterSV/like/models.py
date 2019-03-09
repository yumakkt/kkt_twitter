from django.db import models
from user.models import User
from tweet.models import Tweet

# Create your models here.

class Like(models.Model):
    # つぶやき
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, db_column="tweet_id", related_name='likes', verbose_name="つぶやき")
    # Likeされた時
    liked_at = models.DateTimeField(verbose_name="いいねタイミング", auto_now_add=True)
    # likeした人
    liked_by = models.ForeignKey(User, verbose_name="Likeユーザー", on_delete=models.CASCADE, db_column="user_id", related_name='likes')
    
    
    class Meta:
        verbose_name = 'like'
        verbose_name_plural = 'likes'