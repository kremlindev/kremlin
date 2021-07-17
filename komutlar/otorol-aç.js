module.exports = ({
    name:"otorol-aç",
    code:`$onlyPerms[admin;$customEmoji[yanlis] Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor.]
$argsCheck[>1;$customEmoji[yanlis] Hata, Lütfen Bir Rol Etiketleyin]
$setServerVar[otorolrolü;$mentionedRoles[1]]
$customEmoji[krdogru] Başarılı, Otorol $roleName[$mentionedRoles[1]] olarak ayarlandı.
$suppressErrors[$customEmoji[yanlis] Hata, Lütfen tekrar deneyin]`
})