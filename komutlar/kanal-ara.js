module.exports = ({
name:"kanal-ara",
aliases: ['kanalara', 'channelsearch', 'channel-search'],
bkz:"Kanallar Arasından yazılam kelimeyi içeren kanalları arar ve yazar.",
code:`
$channelSendMessage[$channelID;$customEmoji[mobile;843482656725139516] Mobil kullanıcılar için:
$djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).join(", ");yes];no]
$author[$serverName[$guildID] Sunucusunda Kanallar Aranıyor.;$serverIcon[$guildID]
$thumbnail[$authorAvatar]]
$description[$customEmoji[channel;843482656725139516] Kanal Aranan Kelime: \`$message\`

$customEmoji[terminal;843482656725139516] **Sonuçlar**
Bulunan Kanallar: $djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).join(", ");yes]
Bulunan Kanal Sayısı : **$djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).length;yes]**
Arayan Kişi: $userTag[$authorid]
Aranan Sunucu: $serverName[$guildID]]
$color[BDAAF9]
$onlyIf[$mentionedChannels[1]==;:x: Lütfen kanal ararken kanal etiketleme]
$onlyIf[$mentioned[1]==;:x: Lütfen kanal ararken kullanıcı etiketleme]
$onlyIf[$mentionedRoles[1]==;:x: Lütfen kanal ararken rol etiketleme]
$onlyIf[$djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).length;yes]!=0;:x: Herhangi bir kanal bulunamadı.]
$onlyIf[$checkContains[$message;A;B;C;Ç;D;E;F;G;Ğ:H:I:İ:J;K;L;M;N;O;Ö;P;R;S;Ş;T;U;Ü;V;Y;Z;X;Q;W]!=true;:x: Kanal adlarında büyük harf bulunamaz]
$onlyIf[$charCount[$message]=<48;:x: Kanal adları 47 karekterden fazla olamaz]
$onlyIf[$checkContains[$message; ]!=true;:x: Kanal adlarında boşluk bulunamaz]
$onlyIf[$message!=;:x: Lütfen bir arama sözcüğü yazın]`
})