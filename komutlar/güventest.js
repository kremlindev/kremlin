module.exports = ({
    name:"güventest",
  code:`$if[$sub[$datestamp;$creationdate[$mentioned[1;yes];ms]]<$multi[$multi[$multi[$multi[30;24];60];60];1000]]
$title[$username[$mentioned[1;yes]] adlı Kullanıcı Riskli]
$description[Hesap $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];years;yıl;-1];month;ay;-1];weeks;hafta;-1];days;gün;-1];hours;saat;-1];minutes;dakika;-1];seconds;saniye;-1];months;ay;-1];year;yıl;-1];week;hafta;-1];day;gün;-1];hour;saat;-1];minute;dakika;-1];second;saniye;-1] Önce Kurulmuş]
$image[https://cdn.discordapp.com/attachments/760270391666147369/816419944521662524/20210303_001304.jpg]
$footer[$username Tarafından istendi;$authorAvatar]
$color[RED]
$else
$title[$username[$mentioned[1;yes]] adlı Kullanıcı Güvenli.]
$description[Hesap $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];years;yıl;-1];month;ay;-1];weeks;hafta;-1];days;gün;-1];hours;saat;-1];minutes;dakika;-1];seconds;saniye;-1];months;ay;-1];year;yıl;-1];week;hafta;-1];day;gün;-1];hour;saat;-1];minute;dakika;-1];second;saniye;-1] Önce Kurulmuş]
$image[https://cdn.discordapp.com/attachments/760270391666147369/816419943989641257/20210303_001507.jpg]
$footer[$username Tarafından istendi;$authorAvatar]
$color[GREEN]
$endif
  $onlyIf[$jsonRequest[https://tandembot.xyz/api/775820681409462273/voted/$authorid;hasvote]==true;{description:Bu komutu kullanabilmek için bota [BURADAN](https://tandembot.xyz/bot/775820681409462273/vote) oy vermeniz gerekiyor. Oylar her 12 saatte bir sıfırlanır.}{color:RED}]`
    })