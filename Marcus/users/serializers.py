from rest_framework import serializers
from . import models
from Marcus.images import serializers as images_serializers


class ExploreUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = (
            'profile_image',
            'username',
            'name',
        )
