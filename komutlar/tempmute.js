module.exports = ({
name : "tempmute",
aliases: ["mute"],
code:`
$if[$getServerVar[mutelog]!=]
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının mute cezasının süresi doldu!;no]
$takeRoles[$mentioned[1];$getServerVar[mrol]]
$onlyIf[$hasRoles[$mentioned[1];$getservervar[mrol]]==true;]
$setUserVar[mutespit;0;$mentioned[1]]
$wait[$noMentionMessage[1]]
$setTimeout[$noMentionMessage[1];
mutekisi: $mentioned[1]
muterol: $getServerVar[mrol]
mutekanal: $channelID
mutemsg: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının mute cezasının süresi doldu!]
$channelSendMessage[$getservervar[mutelog];{title:Mute İşlemi}{description:**<@$mentioned[1]> kullanıcısına <@$authorID> tarafından <#$channelID> kanalında mute atıldı!**

**Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Belirtlmedi.;-1];false;$messageslice[2];-1]\`\`
**Süre:** \`$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];m; Dakika;-1];h; Saat;-1];d; Gün;-1];s; Saniye;-1]\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$setUserVar[mutespit;1;$mentioned[1]]
$giveRoles[$mentioned[1;yes];$getServerVar[mrol]]
$reply[$messageID;Başarıyla <@$mentioned[1]> kişisi $replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];m; Dakika;-1];h; Saat;-1];d; Gün;-1];s; Saniye;-1] boyunca susturdu.;yes]
$else
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!;no]
$takeRoles[$mentioned[1;yes];$getServerVar[mrol]]
$onlyIf[$hasRoles[$mentioned[1];$getservervar[mrol]]==true;]
$setUserVar[mutespit;0;$mentioned[1]]
$wait[$nomentionmessage[1]]
$setTimeout[$noMentionMessage[1];
mutekisi: $mentioned[1]
muterol: $getServerVar[mrol]
mutekanal: $channelID
mutemsg: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının mute cezasının süresi doldu!]
$setUserVar[mutespit;1;$mentioned[1]]
$giveRoles[$mentioned[1;yes];$getServerVar[mrol]]
$reply[$messageID;Başarıyla <@$mentioned[1]> kişisi $replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];m; Dakika;-1];h; Saat;-1];d; Gün;-1];s; Saniye;-1] boyunca susturdu.;yes]
$endif
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Senle eşit yada senden yüksek role sahip kullanıcılara mute atamam]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Benle eşit yada benden yüksek role sahip kullanıcılara mute atamam]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[mrol]]!=true;Kullanıcıya zaten mute atılmış.]
$onlyIf[$checkContains[$toLowerCase[$noMentionMessage[1];1s;2s;3s;4s;5s;6s;7s;8s;9s;10s;11s;12s;13s;14s;15s;16s;17s;18s;19s;20s;21s;22s;23s;24s;25s;26s;27s;28s;29s;30s;31s;32s;33s;34s;35s;36s;37s;38s;39s;40s;41s;42s;43s;44s;45s;46s;47s;48s;49s;50s;51s;52s;53s;54s;55s;56s;57s;58s;59s;1m;2m;3m;4m;5m;6m;7m;8m;9m;10m;11m;12m;13m;14m;15m;16m;17m;18m;19m;20m;21m;22m;23m;24m;25m;26m;27m;28m;29m;30m;31m;32m;33m;34m;35m;36m;37m;38m;39m;40m;41m;42m;43m;44m;45m;46m;47m;48m;49m;50m;51m;52m;53m;54m;55m;56m;57m;58m;59m;1h;2h;3h;4h;5h;6h;7h;8h;9h;10h;11h;12h;13h;14h;15h;16h;17h;18h;19h;20h;21h;22h;23h;1d;2d;3d;4d;5d;6d;7d;8d;9d;10d;11d;12d;13d;14d;15d;16d;17d;18d;19d;20d;21d;22d;23d;24d]]==true;Doğru zaman biçimi girin.Örnek 1m/1h/1d.Ayrıca zaman biçimi sadece 1s ile 24d(1 saniye ile 24 gün) arasında belirtilebilir.]
$onlyIf[$mentioned[1]!=$ownerID;Sunucu sahibine mute atamam.]
$onlyIf[$mentioned[1]!=$authorID;Kendine mute atmak mı istiyorsun :D?]
$onlyIf[$memberExists[$mentioned[1]]==true;Mute atmamı istediğin kullanıcı bu sunucuda bulunmuyor.]
$onlyIf[$mentioned[1]!=;Mute atılacak kullanıcıyı etiketlemelisin.]
  $onlyPerms[manageroles;{title:Hata}{description:Bu komutu kullanabilmek için **Rolleri Yönet** Yetkisine sahip olman gerekiyor.}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823199962136576060/unknown.png}]
$onlyIf[$getServerVar[my]==;{execute:my}]
$onlyIf[$getServerVar[mrol]!=;Mute ceza rolü ayarlanmamış.Ayarlamak için \`$getservervar[prefix]muterol <@&rol>\`]
$onlyBotPerms[manageroles;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Rolleri Yönet"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823199962136576060/unknown.png}]`
})