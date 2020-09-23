from django.urls import path, include, re_path

from .views import RefreshSessionView

urlpatterns = [
    path('refresh-session/', RefreshSessionView.as_view(), name='refresh_sessoin_view'),
]