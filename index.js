//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
//Packages
require("dotenv").config();
var token = process.env.token;

const figlet = require("figlet");

const { Client, EmbedBuilder, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
//Config
const channelId = "838753871761244161";
magenta = "\x1b[35m";
cyan = "\x1b[36m";
blue = "\x1b[34m";

//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
//Ready Event
client.on("ready", async () => {
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  figlet.text(
    "Mg Embeds",
    {
      font: "Colossal",
      width: 150,
    },
    function (err, data) {
      console.log(magenta, data);
    }
  );
  await sleep(1000);
  console.log(cyan, "[🖥️]Coder:Zer0_P0wer");
  await sleep(1000);
  console.log(cyan, "[📓]Github: github.com/zer0power");
  await sleep(1000);
  console.log(
    blue,
    `[✅] Logged in as ${client.user.tag} (${client.user.id}).`
  );
  //---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
  //Send Event
  const embed = new EmbedBuilder()
    .setColor("#8c6de7")
    .setTimestamp()
    .setDescription(
      "\n**ابتدا فرم زیر را پر یا از صفحه ی بن خودتون موقع ورود به سرور اسکرین کامل بگیرید و در ادامه برای درخواست آنبن، روی 📩 کلیک کنید، تیکت جدید بسازید، و فرم یا اسکرین را بفرستید.**\n\n\n> **Nickname:**\n> \n> **Server:**\n> \n> **Banned By Who:**\n> \n> **Date:**\n> \n> **Reason:**\n> \n> **SteamID or Profile link:**\n> \n> **Explains: **"
    )
    .setThumbnail()
    .setImage("http://cdn.0powerdev.ir/imgs/discord/unban.jpg")
    .setFooter({
      text: `MaxGaming Community | Unban Tickets`,
      iconURL: "http://cdn.0powerdev.ir/imgs/discord/unbanIcon.png",
    });

  const channel = await client.channels.fetch(channelId);
  channel.send({ content: "", embeds: [embed] });
});
//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
//Login
client.login(token);
