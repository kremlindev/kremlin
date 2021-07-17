const disbut = require('discord-buttons')
const falsisdb = require("falsisdb")
const db = new falsisdb()
const falsis = require("aoi.js")
const ejs = require("ejs")
const bot = new falsis.Bot({
  token: process.env['token'], 
  prefix: ["$getServerVar[prefix]", "<@$clientID>", "<@!$clientID>", "kr-", "k!"],
  mobile: false,
  fetchInvites: true,
  suppressAll: false,
  errorMessage: "> <:cross:846631985362894859> **Hata Bulundu: ** 524 - A Timeout Occurred. Hata bildirmek için \`kr-destek\` yazın ve destek sunucumuza bildirin."
})
//https://www.kremlin-bot.ga
require('discord-buttons')(bot.client);
bot.client.setMaxListeners(20)
const app = require('express')();
app.set("view engine", "ejs");
app.set('views',__dirname+'/views');
app.get("/",  (req, res) => {
const database = bot.client.guilds.cache.size
const database2 = bot.client.guilds.cache
const database3 = bot.client.bot_commands.size
const database4 = bot.client.guilds.cache.map(x=>x.memberCount || 0)
const database5 = "Kremlin sitesi aktif! https://www.kremlin-bot.ga"
const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)
const cpu = bot.client.cpu.toFixed(2)
const ping = bot.client.ws.ping
const Sahip = "Falsis"
res.render("index",{database, database2, database3, database4, database5, ram, cpu, ping, Sahip})
});
app.get("/duyuru",  (req, res) => {
const database5 = "Kremlin sitesi aktif! https://www.kremlin-bot.ga"
res.render("duyuru",{database5})
});
app.get("/support/0001",  (req, res) => {
  const Sahip = "Falsis"
res.render("ticket", {Sahip})
});
app.get("/support/0003",  (req, res) => {
  const Sahip = "Falsis"
res.render("ceviri", {Sahip})
});
app.get("/support/intentler-neden-kapali",  (req, res) => {
  const Sahip = "Falsis"
res.render("intent", {Sahip})
});
app.get("/icons",  (req, res) => {
  const Sahip = "Falsis"
res.render("icons", {Sahip})
});
app.get("/support/0002",  (req, res) => {
  const Sahip = "Falsis"
res.render("emojirol", {Sahip})
});
app.get("/support",  (req, res) => {
  const Sahip = "Falsis"
res.render("support", {Sahip})
});
app.get("/komutlar",  (req, res) => {
const database = bot.client.guilds.cache.size
const database2 = bot.client.guilds.cache.map(x=>x.channels.cache.size)
        .reduce((x,y)=> x+y)
const database3 = bot.client.bot_commands.size
const database4 = bot.client.guilds.cache.map(x=>x.memberCount || 0)
         .reduce((x,y) => x+y)
const database5 = "Kremlin sitesi aktif! https://www.kremlin-bot.ga"
const tum = bot.client.bot_commands.map(aaaaa=>aaaaa.name).join(", ");
const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)
const cpu = bot.client.cpu.toFixed(2)
const ping = bot.client.ws.ping
const Sahip = "Falsis"
res.render("komutlar",{database, database2, database3, database4, database5, ram, cpu, ping, Sahip, tum})
});
app.get("/head",  (req, res) => {
const Sahip = "Falsis"
const database5 = "Kremlin sitesi aktif! https://www.kremlin-bot.ga"
res.render("head",{Sahip, database5})
});
app.get("/foot",  (req, res) => {
const Sahip = "Falsis"
res.render("footer",{Sahip})
});
app.get("/lisans",  (req, res) => {
const Sahip = "Falsis"
res.render("lisans",{Sahip})
});
app.get("/hero",  (req, res) => {
const Sahip = "Falsis"
res.render("hero",{Sahip})
});
app.get("/error",  (req, res) => {
res.render("error")
});
app.get("/about",  (req, res) => {
const Sahip = "Falsis"
const database3 = bot.client.bot_commands.size
res.render("about",{Sahip, database3})
});
app.get("/stats",  (req, res) => {
const database3 = bot.client.bot_commands.size
const database = bot.client.guilds.cache.size
const database2 = bot.client.guilds.cache.map(x=>x.channels.cache.size)
        .reduce((x,y)=> x+y)
const database4 = bot.client.guilds.cache.map(x=>x.memberCount || 0)
         .reduce((x,y) => x+y)
const database5 = "Kremlin sitesi aktif! https://www.kremlin-bot.ga"
const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)
const cpu = bot.client.cpu.toFixed(2)
const ping = bot.client.ws.ping
res.render("stats",{database, database2, database3, database4, database5, ram, cpu, ping})
});
app.get("/counts",  (req, res) => {
const database3 = bot.client.bot_commands.size
const database = bot.client.guilds.cache.size
const database2 = bot.client.guilds.cache.map(x=>x.channels.cache.size)
        .reduce((x,y)=> x+y)
const database4 = bot.client.guilds.cache.map(x=>x.memberCount || 0)
         .reduce((x,y) => x+y)
const database5 = "Kremlin sitesi aktif! https://www.kremlin-bot.ga"
const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)
const cpu = bot.client.cpu.toFixed(2)
const ping = bot.client.ws.ping
res.render("counts",{database, database2, database3, database4, database5, ram, cpu, ping})
});
app.get("/davet", function(req, res) {
  res.redirect("https://discord.com/oauth2/authorize?client_id=775820681409462273&scope=bot&permissions=8");
});
app.get("/destek", function(req, res) {
  res.redirect("https://discord.gg/g54DehGSUc");
});
app.get("/mechanics", function(req, res) {
  res.redirect("https://discord.gg/F7jddRDh72");
});
app.get("/css", function(req, res) {
  res.sendFile(__dirname + "/style.css");
});
app.get("/css2", function(req, res) {
  res.sendFile(__dirname + "/views/count.css");
});
app.get("/js", function(req, res) {
  res.sendFile(__dirname + "/views/count.css");
});
app.listen(3000,function(){
console.log("Siteye Bağlanıldı");
});
app.use((req, res) => {
        res.status(404).redirect("/error")
});
app.use((req, res) => {
        res.status(500).redirect("/error")
});
app.use((req, res) => {
        res.status(429).redirect("/error")
});
bot.onInviteCreate()
bot.onInviteDelete()
bot.onLeave()
bot.onJoined()
bot.onMessageUpdate()
bot.onMessageDelete()
bot.onPresenceUpdate()
bot.onChannelDelete()
bot.onReactionAdd()
bot.onReactionRemove()
bot.onBanAdd()
bot.onBanRemove()
bot.onMessage({
  respondToBots: false
})
bot.loadCommands(`./komutlar/`)

bot.command({
  name: "hatırlat",
  code:`
  $sendDM[$authorID;{title:Hatırlatma!}{description:$customEmoji[bildirim;843482656725139516] Sana $messageSlice[1] hatırlamanın geldiğini hatırlatmam gerekiyordu! İşte zamanı geldi!}{color:BDAAF9}]
  $wait[$noMentionMessage[1]]
  $setTimeout[$noMentionMessage[1];
  dmUser:$authorID
  dmMessage:$messageSlice[1]]
  $channelSendMessage[$channelID;{title:Başarılı}
  {description:Artık $replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];d; Gün;-1];m; Dakika;-1];s; Saniye;-1];h; Saat;-1] süre sonra sana $messageSlice[1] hatırlatmanın zamanını geldiğini hatırlatacağım.}
  {color:BDAAF9};no]
  $onlyIf[$checkContains[$toLowercase[$noMentionMessage[1];s;m;h;d;ms]]==true;**Hata Bulundu:** Lütfen geçerli **İngilizce** bir zaman girin. Örnek: \`1 saat = 1h, 1 dakika = 1m, 1 Gün = 1d, 1 saniye = 1s\`]`
})
bot.timeoutCommand({
  code:`$sendDM[$timeoutData[dmUser];{title:Hatırlatma!}{description:$customEmoji[bildirim;843482656725139516] Sana $timeoutData[dmMessage] hatırlamanın geldiğini hatırlatmam gerekiyordu! İşte zamanı geldi!}{color:BDAAF9}`
})

//
bot.updateCommand({
  channel: "$channelID",
  code: `
<@$authorid> Link Engel Koruması Aktif! Mesajını Düzenleyerek reklam yapamazsın!
$deletecommand
$onlyIf[$hasPerms[$authorID;admin]!=true;]
$onlyIf[$checkContains[$message;https://;http://]==true;]
  $onlyif[$getServerVar[linkengel]==1;]`
})
bot.updateCommand({
  channel: "$channelID",
  code: `
<@$authorid> Küfür Engel Koruması Aktif! Mesajını Düzenleyerek küfür edemezsin!
$deletecommand
$onlyIf[$hasPerms[$authorID;admin]!=true;]
$onlyIf[$checkContains[$toLowercase[$message];amk;Oç;Piç;aq;çük;Yarrak;Yarak;orospu;Amq]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyif[$getServerVar[küfür]==açık;]`
})
bot.command({
  name: "ticket-kapat",
  aliases:['close-ticket'],
  code: `
  $if[$getServerVar[lang]==tr]
 $closeTicket[$customEmoji[cross;843482656725139516] Hata! Ticketı Kapatamadım!]
 $wait[3s]
 $channelSendMessage[$channelID;$customEmoji[tag;843482656725139516] Ticket 3 saniye içerisinde kapanacak!;no]
 $elseIf[$getServerVar[lang]==en]
 $closeTicket[$customEmoji[cross;843482656725139516] Error! I couldn't close the ticket]
 $wait[3s]
 $channelSendMessage[$channelID;$customEmoji[true] The ticket will close in 3 seconds!;no]
 $endElseIf
 $endif
 $onlyIf[$getServerVar[lang]!=none;EN: $customEmoji[cross;843482656725139516] Set the server language to use my commands!

 TR: $customEmoji[cross;843482656725139516] Komutlarımı kullanabilmek için sunucu dilini ayarlamalısın.
 \`$getServerVar[prefix]lang en/tr\`]
  $onlyIf[$getServerVar[lang]!=none;EN: $customEmoji[cross;843482656725139516] Set the server language to use my commands!

 TR: $customEmoji[cross;843482656725139516] Komutlarımı kullanabilmek için sunucu dilini ayarlamalısın.
 \`$getServerVar[prefix]lang en/tr\`]
 `})

bot.awaitedCommand({
  name: "kapat",
  code: `
  $if[$getServerVar[lang]==tr]
 $closeTicket[$customEmoji[cross;843482656725139516] Hata! Ticketı Kapatamadım!]
 $wait[3s]
 $channelSendMessage[$channelID;$customEmoji[tag;843482656725139516] Ticket 3 saniye içerisinde kapanacak!;no]
 $elseIf[$getServerVar[lang]==en]
 $closeTicket[$customEmoji[cross;843482656725139516] Error! I couldn't close the ticket]
 $wait[3s]
 $channelSendMessage[$channelID;$customEmoji[true] The ticket will close in 3 seconds!;no]
 $endElseIf
 $endif
 $onlyIf[$getServerVar[lang]!=none;EN: $customEmoji[cross;843482656725139516] Set the server language to use my commands!

 TR: $customEmoji[cross;843482656725139516] Komutlarımı kullanabilmek için sunucu dilini ayarlamalısın.
 \`$getServerVar[prefix]lang en/tr\`]
 `})
bot.command({
  name: "otocevap",
  aliases:['auto-reply','auto-answer'],
  code: `
$if[$getservervar[lang]==tr]
$if[$message[1]==ayarla]
$sendmessage[$customEmoji[true] Başarılı, Artık birisi $splittext[1] yazınca $splittext[2] olarak cevap vereceğim.;no]
$textSplit[$messageSlice[1];|]
$setservervar[otocevap;$getobjectproperty[sistem] |$splitText[1]|$splitText[2]|]
$addObjectProperty[sistem;$getServerVar[otocevap]]
$createObject[{}]
$textSplit[$messageSlice[1];|]
$setservervar[otocevapw;0]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;$customEmoji[cross;843482656725139516] Doğru kullanım **$getServerVar[prefix]otocevap <komut>|<komut kullanıldığında verilecek cevap>**]
$onlyIf[$charCount[$getservervar[otocevap]]<750;$customEmoji[cross;843482656725139516] Otocevap sınırın doldu.]
$elseIf[$message[1]==sil]
$sendmessage[$customEmoji[true] $messageSlice[1] otocevabı başarıyla silindi.;no]
$setservervar[otocevapw;0]
$setServerVar[otocevap;$replaceText[$getservervar[otocevap];$getobjectproperty[alım];;1]]
$addObjectProperty[alım;|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];0]]|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];1]]|]
$createObject[{}]
$onlyIf[$checkContains[$joinSplitText[];$messageSlice[1]]==true;$customEmoji[cross;843482656725139516] **$messageSlice[1]** ile eşleşen bir otocevap komudu bulamadım.]
$textSplit[$getservervar[otocevap];|]
$setservervar[otocevapw;1]
$endelseIf
$endif
$setservervar[otocevapw;1]
$onlyIf[$checkContains[$message[1];ayarla;sil]==true;$customEmoji[cross;843482656725139516] Sadece \`\`ayarla\`\` ve \`\`sil\`\` ayarlarını kullanabilirsin.]
$onlyPerms[manageserver;$customEmoji[cross;843482656725139516] Bu komudu uygulayabilmen için \`\`Sunuyu Yönet\`\` yetkinin olması lazım.]
$suppressErrors[<:hata:824357451356569600> Oh! sanırım roket havalanırken pilot bir sinek gördü ve hataya sebep oldu!]
$elseIf[$getservervar[lang]==en]
$if[$message[1]==set]
$sendmessage[$customEmoji[true] Success, Now when someone types $splittext[1], I'll reply as $splittext[2].;no]
$textSplit[$messageSlice[1];|]
$setservervar[otocevap;$getobjectproperty[sistem] |$splitText[1]|$splitText[2]|]
$addObjectProperty[sistem;$getServerVar[otocevap]]
$createObject[{}]
$textSplit[$messageSlice[1];|]
$setservervar[otocevapw;0]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;$customEmoji[cross;843482656725139516] Correct usage **$getServerVar[prefix] auto-reply <command> | <response when using command>**]
$onlyIf[$charCount[$getservervar[otocevap]]<750;$customEmoji[cross;843482656725139516] Your auto-reply limit is up.]
$elseIf[$message[1]==delete]
$sendmessage[$customEmoji[true] Auto-reply $messageSlice[1] was successfully deleted.;no]
$setservervar[otocevapw;0]
$setServerVar[otocevap;$replaceText[$getservervar[otocevap];$getobjectproperty[alım];;1]]
$addObjectProperty[alım;|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];0]]|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];1]]|]
$createObject[{}]
$onlyIf[$checkContains[$joinSplitText[];$messageSlice[1]]==true;$customEmoji[cross;843482656725139516] I couldn't find an auto-reply command matching the **$messageSlice[1]**.]
$textSplit[$getservervar[otocevap];|]
$setservervar[otocevapw;1]
$endelseIf
$endif
$setservervar[otocevapw;1]
$onlyIf[$checkContains[$message[1];set;delete]==true;$customEmoji[cross;843482656725139516] You can only use the \`\`set\`\` and \`\`delete\`\` arguments.]
$onlyPerms[manageserver;$customEmoji[cross;843482656725139516] You must have \`\`Manage Server\`\` perm to execute this command.]
$suppressErrors[<:hata:824357451356569600> Oh! I think the pilot saw a fly while the rocket took off and caused the error!]
$endElseIf
$endif
`
})
bot.command({
  name: "$alwaysExecute",
  code: `
$splitText[$sum[$findTextSplitIndex[$message];1]]
$onlyIf[$findTextSplitIndex[$message]!=0;]
$textSplit[$getservervar[otocevap];|]
$onlyIf[$getservervar[otocevap]!=;]
$onlyIf[$getservervar[otocevapw]!=1;]
`,
  nonPrefixed: true
})

