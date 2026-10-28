const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Deploy pals API',
        status: 'running',
    }
    );
}

);

app.get('/api/v1/health', (req, res) => {
    res.json({
        status:'healthy',
        service:'Deploy pals API',
        timestamp:new Date().toISOString(),
    });
});

app.listen(PORT, () => {
    console.log(`Deploy pals API running on port ${PORT}`);
});