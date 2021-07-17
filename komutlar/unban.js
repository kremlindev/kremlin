module.exports = ({
name: "unban", 
code: ` 
$unban[$message[1]]
$username[$message[1]]#$discriminator[$message[1]] kullanıcısının yasağı kaldırılmıştır.
$onlyIf[$isNumber[$message[1]]!=false; Geçersiz argüman]
$argsCheck[>1;Örnek $getServerVar[prefix]unban <İD>]
$onlyPerms[ban;Yetkin yok]` 
})