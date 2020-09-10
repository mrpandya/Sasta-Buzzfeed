from django.db import models
import random

# Create your models here.
class Title(models.Model):
    title=models.CharField(max_length=200)
    ans1=models.CharField(max_length=500)
    ans2=models.CharField(max_length=500)
    ans3=models.CharField(max_length=500)
    ans4=models.CharField(max_length=500)
    sol=models.IntegerField(default=0)
    def final_answer(self,vote):
        self.sol+=vote
        print(self.sol)
        return self.sol
    def sel_answer(self):
        self.sol=random.randrange(1,5)
        if(self.sol==1):
            return self.ans1
        elif self.sol==2:
            return self.ans2
        elif self.sol==3:
            return self.ans3
        else:
            return self.ans4
    # def __str__(self):
        # return self.title,self.id


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



