const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
module.exports = {
  name: "drop",
  description: "Mengeluarkan lagu dari anterian",
  execute(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setAuthor("MASUK VOICE DULU BLOKK!")
      .setFooter('© MIXLAND')
    
      return message.channe.send(embed);
    }

    const serverQueue = client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Anterian Kosong Blok")
     .setFooter('© MIXLAND')
return message.channel.send(embed);
    }
    
     if(isNaN(args[0])) {
      embed.setAuthor("Kasih Nomor Antrian")
   .setFooter('© MIXLAND
  return message.channel.send(embed)
    }
   
    if(args[0] > serverQueue.songs.length) {
      embed.setAuthor("LAGU nya Gk Ketemu")
      .setFooter('© MIXLAND')
return message.channel.send(embed)
    }
    
    
    serverQueue.songs.splice(args[0] - 1, 1)
    embed.setDescription("Membuang lagu dari anterian ke tong sampah")
    embed.setThumbnail(client.user.displayAvatarURL())
    .setFooter(`Request BY ${message.author.username}`+"© MIXLAND")
.setTimestamp();
return message.channel.send(embed)
  }
};
