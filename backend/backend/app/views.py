from django.shortcuts import render
from rest_framework import viewsets
from .serializiers import EmployeeSerializer
from django.http import JsonResponse

# Create your views here.

class EmployeeViewSet(viewsets.ViewSet):

    def list(self):
        data = EmployeeSerializer.list(self)
        return JsonResponse(data, safe=False)

    def post(request):
        res = EmployeeSerializer.create(request)
        return JsonResponse(res)

    def match_face(request):
        res = EmployeeSerializer.match_face(request)
        return JsonResponse(res, safe=False)
