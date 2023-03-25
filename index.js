const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const socket = require("socket.io");
const authRoutes = require("./Routes/auth");
const port = process.env.PORT || 5000
const app = express()
require('dotenv').config()

//middle ware
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use("/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Katha is running')
})

app.listen(port, () => {
    console.log(`Katha is running on ${port}`)
})