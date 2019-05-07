/*
  Create by : H29id
  Community : Discordbots Nation
*/

const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`${bot.user.tag} Commands`)
  .addField(":no_entry: Moderator", "`welcome` `setup` `ban` `kick` `mute` `unmute` `autorole` `autonick`")
  .addField(":military_medal:  Game", "`8ball` `meme` `bunny` `cat` `dog`")
  .addField(":gear: Core", "`help` `stats` `clear` `invite` `support` `bugreport` `membercount`")
  .addField(":bar_chart: Utility", "`avatar` `serverinfo` `userinfo` `profile` `botinfo` `botstats`")
  .addField(":notes: Music", "`play` `stop` `skip` `pause`")
  .addField(":hammer: Up", "`level` `coinflip`")
  .addField(":credit_card: Economy", "`daily` `balance` `pay`")    
  .addField(":100: NSFW", "`neko`") 
  .addField(":new: Anime", "`animememe`") 
  .addField(":key: Developer", "`eval` `restart` `reload`")

.addField('Youtube ✓','[Click](https://www.youtube.com/channel/UCaB6NwTJ-UlLsk4YiOvqEDQ?sub_confirmation=1)', true)
.addField('Invite :robot:','[Click](https://discordapp.com/oauth2/authorize?client_id=572975377291542540&scope=bot&permissions=2146958591)', true)
.addField('Server ღ','[Click](https://discord.gg/SeHfafe)', true)
.setFooter("This bot was made by ©ArilOfficial Development in 2019")
message.channel.send(embed)
}

exports.help = {
  name: "help"
}
