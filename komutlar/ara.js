module.exports = ({
name:"ara",
aliases: ['search', 'arama'],
bkz:"Botun komutları arasından komut arar, bulur ve bilgisini gösterir.",
code:`$title[🔎 Komut arama]
$description[$customEmoji[kitap;843482656725139516] Komutlarda aranan komut adı;
\`$nomentionmessage[1]\`

**Sonuçlar**
$customEmoji[code;843482656725139516] Komut adı;
\`$commandInfo[$nomentionmessage[1];name]\`
$customEmoji[pccode;843482656725139516] Alternatifler;
\`$replaceText[$replaceText[$checkCondition[$commandInfo[$nomentionmessage[1];aliases]==];true;Bu komudun herhangi bir alternatifi bulunmuyor.;-1];false;$commandInfo[$nomentionmessage[1];aliases];-1]\`
$customEmoji[edit;843482656725139516] Açıklama ;
\`$replaceText[$replaceText[$checkCondition[$commandInfo[$nomentionmessage[1];bkz]==];true;Bu komudun herhangi bir açıklaması bulunmuyor.;-1];false;$commandInfo[$nomentionmessage[1];bkz];-1]\`

$customEmoji[crown;843482656725139516] **Şunlar İlginizi Çekebilir**
\`$djsEval[client.bot_commands.filter(x => x.name.includes("$message")).map(x => x.name).join(", ");yes]\`
*İlginizi çekebilecek komut sayısı: $djsEval[client.bot_commands.filter(x => x.name.includes("$message")).map(x => x.name).length;yes]*]
$thumbnail[$userAvatar[$clientID]]
$color[BDAAF9]
$onlyIf[$commandInfo[$nomentionmessage[1];name]!=;:x: Aranan komut bulunamadı]
$suppressErrors[:x: Aranan komut bulunamadı]
$onlyIf[$nomentionmessage[1]!=;:x: Arayacağınız komutu yazın]`
})