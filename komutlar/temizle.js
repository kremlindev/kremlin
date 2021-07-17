module.exports = ({
name: "temizle",
aliases:['sil','kaldır'],
code: `
$clear[$noMentionMessage[1]]
$deletecommand
$deleteIn[5s]
$title[$noMentionMessage[1] Mesaj Uzaya fırlatıldı 🚀]
$color[303136]
$suppressErrors[$customEmoji[dosya] Discord Api Hatası! Discord Api 14 günden eski meajları silmeme izin vermiyor! ]
$onlyPerms[managemessages;$customEmoji[dosya] Bu komutu kullanmak için Mesajları Yönet yetkisine sahip olmanız gerekmektedir.]
$onlyIf[$isNumber[$noMentionMessage[1]]==true;$customEmoji[dosya] Lütfen geçerli bir argüman girin. \`kr-temizle 5\` gibi]`
})