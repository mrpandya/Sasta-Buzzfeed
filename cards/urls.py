from django.urls import path
from . import views

app_name='buzz'
urlpatterns=[
    path('',views.IndexView.as_view(),name="index"),
    path('home',views.HomeView.as_view(),name="home"),
    path('home/<int:pk>',views.QuestionView.as_view(),name="question"),
]