module.exports = ({
name: "davet", 
code: `
$djsEval[client.api.channels(message.channel.id).messages.post({data: {
 components: [
 {
 type: 1,
 components: [
 {
 type: 2,
 label: "Beni Davet Et",
 style: 5,
 url: "$getBotInvite",
 }
 ]
 }
 ],
 content: "** **",
 }
});no]` 
})