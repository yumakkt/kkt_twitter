from django.db import models
from django.core.mail import send_mail
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils import timezone
from django.contrib.auth.base_user import BaseUserManager
  
  
class UserManager(BaseUserManager):
    """ユーザーマネージャー."""
  
    use_in_migrations = True
  
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The given email must be set')
        # メールのチェック
        email = self.normalize_email(email)
  
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    # 外部から使用するcreate_user
    # パスワードなしのユーザーはあかん
    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)
  
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
  
        return self._create_user(email, password, **extra_fields)
  
  
class User(AbstractBaseUser, PermissionsMixin):
    """ユーザーモデル."""
  
    email = models.EmailField('メールアドレス', unique=True)
    user_id = models.CharField('ユーザーID', max_length=30, unique=True)
    is_staff = True

    is_active = models.BooleanField(
        '使用可能なユーザー',
        default=True,
    )
    joined_at = models.DateTimeField('登録日', default=timezone.now)
  
    objects = UserManager()
  
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
  
    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'

