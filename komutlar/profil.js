module.exports = ({
  name:"kullanıcı-bilgi",
  aliases:['profil'],
  code:`$title[Kullanıcı Bilgi]
  $thumbnail[$userAvatar[$mentioned[1;yes]]]
  $description[ 
       $customEmoji[bahsetme;843482656725139516] <@$mentioned[1;yes]>
    $customEmoji[id;843482656725139516] $mentioned[1;yes]
    $customEmoji[tag;843482656725139516] $userTag[$mentioned[1;yes]]
    $customEmoji[edit;843482656725139516] $nickname[$mentioned[1;yes]]
    $customEmoji[discord;843482656725139516] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1] önce oluşturulmuş
    $customEmoji[join;843482656725139516] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$mentioned[1;yes];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1] önce katılmış
    $customEmoji[bot;843482656725139516] $replaceText[$replaceText[$isBot[$mentioned[1;yes]];true;Evet;-1];false;Hayır;-1]
    $customEmoji[flag;843482656725139516] $userRoles[$mentioned[1;yes];mentions; **|** ]
    $customEmoji[stats;843482656725139516]$replaceText[$replaceText[$isBoosting[$mentioned[1;yes]];true;Boostluyor.;-1];false;Boostlamıyor.;-1]
    $customEmoji[stats;843482656725139516]$replaceText[$replaceText[$isBoosting[$mentioned[1;yes]];true;Kullanıcı bu sunucuyu boostlamaya $get[boost] önce başladı!;-1];false;Kullanıcı boostlamıyor.;-1]
    ]
    $let[boost;$replaceText[$replaceText[$replaceText[$replaceText[$djsEval[const parse = require("pretty-ms")

message.guild.members.fetch("$mentioned[1;yes]").then(m=>parse(Date.now() - m.premiumSinceTimestamp));yes];d; Gün;-1];h; Saat;-1];s; Saniye;-1];m; Dakika;-1]]
    $color[BDAAF9]
    $onlyIf[$memberExists[$mentioned[1;yes]]==true;Etiketlenen kullanıcı bu sunucuda bulunmuyor.]`
})
///////////////////
/*Devre Dışı Sonra Eklenecek
**Rozetleri**
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$mentioned[1;yes]];Early Verified Developer;$customEmoji[developer]];House Balance;$customEmoji[kr_hypesquad_balance]];House Brilliance;$customEmoji[kr_hypesquad_brilliance]];House Bravery;$customEmoji[kr_hypesquad_bravery]];Discord Partner;$customEmoji[kr_partner_icon3]];Early Supporter;$customEmoji[kr_early_supporter]];Verified Bot;$customEmoji[bot]];Nitro Classic;$customEmoji[kr_nitro_icon1]]; ,;];Partnered Server Owner,;];Discord Employee;$customEmoji[kr_mod]];Hypesquad Events;$customEmoji[kr_hypesquad]];Bughunter Level 2;$customEmoji[altinhataavcisi]];Bughunter Level 1;$customEmoji[kr_bughunter_level1]]
  */