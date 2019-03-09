from kktTwitterSV.settings.base import *

import sys

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '&u0z$mjo$1#c5lc-jtlu58t*qh&f43h-ytigq^6%ghy&ty!0*d'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'kkttwitter_db', #　作成したデータベース名
        'USER': 'kkttwitter', # ログインユーザー名
        'PASSWORD': 'Zaq12wsxcde3',
        'HOST': 'localhost',
        'PORT': '3306',
        'ATOMIC_REQUESTS': True,
    },
}

if 'test' in sys.argv:
    DATABASES['default'] = {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'kkttwitter_test_db', #　作成したデータベース名
    }

REST_FRAMEWORK["DEFAULT_PERMISSION_CLASSES"] = ('rest_framework.permissions.AllowAny',)