module.exports = ({
name : "jail",
code:`
$if[$getServerVar[jaillog]!=]
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!;no]
$giveRoles[$mentioned[1];$joinSplitText[;]]
$textSplit[$getUserVar[jailrolcükler;$mentioned[1]];, ]
$takeRoles[$mentioned[1];$getServerVar[jailrol]]
$wait[$noMentionMessage[1]]
$setTimeout[$noMentionMessage[1];
jailkisi: $mentioned[1]
jailrol: $getServerVar[jailrol]
jailkanal: $channelID
jailrolleri: $getUserVar[jailrolcükler;$mentioned[1]]
jailmsg: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!]
$channelSendMessage[$getservervar[jaillog];{title:Jail İşlemi}{description:**<@$mentioned[1]> kullanıcısına <@$authorID> tarafından <#$channelID> kanalında jail atıldı!**

**Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Belirtlmedi.;-1];false;$messageSlice[2];-1]\`\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$giveRoles[$mentioned[1;yes];$getServerVar[jailrol]]
$channelSendMessage[$channelID;{title:Kullanıcı jaile katıldı}{description:Kullanıcı jaile atıldı

Jaile atılan cezalı : $username[$mentioned[1;yes]]

Cezayı veren Gardiyan Yetkili : $username}{footer:$username}{color:303136}]
$takeRoles[$mentioned[1];$joinSplitText[;]]
$textSplit[$userRoles[$mentioned[1];ids];, ]
$setUserVar[jailrolcükler;$userRoles[$mentioned[1];ids];$mentioned[1]]
$else
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!;no]
$giveRoles[$mentioned[1];$joinSplitText[;]]
$textSplit[$getUserVar[jailrolcükler;$mentioned[1]];, ]
$takeRoles[$mentioned[1];$getServerVar[jailrol]]
$wait[$noMentionMessage[1]]
$setTimeout[$noMentionMessage[1];
jailkisi: $mentioned[1]
jailrol: $getServerVar[jailrol]
jailkanal: $channelID
jailrolleri: $getUserVar[jailrolcükler;$mentioned[1]]
jailmsg: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!]
$giveRoles[$mentioned[1;yes];$getServerVar[jailrol]]
$channelSendMessage[$channelID;{title:Kullanıcı jaile katıldı}{description:Kullanıcı jaile atıldı

Jaile atılan cezalı : $username[$mentioned[1;yes]]

Cezayı veren Gardiyan Yetkili : $username}{footer:$username}{color:303136}]
$takeRoles[$mentioned[1];$joinSplitText[;]]
$textSplit[$userRoles[$mentioned[1];ids];, ]
$setUserVar[jailrolcükler;$userRoles[$mentioned[1];ids];$mentioned[1]]
$endif
$onlyIf[$userRoles[$mentioned[1]]!=;{execute:jail}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Senle eşit yada senden yüksek role sahip kullanıcılara jail atamam]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Benle eşit yada benden yüksek role sahip kullanıcılara jail atamam]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[jailrol]]!=true;Kullanıcı zatten jailde]
$onlyIf[$hasRole[$authorID;$getServerVar[jailyetkili]]==true;Bu komutu sadece $roleName[$getServerVar[jailyetkili]] rolüne sahip olanlar kullanabilir.]
$onlyIf[$checkContains[$toLowerCase[$noMentionMessage[1];1s;2s;3s;4s;5s;6s;7s;8s;9s;10s;11s;12s;13s;14s;15s;16s;17s;18s;19s;20s;21s;22s;23s;24s;25s;26s;27s;28s;29s;30s;31s;32s;33s;34s;35s;36s;37s;38s;39s;40s;41s;42s;43s;44s;45s;46s;47s;48s;49s;50s;51s;52s;53s;54s;55s;56s;57s;58s;59s;1m;2m;3m;4m;5m;6m;7m;8m;9m;10m;11m;12m;13m;14m;15m;16m;17m;18m;19m;20m;21m;22m;23m;24m;25m;26m;27m;28m;29m;30m;31m;32m;33m;34m;35m;36m;37m;38m;39m;40m;41m;42m;43m;44m;45m;46m;47m;48m;49m;50m;51m;52m;53m;54m;55m;56m;57m;58m;59m;1h;2h;3h;4h;5h;6h;7h;8h;9h;10h;11h;12h;13h;14h;15h;16h;17h;18h;19h;20h;21h;22h;23h;1d;2d;3d;4d;5d;6d;7d;8d;9d;10d;11d;12d;13d;14d;15d;16d;17d;18d;19d;20d;21d;22d;23d;24d]]==true;Doğru zaman biçimi girin.Örnek 1m/1h/1d.Ayrıca zaman biçimi sadece 1s ile 24d(1 saniye ile 24 gün) arasında belirtilebilir.]
$onlyIf[$mentioned[1]!=$ownerID;Sunucu sahibine jail atamam.]
$onlyIf[$mentioned[1]!=$authorID;Kendine jail atmak mı istiyorsun :D?]
$onlyIf[$memberExists[$mentioned[1]]==true;Jail atmamı istediğin kullanıcı bu sunucuda bulunmuyor.]
$onlyIf[$mentioned[1]!=;Jail atılacak kullanıcıyı etiketlemelisin.]
$onlyIf[$getServerVar[jailyetkili]!=;Jail yetkili rolü ayarlanmamış.Ayarlamak için \`$getservervar[prefix]jailyetkili <@&rol>\`]
$onlyIf[$getServerVar[jailrol]!=;Jail ceza rolü ayarlanmamış.Ayarlamak için \`$getservervar[prefix]jailrol <@&rol>\`]
$onlyBotPerms[manageroles;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Rolleri Yönet"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823199962136576060/unknown.png}]`
})