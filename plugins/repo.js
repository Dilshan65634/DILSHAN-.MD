const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*DILSHAN MD Repastitory Information*

*| ɴᴀᴍᴇ*: ᴅɪʟꜱʜᴀɴ ᴍᴅ
*| ᴏᴡɴᴇʀ*: ᴅɪʟꜱʜᴀɴ ᴀꜱʜɪɴꜱᴀ
*| ɴᴜᴍʙᴇʀ*: 94772194789
*| ᴠᴇʀꜱɪᴏɴ*: 2.0.0 ʙᴇᴛᴀ


*📡 REPO LINK*
🔗◦පුකද බලන්නෙ ᴇᴘᴏ නෑ මල්ලී😂😂😂


>|©Powerd By DILSHAN MD☀
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/Kx3sxSfr/dinuzzmd.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
