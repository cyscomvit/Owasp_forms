from flask import *
import pyrebase
import json
app=Flask(__name__)

with open('firebase.json','r') as f:
    config=json.load(f)

@app.route('/')
def home():
    return "Owasp Event Forms"

if __name__ == '__main__':

    app.run(host='0.0.0.0',debug=True,port=5000)
