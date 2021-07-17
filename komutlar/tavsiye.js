module.exports = ({
name:"tavsiye",
aliases:['öner'],
code:`$channelSendMessage[$getServerVar[tkanal];{title:$userTag[$authorID]}{description:Bir öneri gönderildi.
Gönderen Kişi : \`$userTag[$authorID]\`
Gönderilen öneri : \`$noMentionMessage\`}{footer:$serverName[$guildID]}{color:RED}{thumbnail:$authorAvatar}]
$title[Tavsiye Gönderme]
$description[Teşekkürler! Tavsiyen alındı!

Gönderilen Kanal : $channelName[$channelID],
Gönderen Kişi : $userTag[$authorID]]
$footer[$userTag[$authorID];$authorAvatar]
$addTimestamp
$color[RED]
$onlyIf[$getServerVar[tkanal]!=;Hata! Tavsiye kanalı ayarlanmamış!]
$onlyIf[$charCount[$noMentionMessage]=<1500;Hata! Bu kadar uzun tavsiye atarsan bunu tavsiye kanalına göndermem! Discord Apisi 2000'den fazla harften oluşan mesajlara izin vermiyor! Lütfen tavsiyenin 1500 harften kısa olduğuna dikkat et!]
$onlyBotPerms[sendmessages;Hata! kanala mesaj gönderme iznim yok!]
$onlyBotPerms[embedlinks;Hata! link gömme yetkim yok!]
$onlyBotPerms[viewchannel;Hata! kanalı göremiyorum!]
$onlyBotPerms[readmessages;Hata! Mesaj geçmişini görüntüleyemiyorum!]
$onlyBotPerms[attachfiles;Hata! Dosya ekleyemezsem mesaj gömemem!]
$onlyIf[$isBot[$authorID]!=true;Botlar tavsiye gönderemez!]
$onlyIf[$noMentionMessage[2]!=;Lütfen 1 kelimeden fazla bir tavsiye gönder!]
$argsCheck[>2;Lütfen geçerli bir tavsiye yaz!]`
})