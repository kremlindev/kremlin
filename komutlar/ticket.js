module.exports = ({
    name:"$alwaysExecute",
    code:`
    $if[$getServerVar[lang]==tr]
$reactionCollector[$get[kapat];everyone;24d;<:tag:846081505624195153>;kapat;yes]
$let[kapat;$channelSendMessage[$get[ticket];<:tag:846081505624195153> Ticketı kapatmak için tepkiye bas;yes]]
$modifyChannelPerms[$get[ticket];-viewchannel;$guildID]
$modifyChannelPerms[$get[ticket];+viewchannel;+sendmessages;$authorID]
$let[ticket;$newTicket[$replaceText[$username; ;-;-1];<@$authorid>{title:Ticket Oluşturuldu!}{description:Hoşgeldin $userTag[$authorID]! Biraz bekle. En yakın zamanda yetkililer seninle ilgilenecektir}{color:303136};$getServerVar[ticketkat];yes;$customEmoji[yanlis] Hata! Ticket Oluşturulamadı!]]
$elseIf[$getservervar[lang]==en]
$reactionCollector[$get[kapat];everyone;24d;<:tag:846081505624195153>;kapat;yes]
$let[kapat;$channelSendMessage[$get[ticket];Click the reaction to close the ticket;yes]]
$modifyChannelPerms[$get[ticket];-viewchannel;$guildID]
$modifyChannelPerms[$get[ticket];+viewchannel;+sendmessages;$authorID]
$let[ticket;$newTicket[$replaceText[$username; ;-;-1];<@$authorid>{title:Ticket Created!}{description:Welcome $userTag[$authorID]! Wait a little. Authorities will take care of you as soon as possible}{color:303136};$getServerVar[ticketkat];yes;$customEmoji[yanlis] Error! Couldn't Create Ticket!]]
$endElseIf
$endif
$cooldown[10m;]
$deletecommand
$onlyIf[$hasPerms[$authorid;managechannels]!=true;]
$onlyForChannels[$getServerVar[ticketkanal];]`
})