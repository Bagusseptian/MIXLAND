const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");

module.exports = {
  name: "loop",
  description: "Memutar lagu yang sama, terus menerus",
  execute (client, message, args) {
    let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("MASUK VOICE DULU BLOKK!")
     
    .setFooter('© MIXLAND', client.user.displayAvatarURL)
      return message.channel.send(embed);
      
      
      
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Gak ada Loop nyaaa!!")
    .setFooter('© MIXLAND', client.user.displayAvatarURL)
  return message.channel.send(embed);
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    embed.setDescription(`Loop is now **${serverQueue.loop ? "IYO" : "ORA"}**`)
    embed.setThumbnail(client.user.displayAvatarURL())
   .setFooter('© MIXLAND')
 message.channel.send(embed)
    
    
    
    
  }
}