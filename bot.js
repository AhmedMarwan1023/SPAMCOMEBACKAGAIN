const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531060188359426049")
setInterval(function() {
channel.send(`** Spam سبام ديم مان اح هههههههه سبام نيهاهااهاها سبام يبويييييي ست داون بوي Spam**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
