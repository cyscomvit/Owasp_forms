from flask import *
import pyrebase
import json
app=Flask(__name__)

with open('firebase.json','r') as f:
    config=json.load(f)

firebase=pyrebase.initialize_app(config)

auth=firebase.auth()


@app.route('/')
def home():
    return "OWASP FORMS"


@app.route('/login',methods=['GET','POST'])
def login():
    successful="Thank you for visiting our website "
    unsuccessful='Please check your credentials'
    if request.method=="POST":
        email=request.form['inputEmail']
        password=request.form['inputPassword']
        try:
             auth.sign_in_with_email_and_password(email,password)
             return render_template('login.html',succ=successful)
        except:
            # return "CHECK YOUR CREDENTIALS"
            return render_template('login.html',us=unsuccessful)
        
    return render_template('login.html')

@app.route('/register',methods=['GET','POST'])
def register():
    successful="Registration successful"
    unsuccessful="Please enter proper credentials"

    if request.method=="POST":
        email=request.form['inputEmail']
        password=request.form['inputPassword']
        try:
            auth.create_user_with_email_and_password(email, password)
            return render_template('index.html',succ=successful)
        except:
            return render_template('index.html',us=unsuccessful)
    return render_template('register.html')




if __name__ == '__main__':

    app.run(host='0.0.0.0',debug=True,port=5000)
