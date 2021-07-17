module.exports = ({
name:"wiki",
aliases: ["wikipedia"],
bkz:"Wikipedia üzerinde arama yapar",
code:`$title[Wikipedia Arama]
$description[Arama Sonuçları:
$addField[$customEmoji[tag;843482656725139516] Uzun Tanım;$djsEval[const a = $joinSplitText[ ]

a.summary.extract;yes]
$addField[$customEmoji[translate;843482656725139516] Kısa Açıklama;$djsEval[const a = $joinSplitText[ ]

a.summary.description;yes]]
$addField[$customEmoji[kitap;843482656725139516] Link;[Link]($djsEval[const a = $joinSplitText[ ]

a.page.fullurl;yes])]
$addField[$customEmoji[edit;843482656725139516] Başlık;$djsEval[const a = $joinSplitText[ ]

a.page.title;yes]]
$textSplit[$httpRequest[https://api.falsisdev.ga/wiki?wiki=$uri[encode;$message];GET;;;;page:title];          ]
]
$color[BDAAF9]
$thumbnail[$authorAvatar]
$onlyIf[$message!=;:x: Lütfen arayacağınız şeyi yazın!]`
})