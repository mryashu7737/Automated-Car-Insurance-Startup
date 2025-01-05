
import streamlit as st
from car_pipeline import car_damage_pipeline  # Import the pipeline function
from PIL import Image
import os

# Ensure the 'static' folder exists for saving the uploaded image and annotated image
os.makedirs("static", exist_ok=True)

# Set up Streamlit app title and description
st.title("Car Damage Detection and Repair Cost Estimation")
st.write("Upload an image of a damaged car to detect damage types and get a repair cost estimate.")

# File uploader for uploading the car damage image
uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

# Check if an image is uploaded
if uploaded_file is not None:
    # Save the uploaded image temporarily
    image_path = "static/uploaded_image.jpg"
    with open(image_path, "wb") as f:
        f.write(uploaded_file.getbuffer())
    
    # Display the uploaded image and the annotated image side-by-side
    col1, col2 = st.columns(2)
    
    # Display uploaded image in the first column
    with col1:
        st.header("Uploaded Image")
        st.image(image_path, caption="Uploaded Image", use_column_width=True)

    # Run the pipeline function to process the image and get results
    results = car_damage_pipeline(image_path)
    
    # Display the annotated image in the second column
    annotated_image_path = results["annotated_image_path"]
    with col2:
        st.header("Predicted Damage")
        st.image(annotated_image_path, caption="Predicted Damage", use_column_width=True)

    # Display the estimated cost information below the images
    st.subheader("Damage and Cost Estimation Results")
    st.write(f"**Total Estimated Repair Cost**: ${results['total_cost']:.2f}")
    
    st.write("**Cost Breakdown by Damage Type:**")
    for cost in results["cost_breakdown"]:
        st.write(f"- {cost['type'].capitalize()}: ${cost['estimated_cost']:.2f}")

    # Optional cleanup of temporary files (if you want to remove after use)
    if os.path.exists(image_path):
        os.remove(image_path)
    if os.path.exists(annotated_image_path):
        os.remove(annotated_image_path)


