const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require("./routes");


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, () => {
    console.log("Connected Successfully to Mongodb")
});

app.use(routes.signin);
app.use(routes.signup);
app.use(routes.signinWithID);
app.use(routes.getWatchlist);
app.use(routes.addWatchlist);
app.use(routes.checkWatchlist);
app.use(routes.removeWatchlist);



const port = process.env.PORT;
app.listen(port, () => {
    console.log("server Started...@", port);
});
