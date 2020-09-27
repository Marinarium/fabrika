from __future__ import unicode_literals

from django.contrib.auth import authenticate
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
import requests
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token

from .serializers import *
import json
import os


class UserLoginView(generics.GenericAPIView):
    def post(self, request):
        # new_user = User.objects.create(username='root')
        # new_user.set_password('123123123d')
        # new_user.save()

        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        username = body_data['username']
        password = body_data['password']

        user = authenticate(username=username, password=password)
        message = ''
        auth_token = ''
        if user:
            auth_token = str(Token.objects.get_or_create(user=user)[0])
            request.session['auth_token'] = auth_token
        else:
            message = 'Неверный логин или пароль'
        return HttpResponse(json.dumps({'auth_token': auth_token, 'message': message}), content_type="application/json")


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
