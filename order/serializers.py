from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import *
from utils.drf_errors.mixins import FriendlyErrorMessagesMixin


class OrderSerializer(FriendlyErrorMessagesMixin, serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = Order


class ElementSerializer(FriendlyErrorMessagesMixin, serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = Element


class SurfaceFinishSerializer(FriendlyErrorMessagesMixin, serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = SurfaceFinish


class ColorSerializer(FriendlyErrorMessagesMixin, serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = Color

class MaterialSerializer(FriendlyErrorMessagesMixin, serializers.ModelSerializer):
    color = ColorSerializer(many=True, read_only=True)
    surface = SurfaceFinishSerializer(many=True, read_only=True)

    class Meta:
        fields = '__all__'
        model = Material


class TechnologySerializer(FriendlyErrorMessagesMixin, serializers.ModelSerializer):
    material = MaterialSerializer(many=True, read_only=True)

    class Meta:
        fields = '__all__'
        model = Technology
