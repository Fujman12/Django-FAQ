from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^(?P<pk>[0-9]+)$', views.topic, name = 'topic'),
    url(r'form', views.form, name ='form'),
    url(r'create_topic', views.create_topic, name='create_topic')
]
