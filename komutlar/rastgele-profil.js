const falsisdb = require("falsisdb")
const db = new falsisdb ("../database.json")
module.exports = ({
name:"rastgele-profil",
bkz:`Rastgele kullanıcı bilgisi atar. | ${db.info.owner}`,
code:`$title[Rastgele Kullanıcı Bilgisi;https://discord.com/users/$randomUserID]
$description[$customEmoji[edit;843482656725139516] Kullanıcı adı :$username[$randomUserID]
$customEmoji[tag;843482656725139516] Kullanıcı etiketi : $discriminator[$randomUserID]
$customEmoji[takvim;843482656725139516] Kullanıcı Kuruluş Tarihi: $creationDate[$randomUserID;date]
$customEmoji[flag;843482656725139516] Kullanıcının Sunucudaki adı : $nickname[$randomUserID]
$customEmoji[id;843482656725139516] Kullanıcının Avatarı : [Tıkla]($userAvatar[$randomUserID])
$customEmoji[members;843482656725139516] Kullanıcının Durumu : $replaceText[$replaceText[$replaceText[$replaceText[$status[$randomUserId];offline;Çevrimdışı;-1];online;Çevrimiçi:-1];dnd;Rahatsız etmeyin;-1];idle;Boşta;-1] - $replaceText[$getCustomStatus[$randomUSERID];none;Durum Boş;-1]]
$color[BDAAF9]
$thumbnail[$userAvatar[$randomUserID]`
})
