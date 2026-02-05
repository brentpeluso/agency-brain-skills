import os
import requests
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

BASE_URL = "https://services.leadconnectorhq.com"

def get_headers():
    token = os.getenv("GHL_PRIVATE_INTEGRATION_TOKEN")
    location_id = os.getenv("GHL_LOCATION_ID")
    
    if not token:
        raise ValueError("Missing GHL_PRIVATE_INTEGRATION_TOKEN in environment variables.")
    
    headers = {
        "Authorization": f"Bearer {token}",
        "Version": "2021-07-28",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    # Some endpoints require locationId in headers, others in query params.
    # We add it to headers just in case, but specific scripts should add it to params if needed.
    if location_id:
        headers["locationId"] = location_id
        
    return headers

def make_request(method, endpoint, params=None, data=None):
    url = f"{BASE_URL}{endpoint}"
    headers = get_headers()
    
    try:
        response = requests.request(method, url, headers=headers, params=params, json=data)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as err:
        print(f"HTTP Error: {err}")
        print(f"Response Body: {response.text}")
        return None
    except Exception as err:
        print(f"Error: {err}")
        return None
