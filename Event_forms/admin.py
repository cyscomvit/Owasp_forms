from flask import Flask,Blueprint,request,render_template,jsonify
import json
from Event_forms.conf import firebase
import os

admin=Blueprint('admin_routes',__name__)

@admin.route('/eventforms',methods=["POST","GET"])
def index():
    return render_template("index.html")

@admin.route('/eventforms/add_forms',methods=["POST","GET"])
def add_forms():
    data={}
    if request.method=="POST":
        content=request.json
        print(content)
        return jsonify(content)
    return "GET"

















@admin.route('/eventforms/create_event')
def create_event():
    data = request.get_json()
    # request_data = request.form or request.get_json()
    event_name=data['event']
    print(event_name)
    db = firebase.database()
    db.child("Owasp_Forms").child("{}".format(event_name)).set({"Description":data["desc"]})
    return data


@admin.route('/eventforms/forms')
def forms():
    data=request.get_json()
    # request_data = request.form or request.get_json()
    event = data['Event_name']
    db = firebase.database()
    db.child("Owasp_Forms").child("{}".format(event)).child("{}".format(data['title'])).child("Format").set(data)

    return data


