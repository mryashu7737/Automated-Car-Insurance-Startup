# src/insurance_claim_project/firebase_init.py

import firebase_admin
from firebase_admin import credentials, firestore
import os

# Get the absolute path to the firebase_credentials.json file
cred_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', 'firebase_credentials.json'))

# Print the path to confirm
print("Credential Path:", cred_path)

# Check if the file exists before proceeding
if not os.path.exists(cred_path):
    raise FileNotFoundError(f"firebase_credentials.json not found at {cred_path}")

# Initialize Firebase if it hasn't been initialized yet
if not firebase_admin._apps:
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred)

# Firebase Firestore client
db = firestore.client()
