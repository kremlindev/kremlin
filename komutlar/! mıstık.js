module.exports = ({ //yani ben hayatımda böle bişi de görmedim :d
name:"$alwaysExecute", //yuh falsis hepsini geçtim bide log yapmışsın etiket sayacı tutmuşsun yaniiiiiiiiii :d
//berat bir kes işsiz olan sensin lna
code:`
$setServerVar[mıstık;$sum[$getServerVar[mıstık];1]]
$channelSendMessage[828885521874288650;{title:Etiket}{description:$username Adlı Kullanıcı $channelName[$channelID] adlı kanalda $username[606828535423959041] kişisini etiketledi.

$username[606828535423959041] adlı kişi şimdiye kadar \`$getServerVar[mıstık]\` kez etiketlendi.
Etiket mesajı: $filterMessage[$msg[$channelID;$messageID;content];<@606828535423959041>]}
{color:RED}{footer:Kremlin Etiket log}]
$channelSendMessage[$channelID;D-Dostum o sunucunun kurucusu. Etiketlere bakmıyor diğer yetkilileri etiketle. Not : mıstığı toplamda \`$getServerVar[mıstık]\` kere etiketlemişler aybtır. {delete:6s}]
$onlyIf[$authorID!=606828535423959041;Kendini mi etiketliyorsun lan? Git yüzünü yıka gel]
$onlyIf[$mentioned[1]==606828535423959041;]
$onlyForServers[760256683364188205;...;]`
})