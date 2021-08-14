module.exports = {
name: 'binary',
bkz: 'Binary - Yazı çevirisi',
code:`$title[Binary Yazı Çeviricisi]
$addField[Binary Kodu:;\`\`\`binary
$djsEval[var output = ""
var input = $noMentionMessage
for (var i = 0; i < input.length; i++) { 
output += input[i].charCodeAt(0).toString(2) + " "; 
};yes]\`\`\`]
$addField[Yazı:;\`\`\`txt
$noMentionMessage\`\`\`]
$color[BDAAF9]
$thumbnail[$authorAvatar]
$footer[Kremlin is Happy to Support Developers...]
$onlyIf[$noMentionMessage!=;❌ Lütfen bir metin girin.]`
}
