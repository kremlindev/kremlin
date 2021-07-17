module.exports = ({
name : "unjail",
code:`$title[Kişi jailden kaldırıldı]
$description[$username[$mentioned[1;yes]] isimli kişi cezadan çıkarıldı ve jail rolü kaldırıldı]
$footer[Unjail Kullanan Yetkili: $username;$authorAvatar]
$color[303136]
$channelSendMessage[$getServerVar[jaillog];{title:Kullanıcı jailden ayrıldı}{description:Bir kullanıcı jailden çıkarıldı.

Jaildan çıkarılan cezalı : $username[$mentioned[1;yes]]

Cezayı açan Gardiyan Yetkili : $username}{footer:$username}{color:303136}]
$takeRole[$mentioned[1;yes];$getServerVar[jailrol]]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[jailrol]]==true;Kullanıcı zaten jailde değil]
$argsCheck[>1;Lütfen birini etiketle]
$onlyIf[$mentioned[1]!=;Lütfen birini etiketle]
$onlyIf[$hasRole[$authorID;$getServerVar[jailyetkili]]==true;Bu komutu sadece **$roleName[$getServerVar[jailyetkili]]** rolüne sahip olanlar kullanabilir.]
$onlyBotPerms[manageroles;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Rolleri Yönet"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823199962136576060/unknown.png}]`
})