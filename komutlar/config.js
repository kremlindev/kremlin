module.exports = ({
name : "ayarlar",
aliases:['config'],
code:`$reactionCollector[$getServerVar[id];$authorID;5m;1️⃣,2️⃣;awaitReaction10,awaitReaction11;yes]
$setServerVar[id;$sendMessage[{description:
**Küfür Engel**
$replaceText[$replaceText[$getServerVar[küfür];kapalı;$customEmoji[kapali] Sistem Kapalı;-1];açık;$customEmoji[acik] Sistem Aktif;-1]

**Reklam Engel**
$replaceText[$replaceText[$getServerVar[linkengel];0;$customEmoji[kapali] Sistem Kapalı;-1];1;$customEmoji[acik] Sistem Aktif;-1]

**Caps Engel**
$replaceText[$replaceText[$getServerVar[capsengel];kapalı;$customEmoji[kapali] Sistem Kapalı;-1];açık;$customEmoji[acik] Sistem Aktif;-1]

**Sa-As sistemi**
$replaceText[$replaceText[$getServerVar[saas];kapalı;$customEmoji[kapali] Sistem Kapalı;-1];açık;$customEmoji[acik] Sistem Aktif;-1]

**Otorol**
$replaceText[$getServerVar[otorol];kapalı;$customEmoji[kapali] Sistem Kapalı;-1]

**Otocevap**
$replaceText[$replaceText[$checkCondition[$findChars[$getservervar[otocevap]]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;$customEmoji[acik] Sistem Aktif;-1]

**Mute Rolü**
$replaceText[$replaceText[$checkCondition[$getServerVar[mrol]==yok];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<@&$getServerVar[mrol]>;-1]

**Mute Yetkili**
$replaceText[$replaceText[$checkCondition[$getservervar[my]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<@&$getservervar[my]>;-1]

**Ban Yetkili**
$replaceText[$replaceText[$checkCondition[$getservervar[by]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<@&$getservervar[by]>;-1]

**Ban Log**
$replaceText[$replaceText[$checkCondition[$getservervar[banlog]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[banlog]>;-1]

**Kick Log**
$replaceText[$replaceText[$checkCondition[$getservervar[kicklog]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[kicklog]>;-1]

**Mute Log**
$replaceText[$replaceText[$checkCondition[$getservervar[mutelog]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[mutelog]>;-1]

**Jail Log**
$replaceText[$replaceText[$checkCondition[$getservervar[jaillog]==];true;$customEmoji[kapali] Sistem Kapalı;-1];false;<#$getservervar[jaillog]>;-1]}{thumbnail:$authorAvatar}{footer:$username tarafından istendi!:$authorAvatar}{color:303136};yes]]`
})
