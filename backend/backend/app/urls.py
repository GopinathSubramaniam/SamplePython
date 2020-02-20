from django.conf.urls import url, include
from rest_framework import routers
from .views import EmployeeViewSet

#User URL's
empUrls = [
   url('list/', EmployeeViewSet.list),
   url('create/', EmployeeViewSet.post),
   url('matchFace/', EmployeeViewSet.match_face)
]

urlpatterns = [
   url('emp/', include(empUrls)),
]