from . import accessor
from .import display

# view -> main -> db_accessor -> model

def list_own_timeline(user_id):
    # フォローしているユーザーidのリスト取得
    following_user_ids = accessor.list_following_user_ids(user_id)
    # ユーザーのIDを取得する。
    own_timeline = accessor.list_following_user_tweets(following_user_ids)
    return ([display.tweet_dict(timeline_item) for timeline_item in own_timeline])

def retrieve_tweet_by_id(tweet_id):
    return display.tweet_dict(accessor.retrieve_tweet_by_id((tweet_id)))


