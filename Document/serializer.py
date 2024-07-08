from rest_framework import serializers
from .models import TableActives


class ListValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableActives
        fields = "__all__"

class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()




