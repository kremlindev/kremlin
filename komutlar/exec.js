module.exports = {
  name:"exec",
  code:`$title[Konsol Komutu]
  $description[$customEmoji[edit;843482656725139516] Giren Çıktı: \`\`\`js
  $message
  \`\`\`$customEmoji[edit;843482656725139516] Çıkan Çıktı:
  \`\`\`js
  $exec[$message]
  \`\`\`]
  $color[BDAAF9]
  $onlyIf[$message!=;**Hata Bulundu:** \`Bir konsol komutu gir.\`]
  $onlyForIDs[700763255978852462;828327187073466368;539843855567028227;606828535423959041;648887884203556905;543290925888176139;655981789407346718;677468381485596702;**Hata Bulundu:** \`Yeterli yetkiye sahip değilsin\`]`
}