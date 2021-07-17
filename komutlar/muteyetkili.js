module.exports = ({
    name:"mute-yetkili",
    aliases:['muteyetkili'],
    code:`
$if[$message[1]==ayarla]
$setServerVar[my;$mentionedRoles[1]]
$title[Mute Yetkili Rol Ayarlandı]
$description[**Mute yetkili rolü <@$authorid> tarafından <@&$mentionedRoles[1]> olarak ayarlandı!**]
$addTimestamp
$author[$username;$userAvatar[$authorID]]
$onlyIf[$getservervar[my]!=$mentionedRoles[1];Mute yetkili rolü zaten $roleName[$mentionedRoles[1]] olarak ayarlanmış.]
$onlyIf[$roleExists[$mentionedRoles[1]]==true;Etiketlediğin rol bulunamadı!]
$onlyIf[$mentionedRoles[1]!=;Ayarlanmasını istediğin mute yetkili rolünü etiketle.]
$elseIf[$message[1]==sıfırla]
$resetServerVar[my]
$title[Mute Yetkili Rolü Sıfırlandı]
$description[**Mute yetkili rolü <@$authorid> tarafından sıfırlandı!**

**Eski yetkili rol: <@&$getservervar[my]>**]
$addTimestamp
$author[$username;$userAvatar[$authorID]]
$onlyIf[$getservervar[my]!=;Mute yetkili rolü zaten ayarlanmamış.]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;Kullanılabilir ayarlar \`ayarla\` ile \`sıfırla\`dır.]
$onlyPerms[manageserver;Mute yetkili rolünü ayarlamıa için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.]
`
})