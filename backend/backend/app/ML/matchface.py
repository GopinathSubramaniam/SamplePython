import face_recognition
from django.core.files.storage import FileSystemStorage

from ..properties import Properties


class MatchFace:

    # Get image list and match with one sent from client side
    def detect_match(self, file, employee_list):
        face_list = []
        for emp in employee_list:
            fs = FileSystemStorage(location=Properties.MEDIA_ROOT)
            know_img = face_recognition.load_image_file(fs.open(emp.imgName))
            know_img_binding = face_recognition.face_encodings(know_img)[0]
            face_list.append(know_img_binding)

        unknown_img = face_recognition.load_image_file(file)
        unknown_img_binding = face_recognition.face_encodings(unknown_img)[0]
        result_idx = self.match_face(unknown_img_binding, face_list)
        return employee_list[result_idx]

    def match_face(self, image, face_list):
        try:
            results = face_recognition.compare_faces(face_list, image, 0.50)
            print('results = ', results)
        except Exception as e:
            print(e)

        return results.index(True)
