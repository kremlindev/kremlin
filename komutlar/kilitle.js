module.exports = ({
  name:"kilitle",
  code:`
$if[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s;;-1];m;;-1];h;;-1];d;;-1]]==true]
  $reply[$messageID;Kanal Kilidi Açıldı;yes]
  $modifyChannelPerms[$mentionedChannels[1;yes];+sendmessages;$guildID]
  $wait[$noMentionMessage[1]]
  $modifyChannelPerms[$mentionedChannels[1;yes];-sendmessages;$guildID]
  $channelSendMessage[$channelID;{title:$username[$clientID] Kanal kilitleme sistemi}
  {description:Başarıyla Kanal \`$noMentionMessage[1]\` süre boyunca kilitlendi
  
  Kilitlenen Kanal : <#$mentionedChannels[1;yes]>
  Kilitleme Süresi : $replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s; Saniye];m; Dakika;];h; Saat];d; Gün;-1]
  Kilitleyen Yetkili : $userTag[$authorID]
  Kilitleme Sebebi : $noMentionMessage[2]}
  {color:303136}{thumbnail:$authorAvatar}]
  $onlyIf[$mentionedChannels[1]!=;Lütfen bir Kanal etiketle]
  $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s;;-1];m;;-1];h;;-1];d;;-1]]==true;Lütfen geçerli bir süre yaz]
  $onlyIf[$checkContains[$toLowerCase[$noMentionMessage[1];s;m;d;h]]==true;Lütfen Geçerli Bir Süre Girin. \`1h, 5m 10s\` gibi]
  $onlyPerms[managechannels;{title:Hata}{description:Bu komutu kullanabilmek için sunucuda **Kanalları Yönet** yetkisine sahip olman gerekiyor.}{color:RED}]
  $argsCheck[>1;Süre Belirtmen Gerekiyor. Doğru kullanım : $getServerVar[prefix]kilitle #kanal süre]
  $onlyBotPerms[managechannels;{title:Hata}{description:Bu komutu kullanabilmek için sunucuda **Kanalları Yönet** yetkisine sahip olmam gerekiyor.}{color:RED}]
$else
  $modifyChannelPerms[$mentionedChannels[1;yes];-sendmessages;$guildID]
  $channelSendMessage[$channelID;{title:$username[$clientID] Kanal kilitleme sistemi}
  {description:Başarıyla Kanal **Sınırsız** süre boyunca kilitlendi
  
  Kilitlenen Kanal : <#$mentionedChannels[1;yes]>
  Kilitleme Süresi : **Sınırsız**
  Kilitleyen Yetkili : $userTag[$authorID]
  Kilitleme Sebebi : $noMentionMessage[2]}
  {color:303136}{thumbnail:$authorAvatar}]
  $onlyIf[$mentionedChannels[1]!=;Lütfen bir Kanal etiketle]
  $onlyPerms[managechannels;{title:Hata}{description:Bu komutu kullanabilmek için sunucuda **Kanalları Yönet** yetkisine sahip olman gerekiyor.}{color:RED}]
  $argsCheck[>1;Kanal Etiketlemen Gerekiyor. Doğru kullanım : $getServerVar[prefix]kilitle #kanal]
  $onlyBotPerms[managechannels;{title:Hata}{description:Bu komutu kullanabilmek için sunucuda **Kanalları Yönet** yetkisine sahip olmam gerekiyor.}{color:RED}]
$endif
`
  })