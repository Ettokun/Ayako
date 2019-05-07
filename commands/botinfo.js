const Discord = require("discord.js");
const client = new Discord.Client({
  fetchAllMembers: true,
disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
disableEveryone: true 
});
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {
let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${client.user.displayAvatarURL}`)
    .addField("Ayako Informasion", `**Creation Date**: ${moment.utc(client.user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}\n**ID**: ${message.client.user.id}\n**Developer Bot**: Aril✓#2825\n**Version**: 1.2.8\n**Support Server**: https://discord.gg/x3yWu74\n**Default Prefixes**: Use **a~**\n**Costum Prefix**: Plesae Mention Me! @Ayako`)
    message.channel.send(embed);
}