module.exports = ({
  name:"emoji",
  aliases:['emojibilgi','emoji-bilgi'],
  bkz:"Girilen Emojinin Bilgisini Gösterir",
  code:`
  $suppressErrors[:x: Emojiye ulaşılamıyor!]
  $author[Emoji Bilgi;$emoji[$resolveEmojiID[$noMentionMessage[1]];url]]
  $description[$customEmoji[edit;843482656725139516] Emoji Adı: $emoji[$resolveEmojiID[$noMentionMessage[1]];name]
  $customEmoji[id;843482656725139516] Emoji ID'si: $emoji[$resolveEmojiID[$noMentionMessage[1]];id]
  $customEmoji[mapregion;843482656725139516] Emoji Linki: [Tıkla]($emoji[$resolveEmojiID[$noMentionMessage[1]];url])
  $customEmoji[terminal;843482656725139516] Emoji Kodu: $emoji[$resolveEmojiID[$noMentionMessage[1]];identifier]
  $customEmoji[roller;843482656725139516] Emoji Durumu: $replaceText[$replaceText[$emoji[$resolveEmojiID[$noMentionMessage[1]];isanimated];true;Hareketli Emoji;-1];false;Hareketsiz Emoji;-1]
  $customEmoji[crown;843482656725139516] Emojinin Sunucusu: $serverName[$emoji[$resolveEmojiID[$noMentionMessage[1]];guildid]]
  $customEmoji[takvim;843482656725139516] Oluşturulma Zamanı: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$emoji[$resolveEmojiID[$noMentionMessage[1]];created];PM;;-1];AM;;-1];Monday;Pazartesi;-1];Tuesday;Salı;-1];Wednesday;Çarşamba;-1];Thursday;Perşembe;-1];Friday;Cuma;-1];Saturday;Cumartesi;-1];Sunday;Pazar;-1];January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];August;Ağustos;-1];September;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1]]
  $image[$emoji[$resolveEmojiID[$noMentionMessage[1]];url]]
  $color[BDAAF9]
  $onlyIf[$resolveEmojiID[$noMentionMessage[1]]!=;:x: Bu emojiye ulaşamıyorum, emojinin bulunduğu sunucuda değilim veya emojinin kullanım süresi dolmuş]
  $onlyIf[$checkContains[$noMentionMessage[1];:]==true;:x: Lütfen bir emoji girin.]
  $onlyIf[$noMentionMessage[1]!=;:x: Lütfen bir emoji girin]`
})