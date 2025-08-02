const express = require('express');
const cors = require('cors');
const predictRoute = require('./routes/predict');

const app = express();
const PORT = 5001;

app.use(cors());
app.use('/api/predict', predictRoute);

app.listen(PORT, () => {
    console.log(`Node server running on http://localhost:${PORT}`);
});