bot.awaitedCommand({
  name: "invt",
  code: `$setServerVar[inviteroller;$joinSplitText[|]]
$editTextSplitElement[$get[index];$get[mention]]
$textSplit[$getServerVar[inviteroller];|]
$editTextSplitElement[$get[index2];$get[message3]]
$textSplit[$getServerVar[inviteroller];|]
$title[Invite Rol Düzenlendi!]
$description[**Eski Invite Sayısı:** $message[2]
**Eski Invite Rolü:** <@&$get[mention]>
**Yeni Invite Sayısı:** \`$message[3]\`
**Yeni Invite Rolü:** <@&$splitText[$sum[$findTextSplitIndex[$message[2]];1]]>]
$addTimestamp
$author[$username;$authorAvatar]
$let[mention;$mentionedRoles[1]]
$let[message3;$message[3]]
$let[message2;$message[2]]
$let[index2;$findTextSplitIndex[$message[2]]]
$let[index;$sum[$findTextSplitIndex[$message[2]];1]]
$onlyIf[$mentionType[$message[4]]==role;$customEmoji[cross;843482656725139516] Doğru kullanım ->\`$getServerVar[prefix]invite-rol <eski invite sayısı> <yeni invite sayısı> <@&yeni rol etiket>\`]
$onlyIf[$findTextSplitIndex[$message[2]]!=0;$customEmoji[cross;843482656725139516] \`$message[2]\` tane invite'a karşılık verilen herhangi bir rol yok.]
$textSplit[$getServerVar[inviteroller];|]
$onlyIf[$message[3]<250;$customEmoji[cross;843482656725139516] Invite sayısı \`250\`den küçük olmalıdır.]
$onlyIf[$message[3]>0;$customEmoji[cross;843482656725139516] Invite sayısı \`0\`dan büyük olmalıdır.]
$onlyIf[$isNumber[$message[3]]==true;$customEmoji[cross;843482656725139516] Yeni istediğin invite sayısını belirt. Doğru kullanım ->\`$getServerVar[prefix]invite-rol <eski invite sayısı> <yeni invite sayısı> <@&yeni rol etiket>\`]
$onlyIf[$isNumber[$message[2]]==true;$customEmoji[cross;843482656725139516] Düzenlemek istediğin invite sayısını belirt. Doğru kullanım ->\`$getServerVar[prefix]invite-rol <eski invite sayısı> <yeni invite sayısı> <@&yeni rol etiket>\`]`
})

bot.command({
  name: "status",
  code: `
$loop[999999999999;status]
$setServerVar[statusmsg;$splitText[1]]
$setServerVar[statusch;$channelID]
$textSplit[$sendMessage[Yükleniyor...;yes]; ]
$onlyForIDs[539843855567028227;Komut sahibime özel]`
});

bot.awaitedCommand({
  name: "status",
  code: `$editMessage[$getServerVar[statusmsg];{title:Durum:}{thumbnail:$userAvatar[$splitText[1]]}{color:$replaceText[$replaceText[$replaceText[$replaceText[$status[$splitText[1]];online;GREEN];offline;RED];idle;YELLOW];dnd;ORANGE]}{field:$username[$splitText[1]]:$replaceText[$replaceText[$replaceText[$replaceText[$status[$splitText[1]];offline;<:offline:824381528388927488>**\`Çevrimdışı.\`**];online;<:mobil:824354435005415505>**\`Çevrimiçi.\`**];dnd;<:dnd:824356960953434114>**\`Rahatsız Etmeyin\`**];idle;<:bosta:824355278639071242>**\`Boşta.\`**]:no}{field:Ping:\`$botPing\`:yes}{field:Uptime:\`$replaceText[$replaceText[$replaceText[$replaceText[$uptime;s; Saniye];m; Dakika];h; Saat];d; Gün]\`:yes}{field:RAM:\`$roundTenth[$ram;3]\`:yes}{field:CPU:\`$roundTenth[$cpu;3]\`:yes}{field:Geliştiricim:***$userTag[$splitText[2]]*** **|** $replaceText[$replaceText[$replaceText[$replaceText[$status[$splitText[2]];offline;<:offline:824381528388927488> **\`Çevrimdışı.\`**];online;<:online:824382410706911242>**\`Çevrimiçi.\`**];dnd;<:dnd:824356960953434114>**\`Rahatsız Etmeyin\`**];idle;<:bosta:824355278639071242>**\`Boşta.\`**]}{footer:Status:$userAvatar[$splitText[1]]}{timestamp}{author:$userTag[$splitText[1]]:$userAvatar[$splitText[1]]};$getServerVar[statusch]]
$textSplit[$clientID,539843855567028227;,]
$wait[1m]
$suppressErrors`
})
bot.joinCommand({
  channel: "$randomChannelID",
  code: `
$giveRoles[$authorID;$getServerVar[otorolrolü]]
$onlyIf[$getServerVar[otorol]==açık;]`
})

bot.joinCommand({
  channel: "$getServerVar[hgbbkanal]",
  code: `$if[$getservervar[lang]==tr]
  $if[$getServerVar[otosayaç]==$membersCount]
$customEmoji[furki] **$username** adlı kullanıcı sunucuya katıldı, **$getServerVar[otosayaç]** kişi hedefi tamamlandı! **$membersCount** kişiyiz! Yeni hedef belirlendi. Yeni hedef **$sum[$membersCount;100]** kişi!.
$setServerVar[otosayaç;$sum[$membersCount;100]]
$else
$customEmoji[giris] **$username** adlı kullanıcı sunucuya katıldı, **$getServerVar[otosayaç]** kişi olmamıza **$sub[$getServervar[otosayaç];$membersCount]** kişi kaldı
$endIf
$useChannel[$getServerVar[hgbbkanal]]
$onlyIf[$getServerVar[hgbbkanal]!=809162862827274300;{execute:hg}]
$suppressErrors
$onlyIf[$getservervar[hgbbkanal]!=;]
$elseIf[$getservervar[lang]==en]
  $if[$getServerVar[otosayaç]==$membersCount]
$customEmoji[furki] **The user named $username** joined the server, **$getServerVar[otosayaç]** member target completed! We are **$membersCount** member! The new target has been set. New target is ** $sum[$membersCount;100]** member !.
$setServerVar[otosayaç;$sum[$membersCount;100]]
$else
$customEmoji[giris] **The user named $username** joined the server, **$getServerVar[otosayaç]** to become a member **$sub[$getServervar[otosayaç];$membersCount]** members left
$endIf
$useChannel[$getServerVar[hgbbkanal]]
$onlyIf[$getServerVar[hgbbkanal]!=809162862827274300;{execute:hg}]
$suppressErrors
$onlyIf[$getservervar[hgbbkanal]!=;]
$endElseIf
$endif`
})

bot.awaitedCommand({
  name: "hg",
  code: `$if[$getservervar[lang]==tr]
  $if[$getServerVar[otosayaç]==$membersCount]
$customEmoji[furki] **$username** adlı kullanıcı sunucuya katıldı, **$getServerVar[otosayaç]** kişi hedefi tamamlandı! **$membersCount** kişiyiz! Yeni hedef belirlendi. Yeni hedef **$sum[$membersCount;100]** kişi!.
$setServerVar[otosayaç;$sum[$membersCount;100]]
$else
$customEmoji[giris] **$username** adlı kullanıcı sunucuya katıldı, **$getServerVar[otosayaç]** kişi olmamıza **$sub[$getServervar[otosayaç];$membersCount]** kişi kaldı
$endIf
$useChannel[$getServerVar[hgbbkanal]]
$onlyIf[$getServerVar[hgbbkanal]!=809162862827274300;{execute:hg}]
$suppressErrors
$onlyIf[$getservervar[hgbbkanal]!=;]
$elseIf[$getservervar[lang]==en]
  $if[$getServerVar[otosayaç]==$membersCount]
$customEmoji[furki] **The user named $username** joined the server, **$getServerVar[otosayaç]** member target completed! We are **$membersCount** member! The new target has been set. New target is ** $sum[$membersCount;100]** member !.
$setServerVar[otosayaç;$sum[$membersCount;100]]
$else
$customEmoji[giris] **The user named $username** joined the server, **$getServerVar[otosayaç]** to become a member **$sub[$getServervar[otosayaç];$membersCount]** members left
$endIf
$useChannel[$getServerVar[hgbbkanal]]
$onlyIf[$getServerVar[hgbbkanal]!=809162862827274300;{execute:hg}]
$suppressErrors
$onlyIf[$getservervar[hgbbkanal]!=;]
$endElseIf
$endif`
})

bot.leaveCommand({
  channel: "$getServerVar[hgbbkanal]",
  code: `$if[$getservervar[lang]==tr]
  $customEmoji[cikis] **$username** adlı kullanıcı sunucudan ayrıldı, **$getServerVar[otosayaç]** kişi olmamıza **$sub[$getServervar[otosayaç];$membersCount]** kişi kaldı
$useChannel[$getServerVar[hgbbkanal]]
$onlyIf[$getServerVar[hgbbkanal]!=809162862827274300;{execute:bb}]
$suppressErrors
$onlyIf[$getservervar[hgbbkanal]!=;]
$elseIf[$getservervar[lang]==en]
  $customEmoji[cikis] The user named  **$username** has left the server,**$getServerVar[otosayaç]** to become a member **$sub[$getServervar[otosayaç];$membersCount]** members left
$useChannel[$getServerVar[hgbbkanal]]
$onlyIf[$getServerVar[hgbbkanal]!=809162862827274300;{execute:bb}]
$suppressErrors
$onlyIf[$getservervar[hgbbkanal]!=;]
$endElseIf
$endif
`
})

bot.awaitedCommand({
  name: "bb",
  code: `$if[$getservervar[lang]==tr]
  $customEmoji[cikis] **$username** adlı kullanıcı sunucudan ayrıldı, **$getServerVar[otosayaç]** kişi olmamıza **$sub[$getServervar[otosayaç];$membersCount]** kişi kaldı
$useChannel[$getServerVar[hgbbkanal]]
$onlyIf[$getServerVar[hgbbkanal]!=809162862827274300;{execute:bb}]
$suppressErrors
$onlyIf[$getservervar[hgbbkanal]!=;]
$elseIf[$getservervar[lang]==en]
  $customEmoji[cikis] The user named  **$username** has left the server,**$getServerVar[otosayaç]** to become a member **$sub[$getServervar[otosayaç];$membersCount]** members left
$useChannel[$getServerVar[hgbbkanal]]
$onlyIf[$getServerVar[hgbbkanal]!=809162862827274300;{execute:bb}]
$suppressErrors
$onlyIf[$getservervar[hgbbkanal]!=;]
$endElseIf
$endif
`
})

bot.awaitedCommand({
  name: "err",
  code: `
$deleteIn[3s]
$customEmoji[cross;843482656725139516] Hata! Lütfen önceki kelimenin son harfiyle başlayan bir kelime girin!
$deletecommand
`
})

bot.awaitedCommand({
  name: "error",
  code: `
$deleteIn[3s]
$customEmoji[cross;843482656725139516] Hata! Lütfen önceki kelimenin son harfiyle başlayan bir kelime girin!
$deletecommand
`
})

