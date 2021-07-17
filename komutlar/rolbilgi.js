module.exports = {
name: "rol-bilgi",
aliases:['rolbilgi','role-info','rol'],
code:`
$if[$isNumber[$message[1]]==false]
$title[Rol bilgileri]
$addField[Rol kuruluş tarihi;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findRole[$mentionedRoles[1]];time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];weeks;Hafta;-1];months;Ay;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];day;Gün;-1];week;Hafta;-1];month;Ay;-1];year;Yıl;-1] önce kurulmuş]
$addField[Rol pozisyonu;$rolePosition[$mentionedRoles[1]]. Sırada]
$addField[Bu role sahip misin?;$replaceText[$replaceText[$hasRole[$authorID;$mentionedRoles[1]];true;Evet;-1];false;Hayır;-1]]
$addField[Bahsedilebilir?;$replaceText[$replaceText[$isMentioned[$mentionedRoles[1]];true;Evet;-1];false;Hayır;-1]]
$addField[Rolün etiketi;$role[$mentionedRoles[1];mention]]
$addField[Role sahip kullanıcı sayısı;$roleMembersCount[$mentionedRoles[1]]]
$addField[Rol rengi;$getRoleColor[$mentonedRoles[1]]]
$addField[Rol ID’si;$mentionedRoles[1]]
$addField[Rol adı;$roleName[$mentionedRoles[1]]]
$addField[Rol yetkileri;\`\`\`js
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$rolePerms[$mentionedRoles[1];|];Administrator;Yönetici;-1];Manage Guild;Sunucuyu Yönet;-1];Kick Members;Üyeleri At;-1];Create Instant Invite;Davet Oluştur;-1];Ban Members;Üyeleri Yasakla;-1];Manage Channels;Kanalları Yönet;-1];Add Reactions;Tepki Ekle;-1];View Audit Log;Denetim Kaydını Görüntüle;-1];View Channel;Kanalları Görüntüle;-1];Send Messages;Mesaj Gönder;-1];Manage Messages;Mesajları Yönet;-1];Embed Links;Gömülü Bağlantı Yerleştir;-1];Attach Files;Dosya Ekle;-1];Read Message History;Mesaj Geçmişini Görüntüle;-1];Mention Everyone;Herkesten Bahset;-1];View Guild Insights;Sunucu İstatistiklerini Görüntüle;-1];Connect;Bağlan;-1];Speak;Konuş;-1];Mute Members;Üyeleri Sustur;-1];Deafen Members;Üyeleri Sağırlaştır;-1];Move Members;Üyeleri Taşı;-1];Manage Nicknames;Kullanıcı Adlarını Yönet;-1];Manage Roles;Rolleri Yönet;-1];Manage Webhooks;Webhook'ları Yönet;-1];Manage Emojis;Emojileri Yönet;-1];js;Herhangi bir yetkisi bulunmuyor;-1]\`\`\`]
$color[$getRoleColor[$mentionedRoles[1]]]
$onlyIf[$roleExists[$mentionedRoles[1]]==true;Etiketlediğin rolü bulamadım]
$onlyIf[$mentionedRoles[1]!=;Bilgilerini görmek istediğin rolü etiketleyerek belirtmen gerekiyor.] 
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$mentionedRoles[1]];Bilgilerini görmek istediğin rol senin rolünden yüksekte.]
$else
$title[Rol bilgileri]
$addField[Rol kuruluş tarihi;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findRole[$noMentionMessage[1]];time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;1];hours;Saat;-1];days;Gün;-1];weeks;Hafta;1];months;Ay;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];day;Gün;-1];week;Hafta;-1];month;Ay;-1];year;Yıl;-1] önce kurulmuş]
$addField[Rol pozisyonu;$rolePosition[$noMentionMessage[1]]. Sırada]
$addField[Bu role sahip misin?;$replaceText[$replaceText[$hasRole[$authorID;$noMentionMessage[1]];true;Evet;-1];false;Hayır;-1]]
$addField[Bahsedilebilir?;$replaceText[$replaceText[$isMentioned[$noMentionMessage[1]];true;Evet;-1];false;Hayır;-1]]
$addField[Rolün etiketi;$role[$noMentionMessage[1];mention]]
$addField[Role sahip kullanıcı sayısı;$roleMembersCount[$noMentionMessage[1]]]
$addField[Rol rengi;$getRoleColor[$noMentionMessage[1]]]
$addField[Rol ID’si;$noMentionMessage[1]]
$addField[Rol adı;$roleName[$noMentionMessage[1]]]
$addField[Rol yetkileri;\`\`\`js
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$rolePerms[$noMentionMessage[1];|];Administrator;Yönetici;-1];Manage Guild;Sunucuyu Yönet;-1];Kick Members;Üyeleri At;-1];Create Instant Invite;Davet Oluştur;-1];Ban Members;Üyeleri Yasakla;-1];Manage Channels;Kanalları Yönet;-1];Add Reactions;Tepki Ekle;-1];View Audit Log;Denetim Kaydını Görüntüle;-1];View Channel;Kanalları Görüntüle;-1];Send Messages;Mesaj Gönder;-1];Manage Messages;Mesajları Yönet;-1];Embed Links;Gömülü Bağlantı Yerleştir;-1];Attach Files;Dosya Ekle;-1];Read Message History;Mesaj Geçmişini Görüntüle;-1];Mention Everyone;Herkesten Bahset;-1];View Guild Insights;Sunucu İstatistiklerini Görüntüle;-1];Connect;Bağlan;-1];Speak;Konuş;-1];Mute Members;Üyeleri Sustur;-1];Deafen Members;Üyeleri Sağırlaştır;-1];Move Members;Üyeleri Taşı;-1];Manage Nicknames;Kullanıcı Adlarını Yönet;-1];Manage Roles;Rolleri Yönet;-1];Manage Webhooks;Webhook'ları Yönet;-1];Manage Emojis;Emojileri Yönet;-1];js;Herhangi bir yetkisi bulunmuyor;-1]\`\`\`]
$color[$getRoleColor[$noMentionMessage[1]]]
$cacheMembers
$onlyIf[$roleExists[$noMentionMessage[1]]==true;Etiketlediğin rolü bulamadım]
$onlyIf[$noMentionMessage[1]!=;Bilgilerini görmek istediğin rolü etiketleyerek belirtmen gerekiyor.] 
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$noMentionMessage[1]];Bilgilerini görmek istediğin rol senin rolünden yüksekte.]
$endIf
$suppressErrors[Rol bulunamadı]`
}