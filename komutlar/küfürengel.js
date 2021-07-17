module.exports = ({
    name:"$alwaysExecute",
    code:` <@$authorID> Küfür Engel Sistemi Açık !
  $deleteIn[3s]
  $deletecommand $onlyIf[$checkContains[$toLowercase[$message];amk;oç;piç;aq;sik;çük;Yarrak;Yarak;orospu;Amq]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[küfür]!=kapalı;]`
})