bot.command({
  name: "bot-giriş-engel",
  code: `
$if[$message[1]==aç]
$title[Bot Giriş Engel Ayarlandı!]
$description[Artık sunucuya bot girmesini engelleyeceğim.

**Log Kanalı:** <#$mentionedChannels[1]>
**Ayarlayan Yetkili:** <@$authorID>]
$addTimestamp
$footer[Girmesine izin vermek istediğin bot varsa bot-giriş-izin komudumu kullanabilirsin!]
$setServerVar[botengellog;$mentionedChannels[1]]
$setservervar[ayartespit;1]
$onlyIf[$serverChannelExists[$mentionedChannels[1]]==true;$customEmoji[cross;843482656725139516] Etiketlediğin kanal bu sunucuda bulunmuyor.]
$onlyIf[$mentionedChannels[1]!=;$customEmoji[cross;843482656725139516] Bot giriş engel sisteminin log kanalını etiketleyerek belirtmelisin.]
$elseIf[$message[1]==kapat]
$title[Bot Giriş Engel Ayarlandı!]
$description[Artık sunucuya bot girmesini engelleyeceğim.
**Log Kanalı:** <#$mentionedChannels[1]>
**Ayarlayan Yetkili:** <@$authorID>]
$addTimestamp
$footer[Girmesine izin vermek istediğin bot varsa bot-giriş-izin komudumu kullanabilirsin!]
$resetServerVar[botengellog]
$resetServerVar[ayartespit]
$onlyIf[$getServerVar[ayartespit]!=;$customEmoji[cross;843482656725139516] Bot giriş engel sistemi zaten ayarlanmamış]
$endelseIf
$endif
$onlyIf[$checkContains[$toLowerCase[$message;aç;kapat]]==true;$customEmoji[cross;843482656725139516] Kullanılabilir ayarlar \`\`aç\`\` ve \`\`kapat\`\` tır]
$onlyPerms[manageserver;$customEmoji[cross;843482656725139516] Bu komudu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olmalısın.]
$onlyBotPerms[manageserver;$customEmoji[cross;843482656725139516] Bu komudu uygulayabilmem için **Sunucuyu Yönet** yetkisine sahip olmam gerekiyor.]
`
})

bot.command({
  name: "bot-giriş-izin",
  code: `
$if[$message[1]==aç]
$setServerVar[botgirişizin;$message[2]]
$title[Bot Giriş İzni Ayarlandı!]
$description[$userTag[$message[2]] için sunucuya giriş izni verildi.

**İzin Veren Yetkili:** <@$authorID>]
$footer[Not: Sadece 1 bota giriş izni verebilirsiniz.O botu davet ettikten sonra başka bir bota da giriş izni verebilirsiniz.]
$addtimestamp
$onlyIf[$isbot[$message[2]]==true;$customEmoji[cross;843482656725139516] Belirttiğin ID'ye sahip kullanıcı bot değil.]
$onlyIf[$userExists[$message[2]]==true;$customEmoji[cross;843482656725139516] Belirttiğin ID'ye sahip bir kullanıcı bulamadım.]
$onlyif[$isnumber[$message[2]]==true;$customEmoji[cross;843482656725139516] Belirttiğin ID bir ID'ye benzemiyor.]
$elseIf[$message[1]==kapat]
$setservervar[botgirişizin;0]
$title[Bot Giriş İzni Kapatıldı!]
$description[$userTag[$getServerVar[botgirişizin]] için sunucuya giriş izni kapatıldı.

**İzni Çeken Yetkili:** <@$authorID>]
$addtimestamp
$onlyIf[$getServerVar[botgirişizin]!=;$customEmoji[cross;843482656725139516] Zaten herhangi bir bota giriş izni verilmemiş.]
$endelseIf
$endif
$onlyIf[$getservervar[ayartespit]==1;$customEmoji[cross;843482656725139516] Bot giriş engel sistemi ayarlanmamış]
$onlyIf[$checkContains[$toLowerCase[$message;aç;kapat]]==true;$customEmoji[cross;843482656725139516] Kullanılabilir ayarlar \`\`aç\`\` ve \`\`kapat\`\` tır]
$onlyPerms[manageserver;$customEmoji[cross;843482656725139516] Bu komudu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olmalısın.]
$onlyBotPerms[manageserver;$customEmoji[cross;843482656725139516] Bu komudu uygulayabilmem için **Sunucuyu Yönet** yetkisine sahip olmam gerekiyor.]
`
})



bot.joinCommand({
  channel: "$getServerVar[botengellog]",
  code: `
$ban[$authorID;Sunucuya izinsiz bot girdi!]
$title[İzinsiz Giren Bot Banlandı!]
$description[\`\`Sunucuya izinsiz bot girdiğinden botu otomatik olarak banladım.\`\`

**Bot:** $usertag[$authorid]]
$addtimestamp
$onlybotperms[ban;$customEmoji[cross;843482656725139516] SUNUCUYA İZİNSİZ GİREN BOTU YETKİM OLMADIĞINDAN BANLAYAMADIM :C]
$onlyif[$getServerVar[botgirişizin]!=$authorid;]
$onlyif[$isBot[$authorID]==true;]
$onlyif[$getservervar[botengellog]!=;]
`
})


bot.command({
  name: "alt-engel-sistemi",
  code: `$awaitMessages[$authorID;1m;everything;altchan;Komut iptal edildi!]
$sendMessage[{title:Alt Detector Kurulum 1/2}{description:\`\`Lütfen alt detector log kanalını etiketleyerek belirtin.\`\`}{footer:Bu komut 1 dakika içinde iptal edilecektir!}{timestamp}{color:BLACK};no]
$onlyPerms[manageserver;$customEmoji[cross;843482656725139516] Bu komudu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olmalısın.]
`
})

bot.awaitedCommand({
  name: "altchan",
  code: `$awaitMessages[$authorID;1m;everything;altduration;Komut iptal edildi!]
$setServerVar[altchan;$mentionedChannels[1]]
$sendMessage[{title:2/2}{description:\`\`Lütfen, alt detector sisteminde, sunucuya katılan kullanıcının hesap oluşturulma tarihi kaç günden az ise banlanacağını numara ile belirtin.\`\`};no]
 $suppressErrors[{description:$customEmoji[cross;843482656725139516] Bir sorun oluştu.}{color: BLUE}{timestamp}]
 $onlyIf[$serverChannelExists[$advancedTextSplit[$message;#;2;>;1]]==true;$customEmoji[cross;843482656725139516] Bu sunucuda etiketlediğin kanalı bulamadım.]
$onlyIf[$channelType[$advancedTextSplit[$message;#;2;>;1]]==text;$customEmoji[cross;843482656725139516] Lütfen bir kanalı etiketleyin.]`
})

bot.awaitedCommand({
  name: "altduration",
  code: `
$customEmoji[true] Kurulum Tamamlandı!
$setServerVar[altduration;$multi[$multi[$multi[$multi[$message;24];60];60];1000]]
$suppressErrors[$customEmoji[cross;843482656725139516] Bir hata oluştu!]
$onlyIf[$isNumber[$message]==true;$customEmoji[cross;843482656725139516] Lütfen günü numara ile belirtin.]`
})

bot.joinCommand({
  channel: "$getServerVar[altchan]",
  code: ` 
$if[$sub[$datestamp;$creationdate[$authorID;ms]]<$getServerVar[altduration]]
$ban[$authorID]
$title[Kullanıcının Hesabı Alt!]
$description[\`\`Sunucumuza giren kullanıcının hesabı\`\` **$divide[$divide[$divide[$divide[$getServerVar[altduration];24];60];60];1000]**  \`\`günden az süre önce kurulduğu için otomatik olarak banlandı!\`\`

**Kullanıcı:** <@$authorID>
**Hesabının Kurulum Tarihi:** \`\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1] önce\`\`]
$addtimestamp
$elseIf[$sub[$datestamp;$creationdate[$authorID;ms]]>$getServerVar[altduration]]
$title[Kullanıcı Güvenli!]
$description[\`\`Sunucumuza giren kullanıcının hesabı\`\` **$divide[$divide[$divide[$divide[$getServerVar[altduration];24];60];60];1000]** \`\`günden sonra kurulmuş!\`\`

**Kullanıcı:** <@$authorID>
**Hesabının Kurulum Tarihi:** \`\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1] önce\`\`]
$addtimestamp
$endelseIf
$endif
`
})


bot.botJoinCommand({
  channel: "$systemChannelID",
  code: `$title[Kremlin Hizmet vermeye geldi!]
$description[Merhaba, Ben Kremlin! Prefixim \`$getServerVar[prefix]\` size en iyi hizmeti vermek için çırpınacağıma söz veriyorum! Komutlarıma bakmak için **$getServerVar[prefix]yardım** veya **$getServerVar[prefix]help** yazabilirsiniz!]
$color[303136]
`
})
bot.onGuildJoin()
bot.readyCommand({
  channel: "809174911305383996",
  code: `$djsEval[let vcodes = require("vcodes.js");
let vbl = new vcodes("voqqMBOyxMbNPQMCOHvDdLFj", client)
vbl.serverCount();yes]
  $djsEval[const falsisdb = require("falsisdb")
  const db = new falsisdb('./database.json')
  db.set("member", $allMembersCount)
  db.set("server", $serverCount)
  db.set("channel", $allchannelsCount)
  db.set("command", $commandsCount)
  db.set("ram", $ram)
  db.set("cpu", $cpu)
  db.set("ping", $ping)
  db.set("Sahip", "$userTag[$botOwnerID]");yes]
$log[Bot başlatıldı]`
})

bot.banAddCommand({
  channel: "$getServerVar[modlog]",
  code: `$author[Bir Kullanıcı Yasaklandı;$authorAvatar]
$description[$addField[Kullanıcı;Kullanıcı Adı: $username
Kullanıcı ID : $authorid
Kullanıcı Etiketi: $userTag[$authorid]
Sunucu : $serverName[$guildID]]
$color[RED]
$thumbnail[$authorAvatar]
$footer[Kremlin Modlog;$userAvatar[$clientId]]
$onlyIf[$isBot[$authorID]!=true;]
$suppressErrors
$onlyIf[$channelUsed!=$getServerVar[modlog];]`
})

bot.banRemoveCommand({
  channel: "$getServerVar[modlog]",
  code: `$author[Bir Kullanıcının Yasağı Kaldırıldı;$authorAvatar]
$description[$addField[Kullanıcı;Kullanıcı Adı: $username
Kullanıcı ID : $authorid
Kullanıcı Etiketi: $userTag[$authorid]
Sunucu : $serverName[$guildID]]
$color[GREEN]
$thumbnail[$authorAvatar]
$footer[Kremlin Modlog;$userAvatar[$clientId]]
$onlyIf[$isBot[$authorID]!=true;]
$suppressErrors
$onlyIf[$channelUsed!=$getServerVar[modlog];]`
})

bot.command({
  name: "$alwaysExecute",
  code: ` 
  $deletecommand
  $deleteIn[5s]
  <@$authorID>, Caps Engel Açık! En az seviyede büyük harf kullanmaya çalış!
  $onlyIf[$math[$math[$djsEval[("$message").replace(/[^A-Z\\]/g, "").length;yes]/$charCount]*100]>=75]
  $onlyIf[$isBot[$authorID]==false;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[capsengel]==açık;]
  $suppressErrors
  `,
  nonPrefixed: true
})
bot.updateCommand({
  channel: "$getServerVar[modlog]",
  code: `
$author[$username[$authorID] Mesaj Düzenlendi.;$authorAvatar]
$thumbnail[$authorAvatar]
$description[
$addField[Düzenleyen kişi;**$userTag[$authorID]**]
$addField[Mesaj Linki;[Tıkla](https://discord.com/channels/$guildID/$channelUsed/$messageID)]
$addField[Düzenlenen Mesaj;\`\`\`js
$message\`\`\`;yes]
$addField[Önceki Mesaj;\`\`\`js
$oldMessage\`\`\`;yes]
$addField[Kanal;<#$channelUsed>;yes]]
$color[e48f00]
$onlyIf[$isBot[$authorID]!=true;]
$suppressErrors
$onlyIf[$channelUsed!=$getServerVar[modlog];]`
})

bot.deletedCommand({
  channel: "$getServerVar[modlog]",
  code: `$author[$username[$authorID] Mesaj Silindi;$authorAvatar]
$thumbnail[$authorAvatar]
$description[
$addField[Silinen Mesaj;$message;yes]
$addField[Kanal;<#$channelUsed>]]
$color[RED]
$onlyIf[$isBot[$authorID]!=true;]
$suppressErrors
$onlyIf[$channelUsed!=$getServerVar[modlog];]
`
})
bot.command({
  name: "modlog-aç",
  aliases:["set-modlog"],
  code: `
  $setServerVar[modlog;$mentionedChannels[1]]
$title[MODLOG AYARLANDI]
$description[Modlog kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı]
$color[303136]
  $onlyPerms[admin;Bu Komut İçin Yönetici Yetkiniz Olmalıdır !]
  $onlyIf[$message!=;Kullanım $getServerVar[prefix]modlog-aç #kanal]`
})
bot.command({
  name: "modlog-kapat",
  aliases:["reset-modlog"],
  code: `
  $resetServerVar[modlog]
$title[MODLOG Sıfırlandı]
$description[Modlog kanalı başarıyla sıfırlandı.]
$color[303136]
  $onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın]
  $onlyIf[$getServerVar[lang]!=none;EN: $customEmoji[cross;843482656725139516] Set the server language to use my commands!   TR: $customEmoji[cross;843482656725139516] Komutlarımı kullanabilmek için sunucu dilini ayarlamalısın.  \`$getServerVar[prefix]lang en/tr\`]
  `
})

