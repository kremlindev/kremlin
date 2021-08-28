module.exports = ({
name:"js",
bkz:"JavaScript Eval Komutu",
code:`$djsEval[
const path = require("path")
function file(file){
if(!file){
return "Bir dosya yaz"
}
return require(path.join(process.cwd(), file))
}
const falsisdb = require("falsisdb")
const db = new falsisdb()
const fs = require("fs")
const fetch = require("node-fetch")
const color = require(path.join(process.cwd(), "color.json"))
async function renk(type, code) {
if(!type) return "Tür girsene (rgb, hsl veya luminosity)"
if(!code) return "Renk kodu gir ama hex olck"
if(type === "hsl") {
var sonuc = await fetch('https://api.falsisdev.ga/color?hex=' + code).then(x => x.json())
return 'hsl(' + ~~sonuc.hsl.color[0] + ', ' + ~~sonuc.hsl.color[1] + ', ' + ~~sonuc.hsl.color[2] + ')'
}
if(type === "rgb") {
var sonuc = await fetch('https://api.falsisdev.ga/color?hex=' + code).then(x => x.json())
return sonuc.rgbcode
}
if(type === "luminosity") {
var sonuc = await fetch('https://api.falsisdev.ga/color?hex=' + code).then(x => x.json())
return sonuc.luminosity
}
} 
$message;yes]
$onlyForIDs[$botOwnerID;700763255978852462;606828535423959041;]
`
})