const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const axios = require('axios');

const BASE_URL = "https://services.leadconnectorhq.com";

function getHeaders() {
    const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!token) {
        throw new Error("Missing GHL_PRIVATE_INTEGRATION_TOKEN in .env file.");
    }

    const headers = {
        "Authorization": `Bearer ${token}`,
        "Version": "2021-07-28",
        "Content-Type": "application/json",
        "Accept": "application/json"
    };

    if (locationId) {
        headers["locationId"] = locationId;
    }

    return headers;
}

async function makeRequest(method, endpoint, params = {}, data = {}) {
    const url = `${BASE_URL}${endpoint}`;
    const headers = getHeaders();

    // Auto-inject locationId into params for GET requests if missing
    if (method === 'GET' && !params.locationId && headers.locationId) {
        params.locationId = headers.locationId;
    }

    try {
        const config = {
            method: method,
            url: url,
            headers: headers,
            params: params,
            data: data
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`HTTP Error: ${error.response.status} - ${error.response.statusText}`);
            console.error(`Response Data:`, JSON.stringify(error.response.data, null, 2));
        } else {
            console.error(`Error: ${error.message}`);
        }
        return null;
    }
}

module.exports = { makeRequest };