bot.command({
  name: "$alwaysExecute",
  code: `
  $color[RANDOM]
  $description[$replaceText[$replaceText[$message;$getServerVar[prefix]roller;Sunucu Rolleri;-1];$getServerVar[prefix]emojiler;Sunucu Emojileri;-1]
  $replaceText[$replaceText[$message;$getServerVar[prefix]roller;$guildRoles[mention];-1];$getServerVar[prefix]emojiler;$serverEmojis;-1]
  
  ]
  
  $onlyIf[$checkContains[$message;$getServerVar[prefix]roller;$getServerVar[prefix]emojiler]!=false;]
  `,
  nonPrefixed: false
})
bot.command({
  name: "avatar",
  code: `
$if[$checkContains[$userAvatar[$mentioned[1;yes]];.webp;.jpg;.png]==true]
$author[Kullanıcı Avatarı;$userAvatar[$mentioned[1;yes]]]
$description[ Linkler
[WEBP HD]($replaceText[$userAvatar[$mentioned[1;yes]];.png;.webp;-1]) | [JPG HD]($replaceText[$userAvatar[$mentioned[1;yes]];.webp;.jpg;-1]) | [PNG HD]($replaceText[$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1];.jpg;.png;-1])]
$image[$userAvatar[$mentioned[1;yes]]]
$color[303136]
$else
$author[Kullanıcı Avatarı;$userAvatar[$mentioned[1;yes]]]
$description[Link
[GİF HD]($userAvatar[$mentioned[1;yes]])]
$image[$userAvatar[$mentioned[1;yes]]]
$color[303136]
$endif
`
})
bot.command({
  name: "avla",
  aliases:["hunt"],
  code: `$title[$randomText[🧟Zombi avladin!;🐇Tavşan avladin!;🐔Yabani tavuk avladin!;🐐Yabani keçi avladin!;🐖Domuz avladin!;🐍Yilan avladin!;🐆Aslan avladin!;🐊Dinozor avladin;Hayvanlar kacti hic bir sey avlayamadin!]]
$color[303136]`
})
bot.command({
  name: "aşk",
  aliases: ['aşkölçer', 'love', 'lovecheck'],
  code: `$title[ASK KONTROLU 💕]
$description[$username ile <@$mentioned[1]> in ask yüzdesi %$random[0;100]]
$image[https://api.cool-img-api.ml/ship?user=$replaceText[$replaceText[$replaceText[$userAvatar[$authorID]&user2=$userAvatar[$mentioned[1;yes]];webp;png;-1];jpg;png;-1];gif;png;-1]]
$color[303136]
$onlyIf[$mentioned[1]!=$authorid;$customEmoji[cross;843482656725139516] Kendine aşık olamazsın.]
$onlyIf[$mentioned[1]!=;$customEmoji[cross;843482656725139516] Aşk Ölçmek için birini etiketlemen gerekiyor]
`
})//hepimiz kardeşis silme lan
//terbiesiz falsis
//A1 TÜRKÇE ERFTGHJNMKOÖLKIJNUHBYGV
//yaw qardeshim sal türkçemi niye krdşm i sildin bana onu söle
//boş yabma deneyek
//qes hepimiiiiiz kardeeeşşiiiiiizzi
bot.command({
  name: "atatürk",
  code: `
$title[Turk Milleti Zekidir!]
$description[
**Ey Turk gencligi! Birinci vazifen, Turk istiklalini, Turk Cumhuriyetini, ilelebet, muhafaza ve mudafaa etmektir. Mevcudiyetinin ve istikbalinin yegane temeli budur. Bu temel senin en kiymetli hazinendir. Istikbalde dahi, seni bu hazineden mahrum etmek isteyecek, dahili ve harici bedhahlarin olacaktir.**]
$footer[Ataturk, yirminci asrin en buyuk gercegini yaratan adamdır.]
$image[https://thumbs.gfycat.com/GivingPresentDugong-size_restricted.gif]
$color[303136]`
})
bot.command({
  name: "meme",
  code: `
$title[Yerli Memelerimiz Buyrun!]
$image[https://api.fnfalsis.repl.co/mizah/meme$random[0;51].png]
$footer[$username Tarafından istendi]
$color[RANDOM]
`
})
bot.awaitedCommand({
  name:"dmach",
  code:`$addCmdReactions[<:dosya:824353992506474517>]
  $reply[$messageID;Lütfen dmlerini aç. Sana mesaj gönderemiyorum;yes]`
})

bot.command({
  name: "hgkanal",
  code: `$if[$message[1]==ayarla]
$setServerVar[hgbbkanal;$mentionedChannels[1];$guildID]
$title[hoşgeldiniz Kanal Oluşturuldu]
$description[Kanal başarıyla kaydedildi. Artık birisi sunucuya girince veya çıkınca, oto sayaç sistemim ile ayarlanan kanala mesaj göndereceğim.]
$color[303136]
$onlyIf[$channelExists[$mentionedChannel[1]]==true;$customEmoji[cross;843482656725139516] Etiketlenen kanal sunucuda bulunmuyor veya ben göremiyorum]
$onlyIf[$mentionedChannels[1]!=;$customEmoji[cross;843482656725139516] Bir kanal etiketle]
$onlyIf[$getServerVar[hgkanal]==;$customEmoji[cross;843482656725139516] hoşgeldiniz kanalı zaten ayarlanmış]
$elseIf[$message==sıfırla]
$resetServerVar[hgbbkanal]
$title[hoşgeldiniz Kanalı Sıfırlandı]
$description[Kanal başarıyla sıfırlandı. Artık birisi sunucuya girse veya çıksa bile oto sayaç sistemimi devreye sokmayacağım]
$color[303136]
$onlyIf[$getServerVar[hgkanal]!=;$customEmoji[cross;843482656725139516] hoşgeldiniz kanalı zaten ayarlanmamış]
$endElseIf
$endif
$onlyIf[$checkContains[$toLowercase[$message[1];ayarla;sıfırla]]==true;$customEmoji[cross;843482656725139516] Sadece \`ayarla\` veya \`sıfırla\` kullanılabilir]
$onlyPerms[admin;$customEmoji[cross;843482656725139516] Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor.]
`
})
bot.command({
  name: "sa-as-aç",
  code: `$setServerVar[saas;açık;$guildID]
$customEmoji[true] Sa-As Başarıyla Aktif
$onlyPerms[admin;$customEmoji[cross;843482656725139516] Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor]
`
})
bot.command({
  name: "sa-as-kapat",
  code: `
$setServerVar[saas;kapalı]
$customEmoji[true] Sa-As Basarıyla devredışı
$onlyPerms[admin;$customEmoji[cross;843482656725139516] Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor]
`
})
bot.command({
  name: "küfür-aç",
  code: `$setServerVar[küfür;açık]
$customEmoji[true] Küfür Engel Başarıyla Açıldı
$onlyPerms[admin;$customEmoji[cross;843482656725139516] Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor]`
})
bot.command({
  name: "küfür-kapat",
  code: `$setServerVar[küfür;kapalı]
$customEmoji[true]> Küfür Engel Başarıyla kapatıldı
$onlyPerms[admin;$customEmoji[cross;843482656725139516] Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor]`
})
bot.command({
  name: "link-engel",
  code: `
$if[$message[1]==aç]
$setServerVar[linkengel;1]
$title[Link engel ayarlandı]
$description[Link engel sistemini başarı ile ayarladınız.]
$addTimestamp
$footer[Link engel sisteminin bazı kanallarda çalışmamasını istiyorsanız--> link-engel-yoksay #kanal]
$onlyIf[$getServerVar[linkengel]!=1;$customEmoji[cross;843482656725139516] Link engel sistemi zaten ayarlanmış.]
$elseIf[$message[1]==kapat]
$resetServerVar[linkengel]
$title[Link engel sıfırlandı]
$description[Link engel sistemini başarı ile sıfırladınız.]
$addTimestamp
$onlyIf[$getServerVar[linkengel]==1;$customEmoji[cross;843482656725139516] Link engel sistemi zaten ayarlanmamış]
$endelseIf
$endif
$onlyPerms[manageserver;$customEmoji[cross;843482656725139516] Bu komudu kullanmak için **Sunucuyu Yönet** yetkisine sahip olmalısın.]
`
})

bot.command({
  name: "$alwaysExecute", //if = ayarlandıysa, else = ayarlanmadıysa
  code: `
$if[$getServerVar[linktespit]==1] 
$onlyIf[$checkContains[$getServerVar[linkdeaktif];$channelID]==true;{execute:linkengel}]
$onlyIf[$checkContains[$message;https://;http://]==true;]
$else
$deletecommand
$title[Link paylaşmak yasak!]
$description[<@$authorid> bu sunucuda link paylaşmana izin verilmiyor.Lütfen link paylaşma.]
$addTimestamp
$footer[$authorid]
$author[$username;$authorAvatar]
$onlyIf[$checkContains[$message;https://;http://]==true;]
$endif
$onlyIf[$hasAnyPerm[$authorId;manageserver;admin]==false;]
$onlyIf[$getservervar[linkengel]==1;]
`
})

bot.awaitedCommand({
  name: "linkengel",
  code: `
$deletecommand
$onlyBotPerms[managemessages;$customEmoji[cross;843482656725139516] Mesajları Yönet yetkim olmadığından linki engelleyemedim :c {delete:1m}]
$title[Link paylaşmak yasak!]
$description[<@$authorid> bu sunucuda link paylaşmana izin verilmiyor.Lütfen link paylaşma.]
$addTimestamp
$footer[$authorid]
$author[$username;$authorAvatar]
`
})
bot.command({
  name: "link-engel-yoksay",
  code: `
$if[$message[1]==ayarla]
$setServerVar[linktespit;1]
$setServerVar[linkdeaktif;$joinSplitText[ ]]
$description[Link engel sistemi artık etiketlediğiniz kanal(larda) çalışmayacak]
$addTimestamp
$textSplit[$djseval[message.mentions.channels.map(ch => ch.id).join(" ");yes]; ]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[8]==];true;$channelID;-1];false;$mentionedChannels[8];-1]]==true;$customEmoji[cross;843482656725139516] Bu sunucunun dışında olan kanalları etiketleyemezsin]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[7]==];true;$channelID;-1];false;$mentionedChannels[7];-1]]==true;$customEmoji[cross;843482656725139516] Bu sunucunun dışında olan kanalları etiketleyemezsin]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[6]==];true;$channelID;-1];false;$mentionedChannels[6];-1]]==true;$customEmoji[cross;843482656725139516] Bu sunucunun dışında olan kanalları etiketleyemezsin]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[5]==];true;$channelID;-1];false;$mentionedChannels[5];-1]]==true;$customEmoji[cross;843482656725139516] Bu sunucunun dışında olan kanalları etiketleyemezsin]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[4]==];true;$channelID;-1];false;$mentionedChannels[4];-1]]==true;$customEmoji[cross;843482656725139516] Bu sunucunun dışında olan kanalları etiketleyemezsin]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[3]==];true;$channelID;-1];false;$mentionedChannels[3];-1]]==true;$customEmoji[cross;843482656725139516] Bu sunucunun dışında olan kanalları etiketleyemezsin]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[2]==];true;$channelID;-1];false;$mentionedChannels[2];-1]]==true;$customEmoji[cross;843482656725139516] Bu sunucunun dışında olan kanalları etiketleyemezsin]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;$channelID;-1];false;$mentionedChannels[1];-1]]==true;$customEmoji[cross;843482656725139516] Bu sunucunun dışında olan kanalları etiketleyemezsin]
$onlyIf[$mentionedChannels[8]==;$customEmoji[cross;843482656725139516] 8 den fazla kanalda link engel sistemini deaktif bırakamazsın.]
$onlyIf[$mentionedChannels[1]!=;$customEmoji[cross;843482656725139516] Link engel sisteminin yoksayılacağı kanalları etiketleyerek belirtmelisin.]
$onlyIf[$getservervar[linkdeaktif]==;$customEmoji[cross;843482656725139516] Link engel zaten bazı kanallar için deaktif edilmiş]
$elseIf[$message[1]==sıfırla]
$setServerVar[linktespit;0]
$resetServerVar[linkdeaktif]
$description[Link engel sistemi hiçbir kanalda yok sayılmayacak]
$addTimestamp
$textSplit[$djseval[message.mentions.channels.map(ch => ch.id).join(" ");yes]; ]
$onlyIf[$getservervar[linkdeaktif]!=;$customEmoji[cross;843482656725139516] Link engel sistemi zaten hiçbir kanalda yoksayılmamış.]
$endelseIf
$endif
$onlyIf[$getservervar[linkengel]==1;$customEmoji[cross;843482656725139516] Link engel sistemi zaten ayarlanmamış]
$onlyPerms[manageserver;$customEmoji[cross;843482656725139516] Bu komudu kullanmak için **Sunucuyu Yönet** yetkisine sahip olmalısın.]
`
})
bot.updateCommand({
  channel: "$channelID",
  code: `
$if[$getServerVar[linktespit]==1] 
$onlyIf[$checkContains[$getServerVar[linkdeaktif];$channelID]==true;{execute:linkengel}]
$onlyIf[$checkContains[$message;https://;http://]==true;]
$else
$deletecommand
$title[Link paylaşmak yasak!]
$description[$customEmoji[cross;843482656725139516] <@$authorid> bu sunucuda link paylaşmana izin verilmiyor.Lütfen link paylaşma.]
$addTimestamp
$footer[$authorid]
$author[$username;$authorAvatar]
$onlyIf[$checkContains[$message;https://;http://]==true;]
$endif
$onlyIf[$hasAnyPerm[$authorId;manageserver;admin]==false;]
$onlyIf[$getservervar[linkengel]==1;]
`
})
bot.onMessageUpdate()
bot.command({
  name: "<@775820681409462273>",
  aliases: ['<@!775820681409462273>'],
  code: `$title[Sanırım Beni Etiketledin]
$description[**Sana Şöyle yardımcı olabilirim;**
<:kullanc:791072641942683648> Prefixim : $getServerVar[prefix],
<:kullanc:791072641942683648> Yardım Komutum : $getServerVar[prefix]yardım,
<:kullanc:791072641942683648> İstatistik : $getServerVar[prefix]i,
<:kullanc:791072641942683648> Sahibim : <@539843855567028227>

**Bot Linkleri**
<a:lvl:790296379137196033> [Destek Sunucusu](https://discord.gg/QjnTKbHF89)
<a:lvl:790296379137196033> [Botu Davet Et]($getBotInvite)
<a:lvl:790296379137196033> [Botun Sitesi](https://kremlin-bot.glitch.me)
<a:lvl:790296379137196033> [The Mechanic's Kod Paylaşım](https://discord.gg/PBrpv5Pk)
<a:lvl:790296379137196033> [Pika Bot](https://discord.com/oauth2/authorize?client_id=767333617734516738&permissions=8&scope=bot)]
$footer[Kremlin;$userAvatar[775820681409462273]]
$color[RED]
$deleteIn[10s]`,
  nonPrefixed: true
})
bot.command({
  name: "site",
  code: `$title[Internet Sitemize Yolculuk Yap;https://www.kremlin-bot.ga]
$image[https://cdn.discordapp.com/attachments/775822548519616562/858714052263804979/unknown.png]
$color[BDAAF9]`
})
bot.command({
  name: "destek",
  code: `$title[Destek Mi lazım !;https://www.kremlin-bot.ga/support]
$image[https://cdn.discordapp.com/attachments/775822548519616562/858714985970008084/unknown.png]
$color[BDAAF9]`
})
bot.command({
  name: "kişi",
  code: `$onlyIf[$message==;]
$description[$customEmoji[members;843482656725139516] **$serverName[$guildID]** adlı Sunucuda **$membersCount** kişi Var!]
$color[BDAAF9]`
})
/*bot.deletedCommand({
  channel: "$channelID",
  code: `$djsEval[const falsisdb = require("falsisdb")
const db = new falsisdb()
db.set("snipekanal-$guildID", "$channelUsed")
db.set("snipe-$guildID", "$message")
db.set("snipekişi-$guildID", "$authorid")
db.set("snipezaman-$guildID", "$dateStamp")]
$onlyIf[$isBot[$authorid]!=true;]
`
})
bot.command({
  name: "snipe",
  code: `
  $title[Kremlin Snipe]
  $description[**Yakalanan Veriler**
  $customEmoji[edit;843482656725139516] Son Silinen Mesaj: \`$djsEval[const falsisdb = require("falsisdb")
const db = new falsisdb()
db.get("snipe")]\`
  $customEmoji[channel;843482656725139516] Silinen Kanal: <#$djsEval[const falsisdb = require("falsisdb")
const db = new falsisdb()
db.get("snipekanal")]>
  $customEmoji[members;843482656725139516] Silen Kişi: \`$djsEval[const falsisdb = require("falsisdb")
const db = new falsisdb()
db.get("snipekişi")]]\`
  $customEmoji[saat;843482656725139516] Silinme Zamanı: \`$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$math[$dateStamp-$djsEval[const falsisdb = require("falsisdb")
const db = new falsisdb()
db.get("snipezaman")]];time];s;;-1];hour;saat;-1];minute;dakika;-1];econd;saniye;-1] önce\`
  ]
 $color[BDAAF9]
  $onlyIf[$djsEval[const falsisdb = require("falsisdb")
const db = new falsisdb()
db.includes("snipe")]==true;Kayda geçen silinmiş bir mesaj yok.] 
  $onlyIf[$hasPerms[$authorID;managemessages]!=false;$customEmoji[cross;843482656725139516] Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın]
  ` 
})*/
bot.command({
  name: "kanal-sil",
  code: `
$deleteChannels[$joinSplitText[;]]
$textSplit[$djseval[message.mentions.channels.map(ch => ch.id).join(" ");yes]; ]
$sendMessage[{title:Kanallar Silindi}
{description:<@$authorID>, $djsEval[message.mentions.channels.map(x => x).join(", ");yes] kanallarını sildi!}
{timestamp}
{footer:$username:$authorAvatar};no]
$cooldown[2m;Her kanal sildikten sonra 2 dakika beklemelisin.]
$onlyIf[$mentionedChannels[6]==;Tek kullanımda en fazla 5 tane kanal silebilirsin.]
$onlyIf[$serverChannelExists[$mentionedChannels[5;yes]]==true;Bu sunucuda bulunan kanalları etiketlemelisin.]
$onlyIf[$serverChannelExists[$mentionedChannels[4;yes]]==true;Bu sunucuda bulunan kanalları etiketlemelisin.]
$onlyIf[$serverChannelExists[$mentionedChannels[3;yes]]==true;Bu sunucuda bulunan kanalları etiketlemelisin.]
$onlyIf[$serverChannelExists[$mentionedChannels[2;yes]]==true;Bu sunucuda bulunan kanalları etiketlemelisin.]
$onlyIf[$serverChannelExists[$mentionedChannels[1;yes]]==true;Bu sunucuda bulunan kanalları etiketlemelisin.]
$onlyIf[$mentionedChannels[1]!=;Silmemi istediğin kanalları etiketle.]
$onlyBotPerms[managechannels;Bu komudu uygulayabilmem için \`Kanalları Yönet\` yetkisine sahip olmam gerekiyor.]
$onlyPerms[managechannels;Bu komudu kullanabilmek için \`Kanalları Yönet\` yetkisine sahip olmalısın]
`
})

