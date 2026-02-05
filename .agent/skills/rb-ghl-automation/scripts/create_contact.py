import argparse
from common_ghl import make_request

def create_contact(first_name, last_name, email, phone, tags):
    endpoint = "/contacts/"
    
    payload = {
        "firstName": first_name,
        "lastName": last_name,
        "email": email,
        "phone": phone,
        "tags": tags if tags else []
    }
    
    # Remove None values
    payload = {k: v for k, v in payload.items() if v is not None}
    
    resp = make_request("POST", endpoint, data=payload)
    
    if resp and "contact" in resp:
        c = resp["contact"]
        print(f"✅ Contact Created/Updated: {c.get('id')}")
        print(f"Name: {c.get('firstName')} {c.get('lastName')}")
    else:
        print("❌ Failed to create contact.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Create/Update a GHL Contact")
    parser.add_argument("--first", help="First Name")
    parser.add_argument("--last", help="Last Name")
    parser.add_argument("--email", required=True, help="Email Address")
    parser.add_argument("--phone", help="Phone Number")
    parser.add_argument("--tags", nargs="+", help="List of tags (e.g. RB-Lead RB-Booked)")
    
    args = parser.parse_args()
    
    create_contact(args.first, args.last, args.email, args.phone, args.tags)
