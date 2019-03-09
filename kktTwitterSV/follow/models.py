from django.db import models
from user.models import User

# Create your models here.
class Follow(models.Model):
    # フォローしている人
    to = models.ForeignKey(User, verbose_name="フォロー", on_delete=models.CASCADE, db_column="follow_to", related_name='follow')
    # フォローされている人
    by = models.ForeignKey(User, verbose_name="フォロワー", on_delete=models.CASCADE, db_column="followed_by", related_name='followers')
    # フォローし始めた日付
    started_at = models.DateTimeField(verbose_name="フォロータイミング", auto_now_add=True)
    
    class Meta:
        verbose_name = 'follow'
        verbose_name_plural = 'follows'