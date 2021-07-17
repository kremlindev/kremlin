module.exports = ({
name: "unmute", 
code: `
$title[Susturma açıldı]
$description[<@$mentioned[1]> kişisinin susturulması açıldı.

Mute'u açan yetkili : <@$authorID>
Mute sebebi  : $getUserVar[msebep;$mentioned[1]]]
$color[BLACK]
$useChannel[$getServerVar[mutelog]]
$setUserVar[mutespit;0;$mentioned[1]]
$takeRoles[$mentioned[1];$getServerVar[mrol]]
$channelSendMessage[$channelID;<@$mentioned[1]> mute'u açıldı]
$onlyPerms[manageroles;<​a:emoji_12:780719115449925663> Bu Komutu Yanlızca yöneticiler Kullanabilir]
$onlyBotPerms[manageroles;Görünüşe göre kullanıcının mute'unu açmaya yetkim yok]
$onlyIf[$mentioned[1]!=;Lütfen birini etiketle]` 
})