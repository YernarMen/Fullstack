import io
from rest_framework import serializers
from .models import User
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

class TeacherSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = User
        fields = "__all__"
