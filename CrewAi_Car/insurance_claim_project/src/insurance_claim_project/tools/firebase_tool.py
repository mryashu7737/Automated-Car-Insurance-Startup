# src/insurance_claim_project/tools/firebase_tool.py

from crewai_tools import tool
from src.insurance_claim_project.firebase_init import db  # Import db from firebase_init

@tool
def fetch_firebase_data(collection: str, document_id: str) -> dict:
    doc_ref = db.collection(collection).document(document_id)
    doc = doc_ref.get()
    if doc.exists:
        return doc.to_dict()
    return {}
