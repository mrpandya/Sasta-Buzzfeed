from django.db import models

# Create your models here.
class Title(models.Model):
    title=models.CharField(max_length=200)
    ans1=models.CharField(max_length=500)
    ans2=models.CharField(max_length=500)
    ans3=models.CharField(max_length=500)
    ans4=models.CharField(max_length=500)
    def __str__(self):
        return self.title


class Question(models.Model):
    title=models.ForeignKey(Title,on_delete=models.CASCADE)
    question=models.CharField(max_length=100)
    choice1=models.CharField(max_length=100)
    choice2=models.CharField(max_length=100)
    choice3=models.CharField(max_length=100)
    choice4=models.CharField(max_length=100)
    choice5=models.CharField(max_length=100)
    choice6=models.CharField(max_length=100)
    vote=models.IntegerField(default=0)
    def __str__(self):
        return self.question



