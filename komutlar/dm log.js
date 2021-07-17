module.exports = ({
  name:"$alwaysExecute",
  bkz:"Dm'de yazılanları log tutar.",
  code:`$channelSendMessage[844115085302956042;{title:DM'DEN BİR MESAJ ALDIM!}{description: Dm'den Bir Mesaj  Alındı:
  Mesaj: \`$message\`
  Gönderen: $userTag[$authorid]
  Gönderilen zaman: $sum[$hour;3].$minute}{color:GREEN}{thumbnail:$authorAvatar}]
  $sendMessage[DM'lerim LOG Olarak Tutulmaktadır. Geliştiricim yazılanları görebilir!!;no]
  $onlyIf[$channeType==dm;]`
})