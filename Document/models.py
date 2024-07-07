from django.db import models


# Create your models here.

class TableActives(models.Model):
    category = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=200)
    value = models.TextField(max_length=10)
    risk = models.TextField(max_length=10)

    def __str__(self):
        return self.name
