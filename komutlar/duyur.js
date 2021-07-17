module.exports = ({
name:"duyur",
code:`
$djsEval[const falsisdb = require('falsisdb')
const db = new falsisdb('./database.json')
db.set('duyuru', "$message");no]
$setGlobalUserVar[duyuru;$message;539843855567028227]
$argsCheck[>1;Dostum, Bir duyuru yaz]
$title[Duyuru Başarılı]
$description[Başarıyla duyuruyu yardım komutuna entegre ettim.

Entegre edilen duyuru : \`$message\`
Entegre Eden Kişi : \`$username\`]
$color[303136]
$footer[$username[$clientID];$userAvatar[$clientID]]
$onlyForIDs[539843855567028227;Bu Komutu sahibime özel olduğunu sanırım söylemiştim]`
})