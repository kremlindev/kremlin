module.exports = ({
    name:"davetlerim",
    code:`$title[İşte Davetlerin]
$description[<@$mentioned[1;yes]> etiketli kullanıcının davetleri:
------------------------------
**Toplam Davet Sayısı:** \`$sum[$userInfo[real;$mentioned[1;yes]];$userInfo[fake;$mentioned[1;yes]]]\`
**Gerçek Davet Sayısı:** \`$userInfo[real;$mentioned[1;yes]]\`
**Sahte Davet Sayısı:** \`$userInfo[fake;$mentioned[1;yes]]\`
------------------------------
]
$addTimestamp
$author[$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RED]
`
})