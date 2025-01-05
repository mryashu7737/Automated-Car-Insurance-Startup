import sys
import os

# Add the root directory and `src/insurance_claim_project` to Python's path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))



import streamlit as st
from tools.firebase_tool import fetch_firebase_data
from tools.policy_tool import extract_policy_data
from datetime import datetime
# src/insurance_claim_project/main.py




# Fetch data from Firebase and Policy Document
firebase_data = fetch_firebase_data(collection="claims", document_id="claim1")
policy_data = extract_policy_data(policy_path="data/policy.pdf")

# Streamlit App Layout
st.title("Insurance Claim Form")

with st.form("claim_form"):
    # Section: Patient Information
    st.subheader("Patient Information")
    patient_name = st.text_input("Patient's Name", value=firebase_data.get("patient_name", ""))
    birth_date = st.date_input("Birth Date", value=datetime.strptime(firebase_data.get("birth_date", "2000-01-01"), "%Y-%m-%d"))
    sex = st.radio("Sex", options=["M", "F"], index=0 if firebase_data.get("sex") == "M" else 1)

    # Section: Insurance Details
    st.subheader("Insurance Details")
    policy_number = st.text_input("Policy Number", value=policy_data.get("policy_number", ""))
    insurance_plan = st.text_input("Insurance Plan", value=firebase_data.get("insurance_plan", ""))

    # Section: Medical Information
    st.subheader("Medical Information")
    illness_date = st.date_input("Date of Illness", value=datetime.strptime(firebase_data.get("illness_date", "2000-01-01"), "%Y-%m-%d"))
    unable_to_work_from = st.date_input("Unable to Work From", value=datetime.strptime(firebase_data.get("unable_to_work_from", "2000-01-01"), "%Y-%m-%d"))
    unable_to_work_to = st.date_input("Unable to Work To", value=datetime.strptime(firebase_data.get("unable_to_work_to", "2000-01-01"), "%Y-%m-%d"))

    # Section: Charges
    st.subheader("Charges")
    charges = st.number_input("Total Charge", value=float(firebase_data.get("total_charge", 0)), step=0.01)

    # Submit Form
    submit = st.form_submit_button("Submit Claim")

    if submit:
        st.success("Claim submitted successfully!")
        st.write({
            "patient_name": patient_name,
            "birth_date": birth_date,
            "sex": sex,
            "policy_number": policy_number,
            "insurance_plan": insurance_plan,
            "illness_date": illness_date,
            "unable_to_work_from": unable_to_work_from,
            "unable_to_work_to": unable_to_work_to,
            "charges": charges,
        })
