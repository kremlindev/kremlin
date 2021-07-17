module.exports = ({
name:"uyar",
aliases:['uyarı'],
bkz:"Etiketlenen kullanıcıya ayarlanan uyarı verir.",
code:`$setUserVar[uyarı;&$getUserVar[uyarı;$mentioned[1]]&$customEmoji[takvim;843482656725139516] $day/$month/$year:$sum[$hour;3].$minute - $customEmoji[edit;843482656725139516] $noMentionMessage. | $customEmoji[crown;843482656725139516] <@$authorID>&;$mentioned[1]]
$setUserVar[usayı;$sum[$getUserVar[usayı;$mentioned[1]];1];$mentioned[1]]
$title[Uyarı Başarıyla Verildi]
$description[Başarıyla $userTag[$mentioned[1]] adlı kullanıcıya $sum[$getUserVar[usayı;$mentioned[1]];1]. uyarısı $noMentionMessage. sebebi ile verildi.]
$color[BDAAF9]
$thumbnail[$userAvatar[$mentioned[1]]
$onlyIf[$hasRole[$authorid;$getservervar[uyetk]]==true;$customEmoji[cross;843482656725139516] Komutu Kullanabilmek İçin **$roleName[$getservervar[uyetk]]** rolüne sahip olmalısın]
$onlyIf[$getservervar[uyetk]!=;$customEmoji[cross;843482656725139516] Uyarı Yetkilisi Ayarlanmamış. Ayarlamak için \`$getServerVar[prefix]uyetkili @rol\` yazınız]
$onlyIf[$isBot[$mentioned[1]]!=true;$customEmoji[cross;843482656725139516] Botlara uyarı atamazsınız.]
$onlyIf[$mentioned[1]!=;$customEmoji[cross;843482656725139516] Uyarı Vermek İstediğiniz kişiyi etiketleyin!]`
})