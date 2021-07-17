module.exports = ({
name:"jaillog",
code:`$title[Başarılı]
$description[Yeni Jail Log Kanalı Başarıyla <#$mentionedChannels[1]> olarak ayarlandı]
$setServerVar[jaillog;$mentionedChannels[1]]
$onlyPerms[admin;Bu komutu sadece **Yönetici** yetkisine sahip olanlar kullanabilir]`
})