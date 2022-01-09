import re
from flask import Flask,Blueprint,request,render_template
import json
import pprint
from Event_forms.conf import firebase

users=Blueprint('users_routes',__name__)
prefix="eventforms"

@users.route('/{}/get'.format(prefix))
def get_data():
    data = request.args.get('event')
    event=data
    db = firebase.database()
    if request.args.get('form'):
            val=db.child("Owasp_Forms").child("{}".format(event)).child("{}".format(request.args.get('form'))).get().val()
            return val
    val=db.child("Owasp_Forms").child("{}".format(event)).get().val()
    return val

@users.route('/{}/fill'.format(prefix))
def fill_data():
    data = request.get_json()
    print(data)
    event=data['event']
    title=data['title']
    db= firebase.database()
    db.child("Owasp_Forms").child("{}".format(event)).child("{}".format(title)).child("responses").set(data)
    return data

