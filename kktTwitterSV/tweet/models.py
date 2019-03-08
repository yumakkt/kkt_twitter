from django.db import models
from user.models import User

# Create your models here.
class Tweet(models.Model):

    # つぶやき
    mutter = models.CharField(verbose_name="つぶやき", max_length=140)
    # つぶやかれた時
    tweeted_at = models.DateTimeField(verbose_name="つぶやきタイミング", auto_now_add=True)
    # つぶやいた人
    tweeted_by = models.ForeignKey(User, verbose_name="ユーザー", on_delete=models.CASCADE, db_column="user_id", related_name='tweets')
    # つぶやき先
    tweeted_to = models.ForeignKey("self", on_delete=models.CASCADE, db_column="tweetwd_to", related_name='tweeted_by_s', verbose_name="つぶやき先", null=True)

    

