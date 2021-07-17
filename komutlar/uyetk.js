module.exports = ({
name:"uyetkili",
aliases:['uyarı-yetkili', 'uyetk'],
bkz:"Uyarı verecek olan yetkiliyi ayarlar",
code:`$setServerVar[uyetk;$mentionedRoles[1]]
$title[Başarıyla Uyarı Yetkilisi Ayarlandı]
$description[Uyarı yetkilisi $username tarafından başarıyla $roleName[$mentionedRoles[1]] olarak ayarlandı]
$color[BDAAF9]
$onlyPerms[admin;$customEmoji[cross;843482656725139516] Bu komutu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olman gerekiyor.]
$onlyIf[$mentionedRoles[1]!=;$customEmoji[cross;843482656725139516] Ayarlamak istediğin rolü etiketle.]`
})