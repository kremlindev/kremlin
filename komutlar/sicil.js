module.exports = ({
name:"sicil",
aliases:['uyarı-sayı', 'uyarısay'],
bkz:"Kullanıcının uyarı sayı ve sebeplerini gösterir.",
code:`$title[Kullanıcının Sicili]
$description[$userTag[$mentioned[1;yes]] kullancısının sicili,

Toplam Uyarı Sayısı: $getUserVar[usayı;$mentioned[1;yes]]
$replaceText[$joinSplitText[
];&;Kullanıcı Hiç Uyarı Almamış;-1]]
$footer[Tarihler Türkiye Saatine Göredir.]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[BDAAF9]
$textSplit[$getUserVar[uyarı;$mentioned[1;yes]];&]`
})
/*Gerekenler;
uyarı adında variable değeri "&" olacak.
uyetk adında variable değerinde birşey olmayacak.
usayı adında variable değeri "0" olacak.*/