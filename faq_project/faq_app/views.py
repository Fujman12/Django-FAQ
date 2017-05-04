from django.shortcuts import render, redirect, get_object_or_404
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.core.urlresolvers import reverse

from .models import Topic, Group, Question
from .forms import TopicForm, AnswerForm
# Create your views here.
def index(request):

    return redirect('topic', pk=1)

def topic(request,pk):
    topic = Topic.objects.filter(pk = pk).first()

    topics = Topic.objects.all()
    groups = topic.groups.all()

    context = dict()
    context['groups'] = groups
    context['topics'] = topics
    context['current_topic'] = topic

    return render(request, 'faq_app/index.html', context)


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

def create_group(request, pk):
    topic = Topic.objects.filter(pk=pk).first()

    group = Group(topic = topic)
    group.save()

    return redirect('topic', pk=pk)

def delete_group(request, pk):
    group = get_object_or_404(Group, pk=pk)
    group.delete()

    return redirect('topic', pk=group.topic.pk)

def update_group(request, pk, action):
    group = get_object_or_404(Group, pk=pk)

    if action == "activate":
        group.status = Group.ACTIVE
    elif action == "deactivate":
        group.status = Group.INACTIVE
    else:
        pass

    group.save()

    return redirect('topic', pk=group.topic.pk)

def group_questions(request, pk):
    group = get_object_or_404(Group, pk=pk)

    data = dict()

    questions = group.questions.all()
    questions_list = []
    for question in questions:
        data['value'] = question.text
        data['id'] = question.pk
        questions_list.append(data.copy())

    return JsonResponse(questions_list, safe=False)

def create_question(request, pk):
    group = get_object_or_404(Group, pk=pk)
    q = Question(group=group, text = request.POST["text"])
    q.save()

    data = dict()
    data["pk"] = q.pk

    return JsonResponse(data)

def delete_question(request, pk):
    q = get_object_or_404(Question, pk=pk)

    q.delete()

    return JsonResponse({'none':'none'})

def create_answer(request,pk):
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
        form = AnswerForm()

    context = {'form': form, 'pk':pk }

    data['html_form'] = render_to_string('faq_app/partial/create_answer_form.html',
        context,
        request=request,
    )
    return JsonResponse(data)
