import express from "express";
import 'dotenv/config';

const githubData ={
    "login": "sitendra-nagesh",
    "id": 109292494,
    "node_id": "U_kgDOBoOrzg",
    "avatar_url": "https://avatars.githubusercontent.com/u/109292494?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sitendra-nagesh",
    "html_url": "https://github.com/sitendra-nagesh",
    "followers_url": "https://api.github.com/users/sitendra-nagesh/followers",
    "following_url": "https://api.github.com/users/sitendra-nagesh/following{/other_user}",
    "gists_url": "https://api.github.com/users/sitendra-nagesh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sitendra-nagesh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sitendra-nagesh/subscriptions",
    "organizations_url": "https://api.github.com/users/sitendra-nagesh/orgs",
    "repos_url": "https://api.github.com/users/sitendra-nagesh/repos",
    "events_url": "https://api.github.com/users/sitendra-nagesh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sitendra-nagesh/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-07-14T13:34:01Z",
    "updated_at": "2023-12-26T02:35:19Z"
  }

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

app.get("/github", (req, res) => {
    res.json(githubData);
})
app.listen(process.env.PORT, () => {
    console.log(`Listening at ${process.env.PORT}`)
})

