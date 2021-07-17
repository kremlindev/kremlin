module.exports = ({
name:"sayıkanal",
code:`$setServerVar[countkanal;$mentionedChannels[1]]
$reply[$messageID;Sayı Saymaca Kanalı Başarıyla <#$mentionedChannels[1]> olarak ayarlandı.;yes]
$onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın]
$onlyBotPerms[managemessages;Hata, Komutu kullanabilmek için Kremlin'in **Mesajları Yönet** Yetkisine Sahip Olması Gerekiyor. Çünkü kullanıcı herhangi bir hata yaptığında Kremlin onu siler ve uyarır]
$argsCheck[>1;Lütfen Bir Kanal Etiketle]
$suppressErrors[Hata, lütfen etiketlediğin kanala botun erişimi olup olmadığını kontrol et]`
})


