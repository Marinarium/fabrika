from __future__ import unicode_literals

from django.http import HttpResponse
from django.views.generic import TemplateView
from rest_framework.permissions import IsAuthenticated

from rest_framework import generics
import requests
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token

from .serializers import *
import json
import os


def request_transform(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    step_file = '{0}.step'.format(body_data['fileName'])
    stl_file = 'media/{0}.stl'.format(body_data['fileName'])
    with open(step_file, 'w') as file:
        file.write(body_data['file'])
    files = {'files': open(step_file)}
    headers = {'Cookie': 'access_token=Aid9zixc9hKxS129jdsjJhALs56dqIKctMc'}
    resp = requests.request('POST', 'http://80.87.195.49:52939/step:transform', headers=headers, files=files)
    os.remove(step_file)
    with open(stl_file, 'w') as file:
        file.write(resp.text)
    return HttpResponse("Hello")


class RefreshSessionView(generics.GenericAPIView):
    """
    get:
    Refresh session

    ---
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = UserDetailsSerializer
    queryset = ''

    def get(self, request, format=None):
        Token.objects.filter(user=request.user).delete()
        serializer = self.serializer_class(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
