from django.db import models

class Card(models.Model):
  title = models.CharField(max_length=50)
  url = models.URLField(max_length = 200) 
  icon = models.CharField(max_length=50)