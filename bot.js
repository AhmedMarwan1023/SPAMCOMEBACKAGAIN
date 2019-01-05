const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531060188359426049")
setInterval(function() {
channel.send(`**Hi Spam Lol Look At This 7rkat firary هاي سبام لو ك ات تيس حركات فراري لول هههههه سبام لول شوف سبام او شي ت ديم مان حركات يلد اوووه Ahmeed,Ahmeed,Ahmeed,Ahmeed,Ahmeed,Ahmeed,Ahmeed,Ahmeed,Ahmeed,AhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeedAhmeed,AhmeedAhmeedAhmeedAhmeed**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
