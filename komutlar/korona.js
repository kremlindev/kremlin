module.exports = ({
name : "korona",
code : `
$title[Türkiye Covid-19 Virüs İstatistikleri]
$description[ **TOPLAM**

$customEmoji[sunucu] Toplam Vaka Sayısı : $replaceText[$replaceText[$replaceText[$abbreviate[$jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;infected]];K; Bin];.;,];Milyon; Milyon]
$customEmoji[sunucu] Toplam Ölü Sayısı : $replaceText[$replaceText[$replaceText[$abbreviate[$jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;deceased]];K; Bin];.;,];Milyon; Milyon]
$customEmoji[sunucu] Toplam İyileşen Hasta Sayısı : $replaceText[$replaceText[$replaceText[$abbreviate[$jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;recovered]];K; Bin];.;,];Milyon; Milyon]
$customEmoji[sunucu] Toplam Test Sayısı : $replaceText[$replaceText[$replaceText[$abbreviate[$jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;tested]];K; Bin];.;,];Milyon; Milyon]
$customEmoji[sunucu] Toplam Kritik Hasta Sayısı : $replaceText[$replaceText[$replaceText[$abbreviate[$jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;critical]];K; Bin];.;,];Milyon; Milyon]

**GÜNLÜK**

$customEmoji[news] Günlük Vaka Sayısı : $replaceText[$replaceText[$replaceText[$abbreviate[$jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;dailyInfected]];K; Bin];.;,];M; Milyon]
$customEmoji[news] Günlük Ölü Sayısı : $replaceText[$replaceText[$replaceText[$abbreviate[$jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;dailyDeceased]];K; Bin];.;,];Milyon; Milyon]
$customEmoji[news] Günlük İyileşen Hasta Sayısı : $replaceText[$replaceText[$replaceText[$abbreviate[$jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;dailyRecovered]];K; Bin];.;,];Milyon; Milyon]
$customEmoji[news] Günlük Test Sayısı : $replaceText[$replaceText[$replaceText[$abbreviate[$jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;dailyTested]];K; Bin];.;,];Milyon; Milyon]

**VERİLER**

$customEmoji[mesajlar] Son Güncelleme : $jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;lastUpdatedAtApify]
$customEmoji[mesajlar] Son Kaynak Güncellemesi : $jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;lastUpdatedAtSource]]
$footer[Kaynak : https://covid19.saglik.gov.tr;$authorAvatar]
$thumbnail[https://img.freepik.com/free-photo/turkey-flag-rumpled-close-up_1379-3580.jpg?size=626&ext=jpg]
$color[303136]`
})