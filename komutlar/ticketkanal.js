module.exports = ({
    name:"ticketkanal",
    aliases:['ticket-kanal','ticketk'],
    code:`$if[$message[1]==ayarla]
$title[Ticket Kanalı ayarlandı]
$description[Ticket Kanalı Başarıyla <#$mentionedChannels[1]> olarak ayarlandı. Artık birisi o kanala herhangi bir mesaj yazdığında **ticket** açacağım.

Ayarlanan Kanal : **$channel[$mentionedChannels[1];name]**
Ayarlayan Yetkili : **$userTag[$authorID]**
Ayarlama Yapılan Kanal : **$channel[$channelID;name]**]
$color[303136]
$addTimestamp
$setServerVar[ticketkanal;$mentionedChannels[1]]
$onlyIf[$getServerVar[ticketkanal]==;Ticket Kanalı Zatn Ayarlanmış]
$onlyIf[$mentionedChannels[1]!=;Lütfen geçerli Bir Kanal Etiketle.]
$argsCheck[>1;Lütfen Bir Kanal Etiketle]
$elseIf[$message[1]==sıfırla]
$title[Ticket Kanalı Sıfırlandı]
$description[Ticket Kanalı Başarıyla Sıfırlandı. Artık Eski Kanal Olan <#$getServerVar[ticketkanal]> kanalına biri birşey yazsa da ticket açmayacağım.

Sıfırlanan Kanal : **$channel[$getServerVar[ticketkanal];name]**
Sıfırlayan Yetkili : **$userTag[$authorID]**
Sıfırlama Yapılan Kanal : **$channel[$channelID;name]**]
$color[303136]
$addTimestamp
$setServerVar[ticketkanal;]
$onlyIf[$getServerVar[ticketkanal]!=;Ticket Kanalı Zaten Ayarlanmamış]
$endElseIf
$endif
$onlyBotPerms[managechannels;Bu komutu kullanabilmek için **Kanalları Yönet** yetkisine sahip olmam gerekiyor]
$onlyPerms[managechannels;Bu komutu kullanabilmek için **Kanalları Yönet** yetkisine sahip olman gerekiyor]
$onlyIf[$checkContains[$toLowercase[$message;ayarla;sıfırla]]==true;Geçersiz argüman Kullanılabilir argümanlar \`ayarla\` ve \`sıfırla\`]
$onlyIf[$getServerVar[ticketkat]!=;Ticket Kategorisi Ayarlanmamış]
`})