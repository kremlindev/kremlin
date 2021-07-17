module.exports = ({
name:"kanal",
aliases:"kanal-bilgi",
bkz:"Kanal bilgilerini görüntüler",
code:`$title[Kanal Bilgileri] $description[
» Kanal Bilgilerini görüntülüyorsunuz
$addField[$customEmoji[secret;843482656725139516] Kanal Gizliliği;$replaceText[$replaceText[$channelNSFW[$mentionedChannels[1;yes]];true;+18;-1];false;+18 Değil;-1]]
$addField[$customEmoji[kitap;843482656725139516] Kanal Kategorisi;$channel[$mentionedChannels[1;yes];parentname] / $channel[$mentionedChannels[1;yes];parentid]
$addField[$customEmoji[saat;843482656725139516] Kanal oluşturulma tarihi;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentionedChannels[1;yes];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1] önce oluşturulmuş]
$addField[$customEmoji[mapregion;843482656725139516] Kanal konumu;$channel[$mentionedChannels[1;yes];rawposition]. Sırada]
$addField[$customEmoji[flag;843482656725139516] Kanal Türü;$replaceText[$channelType[$mentionedChannels[1;yes]];text;Yazı kanalı;-1]]
$addField[$customEmoji[id;843482656725139516] Kanal ID;$mentionedChannels[1;yes]]
$addField[$customEmoji[edit;843482656725139516] Kanal Açıklaması;$replaceText[$channelTopic[$mentionedChannels[1;yes]];none;[Birşey girilmemiş](https://www.kremlin-bot.fa/davet);-1]]
$addField[$customEmoji[channel;843482656725139516] Kanal adı;$channelName[$mentionedChannels[1;yes]]]
]
$color[BDAAF9]
$thumbnail[$serverIcon]`
})
