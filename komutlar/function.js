module.exports = ({
    name:"function",
    code:`
$title[$message;https://aoi.leref.ga/functions/usd$toLowercase[$replaceText[$get[msg];$;;-1]]]
$let[msg;$filterMessage[$message;$]]
$description[\`\`\`html
$jsonRequest[https://dbdjs.leref.ga/functions/$message;description]
\`\`\`
$addField[Kullanım:;\`\`\`kt
$jsonRequest[https://dbdjs.leref.ga/functions/$message;usage]
\`\`\`
[Aoi.JS Belgeler](https://aoi.leref.ga/) | [Aoi.JS Api](https://dbdjs.leref.ga/)
[Aoi.JS Github](https://github.com/aoijs/aoi.js) | [Aoi.JS NPM](https://www.npmjs.com/package/aoi.js)
[Aoi.JS Resmi Discord Sunucusu](https://discord.gg/r2qUbuvqMr)]]
$thumbnail[https://cdn.discordapp.com/avatars/640397198240251905/25dbfa5f7b598424fcafc5abf9493f60.webp]
$color[0099FF]
$onlyif[$jsonRequest[https://dbdjs.leref.ga/functions/$message;name]!=;:x: Hata, komut bulunamadı]`
}) 