from django.urls import path, include, re_path

from .views import *

urlpatterns = [
    path('element/create/', ElementCreateView.as_view(), name='element_create'),
    path('order/create/', OrderCreateView.as_view(), name='order_create'),
    path('technology/list/', TechnologyList.as_view(), name='technology_list'),
]