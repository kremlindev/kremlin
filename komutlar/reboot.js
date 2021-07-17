module.exports = {
name: "reboot", 
aliases:['restart','yeniden-başlat'],
code: `
$reboot[kremlin.js]
$wait[1s]
$channelSendMessage[$channelID;{title:Yeniden Başlatma İşlemi}{description:Kremlin Yeniden başlatılıyor. Yeniden başlatılmadan önceki uptime : $replaceText[$replaceText[$replaceText[$replaceText[$uptime;d; Gün;-1];h; Saat;-1];m; Dakika;-1];s; Saniye;-1]} {color:RED}]
$onlyForIDs[$botOwnerID;606828535423959041;700763255978852462;648887884203556905;543290925888176139;]
`
}