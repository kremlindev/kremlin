module.exports = ({
name:"tavsiye-kanal",
aliases:['tavsiyekanal','tavsiye-sistemi','tavsiyeayarla'],
code:`$title[Tavsiye Kanalı ayarlama]
$description[Başarıyla tavsiye kanalı <#$mentionedChannels[1]> olarak ayarlandı!

Ayarlayan yetkili : $userTag[$authorID]]
$color[BLUE]
$setServerVar[tkanal;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;Lütfen geçerli bir kanal etiketle!]
$onlyBotPerms[sendmessages;Hata! kanala mesaj gönderme iznim yok!]
$onlyBotPerms[embedlinks;Hata! link gömme yetkim yok!]
$onlyBotPerms[viewchannel;Hata! kanalı göremiyorum!]
$onlyBotPerms[readmessages;Hata! Mesaj geçmişini görüntüleyemiyorum!]
$onlyBotPerms[attachfiles;Hata! Dosya ekleyemezsem mesaj gömemem!]
$onlyIf[$isBot[$authorID]!=true;Botlar tavsiye kanalını ayarlayamaz!]
$onlyPerms[admin;Bu komutu kullanabilmek için **YÖNETİCİ** yetkisine sahip olmalısınız]
$argsCheck[>1;Lütfen bir kanal etiketle!]`
})