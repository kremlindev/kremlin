module.exports = ({
name:"muterol",
code:`$customEmoji[krdogru] Başarıyla Mute Rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı. Artık birine mute atıldığında ona bu rolü vereceğim
  $setServerVar[mrol;$mentionedRoles[1]]
  $onlyPerms[manageroles;$customEmoji[yanlis] Bu Komutu Kullanmak İçin **Rolleri Yönet** Yetkisine Sahip Olman Gerekiyor.]
  $onlyBotPerms[manageroles;$customEmoji[yanlis] Bu Komutu Kullanmak İçin **Rolleri Yönet** Yetkisine Sahip olma**m** Gerekiyor.]
  $onlyIf[$message[1]!=;$customEmoji[yanlis] Hata, Lütfen Bir Rol Etiketle]
  $suppressErrors[$customEmoji[yanlis] Hata, Lütfen tekrar deneyin.]`
})