from django.db import models
from user.models import User
from tweet.models import Tweet

# Create your models here.
class ReTweet(models.Model):
    # つぶやき
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, db_column="tweet_id", related_name='retweets', verbose_name="つぶやき")
    # リツイートされた時
    retweeted_at = models.DateTimeField(verbose_name="リツイートタイミング", auto_now_add=True)
    # リツイートした人
    retweeted_by = models.ForeignKey(User, verbose_name="リツイートユーザー", on_delete=models.CASCADE, db_column="user_id", related_name='retweets')
