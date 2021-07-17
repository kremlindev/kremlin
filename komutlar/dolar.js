module.exports = ({
name: "dolar",
code: `$title[Güncel dolar Kuru]
$description[İsim : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;isim]

Kod : USD

Alış : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;ForexBuying]

Satış : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;ForexSelling]

Banknot Alış : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;BanknoteBuying]

Banknot Satış : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;BanknoteSelling]]

$footer[Kaynak : T.C Merkez Bankası;$authorAvatar]
$color[RANDOM]`
    })