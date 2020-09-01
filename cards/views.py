from django.shortcuts import render
from django.views import generic
from .models import Title

# Create your views here.
class IndexView(generic.ListView):
    template_name='cards/index.html'
    context_object_name='title'
    def get_queryset(self):
        return Title.objects.all()