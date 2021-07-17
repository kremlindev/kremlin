module.exports = ({
    name:"invite-giriş",
    code:`
$if[$message[1]==ayarla]
$setServerVar[invitemsg;$messageslice[1]]
$title[İnvite Giriş Mesajı Ayarlandı]
$description[İnvite giriş mesajı ayarlandı.
**Giriş Mesajı:** $messageSlice[1]

**Görünüm:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$messageSlice[1];{kişi.sayısı};$membersCount;-1];{katılan.etiket};<@$authorID>;-1];{sunucu.isim};$serverName;-1];{katılan.isim};$username;-1];{davet.eden.etiket};<@$userInfo[inviter]>;-1];{davet.eden.isim};$username;-1];{davet.sayısı};$userInfo[real];-1]]
$addTimestamp
$author[$username;$authorAvatar]
$argsCheck[>2;Doğru kullanım -> \`$getservervar[prefix]invite-giriş ayarla <mesaj>\`
**Etiketler:**
\`{kişi.sayısı}, {katılan.etiket}, {katılan.isim}, {sunucu.isim}, {davet.eden.etiket}, {davet.eden.isim}, {davet.sayısı}\`]
$elseIf[$message[1]==kapat]
$resetServerVar[invitemsg]
$title[İnvite Giriş Mesajı Sıfırlandı]
$description[İnvite giriş mesajı sıfırlandı.

**Eski Mesaj:** $getServerVar[invitemsg]
**Eski Görünüm:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[invitemsg];{kişi.sayısı};$membersCount;-1];{katılan.etiket};<@$authorID>;-1];{sunucu.isim};$serverName;-1];{katılan.isim};$username;-1];{davet.eden.etiket};<@$userInfo[inviter]>;-1];{davet.eden.isim};$username[$userInfo[inviter]];-1];{davet.sayısı};$userInfo[real];-1]]
$addTimestamp
$author[$username;$authorAvatar]
$onlyIf[$getservervar[invitemsg]!=;İnvite giriş mesajı zaten ayarlanmamış.]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;Kullanılabilir ayarlar \`ayarla\` ile \`sıfırla\`dır]
$onlyPerms[manageserver;Bu komudu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.]
`
})