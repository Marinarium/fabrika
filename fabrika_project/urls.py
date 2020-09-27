from django.urls import path, include, re_path
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from user.views import request_transform
from user.views import UserLoginView

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


admin.site.site_header = 'fabrika.cloud'

schema_view = get_schema_view(
   openapi.Info(
      title='fabrika.cloud API',
      default_version='v1'
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls')),
    path('order/', include('order.urls')),
    re_path(r'^$', TemplateView.as_view(template_name='index.html'), name='index_view'),
    # re_path(r'^api-auth/login/$', include('rest_framework.urls'), name='auth_login'),
    re_path(r'^transform/$', request_transform, name=None),
    re_path(r'^calculation/$', TemplateView.as_view(template_name='index.html'), name=None),
    re_path(r'^login/$', TemplateView.as_view(template_name='index.html'), name='login'),
    re_path(r'^api-auth/login', UserLoginView.as_view(), name='auth_login'),
    re_path(r'^forgot-password/$', TemplateView.as_view(template_name='index.html'), name=None),
    re_path(r'^registration/$', TemplateView.as_view(template_name='index.html'), name='registration'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)