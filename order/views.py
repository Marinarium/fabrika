from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import FileUploadParser

from .models import *
from .serializers import *

class OrderCreateView(CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Order.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            result = serializer.save()
            serializer = self.serializer_class(result)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ElementCreateView(CreateAPIView):
    serializer_class = ElementSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Element.objects.all()
    parser_class = (FileUploadParser,)

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            result = serializer.save()
            serializer = self.serializer_class(result)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TechnologyList(ListAPIView):
    serializer_class = TechnologySerializer
    permission_classes = (IsAuthenticated,)
    queryset = Technology.objects.all()
