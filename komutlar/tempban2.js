module.exports = ({
name: "tempban",  
code: `
$if[$getservervar[banlog]==]
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının ban cezasının süresi doldu!;no]
$unban[$mentioned[1]]
$wait[$noMentionMessage[1]]
$setTimeout[$nomentionmessage[1];bankisi: $mentioned[1]
bankanal: $channelID
banmsg: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının ban cezasının süresi doldu!]
$ban[$mentioned[1];$messageSlice[2]]
$sendMessage[{description:**<@$mentioned[1]>, $username, tarafından süreli banlandı.**

Sebep: \`$replaceText[$replaceText[$checkCondition[$messageslice[2]==];true;Sebep Belirtilmedi!;-1];false;$messageslice[2];-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$mentioned[1]]:$userAvatar[$mentioned[1]]};no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Banlamamı istediğin kullanıcı senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksek.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Banlamamı istediğin kullanıcı benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksek.]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Banlamamı istediğin kullanıcı senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksek.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Banlamamı istediğin kullanıcı benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksek.]
$onlyIf[$mentioned[1]!=$ownerId;Sunucu sahibini bu sunucudan sende bende banlayamam.]
$onlyIf[$mentioned[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
$onlyIf[$memberExists[$mentioned[1]]==true;Etiketlediğin kullanıcıyı bulamadım.]
$onlyIf[$mentioned[1]!=;Banlamamı istediğin kullanıcıyı etiketle yada ID'sini belirt.]
$else
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının ban cezasının süresi doldu!;no]
$unban[$mentioned[1]]

$wait[$noMentionMessage[1]]
$setTimeout[$nomentionmessage[1];bankisi: $mentioned[1]
bankanal: $channelID
banmsg: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının ban cezasının süresi doldu!]
$ban[$mentioned[1];$messageSlice[2]]
$channelSendMessage[$getservervar[banlog];{title:Ban İşlemi}{description:**<@$mentioned[1]> kullanıcısına <@$authorID> tarafından <#$channelID> kanalında süreli ban atıldı!**

**Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$messageslice[2]==];true;Sebep Belirtlmedi.;-1];false;$messageslice[2];-1]\`\`
**Süre:** \`$replaceText[$replaceText[$replaceText[$replaceText[$nomentionmessage[1];m; Dakika;-1];h; Saat;-1];d; Gün;-1];s; Saniye;-1]\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$sendMessage[{description:**<@$mentioned[1]>, $username, tarafından süreli banlandı.**

Sebep: \`$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Belirtilmedi!;-1];false;$messageSlice[2];-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$mentioned[1]]:$userAvatar[$mentioned[1]]};no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Banlamamı istediğin kullanıcı senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksek.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Banlamamı istediğin kullanıcı benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksek.]
$onlyIf[$mentioned[1]!=$ownerId;Sunucu sahibini bu sunucudan sende bende banlayamam.]
$onlyIf[$mentioned[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
$onlyIf[$memberExists[$mentioned[1]]==true;Belirttiğin kullanıcıyı bulamadım.]
$endif
$onlyIf[$checkContains[$toLowerCase[$noMentionMessage[1];1s;2s;3s;4s;5s;6s;7s;8s;9s;10s;11s;12s;13s;14s;15s;16s;17s;18s;19s;20s;21s;22s;23s;24s;25s;26s;27s;28s;29s;30s;31s;32s;33s;34s;35s;36s;37s;38s;39s;40s;41s;42s;43s;44s;45s;46s;47s;48s;49s;50s;51s;52s;53s;54s;55s;56s;57s;58s;59s;1m;2m;3m;4m;5m;6m;7m;8m;9m;10m;11m;12m;13m;14m;15m;16m;17m;18m;19m;20m;21m;22m;23m;24m;25m;26m;27m;28m;29m;30m;31m;32m;33m;34m;35m;36m;37m;38m;39m;40m;41m;42m;43m;44m;45m;46m;47m;48m;49m;50m;51m;52m;53m;54m;55m;56m;57m;58m;59m;1h;2h;3h;4h;5h;6h;7h;8h;9h;10h;11h;12h;13h;14h;15h;16h;17h;18h;19h;20h;21h;22h;23h;1d;2d;3d;4d;5d;6d;7d;8d;9d;10d;11d;12d;13d;14d;15d;16d;17d;18d;19d;20d;21d;22d;23d;24d]]==true;Doğru zaman biçimi girin.Örnek 1m/1h/1d.Ayrıca zaman biçimi sadece 1s ile 24d(1 saniye ile 24 gün) arasında belirtilebilir.]
$onlyIf[$isNumber[$message[1]]==false;{execute:tempban2}]
$onlyIf[$message[2]!=;Doğru kullanım -> \`$getservervar[prefix]tempban <@kişi> <süre> (sebep)\`]
$onlyIf[$message!=;Doğru kullanım -> \`$getservervar[prefix]tempban <@kişi> <süre> (sebep)\`]
$onlyIf[$hasRoles[$authorID;$getservervar[by]]==true;Kullanıcılara süreli ban atmak için **$roleName[$getservervar[by]]** adlı role sahip olmalısın.]
$onlyBotPerms[ban;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyIf[$getServerVar[by]!=;]
`
})