from django.db import models


# Create your models here.
class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=True)
    imgName = models.CharField(max_length=50, null=True)
    imgPath = models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name = "Employee"
        verbose_name_plural = "Employees"


# Create common methods to reuse
class CustomRes:
    statusCode = 'OK'
    statusMsg = ''
    data = {}

    def setFail(self, msg):
        self.statusCode = 'FAIL'
        self.statusMsg = msg
