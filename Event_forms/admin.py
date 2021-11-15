from flask import Flask,Blueprint,request,render_template
import pyrebase
import json


admin=Blueprint('admin_routes',__name__)


@admin.route('/eventforms/create_event')
def create_event():
    data = request.args.get('event')
    # request_data = request.form or request.get_json()
    event_name=data
    print(event_name)
    db = firebase.database()
    db.child("Owasp_Forms").child("{}".format(event_name)).set({"dummy":"dummy"})
    return 


@admin.route('/eventforms/forms')
def forms():
    data={
        "Event_name":"Valo",
        "title":"1st Form",
        "description":"",
        "questions":[
            {
                "title":"",
                "description":"",
                "options_type":"",
                "options":[],
                "required":"bool"
            },
            {
                "title":"",
                "description":"",
                "options_type":"",
                "options":[],
                "required":"bool"
            }
        ]
    }
    # request_data = request.form or request.get_json()
    event = data['Event_name']
    db = firebase.database()
    db.child("Owasp_Forms").child("{}".format(event)).child("{}".format(data['title'])).child("metadata").set(data)

    return "Done"