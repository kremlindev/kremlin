module.exports = ({
name:"npm",
bkz:"Npmjs sitesinden npm arar.",
code:`$author[$noMentionMessage[1] Npm Paketi Araması;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3kSM6cb8Dfj0JqsZ6hQSriUXLiaZXs6IQg&usqp=CAU]
$description[Aranan Npm Paketi : \`$noMentionMessage[1]\`

**Sonuçlar**
Bulunan Paket;
İsim : \`$jsonRequest[https://api.leref.ga/npm?search=$noMentionMessage[1];name]\`
Açıklama : \`$jsonRequest[https://api.leref.ga/npm?search=$noMentionMessage[1];description]\`
Son Versiyon : \`$jsonRequest[https://api.leref.ga/npm?search=$noMentionMessage[1];version]\`
Sahibi :
\`$jsonRequest[https://api.leref.ga/npm?search=$noMentionMessage[1];publisher]\`
Anahtar Kelimeler;
\`$replaceText[$jsonRequest[https://api.leref.ga/npm?search=$noMentionMessage[1];keywords];,;, ;-1]\`
Npmjs Linki:
[Tıkla]($jsonRequest[https://api.leref.ga/npm?search=$noMentionMessage[1];npm])

Kremlin Npmjs Arama]
$thumbnail[$authoravatar]
$color[RED]
$onlyIf[$jsonRequest[https://api.leref.ga/npm?search=$noMentionMessage[1];statusText]==OK;:x: Arama Sonucu Bulunamadı]
$onlyIf[$nomentionmessage[1]!=;:x: Lütfen Bir npm adı girin.]`
})