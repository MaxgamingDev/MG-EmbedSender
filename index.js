//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
//Packages
require("dotenv").config();
var token = process.env.token;

const { Client, EmbedBuilder, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
//Login
client.login(token);