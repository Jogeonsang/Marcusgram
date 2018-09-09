from django.urls import path
from . import views

app_name = "images"
urlpatterns = [
    path('', view=views.Feed.as_view(), name="feed"),
    path("<int:id>/like/", view=views.LikeImage.as_view(), name="like_image"),
]


#0 create the url and the view
#1 take the id from the url
#2 we want to find an image with this id
#3 we want to create a like for that image