from django.urls import path

from .views import RefreshSessionView

urlpatterns = [
    path('refresh-session/', RefreshSessionView.as_view(), name='refresh_sessoin_view'),
]
