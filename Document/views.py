from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ListValueSerializer
from .models import TableActives

# Create your views here.

class DocumentView(viewsets.ModelViewSet):
    serializer_class = ListValueSerializer
    queryset = TableActives.objects.all()

