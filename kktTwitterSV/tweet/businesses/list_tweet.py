

def list_tweet(view, request):
#     """
#     tweet一覧の取得API
#     アクセスユーザーがフォローしているユーザーのツイートをすべて取得する。
#     (リツイートはリツイートの場所で取得する。)    
#     それぞれのいいね数とリツイート数、コメント数はほしい。
#     順番は時系列順に並べる。
#     すべて、時間の降順に並べる。
#     """
    pass
#     # フォロワーのリストをすべて取得する。
#     following_user_ids = Follow.objects.filter(by=request.user.id).values_list('to', flat=True)
    
#     # ツイートの全件リストを取得する。いいねとリツイート付き
#     user_following_tweets = Tweet.objects.filter(tweeted_by__in=following_user_ids).order_by("tweeted_at").reverse().prefetch_related('like', "retweet")

#     # それぞれのlikeとretweetを数えたものを格納
    
#     # return 