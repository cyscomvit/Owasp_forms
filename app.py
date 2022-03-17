from flask import Flask,request,render_template
from Event_forms.auth import auths
from Event_forms.admin import admin
from Event_forms.users import users
import pyrebase
import json

app=Flask(__name__)

app.register_blueprint(auths)
app.register_blueprint(admin)
app.register_blueprint(users)


@app.route('/eventforms/')
def home():
    return render_template('index.html')
    #return "OWASP FORMS"
 

if __name__ == '__main__':

    app.run(host='127.0.0.1',debug=True,port=8000)
