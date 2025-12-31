import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to data file
const DATA_FILE = path.join(__dirname, 'contacts.json');

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// Routes
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toISOString()
    };

    // Read existing data
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        let contacts = [];
        try {
            contacts = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            contacts = [];
        }

        // Add new contact
        contacts.push(newContact);

        // Write back to file
        fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ error: 'Failed to save data' });
            }

            console.log('New contact saved:', newContact);
            res.status(201).json({ message: 'Contact saved successfully', contact: newContact });
        });
    });
});


app.get('/api/contact', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
