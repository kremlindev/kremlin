module.exports = ({
name:"mutelog",
aliases:['mute-log'],
code:`$setServerVar[mutelog;$mentionedChannels[1]]
$title[Başarıyla Ayarlandı]
$description[Başarılı, Mute Log kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
$color[303136]
$suppressErrors[Hata, kanal bulunamadı]
$onlyPerms[managechannels;Bu komutu kullanabilmek için **Kanalları Yönet** yetkisine sahip olmalısın]
$onlyBotPerms[managechannels;Bu komutu kullanabilmek için **Kanalları Yönet** yetkisine sahip olmalıyım]
$argsCheck[>1;Lütfen bir kanal etiketle.]`
})