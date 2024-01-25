# import cv2

# cascade_path = '/usr/share/opencv4/haarcascades/haarcascade_frontalface_default.xml'

# face_cascade = cv2.CascadeClassifier(cascade_path)

# video = cv2.VideoCapture(0)

# while True:
#     ret, frame = video.read()
#     gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
#     faces = face_cascade.detectMultiScale(gray)
#     for (x, y, w, h) in faces:
#         cv2.rectangle(frame, (x,y), (x+w,y+h), (0,255,0), 2)
#     cv2.imshow('Video', frame)
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# video.release()
# cv2.destroyAllWindows()

import cv2
import face_recognition


known_image = face_recognition.load_image_file("disha.jpeg")
known_encoding = face_recognition.face_encodings(known_image)[0]


cap = cv2.VideoCapture(0)

while True:
    
    ret, frame = cap.read()

    
    face_locations = face_recognition.face_locations(frame)
    face_encodings = face_recognition.face_encodings(frame, face_locations)

    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        
        matches = face_recognition.compare_faces([known_encoding], face_encoding)

        name = "Unknown"
        if matches[0]:
            name = "Disha"

        
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left + 6, bottom - 6), font, 0.5, (255, 255, 255), 1)

    
    cv2.imshow('Face Recognition', frame)

    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


cap.release()
cv2.destroyAllWindows()