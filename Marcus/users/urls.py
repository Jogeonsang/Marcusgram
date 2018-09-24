from django.urls import path

from . import views

app_name = "users"
urlpatterns = [
    path("explore/", view=views.ExploreUsers.as_view(), name="explore_users"),
    path("<int:user_id>/follow/", view=views.FollowUser.as_view(), name="follow_users"),
    path("<int:user_id>/unfollow/", view=views.UnFollowUser.as_view(), name="unfollow_users"),
    path("<slug:username>/", view=views.UserProfile.as_view(), name="user_profile"),
    path("<slug:username>/followers/", view=views.UserFollowers.as_view(), name="user_followers"),
    path("<slug:username>/following/", view=views.UserFollowing.as_view(), name="user_following"),
]
