const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const Routes = require("./routes/route.js");

const PORT = process.env.PORT || 5000;

dotenv.config();

// Enable CORS for requests from specific origin
app.use(cors({
    origin: 'https://edutrackconnect.netlify.app'
}));

// Parse incoming JSON requests with a size limit
app.use(express.json({ limit: '10mb' }));

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Connection to MongoDB failed", err));

// Use your defined routes
app.use('/', Routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});