bot.timeoutCommand({
  channel: "$timeoutData[jailkanal]",
  code: `
$channelSendMessage[$timeoutData[jailkanal];$timeoutData[jailmsg];no]
$giveRoles[$timeoutData[jailkisi];$joinSplitText[;]]
$textSplit[$timeoutData[jailrolleri];, ]
$takeRoles[$timeoutData[jailkisi];$timeoutData[jailrol]]
`
})
bot.timeoutCommand({
  channel: "$timeoutData[jailkanal2]",
  code: `
$channelSendMessage[$timeoutData[jailkanal2];timeoutData[jailmsg2];no]
$takeRoles[$timeoutData[jailkisi2];$timeoutData[jailrol2]]
`
})

bot.timeoutCommand({
  channel: "$timeoutData[mutekanal]",
  code: `
$channelSendMessage[$timeoutData[mutekanal];$timeoutData[mutemsg];no]
$setUserVar[mutespit;0;$timeoutData[mutekisi]]
$takeRoles[$timeoutData[mutekisi];$timeoutData[muterol]]
`
})

bot.joinCommand({
  channel: "$getServerVar[mutelog]",
  code: `
$channelSendMessage[$getServerVar[mutelog];{title:Muteli İken Çık Gir}{description:**<@$authorID>(**\`$authorID\`**) etiketli kullanıcı mute cezası sürerken sunucudan çık gir yaptı!**}{color:BLACK}{timestamp}{thumbnail:$userAvatar[$authorID]}{author:$username:$userAvatar[$authorID]};no]
$giveRoles[$authorID;$getServerVar[mrol]]
$onlyIf[$getUserVar[mutespit;$authorID]==1;]
$onlyIf[$getServerVar[mrol]!=yok;]
$onlyIf[$getservervar[mutelog]!=;]
`
})

bot.joinCommand({
  channel: "$randomChannelID",
  code: `
$giveRoles[$authorID;$getServerVar[mrol]]
$onlyIf[$getUserVar[mutespit;$authorID]==1;]
$onlyIf[$getServerVar[mrol]!=yok;]
$onlyIf[$getservervar[mutelog]==;]
`
})

bot.awaitedCommand({
  name: "jail",
  code: `
$if[$getServerVar[jaillog]!=]
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!;no]
$takeRoles[$mentioned[1];$getServerVar[jailrol]]
$wait[$noMentionMessage[1]]
$setTimeout[$noMentionMessage[1];
jailkisi2: $mentioned[1]
jailrol2: $getServerVar[jailrol]
jailkanal2: $channelID
jailmsg2: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!]
$channelSendMessage[$getservervar[jaillog];{title:Jail İşlemi}{description:**<@$mentioned[1]> kullanıcısına <@$authorID> tarafından <#$channelID> kanalında jail atıldı!**

**Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Belirtlmedi.;-1];false;$messageSlice[2];-1]\`\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$channelSendMessage[$channelID;{title:Kullanıcı jaile katıldı}{description:Kullanıcı jaile atıldı

Jaile atılan cezalı : $username[$mentioned[1;yes]]

Cezayı veren Gardiyan Yetkili : $username}{footer:$username}{color:303136}]
$giveRoles[$mentioned[1;yes];$getServerVar[jailrol]]
$else
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!;no]
$takeRoles[$mentioned[1];$getServerVar[jailrol]]
$wait[$noMentionMessage[1]]
$setTimeout[$noMentionMessage[1];
jailkisi2: $mentioned[1]
jailrol2: $getServerVar[jailrol]
jailkanal2: $channelID
jailmsg2: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!]
$giveRoles[$mentioned[1;yes];$getServerVar[jailrol]]
$channelSendMessage[$channelID;{title:Kullanıcı jaile katıldı}{description:Kullanıcı jaile atıldı

Jaile atılan cezalı : $username[$mentioned[1;yes]]

Cezayı veren Gardiyan Yetkili : $username}{footer:$username}{color:303136}]
$endif
`
})

bot.loopCommand({ //zaaaaaa
  code: `$editMessage[826427979235852289;{title:Durum:}{thumbnail:$userAvatar[$splitText[1]]}{color:$replaceText[$replaceText[$replaceText[$replaceText[$jsonRequest[https://api.lanyard.rest/v1/users/$splitText[1];data.discord_status];online;GREEN];offline;RED];idle;YELLOW];dnd;ORANGE]}{field:$username[$splitText[1]]:$replaceText[$replaceText[$replaceText[$replaceText[$jsonRequest[https://api.lanyard.rest/v1/users/$splitText[1];data.discord_status];offline;**\`Çevrimdışı.\`**];online;**\`Çevrimiçi.\`**];dnd;**\`Rahatsız Etmeyin\`**];idle;**\`Boşta.\`**]:no}{field:Ping:\`$botPing ms\`:yes}{field:RAM:\`$roundTenth[$ram;3] mb\`:yes}{field:CPU:\`%$cpu\`:yes}{field:Geliştiricim:***$userTag[$splitText[2]]*** **|** $replaceText[$replaceText[$replaceText[$replaceText[$jsonRequest[https://api.lanyard.rest/v1/users/$splitText[1];data.discord_status];offline;**\`Çevrimdışı.\`**];online;**\`Çevrimiçi.\`**];dnd;**\`Rahatsız Etmeyin\`**];idle;**\`Boşta.\`**]}{footer:Status:$userAvatar[$splitText[1]]}{timestamp}{author:$userTag[$splitText[1]]:$userAvatar[$splitText[1]]};821401415608041544]
$textSplit[$clientID,539843855567028227;,]`,
  channel: "821401415608041544",
  executeOnStartup: true,
  every: 60000
})




bot.awaitedCommand({
  name: "tempban",
  code: `
$if[$getservervar[banlog]==]
$sendMessage[<a:yeah:809515117666500628> <@$message[1]> etiketli kullanıcının ban cezasının süresi doldu!;no]
$unban[$message[1]]
$wait[$message[2]]
$setTimeout[$message[2];bankisi: $message[1]
bankanal: $channelID
banmsg: <a:yeah:809515117666500628> <@$message[1]> etiketli kullanıcının ban cezasının süresi doldu!]
$ban[$message[1];$messageslice[2]]
$sendMessage[{description:**<@$message[1]>, $username, tarafından süreli banlandı.**

Sebep: \`$replaceText[$replaceText[$checkCondition[$messageslice[2]==];true;Sebep Belirtilmedi!;-1];false;$messageSlice[2];-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$message[1]]:$userAvatar[$message[1]]};no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$message[1]]];Banlamamı istediğin kullanıcı senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksek.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$message[1]]];Banlamamı istediğin kullanıcı benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksek.]
$onlyIf[$message[1]!=$ownerId;Sunucu sahibini bu sunucudan sende bende banlayamam.]
$onlyIf[$message[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
$onlyIf[$memberExists[$message[1]]==true;Etiketlediğin kullanıcıyı bulamadım.]
$onlyIf[$message[1]!=;Banlamamı istediğin kullanıcıyı etiketle yada ID'sini belirt.]
$else
$sendMessage[<a:yeah:809515117666500628> <@$message[1]> etiketli kullanıcının ban cezasının süresi doldu!;no]
$unban[$message[1]]
$wait[$message[2]]
$setTimeout[$message[2];bankisi: $message[1]
bankanal: $channelID
banmsg: <a:yeah:809515117666500628> <@$message[1]> etiketli kullanıcının ban cezasının süresi doldu!]
$ban[$message[1];$messageslice[2]]
$channelSendMessage[$getservervar[banlog];{title:Ban İşlemi}{description:**<@$message[1]> kullanıcısına <@$authorID> tarafından <#$channelID> kanalında süreli ban atıldı!**

**Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Belirtlmedi.;-1];false;$messageSlice[2];-1]\`\`
**Süre:** \`$replaceText[$replaceText[$replaceText[$replaceText[$message[2];m; Dakika;-1];h; Saat;-1];d; Gün;-1];s; Saniye;-1]\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$sendMessage[{description:**<@$message[1]>, $username, tarafından süreli banlandı.**

Sebep: \`$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Belirtilmedi!;-1];false;$messageSlice[2];-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$message[1]]:$userAvatar[$message[1]]};no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$message[1]]];Banlamamı istediğin kullanıcı senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksek.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$message[1]]];Banlamamı istediğin kullanıcı benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksek.]
$onlyIf[$message[1]!=$ownerId;Sunucu sahibini bu sunucudan sende bende banlayamam.]
$onlyIf[$message[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
$onlyIf[$memberExists[$message[1]]==true;Belirttiğin kullanıcıyı bulamadım.]
$endif
$onlyIf[$checkContains[$toLowerCase[$message[2];1s;2s;3s;4s;5s;6s;7s;8s;9s;10s;11s;12s;13s;14s;15s;16s;17s;18s;19s;20s;21s;22s;23s;24s;25s;26s;27s;28s;29s;30s;31s;32s;33s;34s;35s;36s;37s;38s;39s;40s;41s;42s;43s;44s;45s;46s;47s;48s;49s;50s;51s;52s;53s;54s;55s;56s;57s;58s;59s;1m;2m;3m;4m;5m;6m;7m;8m;9m;10m;11m;12m;13m;14m;15m;16m;17m;18m;19m;20m;21m;22m;23m;24m;25m;26m;27m;28m;29m;30m;31m;32m;33m;34m;35m;36m;37m;38m;39m;40m;41m;42m;43m;44m;45m;46m;47m;48m;49m;50m;51m;52m;53m;54m;55m;56m;57m;58m;59m;1h;2h;3h;4h;5h;6h;7h;8h;9h;10h;11h;12h;13h;14h;15h;16h;17h;18h;19h;20h;21h;22h;23h;1d;2d;3d;4d;5d;6d;7d;8d;9d;10d;11d;12d;13d;14d;15d;16d;17d;18d;19d;20d;21d;22d;23d;24d]]==true;Doğru zaman biçimi girin.Örnek 1m/1h/1d.Ayrıca zaman biçimi sadece 1s ile 24d(1 saniye ile 24 gün) arasında belirtilebilir.]
$onlyIf[$message[2]!=;Doğru kullanım -> \`$getservervar[prefix]tempban <@kişi> <süre> (sebep)\`]
$onlyIf[$message!=;Doğru kullanım -> \`$getservervar[prefix]tempban <@kişi> <süre> (sebep)\`]
$onlyPerms[ban;{title:<:hata:824357451356569600> Hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmalısın}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyBotPerms[ban;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
`
})


