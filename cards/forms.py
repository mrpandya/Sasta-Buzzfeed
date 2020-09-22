from django import forms
# from betterforms.multiform import MultiModelForm
from cards.models import Title,Question

class titleform(forms.ModelForm):
    class Meta:
        model = Title
        fields = ('title','ans1','ans2','ans3','ans4')
        widgets={
            'title':forms.Textarea(attrs={'rows':1}),
            'ans1':forms.Textarea(attrs={'rows': 1}),
            'ans2':forms.Textarea(attrs={'rows': 1}),
            'ans3':forms.Textarea(attrs={'rows': 1}),
            'ans4':forms.Textarea(attrs={'rows': 1}),
        }


class questionform(forms.ModelForm):
    class Meta:
        model = Question
        fields = ('question','choice1','choice2','choice3','choice4','choice5','choice6')
        widgets={
                'question':forms.Textarea(attrs={'rows':1}),
                'choice1':forms.Textarea(attrs={'rows': 1}),
                'choice2':forms.Textarea(attrs={'rows': 1}),
                'choice3':forms.Textarea(attrs={'rows': 1}),
                'choice4':forms.Textarea(attrs={'rows': 1}),
                'choice5':forms.Textarea(attrs={'rows': 1}),
                'choice6':forms.Textarea(attrs={'rows': 1}),
            }

# class test(MultiModelForm):
#     form_classes={
#         'title':titleform,
#         'question1':questionform,
#         'question2':questionform,
#         'question3':questionform,
#         'question4':questionform,
#         'question5':questionform,
#     }
