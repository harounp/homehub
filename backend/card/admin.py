from django.contrib import admin
from .models import Card

class CardAdmin(admin.ModelAdmin):
  list_display = ('title', 'url', 'icon')

admin.site.register(Card, CardAdmin)