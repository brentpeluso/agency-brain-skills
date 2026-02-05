const { makeRequest } = require('./common_ghl');

async function findContact(query) {
    const endpoint = "/contacts/";
    const params = { query: query };

    const data = await makeRequest("GET", endpoint, params);

    if (data && data.contacts) {
        if (data.contacts.length === 0) {
            console.log(`No contacts found for query: ${query}`);
        } else {
            data.contacts.forEach(c => {
                console.log(`ID: ${c.id} | Name: ${c.firstName} ${c.lastName} | Email: ${c.email} | Phone: ${c.phone}`);
                console.log(`Tags: ${c.tags}`);
                console.log("-".repeat(30));
            });
        }
    } else {
        console.log("Failed to retrieve contacts.");
    }
}

// Get the query from command line arguments
const query = process.argv[2];

if (!query) {
    console.log("Usage: node get_contact.js <query>");
    process.exit(1);
}

findContact(query);
