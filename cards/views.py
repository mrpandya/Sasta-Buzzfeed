from django.shortcuts import render,redirect
from django.views import generic
from .models import Title
from django.views.generic import CreateView
from django.urls import reverse_lazy
from . import forms

# Create your views here.
class IndexView(generic.ListView):
    template_name='cards/index.html'
    context_object_name='title'
    def get_queryset(self):
        return Title.objects.all()

class HomeView(generic.ListView):
    template_name='cards/home.html'
    context_object_name='title'
    def get_queryset(self):
        return Title.objects.all()[::-1][:5]

class QuestionView(generic.DetailView):
    template_name='cards/question.html'
    context_object_name='question_list'
    model=Title

# class Create(CreateView):
#     template_name='cards/create.html'
    

def Create(request):
    title=forms.titleform()
    question1=forms.questionform(prefix="question1")
    question2=forms.questionform(prefix="question2")
    question3=forms.questionform(prefix="question3")
    question4=forms.questionform(prefix="question4")
    question5=forms.questionform(prefix="question5")

    if request.method == "POST":
        title=forms.titleform(request.POST)
        question1=forms.questionform(request.POST,prefix="question1")
        question2=forms.questionform(request.POST,prefix="question2")
        question3=forms.questionform(request.POST,prefix="question3")
        question4=forms.questionform(request.POST,prefix="question4")
        question5=forms.questionform(request.POST,prefix="question5")

        if title.is_valid() and question1.is_valid() and question2.is_valid() and question3.is_valid() and question4.is_valid() and question5.is_valid():
            print("hello")
            t=title.save()
            q1=question1.save(commit=False)
            q2=question2.save(commit=False)
            q3=question3.save(commit=False)
            q4=question4.save(commit=False)
            q5=question5.save(commit=False)
            q1.title=t
            q1.save()
            q2.title=t
            q2.save()
            q3.title=t
            q3.save()
            q4.title=t
            q4.save()
            q5.title=t
            q5.save()


    return render(request, 'cards/create.html', {'title': title, 'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4,'question5': question5})


