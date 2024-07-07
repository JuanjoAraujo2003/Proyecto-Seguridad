from django.urls import path, include
from rest_framework import routers
from Document import views

router = routers.DefaultRouter()
router.register(r'value', views.DocumentView, "value")

urlpatterns = [
    path("api/v1/", include(router.urls))
]
