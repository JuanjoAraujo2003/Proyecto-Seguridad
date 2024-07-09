import csv
import io

from django.shortcuts import render
from rest_framework import viewsets, status
from .serializer import ListValueSerializer
from .models import TableActives
from .serializer import FileUploadSerializer
import pandas as pd
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

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

def export_csv(request):
    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = 'attachment; filename="Datos.csv"'
    buffer = io.StringIO()
    writer_csv = csv.writer(buffer)
    writer_csv.writerow(["Category", "Name", "Description", "Value", "Risk"])

    for cellvalue in TableActives.objects.all():
        writer_csv.writerow(
        [cellvalue.category, cellvalue.name, cellvalue.description, cellvalue.value, cellvalue.risk])

    response.write(buffer.getvalue().encode('utf-8-sig'))

    return response




