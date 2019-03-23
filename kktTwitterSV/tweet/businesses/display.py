
def tweet_list(tweet_queryset):
    return [tweet_dict(tweet_model) for tweet_model in tweet_queryset]

def tweet_dict(tweet_model):
    return {
        "id":tweet_model.id,
        "user": {
            "id": tweet_model.tweeted_by.id,
            "user_id": tweet_model.tweeted_by.user_id,
        },
        "mutter":tweet_model.mutter, 
        "likes_count":tweet_model.likes.count(), 
        "retweets_count":tweet_model.retweets.count()
    }