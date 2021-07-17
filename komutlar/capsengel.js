module.exports = {
  name:"capsengel",
  code:`
  Caps Engel $replaceText[$replaceText[$message;aç;Açıldı;-1];kapat;Kapatıldı;-1]
  
  $setServerVar[capsengel;$replaceText[$replaceText[$message;aç;açık;-1];kapat;kapalı;-1]]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısınız]
  $onlyBotPerms[managemessages;Bu komutu kullanabilmek için bana **MESAJLARI YÖNET** Yetkisini vermeniz gerekiyor]
  $onlyIf[$checkContains[$message;aç;kapat]!=false;Sadece \`aç\` veya \`kapat\` kullanılabilir.]
  $onlyIf[$message!=;Kullanım $getServerVar[prefix]capsengel aç/kapat]
  `
}