bot.awaitedCommand({
  name: "tempban2",
  code: `
$if[$getservervar[banlog]==]
$sendMessage[<a:yeah:809515117666500628> <@$message[1]> etiketli kullanıcının ban cezasının süresi doldu!;no]
$unban[$message[1]]
$wait[$message[2]]
$setTimeout[$message[2];bankisi: $message[1]
bankanal: $channelID
banmsg: <a:yeah:809515117666500628> <@$message[1]> etiketli kullanıcının ban cezasının süresi doldu!]
$ban[$message[1];$messageslice[2]]
$sendMessage[{description:**<@$message[1]>, $username, tarafından süreli banlandı.**

Sebep: \`$replaceText[$replaceText[$checkCondition[$messageslice[2]==];true;Sebep Belirtilmedi!;-1];false;$messageSlice[2];-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$message[1]]:$userAvatar[$message[1]]};no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$message[1]]];Banlamamı istediğin kullanıcı senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksek.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$message[1]]];Banlamamı istediğin kullanıcı benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksek.]
$onlyIf[$message[1]!=$ownerId;Sunucu sahibini bu sunucudan sende bende banlayamam.]
$onlyIf[$message[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
$onlyIf[$memberExists[$message[1]]==true;Etiketlediğin kullanıcıyı bulamadım.]
$onlyIf[$message[1]!=;Banlamamı istediğin kullanıcıyı etiketle yada ID'sini belirt.]
$else
$sendMessage[<a:yeah:809515117666500628> <@$message[1]> etiketli kullanıcının ban cezasının süresi doldu!;no]
$unban[$message[1]]
$wait[$message[2]]
$setTimeout[$message[2];bankisi: $message[1]
bankanal: $channelID
banmsg: <a:yeah:809515117666500628> <@$message[1]> etiketli kullanıcının ban cezasının süresi doldu!]
$ban[$message[1];$messageslice[2]]
$channelSendMessage[$getservervar[banlog];{title:Ban İşlemi}{description:**<@$message[1]> kullanıcısına <@$authorID> tarafından <#$channelID> kanalında süreli ban atıldı!**

**Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Belirtlmedi.;-1];false;$messageSlice[2];-1]\`\`
**Süre:** \`$replaceText[$replaceText[$replaceText[$replaceText[$message[2];m; Dakika;-1];h; Saat;-1];d; Gün;-1];s; Saniye;-1]\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$sendMessage[{description:**<@$message[1]>, $username, tarafından süreli banlandı.**

Sebep: \`$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Belirtilmedi!;-1];false;$messageSlice[2];-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$message[1]]:$userAvatar[$message[1]]};no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$message[1]]];Banlamamı istediğin kullanıcı senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksek.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$message[1]]];Banlamamı istediğin kullanıcı benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksek.]
$onlyIf[$message[1]!=$ownerId;Sunucu sahibini bu sunucudan sende bende banlayamam.]
$onlyIf[$message[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
$onlyIf[$memberExists[$message[1]]==true;Belirttiğin kullanıcıyı bulamadım.]
$endif
$onlyIf[$checkContains[$toLowerCase[$message[2];1s;2s;3s;4s;5s;6s;7s;8s;9s;10s;11s;12s;13s;14s;15s;16s;17s;18s;19s;20s;21s;22s;23s;24s;25s;26s;27s;28s;29s;30s;31s;32s;33s;34s;35s;36s;37s;38s;39s;40s;41s;42s;43s;44s;45s;46s;47s;48s;49s;50s;51s;52s;53s;54s;55s;56s;57s;58s;59s;1m;2m;3m;4m;5m;6m;7m;8m;9m;10m;11m;12m;13m;14m;15m;16m;17m;18m;19m;20m;21m;22m;23m;24m;25m;26m;27m;28m;29m;30m;31m;32m;33m;34m;35m;36m;37m;38m;39m;40m;41m;42m;43m;44m;45m;46m;47m;48m;49m;50m;51m;52m;53m;54m;55m;56m;57m;58m;59m;1h;2h;3h;4h;5h;6h;7h;8h;9h;10h;11h;12h;13h;14h;15h;16h;17h;18h;19h;20h;21h;22h;23h;1d;2d;3d;4d;5d;6d;7d;8d;9d;10d;11d;12d;13d;14d;15d;16d;17d;18d;19d;20d;21d;22d;23d;24d]]==true;Doğru zaman biçimi girin.Örnek 1m/1h/1d.Ayrıca zaman biçimi sadece 1s ile 24d(1 saniye ile 24 gün) arasında belirtilebilir.]
$onlyIf[$message[2]!=;Doğru kullanım -> \`$getservervar[prefix]tempban <@kişi> <süre> (sebep)\`]
$onlyIf[$message!=;Doğru kullanım -> \`$getservervar[prefix]tempban <@kişi> <süre> (sebep)\`]
$onlyBotPerms[ban;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
`
})

bot.awaitedCommand({
  name: "awaitReaction10",
  code: `$editMessage[$getservervar[id];{description:
**Küfür Engel**
$replaceText[$replaceText[$getServerVar[küfür];kapalı;$customEmoji[kapali] Sistem Kapalı;-1];açık;$customEmoji[acik] Sistem Aktif;-1]

**Reklam Engel**
$replaceText[$replaceText[$getServerVar[linkengel];0;$customEmoji[kapali] Sistem Kapalı;-1];1;$customEmoji[acik] Sistem Aktif;-1]

**Caps Engel**
$replaceText[$replaceText[$getServerVar[capsengel];kapalı;$customEmoji[kapali] Sistem Kapalı;-1];açık;$customEmoji[acik] Sistem Aktif;-1]

**Sa-As sistemi**
$replaceText[$replaceText[$getServerVar[saas];kapalı;$customEmoji[kapali] Sistem Kapalı;-1];açık;$customEmoji[acik] Sistem Aktif;-1]

**Otorol**
$replaceText[$getServerVar[otorol];kapalı;$customEmoji[kapali] Sistem Kapalı;-1]

**Otocevap**
$replaceText[$replaceText[$checkCondition[$findChars[$joinSplitText[]]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;$customEmoji[acik] Sistem Aktif;-1]
$textSplit[$getservervar[otocevap];_]

**Mute Rolü**
$replaceText[$replaceText[$checkCondition[$getServerVar[mrol]==yok];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<@&$getServerVar[mrol]>;-1]

**Mute Yetkili**
$replaceText[$replaceText[$checkCondition[$getservervar[my]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<@&$getservervar[my]>;-1]

**Ban Yetkili**
$replaceText[$replaceText[$checkCondition[$getservervar[by]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<@&$getservervar[by]>;-1]

**Ban Log**
$replaceText[$replaceText[$checkCondition[$getservervar[banlog]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[banlog]>;-1]

**Kick Log**
$replaceText[$replaceText[$checkCondition[$getservervar[kicklog]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[kicklog]>;-1]

**Mute Log**
$replaceText[$replaceText[$checkCondition[$getservervar[mutelog]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[mutelog]>;-1]

**Jail Log**
$replaceText[$replaceText[$checkCondition[$getservervar[jaillog]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[jaillog]>;-1]}{thumbnail:$authorAvatar}{footer:$username tarafından istendi!:$authorAvatar}{color:303136}]`
})

