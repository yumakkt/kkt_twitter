

def tweet_dict(tweet_model):
    return {
        "mutter":tweet_model.mutter, 
        "likes_count":tweet_model.likes.count(), 
        "retweets_count":tweet_model.retweets.count()
    }