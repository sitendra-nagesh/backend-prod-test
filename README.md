# backend-prod-test
Testing Production
## About:
- This project is a deployment simulation of production.
- We have an express app

```JavaScript
import express from "express";
import 'dotenv/config';
console.log(process.env)
const app = express();
app.get("/", (req, res) => {
    res.send("<h1> Hello From the Code!! </h1>")
})
```

> For More info: Email: sitendranagesh@gmail.com
