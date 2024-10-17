'use strict';
require("dotenv").config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-routes');
const morgan = require('morgan');


require('./controllers/bot')
const { saveReferral, getReferrals, getReferrer } = require('./controllers/fileuploaderController');
const port = process.env.PORT || 5000;
const app  = express();

require('./database')();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
    res.send('Welcome to the backend, Eldad!');
});

// app.post('/api/referrals', (req, res) => {
//     const { userId, referrerId } = req.body;
//     if (!userId || !referrerId) {
//         return res.status(400).json({ error: 'Missing UserId or referrerId' });
//     }
//     saveReferral(userId, referrerId);
//     res.json({ success: true });
// });
//
// app.get('/api/referrals', (req, res) => {
//     const { userId } = req.query;
//     if (!userId) {
//         return res.status(400).json({ error: 'Missing UserId' });
//     }
//     const referrals = getReferrals(userId);
//     const referrer = getReferrer(userId);
//     res.json({ referrals, referrer });
// });


app.use('/api', fileRoutes.routes);

app.listen(port, ()=> console.log(`server is listening on url http://localhost:${port}`));
