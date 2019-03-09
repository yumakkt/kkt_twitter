from . import accessor
from .import display

# view -> main -> db_accessor -> model

def list_own_timeline(user_id):
    # フォローしているユーザーidのリスト取得
    following_user_ids = accessor.list_following_user_ids(user_id)
    # ユーザーのIDを取得する。
    own_timeline = accessor.list_following_user_tweets(following_user_ids)
    return display.tweet_list(own_timeline)

def retrieve_tweet_by_id(tweet_id):
    return display.tweet_dict(accessor.retrieve_tweet_by_id((tweet_id)))

def tweet_my_mutter(user_id, mutter):
    created_tweet = accessor.create_tweet(user_id, mutter)
    return display.tweet_dict(created_tweet)

def fix_my_mutter(tweet_id, mutter):
    updated_tweet = accessor.update_tweet(tweet_id, mutter)
    return display.tweet_dict(updated_tweet)