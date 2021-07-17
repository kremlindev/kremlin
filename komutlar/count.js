module.exports = ({
name:"$alwaysExecute",
code:`$if[$message==$sum[$getServerVar[count];1]]
$setServerVar[count;$message]
$else
Hatalı Sayı! Lütfen Doğru Sayı Girin!
$deletecommand
$deleteIn[4s]
$elseIf[$isNumber[$message]==false]
$deletecommand
$deletein[4s]
Bu kanalda lütfen sayı dışında birşey yazma!
$endElseIf
$endIf
$onlyForChannels[$getServerVar[countkanal];821297238298198046;821290945760460800;803003868262694942;...;]`
})
