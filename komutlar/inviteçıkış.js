module.exports = ({
    name:"invite-çıkış",
    code:`
$if[$message[1]==ayarla]
$setServerVar[inviteçıkış;$messageslice[1]]
$title[İnvite Çıkış Mesajı Ayarlandı]
$description[İnvite çıkış mesajı ayarlandı.
**Çıkış Mesajı:** $messageSlice[1]

**Görünüm:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$messageSlice[1];{kişi.sayısı};$membersCount;-1];{çıkan.etiket};<@$authorID>;-1];{sunucu.isim};$serverName;-1];{çıkan.isim};$username;-1];{davet.eden.etiket};<@$userInfo[inviter]>;-1];{davet.eden.isim};$username;-1];{davet.sayısı};$userInfo[real];-1]]
$addTimestamp
$author[$username;$authorAvatar]
$argsCheck[>2;Doğru kullanım -> \`$getservervar[prefix]invite-çıkış ayarla <mesaj>\`
**Etiketler:**
\`{kişi.sayısı}, {çıkan.etiket}, {çıkan.isim}, {sunucu.isim}, {davet.eden.etiket}, {davet.eden.isim}, {davet.sayısı}\`]
$elseIf[$message[1]==kapat]
$resetServerVar[inviteçıkış]
$title[İnvite Çıkış Mesajı Sıfırlandı]
$description[İnvite çıkış mesajı sıfırlandı.

**Eski Mesaj:** $getServerVar[inviteçıkış]
**Eski Görünüm:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[inviteçıkış];{kişi.sayısı};$membersCount;-1];{katılan.etiket};<@$authorID>;-1];{sunucu.isim};$serverName;-1];{katılan.isim};$username;-1];{davet.eden.etiket};<@$userInfo[inviter]>;-1];{davet.eden.isim};$username[$userInfo[inviter]];-1];{davet.sayısı};$userInfo[real];-1]]
$addTimestamp
$author[$username;$authorAvatar]
$onlyIf[$getservervar[inviteçıkış]!=;İnvite çıkış mesajı zaten ayarlanmamış.]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;Kullanılabilir ayarlar \`ayarla\` ile \`sıfırla\`dır]
$onlyPerms[manageserver;Bu komudu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.]
`
})