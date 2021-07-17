module.exports =({
name:"rozetlerim",
code:`$title[Kullanıcının Rozetleri]

$description[

Kremlin Onay Rozeti

$replaceText[$getGlobalUserVar[onaylı;$mentioned[1;yes]]; ;Kullanıcı Kremlin Onaylı Değil;-1] 

Kremlin Sahibi Rozeti 

$replaceText[$getGlobalUserVar[owner;$mentioned[1;yes]]; ;Kullanıcı Kremlin Sahibi Değil;-1]]

$color[303136]`
})