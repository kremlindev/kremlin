module.exports = ({
  name:"say",
  bkz:"Sunucudaki kullanıcı sayılarını sayar.",
  code:`$title[$serverName[$guildID] Sunucusu Kullanıcı Sayıları]
  $description[
    $customEmoji[members;843482656725139516] Toplam Üye: $math[$membersCount-$botCount]
    $customEmoji[members;843482656725139516] Çevrimiçi Üye: $membersCount[$guildID;online]
    $customEmoji[members;843482656725139516] Boşta Üye: $membersCount[$guildID;idle]
    $customEmoji[members;843482656725139516] Rahatsız Etmeyin Üye: $membersCount[$guildID;dnd]
    $customEmoji[members;843482656725139516] Çevrimdışı üye: $membersCount[$guildID;offline]
    $customEmoji[bot;843482656725139516] Bot: $botCount]
    $color[BDAAF9]
    $thumbnail[$serverIcon[$guildID]]`
})
//burası intentler açılınca kullanılacak
/*Aktif Üye: $math[$sum[$math[$membersCount[$guildID;online]+$membersCount[$guildID;dnd]]-$botCount];$membersCount[$guildID;idle]]*/