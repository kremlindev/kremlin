module.exports = ({
name:"sayı",
code:`$setServerVar[count;$noMentionMessage[1]]
$reply[$messageID;Başarılı, sayı artık **$noMentionMessage[1]** oldu! Oyuncular bu sayıdan devam etmek zorunda..;yes]
$onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın]
$argsCheck[>1;Bir sayı yaz]`
})


