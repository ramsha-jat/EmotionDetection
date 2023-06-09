import face_recognition
from PIL import Image  # PIL is the Python Imaging Library
import numpy as np
import cv2
from tensorflow.keras.preprocessing import image as im
import flask
from flask_pymongo import PyMongo
import io
from PIL import Image
import base64
# Define the connection string

hassan = face_recognition.load_image_file(img)
hassan_face_encoding = face_recognition.face_encodings(hssan)[0]


def get_face_encodings(img):
    image = face_recognition.load_image_file(img)
    face_encodings = face_recognition.face_encodings(image)
    return face_encodings

MONGODB_URI = "mongodb+srv://ramshabscsf19:mishu_jat1@emotiondetection.sjnysw5.mongodb.net/Emotion"

app = flask.Flask(__name__)
# Connect to MongoDB
mongo = PyMongo(app, uri=MONGODB_URI)

# Define the User schema
user_schema = {
    "name": {
        "type": "string",
        "required": True,
    },
    "email": {
        "type": "string",
        "required": True,
        "unique": True,
    },
    "password": {
        "type": "string",
        "required": True,
    },
}

# Define the Image schema
image_schema = {
    "name": "string",
    "image": "Buffer",
    "date": "Date",
}


known_face_encodings = []
known_face_names = []

from PIL import Image
def learn_face_encoding(img, name):
    users = User.find()
    for user in users:
        print(user)

def name_face(image):
    face_locations = face_recognition.face_locations(image)
    face_encodings = face_recognition.face_encodings(image, face_locations)
    face_names = []

    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
        name = "Unknown"
        face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
        print(face_distances)
        best_match_index = np.argmin(face_distances)
        if matches[best_match_index]:
            name = known_face_names[best_match_index]
            #
        # show box around face
        top, right, bottom, left = face_locations[0]
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)
        # show name below face
        cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
        # cut image from frame and save it
        face_image = frame[top:bottom, left:right]
        pil_image = Image.fromarray(face_image)
        pil_image.save(f'{name}.jpg')
        face_names.append(name)
# Create the User and Image models
User = mongo.db.users
Image = mongo.db.images



@app.route("/detect", methods=["POST"])
def detect():
    images = Image.find()
    i = 0
    array = []
    for image in images:
        with open(f"imageToSave{i}.png", "wb") as fh:
            imgdata = base64.b64decode(image['image'].decode().replace('data:image/png;base64,', ''))
            fh.write(imgdata)
            fh.close()
            img = im.load_img(f"imageToSave{i}.png", target_size=(48, 48))
            img_gray = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2GRAY)  # convert image to grayscale
            x = np.expand_dims(img_gray, axis=-1)  # add channel dimension
            x = x / 255.0  # rescale the pixel values to [0, 1]
            x = np.expand_dims(x, axis=0)  # add batch dimension
            preds = model.predict(x)
            class_num = np.argmax(preds, axis=1)[0]
            array.append([emotion[class_num],image['name']])
        i += 1
    # Return a JSON response
    #     return flask.jsonify({"emotion": emotion[class_num],'name':'xyz'})
    return flask.jsonify({"emotion": array})




if __name__ == "__main__":
    app.run(debug=True)

