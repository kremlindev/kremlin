module.exports = {
  name: "kpaylaş",
  aliases: ["kod-paylaş", "paylaş"],
  code: `$reply[$messageID;Başarıyla Kodunuz Paylaşıldı;yes]
  $addCmdReactions[<:tmonay:768735275240259616>]
  $addMessageReactions[782613679974907934;$get[falsis];👍;👎]
  $let[falsis;$channelSendMessage[782613679974907934;{author:Yeni bir komut!}{thumbnail:$authorAvatar}{description:
  [$userTag[$authorid]]($msg[$channelID;$messageID;url])
  Kullanıcı ID : [$authorid](https://discord.com/users/$authorid)
  Kullanıcı Adı : [$username](https://discord.com/users/$authorid)
  Kodu:
  \`\`\`js
  $message
  \`\`\`
  Eğer Bu Koda Oy Vermek İsterseniz | 👍 Güzel | 👎 Kötü |}
  {footer:TheMechanic's Development};yes]]
  $onlyIf[$checkContains[$toLowercase[$message;bdfd;dbdjs;dbd.js]]==true;Lütfen kodunuzun **BDFD** mi yoksa **DBDJS** mi olduğunu belirtin]
  $onlyIf[$charCount[$message]>=60;Lütfen kodunuzun **60** karekterden uzun olduğuna dikkat edin]
  $argsCheck[>1;Lütfen paylaşmak istediğiniz kodu yazın.]
  $onlyForChannels[771140312722440202;...;<#771140312722440202>]`,
  nonPrefixied: true
};