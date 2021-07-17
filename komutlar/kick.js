module.exports = {
    name:"kick",
    code:`
$channelSendMessage[$getservervar[kicklog];{title:Kick İşlemi}{description:**<@$mentioned[1]> kullanıcısı <@$authorID> tarafından <#$channelID> kanalında sunucudan atıldı!**

**Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Sebep Belirtlmedi.;-1];false;$noMentionMessage;-1]\`\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$onlyIf[$getservervar[kicklog]!=;]
$kick[$mentioned[1];$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Sebep Belirtlmedi.;-1];false;$noMentionMessage;-1]]
$sendMessage[{description:<@$mentioned[1]>, <@$authorID> tarafından kicklendi!

Sebep: \`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Sebep Belirtlmedi.;-1];false;$noMentionMessage;-1]\`\`}{timestamp}{footer:$serverName}{author:$username:$authorAvatar};no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Senle eşit yada yüksek role sahip kullanıcıları kickleyemem]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Benle eşit yada yüksek role sahip kullanıcıları kickleyemem]
$onlyIf[$mentioned[1]!=$ownerID;Benden sunucu sahibini kicklememi mi istiyorsun :D?]
$onlyIf[$mentioned[1]!=$authorID;Kendini kicklemek mi istiyorsun :D?]
$onlyIf[$memberExists[$mentioned[1]]==true;Kick atmamı istediğin kişi bu sunucuda bulunmuyor]
$onlyIf[$mentioned[1]!=;Kick atmamı istediğin kişiyi etiketle.]
$onlyPerms[kick;Kullanıcıları kicklemek için \`\`Üyeleri At\`\` yetkisine sahip olmalısın.]
$onlyBotPerms[kick;Kullanıcıyı kicklemeye yetkim yok!]
`
}