module.exports = ({
    name:"ban-yetkili",
    aliases:['banyetkili', 'ban-authorized', 'banperm'],
    bkz:"Kullanııcları banlmak için gerekecek rolü ayarlarsınız",
    code:`
$if[$getservervar[lang]==tr]
$if[$message[1]==ayarla]
$setServerVar[by;$mentionedRoles[1]]
$title[Ban Yetkili Rol Ayarlandı]
$description[**Ban yetkili rolü <@$authorid> tarafından <@&$mentionedRoles[1]> olarak ayarlandı!**]
$addTimestamp
$author[$username;$userAvatar[$authorID]]
$onlyIf[$getservervar[by]!=$mentionedRoles[1];Ban yetkili rolü zaten $roleName[$mentionedRoles[1]] olarak ayarlanmış.]
$onlyIf[$roleExists[$mentionedRoles[1]]==true;Etiketlediğin rol bulunamadı!]
$onlyIf[$mentionedRoles[1]!=;Ayarlanmasını istediğin ban yetkili rolünü etiketle.]
$elseIf[$message[1]==sıfırla]
$resetServerVar[by]
$title[Ban Yetkili Rolü Sıfırlandı]
$description[**Ban yetkili rolü <@$authorid> tarafından sıfırlandı!**

**Eski yetkili rol: <@&$getservervat[by]>**]
$addTimestamp
$author[$username;$userAvatar[$authorID]]
$onlyIf[$getservervar[by]!=;Ban yetkili rolü zaten ayarlanmamış.]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;Kullanılabilir ayarlar \`ayarla\` ile \`sıfırla\`dır.]
$onlyPerms[manageserver;Ban yetkili rolünü ayarlaman için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.]
$elseIf[$getservervar[lang]==en]
$if[$message[1]==set]
$setServerVar[by;$mentionedRoles[1]]
$title[Ban Authorized Role succesfuly set]
$description[**Ban authorized role set to <@&$ mentionedRoles[1]> by <@$authorid>! **]
$addTimestamp
$author[$username;$userAvatar[$authorID]]
$onlyIf[$getservervar[by]!=$mentionedRoles[1];Ban authority role is already set to $roleName[$mentionedRoles [1]].]
$onlyIf[$roleExists[$mentionedRoles[1]]==true;The role you tagged could not be found!]
$onlyIf[$mentionedRoles[1]!=;Tag the ban authority role you want set.]
$elseIf[$message[1]==reset]
$resetServerVar[by]
$title[Ban Authority Role Reset]
$description[**Ban Authorized role reset by <@$authorid> **

**Old Role: <@&$getservervat[by]>**]
$addTimestamp
$author[$username;$userAvatar[$authorID]]
$onlyIf[$getservervar[by]!=;Ban authority role is not already set.]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];set;reset]==true;Available settings are \`set\`to\`reset\`.]
$onlyPerms[manageserver;You must have the 'Manage Server' privilege to set the ban authority role.]
$endElseIf
$endif
 $onlyIf[$getServerVar[lang]!=none;EN: $customEmoji[yanlis] Set the server language to use my commands!

 TR: $customEmoji[yanlis] Komutlarımı kullanabilmek için sunucu dilini ayarlamalısın.
 \`$getServerVar[prefix]lang en/tr\`]
  $onlyIf[$getServerVar[lang]!=none;EN: $customEmoji[yanlis] Set the server language to use my commands!

 TR: $customEmoji[yanlis] Komutlarımı kullanabilmek için sunucu dilini ayarlamalısın.
 \`$getServerVar[prefix]lang en/tr\`]
`
})