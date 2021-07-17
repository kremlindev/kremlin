module.exports = {
 name: "nuke",
 code: `
 $djsEval[
 
 const lol = d.message.channel.position
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(lol)
 c.send(d.message.author.tag + ' Kanalı Nukeledim ab!')

 })
]
$onlyPerms[managechannels;Yetkin Yok xd]
$onlyBotPerms[managechannels;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Kanalları Yönet"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823200629899788308/unknown.png}]
  $onlyIf[$jsonRequest[https://tandembot.xyz/api/775820681409462273/voted/$authorid;hasvote]==true;{description:Bu komutu kullanabilmek için bota [BURADAN](https://tandembot.xyz/bot/775820681409462273/vote) oy vermeniz gerekiyor. Oylar her 12 saatte bir sıfırlanır.}{color:RED}]
 `
}