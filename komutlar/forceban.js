module.exports = ({
name:"forceban",
code:`$ban[$nomentionmessage[1];$replaceText[$message;$nomentionmessage[1];;-1]]
$title[Forceban]
$description[Başarıyla $userTag[$nomentionmessage[1]] kullanıcısı $channel[$channelID;name] kanalında $userTag[$authorid] tarafından banlandı.

Sebep: \`$replaceText[$message;$nomentionmessage[1];;-1]\`]
$color[RED]
$suppressErrors[Kullanıcı Bulunamadı]
$onlyIf[$charCount[$nomentionmessage[1]]=<18;Lütfen geçerli bir kullanıcı idsi girin.]
$onlyIf[$isNumber[$nomentionmessage[1]]==true;Lütfen geçerli bir kullanıcı idsi girin.]
$onlyBotPerms[ban;$customEmoji[yanlis] Kullanıcıları banlamaya yetkim yok]
$onlyPerms[ban;$customEmoji[yanlis] Kullanıcıları banlamaya yetkin yok]`
})