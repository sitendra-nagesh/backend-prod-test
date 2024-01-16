import express from "express";
import 'dotenv/config';

const app = express();
app.get("/", (req, res) => {
    res.send("<h1> Hello From the Code!! </h1>")
})

app.get("/twitter", (req, res) => {
    res.send("<h1> sitendra.come </h1>")
})

app.get("/youtube/welcome", (req, res) => {
    res.send("<h1> Welcome to My Youtube Channel!!</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Listening at ${process.env.PORT}`)
})

