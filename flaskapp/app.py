# import tensorflow as tf
import numpy as np
# import cv2
# from tensorflow.keras.preprocessing import image
import flask
from flask_pymongo import PyMongo
import io
from PIL import Image
import base64
# Define the connection string
MONGODB_URI = "mongodb+srv://ramshabscsf19:mishu_jat1@emotiondetection.sjnysw5.mongodb.net/Emotion"

emotion=["Anger", "Disgust", "Fear", "Happy", "Sadness","Surprise","Neutral"]
# model = tf.keras.models.load_model(r"C:/Users/AL-MALAK/Desktop/csvIII/Emotion_detection_MUI/model.h5")


# Create a Flask app
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

# Create the User and Image models
User = mongo.db.users
Image = mongo.db.images



@app.route("/predict")
def predict():
    images = Image.find()
    i = 0
    array = []
    for image in images:
        with open(f"imageToSave{i}.png", "wb") as fh:
            imgdata = base64.b64decode(image['image'].decode().replace('data:image/png;base64,', ''))
            fh.write(imgdata)
            fh.close()
            img = image.load_img(f"imageToSave{i}.png", target_size=(48, 48))
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

# Define a route that creates a new user
@app.route("/create_user")
def create_user():
    # Get the user data from the request
    data = flask.request.get_json()

    # Create a new user document
    user = User(**data)

    # Save the user document
    user.save()

    # Return a JSON response
    return flask.jsonify({"message": "User created"})

# Define a route that gets all users
@app.route("/get_users")
def get_users():
    # Get all users
    users = User.find()

    # Convert the users to a list
    data = list(users)

    # Return the data to the user
    return flask.jsonify(data)

# Define a route that creates a new image
@app.route("/create_image")
def create_image():
    # Get the image data from the request
    data = flask.request.get_json()

    # Create a new image document
    image = Image(**data)

    # Save the image document
    image.save()

    # Return a JSON response
    return flask.jsonify({"message": "Image created"})

# Define a route that gets all images
@app.route("/get_images")
def get_images():
    # Get all images
    images = Image.find()

    # Convert the images to a list
    data = list(images)

    # Return the data to the user
    return flask.jsonify(data)



if __name__ == "__main__":
    app.run(debug=True)
