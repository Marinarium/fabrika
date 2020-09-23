from __future__ import unicode_literals

from django.db.models.signals import post_save
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save

from timezone_field import TimeZoneField
from django_resized import ResizedImageField

class User(AbstractUser):
    CURRENCY = (
        ('usa', 'USD Dollars'),
    )
    currency = models.CharField(_('Currency'), max_length=255, null=True, blank=True, choices=CURRENCY, default='usa')
    avatar = ResizedImageField(_('Logo'), size=[150, 150], crop=['middle', 'center'], upload_to='logo', blank=True, null=True,)

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')
