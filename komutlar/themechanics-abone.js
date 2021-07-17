module.exports = ({
name:"abone",
code:`$channelSendMessage[760270355431686195;<@$mentioned[1]> hoşgeldin! Abone rolün artık var ve <#760271425671528519> odası sana açıldı! O kanala gidip istediğin rolleri al, rollerini alınca kanallarda aşağıya kaydır ve muazzam kodlar içinde kaybol]
$reply[$messageID;Abone rolü verildi UwU;yes]
$giveRole[$mentioned[1];800086326875389964]
$onlyForChannels[816066831189540884;<#816066831189540884>]
$onlyForRoles[803309394111889448;]
$suppressErrors
$onlyIf[$hasRole[$mentioned[1];800086326875389964]!=true;Kişi zaten abone :D?]
$onlyIf[$mentioned[1]!=;{title:Hata}{description:Birini Etiketlemezsen ona rol veremem}{color:RED}]`
})