bot.awaitedCommand({
  name: "awaitReaction11",
  code: `$editMessage[$getservervar[id];{description:
**Jail Rol**
$replaceText[$replaceText[$checkCondition[$getservervar[jailrol]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<@&$getservervar[jailrol]>;-1]

**Jail Yetkili**
$replaceText[$replaceText[$checkCondition[$getservervar[jailyetkili]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<@&$getservervar[jailyetkili]>;-1]

**Jail Kanal**
$replaceText[$replaceText[$checkCondition[$getservervar[jailkanal]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[jailkanal]>;-1]

**Bot Giriş Engel**
$replaceText[$replaceText[$checkCondition[$getServerVar[ayartespit]==1];false;$customEmoji[kapali] Sistem Kapalı;-1];true;$customEmoji[acik] Sistem Aktif;-1]

**Bot Engel Log**
$replaceText[$replaceText[$checkCondition[$getservervar[botengellog]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[botengellog]>;-1]

}{thumbnail:$authorAvatar}{footer:$username tarafından istendi!:$authorAvatar}{color:303136}]`
})
//$customEmoji[cross;843482656725139516]
//:x:
//$customEmoji[yanlis] 
bot.awaitedCommand({
  name: "my",
  code: `
$if[$getServerVar[mutelog]!=]
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının mute cezasının süresi doldu!;no]
$takeRoles[$mentioned[1];$getServerVar[mrol]]
$onlyIf[$hasRoles[$mentioned[1];$getservervar[mrol]]==true;]
$setUserVar[mutespit;0;$mentioned[1]]
$wait[$noMentionMessage[1]]
$setTimeout[$noMentionMessage[1];
mutekisi: $mentioned[1]
muterol: $getServerVar[mrol]
mutekanal: $channelID
mutemsg: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının mute cezasının süresi doldu!]
$channelSendMessage[$getservervar[mutelog];{title:Mute İşlemi}{description:**<@$mentioned[1]> kullanıcısına <@$authorID> tarafından <#$channelID> kanalında mute atıldı!**

**Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Belirtlmedi.;-1];false;$messageslice[2];-1]\`\`
**Süre:** \`$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];m; Dakika;-1];h; Saat;-1];d; Gün;-1];s; Saniye;-1]\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
$setUserVar[mutespit;1;$mentioned[1]]
$giveRoles[$mentioned[1;yes];$getServerVar[mrol]]
$reply[$messageID;Başarıyla <@$mentioned[1]> kişisi $replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];m; Dakika;-1];h; Saat;-1];d; Gün;-1];s; Saniye;-1] boyunca susturdu.;yes]
$else
$sendMessage[<a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının jail cezasının süresi doldu!;no]
$takeRoles[$mentioned[1;yes];$getServerVar[mrol]]
$onlyIf[$hasRoles[$mentioned[1];$getservervar[mrol]]==true;]
$setUserVar[mutespit;0;$mentioned[1]]
$wait[$nomentionmessage[1]]
$setTimeout[$noMentionMessage[1];
mutekisi: $mentioned[1]
muterol: $getServerVar[mrol]
mutekanal: $channelID
mutemsg: <a:yeah:809515117666500628> <@$mentioned[1]> etiketli kullanıcının mute cezasının süresi doldu!]
$setUserVar[mutespit;1;$mentioned[1]]
$giveRoles[$mentioned[1;yes];$getServerVar[mrol]]
$reply[$messageID;Başarıyla <@$mentioned[1]> kişisi $replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];m; Dakika;-1];h; Saat;-1];d; Gün;-1];s; Saniye;-1] boyunca susturdu.;yes]
$endif
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Senle eşit yada senden yüksek role sahip kullanıcılara mute atamam]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Benle eşit yada benden yüksek role sahip kullanıcılara mute atamam]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[mrol]]!=true;Kullanıcıya zaten mute atılmış.]
$onlyIf[$checkContains[$toLowerCase[$noMentionMessage[1];1s;2s;3s;4s;5s;6s;7s;8s;9s;10s;11s;12s;13s;14s;15s;16s;17s;18s;19s;20s;21s;22s;23s;24s;25s;26s;27s;28s;29s;30s;31s;32s;33s;34s;35s;36s;37s;38s;39s;40s;41s;42s;43s;44s;45s;46s;47s;48s;49s;50s;51s;52s;53s;54s;55s;56s;57s;58s;59s;1m;2m;3m;4m;5m;6m;7m;8m;9m;10m;11m;12m;13m;14m;15m;16m;17m;18m;19m;20m;21m;22m;23m;24m;25m;26m;27m;28m;29m;30m;31m;32m;33m;34m;35m;36m;37m;38m;39m;40m;41m;42m;43m;44m;45m;46m;47m;48m;49m;50m;51m;52m;53m;54m;55m;56m;57m;58m;59m;1h;2h;3h;4h;5h;6h;7h;8h;9h;10h;11h;12h;13h;14h;15h;16h;17h;18h;19h;20h;21h;22h;23h;1d;2d;3d;4d;5d;6d;7d;8d;9d;10d;11d;12d;13d;14d;15d;16d;17d;18d;19d;20d;21d;22d;23d;24d]]==true;Doğru zaman biçimi girin.Örnek 1m/1h/1d.Ayrıca zaman biçimi sadece 1s ile 24d(1 saniye ile 24 gün) arasında belirtilebilir.]
$onlyIf[$mentioned[1]!=$ownerID;Sunucu sahibine mute atamam.]
$onlyIf[$mentioned[1]!=$authorID;Kendine mute atmak mı istiyorsun :D?]
$onlyIf[$memberExists[$mentioned[1]]==true;Mute atmamı istediğin kullanıcı bu sunucuda bulunmuyor.]
$onlyIf[$mentioned[1]!=;Mute atılacak kullanıcıyı etiketlemelisin.]
$onlyIf[$getServerVar[mrol]!=;Mute ceza rolü ayarlanmamış.Ayarlamak için \`$getservervar[prefix]muterol <@&rol>\`]
$onlyIf[$hasRoles[$authorID;$getservervar[my]]==true;Kullanıcılara mute atmak için **$roleName[$getservervar[my]]** rolüne sahip olmalısın.]
$onlyIf[$roleExists[$getservervar[my]]==true;Önceden ayarlanan mute yetkili rolü bu sunucudan silinmiş.Tekrardan ayarlamak veya sıfırlamak için -> \`$getservervar[prefix]mute-yetkili\`]
$onlyBotPerms[manageroles;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Rolleri Yönet"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823199962136576060/unknown.png}]
`
})
bot.command({
  name: "Sa",
  code: `
$reply[$messageID;Aleykümselam, hoşgeldin.;yes]
$onlyIf[$getServerVar[saas]!=kapalı;]
$onlyIf[$message==;]
  `,
  nonPrefixed: true
})
bot.command({
  name: "Selamun Aleyküm",
  code: `
$reply[$messageID;Aleykümselam, hoşgeldin.;yes]
 $onlyIf[$getServerVar[saas]!=kapalı;]
$onlyIf[$message==;]
  `,
  nonPrefixed: true
})
bot.command({
  name: "Sea",
  code: `
$reply[$messageID;Aleykümselam, hoşgeldin.;yes]
$onlyIf[$getServerVar[saas]!=kapalı;]
$onlyIf[$message==;]
  `,
  nonPrefixed: true
})
bot.command({
  name: "Selam",
  code: `

$reply[$messageID;Aleykümselam, hoşgeldin.;yes]
 $onlyIf[$getServerVar[saas]!=kapalı;]
$onlyIf[$message==;]
  `,
  nonPrefixed: true
})
bot.awaitedCommand({
  name: "by",
  code: `
  $if[$isNumber[$message[1]]==false]
  $channelSendMessage[$getservervar[banlog];{title:$customEmoji[hammer;843482656725139516] Ban İşlemi}{description:**<@$mentioned[1]> kullanıcısı <@$authorID> tarafından <#$channelID> kanalında sunucudan banlandı!**
  
  $customEmoji[edit;843482656725139516] **Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Sebep Belirtlmedi.;-1];false;$noMentionMessage;-1]\`\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
  $onlyIf[$getservervar[banlog]!=;]
  $ban[$mentioned[1];$noMentionMessage]
  $sendMessage[{description:**<@$mentioned[1]>, $username, tarafından banlandı.**
  
  Sebep: \`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Sebep Belirtilmedi!;-1];false;$nomentionmessage;-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$mentioned[1]]:$userAvatar[$mentioned[1]]};no]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcının en yüksek rolü, senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksekte.]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcının en yüksek rolü, benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksekte.]
  $onlyIf[$mentioned[1]!=$ownerId;$customEmoji[cross;843482656725139516] Sunucu sahibini bu sunucudan sende bende banlayamam.]
  $onlyIf[$mentioned[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
  $onlyIf[$memberExists[$mentioned[1]]==true;$customEmoji[cross;843482656725139516] Etiketlediğin kullanıcıyı bulamadım.]
  $onlyIf[$mentioned[1]!=$botOwnerID;$customEmoji[erkendonemdestekcisi] Sahibimi banlıycan? oQ]
  $onlyIf[$mentioned[1]!=;$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcıyı etiketle yada ID'sini belirt.]
  $elseIf[$isNumber[$message[1]]==true]
  $channelSendMessage[$getservervar[banlog];{title:$customEmoji[hammer;843482656725139516] Ban İşlemi}{description:**<@$message[1]> kullanıcısı <@$authorID> tarafından <#$channelID> kanalında sunucudan banlandı!**
  
  $customEmoji[edit;843482656725139516] **Sebep:** \`\`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Sebep Belirtilmedi.;-1];false;$messageSlice[1];-1]\`\`}{timestamp}{color:BLACK}{footer:$serverName}{author:$username:$authorAvatar};no]
  $onlyIf[$getservervar[banlog]!=;]
  $ban[$message[1];$messageSlice[1]]
  $sendMessage[{description:**<@$message[1]>, $username, tarafından banlandı.**
  
  Sebep: \`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Sebep Belirtilmedi!;-1];false;$messageSlice[1];-1]\`}{color:BLACK}{timestamp}{author:$usertag[$authorid]:$authorAvatar}{footer:$usertag[$message[1]]:$userAvatar[$message[1]]};no]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$message[1]]];$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcının en yüksek rolü, senin en yüksek rolüne eşit yada onun en yüksek rolü senin en yüksek rolünden daha yüksekte.]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$message[1]]];$customEmoji[cross;843482656725139516] Banlamamı istediğin kullanıcının en yüksek rolü, benim en yüksek rolüme eşit yada onun en yüksek rolü benim en yüksek rolümden daha yüksekte.]
  $onlyIf[$message[1]!=$ownerId;$customEmoji[cross;843482656725139516] Sunucu sahibini bu sunucudan sende bende banlayamam.]
  $onlyIf[$message[1]!=$authorID;Kendini banlamak mı istiyorsun :D?]
  $onlyIf[$memberExists[$message[1]]==true;$customEmoji[cross;843482656725139516] Belirttiğin kullanıcıyı bulamadım.]
  $endelseIf
  $endif
  $onlyIf[$message!=;$customEmoji[cross;843482656725139516] Doğru kullanım -> \`$getservervar[prefix]ban <@kişi> (sebep)\`]
  $onlyPerms[ban;{title:<:hata:824357451356569600> Hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmalısın}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
  $onlyBotPerms[ban;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
  $onlyIf[$getServerVar[by]==;{execute:by}]
`
})

bot.joinCommand({
  channel: "$getServerVar[invitekanal]",
  code: `
$giveRoles[$userInfo[inviter;$authorID];$splitText[$sum[$findTextSplitIndex[$userInfo[real;$userInfo[inviter]]];1]]]
$suppressErrors
$onlyIf[$findTextSplitIndex[$userInfo[real;$userInfo[inviter]]]!=;]
$textSplit[$joinSplitText[];|]
$textSplit[$getServerVar[inviteroller];§]
$onlyIf[$getServerVar[inviteroller]!=;]
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[invitemsg];{kişi.sayısı};$membersCount;-1];{katılan.etiket};<@$authorID>;-1];{sunucu.isim};$serverName;-1];{katılan.isim};$username;-1];{davet.eden.etiket};<@$userInfo[inviter]>;-1];{davet.eden.isim};$username[$userInfo[inviter]];-1];{davet.sayısı};$userInfo[real;$userInfo[inviter]];-1]
$onlyIf[$userInfo[inviter]!=;**$userTag[$authorID]** adlı kullanıcı sunucumuza katıldı fakat onu kimin davet ettiğini bulamadım.]
$onlyIf[$getServerVar[invitemsg]!=;]
$onlyIf[$getServerVar[invitekanal]!=;]
`
})

bot.leaveCommand({
  channel: "$getServerVar[invitekanal]",
  code: `
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[inviteçıkış];{kişi.sayısı};$membersCount;-1];{çıkan.etiket};<@$authorID>;-1];{sunucu.isim};$serverName;-1];{çıkan.isim};$username;-1];{davet.eden.etiket};<@$userInfo[inviter]>;-1];{davet.eden.isim};$username[$userInfo[inviter]];-1];{davet.sayısı};$userInfo[real;$userInfo[inviter]];-1]
$onlyIf[$userInfo[inviter]!=;**$userTag[$authorID]** adlı kullanıcı sunucumuzdan ayrıldı fakat onu kimin davet ettiğini bulamadım.]
$onlyIf[$getServerVar[inviteçıkış]!=;]
$onlyIf[$getServerVar[invitekanal]!=;]
`
})

bot.command({
  name: "emoji-rol-menü-kur",
  code: `
$title[Emoji Rol Menü Kuruldu]
$description[
**Menü Adı:** \`$splitText[1]\`
**Mesaj ID:** \`$splitText[2]\`]
$addTimestamp
$author[$username;$authorAvatar]
$setServerVar[emojimenüler;$getServerVar[emojimenüler]$getObjectProperty[menü]|$getObjectProperty[msg]|]
$addObjectProperty[msg;"$splitText[2]"]
$addObjectProperty[menü;$splitText[1]]
$onlyIf[$messageExists[$mentionedChannels[1];$splitText[2]]==true;Etiketlediğin kanalda belirttiğin mesaj bulunamadı.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-ekle menüAdı|mesajID|<#kanal etiket>\`]
$onlyIf[$isNumber[$splitText[2]]!=false;Emoji rol menü olarak ayarlamak istediğin mesajın ID'sini gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$textSplit[$getObjectProperty[böl];|]
$addObjectProperty[böl;$replaceText[$message; ;]]
$createObject[{}]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$onlyIf[$noMentionMessage!=;Emoji rol menü olarak ayarlamak istediğin mesajın ID'sini gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$onlyIf[$mentionedChannels[1]!=;Emoji rol menü olarak ayarlamak istediğin mesajın bulunduğu kanalı etiketle.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
`
})

bot.command({
  name: "emoji-rol-ekle",
  code: `
$title[Emoji Rol Eklendi]
$description[
**Menü:**\`$splitText[1]\`
**Menünün mesaj ID'si:**\`$getObjectProperty[msgid]\`

**Emoji:** $splitText[3]
**Rol:** $splitText[4]]
$addTimestamp
$author[$username;$authorAvatar]
$addMessageReactions[$mentionedChannels[1];$getObjectProperty[msgid];$splitText[3]]
$setMessageVar[emojiroller;$getMessageVar[emojiroller;$getObjectProperty[msgid]]$splitText[3]|$splitText[4]|;$getObjectProperty[msgid]]
$textSplit[$getObjectProperty[böl];|]
$suppressErrors[Bilinmeyen bir hata oluştu!]
$onlyIf[$findTextSplitIndex[$getObjectProperty[menüs]]!=0;\`$splitText[1]\` adlı emoji rol menü bulunamadı.Kurmak için -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$onlyIf[$messageExists[$mentionedChannels[1];$getObjectProperty[msgid]]==true;Etiketlediğin kanalda belirttiğin mesaj bulunamadı.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle mesajID|<#kanal etiket>|<emoji>|<@&rol>\`]
$addObjectProperty[msgid;"$splitText[$sum[$findTextSplitIndex[$getObjectProperty[menüs]];1]]"]
$textSplit[$getServerVar[emojimenüler];|]
$addObjectProperty[menüs;$splitText[1]]
$onlyIf[$mentionType[$splitText[4]]==role;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle menüAdı|<#kanal etiket>|<emoji>|<@&rol>\`]
$onlyIf[$emojiExists[$advancedTextSplit[$splitText[3];:;3;>]]==false;Emoji Rol Sistemi discord custom emojilerini desteklemez.Klavye emojileri kullanmayı dene]
$onlyIf[$mentionType[$splitText[2]]==channel;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle menüAdı|<#kanal etiket>|<emoji>|<@&rol>\`]
$textSplit[$getObjectProperty[böl];|]
$addObjectProperty[böl;$replaceText[$message; ;]]
$createObject[{}]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$onlyIf[$mentionedRoles[1]!=;Emoji rol rolünü etiketlemelisin.]
$onlyIf[$noMentionMessage!=;Emoji rol menü olarak ayarlamak istediğin menünün adını gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle menüAdı|<#kanal etiket>|<emoji>|<@&rol>\`]
$onlyIf[$serverChannelExists[$mentionedChannels[1]]==true;Etiketlediğin kanal bu sunucuda bulunmuyor.]
$onlyIf[$mentionedChannels[1]!=;Emoji rol menü olarak ayarlamak istediğin mesajın bulunduğu kanalı etiketle.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle menüAdı|<#kanal etiket>|<emoji>|<@&rol>\`]
`
})

