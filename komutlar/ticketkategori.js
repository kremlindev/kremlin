module.exports = ({
    name:"ticketkategori",
    aliases:['ticket-kategori'],
    code:`$if[$message[1]==ayarla]
$title[Ticket Kategorisi Ayarlandı]
$description[Ticket Kategorisi Başarıyla $channel[$message[2];name] olarak Ayarlandı. Artık tüm ticketları bu kategoriye açacağım
Ayarlanan Kategori: **$channel[$message[2];name]**
Ayarlayan Yetkili : **$userTag[$authorID]**
Ayarlama Yapılan Kanal : **$channel[$channelID;name]**]
$color[303136]
$addTimestamp
$setServerVar[ticketkat;$message[2]]
$onlyIf[$getServerVar[ticketkat]==;Ticket Kategorisi Zaten Ayarlanmış]
$onlyIf[$isNumber[$message[2]]==true;Lütfen geçerli bir kategori ID'si gir]
$onlyIf[$channelExists[$message[2]]==true;Lütfen geçerli bir kategori ID'si gir]
$argsCheck[>1;Lütfen Bir Kategori ID'si gir]
$elseIf[$message[1]==sıfırla]
$title[Ticket Kategorisi Sıfırlandı]
$description[Ticket Kategorisi Başarıyla Sıfırlandı. Artık Eski Kategori Olan $channel[$getServerVar[ticketkat];name] kategorisine ticket açmayacağım

Sıfırlayan Yetkili : **$userTag[$authorID]**
Sıfırlama Yapılan Kanal : **$channel[$channelID;name]**]
$color[303136]
$addTimestamp
$setServerVar[ticketkat;]
$onlyIf[$getServerVar[ticketkat]!=;Ticket Kategorisi Zaten Ayarlanmamış]
$endElseIf
$endif
$onlyBotPerms[managechannels;Bu komutu kullanabilmek için **Kanalları Yönet** yetkisine sahip olmam gerekiyor]
$onlyPerms[managechannels;Bu komutu kullanabilmek için **Kanalları Yönet** yetkisine sahip olman gerekiyor]
$onlyIf[$checkContains[$toLowercase[$message;ayarla;sıfırla]]==true;Geçersiz argüman Kullanılabilir argümanlar \`ayarla\` ve \`sıfırla\`]
`})