from flask import Flask,request
from Event_forms.auth import auths
from Event_forms.admin import admin
from Event_forms.users import users
import pyrebase
import json

app=Flask(__name__)

app.register_blueprint(auths)
app.register_blueprint(admin)
app.register_blueprint(users)


with open('firebase.json','r') as f:
    config=json.load(f)

firebase=pyrebase.initialize_app(config)

auth=firebase.auth()



@app.route('/eventforms/')
def home():
    return "OWASP FORMS"
 

if __name__ == '__main__':

    app.run(host='0.0.0.0',debug=True,port=5000)