bot.command({
  name: "emoji-rol-düzenle",
  code: `
$title[Emoji Rol Düzenlendi]
$description[
**Menü Adı:** \`$splitText[1]\`
**Eski Emoji:** $splitText[3]
**Eski Rol:** $getObjectProperty[eskirol]
**Yeni Emoji:** $getObjectProperty[newe]
**Yeni Rol:** $getObjectProperty[rol]]
$addTimestamp
$author[$username;$authorAvatar]
$addMessageReactions[$mentionedChannels[1];$getObjectProperty[msgid];$splitText[4]]
$textSplit[$getObjectProperty[böl];|]
$clearReactions[$mentionedChannels[1];$getObjectProperty[msgid];$getObjectProperty[ese]]
$setMessageVar[emojiroller;$joinSplitText[|];$getObjectProperty[msgid]]
$editTextSplitElement[$sum[$findTextSplitIndex[$getObjectProperty[newe]];1];$getObjectProperty[rol]]
$editTextSplitElement[$findTextSplitIndex[$getObjectProperty[ese]];$getObjectProperty[newe]]
$addObjectProperty[eskirol;$splitText[$sum[$findTextSplitIndex[$getObjectProperty[ese]];1]]]
$onlyIf[$checkContains[$joinSplitText[ ];$getObjectProperty[ese]]==true;\`$getObjectProperty[ese]\` emojisi bulunamadı!]
$textSplit[$getMessageVar[emojiroller;$getObjectProperty[msgid]];|]
$addObjectProperty[newe;$splitText[4]]
$addObjectProperty[ese;$splitText[3]]
$addObjectProperty[rol;$splitText[5]]
$textSplit[$getObjectProperty[böl];|]
$onlyIf[$findTextSplitIndex[$replaceText[$getObjectProperty[menüs]; ;]]!=0;\`$splitText[1]\` adlı emoji rol menü bulunamadı.Kurmak için -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$textSplit[$getServerVar[emojimenüler];|]
$onlyIf[$messageExists[$mentionedChannels[1];$getObjectProperty[msgid]]==true;Etiketlediğin kanalda belirttiğin mesaj bulunamadı.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$findTextSplitIndex[$splitText[3]]!=0;\`$splitText[3]\` emojisi \`$splitText[1]\` menüsünde bulunmuyor.]
$textSplit[$getMessageVar[emojiroller;$getObjectProperty[msgid]];|]
$addObjectProperty[msgid;"$splitText[$sum[$findTextSplitIndex[$getObjectProperty[menüs]];1]]"]
$textSplit[$getServerVar[emojimenüler];|]
$addObjectProperty[menüs;$splitText[1]]
$onlyIf[$mentionType[$splitText[5]]==role;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$mentionType[$splitText[2]]==channel;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$emojiExists[$advancedTextSplit[$splitText[2];:;3;>]]==false;Emoji Rol Sistemi discord custom emojilerini desteklemez.Klavye emojileri kullanmayı dene]
$textSplit[$getObjectProperty[böl];|]
$addObjectProperty[böl;$replaceText[$message; ;]]
$createObject[{}]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$mentionedRoles[1]!=;Emoji rol rolünü etiketlemelisin.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$noMentionMessage!=;Emoji rol menü olarak ayarlamak istediğin menünün adını gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$mentionedChannels[1]!=;Rollerini emojilerini değiştirmek istediğin menünün bulunduğu kanalı etiketle.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
`
})
bot.reactionAddCommand({
  channel: "$channelID",
  code: `
$giveRoles[$authorID;$advancedTextSplit[$splitText[$sum[$findTextSplitIndex[$emojiToString];1]];&;2;>]]
$suppressErrors
$onlyIf[$checkContains[$toLowercase[$joinSplitText[ ];$emojiToString]]==true;]
$textSplit[$getMessageVar[emojiroller;$messageID];|]
$onlyIf[$isBot[$authorID]==false;]
$onlyIf[$checkContains[$toLowercase[$getServerVar[emojimenüler];$messageID]]==true;]
`
})


bot.reactionRemoveCommand({
  channel: "$channelID",
  code: `
$takeRoles[$authorID;$advancedTextSplit[$splitText[$sum[$findTextSplitIndex[$emojiToString];1]];&;2;>]]
$suppressErrors
$onlyIf[$checkContains[$toLowercase[$joinSplitText[ ];$emojiToString]]==true;]
$textSplit[$getMessageVar[emojiroller;$messageID];|]
$onlyIf[$isBot[$authorID]==false;]
$onlyIf[$checkContains[$toLowercase[$getServerVar[emojimenüler];$messageID]]==true;]
`
})

bot.command({
  name: "emoji-rol-sil",
  code: `
$title[Emoji Rol Silindi]
$description[
**Menü Adı:** \`$splitText[1]\`
**Silinen Emoji:** $splitText[3]
**Silinen Rol:** $getObjectProeprty[silinedrol]
]
$addTimestamp
$author[$username;$authorAvatar]
$clearReactions[$mentionedChannels[1];$getObjectProperty[msgid];$splitText[3]]
$textSplit[$getObjectProperty[böl];|]
$setMessageVar[emojiroller;$joinSplitText[|];$getObjectProperty[msgid]]
$addObjectProperty[silinedrol;$sum[$findTextSplitIndex[$getObjectProperty[emoji]];1]]
$removeSplitTextElement[$findTextSplitIndex[$getObjectProperty[emoji]];$sum[$findTextSplitIndex[$getObjectProperty[emoji]];1]]
$onlyIf[$checkContains[$joinSplitText[ ];$getObjectProperty[emoji]]==true;\`$getObjectProperty[emoji]\` emojisi bulunamadı!]
$textSplit[$getMessageVar[emojiroller;$getObjectProperty[msgid]];|]
$addObjectProperty[emoji;$splitText[3]]
$textSplit[$getObjectProperty[böl];|]
$onlyIf[$findTextSplitIndex[$replaceText[$getObjectProperty[menüs]; ;]]!=0;\`$splitText[1]\` adlı emoji rol menü bulunamadı.Kurmak için -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$textSplit[$getServerVar[emojimenüler];|]
$onlyIf[$messageExists[$mentionedChannels[1];$getObjectProperty[msgid]]==true;Etiketlediğin kanalda belirttiğin mesaj bulunamadı.Doğru kullanım -> \`.emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
$onlyIf[$findTextSplitIndex[$splitText[3]]!=0;\`$splitText[3]\` emojisi \`$splitText[1]\` menüsünde bulunmuyor.]
$textSplit[$getMessageVar[emojiroller;$getObjectProperty[msgid]];|]
$addObjectProperty[msgid;"$splitText[$sum[$findTextSplitIndex[$getObjectProperty[menüs]];1]]"]
$textSplit[$getServerVar[emojimenüler];|]
$addObjectProperty[menüs;$splitText[1]]
$onlyIf[$mentionType[$splitText[2]]==channel;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
$onlyIf[$emojiExists[$advancedTextSplit[$splitText[2];:;3;>]]==false;Emoji Rol Sistemi discord custom emojilerini desteklemez.Klavye emojileri kullanmayı dene]
$textSplit[$getObjectProperty[böl];|]
$addObjectProperty[böl;$replaceText[$message; ;]]
$createObject[{}]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
$onlyIf[$noMentionMessage!=;Emoji rol menü olarak ayarlamak istediğin menünün adını gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
$onlyIf[$mentionedChannels[1]!=;Rollerini emojilerini değiştirmek istediğin menünün bulunduğu kanalı etiketle.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
`
})

bot.command({
  name: "çıkış-ban",
  aliases: ['çıkban'],
  code: `$if[$message[1]==aç]
  $setServerVar[çban;a]
  $sendMessage[{title:Başarıyla Çıkış Ban Açıldı}
{description:\`Çıkış ban sistemi başarıyla açıldı. Artık sunucudan çıkan herkes banlanacak\`}
{color:303136}{timestamp}{author:$username:$authorAvatar};no]
$onlyIf[$mentionedChannels[1]==;{execute:çıkban}]
  $onlyBotPerms[ban;$customEmoji[cross;843482656725139516] Kullanıcıları banlamaya yetkim olmadığı için çıkan kişileri banlayamam]
  $onlyIf[$getServerVar[çban]==k;$customEmoji[cross;843482656725139516] Çıkış ban sistemi zaten aktif]
  $elseIf[$message[1]==kapat]
  $setServerVar[çl;]
  $setServerVar[çban;k]
  $title[Başarıyla Çıkış Ban Kapatıldı]
  $description[Çıkış ban sistemi başarıyla kapatıldı. Artık sunucudan çıkan kimse banlanmayacak
**Eski Log Kanalı:** $replaceText[$replaceText[$checkCondition[$getServerVar[çl]==];true;\`Eski Log Kanalı Ayarlanmadı!\`;-1];false;<#$getServerVar[çl]>;-1]]
  $color[303136]
$addTimestamp
$author[$username;$authorAvatar]
  $onlyIf[$getServerVar[çban]==a;$customEmoji[cross;843482656725139516] Çıkış ban sistemi zaten kapalı]
  $endElseIf
  $endif
  $onlyIf[$checkCondition[$message[1]==aç]$checkCondition[$message[1]==kapat]!=falsefalse;$customEmoji[cross;843482656725139516] Sadece \`aç\` veya \`kapat\` argümanları kullanılabilir]
$onlyIf[$message[1]!=;$customEmoji[cross;843482656725139516] Sadece \`aç\` veya \`kapat\` argümanları kullanılabilir]
  $onlyPerms[ban;$customEmoji[cross;843482656725139516] Bu komutu Kullanabilmek için **Üyeleri Yasakla** yetkisine sahip olmanız gerekiyor.]
  `})
bot.awaitedCommand({
  name: "çıkban",
  code: `  $setServerVar[çl;$mentionedChannels[1]]
$setServerVar[çban;a]
  $sendMessage[{title:Başarıyla Çıkış Ban Açıldı}
{description:\`Çıkış ban sistemi başarıyla açıldı. Artık sunucudan çıkan herkes banlanacak\`
 **Log Kanalı:** <#$mentionedChannels[1]>}
{color:303136}{timestamp}{author:$username:$authorAvatar};no]
  $onlyBotPerms[ban;$customEmoji[cross;843482656725139516] Kullanıcıları banlamaya yetkim olmadığı için çıkan kişileri banlayamam]
  $onlyIf[$getServerVar[çban]==k;$customEmoji[cross;843482656725139516] Çıkış ban sistemi zaten aktif]`
})
bot.leaveCommand({
  channel: "$randomChannelID",
  code: `$channelSendMessage[$getServerVar[çl];{title:Çıkış Ban!}{description:**<@$authorID> (**\`$userTag[$authorID] - $authorID\`**) adlı kullanıcı, sunucumuzdan çıkış yaptı ve otomatik olarak banlandı!**}{color:BLACK}{timestamp}{author:$username:$userAvatar[$authorID]}{footer:$servername:$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]}{thumbnail:$userAvatar[$authorID]}]
    $onlyIf[$getServerVar[çl]!=;]
    $ban[$authorid;Kremlin Çıkış Ban Sistemi]
    $onlyBotPerms[ban;]
    $onlyIf[$getServerVar[çban]==a;]`
})

bot.memberUpdateCommand({
  channel: "$getServerVar[tagkanal]",
  code: `
$useChannel[$getServerVar[tagkanal]]
$title[Kullanıcı Tag Aldı!]
$description[**<@$newMember[id]> (**\`$userTag[$newMember[id]] - $newMember[id]\`**) adlı kullanıcı** \`$getServerVar[tag]\` **Adlı tagımızı aldı ve otomatik olarak <@&$getServerVar[tagrol]> rolü verildi!**]
$addtimestamp
$author[$username[$newMember[id]];$userAvatar[$newMember[id]]]
$giveRoles[$newMember[id];$getServerVar[tagrol]]
$onlyIf[$checkContains[$oldMember[name];$getServerVar[tag]]==true;]
$onlyIf[$roleExists[$getServerVar[tag]]!=;]
$onlyIf[$getServerVar[tagrol]!=;]
$onlyIf[$getServerVar[tagkanal]!=;]
$onlyIf[$getServerVar[tag]!=;]`
})
bot.onMemberUpdate()
bot.variables({
  hgbbkanal: "",
  mrol: "yok",
  otorol: "kapalı",
  onaylı: "yok",
  owner: "yok",
  modlog: "",
  otorolrolü: "",
  saas: "kapalı",
  prefix: "kr-",
  linkengel: "0",
  linktespit: "0",
  linkdeaktif: "",
  küfür: "kapalı",
  eklendim: "",
  övgü: "0",
  msebep: "Sebep Girilmedi",
  author: "",
  botsahip: "",
  puan: "0",
  snipe: "",
  snipek: "",
  snipekk: "",
  vip: "yok",
  kod: "yok",
  yem: "0",
  chatt: "",
  count: "0",
  jaillog: "",
  jailkanal: "",
  jailrolcükler: "",
  statusmsg: "",
  statusch: "",
  otocevap: "",
  otocevapw: "0",
  emojirol: "",
  emojirolw: "0",
  countkanal: "",
  jailyetkili: "",
  otosayaç: "0",
  jailrol: "",
  duyuru: "",
  capsengel: "kapalı",
  altchan: "",
  altduration: "",
  mutelog: "",
  kicklog: "",
  botgirişizin: "0",
  ayartespit: "",
  botengellog: "",
  banlog: "",
  id: "",
  mutespit: "0",
  mıstık: "0",
  my: "",
  by: "",
  invitekanal: "",
  invitemsg: "",
  inviteçıkış: "",
  sonharf: "a",
  tag: "",
  ototag: "",
  tagkanal: "",
  tagrol: "",
  tkanal: "",
  emojimenüler: "",
  emojiroller: "",
  cekilis: "undefined",
  etespit: "",
  etespit2: "",
  k: "",
  ky: "",
  ticketkat: "",
  hgkanal:"",
  ticketkanal: "",
  inviteroller: "",
  çban: "k",
  çl: "",
  usayı:"0",
  uyetk:"",
  uyarı:"&",
  lang:"tr", //dil sisteminden vazgeçtim burası hep tr kalsın
  kategori: "",
  afks: "", //AFK sebebi.
  afk: "hayır", //kişi afk mı değil mi? AFK olduğu zaman evete dönüşür.
  afkss:"", //zaman $dateStamp $parseDate ve $math kullanılan
  afkmm:"0", //toplam etiket $sum - $sub artma azalm :bahsetme: emojili olan
  afkc: "0", //bunu berat yaptı bilmemek
  afkkk:"0", //toplam kişi $sum - $sub artma azalma
  afkaa:"Kimse Etiketlememiş" //son etiketleyen kişi tagi $userTag
})
