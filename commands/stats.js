/*
  Create by : H29id
  Community : Discordbots Nation
*/

const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setAuthor(`${bot.user.tag} Statistic`)
 .setDescription("🔹 Help Ayako)")
 .addField("🔹 Ping", parseInt(bot.ping), true)
 .addField("🔹 Guilds Count", bot.guilds.size, true)
 .addField("🔹 Users Count", bot.users.size, true) 
 .addField("🔹 Community", "Ayako Official", true)
 .addField("🔹 ID", bot.user.id, true)
 .addField("🔹 Uptime", moment(bot.uptime).format("hh[:]mm[:]ss"), true)
.setFooter('©Release | ArilOfficial | 2019') 

message.channel.send(embed)
}

exports.help = {
  name: "stats"
}
