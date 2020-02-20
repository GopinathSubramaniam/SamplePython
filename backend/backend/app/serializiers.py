import json

from django.core.files.storage import FileSystemStorage
from rest_framework import serializers

from .ML.matchface import MatchFace
from .models import CustomRes, Employee
from .properties import Properties


class EmployeeSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(allow_blank=True)
    imgName = serializers.CharField(allow_blank=True)
    imgPath = serializers.CharField(allow_blank=True)

    def create(request):
        res = CustomRes()
        try:
            # Upload file
            file = request.FILES['file']
            fs = FileSystemStorage(location=Properties.MEDIA_ROOT)
            filename = fs.save(file.name, file)
            modified_file_name = fs.url(filename)
            # /

            # Create employee
            data = json.loads(request.POST['data'])
            data['imgName'] = modified_file_name
            data['imgPath'] = Properties.MEDIA_SERVER_PATH + modified_file_name
            print('Object Before Save = ', data)
            data = Employee.objects.create(**data)
            emp_obj = EmployeeSerializer(data)
            res.data = emp_obj.data
            # /
        except Exception as e:
            print(e.message, type(e))
            res.setFail(e)
            pass

        res_obj = CustomResSerializer(res)
        return res_obj.data

    def list(self):
        res = CustomRes()
        data = Employee.objects.all().filter(name__isnull=False).order_by('name')
        obj = EmployeeSerializer(data, many=True)
        res.data = obj.data
        res_obj = CustomResSerializer(res)
        return res_obj.data

    def match_face(request):
        res = CustomRes()
        try:
            print('Started')
            list = Employee.objects.all().filter(name__isnull=False).order_by('name')
            file = request.FILES['file']
            emp_obj = MatchFace().detect_match(file, list)
            print('Emp Obj = ', emp_obj)
            obj = EmployeeSerializer(emp_obj)
            res.data = obj.data
        except Exception as e:
            print(e)

        res_obj = CustomResSerializer(res)
        return res_obj.data


class CustomResSerializer(serializers.Serializer):
    statusCode = serializers.CharField(allow_blank=True)
    statusMsg = serializers.CharField(allow_blank=True)
    data = serializers.SerializerMethodField(method_name='getData')

    def getData(self, obj):
        return obj.data
