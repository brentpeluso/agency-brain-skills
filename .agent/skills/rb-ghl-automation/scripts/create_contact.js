const { makeRequest } = require('./common_ghl');

async function createContact(firstName, lastName, email, phone, tags) {
    const endpoint = "/contacts/";

    const payload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        tags: tags ? tags.split(',') : []
    };

    // Remove undefined/null values
    Object.keys(payload).forEach(key => (payload[key] === undefined || payload[key] === null) && delete payload[key]);

    const resp = await makeRequest("POST", endpoint, {}, payload);

    if (resp && resp.contact) {
        console.log(`✅ Contact Created/Updated: ${resp.contact.id}`);
        console.log(`Name: ${resp.contact.firstName} ${resp.contact.lastName}`);
    } else {
        console.log("❌ Failed to create contact.");
    }
}

// Simple CLI argument parsing
const args = process.argv.slice(2);
const helpIndex = args.indexOf('--help');

if (helpIndex !== -1 || args.length === 0) {
    console.log("Usage: node create_contact.js --email <email> [--first <first>] [--last <last>] [--phone <phone>] [--tags <tag1,tag2>]");
    process.exit(0);
}

function getArg(name) {
    const index = args.indexOf(name);
    return index !== -1 ? args[index + 1] : null;
}

const email = getArg('--email');
const firstName = getArg('--first');
const lastName = getArg('--last');
const phone = getArg('--phone');
const tags = getArg('--tags');

if (!email) {
    console.error("Error: --email is required");
    process.exit(1);
}

createContact(firstName, lastName, email, phone, tags);
