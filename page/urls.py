from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('gallery/', views.gallery, name='gallery'),
    path('mint/', views.mint, name='mint'),
]