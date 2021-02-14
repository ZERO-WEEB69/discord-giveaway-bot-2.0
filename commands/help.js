const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("- Z Ξ R 0 ™ 🍁#7752"and H Δ S Σ Σ N Δ :heart_eyes_cat:#1119) and - K Δ R M Δ Oᕈ#1911)"

      .addField("join discord")"[click here](https://discord.gg/nadeofficialop)"
      .setTitle("Command List & Guide for the Bot")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 8 commands available, more commands will be added soon.")
      .addField("🎁 Giveaway 🎁","start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
      .addField("Examples", "(prefix)start #giveaway 5m 1 Testing\ng!end Testing\ng!reroll Testing")
      .addField("Utility", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .addField("Check out", "[my channle](https://www.youtube.com/channel/UCJjOS64JAsA_DIn4GqlJmVw) to make your own giveaway bot")
      .addField("how to use this bot?")[click here ](stay tuned)"
      .addField("if you wanna help me up by donateing)[click here](your paypal link)")
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Sent the commands in Direct Messages! 💌, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
