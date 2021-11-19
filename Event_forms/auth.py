from flask import Flask,Blueprint,request,render_template,redirect
from Event_forms.conf import firebase
import json
import pprint
auth=firebase.auth()

auths=Blueprint('auth_routes',__name__)


@auths.route('/eventforms/login',methods=['GET','POST'])
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

@auths.route('/eventforms/register',methods=['GET','POST'])
def register():
    successful="Registration successful"
    unsuccessful="Please enter proper credentials"

    if request.method=="POST":
        email=request.form['inputEmail']
        password=request.form['inputPassword']
        try:
            auth.create_user_with_email_and_password(email, password)
            return render_template('login.html',succ=successful)
        except Exception as e:
            pprint.pprint(e)
            return render_template('register.html',us=unsuccessful)
    return render_template('register.html')