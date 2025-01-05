# src/insurance_claim_project/crew.py

from crewai import Agent, Task, Crew, Process
from src.insurance_claim_project.tools.firebase_tool import fetch_firebase_data
from src.insurance_claim_project.tools.policy_tool import extract_policy_data

# Firebase Agent
firebase_agent = Agent(
    role='Data Fetcher from Firebase',
    goal='Retrieve claim details from Firebase',
    tools=[fetch_firebase_data]
)

# Policy Document Agent
policy_agent = Agent(
    role='Policy Document Extractor',
    goal='Extract policy data',
    tools=[extract_policy_data]
)

# Form Filler Agent
form_filler_agent = Agent(
    role='Form Filler and Submitter',
    goal='Fill the form and submit the claim'
)

# Tasks
fetch_firebase_task = Task(
    description="Retrieve patient data from Firebase",
    agent=firebase_agent
)

extract_policy_task = Task(
    description="Extract policy details",
    agent=policy_agent
)

fill_form_task = Task(
    description="Fill and submit the form using fetched data",
    agent=form_filler_agent
)

# Crew Setup
insurance_claim_crew = Crew(
    agents=[firebase_agent, policy_agent, form_filler_agent],
    tasks=[fetch_firebase_task, extract_policy_task, fill_form_task],
    process=Process.sequential
)
