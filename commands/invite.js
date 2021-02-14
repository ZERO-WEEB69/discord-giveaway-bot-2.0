const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("Invite & Support Link!")
    .addField("Invite Link", "[Click here to invite me](https://www.youtube.com/watch?v=QkuoHDy0pZo)")
    .addField("Support Server", "[Click to join support Server](https://discord.gg/HrFmGFS7)")
    .setTitle("owner inffo and stuffs)"
    .addField("owner github"), "[Click here to see the repo](https://github.com/ZERO-WEEB69/DISCORD-GIVEAWAY-BOT)")
    .addField("Here something for ya all")[click here](https://www.youtube.com/watch?v=FA8tl0fsYdI&t=42s)")
    .addField("2nd ownr github"),"[click here](https://github.com/noob-dev69)"

    .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
}
