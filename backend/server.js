const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/configs/db.config');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));
app.use('/api/auth', require('./src/routes/user.route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
