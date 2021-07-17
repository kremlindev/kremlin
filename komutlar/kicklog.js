module.exports = {
    name:"kicklog",
    code:`
$if[$message[1]==ayarla]
$setServerVar[kicklog;$mentionedChannels[1]]
$title[Kick Log Ayarlandı]
$description[Kick log kanalı <@$authorID> tarafından <#$mentionedChannels[1]> olarak ayarlandı!]
$footer[$username;$authorAvatar]
$addTimestamp
$onlyIf[$serverChannelExists[$mentionedChannels[1]]==true;Etiketlediğin kanal bu sunucuda bulunmuyor.]
$onlyIf[$mentionedChannels[1]!=;Kick log kanalını etiketlemelisin.]
$onlyIf[$getServerVar[kicklog]==;Kick log kanalı zatan ayarlanmış.]
$elseIf[$message[1]==sıfırla]
$resetServerVar[kicklog]
$title[Kick Log Sıfırlandı]
$description[Kick log kanalı <@$authorID> tarafından sıfırlandı!

Eski log kanalı: <#$getServerVar[kicklog]>]
$footer[$username;$authorAvatar]
$addTimestamp
$onlyIf[$getServerVar[kicklog]!=;Kick log kanalı zatan ayarlanmamış.]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;Kick log kanalını ayarlamak istiyorsan \`\`$getServerVar[prefix]kick-log ayarla <#kanal>\`\` sıfırlamak istiyorsan \`\`$getServerVar[prefix]kick-log sıfırla\`\` şekillerinde komudu kullanabilirsin]
$onlyPerms[manageserver;Bu komutu kullanabilmek için \`\`Sunucuyu Yönet\`\` yetkisine sahip olmalısın.]
`
}