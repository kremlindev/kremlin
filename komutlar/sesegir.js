module.exports = ({
 name: "sesegir",
 code: `
$djsEval[message.member.voice.channel.join();]
$onlyBotPerms[connect;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Bağlan"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823199083866095637/unknown.png}]
$suppressErrors[Hata, sese giremedim.]`
})