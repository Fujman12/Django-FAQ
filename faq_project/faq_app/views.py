from django.shortcuts import render
from django.template.loader import render_to_string
from django.http import JsonResponse

from .models import Topic
from .forms import TopicForm
# Create your views here.
def index(request):
    topic = Topic.objects.first()

    topics = Topic.objects.all()
    groups = topic.groups.all()

    context = dict()
    context['groups'] = groups
    context['topics'] = topics
    context['current_topic'] = topic

    return render(request, 'faq_app/index.html', context)

def topic(request,pk):
    topic = Topic.objects.filter(pk = pk).first()

    topics = Topic.objects.all()
    groups = topic.groups.all()

    context = dict()
    context['groups'] = groups
    context['topics'] = topics
    context['current_topic'] = topic

    return render(request, 'faq_app/index.html', context)

def form(request):
    return render(request, 'faq_app/form.html')

def create_topic(request):
    data = dict()

    if request.method == "POST":
        form = TopicForm(request.POST)
        if form.is_valid():
            form.save()
            data['form_is_valid'] = True

            topics = Topic.objects.all()
            data['html_topics_list'] = render_to_string('faq_app/partial/topics_list_options.html', {
                'topics': topics
            })
        else:
            data['form_is_valid'] = False
    else:
        form = TopicForm()

    context = {'form': form}
    data['html_form'] = render_to_string('faq_app/partial/create_topic_form.html',
        context,
        request=request,
    )
    return JsonResponse(data)
