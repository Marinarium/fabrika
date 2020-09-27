import json

from django.urls import reverse_lazy

from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase

from .models import User


class UserAPIViewTestCase(APITestCase):

    def setUp(self):
        self.username = 'john'
        self.email = 'john@snow.com'
        self.password = 'you_know_nothing'
        self.user = User.objects.create_user(self.username, self.email, self.password)
        self.token = Token.objects.create(user=self.user)
        self.api_authentication()

    def api_authentication(self):
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)

    def test_refresh_sessoin_view(self):
        response = self.client.get(reverse_lazy('refresh_sessoin_view'))
        self.assertEqual(200, response.status_code)

    def test_rest_login(self):
        response = self.client.post(reverse_lazy('rest_login'), {
            'email': self.email,
            'password': self.password
        })
        self.assertEqual(200, response.status_code)

    def test_rest_user_details(self):
        response = self.client.get(reverse_lazy('rest_user_details'))
        self.assertEqual(200, response.status_code)

    def test_rest_password_reset(self):
        response = self.client.post(reverse_lazy('rest_password_reset'), {
            'email': self.email
        })
        self.assertEqual(200, response.status_code)
        response = self.client.post(reverse_lazy('rest_password_reset'))
        self.assertEqual(400, response.status_code)

    def test_rest_password_reset(self):
        response = self.client.post(reverse_lazy('rest_password_reset'), {
            'email': self.email
        })
        self.assertEqual(200, response.status_code)
        response = self.client.post(reverse_lazy('rest_password_reset'))
        self.assertEqual(400, response.status_code)


