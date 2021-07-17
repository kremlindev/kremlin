module.exports = ({
    name:"invite-rol",
    code:`$if[$message[1]==ekle]
$title[Invite Rol Eklendi!]
$description[**Invite Sayısı:** $message[2]
**Invite Rolü:** <@&$mentionedRoles[1]>]
$addTimestamp
$author[$username;$authorAvatar]
$footer[Eğer ki herhangi bir kullanıcı invite hedefine ulaştığında botun yeterli yetkisi yok ise rol verilmeyecektir!]
$setServerVar[inviteroller;$getServerVar[inviteroller]|$message[2]|$mentionedRoles[1]]
$onlyIf[$mentionType[$message[3]]==role;Doğru kullanım ->\`$getServerVar[prefix]invite-rol <invite sayısı> <@&rol etiket>\`]
$onlyIf[$mentionedRoles[1]!=;Invite rolünü etiketlemelisin.Doğru kullanım ->\`$getServerVar[prefix]invite-rol ekle <invite sayısı> <@&rol etiket>\`]
$onlyIf[$message[2]<250;Invite sayısı \`250\`den küçük olmalıdır.]
$onlyIf[$message[3]>0;Invite sayısı \`0\`dan büyük olmalıdır.]
$onlyIf[$isNumber[$message[2]]==true;Doğru kullanım ->\`$getServerVar[prefix]invite-rol ekle <invite sayısı> <@&rol etiket>\`]
$elseIf[$message[1]==sil]
$setServerVar[inviteroller;$joinSplitText[|]]
$removeSplitTextElement[$findTextSplitIndex[$message[2]];$sum[$findTextSplitIndex[$message[2]];1]]
$title[Invite Rol Silindi!]
$description[**Eski Invite Sayısı:** $message[2]
**Eski Invite Rolü:** <@$splitText[$sum[$findTextSplitIndex[$message[2]];1]]&>]
$addTimestamp
$author[$username;$authorAvatar]
$onlyIf[$findTextSplitIndex[$message[2]]!=0;\`$message[2]\` tane invite'a karşılık verilen herhangi bir rol yok.]
$textSplit[$getServerVar[inviteroller];|]
$onlyIf[$isNumber[$message[2]]==true;Silmek istediğin invite sayısını belirt(Rol, sistemden otomatik silinecek).Doğru kullanım ->\`$getServerVar[prefix]invite-rol sil <invite sayısı>\`]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];ekle;sil]==true;Kullanılabilir ayarlar \`ekle\` ve \`sil\`dir.]
$onlyBotPerms[manageserver;Bu komudu uygulayabilmem için \`Sunucuyu Yönet\` yetkisine sahip olmam gerekiyor.]
$onlyPerms[manageserver;Bu komudu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.]
`
})