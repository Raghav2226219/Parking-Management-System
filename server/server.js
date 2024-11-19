const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});


const signuproutes = require("./routes/SignUpRoutes");
app.use("/" , signuproutes);





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});