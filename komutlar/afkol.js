module.exports = ({
name:"afk",
code:`
$deletecommand
$deleteIn[17s]
$setVar[afkkk;$sum[$getVar[afkkk];1]]
$setGlobalUserVar[afk;evet]
$setGlobalUserVar[afkc;0]
$setGlobalUserVar[afks;$message]
$setGlobalUserVar[afkss;$dateStamp]
$description[$customEmoji[flag;843482656725139516] Afk Olma Başarılı
$customEmoji[edit;843482656725139516] Afk Sebebi: \`$message\`
$customEmoji[saat;843482656725139516] Afk Zamanı Kaydedildi: $sum[$hour;3].$minute
$customEmoji[members;843482656725139516] Toplam AFK Kişi Sayısı: \`$getVar[afkkk]\`]
$color[BDAAF9]
$onlyIf[$message!=;Lütfen bir afk sebebi belirleyin]`
})