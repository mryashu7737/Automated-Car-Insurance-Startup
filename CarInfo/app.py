import numpy as np
import pandas as pd
import streamlit as st
import tensorflow as tf
from tensorflow.keras.models import load_model
import joblib

# Load pre-trained model and fitted preprocessor
@st.cache_resource
def load_model_and_preprocessor():
    model = load_model("autoencoder_model1.h5", custom_objects={"mse": tf.keras.losses.MeanSquaredError()})
    preprocessor = joblib.load("preprocessor_fitted.pkl")
    return model, preprocessor

model, preprocessor = load_model_and_preprocessor()

# Streamlit title and description
st.title("Car Insurance Fraud Detection")
st.write("This app predicts if a car insurance claim might be fraudulent.")

# User inputs
claim_amount = st.number_input("Claim Amount", min_value=0.0, step=0.01)
repair_costs = st.number_input("Repair Costs", min_value=0.0, step=0.01)
type_of_accident = st.selectbox("Type of Accident", ["Theft", "Collision", "Vandalism"])
claim_frequency = st.number_input("Claim Frequency per Policyholder", min_value=0)
time_since_policy_issue = st.number_input("Time Since Policy Issue (months)", min_value=0.0, step=0.1)

if st.button("Predict Fraud"):
    # Prepare input data
    input_data = pd.DataFrame({
        "claim_amount": [claim_amount],
        "repair_costs": [repair_costs],
        "type_of_accident": [type_of_accident],
        "claim_frequency_per_policyholder": [claim_frequency],
        "time_since_policy_issue": [time_since_policy_issue],
    })

    # Transform data with the pre-fitted preprocessor
    transformed_data = preprocessor.transform(input_data)

    # Check input shape compatibility
    if transformed_data.shape[1] != model.input_shape[1]:
        st.error(f"Expected {model.input_shape[1]} features, got {transformed_data.shape[1]}.")
    else:
        # Predict and calculate reconstruction loss
        prediction = model.predict(transformed_data)
        reconstruction_loss = np.mean(np.square(transformed_data - prediction))

        # Set threshold and calculate fraud probability
        threshold = 0.613
        is_fraud = reconstruction_loss >= threshold
        fraud_probability = min((reconstruction_loss / threshold) * 100, 100)

        # Display prediction results
        if is_fraud:
            st.write("⚠️ **Potential Fraud Detected!**")
        else:
            st.write("✅ **No Fraud Detected**")
        st.write(f"Fraud Probability: {fraud_probability:.2f}%")
