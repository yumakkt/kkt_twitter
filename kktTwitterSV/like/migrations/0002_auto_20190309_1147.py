# Generated by Django 2.1.7 on 2019-03-09 02:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('like', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='like',
            options={'verbose_name': 'like', 'verbose_name_plural': 'likes'},
        ),
    ]