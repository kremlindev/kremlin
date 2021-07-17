module.exports = ({
    name:"invite-kanal",
    code:`
$if[$message[1]==ayarla]
$setServerVar[invitekanal;$mentionedChannels[1]]
$title[İnvite Kanalı Ayarlandı]
$description[İnvite kanalı ayarlandı.

**İnvite Kanalı:** <#$mentionedChannels[1]>]
$addTimestamp
$author[$username;$authorAvatar]
$onlyIf[$mentionedChannels[1]!=$getServerVar[invitekanal];İnvite kanalı zaten <#$getservervar[invitekanal]> olarak ayarlanmış.]
$onlyIf[$serverChannelExists[$mentionedChannels[1]]==true;Belirttiğin invite kanalı bu sunucuda bulunmuyor.]
$onlyIf[$mentionedChannels[1]!=;İnvite kanalını belirtmelisin]
$argsCheck[>1;Doğru kullanım -> \`$getservervar[prefix]invite-kanal ayarla <#kanal>\`]
$elseIf[$message[1]==sıfırla]
$resetServerVar[invitekanal]
$title[İnvite Kanalı Sıfırlandı]
$description[İnvite kanalı sıfırlandı.
**Eski İnvite Kanalı:** <#$getservervar[invitekanal]>]
$addTimestamp
$author[$username;$authorAvatar]
$onlyIf[$getServerVar[invitekanal]!=;İnvite kanalı zaten ayarlanmamış]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;Kullanılabilir ayarlar \`ayarla\` ile \`sıfırla\`dır.]
$onlyPerms[manageserver;Bu komudu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.]
`
})