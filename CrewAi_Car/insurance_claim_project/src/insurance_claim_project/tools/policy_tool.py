# src/insurance_claim_project/tools/policy_tool.py

from crewai_tools import tool
import PyPDF2

@tool
def extract_policy_data(policy_path: str) -> dict:
    policy_data = {}
    with open(policy_path, "rb") as file:
        pdf_reader = PyPDF2.PdfFileReader(file)
        for page_num in range(pdf_reader.numPages):
            page = pdf_reader.getPage(page_num)
            text = page.extractText()
            # Placeholder: extract specific fields from text here
            policy_data["policy_number"] = "Sample Policy Number"  # Replace with actual extraction
    return policy_data
