const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");


module.exports = {
  name: "resume", 
  description: "Lanjut lagu yang di jeda",
  execute (client, message, args) {
    let embed = new MessageEmbed()
.setColor(COLOR);

      const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("MASUK VOICE DULU BLOKK!")
     .setFooter('© MIXLAND')
 return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  embed.setAuthor("✅ | LANJUT TERUSSS")
   embed.setThumbnail(client.user.displayAvatarURL())
  .setFooter('© MIXLAND')
return message.channel.send(embed)
 }
    embed.setDescription("GAK ADA YANG JEDA BLOK!")
 .setFooter('© MIXLAND')
 message.channel.send(embed)
    
  }
}