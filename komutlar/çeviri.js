module.exports = ({
name:"çevir",
bkz:"Yazılan metni yazılan dillerde çevirir",
aliases:["çeviri", "translate"],
code:`$title[Kremlin Çeviri]
$description[Çeviri Sonuçları;
$addField[$customEmoji[translate;843482656725139516] Çevirilen Dil;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];tr;Türkçe;-1];en;İngilizce;-1];fr;Fransızca;-1];de;Almanca;-1];ru;Rusça;-1];aze;Azerbaycan Türkçesi;-1];ita;İtalyanca;-1];esp;İspanyolca;-1];du;Flemenkçe;-1];arm;Ermenice;-1];chi;Çince;-1];ja;Japonca;-1]]
$addField[$customEmoji[translate;843482656725139516] Çevirilen Metin;$replaceText[$jsonRequest[https://api.falsisdev.ga/translate?key=a1q7klzhassx59uvi&text=$messageSlice[2]&lang=$message[1]&from=$message[2];translated];31;Ulan sj ne komik adamsın;-1]]
]
$color[BDAAF9]
$thumbnail[$authorAvatar]
$suppressErrors[Çeviri Başarısız]
$onlyIf[$messageSlice[2]!=;:x: Lütfen çevirilecek metni yazın.]
$onlyIf[$message[1]!=;:x: Lütfen çevirilecek dili yazın. Örnek: kr-çeviri tr en Hello]
$onlyIf[$message[2]!=;:x: Lütfen çevirilecek dili yazın. Örnek: kr-çeviri tr en Hello]`
})