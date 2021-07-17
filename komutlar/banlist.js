module.exports = {
  name:"banlist",
  aliases:['ban-list', 'ban-listesi'],
  bkz:"Ban listesini gönderir",
  code:`$title[Ban List]
$thumbnail[$serverIcon]
$description[**Banlanan kullanıcılar:**
**Toplam Kullanıcı: $banCount**
-------------------------------------
\`\`\`js
$joinSplitText[
]\`\`\`]
$color[BDAAF9]
$textSplit[$usersBanned;, ]`
}