module.exports = ({ //falsis 
  name:"bot-inf", //falsis
  code:`$author[$userTag[$mentioned[1]] Bot Bilgisi;$userAvatar[$mentioned[1]]
  $description[
    Bot adı: \`$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];username]\`
    Bot Etiketi: \`#$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];discrim]\`
    Bot ID : \`$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];botID]\`
    Avatar: [Tıkla]($jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];avatar])
    
    Sahip Adı: \`$username[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];ownerID]]\`
    Diğer Sahipler: \`$replaceText[$replaceText[$checkCondition[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];coowners]==];true;2. Sahip bulunamadı;-1];false;$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];coowners];-1]\`
    
    Prefix: \`$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];prefix]\`
    Tandem ID: \`$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];_id]\`
    OY Sayısı: \`$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];votes]\`
    Etiketler: \`$replaceText[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];tags];,;, ;-1]\`
    Kısa Açıklama;
    \`\`\`js
    $jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];shortDesc]\`\`\`
    Uzun Açıklama;
    \`\`\`js
    $jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];longDesc]\`\`\`
    Bot Durumu: \`$replaceText[$replaceText[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];status];Approved;Onaylı;-1];Declined;Reddedilmiş;-1]\`
    Sertifika Durumu: \`$replaceText[$replaceText[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];certificate];Certified;Sertifikalı;-1];None;Sertifikasız;-1]\`
    Premium Durumu: \`$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];premium]\`
    $replaceText[Website: [Tıkla]($jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];website]);Website: [Tıkla]();;-1]
        $replaceText[Destek: [Tıkla]($jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];support]);Destek: [Tıkla]();;-1]]
            $color[RED]
            $thumbnail[$user[$mentioned[1];avatar]]
            $onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$mentioned[1];error]!=true;:x: Etiketlenen bot sistemde bulunmuyor!]
            $onlyIf[$isBot[$mentioned[1]]==true;:x: Lütfen geçerli bir bot etiketleyin]
            $onlyIf[$mentioned[1]!=;:x: Lütfen bir bot etiketleyin.]`//falsis
})//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
//falsis
