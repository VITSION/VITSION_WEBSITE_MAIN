import { google } from 'googleapis';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Authenticate with the service account
const getAuth = () => {
    return new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, 'credentials.json'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
};

/**
 * Appends a row of data to the specified spreadsheet.
 * @param {string} spreadsheetId - The ID of the Google Sheet.
 * @param {Array} data - Array of values to append (e.g. [Date, Name, Email, Message]).
 */
export const appendToSheet = async (spreadsheetId, data) => {
    try {
        const auth = getAuth();
        const googleSheets = google.sheets({ version: 'v4', auth });

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: 'Sheet1!A:D', // Appends to Sheet1, Columns A to D
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [data],
            },
        });

        console.log('Successfully added to Google Sheet');
        return true;
    } catch (error) {
        console.error('Error appending to Google Sheet:', error.message);
        // We don't throw here to avoid crashing the main request if Sheets fails
        return false;
    }
};
