import datetime
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
from .managers import GroupManager
# Create your models here.


class Topic(models.Model):
    name = models.CharField("Topic name", max_length = 150)

    def __str__(self):
        return self.name

class Group(models.Model):
    ACTIVE = 1
    INACTIVE = 0
    STATUS_CHOICES = (
        (ACTIVE,    _('Active')),
        (INACTIVE,  _('Inactive')),
    )

    name = models.CharField("Group name", max_length = 150)
    topic = models.ForeignKey(Topic, verbose_name = "Topic", related_name = 'groups')
    status = models.CharField(max_length = 1, choices = STATUS_CHOICES, default =ACTIVE)

    objects = GroupManager()

    def __str__(self):
        return self.name

class Question(models.Model):
    text = models.CharField("Question text", max_length = 150)
    group = models.ForeignKey(Group, verbose_name = "Group", related_name = 'questions')

    def __str__(self):
        q_str = "{} {}".format(self.group, self.text)
        return q_str


class Answer(models.Model):
    text = models.CharField("Answer text", max_length = 150)
    group = models.ForeignKey(Group, verbose_name = "Group", related_name = 'answers')

    def __str__(self):
        a_str = "{} {}".format(self.group, self.text)
