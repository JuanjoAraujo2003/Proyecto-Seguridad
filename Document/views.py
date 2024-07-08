from django.shortcuts import render
from rest_framework import viewsets, status
from .serializer import ListValueSerializer
from .models import TableActives
from .serializer import FileUploadSerializer
import pandas as pd
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class DocumentView(viewsets.ModelViewSet):
    serializer_class = ListValueSerializer
    queryset = TableActives.objects.all()

class FileUploadView(APIView):
    def post (self, request, *args, **kwargs):
        serializer = FileUploadSerializer(data=request.data)
        if serializer.is_valid():
            file = serializer.validated_data['file']
            df = pd.read_csv(file)
            for index, row in df.iterrows():
                category = row.get("category", "vacio")
                name = row.get("name", "vacio")
                description = row.get("description", "vacio")
                value = row.get("value", "vacio")
                risk = row.get("risk", "vacio")
                TableActives.objects.create(
                    category=category, name=name, description=description, value=value, risk=risk
                )
            return Response({"message": "Datos Guardados"}, status=status.HTTP_201_CREATED)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




