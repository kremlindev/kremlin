module.exports = ({
name:"bansebep",
bkz:"Sunucudan yasaklanmış olan kullanıcının ban sebebini görüntüler",  
aliases:['ban-sebep','ban-sebebi','bansebebi'],
code:`$if[$isNumber[$message[1]]==true]
$title[$userTag[$message[1]] Kullanıcısının Ban Sebebi]
$description[Kullanıcı : $userTag[$message[1]]
Ban Sebebi: $getBanReason[$message[1]]
Toplam Ban Sayısı : $banCount]
$thumbnail[$userAvatar[$message[1]]]
$footer[İsteyen : $username;$authorAvatar]
$color[RED]
$onlyIf[$isBanned[$message[1]]==true;$customEmoji[yanlis] Ban Sebebine Bakmaya Çalıştığınız Kullanıcı Sunucudan Banlanmamış.]
$else
$title[$userTag[$mentioned[1]] Kullanıcısının Ban Sebebi]
$description[Kullanıcı : $userTag[$mentioned[1]
Ban Sebebi: $getBanReason[$mentioned[1]]
Toplam Ban Sayısı : $banCount]
$thumbnail[$userAvatar[$mentioned[1]]]
$footer[İsteyen : $username;$authorAvatar]
$color[RED]
$onlyIf[$isBanned[$mentioned[1]]==true;$customEmoji[yanlis] Ban Sebebine Bakmaya Çalıştığınız Kullanıcı Sunucudan Banlanmamış.]
$onlyIf[$mentioned[1]!=;$customEmoji[yanlis] Ban sebebine bakmaz için geçerli bir kullanıcıyı etiketle veya geçerli bir ID yaz.]
$endif
$onlyBotPerms[ban;$customEmoji[yanlis] Kullanıcıların ban sebeplerini görmem için onları banlama yetkim olması lazım. Lütfen bir yetkiliden bana **Üyeleri Yasakla** yetkisini vermesini isteyin ve tekrar deneyin.]`
})