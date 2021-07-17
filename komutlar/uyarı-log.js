module.exports = ({
  name:"uyarı-log",
  aliases: ['ulog', 'uyarılog'],
  bkz:"Uyarılınca loga atılacak mesajın kanalını ayarlar",
  code:`$if[$noMentionMessage[1]==ayarla]
  $title[Başarıyla Ayarlandı]
  $description[$customEmoji[tick;843482656725139516] Başarıyla Uyarı Log Kanalı <#$mentionedChannels[1]> olarak ayarlandı]
  $color[BDAAF9]
  $setServerVar[ulog;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;:x: Lütfen ayarlamak istediğiniz kanalı etiketleyin.]
  $elseIf[$noMentionMessage[1]==sıfırla]
  $title[Başarıyla Sıfırlandı]
  $description[$customEmoji[tick;843482656725139516] Başarıyla Uyarı Log Kanalı sıfırlandı.]
  $color[BDAAF9]
  $resetServerVar[ulog]
  $endElseIf
  $endif
  $onlyPerms[admin;:x: Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor.]
  $onlyIf[$checkContains[$noMentionMessage[1];ayarla;sıfırla]==true;:x: Sadece ayarla veya sıfırla kullanılabilir]`
})