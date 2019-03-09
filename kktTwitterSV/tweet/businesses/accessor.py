
from follow.models import Follow
from tweet.models import Tweet

def list_following_user_ids(user_id):
    return Follow.objects.filter(by=user_id).values_list('to', flat=True)

def list_following_user_tweets(following_user_ids):
    return Tweet.objects.filter(tweeted_by__in=following_user_ids).order_by("-tweeted_at").prefetch_related("likes", "retweets")


def retrieve_tweet_by_id(tweet_id):
    return Tweet.objects.get(pk=tweet_id)