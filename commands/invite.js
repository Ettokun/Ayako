const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setTitle('Thank you for inviting me to your server? :robot:')
.addField('Link','[Click Here](https://discordapp.com/oauth2/authorize?client_id=572975377291542540&scope=bot&permissions=2146958591)', true)
.setColor("#ec0000")
.setFooter('©BETA | ArilOfficial | 2019')
message.channel.send({embed})
}