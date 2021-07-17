module.exports = ({
name: "prefix",
code:`
$setServerVar[prefix;$message[1]]
Prefix Başarıyla Ayarlandı. Yeni Prefix $message[1] 
$onlyPerms[admin;yetkin yok xd]
$suppressErrors[Bir hata Oluştu]
$argsCheck[1;Bir prefix söyleyin]
$onlyIf[$message!=;Bir prefix söyleyin]`
})