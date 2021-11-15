import json
import pyrebase
with open('firebase.json','r') as f:
    config=json.load(f)

firebase=pyrebase.initialize_app(config)