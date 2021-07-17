module.exports = ({
name:"renk",
aliases:"renkkodu",
bkz:"Girilen rengin bilgisini atar.",
code:`$title[Renk Önizlemesi]
$description[
> Renk Adı: \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;name]\`
> Hex Kodu : \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;hexcode]\`
> Rgb Kodu : \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;rgbcode]\`
> Hsl Kodu: \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;hslcode]\`
> Luminosity Kodu: \`$jsonRequest[https://api.falsisdev.ga/color?hex=$message;luminosity]\`
> Renk Türü: \`$replaceText[$replaceText[$jsonRequest[https://api.falsisdev.ga/color?hex=$message;isLight];true;Açık renk;-1];false;Koyu Renk;-1]\`
]
$color[$message]
$thumbnail[https://some-random-api.ml/canvas/colorviewer?hex=$message]
$onlyIf[$charCount[$message]==6;**Hata bulundu:** Lütfen geçerli bir hex kodu yazın. Hex Kodları 6 Haneli olur. # koyduysanız siliniz.]
$onlyIf[$message!=;**Hata bulundu:** Lütfen bir renk kodu girin.]
$onlyIf[$message[2]==;**Hata Bulundu:** Lütfen geçerli bir hex kodu giriniz.]
$suppressErrors[**Hata Bulundu**: Bilinmeyen Hata; Kod: 400. Destek Sunucum ile iletişime geçin.]`
})