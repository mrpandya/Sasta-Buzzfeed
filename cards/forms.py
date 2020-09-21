from django import forms
# from betterforms.multiform import MultiModelForm
from cards.models import Title,Question

class titleform(forms.ModelForm):
    class Meta:
        model = Title
        fields = ('title','ans1','ans2','ans3','ans4')


class questionform(forms.ModelForm):
    class Meta:
        model = Question
        fields = ('question','choice1','choice2','choice3','choice4','choice5','choice6')

# class test(MultiModelForm):
#     form_classes={
#         'title':titleform,
#         'question1':questionform,
#         'question2':questionform,
#         'question3':questionform,
#         'question4':questionform,
#         'question5':questionform,
#     }
