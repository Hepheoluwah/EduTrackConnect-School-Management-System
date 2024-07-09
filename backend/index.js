<<<<<<< HEAD
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
=======
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())

>>>>>>> d60512a (Updated EduTrack)
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
<<<<<<< HEAD
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Connection to MongoDB failed", err));

// Use your defined routes
app.use('/', Routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
=======
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
>>>>>>> d60512a (Updated EduTrack)
