from django.urls import path, include
from rest_framework import routers
from Document import views
from .views import FileUploadView

router = routers.DefaultRouter()
router.register(r'value', views.DocumentView, "value")

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("api/upload/", FileUploadView.as_view(), name="file-upload")
]
