module.exports = {
    name:"banlog",
    bkz:"Banlog kanalını ayarlar.",
    code:`
    $if[$getservervar[lang]==tr]
$if[$message[1]==ayarla]
$setServerVar[banlog;$mentionedChannels[1]]
$title[Ban Log Kanalı Ayarlandı]
$description[**Ban log kanalı <@$authorID> tarafından <#$mentionedChannels[1]> olarak ayarlandı!**]
$addTimestamp
$color[BLACK]
$onlyIf[$serverChannelexists[$mentionedChannels[1]]==true;Etiketlediğin kanal bu sunucuda bulunmuyor.]
$onlyIf[$mentionedChannels[1]!=;Ban log kanalını etiketlemelisin.]
$elseIf[$message[1]==sıfırla]
$resetServervar[banlog]
$title[Ban Log Kanalı Sıfırlandı]
$description[**Ban log kanalı <@$authorID> tarafından sıfırlandı!**

Eski Log Kanalı: <#$getservervar[banlog]>]
$addTimestamp
$color[BLACK]
$onlyIf[$getservervar[banlog]!=;Ban log kanalı zaten ayarlanmamış.]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;Ban log kanalını ayarlamak istiyorsan \`$getservervar[prefix]banlog ayarla <#kanal>\`, sıfırlamak istiyorsan \`$getservervar[prefix]banlog sıfırla\`]
$onlyPerms[manageserver;Bu komudu sadece \`Sunucuyu Yönet\` yetkisine sahip olanlar kullanabilir.]
$elseIf[$getservervar[lang]==en]
$if[$message[1]==set]
$setServerVar[banlog;$mentionedChannels[1]]
$title[Ban Log Channel Successfully Set]
$description[**Ban log channel set to <#$mentionedChannels[1]> by <@$authorID>!**]
$addTimestamp
$color[BLACK]
$onlyIf[$serverChannelexists[$mentionedChannels[1]]==true;The channel you tagged is not available on this server.]
$onlyIf[$mentionedChannels[1]!=;You should tag the ban log channel.]
$elseIf[$message[1]==reset]
$resetServervar[banlog]
$title[Ban Log Channel Reset]
$description[**Ban log channel reset by <@$authorID>!**

Old log channel: <#$getservervar[banlog]>]
$addTimestamp
$color[BLACK]
$onlyIf[$getservervar[banlog]!=;Ban log channel not already set.]
$endelseIf
$endif
$onlyIf[$checkContains[$message[1];set;reset]==true;If you want to set ban log channel \`$getservervar[prefix]banlog set <#channel>\`, if you want to reset \`$getservervar[prefix]banlog reset\`]
$onlyPerms[manageserver;This command can only be used by those who have the 'Manage Server' perm.]
$endelseIf
$endif
$onlyIf[$getServerVar[lang]!=none;EN: $customEmoji[yanlis] Set the server language to use my commands!

TR: $customEmoji[yanlis] Komutlarımı kullanabilmek için sunucu dilini ayarlamalısın.
\`$getServerVar[prefix]lang en/tr\`]
`
}