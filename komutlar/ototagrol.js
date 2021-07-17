module.exports = ({
    name:"ototag",
    code:`
$setServerVar[tagkanal;$mentionedChannels[1]]
$setServerVar[tagrol;$mentionedRoles[1]]
$setServerVar[tag;$messageSlice[2]]
$title[Ototag Ayarlandı]
$description[Ototag sistemi başarıyla ayarlandı.

**Tag Log Kanal:** <#$mentionedChannels[1]>
**Tag:** $messageSlice[2]]
$author[$username;$authorAvatar]
$addTimestamp
$onlyIf[$messageSlice[2]!=;Tag'ı belirtmelisin.]
$onlyIf[$mentionType[$message[2]]==role;Doğru kullanım --> \`$getservervar[prefix]ototag ayarla <#kanal> <@&rol> <tag>\`]
$onlyIf[$mentionType[$message[1]]==channel;Doğru kullanım --> \`$getservervar[prefix]ototag ayarla <#kanal> <@&rol> <tag>\`]
$onlyIf[$mentionedRoles[1]!=;Tag rolünü etiketlemelisin.]
$onlyIf[$mentionedChannels[1]!=;Tag log kanalını etiketlemelisin.]
$onlyPerms[manageserver;Bu komudu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.]
`
})