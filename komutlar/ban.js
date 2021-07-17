module.exports = ({
name: "ban",  
code: `
$if[$isNumber[$message[1]]==false]
$channelSendMessage[$getservervar[banlog];{title:$customEmoji[hammer;843482656725139516] Ban İşlemi}{description:**<@$mentioned[1]> kullanıcısı <@$authorID> tarafından <#$channelID> kanalında sunucudan banlandı!**

$customEmoji[edit;843482656725139516] **Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Sebep Belirtlmedi.;-1];false;$noMentionMessage;-1]\`\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$onlyIf[$getservervar[banlog]!=;]
$ban[$mentioned[1];$noMentionMessage]
$sendMessage[{description:**<@$mentioned[1]>, $username, tarafından banlandı.**

Sebep: \`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Sebep Belirtilmedi!;-1];false;$nomentionmessage;-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$mentioned[1]]:$userAvatar[$mentioned[1]]};no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcının en yüksek rolü, senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksekte.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcının en yüksek rolü, benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksekte.]
$onlyIf[$mentioned[1]!=$ownerId;$customEmoji[cross;843482656725139516] Sunucu sahibini bu sunucudan sende bende banlayamam.]
$onlyIf[$mentioned[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
$onlyIf[$memberExists[$mentioned[1]]==true;$customEmoji[cross;843482656725139516] Etiketlediğin kullanıcıyı bulamadım.]
$onlyIf[$mentioned[1]!=$botOwnerID;$customEmoji[erkendonemdestekcisi] Sahibimi banlıycan? oQ]
$onlyIf[$mentioned[1]!=;$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcıyı etiketle yada ID'sini belirt.]
$elseIf[$isNumber[$message[1]]==true]
$channelSendMessage[$getservervar[banlog];{title:$customEmoji[hammer;843482656725139516] Ban İşlemi}{description:**<@$message[1]> kullanıcısı <@$authorID> tarafından <#$channelID> kanalında sunucudan banlandı!**

$customEmoji[edit;843482656725139516] **Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Sebep Belirtilmedi.;-1];false;$messageSlice[1];-1]\`\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$onlyIf[$getservervar[banlog]!=;]
$ban[$message[1];$messageSlice[1]]
$sendMessage[{description:**<@$message[1]>, $username, tarafından banlandı.**

Sebep: \`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Sebep Belirtilmedi!;-1];false;$messageSlice[1];-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$message[1]]:$userAvatar[$message[1]]};no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$message[1]]];$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcının en yüksek rolü, senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksekte.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$message[1]]];$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcının en yüksek rolü, benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksekte.]
$onlyIf[$message[1]!=$ownerId;$customEmoji[cross;843482656725139516] Sunucu sahibini bu sunucudan sende bende banlayamam.]
$onlyIf[$message[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
$onlyIf[$memberExists[$message[1]]==true;$customEmoji[cross;843482656725139516] Belirttiğin kullanıcıyı bulamadım.]
$endelseIf
$endif
$onlyIf[$message!=;$customEmoji[cross;843482656725139516] Doğru kullanım -> \`$getservervar[prefix]ban <@kişi> (sebep)\`]
$onlyPerms[ban;{title:<:hata:824357451356569600> Hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmalısın}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyBotPerms[ban;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyIf[$getServerVar[by]==;{execute:by}]
`
})