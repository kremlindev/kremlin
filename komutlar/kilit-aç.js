module.exports = ({
  name:"kilit-aç",
  code:`
  $modifyChannelPerms[$mentionedChannels[1;yes];+sendmessages;$guildID]
  $title[$username[$clientID] Kanal Kilit açma sistemi]
  $description[Başarıyla Kanalın kilidi açıldı
  
  Kilidi açılan Kanal : <#$mentionedChannels[1;yes]>
  Kilidi açan Yetkili : $userTag[$authorID]]
  $color[303136]
  $thumbnail[$authorAvatar]
  $useChannel[$channelID]
  $onlyIf[$isNumber[$noMentionMessage[1]]==false;Lütfen geçerli bir kanal etiketle.]
  $onlyBotPerms[managechannels;{title:Hata}{description:Bu komutu kullanabilmek için sunucuda **Kanalları Yönet** yetkisine sahip olmam gerekiyor.}{color:RED}]
  $onlyPerms[managechannels;{title:Hata}{description:Bu komutu kullanabilmek için sunucuda **Kanalları Yönet** yetkisine sahip olman gerekiyor.}{color:RED}]
  $argsCheck[>1;Lütfen Bir Kanal Etiketle. \`!!kilit-aç #$channelName[$channelID]\` gibi]
`
  })