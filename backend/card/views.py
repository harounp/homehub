from django.shortcuts import render
from django.http import JsonResponse
from models import Card

# Create your views here.
def new_card(request):
  data = request.GET.get("text","")
  Card.create(data)
  return JsonResponse({})