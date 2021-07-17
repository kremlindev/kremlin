module.exports = ({
name: "lyrics",
code:`$title[$message Şarkısının Lyrics'i.] 
$argsCheck[>1;Bir Şarkı ismi yazın]
$description[
Şarkı Adı : $jsonRequest[https://some-random-api.ml/lyrics?title=$message;title]
Şarkı Sahibi : $jsonRequest[https://some-random-api.ml/lyrics?title=$message;author]
Şarkı Sözleri : $jsonRequest[https://some-random-api.ml/lyrics?title=$message;lyrics]]
$suppressErrors[Bu şarkıda lYRİCS BULUNAMADI]
$color[RANDOM]
$onlyIf[$message!=;]
`
})