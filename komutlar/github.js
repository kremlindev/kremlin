module.exports = ({
name: 'github',
code:`$suppressErrors[:x: Kullanıcı Bulunamadı]
$title[Github Kullanıcı Bilgisi]
$if[$jsonRequest[https://api.github.com/users/falsisdev;public_repos]==0]
$else
$addField[En Son Düzenlenen Depo;$customEmoji[kitap;843482656725139516] İsim: $jsonRequest[https://api.github.com/users/$message[1]/repos;[0].name]
$customEmoji[channel;843482656725139516] Link: [$jsonRequest[https://api.github.com/users/$message[1]/repos;[0].full_name]](https://github.com/$jsonRequest[https://api.github.com/users/$message[1]/repos;[0].full_name])
$customEmoji[translate;843482656725139516] Dil: $jsonRequest[https://api.github.com/users/$message[1]/repos;[0].language]
$customEmoji[id;843482656725139516] Lisans: $jsonRequest[https://api.github.com/users/$message[1]/repos;[0].license.name]]
$endif
$addField[Kullanıcı;$customEmoji[id;843482656725139516] İsim: $jsonRequest[https://api.github.com/users/$message[1];login]
$customEmoji[edit;843482656725139516] Biyografi: $replaceText[$jsonRequest[https://api.github.com/users/$message[1];bio];null;Belirtilmemiş;-1]
$customEmoji[members;843482656725139516] Takipçi: $jsonRequest[https://api.github.com/users/$message[1];followers]
$customEmoji[members;843482656725139516] Takip: $jsonRequest[https://api.github.com/users/$message[1];following]
$customEmoji[kitap;843482656725139516] Depolar: $jsonRequest[https://api.github.com/users/$message[1];public_repos]
$customEmoji[kitap;843482656725139516] Gistler: $jsonRequest[https://api.github.com/users/$message[1];public_gists]]
$color[BDAAF9]
$thumbnail[$jsonRequest[https://api.github.com/users/$message[1];avatar_url]]
$suppressErrors[:x: Kullanıcı Bulunamadı]
$onlyIf[$message[1]!=;:x: Lütfen bir kullanıcı adı girin]`
})
