from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class HomePageView(TemplateView):
    template_name = 'mapTest.html'


def abudhabi(request):
    return render(request, 'abudhabi.html')


def australia(request):
    return render(request, 'australia.html')


def azerbaijan(request):
    return render(request, 'azerbaijan.html')


def canada(request):
    return render(request, 'canada.html')


def france(request):
    return render(request, 'france.html')


def germany(request):
    return render(request, 'germany.html')


def hungary(request):
    return render(request, 'hungary.html')


def italy(request):
    return render(request, 'italy.html')


def mexico(request):
    return render(request, 'mexico.html')


def monaco(request):
    return render(request, 'monaco.html')


def spain(request):
    return render(request, 'spain.html')


def usa(request):
    return render(request, 'usa.html')
