import argparse
from common_ghl import make_request, get_headers

def find_contact(query):
    # Search is usually done via the /contacts/search endpoint or lookup
    # For simplicity in V2, we often use /contacts/search?query=...
    endpoint = "/contacts/search"
    params = {"query": query}
    
    # Ensure locationId is in headers or params (V2 usually expects it in headers for some, but let's be safe)
    # The common_ghl puts it in headers.
    
    data = make_request("GET", endpoint, params=params)
    
    if data and "contacts" in data:
        contacts = data["contacts"]
        if not contacts:
            print(f"No contacts found for query: {query}")
        else:
            for c in contacts:
                print(f"ID: {c.get('id')} | Name: {c.get('firstName')} {c.get('lastName')} | Email: {c.get('email')} | Phone: {c.get('phone')}")
                print(f"Tags: {c.get('tags')}")
                print("-" * 30)
    else:
        print("Failed to retrieve contacts.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Find a GHL Contact")
    parser.add_argument("query", help="Email or Phone number to search for")
    args = parser.parse_args()
    
    find_contact(args.query)
