from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'faq_app/index.html')
