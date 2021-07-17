module.exports = ({
name: "rolver", 
code: `
$giveRole[$mentioned[1];$mentionedRoles[1]]
$title[✔️ Kullanıcıya Rol Verildi.]
$color[303136]
$onlyIf[$mentionedRoles[1]!=;Lütfen bir rol etiketle]
$onlyBotPerms[manageroles;Kullanıcıya Rol Verme ytkisine sahip değilim]
$onlyPerms[manageroles;Kullanıcıya rol verme yetkisine sahip değilsin.]` 
})