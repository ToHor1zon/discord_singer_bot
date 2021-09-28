// require neccessary modules
const app = require("express")()

const info = require('./controllers/info');
const audioStream = require('./controllers/audioStream');
const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS"] });
require('dotenv').config()


client.login(process.env.BOT_TOKEN);

// Routes
app.get("/info", info)
app.get("/stream/:videoId", audioStream)


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Running on ${PORT}`))