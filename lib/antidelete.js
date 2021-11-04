 const {
        WAConnection,
         MessageType,
        Presence,
        MessageOptions,
        Mimetype,
         WALocationMessage,
        WA_MESSAGE_STUB_TYPES,
        ReconnectMode,
        ProxyAgent,
        GroupSettingChange,
        waChatKey,
        mentionedJid,
        processTime,
        generateMessageID,
        ChatModification
} = require('@adiwajshing/baileys');
const fs = require("fs");
const moment = require("moment-timezone");
module.exports = master = async (master, god) => {
const from = god.key.remoteJid
const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
const isRevoke = god.key.remoteJid.endsWith('@s.whatsapp.net') ? true : god.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
const isCtRevoke = god.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
if (god.key.remoteJid == 'status@broadcast') return
if (god.key.fromMe && god.key.fromMe) return
if(!isRevoke) return
god.message = (Object.keys(god.message)[0] === 'ephemeralMessage') ? god.message.ephemeralMessage.message : god.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let c = master.chats.get(god.key.remoteJid)
let a = c.messages.dict[`${god.key.id}|${god.key.fromMe ? 1 : 0}`]
let co3ntent = master.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
master.sendMessage(god.key.remoteJid, `▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬\n\n\`\`\`「 Anti Delete 」\`\`\`
${shp} *Nama :* @${god.participant.split("@")[0]}
${shp} *Waktu :* _${jam} ${week} ${calender}_
${shp} *Type :* _${c3type}_\n\n▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬`, MessageType.text, {quoted: god.message, contextInfo: {"mentionedJid": [god.participant]}})
master.copyNForward(god.key.remoteJid, god.message)
}
