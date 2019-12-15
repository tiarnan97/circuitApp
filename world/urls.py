from django.conf.urls import url

from world.views import HomePageView
from . import views

urlpatterns =[
    url(r'^$', HomePageView.as_view(), name = 'home'),
    url(r'^abudhabi.html/$', views.abudhabi),
    url(r'^australia.html/$', views.australia),
    url(r'^azerbaijan.html/$', views.azerbaijan),
    url(r'^canada.html/$', views.canada),
    url(r'^france.html/$', views.france),
    url(r'^germany.html/$', views.germany),
    url(r'^hungary.html/$', views.hungary),
    url(r'^italy.html/$', views.italy),
    url(r'^mexico.html/$', views.mexico),
    url(r'^monaco.html/$', views.monaco),
    url(r'^spain.html/$', views.spain),
    url(r'^usa.html/$', views.usa),
]



