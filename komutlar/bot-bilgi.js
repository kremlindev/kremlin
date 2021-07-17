module.exports = ({
    name:"bot-bilgi",
    aliases:['bot-info', 'botinfo','botbilgi'],
    bkz:"Etiketlenen botun gelişmiş bilgisini gösterir"
    code:`
$if[$getservervar[lang]==tr]
$title[$username[$mentioned[1]] Botunun Bilgisi]
$description[ 
**BOT ADI**
<a:floating_crown:767130754752708618> $username[$mentioned[1]]

**SUNUCUDAKİ İSMİ**                                
<:kullanc:791072641942683648> $nickname[$mentioned[1;yes]]

**OLUŞTURULMA TARİHİ**
 <:kullanc:791072641942683648> $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]
 
**BOTUN OYNUYOR KISMI**
<a:floating_crown:767130754752708618> $replaceText[$getCustomStatus[$mentioned[1;yes]];none;Bir Şey Oynamıyor;-1]

**PROFİL FOTOĞRAFI**
<:kullanc:791072641942683648> [TIKLA]($userAvatar[$mentioned[1]])

**KULLANICI ETIKETI**
$discriminator[$mentioned[1]]

**ROLLERI**
$userRoles[$mentioned[1;yes];mentions]

**DAVET LINKLERI**
<a:lvl:790296379137196033> [0 Perm Davet Linki (Yetkisiz)](https://discord.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=0)
<a:lvl:790296379137196033> [8 Perm Davet Linki (Yetkili)](https://discord.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=8)]
$footer[Bot bilgisini isteyen $username;$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$color[303136]
$onlyIf[$isBot[$mentioned[1]]!=false;Etiketlediğinin kişi bot değil]
$onlyIf[$mentioned[1]!=;Bir botu etiketlemelisin. Not: Bu komut kremlin istatistik değildir. İstatistik için \`$getservervar[prefix]i\` yazın.]
$elseIf[$getservervar[lang]==en]
$title[Bot info of the $username[$mentioned[1]]]
$description[ 
**BOT NAME**
<a:floating_crown:767130754752708618> $username[$mentioned[1]]

**NICKNAME IN THE SERVER*                                
<:kullanc:791072641942683648> $nickname[$mentioned[1;yes]]

**CRETION DATE**
 <:kullanc:791072641942683648> $creationDate[$mentioned[1;yes] Secons Ago  !
 
**BOT'S ACTIVITY**
<a:floating_crown:767130754752708618> $replaceText[$getCustomStatus[$mentioned[1;yes]];none;Nothing being played;-1]

**PROFILE PICTURE**
<:kullanc:791072641942683648> [CLICK]($userAvatar[$mentioned[1]])

**USER DICRIMINATOR**
$discriminator[$mentioned[1]]

**ROLES**
$userRoles[$mentioned[1;yes];mentions]

**INVITE LINKS**
<a:lvl:790296379137196033> [0 Perm invite url](https://discord.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=0)
<a:lvl:790296379137196033> [8 Perm invite url](https://discord.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=8)]
$footer[Requested by:  $username;$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]
$color[303136]
$onlyIf[$isBot[$mentioned[1]]!=false;The person you're tagging is not a bot]
$onlyIf[$mentioned[1]!=;You have to tag a bot. Note: This command is not a Kremlin statistic. Type \`$getservervar [prefix]i\` for statistics.]
$endElseIf
$endif
`
})