from flask import Flask,Blueprint,request,render_template
import json
import pprint
from Event_forms.conf import firebase

users=Blueprint('users_routes',__name__)
prefix="eventforms"

@users.route('/{}/get_data'.format(prefix))
def get_data():
    data = request.args.get('event')
    event=data
    db = firebase.database()
    pprint.pprint(db.child("Owasp_Forms").child("{}".format(event)).get().val())
    return "Okay"