//#>>>> Require Module <<<<#\\
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  WA_MESSAGE_STUB_TYPE,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  WAMessageProto, 
  prepareMessageFromContent, 
  listMessage,
  buttonsMessage,
  relayWAMessage,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const qs = require('qs')
const util = require('util')
const qrcode = require('qrcode');
const imgbb = require('imgbb-uploader')
const request = require('request')
const requests = require("node-fetch")
const toMs = require('ms')
const ms = require("parse-ms");
const FormData = require('form-data')
const axios = require("axios")
const cheerio = require('cheerio')
const speed = require('performance-now')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const Raa = require('ra-api')
const tele = require('telegraph-uploader')
const createPet = require('pet-pet-gif')
const WSF = require('wa-sticker-formatter')
const print = require('print')
const encodeUrl = require('encodeurl')
const Math_js = require('mathjs')
const yts = require( 'yt-search')
const imageToBase64 = require('image-to-base64');
const base64ToImage = require('base64-to-image');
const translate = require('@vitalets/google-translate-api')
const PasteGG = require('paste.gg')
const pasteGG = new PasteGG()
const { spawn, exec, execSync } = require("child_process")
const { removeBackgroundFromImageFile } = require('remove.bg')
const infotlp = require('no-telp')
const googleImage = require('g-i-s')
const ggs = require('google-it')
const brainly = require('brainly-scraper')
const acak = require('lodash')

//#>>>> Sticker Exif <<<<#\\
const Exif = require('../lib/exif');
const exif = new Exif();

//#>>>> Library <<<<#\\
const _prem = require("../lib/premium");
const { color, bgcolor } = require('../lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
const { fetchJson, fetchText, kyun } = require('../lib/fetcher')
const { recognize } = require('../lib/ocr')
const { webp2mp4Url, webp2gifFile, reverseVideoFile, voiceremover } = require('../lib/ezgif')
const { yta, ytv, ytv2, upload } = require('../lib/ytdl')
const { smsg } = require('../lib/simple')
const { speedz } = require('../lib/speedz')
const { wikiv2 } = require('../lib/wikiv2')
const { pinterest } = require('../lib/pinterest')
const { wallpaper } = require('../lib/wallpaper')
const { wallpaperhd } = require('../lib/wallpaperhd')
const { ZippDL } = require('../lib/zippydl')
const { mediafiredl } = require('../lib/mediafiredl')
const { TiktokDownloader } = require('../lib/tiktokdl')
const { igstalk, ttstalk } = require('../lib/stalker')
const { fbdl } = require('../lib/fbdl')

//#>>>> Database <<<<#\\
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const anlink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antihttp = JSON.parse(fs.readFileSync('./database/antihttp.json'))
const antivirus = JSON.parse(fs.readFileSync('./database/antivirus.json'))
const antihidetag = JSON.parse(fs.readFileSync('./database/antihidetag.json'))
const sfilter = JSON.parse(fs.readFileSync('./database/sfilter.json'))
let filter = JSON.parse(fs.readFileSync('./database/filter.json'))
const stickerdb = JSON.parse(fs.readFileSync('./database/stickerdb.json'))
const voting = JSON.parse(fs.readFileSync('./database/voting.json'))
const hit = JSON.parse(fs.readFileSync('./database/hit.json'))
const note = JSON.parse(fs.readFileSync('./database/notes.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))
const setiker = JSON.parse(fs.readFileSync('./database/sticker.json'))
const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
const videonye = JSON.parse(fs.readFileSync('./database/video.json'))


const words = [
	"public",
	"ig",
	"owner",
	"igstory",
	"igtv",
	"twitter",
	"sfiledl",
	"dashboard",
	"soundcloud",
	"sline",
	"mediafire",
	"test",
	"promote",
	"promoteall",
	"demote",
	"demoteall",
	"add",
	"kick",
	"kickall",
	"group",
	"mute",
	"unmute",
	"clearbadword",
	"linkgroup",
	"revoke",
	"leave",
	"voting",
	"delvote",
	"addnote",
	"delnote",
	"getnote",
	"listnote",
	"listonline",
	"listadmin",
	"groupcontact",
	"delete",
	"sider",
	"setdesc",
	"setnamegroup",
	"setppgroup",
	"chatscount",
	"sampah",
	"searchmsg",
	"listmsg",
	"chats",
	"listbotgroup",
	"cari",
	"ceksewa",
	"listmember",
	"reminder",
	"afk",
	"opentime",
	"closetime",
	"tagall",
	"hidetag",
	"totag",
	"nsfw",
	"welcome",
	"ephemeral",
	"antilink",
	"antibadword",
	"antivirtex",
	"antihidetag",
	"autosticker",
	"antiviewonce",
	"carigroup",
	"playstore",
	"happymod",
	"apkmody",
	"moddroid",
	"ytsearch",
	"twittrend",
	"image",
	"infoloker",
	"findsticker",
	"asupantiktok",
	"lirik",
	"pinterest",
	"brainly",
	"ghrepo",
	"cariresep",
	"wattpad",
	"webtoons",
	"mangatoon",
	"sfilesearch",
	"wallpaper",
	"wallpaperhd",
	"searchfilm",
	"drakor",
	"palingmurah",
	"wikipedia",
	"kbbi",
	"google",
	"otaku",
	"infootaku",
	"otakuongoing",
	"kusonime",
	"charainfo",
	"kiryu",
	"randommilf",
	"randomcosplay",
	"waifu",
	"loli",
	"husbu",
	"neko",
	"shinobu",
	"megumin",
	"ghstalk",
	"ttstalk",
	"igstalk",
	"surah",
	"quranayat",
	"quranaudio",
	"tafsirayat",
	"tafsirsurah",
	"infosurah",
	"asmaulhusna",
	"bacaanshalat",
	"doaharian",
	"tahlil",
	"ayatkursi",
	"quotesislami",
	"jadwalsholat",
	"kisahnabi",
	"randomnekopoi",
	"nekopoidl",
	"randombokep",
	"xnxx",
	"xnxxdl",
	"nhentaisearch",
	"hentai",
	"nsfwneko",
	"nsfwloli",
	"nsfwtrap",
	"nsfwblowjob",
	"sticker",
	"stickerfull",
	"stickergif",
	"swm",
	"take",
	"colong",
	"striggered",
	"scircle",
	"sgreyscale",
	"pet",
	"phcomment",
	"ytcomment",
	"semoji",
	"emojitopng",
	"ttp",
	"nuliskiri",
	"nuliskanan",
	"foliokiri",
	"foliokanan",
	"slidepoly",
	"slidebold",
	"slideglowing",
	"slidecolor",
	"slideretro",
	"tictactoe",
	"delttc",
	"casino",
	"delcasino",
	"slot",
	"shot",
	"judi",
	"suit",
	"nyanyi",
	"tebakgambar",
	"caklontong",
	"susunkata",
	"siapakahaku",
	"tekateki",
	"tebakkata",
	"asahotak",
	"truth",
	"dare",
	"limit",
	"transfer",
	"buylimit",
	"buyglimit",
	"topbalance",
	"jadibot",
	"stopbot",
	"listbot",
	"glitch",
	"shadow",
	"romance",
	"smoke",
	"burnpapper",
	"naruto",
	"love",
	"metal",
	"grass",
	"doubleheart",
	"coffe",
	"butterfly",
	"neon",
	"flaming",
	"grafity",
	"blackpink",
	"gradient",
	"matrix",
	"thunder",
	"carbon",
	"water",
	"blood",
	"jagokata",
	"artinama",
	"zodiak",
	"tafsirmimpi",
	"kecocokannama",
	"ramalanjodoh",
	"tanggaljadian",
	"harilarangan",
	"jodoh",
	"filmupdate",
	"kompasnews",
	"tribunnews",
	"jalantikus",
	"hoax",
	"gempa",
	"ceritahoror",
	"halal",
	"kodepos",
	"herodetails",
	"herolist",
	"servermc",
	"infocovid",
	"covidindo",
	"pixel",
	"wanted",
	"wasted",
	"gtav",
	"rainbow",
	"jail",
	"imgdelete",
	"shit",
	"beautiful",
	"affect",
	"sepia",
	"rip",
	"hitler",
	"facepalm",
	"trash",
	"fast",
	"slow",
	"reverse",
	"trigger",
	"hode",
	"imut",
	"robot",
	"tupai",
	"bass",
	"nightcore",
	"randomcerpen",
	"randomgore",
	"quotes",
	"fakta",
	"pantun",
	"darkjokes",
	"meme",
	"cogan",
	"cecan",
	"patrick",
	"doge",
	"gura",
	"bucin",
	"dadu",
	"asupan",
	"citacita",
	"ppcouple",
	"addsticker",
	"delsticker",
	"liststicker",
	"addvn",
	"delvn",
	"listvn",
	"addimage",
	"delimage",
	"getimage",
	"listimage",
	"addvideo",
	"delvideo",
	"getvideo",
	"listvideo",
	"setcmd",
	"delcmd",
	"addrespon",
	"delrespon",
	"translate",
	"tinyurl",
	"ssweb",
	"fetch",
	"fastvideo",
	"slowvideo",
	"reversevideo",
	"detikvideo",
	"detikvn",
	"cutvideo",
	"cutaudio",
	"audiotovideo",
	"size",
	"toimg",
	"tomp4",
	"tomp3",
	"togif",
	"tovn",
	"tourl",
	"tourl2",
	"tourl3",
	"style",
	"getpic",
	"getname",
	"getbio",
	"getquoted",
	"getcaption",
	"getexif",
	"spam",
	"resend",
	"readmore",
	"mention",
	"inspect",
	"infobisnis",
	"kontak",
	"wamestyle",
	"cekpremium",
	"listcmd",
	"listbisnis",
	"listrespon",
	"listbadword",
	"listblock",
	"listban",
	"listprem",
	"listsewa",
	"listgroup",
	"listpc",
	"totalchat",
	"price",
	"runtime",
	"status",
	"rules",
	"ping",
	"self",
	"exif",
	"autoreadgc",
	"autoreadpc",
	"antidelete",
	"autotelp",
	"antibuggc",
	"addbadword",
	"delbadword",
	"addprem",
	"dellprem",
	"sewa",
	"join",
	"buggc",
	"listsw",
	"getsw",
	"creategroup",
	"culik",
	"colongsw",
	"sendfile",
	"readfile",
	"saveas",
	"download",
	"setthumb",
	"setthumb2",
	"setfake",
	"setppbot",
	"setname",
	"setbio",
	"blockir",
	"unblockir",
	"ban",
	"unban",
	"bc",
	"bcgc",
	"clearpc",
	"cleargc",
	"clearall",
	"setprefix",
	"play",
	"video",
	"music",
	"ytmp4",
	"ytmp3",
	"getmusic",
	"getvideo",
	"tiktoknowm",
	"tiktokwm",
	"tiktokmusic"
]

//#>>>> Settings <<<<#\\
public = false
antitag = false
autongetik = false
autovn = false
autoreadgc = false
autoreadpc = false
bugc = true
antitrol = false
ownerN = "628983583288"
setgrup = "628983583288-1620319322@g.us"
fakeNumber = '0@s.whatsapp.net'
blocked = []
shp  = '➣'
shp2 = '🌹'
shp3 = '🔖'
shp4 = '🤖'
shp5 = '🐳'
scs = '[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...'
namabot = `𝑽𝒆𝒂𝒏 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑`
fake = `🌹 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑`
modelmenu = 'lokasi'
harga = '100000000000'
settroli = '2021'
cokmatane = '359996400'
harganya = '99999999999'
long = '106.8451'
lati = '-6.2146'
gamewaktu = '60'
matauang = 'Rp.'
blocked = []
ban = []
adadeh = {}

//#>>>> Prefix Setting <<<<#\\
let multi  = true
let nopref = false
let single = false
let prefa  = '#'

//#>>>> Fake Image <<<<#\\
fakeimg1 = fs.readFileSync(`./workspace/media/img1.jpeg`);
fakeimg2 = fs.readFileSync(`./workspace/media/img2.jpeg`);
fakeimg3 = fs.readFileSync(`./workspace/media/img3.jpeg`);
fakeimg4 = fs.readFileSync(`./workspace/media/img4.jpeg`);
/***
INFORMATION :
# img1 = Image Quoted
# img2 = Image Thumbnail
# img3 = Image Flink
# img4 = Image Menu
***/

//#>>>> Vcard <<<<#\\
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:My Owner シ︎\n'
            + 'ORG:Owner Bot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=628983583288:+62 898-3583-288\n'
            + 'END:VCARD'
            
//#>>>> Function Before Module Exports <<<<#\\
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
          
//#>>>> Start Connection <<<<#\\
module.exports = master = async (master, god) => {
try {
if (!god.hasNewMessage) return
god = god.messages.all()[0]
if (!god.message) return
if (god.key && god.key.remoteJid == 'status@broadcast') return
god.message = (Object.keys(god.message)[0] === 'ephemeralMessage') ? god.message.ephemeralMessage.message : god.message

m = smsg(master, god)
global.prefix
global.blocked

if ((Object.keys(god.message)[0] === 'ephemeralMessage' && JSON.stringify(god.message).includes('EPHEMERAL_SETTING')) && god.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (god.key.fromMe) return
numsb = god.participant
longkapnye = "\n".repeat(400)
tekuss = `Tandai Telah Dibaca, Seseorang Telah Mengirim Bug!${longkapnye}\`\`\`BUGGC TERDETEKSI\`\`\`\n@${numsb.split("@")[0]} Tersangka\n\n_${scs}_`
/*
vean.groupRemove(men.key.remoteJid, [numsb]).catch((e) => { reply(`*ERR:* ${e}`) })
*/
master.sendMessage(god.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[numsb]}})
master.sendMessage(god.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[numsb]}})
}

const content = JSON.stringify(god.message)
const from = god.key.remoteJid
const type = Object.keys(god.message)[0]

const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const mentionByTag = type == "extendedTextMessage" && god.message.extendedTextMessage.contextInfo != null ? god.message.extendedTextMessage.contextInfo.mentionedJid : []

//#>>>> Date & Time <<<<#\\
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const date = moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm:ss')
const datenya = new Date().toLocaleDateString()
const jamm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')
let dt = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing','Pon','Wage','Kliwon','Legi'][Math.floor(((dt * 1) + gmt) / 84600000) % 5]
let week = dt.toLocaleDateString(locale, { weekday: 'long' })
let calender = dt.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var datesu = new Date(dates);
var tahun = datesu.getFullYear();
var bulan1 = datesu.getMonth();
var tanggal = datesu.getDate();
var hari = datesu.getDay();
var haris = datesu.getDay();
var jam = datesu.getHours();
var menit = datesu.getMinutes();
var detik = datesu.getSeconds();
var waktoo = datesu.getHours();

switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan1) {
case 0: bulan1 = "Januari"; break;
case 1: bulan1 = "Februari"; break;
case 2: bulan1 = "Maret"; break;
case 3: bulan1 = "April"; break;
case 4: bulan1 = "Mei"; break;
case 5: bulan1 = "Juni"; break;
case 6: bulan1 = "Juli"; break;
case 7: bulan1 = "Agustus"; break;
case 8: bulan1 = "September"; break;
case 9: bulan1 = "Oktober"; break;
case 10: bulan1 = "November"; break;
case 11: bulan1 = "Desember"; break;
}
switch(waktoo){
case 0: waktoo = "Malam"; break;
case 1: waktoo = "Malam"; break;
case 2: waktoo = "Malam"; break;
case 3: waktoo = "Malam"; break;
case 4: waktoo = "Pagi"; break;
case 5: waktoo = "Pagi"; break;
case 6: waktoo = "Pagi"; break;
case 7: waktoo = "Pagi"; break;
case 8: waktoo = "Pagi"; break;
case 9: waktoo = "Pagi"; break;
case 10: waktoo = "Pagi"; break;
case 11: waktoo = "Siang"; break;
case 12: waktoo = "Siang"; break;
case 13: waktoo = "Siang"; break;
case 14: waktoo = "Siang"; break;
case 15: waktoo = "Sore"; break;
case 16: waktoo = "Sore"; break;
case 17: waktoo = "Sore"; break;
case 18: waktoo = "Sore"; break;
case 19: waktoo = "Malam"; break;
case 20: waktoo = "Malam"; break;
case 21: waktoo = "Malam"; break;
case 22: waktoo = "Malam"; break;
case 23: waktoo = "Malam"; break;
}
var Tanggal= "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
var Hari= "" + waktoo;


const mentionByReply = type == "extendedTextMessage" && god.message.extendedTextMessage.contextInfo != null ? god.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
		mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []

const cmd = (type === 'buttonsResponseMessage' && god.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === master.user.jid) ? god.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && god.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === master.user.jid) ? god.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && god.message.conversation) ? god.message.conversation : (type == 'imageMessage') && god.message.imageMessage.caption ? god.message.imageMessage.caption : (type == 'videoMessage') && god.message.videoMessage.caption ? god.message.videoMessage.caption : (type == 'extendedTextMessage') && god.message.extendedTextMessage.text ? god.message.extendedTextMessage.text : (type == 'stickerMessage') && (stickerdb[god.message.stickerMessage.fileSha256.toString('hex')] !== null && stickerdb[god.message.stickerMessage.fileSha256.toString('hex')] !== undefined) ? stickerdb[god.message.stickerMessage.fileSha256.toString('hex')] : "".slice(1).trim().split(/ +/).shift().toLowerCase()

/*
const cmd = (type === 'conversation' && god.message.conversation) ? god.message.conversation : (type == 'imageMessage') && god.message.imageMessage.caption ? god.message.imageMessage.caption : (type == 'videoMessage') && god.message.videoMessage.caption ? god.message.videoMessage.caption : (type == 'extendedTextMessage') && god.message.extendedTextMessage.text ? god.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
*/

//#>>>> Prefix Function <<<<#\\
if(multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '-'	  

} else {
if (nopref){
prefix = ''

} else {
if(single){
prefix = prefa
}
}
}

body = (type === 'buttonsResponseMessage' && god.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === master.user.jid) ? god.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && god.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === master.user.jid) ? god.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && god.message.conversation.startsWith(prefix)) ? god.message.conversation : (type == 'imageMessage') && god.message.imageMessage.caption.startsWith(prefix) ? god.message.imageMessage.caption : (type == 'videoMessage') && god.message.videoMessage.caption.startsWith(prefix) ? god.message.videoMessage.caption : (type == 'extendedTextMessage') && god.message.extendedTextMessage.text.startsWith(prefix) ? god.message.extendedTextMessage.text : (type == "stickerMessage") && stickerdb[god.message.stickerMessage.fileSha256.toString("hex")].text ? prefix + stickerdb[god.message.stickerMessage.fileSha256.toString("hex")].text : ""

/*
body = (type === 'conversation' && god.message.conversation.startsWith(prefix)) ? god.message.conversation : (type == 'imageMessage') && god.message.imageMessage.caption.startsWith(prefix) ? god.message.imageMessage.caption : (type == 'videoMessage') && god.message.videoMessage.caption.startsWith(prefix) ? god.message.videoMessage.caption : (type == 'extendedTextMessage') && god.message.extendedTextMessage.text.startsWith(prefix) ? god.message.extendedTextMessage.text : (type == "stickerMessage") && stickerdb[god.message.stickerMessage.fileSha256.toString("hex")].text ? prefix + stickerdb[god.message.stickerMessage.fileSha256.toString("hex")].text : (type === 'buttonsResponseMessage') ? god.message.buttonsResponseMessage.selectedButtonId : ""
*/

var pes = (type === 'conversation' && god.message.conversation) ? god.message.conversation : (type == 'imageMessage') && god.message.imageMessage.caption ? god.message.imageMessage.caption : (type == 'videoMessage') && god.message.videoMessage.caption ? god.message.videoMessage.caption : (type == 'extendedTextMessage') && god.message.extendedTextMessage.text ? god.message.extendedTextMessage.text : ''

const messagesC = pes.slice(0).trim()

const messagesCC = pes.slice(0).trim().split(/ +/).shift()

budy = (type === 'conversation') ? god.message.conversation : (type === 'extendedTextMessage') ? god.message.extendedTextMessage.text : ''

const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
chats = (type === 'conversation') ? god.message.conversation : (type === 'extendedTextMessage') ? god.message.extendedTextMessage.text : ''
const arg = chats.slice(command.length + 2, chats.length)
const argss = body.split(/ +/g)

resbutx = (type === 'listResponseMessage') ? god.message.listResponseMessage.title : ''

butresx = (type === 'buttonsResponseMessage') ? god.message.buttonsResponseMessage.selectedDisplayText : ''

q3 = Object.keys(god.message)[0] == "buttonsResponseMessage" ? god.message.buttonsResponseMessage.selectedButtonId : ""

//#>>>> Mess Settings <<<<#\\
mess = {
				wait: '📩 𝐷𝑎𝑡𝑎 𝐼𝑛 𝑃𝑟𝑜𝑐𝑒𝑠𝑠, 𝑃𝑙𝑒𝑎𝑠𝑒 𝑊𝑎𝑖𝑡 𝐴 𝑀𝑖𝑛𝑢𝑡𝑒...',
				success: '[ √ ] 𝑺𝒖𝒄𝒄𝒆𝒔𝒔...',
        prem: `_Maaf Fitur Ini Khusus User Premium, Silahkan Hubungi Owner Untuk Menjadi User Premium!_`,
				error: {
					stick: 'Error su :v',
					Iv: 'Link nya mokad :v',
					api: '_Error!_'
				},
				only: {
					group: '*Pakainya Only Group Mhank!*',
					ownerB: '_Lu Siapa?_',
					admin: '*Lu Bukan Admin, Jadi Gausah Nyuruh Gua Su!*',
					Badmin: '*Gabisa cokk!! Jadiin gua admin dulu..*'
				}
			}

const totalchat = await master.chats.all()
const botNumber = master.user.jid
const botN = botNumber.replace('@s.whatsapp.net', '')
const ownerNumber = [`${ownerN}@s.whatsapp.net`] 
const ownerContact = [`628983583288`,`0`]
const isGroup = from.endsWith('@g.us')
const sender = god.key.fromMe ? master.user.jid : isGroup ? god.participant : god.key.remoteJid
const senderNumber = sender.split("@")[0]
const groupMetadata = isGroup ? await master.groupMetadata(from) : ''
const isOwner = ownerNumber.includes(sender)
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isfilter = isGroup ? sfilter.includes(from) : false
const isAntilink = isGroup ? anlink.includes(from) : false
const isAntihttp = isGroup ? antihttp.includes(from) : false
const isAntivirus = isGroup ? antivirus.includes(from) : false
const isAntiHide = isGroup ? antihidetag.includes(from) : false
const isPremium = isGroup ? _prem.checkPremiumUser(sender,premium) : false
_prem.expiredCheck(premium)
const itsMe = god.key.fromMe ? true : false
const q = args.join(' ')  
conts = god.key.fromMe ? master.user.jid : master.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = god.key.fromMe ? master.user.name : conts.notify || conts.vname || conts.name || '-'
const isBanchat = isGroup ? bancht.includes(from) : false
const isVote = isGroup ? voting.includes(from) : false
const txt = god.message.conversation
const buattag = botNumber.replace('@s.whatsapp.net', '')

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

//#>>>> Fake Reply <<<<#\\
finvite = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": setgrup,
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": groupName,
"caption": `${fake}`,
"height": 6080,
"width": 6000
}
}
}

const ftroli =  {
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
orderMessage: {
itemCount: `2021`,
status: 200,
thumbnail: fakeimg1, 
surface: 200, 
message: `${fake}`, 
orderTitle: '', 
sellerJid: '0@s.whatsapp.net'}
}
}

//#>>>> FunctionX <<<<#\\
function monospace(string) {
return '```' + string + '```'
}   
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}
// Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }

const replyWithFake = (teks) => {
master.sendMessage(from, teks, text,{quoted : ftroli})
}

const reply = (teks) => {
master.sendMessage(from, teks, text,{        "contextInfo": {
            text: teks,
            "forwardingScore": 508,
            isForwarded: true,
            sendEphemeral: true },
		      	quoted: god
})
}

const sendMess = (hehe, teks) => {
master.sendMessage(hehe, teks, text, {contextInfo: { forwardingScore: 9999, isForwarded: true},thumbnail: fakeimg2, quoted : god})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? master.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : master.sendMessage(from, teks.trim(), extendedText, {quoted: god,thumbnail:fakeimg2, contextInfo: {"mentionedJid": memberr}})
}

const Mentions = (from, text, orangnya, god) => {
	master.sendMessage(from, text, MessageType.text, {contextInfo: {mentionedJid: orangnya}, quoted: god})
}

async function sendFileFromUrl(from, url, god, msg, god) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return master.sendMessage(from, await getBuffer(url), type, {caption: msg, quoted: god, mimetype: mime, contextInfo: {"mentionedJid": god ? god : []}})
        }

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
master.sendMessage(to, media, type, { quoted: god, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
fs.unlinkSync(filename)
});
}

 const uploadImages = (buffData, type) => {
// eslint-disable-next-line no-async-promise-executor
return new Promise(async (resolve, reject) => {
const { ext } = await fromBuffer(buffData)
const cmd = text.toLowerCase()
const filePath = 'utils/tmp.' + ext
const _buffData = type ? await resizeImage(buffData, false) : buffData
fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
if (err) return reject(err)
console.log('Uploading image to telegra.ph server...')
const fileData = fs.readFileSync(filePath)
const form = new FormData()
form.append('file', fileData, 'tmp.' + ext)
fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
.then(res => res.json())
.then(res => {
if (res.error) return reject(res.error)
resolve('https://telegra.ph' + res[0].src)
})
.then(() => fs.unlinkSync(filePath))
.catch(err => reject(err))
})
})
}

		const sendStickerFromUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('../lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					master.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(asw)
					fs.unlinkSync(filess)
					});
					});
				});
			}

const sendStickerUrl = async(from, path) => { 
  v4 = await WSF.createSticker(path, { type: 'full',pack: `🌹Credits By : Vean`,author: `wa.me/628983583288`,categories: ["🌹","😎","😅","😍","🥰","🤡","🤣","😇","😡","🐤","🐣","🐥","🔥","⭐"]})

     master.sendMessage(from, v4, sticker, {quoted: god})
        }

const sendStickerUrl2 = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
master.sendMessage(from, media, sticker, {quoted: god})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...')) 
fs.unlinkSync(asw)
fs.unlinkSync(filess)
});
});
});
}

const isBusiness = async(orangnya) => {
bus = await master.query({json: ['query', 'exist', orangnya], requiresPhoneConnection: false})
try{
	if(bus.biz === true){
	var busines = true
	}
}catch{
	var busines = false
}
return busines
}

const getbusinessprof = async(jid) => {
        const {
            profiles: [{
                profile,
                wid 
            }]
        } = await master.query({
            json: ["query", "businessProfile", [
                {
                    "wid": jid.replace('@s.whatsapp.net', '@c.us')
                }
            ], 84],
            expect200: true,
            requiresPhoneConnection: false,
        })
        return {
            profile,
            jid: wid,
        }
    }

const waitx = (time) => {
 return new Promise (resolve => setTimeout(resolve , time))
}

      // FUNTION CHAT \\
   const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await master.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}

//Stress
			const simp = async(nama) => {
		  master.sendMessage(from, `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${nama}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${nama}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${nama} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypaste? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${nama}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`, MessageType.text, {quoted: god})
			}
			const nenen = async(nama) => {
		  master.sendMessage(from, `NENEN NENEN KEPENGEN NENEN SAMA ${nama}. TETEK GEDE NAN KENCANG MILIK ${nama} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${nama}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${nama}. BIARKAN AKU MENGENYOT NENENMU ${nama}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${nama} WANGIIII`, MessageType.text, {quoted: god})
			}
			const wangy = async(nama) => {
			master.sendMessage(from, `${nama} ${nama} ${nama} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${nama} wangi aku mau nyiumin aroma wanginya ${nama} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${nama} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${nama} AAAAA LUCCUUUUUUUUUUUUUUU............ ${nama} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${nama} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${nama} gw ... ${nama} di laptop ngeliatin gw, ${nama} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${nama} aku gak mau merelakan ${nama} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${nama} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`, MessageType.text, {quoted: god})
			}
			const sherk = async(nama) => {
			master.sendMessage(from, `Usiaku 22 tahun. Aku sangat mencintai ${nama}, aku punya semua Figurine dan wallpapernya. Aku berdoa setiap malam dan berterima kasih atas segala hal yang telah ia berikan kepadaku. "${nama} adalah cinta" aku bilang "${nama} adalah Tujuan Hidupku". Temanku datang ke kamarku dan berkata "HALU LU ANJING !!". Aku tau dia cemburu atas kesetiaanku kepada ${nama}. Lalu kukatakan padanya "BACOT NJING !!". Temanku menampol kepalaku dan menyuruhku untuk tidur. Kepalaku sakit dan aku menangis. Aku rebahan di kasur yang dingin, lalu ada sesuatu yang hangat menyentuhku. Ternyata ${nama} datang ke dalam kamarku, Aku begitu senang bertemu ${nama}. Dia membisikan ke telingaku, "Kamu adalah impianku" Dengan tangannya dia meraih diriku. Aku melebarkan pantatku keatas demi ${nama}. Dia menusukan sesuatu kedalam Anggusku. begitu sakit, tapi kulakukan itu demi ${nama}. Aku ingin memberikan kepuasan kepada ${nama}. Dia meraum bagaikan singa, disaat dia melepaskan cintanya kedalam Anggusku. Temanku masuk kekamarku dan berkata "....... Anjing". ${nama} melihat temanku dan berkata " Semua sudah berakhir" Dengan menggunakan kemampuannya Stellar Restoration ${nama} pergi meninggalkan kamarku. "${nama} itu cinta" "${nama} itu kehidupan".`, MessageType.text, {quoted: god})
			}

if(isGroup && autoreadgc){
master.chatRead(god.key.remoteJid)
}
else if(!isGroup && autoreadpc){
master.chatRead(god.key.remoteJid)
}
	
if(autongetik){
master.updatePresence(from, Presence.composing)
}

if(autovn){
master.updatePresence(from, Presence.recording)
}

if (!god.key.fromMe && budy.includes(`vean`)) {
				if (god.key.fromMe) return sendMess(`628983583288@s.whatsapp.net`, `Dari wa.me/${botNumber.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				sendMess(`628983583288@s.whatsapp.net`, `*Nama* : ${pushname}\nwa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				}
			
			if (!god.key.fromMe && budy.includes(`Vean`)) {
				if (god.key.fromMe) return sendMess(`628983583288@s.whatsapp.net`, `Dari wa.me/${botNumber.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				sendMess(`628983583288@s.whatsapp.net`, `*Nama* : ${pushname}\nwa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				}
				
if (!god.key.fromMe && budy.includes(`VEAN`)) {
				if (god.key.fromMe) return sendMess(`628983583288@s.whatsapp.net`, `Dari wa.me/${botNumber.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				sendMess(`628983583288@s.whatsapp.net`, `*Nama* : ${pushname}\nwa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				}
				
const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Selamat Pagi Kak 🌄'
        if (hour_now >= '03' && hour_now <= '08') {
          ucapanWaktu = 'Selamat Pagi Kak 🌅'
        } else if (hour_now >= '08' && hour_now <= '14') {
          ucapanWaktu = 'Selamat Siang Kak 🌞'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Selamat Sore Kak ☀️'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Sore Kak 🌠'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Selamat Malam Kak 🌌'
        } else {
          ucapanWaktu = 'Selamat Malam Kak 🌌'
        }

//#>>>> VOTING FUNCTION <<<<#\\
if(isGroup && isVote) {
        if (resbutx == 'Vote') {
        let vote = JSON.parse(fs.readFileSync(`./workspace/trash/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(vm => vm.participant)
        let id_vote = sender ? sender : '628983583288@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./workspace/trash/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let im = 0; im < vote.length; im++) {
        _vote +=  `@${vote[im].participant.split('@')[0]}\n*Vote* : ${vote[im].voting}\n\n`
        _p.push(vote[im].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (resbutx == 'Devote') {
        const vote = JSON.parse(fs.readFileSync(`./workspace/trash/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(vm => vm.participant)
        let id_vote = sender ? sender : '628983583288@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./workspace/trash/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let im = 0; im < vote.length; im++) {
        _vote +=  `@${vote[im].participant.split('@')[0]}\n*Vote* : ${vote[im].voting}\n\n`
        _p.push(vote[im].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}

//#>>>> Antilink Function <<<<#\\
if (isGroup && !god.key.fromMe && isAntilink) {
	if (budy.includes("://chat.whatsapp.com/")) {
		if (isGroupAdmins) return
		console.log(color('[KICK]', 'cyan'), color('Received A Link!', 'yellow'))
				 master.groupRemove(from, [sender])
}
	}
	
//#>>>> Antivirus Function <<<<#\\
		if (isGroup && !god.key.fromMe && isAntivirus) {
		    if (budy.length > 3000) {
				if (isGroupAdmins) return
				 console.log(color('[KICK]', 'cyan'), color('Received A Virus Text!', 'yellow'))
				 master.groupRemove(from, [sender])
				}
			}
			
//#>>>> AntiAll Function <<<<#\\
if (isGroup && !god.key.fromMe && isAntihttp) {
	if (budy.includes("://")) {
		if (isGroupAdmins) return
		console.log(color('[KICK]', 'cyan'), color('Received A Link!', 'yellow'))
				 master.groupRemove(from, [sender])
}
	}
	
//#>>>> Filter Function <<<<#\\
		if(isGroup && isfilter){
         if(god.message.stickerMessage) return
         for(let i=0; i<filter.length; i++){
         if(messagesCC.includes(filter[i].Filter)){
         console.log(filter[i].Jawaban)
         reply(filter[i].Jawaban)
      }}}
      
//#>>>> AutoRespon Function <<<<#\\
		if (setiker.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./database/image/${namastc}.webp`)
	master.sendMessage(from, buffer, sticker, {quoted:god })
	}
	
	if (audionye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./database/audio/${namastc}.mp3`)
	master.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', duration: `359996400`, quoted: god, ptt: true })
	}
	
//#>>>> AntiTag Function <<<<#\\
if (budy.includes(`@${buattag}`)) {
     if (itsMe) return
		if (antitag == false) return
		if (!isGroup) console.log(color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ TAG ]", "aqua"), color('Received a tag'), color("from", "pink"), color(sender.split('@')[0], "blue"))
	        if (isGroup) console.log(color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ TAG ]", "aqua"), color('Received A Tag'), color("from", "pink"), color(sender.split('@')[0], "blue"), color("in", "purple"), color(groupName, "yellow"))
    master.sendMessage(from, `*Autorespon :* _Kenapa Bang?_`, text, {quoted: god})
	}
	
//#>>>> AntiHidetag Function <<<<#\\
try{
if (type === "extendedTextMessage") {
var antihide = (type === "extendedTextMessage") ? god.message.extendedTextMessage.contextInfo.mentionedJid : ''
} else if (type === "stickerMessage") {
antihide = (type === "stickerMessage") ? god.message.stickerMessage.contextInfo.mentionedJid : ''
} else if (type === "imageMessage") {
antihide = (type === "imageMessage") ? god.message.imageMessage.contextInfo.mentionedJid : ''
} else if (type === "audioMessage") {
antihide = (type === "audioMessage") ? god.message.audioMessage.contextInfo.mentionedJid : ''
} else if (type === "videoMessage") {
antihide = (type === "videoMessage") ? god.message.videoMessage.contextInfo.mentionedJid : ''
} else {
antihide = ''
}

if (antihide.length > 5) {
if (!isGroup) return
if (!isAntiHide) return
if (isGroupAdmins) return
if (isOwner) return reply('_Owner Mah Bebas Yekan :v_')
if (god.key.fromMe) return
nkh = sender
master.groupRemove(from, [nkh]).catch((e) => { reply(`*ERR:* ${e}`) })
master.sendMessage(from, `\`\`\`「 Detect Hidetag 」\`\`\`\n\n@${nkh.split("@")[0]} Gausah Maen Hidetag Cok!`, text, {quoted:god, contextInfo:{mentionedJid:[nkh]}})
}
}catch{
}

//#>>>> Self & Public <<<<#\\
premi = '𝑁𝑜𝑡 𝑃𝑟𝑒𝑚𝑖𝑢𝑚'
        if (isPremium) {
        premi = '𝑃𝑟𝑒𝑚𝑖𝑢𝑚'
	    } 
	    if (god.key.fromMe) {
	    premi = '𝑀𝑦 𝐵𝑜𝑠𝑠'
	    }

if (!public){
if (!isOwner && !itsMe) return
}

const atibot = god.isBaileys
if (atibot === true) return
		
if (isBanchat){
if (!itsMe && !isOwner) return 
}

//#>>>> Add Function In Here <<<<#\\
function instagramdl(url){
    return new Promise(async(resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/download-instagram-videos.php',
            method: 'GET',
            headers:{
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const token = $('#token').attr('value')
            let config ={
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                    "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                },
                data: {
                    'creator': 'Vean',
                    'url': url,
                    'action': 'post',
                    'token': token
                }
            }
        axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
        .then(({ data }) => {
        resolve(data.medias)
           })
        })
    .catch(reject)
    })
}

function parseMention(text) {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const sendsticker = (filename) => {
	master.sendMessage(from, filename, MessageType.sticker, {quoted: god})
}

const sendSticker = (filename) => {
	master.sendMessage(from, filename, MessageType.sticker, {quoted: god})
}

const sendImage = (filename, teks) => {
	if(teks == ``){
master.sendMessage(from, filename, MessageType.image, {quoted: god})
}
else{
master.sendMessage(from, filename, MessageType.image, {quoted: god,caption: teks})
}}

const sendVideo = (filename, teks) => {
	if(teks == ``){
	master.sendMessage(from, filename, MessageType.video, {mimetype: 'video/mp4', filename: 'video.mp4', quoted: god, duration: 359996400})
	}
	else{
	master.sendMessage(from, filename, MessageType.video, {mimetype: 'video/mp4', filename: 'video.mp4', quoted: god, duration: 359996400,caption: teks})
}
}

const sendGif = (filename, teks) => {
	if(teks == ``){
	master.sendMessage(from, filename, MessageType.video, {mimetype: 'video/gif', quoted: god})
	}
	else{
	master.sendMessage(from, filename, MessageType.video, {mimetype: 'video/gif', quoted: god, caption: teks})
}
}

const sendAudio = (filename) => {
	master.sendMessage(from, filename, MessageType.audio, {mimetype: 'audio/mp4', filename: 'audio.mp3', quoted: god})
}

const sendKontak = (nomor, nama) => {
	const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	master.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
}

const sendFakeStatus = (text, faketeks) => {
	master.sendMessage(from, text, MessageType.text, { quoted: { key: { fromMe: false, participant: fakenomor, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": fake, "jpegThumbnail": fs.readFileSync(`./workspace/media/img2.jpeg`)} } } })
}

const sendFakeStatusWithImg = (image, caption, faketeks) => {
	master.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: fakenomor, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": fake, "jpegThumbnail": fs.readFileSync(`./workspace/media/img2.jpeg`)} } }, caption: caption })
}

const sendMention = (text, orangnya) => {
	master.sendMessage(from, text, MessageType.extendedText, {contextInfo: {mentionedJid: orangnya}, quoted: god})
}

const sendStickerWithFG = (from, filename) => {
	master.sendMessage(from, filename, MessageType.sticker, {quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: fake
               }
           }
            })
}

const sendText = (text) => {
    master.sendMessage(from, text, MessageType.text)
}

if(isCmd && !m.isBaileys){
try{
hitp = words.filter(suu => suu === command)
if(hitp[0] === command && !command == ''){
hit.push({sender: sender, cmd: command})
fs.writeFileSync('./database/hit.json', JSON.stringify(hit))
}
}catch{
}
}

const fakemusic = (buff, img2, title) => {
	 master.sendMessage(from, buff, MessageType.audio, {
        "contextInfo": {
mimetype: 'audio/mp4', ptt: true,
            text: '',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "externalAdReply": {
                "title": title,
                "body": `${shp} PLAY MUSIC ${shp}`,
                "previewType": "PHOTO",
                "thumbnailUrl": "",
                "thumbnail": img2,
                "sourceUrl": ""
            }},
			quoted: ftroli
})
}

const fakevideo = (buff, img2, title) => {
	 master.sendMessage(from, buff, MessageType.video, {
        "contextInfo": {
mimetype: 'audio/mp4',
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "externalAdReply": {
                "title": title,
                "body": `${shp} PLAY VIDEO ${shp}`,
                "previewType": "PHOTO",
                "thumbnailUrl": "",
                "thumbnail": img2,
                "sourceUrl": ""
            }},
			quoted: ftroli
})
}

const sendbutloc = async(buffer, teks, buttonidd, displayy) => {
mhan1 = await master.prepareMessage(from, {jpegThumbnail: buffer ,address: fake, name: namabot }, location)
bypasseph(mhan1)
gbutsan = [
  {buttonId: `${buttonidd}`, buttonText: {displayText: `${displayy}`}, type: 1}
]
 gbuttonan = {
locationMessage: mhan1.message.locationMessage,
    contentText: `${teks}`,
    footerText: `${fake}`,
    buttons: gbutsan,
    headerType: 6
}
await master.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        "contextInfo": {
            text: 'HelloWorld',
            mentionedJid: [mjid]
    }, quoted: ftroli
})
}

async function sendStickerFakeSize(buffer) {
fsize = await master.prepareMessage(from, buffer, sticker)
bypasseph(fsize)
costick = await master.prepareMessageFromContent(from,{
"stickerMessage": {
"url": fsize.message.stickerMessage.url,
"fileSha256": fsize.message.stickerMessage.fileSha256.toString('base64'),
"fileEncSha256": fsize.message.stickerMessage.fileEncSha256.toString('base64'),
"mediaKey": fsize.message.stickerMessage.mediaKey.toString('base64'),
"mimetype": fsize.message.stickerMessage.mimetype,
"height": fsize.message.stickerMessage.height,
"width": fsize.message.stickerMessage.width,
"directPath": fsize.message.stickerMessage.directPath,
"fileLength": `9999999999999`,
"mediaKeyTimestamp": fsize.message.stickerMessage.mediaKeyTimestamp.low,
"isAnimated": fsize.message.stickerMessage.isAnimated
}
}, {quoted:god})
master.relayWAMessage(costick)
}
		
async function sendImageFakeSize(buffer) {
detikawal = Date.now();
fsize = await master.prepareMessage(from, buffer, image)
bypasseph(fsize)
tohimg = await master.prepareMessageFromContent(from,{
"imageMessage": {
	"url": fsize.message.imageMessage.url,
	"mimetype": fsize.message.imageMessage.mimetype,
	"caption": `𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`,
	"fileSha256": fsize.message.imageMessage.fileSha256,
	"fileLength": `98999999999`,
	"mediaKey": fsize.message.imageMessage.mediaKey,
	"fileEncSha256": fsize.message.imageMessage.fileEncSha256,
	"jpegThumbnail": fsize.message.imageMessage.jpegThumbnail
}
}, {quoted:god})
master.relayWAMessage(tohimg)
}

async function sendImageWithCaption(buffer, cept) {
detikawal = Date.now();
fsize = await master.prepareMessage(from, buffer, image)
bypasseph(fsize)
tohimg = await master.prepareMessageFromContent(from,{
"imageMessage": {
	"url": fsize.message.imageMessage.url,
	"mimetype": fsize.message.imageMessage.mimetype,
	"caption": `${cept}\n\n𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`,
	"fileSha256": fsize.message.imageMessage.fileSha256,
	"fileLength": `98999999999`,
	"mediaKey": fsize.message.imageMessage.mediaKey,
	"fileEncSha256": fsize.message.imageMessage.fileEncSha256,
	"jpegThumbnail": fsize.message.imageMessage.jpegThumbnail
}
}, {quoted:god})
master.relayWAMessage(tohimg)
}

async function sendVideoFakeSize(buffer) {
detikawal = Date.now();
fsize = await master.prepareMessage(from, buffer, video)
bypasseph(fsize)
tohvid = await master.prepareMessageFromContent(from,{
"videoMessage": {
	"url": fsize.message.videoMessage.url,
	"mimetype": fsize.message.videoMessage.mimetype,
	"caption": `𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`,
	"fileSha256": fsize.message.videoMessage.fileSha256,
	"fileLength": `98999999999`,
	"mediaKey": fsize.message.videoMessage.mediaKey,
	"fileEncSha256": fsize.message.videoMessage.fileEncSha256,
	"jpegThumbnail": fsize.message.videoMessage.jpegThumbnail
}
}, {quoted:god})
master.relayWAMessage(tohvid)
}

async function sendDocFakeSize(buffer) {
detikawal = Date.now();
fsized = await master.prepareMessage(from, buffer, document)
bypasseph(fsized)
tohdoc = await master.prepareMessageFromContent(from,{
"documentMessage": {
	"url": fsized.message.documentMessage.url,
	"mimetype": fsized.message.documentMessage.mimetype,
  "title": fsized.message.documentMessage.title,
	"fileSha256": fsized.message.documentMessage.fileSha256,
	"fileLength": `98999999999`,
  "pageCount": fsized.message.documentMessage.pageCount,
 	"mediaKey": fsized.message.documentMessage.mediaKey,
 	"fileName": fsized.message.documentMessage.fileName,
	"fileEncSha256": fsized.message.documentMessage.fileEncSha256,
	"directPath": fsized.message.documentMessage.directPath,
	"mediaKeyTimestamp": fsized.message.documentMessage.mediaKeyTimestamp
}
}, {quoted:god})
master.relayWAMessage(tohdoc)
}

const bypasseph = async(anu) => {
anu.message = (Object.keys(anu.message)[0] === 'ephemeralMessage') ? anu.message.ephemeralMessage.message : anu.message
return anu.message
}

async function sendStickerWm(from, path, quoted, packStick, authorStick, type, emote) {
            let size =  (type == null || type == undefined || type == false) ? 'full' : 'crop'
            return await WSF.createSticker(path, { type: size ,pack: packStick,author: authorStick,categories: emote ? emote : ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => master.sendMessage(from, buffer, MessageType.sticker, { quoted: quoted}))
        }
			
async function sendBug(jid, ephemeralExpiration, opts) {
          let message = master.prepareMessageFromContent(
                jid,
                master.prepareDisappearingMessageSettingContent(ephemeralExpiration),
                {}
            )
            await master.relayWAMessage(message, opts)
            return message
        }
	
async function uptotele(path){
            var linknya = await tele.uploadByBuffer(fs.readFileSync(path))
            return linknya.link
         }

if(itsMe){
tag = master.user.jid.split('@')[0]
mjid = master.user.jid
}
else{
tag = sender.split('@')[0]
mjid = sender
}

colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isStickers = (type == 'stickerMessage')
const isListMsg = (type == 'listResponseMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
 const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')


            if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE MESSAGE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP MESSAGE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND MESSAGE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND MESSAGE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))


let authorname = master.contacts[from] != undefined ? master.contacts[from].vname || master.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = pushname }	
			
function addMetadata(packname, author) {	
if (!packname) packname = 'Whatsapp-bot'; if (!author) author = 'Beta';	
author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
const json = {	
	"sticker-pack-name": packname,
	"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

let len = JSON.stringify(json).length	
let last	

if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	

if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	

const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	return `./sticker/${name}.exif`	
})	
}

//#>>>> Menu Settings <<<<#\\
menu1 = `${shp3} 𝑯𝑬𝑳𝑳𝑶𝑾𝑶𝑹𝑳𝑫 👋🏻


${shp3} 𝙊𝙬𝙣𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙

${shp} *${prefix}Self*
${shp} *${prefix}Public*
${shp} *${prefix}Setprefix* <query>
${shp} *${prefix}Noprefix*
${shp} *${prefix}Multiprefix*
${shp} *${prefix}Banchat*
${shp} *${prefix}Unbanchat*
${shp} *${prefix}Listbanchat*
${shp} *${prefix}Block*
${shp} *${prefix}Blocktag*
${shp} *${prefix}Unblock*
${shp} *${prefix}Unblocktag*
${shp} *${prefix}Listblock*
${shp} *${prefix}Setcmd* <reply>
${shp} *${prefix}Delcmd* <reply>
${shp} *${prefix}Listcmd*
${shp} *${prefix}Listpc*
${shp} *${prefix}Listgroup*
${shp} *${prefix}Chats*
${shp} *${prefix}Myip*


${shp3} 𝙂𝙧𝙤𝙪𝙥 𝘾𝙤𝙢𝙢𝙖𝙣𝙙

${shp} *${prefix}Kick* <reply>
${shp} *${prefix}Add* <reply>
${shp} *${prefix}Addnumber* <62xxx>
${shp} *${prefix}Kicknumber* <@tag>
${shp} *${prefix}Promote*
${shp} *${prefix}Demote*
${shp} *${prefix}Promoteall*
${shp} *${prefix}Demoteall*
${shp} *${prefix}Group* <open | close>
${shp} *${prefix}Gc*
${shp} *${prefix}Linkgc*
${shp} *${prefix}Revoke*
${shp} *${prefix}Antidelete* <on | off>
${shp} *${prefix}Hidetag*
${shp} *${prefix}Tagall*
${shp} *${prefix}Listonline*
${shp} *${prefix}Listmember*
${shp} *${prefix}Listadmin*
${shp} *${prefix}Kontakadmin*
${shp} *${prefix}Caripesan* < query >
${shp} *${prefix}Sider* < reply >


${shp3} 𝙊𝙩𝙝𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙

${shp} *${prefix}q* < reply >
${shp} *${prefix}resend* < reply >
${shp} *${prefix}Status*
${shp} *${prefix}Ping*
${shp} *${prefix}Speedtest*
${shp} *${prefix}Cekip*
${shp} *${prefix}Runtime*
${shp} *${prefix}Carinama*



${shp3} 𝙈𝙖𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙

${shp} *${prefix}Sticker*
${shp} *${prefix}Toimg*
${shp} *${prefix}Tovid*
${shp} *${prefix}Togif*
${shp} *${prefix}Tourl*
${shp} *${prefix}Tourl2*
${shp} *${prefix}Cutvid*
${shp} *${prefix}Cutvn*

*NOTE :*
*Bot Masih Tahap Pengembangan, Ada Beberapa Fitur Yang Belum Terdaftar Di Menu, Arigatou..*

*© 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝑻𝒆𝒂𝒎𝑷𝒓𝒐𝒗𝒊𝒅𝒆𝒓𝑿𝒑𝒍𝒐𝒊𝒕*`

//#>>>> Button Respon <<<<#\\
if (butresx == 'TIKTOK MUSIC') {
  reply(mess.wait)
v = await TiktokDownloader(q3)
buff = await getBuffer(v.result.nowatermark)
master.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', quoted: god})
}

if (butresx == 'TIKTOK NOWM') {
  reply(mess.wait)
detikawal = Date.now();
v = await TiktokDownloader(q3)
buff = await getBuffer(v.result.nowatermark)
sendVideo(buff, `𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜\n${shp} 𝙻𝚒𝚗𝚔 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 : ${v.result.nowatermark}`)
}

//#>>>> Switch Command <<<<#\\
switch(command) {

//#>>>> Owner Menu <<<<#\\
case 'sendfile':
if (!itsMe && !isOwner) return
if (!q) return reply(`_Example : ${prefix+command} ./lib/simple.js|simple.js_`)
namaf = q.split('|')[0]
fnama = q.split('|')[1]
reply(mess.wait)
 anuxx = fs.readFileSync(namaf)
master.sendMessage(from, anuxx, document, {mimetype:'jpg/application', filename:`${fnama}`})
break
      
case 'saveas':
if (!itsMe && !isOwner) return
if(!m.quoted) return reply('_Reply Teksnya_')
if(!q) return reply(`_Nama Filenya Apa Kak?_`)
reply(mess.wait)
mengsev = await m.quoted.text
fs.writeFileSync(`./workspace/trash/${q}`, mengsev)
reply(`_Sukses Save File Dengan Nama ${q}_`)
break

case 'download':
if (!itsMe && !isOwner) return
if(!m.quoted) return reply('_Reply File Yang Ingin Di Download!_')
if (!q) return reply(`_Nama Filenya Apa Kak?_`)
reply(mess.wait)
saveas = await m.quoted.download()
fs.writeFileSync(`./workspace/trash/${q}`, saveas)
reply(`_Sukses Download File Dengan Nama ${q}_`)
break

case 'readfile':
if (!itsMe && !isOwner) return
if(!m.quoted) return reply('_Reply File Yang Ingin Di Lihat!_')
if (!q) return reply(`_Masukan Format File!_`)
reply(mess.wait)
saveas = await m.quoted.download()
fs.writeFileSync(`./workspace/trash/read.${q}`, saveas)
cmyd2 = `cat workspace/trash/read.${q}`
var megg = `0@s.whatsapp.net`
var split2 = `${fake}`
term2 = {
contextInfo: {
participant: megg,
quotedMessage: {
extendedTextMessage: {
text: split2,
}
}
}
}
exec(cmyd2, (err, stdout) => {
if (err) return master.sendMessage(from, ` ${err}`, text, { quoted: god })
if (stdout) {
master.sendMessage(from, stdout, text, term2)
}
})
break

case 'autongetik':
				if (!itsMe && !isOwner) return
		          if (args[0] == 'on') {
					  autongetik = true
				  reply('_Berhasil Menyalakan Mode Auto Ngetik_')
				  } else if (args[0] == 'off') {
					  	  autongetik = false
				  reply('_Berhasil Mematikan Mode Auto Ngetik_')
				  } else {
					  reply(`*on untuk mengaktifkan off untuk mematikan*`)
				  }
					break  
					case 'autovn':
				if (!itsMe && !isOwner) return
		          if (args[0] == 'on') {
					  autovn = true
				  reply('_Berhasil Mengaktifkan Mode Auto Vn_')
				  } else if (args[0] == 'off') {
					  	  autovn = false
				  reply('_Berhasil Mematikan Mode Auto Vn_')
				  } else {
					  reply(`*on untuk mengaktifkan off untuk mematikan*`)
				  }
					break  
	
case 'autoreadgc':
				if (!itsMe && !isOwner) return
		          if (args[0] == 'on') {
					  autoreadgc = true
				  reply('_Berhasil Menyalakan Mode Auto Read Gc_')
				  } else if (args[0] == 'off') {
					  	  autoreadgc = false
				  reply('_Berhasil Mematikan Mode Auto Read Gc_')
				  } else {
					  reply(`*on untuk mengaktifkan off untuk mematikan*`)
				  }
					break  
					
case 'autoreadpc':
				if (!itsMe && !isOwner) return
		          if (args[0] == 'on') {
					  autoreadpc = true
				  reply('_Berhasil Menyalakan Mode Auto Read Pc_')
				  } else if (args[0] == 'off') {
					  	  autoreadpc = false
				  reply('_Berhasil Mematikan Mode Auto Read Pc_')
				  } else {
					  reply(`*on untuk mengaktifkan off untuk mematikan*`)
				  }
					break  

case 'chats':
if (!itsMe && !isOwner) return
ingfo = await getGroup(totalchat)
cpc = await getpc(totalchat)
   teks1 = `*⬣ L I S T  G R O U P*\nJumlah Grup: ${ingfo.length}\n\n`
   for (let i = 0; i < ingfo.length; i++){
   teks1 += `⬡ Nama grup : ${ingfo[i].subject}\n⬡ ID grup : ${ingfo[i].id}\n⬡ Dibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ Jumlah Peserta : ${ingfo[i].participants.length}\n\n`
   }
teks2 = `*⬣ L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpc.length}\n\n`
for(let i=0; i<cpc.length; i++){
	conts = god.key.fromMe ? master.user.jid : master.contacts[cpc[i]] || {notify: jid.replace(/@.+/, '')}
	pushnama = master.contacts[cpc[i]] != undefined ? master.contacts[cpc[i]].vname || master.contacts[cpc[i]].notify : undefined
	teks2 += `⬡ Nama : ${pushnama}\n⬡ Tag : @${cpc[i].split("@")[0]}\n⬡ Wa.me : wa.me/${cpc[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions(teks1 +'\n\n'+ teks2, cpc, true)
break

case 'listpc':
  if (!itsMe && !isOwner) return
  cpcp = await getpc(totalchat)
  teks = `*⬣ L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
for(let i=0; i<cpcp.length; i++){
	conts = god.key.fromMe ? master.user.jid : master.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
	pushnama = master.contacts[cpcp[i]] != undefined ? master.contacts[cpcp[i]].vname || master.contacts[cpcp[i]].notify : undefined
	teks += `⬡ Nama : ${pushnama}\n⬡ Tag : @${cpcp[i].split("@")[0]}\n⬡ Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( teks, cpcp, true)
break

case 'listgroup':
  if (!itsMe && !isOwner) return
ingfoo = await getGroup(totalchat)
					teks1 = `*⬣ L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
   for (let i = 0; i < ingfoo.length; i++){
   teks1 += `⬡ Nama grup : ${ingfoo[i].subject}\n⬡ ID grup : ${ingfoo[i].id}\n⬡ Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
   }
   reply(teks1)
   break

case 'sider':
infomk = await master.messageInfo(from, god.message.extendedTextMessage.contextInfo.stanzaId)
taggl = []
teksl = `Telah Dibaca Oleh :\n\n`
for(let ll of infomk.reads){
teksl += shp+' ' + '@' + ll.jid.split('@')[0] + '\n'
teksl += `┗━ ${shp} Waktu : ` + moment(`${ll.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
taggl.push(ll.jid)
}
mentions(teksl, taggl, true)
break

case 'tagme':
master.sendMessage(from, `@${sender.replace("@s.whatsapp.net","")}`, MessageType.text, {contextInfo: {mentionedJid: [sender]}, quoted: god})
break

case 'tagall':
case 'mentionall':
case 'summon':
if(! isGroupAdmins && !god.key.fromMe) return
			   	members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*FROM* : *${pushname}*\n*INFO MESSAGE :* ${q}\n${teks}\n「 *${namabot}* 」`, members_id, true)
					break               

case 'banchat': case 'mute':
if (!isGroup) return reply(mess.only.group)
if(!isGroupAdmins && !itsMe && !isOwner) return
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`_Success Ban Chat In This Group!_`)
break

case 'unbanchat': case 'unmute':
if (!isGroup) return reply(mess.only.group)
if(!isGroupAdmins && !itsMe && !isOwner) return
let benc = bancht.indexOf(from)
bancht.splice(benc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`_Success Unban Chat In This Group!_`)
break

case 'unbanchatgc': case 'unmutegc':
if (!itsMe && !isOwner) return
let unbenc = bancht.indexOf(q)
bancht.splice(unbenc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
met = await master.groupMetadata(q)
reply(`_Success Unban Chat In ${met.subject} !_`)
break

case 'banchatgc': case 'mutegc':
if (!itsMe && !isOwner) return
bancht.push(q)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
met = await master.groupMetadata(q)
reply(`_Success Ban Chat In ${met.subject} !_`)
break

case 'listbanchat': case 'listmute':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await master.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Group Name : ' + met.subject + '\n\n'
}
reply(teks)
break

case 'multipref': case 'multiprefix':
if(!itsMe && !isOwner) return
multi = true
nopref = false
single = false
reply(`_Success Change Prefix To : ${command}_`)
break

case 'noprefix':
if(!itsMe && !isOwner) return
multi = false
single = false
nopref = true
reply(`_Success Change Prefix To : ${command}_`)
break

case 'singleprefix':
if(!itsMe && !isOwner) return
multi = false
nopref = false
single = true
reply(`_Success Change Prefix To : ${command}_`)
break

case 'setprefix':
if(!itsMe && !isOwner) return
if(!q)return
multi = false
single = true
nopref = false
prefa = `${q}`
reply(`_Success Change Prefix To : ${q}_`)
break

case 'self':
if (!itsMe && !isOwner) return
public = false
seff = `𝐂𝐡𝐚𝐧𝐠𝐞 𝐁𝐨𝐭 𝐌𝐨𝐝𝐞 𝐓𝐨 : 𝐒𝐞𝐥𝐟`
reply(seff)
break

case 'public':
if (!itsMe && !isOwner) return reply
public = true
pubb = `𝐂𝐡𝐚𝐧𝐠𝐞 𝐁𝐨𝐭 𝐌𝐨𝐝𝐞 𝐓𝐨 : 𝐏𝐮𝐛𝐥𝐢𝐜`
reply(pubb)
break

case 'unblock':
					if (!isOwner && !itsMe) return 
if (args.length < 1) return reply(`_Example : ${prefix + command} 62898888888_`)
			master.blockUser(`${body.slice(9)}@c.us`, "remove")
					reply(`*Sukses Unblock User :* ${body.slice(9)}@c.us`)
				break
				
case 'block':
					if (!isOwner && !itsMe) return 
if (args.length < 1) return reply(`_Example : ${prefix + command} 62898888888_`)
			master.blockUser(`${body.slice(7)}@c.us`, "add")
					reply(`*Sukses Block User :* ${body.slice(7)}@c.us`)
				break
			
case 'blocktag':
					if (!isOwner && !itsMe) return 
if (args.length < 1) return reply(`_Example : ${prefix + command} @tag_`)
						master.blockUser(`${body.slice(10).split('@')[1]}@c.us`, "add")
					reply(`*Sukses Block Bosku*`)
				break
				
case 'unblocktag':
					if (!isOwner && !itsMe) return
if (args.length < 1) return reply(`_Example : ${prefix + command} @tag_`)
						master.blockUser(`${body.slice(12).split('@')[1]}@c.us`, "remove")
					reply(`*Sukses Unblock Bosku*`)
				break
				
				
//#>>>> Group Menu <<<<#\\		
		case 'hidetag':
if (!itsMe && !isOwner && !isGroupAdmins) return(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await master.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: ` ${value}`,
					contextInfo: { mentionedJid: mem },
					quoted: god
					}
					master.sendMessage(from, options, text)
					break
					
case 'hidetaggc':
if (!itsMe && !isOwner) return
if (!q) return
					if (!isGroup) return reply(mess.only.group)
					hgc1 = q.split('|')[0]
          hgc2 = q.split('|')[1]
					var value = body.slice(9)
					var group = await master.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: ` ${hgc1}`,
					contextInfo: { mentionedJid: mem },
					quoted: god
					}
					master.sendMessage(hgc2, options, text)
yaya = await master.groupMetadata(hgc2)
reply(`*Berhasil Send Ke Grup ${yaya.subject}*`)
					break
					
case 'linkgrup': case 'linkgc': case 'link':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await master.groupInviteCode (from)
            yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    master.sendMessage(from, yeh, text, {quoted: god})
			        break
			        
case 'resetlink':
case 'revokelink':
case 'revoke':
 if (!isBotGroupAdmins) return reply ('_Jadikan Bot Sebagai Admin Terlebih Dahulu!_')
revokel = await master.revokeInvite(m.chat)
  m.reply('Link Group Berhasil Direset!\n\nLink Baru:\nhttps://chat.whatsapp.com/' + revokel.code)
break
			        
case 'setdesc':
case 'changedesc':
case 'setdecgc':
case 'setdescgroup':
if (!itsMe && !isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (!q) return reply(`_Change To?_`)
master.groupUpdateDescription(from, `${args.join(" ")}`)
master.sendMessage(from, '_Succes Change Description Group!_', text, {quoted:god})
break

case 'setnamegc':
case 'setnamegroup':
case 'changenamegc':
case 'changenamegroup':
if (!itsMe && !isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (!q) return reply(`_Change To?_`)
master.groupUpdateSubject(from, `${args.join(" ")}`)
master.sendMessage(from, '_Succes Change Name Group!_', text, {quoted:god})
break
	
	case 'setppgc':
	case 'setppgroup':
	case 'changeppgc':
	case 'changeppgroup':
if (!itsMe && !isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if(!m.quoted) return reply('_Reply Gambarnya Kak_')
reply(mess.wait)
saveas = await m.quoted.download()
fs.writeFileSync(`./random.jpeg`, saveas)
ppgece = fs.readFileSync('./random.jpeg')
master.updateProfilePicture(from, ppgece)
reply(scs)
fs.unlinkSync(`./random.jpeg`)
break	        
			        
    case 'grup': case 'group':
			  if (!itsMe && !isGroupAdmins) return reply('_Lu Siapa?_')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!q) return reply(`_Example : ${prefix + command} close/open_`)
				if(god.key.fromMe){
tag = master.user.jid.split('@')[0]
mjid = master.user.jid
}
else{
tag = sender.split('@')[0]
mjid = sender
}
					if (args[0] && args[0].toLowerCase() == 'open') {
					  teks1 = `_Sukses Membuka Group oleh Admin @${tag}_`
					    master.sendMessage(from, teks1,text,{contextInfo: { mentionedJid: [sender]},quoted : ftroli})
						master.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] && args[0].toLowerCase() == 'close') {
					  teks2 = `_Sukses Menutup Group oleh Admin @${tag}_`
					master.sendMessage(from, teks2,text,{contextInfo: { mentionedJid: [sender]},quoted : ftroli})
						master.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
	case 'gc':
let gcs = master.prepareMessageFromContent(from, {
					"listMessage":{
                  "title": `*Hai Kak ${pushname}*`,
                  "description": `${shp} Silahkan Pilih Salah Satu ${shp}`,
                  "buttonText": "Klik Disini!",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "open",
                              "rowId": `.open`
                           },
						   {
                              "title": "close",
                              "rowId": `.close`
                           }
                        ]
                     }]}}, {}) 
            master.relayWAMessage(gcs, {waitForAck: true})
            break

case 'listadmins': case 'listadmin':
case 'adminlist': case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List Admin In Group ${groupMetadata.subject}\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		
case 'promoteall':
if (!isOwner && !itsMe) return
												if (!isGroup) return reply(mess.only.group)
												if (!isBotGroupAdmins) return reply('Jadiin Gw Admin Dulu Su!!')
												id_mem = []
												for (let o of groupMembers) {
													id_mem.push(o.jid)
												}
												master.groupMakeAdmin(from, id_mem)
break

	case 'add':
			      if (!itsMe && !isOwner) return
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (god.message.extendedTextMessage === undefined || god.message.extendedTextMessage === null) return reply('*Reply Pesan Target Yang Ingin Di Tambahkan!*')
					mentioned = god.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) 
						teks = 'Perintah Di Terima, Add :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
					mentions(`Perintah Di Terima, Add : @${mentioned[0].split('@')[0]}`, mentioned, true)
						master.groupAdd(from, mentioned)
					break 
					
case 'addnumber':
if (!itsMe && !isOwner) return
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!q) return reply(`_Example : ${prefix+command} 628983583288_`)
oranghv = args[0] + '@s.whatsapp.net'
responsehv = await master.groupAdd(from, [oranghv])
ohv = responsehv.participants[0]
let invh = (Object.values(ohv))
if(invh[0].code == 409) return reply('_Orang Yang Anda Add Sudah Ada Didalam Group!_')
else if(invh[0].code == 403){
master.sendMessage(from, `_Mengirim Undangan Group Ke @${q.split('@')[0]}_`, MessageType.text, {quoted: god, contextInfo: {mentionedJid: [oranghv]}})
master.sendGroupV4Invite(from, oranghv, invh[0].invite_code, invh[0].invite_code_exp, groupMetadata.subject , `Invitation To Join My WhatsApp Group`)
}
break
					
			    case 'kick':
			      if (!itsMe && !isOwner) return
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (god.message.extendedTextMessage === undefined || god.message.extendedTextMessage === null) return reply('*Reply Pesan Target Yang Ingin Di Tendang!*')
					mentioned = god.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) 
						teks = 'Perintah Di Terima, Mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
          mentions(`Perintah Di Terima, Mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						master.groupRemove(from, mentioned)
					break 
												
case 'demoteall':
if (!isOwner && !itsMe) return
												if (!isGroup) return reply(mess.only.group)
												if (!isBotGroupAdmins) return reply('Jadiin Gw Admin Dulu Su!!')
for(let i of groupAdmins){
if(i === master.user.jid){
}
else{
master.groupDemoteAdmin(from, [i])
}
}
break

case 'promote': case 'pm':
				  if (!god.key.fromMe) return reply
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (god.message.extendedTextMessage === undefined || god.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = god.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah Di Terima, Anda Akan Menjadi Admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						master.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah Di Terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						master.groupMakeAdmin(from, mentioned)
					}
					break
					
					case 'demote': case 'dm' : 
			    if (!itsMe && !isOwner) return 
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (god.message.extendedTextMessage === undefined || god.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = god.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah Di Terima, Anda Tidak Menjadi Admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						master.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah Di Terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						master.groupDemoteAdmin(from, mentioned)
					}
					break
					
case 'blocklist': case 'listblock':
if (!itsMe && !isOwner) return
let blocked = master.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != master.user.jid)
    master.reply(m.chat, `┌ *「 Daftar Blokir 」*` + `\n` + blocked.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n└────`, m, { contextInfo: { mentionedJid: blocked } })
	break		

case 'menu': case 'help': case 'h': case '?':
  vva = [menu1]
master.sendMessage(from, {"contentText": vva ,"footerText": `${fake}`, "buttons": [
  {buttonId: `${prefix}runtime`, buttonText:{displayText: '༺꧁ 𝑅𝑈𝑁𝑇𝐼𝑀𝐸 𝐵𝑂𝑇 ꧂༻'}, type: 1},
  {buttonId: `${prefix}owner`, buttonText: {displayText: '༺꧁ 𝑂𝑊𝑁𝐸𝑅 𝐵𝑂𝑇 ꧂༻'}, type: 1},
  {buttonId: `${prefix}dashboard`, buttonText: {displayText: '༺꧁ 𝐷𝐴𝑆𝐻𝐵𝑂𝐴𝑅𝐷 ꧂༻'}, type: 1}
], "headerType": "DOCUMENT", "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
    "mimetype": "application/pdf",
"jpegThumbnail": fakeimg4,
    "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
    "fileLength": "98999999999",
    "pageCount": 9999,
    "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
    "fileName": `𝑽𝒆𝒂𝒏 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑`,
    "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
  }}, MessageType.buttonsMessage, {
        "contextInfo": {
            text: '𝑽𝒆𝒂𝒏 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑',
            mentionedJid: [mjid],
            forwardingScore: 1000000000,
            isForwarded: true,
            sendEphemeral: true,
externalAdReply: {
            "title": `Hi Kak ${pushname}👋🏻`,
            "body": `${jamm} ${week} ${calender}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnail": fakeimg2,
            "mediaUrl": `https://youtu.be/gfuHA7Zl9Fc`
        }
    }, quoted: ftroli })
	break

case 'status':
const status = public ? '𝑷𝑼𝑩𝑳𝑰𝑪': '𝑺𝑬𝑳𝑭'
statuy = `*「 𝐒𝐓𝐀𝐓𝐔𝐒 𝐁𝐎𝐓 」*\n\n${shp} 𝐌𝐎𝐃𝐄 : ${status}`
reply(statuy)
break

//#>>>> Sticker Cmd <<<<#\\
case 'addcmd':
if(!itsMe && !isOwner) return
if (!q) return reply(`Example : ${prefix + command} ping`)
const addSticker = async (name, command, _dir) => {
    _dir[name] = {text: command}
    fs.writeFileSync('./database/stickerdb.json', JSON.stringify(_dir))
    console.log(color("ADD STICKER :"+command, "yellow"))
}
  adcm = await m.quoted.fileSha256.toString('hex')
  addSticker(adcm, q, stickerdb)
	reply(`_Sukses Menambahkan Sticker Command : ${q}_`)
	break
	
case 'delcmd':
if(!itsMe && !isOwner) return
const delCommand = (name, _dir) => {
   delete _dir[name]
   fs.writeFileSync('./database/stickerdb.json', JSON.stringify(_dir))
   console.log(color("add "+name, "yellow"))
    
}
  adcm = await m.quoted.fileSha256.toString('hex')
  delCommand(adcm, stickerdb)
	reply(`_Sukses Menghapus Dari Database_`)
	break
	
case 'listcmd':
if(!itsMe && !isOwner) return
const listCommand = async (_dir, reply) => {
    let itung = 1
    let cpt = `${shp} *COMMAND STICKER* ${shp}\n\n`
     for (x in _dir) {
     cpt += `${shp} _No ${itung++}._\n_Command :_ ${_dir[x].text}\n_IdSticker :_ ${x}\n\n`
        }
    reply(cpt)
}
  listCommand(stickerdb, reply)
  break

//#>>>> Other Menu <<<<#\\
  case 'waifu':
	case 'neko':
	case 'shinobu':
	case 'megumin':
	case 'bully':
	case 'cuddle':
	case 'cry':
	case 'hug':
	case 'awoo':
	case 'kiss':
	case 'lick':
	case 'pat':
	case 'smug':
	case 'bonk':
	case 'yeet':
	case 'blush':
	case 'smile':
	case 'wave':
	case 'highfive':
	case 'handhold':
	case 'nom':
	case 'bit':
	case 'glomp':
	case 'slap':
	case 'kill':
	case 'happy':
	case 'wink':
	case 'poke':
	case 'dance':
	case 'cringe':
  reply(mess.wait)
rangdm = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
detikawal = Date.now();
v2 = await getBuffer(rangdm.url)
mhan2 = await master.prepareMessage(from, v2, image)
bypasseph(mhan2)
mhan2.message.imageMessage.fileLength = '98999999999'
gbutsan = [
  {buttonId: `${prefix+command}`, buttonText: {displayText: `${shp} NEXT`}, type: 1}
]
 gbuttonan = {
imageMessage: mhan2.message.imageMessage,
    contentText: `${shp} _ini ${command}nya kak_\n𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`,
    footerText: `${shp} Silahkah Pilih Next Untuk Pencarian Berikutnya ${shp}`,
    buttons: gbutsan,
    headerType: 4
}
await master.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: 
   god})
break

case 'resend':
if (!itsMe && !isOwner) return
resend = await master.prepareMessageFromContent(from, god.message.extendedTextMessage.contextInfo.quotedMessage, {})
master.relayWAMessage(resend)
	break

case 'listmem':
case 'listmember':
case 'listkontak':
case 'listcontact':
case 'groupkontak':
case 'groupcontact':
case 'grupkontak':
let ini_list2 = []
  for (let i of groupMembers.map(v => v.jid)) {

  ini_list2.push({
            "displayName": master.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${master.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
  hehe = await master.sendMessage(m.chat, {
        "displayName": `${ini_list2.length} kontak`,
        "contacts": ini_list2
        }, 'contactsArrayMessage', { quoted: m })
        master.sendMessage(m.chat,`_Ini List Kontak Member Di Grup ${groupName}_`,text,{quoted: hehe})
            break
            
case 'kontakadmin':
case 'contactadmin':
case 'kontakadm':
case 'contactadm':
let ini_list3 = []
  for (let i of groupAdmins) {

  ini_list3.push({
            "displayName": master.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${master.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
  hehe = await master.sendMessage(m.chat, {
        "displayName": `${ini_list3.length} kontak`,
        "contacts": ini_list3
        }, 'contactsArrayMessage', { quoted: m })
        master.sendMessage(m.chat,`_Ini List Kontak Admin Di Grup ${groupName}_`,text,{quoted: hehe})
					break

case 'carinama': case 'cari':
if (!q) return reply(`_Mau Cari Siapa Kak?_`)
fil2 = groupMetadata
.participants.filter(vv => vv.vname || vv.notify).filter(vv => (vv.notify || vv.vname).toLowerCase().includes(q))
  master.sendMessage(m.chat, `「 *List Nama ${q} Di Group Ini* 」` + `\n\n` + fil2.map(v => '🌹 @' + v.jid.replace(/@.+/, '')).join`\n`, 'conversation', { quoted: m, contextInfo : { mentionedJid: fil2.map(vv => vv.jid) }})
	break

case 'cutvid': case 'cutvideo':
if(!m.quoted) return reply('_Reply Videonya Kak_')
if(!q) return reply(`*Example : ${prefix+command} 00:00:10|00:00:20*`)
reply(mess.wait)
namac = q.split('|')[0]
cnama = q.split('|')[1]
encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -ss ${namac} -to ${cnama} -async 1 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: god, caption: scs })
            fs.unlinkSync(ran)
})
				break

case 'img2url': case 'imagetourl':
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
            var media = await  master.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('e4bb5222011a8521cc60ce61a2aa1f98', media)
                .then(data => {
                    var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     master.sendMessage(from, ibb, image, { quoted: god, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            break
            
    case 'url2img': case 'urltoimg':
      if (!q) return reply (`Link nya mana?`)
      reply(mess.wait)
sendMediaURL(from, `${q}`, `${scs}`)
break
            
            
case 'tourl2': case 'tolink2':
if(isQuotedSticker){
  reply(mess.wait)
	boiju = isQuotedSticker ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
	owgiu = await master.downloadMediaMessage(boiju)
	await fs.writeFileSync(`./random.jpeg`, owgiu)
	var imgbb = require('imgbb-uploader')
	touerel = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './random.jpeg')
	resu = `${touerel.display_url}`
	reply(resu)
}
else if ((isMedia && !god.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
  reply(mess.wait)
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
            owgi = await master.downloadMediaMessage(boij)
            resxx = await upload(owgi)
            reply(resxx)
            } else {
            reply('kirim/reply gambar/video')
            }
  break
    
case 'tourl': case 'tolink':
 if ((isMedia && !master.message.videoMessage || isQuotedImage || isQuotedVideo || isQuotedSticker || isQuotedAudio || isQuotedDocument) && args.length == 0) {
    reply(mess.wait)
    boij = isQuotedImage || isQuotedVideo || isQuotedSticker || isQuotedAudio || isQuotedDocument? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
owgi = await master.downloadMediaMessage(boij)
rname = await GenerateSerialNumber('000000')
        if(isQuotedImage){
        await fs.writeFileSync(`./workspace/trash/${rname}.jpg`, owgi)
        path = `./workspace/trash/${rname}.jpg`
        uplod = await Raa.UploadFile(path)
        console.log(uplod)
	teks = `M E D I A  T O  U R L\n\n${shp} Nama File : ${uplod.result.url}\n${shp} Type : Image/jpg\n${shp} Url : ${uplod.result.namaFile}\n${shp} Size : ${uplod.result.size}\n${shp} Hash : ${uplod.result.hash}`
	reply(teks)
	fs.unlinkSync(path)
        }
        else if(isQuotedVideo){
        await fs.writeFileSync(`./workspace/trash/${rname}.mp4`, owgi)
        path = `./workspace/trash/${rname}.mp4`
        uplod = await Raa.UploadFile(path)
        console.log(uplod)
        teks = `M E D I A  T O  U R L\n\n${shp} Nama File : ${uplod.result.url}\n${shp} Type : Video/mp4\n${shp} Url : ${uplod.result.namaFile}\n${shp} Size : ${uplod.result.size}\n${shp} Hash : ${uplod.result.hash}`
        reply(teks)
        fs.unlinkSync(`./workspace/trash/${rname}.mp4`)
        }
        else if(isQuotedSticker){
        await fs.writeFileSync(`./workspace/trash/${rname}.webp`, owgi)
        path = `./workspace/trash/${rname}.webp`
        uplod = await Raa.UploadFile(path)
        console.log(uplod)
        teks = `M E D I A  T O  U R L\n\n${shp} Nama File : ${uplod.result.url}\n${shp} Type : Sticker/webp\n${shp} Url : ${uplod.result.namaFile}\n${shp} Size : ${uplod.result.size}\n${shp} Hash : ${uplod.result.hash}`
        reply(teks)
        fs.unlinkSync(path)
        }
        else if(isQuotedAudio){
        await fs.writeFileSync(`./workspace/trash/${rname}.mp3`, owgi)
        path = `./workspace/trash/${rname}.mp3`
        uplod = await Raa.UploadFile(path)
        console.log(uplod)
        teks = `M E D I A  T O  U R L\n\n${shp} Nama File : ${uplod.result.url}\n${shp} Type : Audio/mp3\n${shp} Url : ${uplod.result.namaFile}\n${shp} Size : ${uplod.result.size}\n${shp} Hash : ${uplod.result.hash}`
        reply(teks)
        fs.unlinkSync(path)
        }
	else{
	reply(`Reply Image/Sticker/Video/Audio dengan caption ${prefix}tourl2`)
	}
}
 break
	
case 'cutaud':
case 'cutaudio':
case 'cutvn':
case 'cutmp3':
if(!m.quoted) return reply('_Reply Audionya Kak_')
if(!q) return reply(`*Example : ${prefix+command} 00:00:10|00:00:20*`)
reply(mess.wait)
namac = q.split('|')[0]
cnama = q.split('|')[1]
encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -ss ${namac} -to ${cnama} -async 1 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: god })
            fs.unlinkSync(ran)
})
break

case 'caripesan':
 if(!itsMe && !isOwner) return 
 if(!q)return reply('Mau Cari Pesan Apa Kak?')
 acps = 1
reply(`Tunggu Kak Lagi Nyari :3`)
 let vcpsy = await master.searchMessages(q,from,15,1)
 let scpsy = vcpsy.messages
 let elcpy = scpsy.filter(vcpsy => vcpsy.message)
 elcpy.shift()
 try {
 if(elcpy[0].message.conversation == undefined) return
 reply(`*Ditemukan ${elcpy.length} Pesan!*`)
 await waitx(500)
 for(let cpsy = 0; cpsy < elcpy.length; cpsy++) {
 await master.sendMessage(from,`*${acps++}.Nih Pesannya*`,text,{quoted:elcpy[cpsy]})
 }
 } catch(e){
 reply('*Pesan Tidak Ditemukan!*')
 } 
 break

case 'getexif':
if (!isQuotedSticker) return reply('*Reply Stickernya Kak*')
let webpv = require('node-webpmux')
let utilc = require('util')
let imguy = new webpv.Image()
await imguy.load(await m.quoted.download())
reply(utilc.format(JSON.parse(imguy.exif.slice(22).toString())))
        break

case 'q':
iniq = await master.serializeM(await god.getQuotedObj())
iniq.quoted.copyNForward(from, true)
break

case 'tes': case 'test':
reply(scs)
break

case 'ping': case 'p': case 'speed': case 'sp':
speedz(master, reply)
break

case 'runtime':
uptime = process.uptime()
anjink =`${shp}𝑩𝒐𝒕 𝑹𝒖𝒏𝒕𝒊𝒎𝒆
\`\`\`${kyun(uptime)}\`\`\``
reply(anjink)
break

case 'owner': case 'creator': case 'author':
  let ini_list = []
   {
  ini_list.push({
            "displayName": 'Vean',
	  	"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Vean\nitem1.TEL;waid=628983583288:628983583288\nitem1.X-ABLabel:Creator Vean Bot Whatsapp\nitem2.TEL;waid=6282246869840:6282246869840\nitem2.X-ABLabel:2nd Number\nitem3.EMAIL;type=INTERNET:veanyxz@gmail.com\nitem3.X-ABLabel:Email\nEND:VCARD"
          }
          )
  }
rplt = `${ownerNumber}\n`.repeat(256)
for (let i of rplt ) {
  ini_list.push({
            "displayName": master.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:\nitem1.TEL;waid=:\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
  
  hehex = await master.sendMessage(from, {
        "displayName": `${ini_list.length}`,
        "contacts": ini_list
        }, 'contactsArrayMessage', { quoted: god })
break

case 'script': case 'sc':
teks = `${shp} *Free Script Bot Wa* ${shp} :\n\nhttps://github.com/Hexagonz/SELF-HX\n\nhttps://github.com/MhankBarBar/termux-wabot`
master.sendMessage(from, teks, text,{quoted:god})
break

//#>>>> Group Menu <<<<#\\
case 'delvote':
case 'delvoting':
        if(!isGroupAdmins && !god.key.fromMe && !isOwner) return reply ('Hanya Bisa Digunakan Oleh Admin Grup')
        if(!isVote) return reply('*Tidak Ada Sesi Voting Di Grup Ini*')
        voting.splice(from)
        fs.writeFileSync(`./database/voting.json`, JSON.stringify(voting))
        fs.unlinkSync(`./lib/vote/${from}.json`)
        fs.unlinkSync(`./workspace/trash/${from}.json`)
        reply('*Sukses Menghapus Sesi Voting Di Grup Ini*')
        
    case 'mulaivote':
    case 'voting':
    case 'vote':
        if(!isGroupAdmins && !god.key.fromMe && !isOwner) return reply ('Hanya Bisa Digunakan Oleh Admin Grup')
        if(!isGroup) return reply(mess.only.group)
        if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
        if(!q) return reply(`*Untuk Melakukan Sesi ${command}*\n\n*Example :*\n${prefix + command} @Tag Target | Alasan | 1\n\n*NOTE :* 1 = 1 Menit`)
        if (god.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || god.message.extendedTextMessage.contextInfo == null) {
        let id = god.message.extendedTextMessage.contextInfo.mentionedJid[0]
        split = args.join(' ').replace('@', '').split('|')
        if(!Number(split[2])) {
        reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
        } else {
        voting.push(from)
        fs.writeFileSync(`./workspace/trash/${from}.json`,'[]')
        fs.writeFileSync(`./lib/vote/${from}.json`,'[]')
        fs.writeFileSync('./database/voting.json', JSON.stringify(voting)) 
        await waitx(2000)
        let votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        votes.push({
        reason: split[1] ? split[1] : '-',
        votes: split[0].trim() +'@s.whatsapp.net',
        durasi: split[2] 
        })  
        fs.writeFileSync(`./lib/vote/${from}.json`, JSON.stringify(votes)) 
        mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
let voti = master.prepareMessageFromContent(from, {
					"listMessage":{
                  "title": "*Sesi Vote Dimulai!*",
                  "description": `Silahkan Pilih Salah Satu!`,
                  "buttonText": "Vote or Devote",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "Vote",
                              "rowId": `Vote`
                           },
						   {
                              "title": "Devote",
                              "rowId": `Devote`
                           }
                        ]
                     }]}}, {}) 
            master.relayWAMessage(voti, {waitForAck: true})
        setTimeout(async function() {
        let vote = JSON.parse(fs.readFileSync(`./workspace/trash/${from}.json`))
        let tru = vote.filter(a => a.voting == '✅')
        let fals = vote.filter(a => a.voting == '❌')
        reply(`*Waktu Habis*\n\n*Hasil Akhir*\n✅ = ${tru.length}\n❌ = ${fals.length}`)
        voting.splice(from,1)
        fs.unlinkSync(`./lib/vote/${from}.json`)
        fs.unlinkSync(`./workspace/trash/${from}.json`)
        fs.writeFileSync(`./database/voting.json`, JSON.stringify(voting)) 
        }, split[2] * 60 * 1000);
        } 
        }
        break

case 'antidelete':
if (!itsMe && !isOwner) return 
if(!q)return reply(`_Example : ${prefix + command} on/off_`)
const groupId = isGroup ? groupMetadata.jid : ''
const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
const isRevoke = dataRevoke.includes(from)
const isCtRevoke = dataCtRevoke.data
const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
if (q == 'on') {           
if (isGroup) {
        if (isRevoke) return master.sendMessage(from, `_Antidelete Telah Diaktifkan Di Grup Ini Sebelumnya!_`, MessageType.text)
        dataRevoke.push(from)
        fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke))
        master.sendMessage(from, `_Success Enable Antidelete Grup!_`, MessageType.text, {quoted: god})
} else if (!isGroup) {
        master.sendMessage(from, `_Untuk Kontak Penggunaan ${prefix}antidelete ctaktif_`, MessageType.text,{quoted: god})
}
} else if (q == 'off') {
if (isGroup) {
        if (!isRevoke) return reply('_Anti Delete Sudah Di Nonaktifkan_')
        const index = dataRevoke.indexOf(from)
        dataRevoke.splice(index, 1)
        fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke))
        master.sendMessage(from, `_Success disable Antidelete Grup!_`, MessageType.text,{quoted: god})
} else if (!isGroup) {
        master.sendMessage(from, `_Untuk Kontak Penggunaan ${prefix}antidelete ctmati_`, MessageType.text,{quoted: god})
}
}
break

case 'asmaulhusna':
const asmaulhusna = function asmaulhusna() {
	return new Promise((resolve, reject) => {
		fetch("https://raw.githubusercontent.com/Zhirrr/islamic-rest-api-indonesian/main/data/dataAsmaulHusna.json")
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
p = await asmaulhusna()
txt = `*ASMAUL HUSNA*\n\n`
for (let i of p.data) {
txt += `${shp} *Nomor :* ${i.index}\n`
txt += `${shp} *Latin :* ${i.latin}\n`
txt += `${shp} *Arab :* ${i.arabic}\n`
txt += `${shp} *Indo :* ${i.translation_id}\n`
txt += `${shp} *Inggris :* ${i.translation_en}\n\n`
}
reply(txt)
break

case 'speedtest':
reply(mess.wait)
exec('speedtest', async(err, stdout) => {
		if (err) return reply(String(err))
		if (stdout){
server = stdout.split('Server: ')[1].split('\n')[0]
isp = stdout.split('ISP: ')[1].split('\n')[0]
latency = stdout.split('Latency:     ')[1].split('\n')[0]
down = stdout.split('Download:  ')[1].split('\n')[0]
uploadd = stdout.split('Upload:  ')[1].split('\n')[0]
urlsp = stdout.split('Result URL: ')[1]
teks = '*SPEEDTEST*\n\n'
teks += shp + ' *Server :* ' + server + '\n'
teks += shp + ' *Isp :* ' + isp + '\n'
teks += shp + ' *Latensi :* ' + latency + '\n'
teks += shp + ' *Download :* ' + down + '\n'
teks += shp + ' *Upload :* ' + uploadd + '\n'
teks += shp + ' *Url :* ' + urlsp + '\n'
console.log(teks)
let v2 = await getBuffer(`http://nurutomo.herokuapp.com/api/ssweb?url=${urlsp}&full=false&type=jpeg`)
master.sendMessage(from, v2, image,{quoted:god, caption:teks})
}
})
break

//#>>>> Maker Menu <<<<#\\
case 'stickflip':
if (god.message.extendedTextMessage != undefined || god.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await master.downloadMediaMessage(ger)
await fs.writeFileSync(`./random.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
esflip = await imgbb("e4bb5222011a8521cc60ce61a2aa1f98", './random.jpeg')
teks = `${esflip.display_url}`
sflip = await getBuffer(`https://cililitan.herokuapp.com/api/awebpflip?url=${teks}`)
master.sendMessage(from, sflip, sticker)
fs.unlinkSync(`./random.jpeg`)
}
break

case 'toimg':
case 'toimage':
if (!isQuotedSticker) return reply('_Reply Sticker Yang Akan Diconvert Ke Gambar!_')
reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, async(err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
sendImageFakeSize(buffer)
						fs.unlinkSync(ran)
					})
break

case 'togif':
  if (!isQuotedSticker) return reply('Reply stiker nya')
reply(mess.wait)
detikawal = Date.now();
					if (god.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedialv = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 medialv = await master.downloadAndSaveMediaMessage(encmedialv)
						memek = await webp2gifFile(medialv)
						console.log(memek)
					   tgif1 = await getBuffer(memek.result)
					   master.sendMessage(from, tgif1, video, {mimetype: 'video/gif', caption: `𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`, quoted: god})
					   fs.unlinkSync(medialv)
						break
			
					
case 'tovid':
case 'tovideo':
case 'tomp4':
 if (!isQuotedSticker) return reply('Reply stiker nya')
reply(mess.wait)
detikawal = Date.now();
					encmedialx = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 medialx = await master.downloadAndSaveMediaMessage(encmedialx)
						memmy = await webp2gifFile(medialx)
						console.log(memmy)
						tovidny = await getBuffer(memmy.result)
					   master.sendMessage(from, tovidny, MessageType.video,{quoted: god, caption: `𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`})
					   fs.unlinkSync(medialx)
						break

      case 'stiker':
			case 'sticker':
      case 'stickergif':
      case 'stikergif':
      case 'sgif':
   		case 's':
				    if (isMedia || isQuotedImage) {
reply(mess.wait)
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : god
media = await master.downloadAndSaveMediaMessage(encmedia, `./workspace/sticker/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)

reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./workspace/sticker/data.exif ./workspace/sticker/${sender}.webp -o ./workspace/sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
buffs = fs.readFileSync(`./workspace/sticker/${sender}.webp`)
master.sendMessage(from, buffs, sticker, {quoted: god})
fs.unlinkSync(`./workspace/sticker/${sender}.webp`)	
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./workspace/sticker/${sender}.webp`)
				} else if ((isQuotedVideo && god.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : god
                    media = await master.downloadAndSaveMediaMessage(encmedia, `./workspace/sticker/${sender}`)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./workspace/sticker/data.exif ./workspace/sticker/${sender}.webp -o ./workspace/sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									master.sendMessage(from, fs.readFileSync(`./workspace/sticker/${sender}.webp`), sticker, {quoted: god})
									

									fs.unlinkSync(`./workspace/sticker/${sender}.webp`)
									fs.unlinkSync(media)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./workspace/sticker/${sender}.webp`)
				} else {
					reply(`*Foto nya mana?*`)
				}
				break
				
case 'sticknobg': case 'snobg':
		if(!itsMe && !isOwner) return
		if (!isQuotedSticker) return reply('stickernya mana anjeng')
					if (isQuotedSticker) {
												 if (god.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
reply(mess.wait)
geri = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
rani = getRandom('.png')
ehgmediabii = await master.downloadAndSaveMediaMessage(geri)
exec(`ffmpeg -i ${ehgmediabii} ${rani}`, (err) => {
	fs.writeFileSync('sticknobg.png', fs.readFileSync(rani))
						if (err) return reply('Error om')
							ranpi = getRandom('.png')
					keyrmbg = 'fdfVo8npoPoTu88PdGPa76hg'
							removeBackgroundFromImageFile({path: 'sticknobg.png', apiKey: keyrmbg, size: 'auto', type: 'auto', ranpi})
							.then(res => {
								let buffuri = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranpi, buffuri)
								Raa.UploadFile(ranpi).then(nonbege => {
								sendStickerUrl(from, nonbege.result.namaFile)
								fs.unlinkSync(rani)
                fs.unlinkSync(ranpi)
                fs.unlinkSync('./sticknobg.png')
                fs.unlinkSync('./undefined.webp')
								})
							})
					})
					} else {
						reply('Mana sticker nya?')
					}
									break

case 'menulokasi':
mhan1 = await master.prepareMessage(from, {jpegThumbnail: fakeimg3 ,address: fake, name: fake }, location)
bypasseph(mhan1)
gbutsan = [
  {buttonId: '.menu', buttonText: {displayText: '📝 MENU BOT'}, type: 1},
  {buttonId: '.owner', buttonText: {displayText: '👤 CONTACT OWNER'}, type: 1},
  {buttonId: '.script', buttonText: {displayText: '📑 SCRIPT BOT'}, type: 1}
]
 gbuttonan = {
locationMessage: mhan1.message.locationMessage,
    contentText: `${menu1}`,
    footerText: `${fake}`,
    buttons: gbutsan,
    headerType: 6
}
await master.sendMessage(from, gbuttonan, MessageType.buttonsMessage, { quoted: god
})
break

case 'play':
case 'music':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
			reply(mess.wait)
detikawal = Date.now();
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url	
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 35000) return 
                       teksnya = `PLAY MUSIC\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`
                       sendbutloc(thumb, teksnya, `${prefix}yts ${q}`, `${shp} Ytsearch ${q}`)
                        const captions = `PLAY MUSIC\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        bplyth = await getBuffer(thumb)
                       sendbutloc(bplyth, captions, `${prefix}yts ${q}`, `${shp} Ytsearch ${q}`)
                        bply = await getBuffer(dl_link)
                        await fakemusic(bply,bplyth, `${title}`)
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
                   
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            reply(mess.wait)
            detikawal = Date.now();
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url 
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 50000) return 
                       sendbutloc(thumb, `PLAY VIDEO\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, `${prefix}yts ${q}`, `${shp} Ytsearch ${q}`)
                        const captions = `PLAY VIDEO\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        bvidth = await getBuffer(thumb)
                        sendbutloc(bvidth, captions, `${prefix}yts ${q}`, `${shp} Ytsearch ${q}`)
                        bvid = await getBuffer(dl_link)
        master.sendMessage(from, bvid, video, {
    contextInfo: {
        externalAdReply: {
            "title": title,
            "body": `🎧 PLAY VIDEO 🎧`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnail": bvidth
        }
    }, quoted: ftroli, caption: `𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`
})
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break

case 'ytsearch':
case 'yts':
if(!q) return reply('_Mau Cari Apa Di Youtube Kak?_')
reply(mess.wait)
acps2 = 1
try{
	ysearch = await yts(q)
}catch(e){
	return reply(mess.error.api)
}
teks = `*Y O U T U B E S E A R C H*\nTotal : ${ysearch.all.length}\n\n`
for(let i of ysearch.all){
  teks += shp2 +`No : ${acps2++}` + '\n'
	teks += shp +` Title :` + i.title + '\n'
	teks += shp +` Url :` + i.url + '\n'
	teks += shp +` Durasi :` + i.timestamp + '\n'
	teks += shp +` Upload :` + i.ago + '\n\n-----------------------------\n\n'
}
mncf = await getBuffer(ysearch.all[0].thumbnail)
master.sendMessage(from, mncf, image, {
    contextInfo: {
        externalAdReply: {
            "title": ysearch.all[0].title,
            "body": fake,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnail": fakeimg2,
            "mediaUrl": ysearch.all[0].url
        }
    }, quoted: ftroli, caption: teks
})
break
case 'getmusic':
case 'needmusic':
if(!q) return reply('_Mau Nomer Berapa?_')
if(!m.quoted) return reply('_Reply Pesan Dari Hasil Pencarian Youtube!_')
quee = '*Y O U T U B E S E A R C H*'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(Number(args[0]) > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan Coba Pilih Lagi Dibawah Angka ${jmlh}`)
reply(mess.wait)
 try{
 pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2)
urlcuy = m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0]
 downm = await yta(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
 const { dl_link, thumb, title, filesizeF, filesize } = downm
 if(Number(filesize) >= 50000){
 short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 return sendMediaURL(from, thumb, `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.error}`)
 }
 teks = `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
console.log(urlcuy)
 bplyth = await getBuffer(thumb)
 sendbutloc(bplyth, teks, `${prefix}yts ${title}`, `${shp} Ytsearch ${title}`)
 mlagu4 = await getBuffer(dl_link)
master.sendMessage(from, mlagu4, audio, {
    contextInfo: {
        externalAdReply: {
            "title": title,
            "body": `🎧 PLAY MUSIC 🎧`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnail": bplyth,
            "mediaUrl": `${urlcuy}`
        }
    }, quoted: ftroli
})
 }catch(e){
 reply(mess.error.api)
}
}
else{
 return reply('_Reply Pesan Dari Hasil Pencarian Youtube!_')
}
break
case 'getvideo':
case 'needvideo':
if(!q) return reply('_Mau Nomer Berapa?_')
if(!m.quoted) return reply('_Reply Pesan Dari Hasil Pencarian Youtube!_')
quee = '*Y O U T U B E S E A R C H*'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(Number(args[0]) > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan Coba Pilih Lagi Dibawah Angka ${jmlh}`)
reply(mess.wait)
 try{
 pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
 downm = await ytv(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
 const { dl_link, thumb, title, filesizeF, filesize } = downm
 if(Number(filesize) >= 50000){
 short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 return sendMediaURL(from, thumb, `*P L A Y V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}`)
 }
 teks = `*P L A Y V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
 bplyth = await getBuffer(thumb)
 sendbutloc(bplyth, teks, `${prefix}yts ${title}`, `${shp} Ytsearch ${title}`)
 mvid4 = await getBuffer(dl_link)
master.sendMessage(from, mvid4, video, {
    contextInfo: {
        externalAdReply: {
            "title": title,
            "body": `${shp} PLAY VIDEO ${shp}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnail": bplyth,
        }
    }, quoted: ftroli
})
 }catch(e){
 reply(mess.error.api)
}
}
else{
 return reply('_Reply Pesan Dari Hasil Pencarian Youtube!_')
}
break

case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp32 [linkYt]*`)
			YtIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/
			let isLinks = args[0].match(YtIdRegex)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then(async (a) => {
                        if (Number(filesize) >= 35000) return  sendbutloc(thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`, `yts ${title}`, `${shp} Ytsearch ${title}`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				bvidt2 = await getBuffer(thumb)
                        sendbutloc(bvidt2, captions, `${prefix}yts ${title}`, `${shp} Ytsearch ${title}`)
                        bvid2 = await getBuffer(dl_link)
                        await 
master.sendMessage(from, bvid2, audio, {
    contextInfo: {
        externalAdReply: {
            "title": title,
            "body": `🎧 PLAY MUSIC 🎧`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnail": bvidt2,
            "mediaUrl": args[0]
        }
    }, quoted: ftroli
})
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break

case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			YtIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/
			let isLinks2 = args[0].match(YtIdRegex)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				detikawal = Date.now();
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then(async (a) => {
                        if (Number(filesize) >= 40000) return  sendbutloc(thumb,`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, `${prefix}yts ${title}`, `${shp} Ytsearch ${title}`)
				const captionsYtmp4 = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				bvidt3 = await getBuffer(thumb)
                        sendbutloc(bvidt3, captionsYtmp4, `${prefix}yts ${title}`, `${shp} Ytsearch ${title}`)
                        bvid3 = await getBuffer(dl_link)
                        await master.sendMessage(from, bvid3, video, {
    contextInfo: {
        externalAdReply: {
            "title": title,
            "body": `🎧 PLAY VIDEO 🎧`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnail": bvidt3,
            "mediaUrl": args[0]
        }
    }, quoted: ftroli, caption: `𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`
})
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break

case 'myip':
  if(!itsMe && !isOwner)return
v = await fetchJson(`http://ip-api.com/json/`)
teks = `[ *MY IP INFO* ]\n\n${shp} Status : ${v.status}\n${shp} Country : ${v.country}\n${shp} Country Code : ${v.countryCode}\n${shp} Region : ${v.region}\n${shp} RegionName : ${v.regionName}\n${shp} City : ${v.city}\n${shp} Zip : ${v.zip}\n${shp} Lat : ${v.lat}\n${shp} Lon : ${v.lon}\n${shp} Timezone : ${v.timezone}\n${shp} Isp : ${v.isp}\n${shp} Org :${v.org}\n${shp} As : ${v.as}\n${shp} Ip : ${v.query}`
reply(teks)
break

case 'cekip':
  if(!q) return reply(`_Masukan IpAddress!_`)
v = await fetchJson(`http://ip-api.com/json/${q}`)
teks = `[ *IP GEOLOCATION* ]\n\n${shp} Status : ${v.status}\n${shp} Country : ${v.country}\n${shp} Country Code : ${v.countryCode}\n${shp} Region : ${v.region}\n${shp} RegionName : ${v.regionName}\n${shp} City : ${v.city}\n${shp} Zip : ${v.zip}\n${shp} Lat : ${v.lat}\n${shp} Lon : ${v.lon}\n${shp} Timezone : ${v.timezone}\n${shp} Isp : ${v.isp}\n${shp} Org :${v.org}\n${shp} As : ${v.as}\n${shp} Ip : ${v.query}`

reply(teks)
break

case 'totaggc':
  if(!itsMe && !isOwner) return
  if (!q) return reply(`_Masukan Id Group`)
m.quoted.copyNForward(q, true, {contextInfo: {mentionedJid : groupMembers.map(god => god.jid)}})
yaya = await master.groupMetadata(q)
reply(`*Berhasil Send Ke Grup ${yaya.subject}*`)
break

case 'totag':
  if(!itsMe && !isOwner) return
m.quoted.copyNForward(from, true, {contextInfo: {mentionedJid : groupMembers.map(god => god.jid)}})
break

case 'colongsw':
if(!itsMe && !isOwner) return
m.quoted.copyNForward(from, true)
break

case 'listsw':{
                if(!itsMe && !isOwner) return
                let rapih = []
                let stomries = await master.getStories()
                let stomries1 = stomries.map(v => v.messages)
                for (let i = 0; i < stomries1.length; i++){
                    let semder = master.user.jid
                    if (!stomries1[i][0].key){
                        semder = stomries1[i][1].participant
                        stomries1[i].splice(0, 1)
                    } else if (!stomries1[i][0].key.fromMe){
                        semder = stomries1[i][0].participant
                    }
                    rapih.push({
                        sender: semder,
                        stories: stomries1[i]
                    })
                }
                let teg = rapih.map(v => v.sender)
                let tmt = `*LIST STATUS WHATSAPP*\nJumlah Sender : ${rapih.length}\n`
                for (let i = 0; i < rapih.length; i++){
                    let mesek = rapih[i].stories
                    tmt += `\n${1 + i}. @${rapih[i].sender.split("@")[0]}\n`
                    tmt += `=> Jumlah : ${rapih[i].stories.length}\n`
                    for (let a = 0; a < mesek.length; a++){
                        let tipe = Object.keys(mesek[a].message)[0]
                        tmt += `==> ${1 + a}. ${tipe}\n`
                    }
                }
                tmt += `\nUntuk mengambil sw, silahkan kirim ${prefix}getsw nomor sender(spasi)nomor sw\n\nContoh : ${prefix}getsw 1 1`
                mentions(tmt, teg, true)
            }
                break
                
case 'getsw':{
                if(!itsMe && !isOwner) return
                if (args.length < 2) return reply(`Penggunaan ${command} nomor sender(spasi)nomor sw\n\nContoh : ${command} 1 1`)
                if (isNaN(args[0])) return reply(`Penggunaan ${command} nomor sender(spasi)nomor sw\n\nContoh : ${command} 1 1`)
                if (isNaN(args[1])) return reply(`Penggunaan ${command} nomor sender(spasi)nomor sw\n\nContoh : ${command} 1 1`)
                try {
                    let rapih = []
                    let stomries = await master.getStories()
                    let stomries1 = stomries.map(v => v.messages)
                    for (let i = 0; i < stomries1.length; i++){
                        let semder = master.user.jid
                        if (!stomries1[i][0].key){
                            semder = stomries1[i][1].participant
                            stomries1[i].splice(0, 1)
                        } else if (!stomries1[i][0].key.fromMe){
                            semder = stomries1[i][0].participant
                        }
                        rapih.push({
                            sender: semder,
                            stories: stomries1[i]
                        })
                    }
                    let swnya = rapih[args[0] - 1].stories[args[1] - 1]
                    let tipenya = Object.keys(swnya.message)[0]
                    if (tipenya == 'extendedTextMessage'){
                        master.sendMessage(from, swnya.message[tipenya].text, text, {quoted: swnya})
                    } else {
                        let media = await master.downloadMediaMessage(swnya)
                        master.sendMessage(from, media, tipenya, {quoted: swnya, caption: swnya.message[tipenya].caption})
                    }
                } catch (err) {
                    console.log(err)
                    reply(`SW Tidak Ditemukan!`)
                }
            }
                break
                
case 'infonomor':
		     case 'infonomer':
if(!q) return reply('Nomornya mana?')
if (args[0].includes('-')) return reply(`Block nih contoh: ${prefix}infonomor 6289636006352`)
nomj = q.replace('@','')
if (!Number(nomj)) return reply('Nomor harus berupa angka!')
exists = await master.isOnWhatsApp(nomj)
yshh = `${exists.jid}`
imni = await infotlp.getOperator(nomj)
teks = `*I N F O  N O M O R*\n\n${shp} Operator : ${imni.operator}\n${shp} Kartu : ${imni.card}\n\n`
if(exists){
        teks += `Info : Nomor ini Terdaftar di Whatsapp dengan Jid : ${exists.jid}`
master.sendMessage(from, `*Tag User :* @${yshh.split("@")[0]}`, text, {contextInfo: {mentionedJid: [yshh]}})
master.sendMessage(from, `*Alternatif :* wa.me/${yshh.split("@s.whatsapp.net")[0]}`, text)
}
else{
        teks += `Info : Nomor ini Tidak terdaftar di Whatsapp!`
}
reply(teks)
break

case 'db':
case 'dashboard':
hit_global = []
hit_user = []
//globalhit
filt_global = hit.map(res => res.cmd)
nar_global = new Set(filt_global);
cmd_global = [...nar_global]
for(let i of cmd_global){
	try{
		filtc_global = await hit.filter(hcm => hcm.cmd === i)
		hit_global.push({
			cmd: i,
			hit: filtc_global.length
		})
	}catch{
	}
}
hglobal = hit_global.sort(function(a, b){return b.hit - a.hit})
//userhit
dhit_user = await hit.filter(hcm => hcm.sender === sender)
filt_user = dhit_user.map(res => res.cmd)
nar_user = new Set(filt_user);
cmd_user = [...nar_user]
for(let i of cmd_user){
	try{
		filtc_user = await dhit_user.filter(hcm => hcm.cmd === i)
		hit_user.push({
			cmd: i,
			hit: filtc_user.length
		})
	}catch{
	}
}
huser = hit_user.sort(function(a, b){return b.hit - a.hit})
tg = ''
for(let i=0; i<6; i++){
	tg += `${shp} ${prefix}${hglobal[i].cmd} : ${hglobal[i].hit}\n`
}
tu = ''
if(huser.length < 6){
	for(let i=0; i<huser.length; i++){
		tu += `${shp} ${prefix}${huser[i].cmd} : ${huser[i].hit}\n`
	}
}
else{
	for(let i=0; i<6; i++){
		tu += `${shp} ${prefix}${huser[i].cmd} : ${huser[i].hit}\n`
	}
}
var dash = `𝑫𝑨𝑺𝑯𝑩𝑶𝑨𝑹𝑫
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
${shp2} *HIT*
${shp} _Global :_ ${hit_global.length}
${shp} _User :_ ${hit_user.length}
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
*MOST COMMAND GLOBAL*
${tg}
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
*MOST COMMAND USER*
${tu}`

reply(dash)
break

case 'baileys':
const isBailey = god.message.extendedTextMessage.contextInfo.stanzaId.startsWith('3EB0') ? '_True_\n\n_This Is Baileys Message_' : '_False_\n\n_This Is Not Baileys Message_'
reply(isBailey)
break

case 'topdf':
if (!q) return reply(`Masukan Query!`)
reply(mess.wait)
sendFileFromUrl(from, `http://zekais-api.herokuapp.com/topdf?url=${q}`, god)
break

case 'tinyurl':
if (!q) return reply(`Linknya Mana?`)
tyny = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
reply(tyny)
break

case 'nyanyi':
if (!q) return reply(`Mau Nyanyi Lagu Apa?`)
reply(`Otewe Nyanyi Kak~`)
nyanyi = `https://i.ibb.co/fMMsN5S/4b65a9a0030c.webp`
data = await Raa.Musikmatch(`${q}`)
	hdata = data.result
pg = hdata.lirik
var er = pg.split('\n')
nr = 1
for (let i = 0; i < 15; i++) {
if(er[i] == '') {
}
else{
await sleep(1400)
await reply(er[i])
buff = await getBuffer(nyanyi)
await master.sendMessage(from, buff, sticker)
}
await sleep(1400)
}
reply('Thanks Kak Mau Dengerin Gw Nyanyi, Jangan Lupa Sawer Ya Hehe..')
break

case 'wamestyle':
tokp = body.slice(11)
if (tokp.length > 11) {
teks = 'http://wa.me/'
for(let i=0; i<args[0].length; i++){
num = args[0].slice(i)[0]
if(num == 0){
angka = '0⃣'
}
else if(num == 1){
angka = '1⃣'
}
else if(num == 2){
angka = '2⃣'
}
else if(num == 3){
angka = '3⃣'
}
else if(num == 4){
angka = '4⃣'
}
else if(num == 5){
angka = '5⃣'
}
else if(num == 6){
angka = '6⃣'
}
else if(num == 7){
angka = '7⃣'
}
else if(num == 8){
angka = '8⃣'
}
else if(num == 9){
angka = '9⃣'
}
teks += `🌹${angka}`
}
reply(teks)
} else if (tokp.length < 11) {
teks = 'http://wa.me/'
nomor = m.quoted.sender.split('@')[0]
for(let i=0; i<nomor.length; i++){
num = nomor.slice(i)[0]
if(num == 0){
angka = '0⃣'
}
else if(num == 1){
angka = '1⃣'
}
else if(num == 2){
angka = '2⃣'
}
else if(num == 3){
angka = '3⃣'
}
else if(num == 4){
angka = '4⃣'
}
else if(num == 5){
angka = '5⃣'
}
else if(num == 6){
angka = '6⃣'
}
else if(num == 7){
angka = '7⃣'
}
else if(num == 8){
angka = '8⃣'
}
else if(num == 9){
angka = '9⃣'
}
teks += `${shp}${angka}`
}
reply(teks)
}
break


	case 'wamestyle2':
teks = 'http://wa.me/'
for(let i=0; i<m.quoted.text.length; i++){
num = m.quoted.text.slice(i)[0]
if(num == 0){
angka = '0⃣'
}
else if(num == 1){
angka = '1⃣'
}
else if(num == 2){
angka = '2⃣'
}
else if(num == 3){
angka = '3⃣'
}
else if(num == 4){
angka = '4⃣'
}
else if(num == 5){
angka = '5⃣'
}
else if(num == 6){
angka = '6⃣'
}
else if(num == 7){
angka = '7⃣'
}
else if(num == 8){
angka = '8⃣'
}
else if(num == 9){
angka = '9⃣'
}
teks += `🌹${angka}`
}
reply(teks)
break

case 'wiki':
case 'wikipedia':
case 'wikisearch':
if (args.length < 1) return reply('Mau Cari Apa Kak?')
reply(mess.wait)
v = await wikiv2(q)
v3 = await pinterest(q)
v2 = v3[Math.floor(Math.random() * v3.length)]
buff = await getBuffer(v2)
teks = `${shp} *Judul :* ${v[0].judul}\n${shp} *Keterangan :* ${v[0].isinye}`
mhan1 = await master.prepareMessage(from, {jpegThumbnail: buff ,address: fake, name: fake }, location)
bypasseph(mhan1)
gbutsan = [
  {buttonId: `replynya`, buttonText: {displayText: `${shp} Ty Ingfo`}, type: 1}
]
 gbuttonan = {
locationMessage: mhan1.message.locationMessage,
    contentText: teks,
    footerText: `${fake}`,
    buttons: gbutsan,
    headerType: 6
}
await master.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
break

case 'pinterest':
case 'pin':
if (!q) return reply(`_Mau Cari Apa?_`)
  reply(mess.wait)
v = await pinterest(q)
detikawal = Date.now();
v2 = v[Math.floor(Math.random() * v.length)]
buff = await getBuffer(v2)
mhan2 = await master.prepareMessage(from, buff, image)
bypasseph(mhan2)
mhan2.message.imageMessage.fileLength = '98999999999'
gbutsan = [
  {buttonId: `${prefix+command} ${q}`, buttonText: {displayText: `${shp} NEXT`}, type: 1}
]

 gbuttonan = {
imageMessage: mhan2.message.imageMessage,
    contentText: `${shp} _Hasil Pencarian Dari : ${q}_\n𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`,
    footerText: `${shp} Silahkah Pilih Next Untuk Pencarian Berikutnya ${shp}`,
    buttons: gbutsan,
    headerType: 4
}
await master.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: 
   god})
break

case 'mention':
case 'tag':
if (!q) return reply('Nomernya?')
yer = `${q}@s.whatsapp.net`
master.sendMessage(from, `@${yer.split("@")[0]} `, text, {contextInfo: {mentionedJid: [yer]}})
break

case 'sendcontact':
case 'sendkontak':
case 'save':
let who
  if (god.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  txtuh = q.replace('@' + who.split`@`[0], '').trimStart()
  return master.sendContact(m.chat, who, txtuh || master.getName(who), m)
  break
  
case 'take':
case 'takestick':
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
					var encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await master.downloadAndSaveMediaMessage(encmedia, `./workspace/trash/${sender}`)
					let packname1 = q.split('|')[0] ? q.split('|')[0] : q
          let author1 = q.split('|')[1] ? q.split('|')[1] : ''
				v4 = await WSF.createSticker(fs.readFileSync(`./workspace/trash/${sender}.webp`), { type: 'full',pack: packname1,author: author1,categories: ["🌹","😎","😅","😍","🥰","🤡","🤣","😇","😡","🐤","🐣","🐥","🔥","⭐"]})
     sendStickerFakeSize(v4)
					  fs.unlinkSync(media)	
				break
				
case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await master.downloadAndSaveMediaMessage(encmediia, `./workspace/trash/${sender}`)
		    sendStickerUrl(from, fs.readFileSync(`./workspace/trash/${sender}.webp`))
					  fs.unlinkSync(meidia)
				break
				
case 'getstatus':
                var yy = god.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await master.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
				
				case 'getpic':
				if (god.message.extendedTextMessage != undefined){
					mentioned = god.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await master.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					master.sendMessage(from, thumb,image,{quoted : god, caption: `[ √ ] 𝑺𝒖𝒄𝒄𝒆𝒔𝒔`})
				}
				break
				
case 'spam':
if (!itsMe && !isOwner) return
if (!q) return reply(`Jumlahnya?`)
for(let i=0; i<q; i++){
spm = await master.prepareMessageFromContent(from, god.message.extendedTextMessage.contextInfo.quotedMessage, {})
master.relayWAMessage(spm)
await sleep(400)
}
break

case 'mystat': case 'botstat':
				let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampii = speed();
				let latensii = speed() - timestampii
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = master.user.phone
                uptimee = process.uptime()
                tesknyu = `${shp} *V. Whatsapp :* ${wa_version}
${shp} *Baterai :* ${master.battery.value}%
${shp} *Charge :* ${master.battery.cas === 'true' ? 'Ya' : 'Tidak'}
${shp} *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
${shp} *MCC :* ${mcc}
${shp} *MNC :* ${mnc}
${shp} *Versi OS :* ${os_version}
${shp} *Merk HP :* ${device_manufacturer}
${shp} *Versi HP :* ${device_model}
${shp} *Group Chat :* ${giid.length}
${shp} *Personal Chat :* ${totalchat.length - giid.length}
${shp} *Total Chat :* ${totalchat.length}
${shp} *Speed :* ${latensii.toFixed(4)} Second
${shp} *Runtime :* ${kyun(uptimee)}`
		reply(tesknyu)
		break
		
case 'tagme':
master.sendMessage(from, `@${sender.replace("@s.whatsapp.net","")}`, MessageType.text, {contextInfo: {mentionedJid: [sender]}, quoted: god})
break

case 'wa.me': case 'wame':
  master.updatePresence(from, Presence.composing) 
      options = {
          text: `「 SELF WHATSAPP 」\n\nHai Kak ${pushname}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${mjid.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    master.sendMessage(from, options, text,{ caption: text,contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_WA ME_*' } } }) 
				break
				
case 'createlink':
case 'getlink':
if (!itsMe && !isOwner) return
if (!q) return reply(`_Masukan Id Group!_`)
asuko = args.join(' ')
asukoo = await master.groupInviteCode(asuko)
ngonsol = `https://chat.whatsapp.com/${asukoo}`
reply(ngonsol)
break

case 'hitung':
				 var mtkx = body.slice(8)
				 teks = `「 *KALKULATOR* 」\n\nHasil dari:\n${mtkx} = ${Math_js.evaluate(mtkx)}`
				 reply(teks)
				 break
				 
case 'tovn':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					hah = fs.readFileSync(media)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: god})
						fs.unlinkSync(media)
				break

case 'tomp3':
				master.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await master.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					master.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: god})
						fs.unlinkSync(ran)
					   })
				break
				
case 'audtovid':
				master.updatePresence(from, Presence.composing)
				if (!isQuotedAudio) return reply('Reply Audionya!')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(god).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await master.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Emror :v')
					buffer = fs.readFileSync(ran)
					master.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: god, thumbnail: fakeimg2})
						fs.unlinkSync(ran)
					   })
				break
				
case 'chatscount':
if(! isGroupAdmins && !itsMe && !isOwner) return reply('_Lu Bukan Admin, Jadi Gausah Nyuruh Gua Su!_')
let idxx = from
let mCount = {}
let totalM = 0
await master.loadAllMessages(idxx, god => {
let useroh = god.key.fromMe ? master.user.jid : god.participant ? god.participant : idxx.includes('g.us') ? '' : idxx
if (!useroh) return
if (useroh in mCount) mCount[useroh]++
else mCount[useroh] = 1
totalM++
}, 1000)
let sorted = Object.entries(mCount).sort((a,b)=>b[1]-a[1])
let pesan = shp+ ' ' + sorted.map(v=>`${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} pesan`).join(`\n${shp} `)
master.sendMessage(from, `Ditemukan ${totalM} pesan terakhir\n\n${pesan}`, MessageType.text,{contextInfo: {mentionedJid: sorted.map(v=>v[0])}, quoted: god, sendEphemeral: true})
break
 
case 'sampah':
case 'cekchat0':
if(! isGroupAdmins && !itsMe && !isOwner) return reply('_Lu Bukan Admin, Jadi Gausah Nyuruh Gua Su!_')
reply(mess.wait)
idxy = from
mCountxy = {}
totalMxy = 0
taggxy = []
await master.loadAllMessages(idxy, god => {
userxy = god.key.fromMe ? master.user.jid : god.participant ? god.participant : idxy.includes('g.us') ? '' : idxy
if (!userxy) return
if (userxy in mCountxy) mCountxy[userxy]++
else mCountxy[userxy] = 1
totalMxy++
}, 1000)
sortedxy = Object.entries(mCountxy).sort((a,b)=>b[1]-a[1])
teksxy = `*L I S T  M E M B E R  J A R A N G  N I M B R U N G*\n\n`
for(let xyys of groupMembers){
if(!sortedxy.map(v=> v[0]).includes(xyys.jid)){
teksxy += shp + ' ' + '@' + xyys.jid.split('@')[0] + '\n'
taggxy.push(xyys.jid)
}
}
mentions(teksxy, taggxy, true)
break
				
case 'translate':
if(!q) return reply(`Cara Penggunaan ${prefix}translate kode bahasa|pesannya\n\nExample: ${prefix}translate id|i love you`)
			teks = body.slice(11)
			ok1 = teks.split('|')[0]
			ok2 = teks.split('|')[1]
			teer = await translate(ok2, {to: ok1})
			console.log(teer)
				    reply(`Translate : ${teer.text}`)
					break
					
case 'tr':
if(!q) return reply(`Cara Penggunaan ${prefix}tr [kodebahasa teks]/reply pesan dengan ${prefix}tr kodebahasa\nExample : ${prefix}tr id I Love you`)
if(!args[0]) return reply(`Masukkan kode bahasanya om`)
try{
if(!args[1]){
   if(god.message.conversation) return reply(`Cara Penggunaan ${prefix}tr [kodebahasa teks] & reply pesan dengan ${prefix}tr kodebahasa\nExample : ${prefix}tr id I Love you`)
   tra = await translate(god.message.extendedTextMessage.contextInfo.quotedMessage.conversation, {to:args[0]})
   console.log(tra)
   reply(`*Translate* : ${tra.text}`)
}
else{
   codelang = args[0]
   tra = await translate(body.slice(4+codelang.length), {to:codelang})
   console.log(tra)
   reply(tra.text)
}
}catch(e){
   reply('Error')
}
break

case 'delete': case 'del': case 'd':
if (!isGroupAdmins && !itsMe && !isOwner) return
			master.deleteMessage(from, { id: god.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
			
case 'ocr':
                                if ((isMedia && !god.message.videoMessage || isQuotedImage) && args.length == 0) {
                                                var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
                                                const mediax = await master.downloadAndSaveMediaMessage(encmedia)
                                                reply(mess.wait)
                                                await recognize(mediax, {lang: 'eng+ind', oem: 1, psm: 3})
                                                        .then(teks => {
                                                                reply(teks.trim())
                                                                fs.unlinkSync(mediax)
                                                        })
                                                        .catch(err => {
                                                                reply(err.message)
                                                                fs.unlinkSync(mediax)
                                                        })
                                        } else {
                                                reply(`_Kirim Foto Dengan Caption ${prefix+command}_`)
                                        }
                                        break
				
case 'brainly':
  if(!q) return reply(`_Mau Cari Tentang Apa Kak?_`)
  reply(mess.wait)
					var teks = body.slice(9)
					brenl = await brainly(teks)
					teks = `*BRAINLY*\n\n`
					for (let o of brenl.data) {
					for (let i of o.jawaban) {
						teks += `Pertanyaan: ${o.pertanyaan}\nJawaban: ${i.text}\n==============================\n`
					}
					}
					console.log(brenl)
					reply(teks.trim())
				break
	
case 'elus':
case'pet':{
if (isQuotedImage) {
                reply(mess.wait)
pathh = await m.quoted.download()
fs.writeFileSync(`./workspace/trash/pet.jpeg`, pathh)
pathimg = fs.readFileSync(`./workspace/trash/pet.jpeg`)
v4 = await createPet(pathimg, {resolution: 1080})
fs.writeFileSync('./workspace/trash/yoi.gif', v4)
 sendStickerUrl(from, './workspace/trash/yoi.gif')
 fs.unlinkSync(`./workspace/trash/pet.jpeg`)
 fs.unlinkSync(`./workspace/trash/yoi.gif`)
} else if (isQuotedSticker) {
                    reply(mess.wait)
                    let encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await master.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')
v4 = await createPet(ran, {resolution: 1080})
fs.writeFileSync('./workspace/trash/yoi.gif', v4)
 sendStickerUrl(from, './workspace/trash/yoi.gif')
 fs.unlinkSync(ran)
 fs.unlinkSync(`./workspace/trash/yoi.gif`)
})
}
}
break

case 'gimage':
case 'googleimage':
case 'image':
if (!q) return reply(`_Mau Cari Apa?_`)
  reply(mess.wait)
res = await googleImage(q, google)
detikawal = Date.now();
async function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
buff = await getBuffer(random)
mhan2 = await master.prepareMessage(from, buff, image)
bypasseph(mhan2)
mhan2.message.imageMessage.fileLength = '98999999999'
gbutsan = [
  {buttonId: `${prefix+command} ${q}`, buttonText: {displayText: `${shp} NEXT`}, type: 1}
]

 gbuttonan = {
imageMessage: mhan2.message.imageMessage,
    contentText: `${shp} _Hasil Pencarian Dari : ${q}_\n𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`,
    footerText: `${shp} Silahkah Pilih Next Untuk Pencarian Berikutnya ${shp}`,
    buttons: gbutsan,
    headerType: 4
}
await master.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: 
   god})
}}
break

case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `❒「  *Google Search*  」
├ *Judul :* ${i.title}
├ *Link :* ${i.link}
└ *Keterangan :* ${i.snippet}


`
}
var akhir = kant.trim()
reply(akhir)
break

case 'zippyshare':
case 'zippydl':
case 'zippy':
if (!q) return reply(`_Linknya Mana Kak?_`)
reply(mess.wait)
zippy = await ZippDL(q)
teks = `${fiz} *Data Ditemukan!* ${fiz}\n\n${shp} _Title :_ ${zippy.result.title}\n${shp} _Size :_ ${zippy.result.size}\n${shp} _Upload :_ ${zippy.result.upload}\n${shp} _Filetype :_ ${zippy.result.filetype}\n${shp} _Url :_ ${zippy.result.url}\n\n_File Dalam Proses Download, Mohon Tunggu Sebentar..._`
siz = `${zippy.result.size}`
if(siz.split('MB')[0] > 100.00){
reply(`*Maaf File Melebihi 100MB Silahkan Download Sendiri Di Link Berikut :* ${zippy.result.url}`)
}
else{
master.sendMessage(from, teks, text,{quoted:god})
bfr = await getBuffer(zippy.result.url)
master.sendMessage(from, bfr, document, {mimetype: `${zippy.result.filetype}`, filename: `${zippy.result.title}`})
}
	break
	
case 'mediafire':
case 'mediafiredl':
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error)
reply(mess.wait)
teks = args.join(' ')
rescun = await mediafiredl(teks)
siz = `${rescun[0].size}`
if(siz.split('MB')[0] > 100.00){
reply(`*Maaf File Melebihi 100MB Silahkan Download Sendiri Di Link Berikut :* ${rescun[0].link}`)
}
else{
result = `❒「  *MEDIAFIRE DOWNLOADER*  」
├ *Nama :* ${rescun[0].nama}
├ *Ukuran :* ${rescun[0].size}
└ *Link :* ${rescun[0].link}`
reply(result)
master.sendMessage(from, {url: `${rescun[0].link}` }, document, { mimetype: `${rescun[0].mime}`, filename:`${rescun[0].nama}`})
}
break

case 'addnote':
case 'addnotes':
if(!q) return reply(`Example : ${prefix + command} teks1|teks2`)
try{
if(god.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage && god.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage) return
}catch(e){
}
nmanote = []
nnote = q.split('|')[0]
isi = q.split('|')[1]
for(let ilg of note){
        if(from.includes(ilg.groupId)){
                nmanote.push(ilg.namanote)
}
}
console.log(nmanote)
for(let jlg of nmanote){
        if(nnote.includes(jlg)) return reply(`Note dengan nama ${q} sudah ada didatabase`)
}
if ((isMedia && !master.message.videoMessage || isQuotedImage || isQuotedVideo || isQuotedAudio)) {
reply(mess.wait)
boij = isQuotedImage || isQuotedVideo || isQuotedAudio ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
owgi = await master.downloadMediaMessage(boij)
rname = await GenerateSerialNumber('000000')
if(isQuotedImage){
await fs.writeFileSync(`./workspace/trash/${rname}.jpg`, owgi)
path = `./workspace/trash/${rname}.jpg`
uplod = await Raa.UploadFile(path)
fs.unlinkSync(path)
console.log(uplod)
        const addnote = {
                groupId : from,
                creator : sender,
                namanote : nnote,
                date : date,
                type : 'image',
                media : uplod.result.namaFile,
                caption : isi
        }
note.push(addnote)
fs.writeFileSync('./database/notes.json', JSON.stringify(note))
reply(`Sukses Menambahkan Note\nKetik ${prefix}listnotes untuk mengecek`)
}
else if(isQuotedVideo){
        await fs.writeFileSync(`./workspace/trash/${rname}.mp4`, owgi)
path = `./workspace/trash/${rname}.mp4`
uplod = await Raa.UploadFile(path)
fs.unlinkSync(path)
console.log(uplod)
        const addnote = {
                groupId : from,
                creator : sender,
                namanote : nnote,
                date : date,
                type : 'video',
                media : uplod.result.namaFile,
                caption : isi
        }
note.push(addnote)
fs.writeFileSync('./database/notes.json', JSON.stringify(note))
reply(`Sukses Menambahkan Note\nKetik ${prefix}listnotes untuk mengecek`)
}
else if(isQuotedAudio){
        await fs.writeFileSync(`./workspace/trash/${rname}.mp3`, owgi)
path = `./workspace/trash/${rname}.mp3`
uplod = await Raa.UploadFile(path)
fs.unlinkSync(path)
console.log(uplod)
        const addnote = {
                groupId : from,
                creator : sender,
                namanote : nnote,
                date : date,
                type : 'audio',
                media : uplod.result.namaFile,
                caption : isi
        }
note.push(addnote)
fs.writeFileSync('./database/notes.json', JSON.stringify(note))
reply(`Sukses Menambahkan Note\nKetik ${prefix}listnotes untuk mengecek`)
}
}
else{
        const addnote = {
                groupId : from,
                creator : sender,
                namanote : nnote,
                date : date,
                type : 'teks',
                media : '',
                caption : isi
        }
note.push(addnote)
fs.writeFileSync('./database/notes.json', JSON.stringify(note))
reply(`Sukses Menambahkan Note\nKetik ${prefix}listnotes untuk mengecek`)
}
break

case 'listnotes':
case 'listnote':
idgcc = []
tagc = []
teks = `L I S T  N O T E  G R O U P\n\n`
for(let icx of note){
idgcc.push(icx.groupId)
        if(from.includes(icx.groupId)){
                teks += shp + ` Nama Note : ` + icx.namanote + '\n'
                teks += shp + ` Creator : @` + icx.creator.split('@')[0] + '\n'
                teks += shp + ` Tanggal : ` + icx.date + '\n'
                teks += shp + ` Type Note : ` + icx.type + '\n'
                teks += shp + ` Media : ` + icx.media + '\n\n---------------------------------\n\n'
                tagc.push(icx.creator)
        }
}
if(!idgcc.includes(from)){
return reply('Tidak ada notes digroup ini')
}
else{
Mentions(from, teks, tagc, god)
}
break

case 'listnotes -g':
case 'listnote -g':
idgcc = []
tagc = []
teks = `L I S T  N O T E  G R O U P\n\n`
for(let icx of note){
                teks += shp + ` Nama Note : ` + icx.namanote + '\n'
                teks += shp + ` Creator : @` + icx.creator.split('@')[0] + '\n'
                teks += shp + ` Tanggal : ` + icx.date + '\n'
                teks += shp + ` Type Note : ` + icx.type + '\n'
                teks += shp + ` Media : ` + icx.media + '\n\n---------------------------------\n\n'
                tagc.push(icx.creator)
}
Mentions(from, teks, tagc, god)
break

case 'getnote':
case 'getnotes':
if(!q) return reply(`Example : ${prefix + command} vean`)
nnote = [];
for(let ilg2 of note){
        if(from.includes(ilg2.groupId)){
                nnote.push(ilg2.namanote)
                if(q.includes(ilg2.namanote)){
                        teks = `N O T E\n\n`
                        teks += shp + ' Nama Note : ' + ilg2.namanote + '\n'
                        teks += shp + ' Pembuat : @' + ilg2.creator.split('@')[0] + '\n'
                        teks += shp + ' Tanggal dibuat : ' + ilg2.date + '\n'
                        teks += shp + ' Type Note : ' + ilg2.type + '\n\n'
                        teks += `Note akan dikirim setelah pesan ini\nMohon tunggu...`
                        await Mentions(from, teks, [ilg2.creator], god)
                        if(ilg2.type == 'teks'){
                                reply(ilg2.caption)
                        }
                        else if(ilg2.type == 'audio'){
                                await reply('Caption Note : ' + ilg2.caption)
                                sendFileFromUrl(from, ilg2.media, god)
                        }
                        else{
                               sendFileFromUrl(from, ilg2.media, god, `${ilg2.caption}`)
                        }
                }
        }
}
break

case 'delnote':
case 'delnotes':
case 'dellnote':
case 'dellnotes':
if(!q) return reply(`Example : ${prefix + command} vean`)
nnote = []
for(let nosl of note){
	if(from.includes(nosl.groupId)){
		if(q.includes(nosl.namanote)){
   			let del = note.indexOf(nosl)
   			note.splice(del, 1)
   			fs.writeFileSync('./database/notes.json', JSON.stringify(note))
   			reply(`Sukses Menghapus Note ${q}`)
			}
		note.push(nosl.namanote)
	}
}
if(!q.includes(nnote)){
	reply(`Note dengan nama ${q} tidak ada di database`)
}
break

case 'inspect':
					var codeex = body.slice(9).split('https://chat.whatsapp.com/')[1]
					var resex = await master.query({
				        json: ["query", "invite", codeex],
			    		expect200: true
  					})
  					var toddx = `
*「 Group Link Inspector 」*


• *Id:* ${resex.id}

• *Judul:* ${resex.subject}

• *Dibuat oleh* @${resex.id.split('-')[0]}
pada *${formatDate(resex.creation * 1000)}*${resex.subjectOwner ? `

• *Judul diubah oleh* @${resex.subjectOwner.split(`@`)[0]}
pada *${formatDate(resex.subjectTime * 1000)}*`: ''}${resex.descOwner ? `

• *Deskripsi diubah oleh* @${resex.descOwner.split(`@`)[0]}
pada *${formatDate(resex.descTime * 1000)}*` : ''}

• *Jumlah Member:* ${resex.size}

• *Teman yang diketahui join*: ${resex.participants ? '\n' + resex.participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}
${resex.desc ? `\n• *Deskripsi:*\n
${resex.desc}` : '\n*Tidak ada Deskripsi*'}
`
const ppeqx = await master.getProfilePicture(resex.id)
peqx = await getBuffer(ppeqx)
				await master.sendMessage(from, peqx, image,{caption:toddx ,quoted: god, contextInfo: { mentionedJid: parseMention(toddx)}})
				break
				
case 'antibuggc':
				if (!itsMe && !isOwner) return
					if (args.length < 1) return reply('_on atau off!_')
					if (args[0] == 'on') {
						if (bugc == true) return reply('*Anti Buggc Sudah Aktif!*')
						bugc = true
						reply('*Sukses Mengaktifkan Mode Antibuggc!*')
					} else if (args[0] == 'off') {
						if (bugc == false) return reply('*Anti Buggc Sudah Mati!*')
						bugc = false
						reply('*Sukses Mematikan Mode Antibuggc!*')
			} else {
				reply('_Pilih on atau off_')
			}
					break
					
case 'kirimpesan':
if(!m.quoted) return reply('_Reply Chat Target Yang Ingin Dikirimkan pesan_')
if(!q) return reply('_Pesan Nya Apa Kak?_') 
reply('_Oke kak, Pesan Telah Dikirim!_')
kpsn = m.quoted.sender
master.sendMessage(m.quoted.sender, `*Pesan Dari :* ${pushname}\n*Nomernya :* wa.me/${sender.replace('@s.whatsapp.net', '')}\n*Katanya :* ${q}`, text, {contextInfo: {mentionedJid: [kpsn]}})
break

case 'fetch':
			      if (args.length < 1) return reply('_Masukan Linknya!_')
let utill = require('util')
  let resz = await fetch(body.slice(7))
  if (!/text|json/.test(resz.headers.get('content-type'))) return master.sendMessage(from, body.slice(7), text, {quoted: god})
  let txtfy = await resz.buffer()
  try {
    txtfy = utill.format(JSON.parse(txtfy+''))
  } catch (e) {
    txtfy = txtfy + ''
  } finally {
    reply(txtfy.slice(0, 65536) + '')
  }
break

case 'semoji': case 'emoji':
if(!q) return reply(`Silahkan pilih salah satu : \n${shp} apple\n${shp} google\n${shp} samsung\n${shp} microsoft\n${shp} whatsapp\n${shp} twitter\n${shp} facebook\n${shp} joypixels\n${shp} openmoji\n${shp} emojidex\n${shp} lg\n${shp} htc\n\nContoh : ${prefix+command} ☹️|whatsapp`)
emot = q.split('|')[0]
jemot = q.split('|')[1]
if(jemot == 'apple'){
	idemot = 0
}
else if(jemot == 'google'){
	idemot = 1
}
else if(jemot == 'samsung'){
	idemot = 2
}
else if(jemot == 'microsoft'){
	idemot = 3
}
else if(jemot == 'whatsapp'){
	idemot = 4
}
else if(jemot == 'twitter'){
	idemot = 5
}
else if(jemot == 'facebook'){
	idemot = 6
}
else if(jemot == 'joypixels'){
	idemot = 7
}
else if(jemot == 'openmoji'){
	idemot = 8
}
else if(jemot == 'emojidex'){
	idemot = 9
}
else if(jemot == 'lg'){
	idemot = 10
}
else if(jemot == 'htc'){
	idemot = 11
}
else if(!jemot){
	idemot = 4
}
else{
return reply(`Silahkan pilih salah satu : \n${shp} apple\n${shp} google\n${shp} samsung\n${shp} microsoft\n${shp} whatsapp\n${shp} twitter\n${shp} facebook\n${shp} joypixels\n${shp} openmoji\n${shp} emojidex\n${shp} lg\n${shp} htc\n\nContoh : ${prefix}emoji ☹️|whatsapp`)
}
if(idemot == undefined) return
emoji.get(emot)
    .then(emoji => {
        console.log(emoji.images[idemot]);
sendStickerUrl(from,emoji.images[idemot].url, god)
    })
break

case 'hackvn':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					hah = fs.readFileSync(media)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: '359996400', ptt: true, quoted: god})
						fs.unlinkSync(media)
				break
				
				case 'hackvid':
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					hah = fs.readFileSync(media)
						master.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: '359996400', quoted: god})
						fs.unlinkSync(media)
				break
				
case 'citacita': case 'cita cita':
cita1 = Math.floor(Math.random() * 35)
cita2 = await getBuffer(`http://piyobot.000webhostapp.com/citacita${cita1}.mp3`)
master.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true,duration:359996400, quoted: god})
break

case 'pastegg':
					paste = body.slice(9)
					ddatae = await imageToBase64(JSON.stringify('./workspace/trash/paste.jpeg').replace(/\"/gi, ''))
					pste = await pasteGG.post({
  name: "𝑉𝑒𝑎𝑛 𝐵𝑜𝑡 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝", // Optional
  description: "𝑉𝑒𝑎𝑛 𝐵𝑜𝑡 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝", // Optional
  expires: "2099-12-30T02:25:56.428Z", // Optional
  files: [{
    name: "𝑉𝑒𝑎𝑛 𝐵𝑜𝑡 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝.txt", // Optional
    content: {
      format: "text",
      value: paste
    }
  }]
})
console.log(pste)
master.sendMessage(from, pste.result.url, teks, {quoted: god})
     break

case 'panggil':
					if (!itsMe && !isOwner) return
					var gh = body.slice(8)
			var okp = gh.split('|')[1]
			var okg = gh.split('|')[2]
			if (Number(okg) >= 100) return reply('Maksimal 100!')
					mentioned = god.message.extendedTextMessage.contextInfo.mentionedJid[0]
					for (let i = 0; i < okg; i++) {
						master.sendMessage(from, `${okp} @${mentioned.split('@')[0]}`, MessageType.text, {contextInfo: { mentionedJid: [mentioned]}})
						}
						break
						
case 'join':
				if(!q) return reply(`_Masukan Link Group Yang Dituju_`)
				try {
					if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('_Masukan Link Group Whatsapp Dengan Benar!_')
					henx = args[0]
					if (!q) return reply('Masukan link group')
					var codeInvite = henx.split('https://chat.whatsapp.com/')[1]
					if (!codeInvite) return reply('pastikan link sudah benar!')
					var responsec = await master.acceptInvite(codeInvite)
					reply('SUKSES')
				} catch {
					reply('LINK ERROR!')
				}
				break
				
case 'cepetin':
				
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "rubberband=tempo=1.5" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'kencengin':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14" -ar 48k ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: god})
						fs.unlinkSync(ran)
					})
				break

case 'tempo':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'tempo-v':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: god })
            fs.unlinkSync(ran)
})
				break


case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: god,duration:99999999999999})
						fs.unlinkSync(ran)
					   })
				       break 
				       
case 'slowmo':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
				encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await master.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				master.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: god})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai2':
				
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
				case 'gemok':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'hode':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
                                        encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        media = await master.downloadAndSaveMediaMessage(encmedia)
                                        ran = getRandom('.mp3')
                                        exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
                                                fs.unlinkSync(media)
                                                if (err) return reply('Error!')
                                                hah = fs.readFileSync(ran)
                                                master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: god})
                                                fs.unlinkSync(ran)
                                        })
                                break
				case 'vibra':
				case 'vibrato':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
				if (!Number(args[0])) return reply('Harus nomor woi!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					tels = args[0]
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${tels}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'volume':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'vntobase64':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = fs.readFileSync(media)
					todi = await ran.toString('base64')
					reply(todi)
					break
				case 'robot':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'imut':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				case 'balikin':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: god})
						fs.unlinkSync(ran)
					})
				break
				
case 'randomukhti':
case 'randomukhty':
case 'randomukthy':
case 'randomukthi':
case 'ukhti':
case 'ukhty':
reply(mess.wait)
v = await pinterest(`ukthy`)
v2 = v[Math.floor(Math.random() * v.length)]
buff = await getBuffer(v2)
master.sendMessage(from, buff, image,{quoted:god, caption: scs})
break

case 'cewethailand':
case 'randomthailand':
case 'randomcewethailand':
reply(mess.wait)
v = await pinterest(`cewe thailand`)
v2 = v[Math.floor(Math.random() * v.length)]
buff = await getBuffer(v2)
master.sendMessage(from, buff, image,{quoted:god, caption: scs})
break

case 'cewevietnam':
case 'randomvietnam':
case 'randomcewevietnam':
reply(mess.wait)
v = await pinterest(`cewe vietnam`)
v2 = v[Math.floor(Math.random() * v.length)]
buff = await getBuffer(v2)
master.sendMessage(from, buff, image,{quoted:god, caption: scs})
break

case 'ceweindo':
case 'randomindo':
case 'randomceweindo':
reply(mess.wait)
v = await pinterest(`cewe indonesia`)
v2 = v[Math.floor(Math.random() * v.length)]
buff = await getBuffer(v2)
master.sendMessage(from, buff, image,{quoted:god, caption: scs})
break

case 'ultah':
case 'zodiac':
case 'hbd':
let textuh = args.join(" ")
    if (!q) return reply(`Example: 2002 03 30`)
const zodiakuh = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarius", new Date(1970, 0, 20)],
    ["Pisces", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Gemini", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpio", new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiakuh.find(([_,_d]) => d >= _d)[0]
}
    const dateuh = new Date(textuh)
    if (dateuh == 'Invalid Date') throw dateuh
    const duh = new Date()
    const [tahunuh, bulanuh, tanggaluh] = [duh.getFullYear(), duh.getMonth() + 1, duh.getDate()]
    const birthuh = [dateuh.getFullYear(), dateuh.getMonth() + 1, dateuh.getDate()]
    
    const zodiacuh = getZodiac(birthuh[1], birthuh[2])
    const ageDuh = new Date(duh - dateuh)
    const ageuh = ageDuh.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthdayuh = [tahunuh + (birthuh[1] < bulanuh), ...birthuh.slice(1)]
    const cekusiauh = bulanuh === birthuh[1] && tanggaluh === birthuh[2] ? `Selamat ulang tahun yang ke-${ageuh} 🥳` : ageuh

    const teksuh = `
Lahir : ${birthuh.join('-')}
Ultah Mendatang : ${birthdayuh.join('-')}
Usia : ${cekusiauh}
Zodiak : ${zodiacuh}
`.trim()
    reply(teksuh)
break

case 'stohex':
thex = god.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
reply(thex)
break

case 'stobase64':
thex2 = god.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
reply(thex2)
break

case 'itohex':
thex3 = god.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.fileSha256.toString('hex')
reply(thex3)
break

case 'itobase64':
thex4 = god.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.fileSha256.toString('base64')
reply(thex4)
break

case 'fakefile': case 'createfile':
if (!q) return reply('Teksnya?')
 anud = fs.readFileSync('./workspace/media/img2.jpeg')
master.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`${q}`, thumbnail:fs.readFileSync('workspace/media/img2.jpeg','base64')})
break

case 'infobisnis':
if(!q) return reply(`Cara penggunaan : ${prefix}infobisnis tag orang/masukkan nomor whatsapp\n\nContoh : ${prefix}infobisnis 6281990498472\n\nNote : Nomor harus diawali dengan kode negara`)
reply(mess.wait)
if(isNaN(body.slice(13))) return reply('Input harus berupa nomor whatsapp!')
mentioned = args[0].replace('@', '') + '@s.whatsapp.net'
data = await isBusiness(mentioned)
console.log(data)
if(data == undefined) return reply('Nomor yang anda masukkan bukan akun bisnis!')
data2 = await getbusinessprof(mentioned)
reply(JSON.stringify(data2, null, 2))
break

case 'listbisnis2':
case 'listbusiness2':
reply(mess.wait)
tag = [];
teks = `List Akun Bisnis Yang Ada Di Group ${groupName} : \n\n`
for(let bsz of groupMembers){
bzn = await isBusiness(bsz.jid)
if(bzn === true){
console.log(bsz.jid + ' Akun bisnis')
teks += shp + ' wa.me/' + bsz.jid.split('@')[0]+ '\n'
teks += shp + ' Info Bisnis :\n' + JSON.stringify(bsz, null, 2) + '\n\n'
}
}
reply(teks)
break

case 'listbisnis':
case 'listbusiness':
reply(mess.wait)
tag = [];
teks = `List Akun Bisnis Yang Ada Di Group ${groupName} : \n\n`
for(let bsz of groupMembers){
bzn = await isBusiness(bsz.jid)
if(bzn === true){
console.log(bsz.jid + ' Akun bisnis')
teks += shp + ' wa.me/' + bsz.jid.split('@')[0]+ '\n'
}
}
reply(teks)
break

case 'pesansementara': case 'ephemeral':
if (!itsMe && !isGroupAdmins) return reply
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!q) return reply(`Example : ${prefix + command} on/off`)
if (args[0] && args[0].toLowerCase() == 'on') {
					  master.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
					  reply(`_Success Turn On Ephemeral_`)
					} else if (args[0] && args[0].toLowerCase() == 'off') {
					  master.toggleDisappearingMessages(from, 0)
reply(`_Success Turn Off Ephemeral_`)
					}
	break
	
case 'once':
case 'viewonce': {
if (isQuotedImage) {
ger = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await master.downloadMediaMessage(ger)
await fs.writeFileSync(`./random.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
oncei = await imgbb("e4bb5222011a8521cc60ce61a2aa1f98", './random.jpeg')
teks = `${oncei.display_url}`
once = await getBuffer(teks)
master.sendMessage(from, once, image,{viewOnce:true})
fs.unlinkSync('./random.jpeg')
}
else if (isQuotedSticker) {
					encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						master.sendMessage(from, buffer, image,{viewOnce:true})
						fs.unlinkSync(ran)
					})
}
if (isQuotedVideo) {
ger = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await master.downloadMediaMessage(ger)
            resxx = await upload(owgi)
once = await getBuffer(resxx)
master.sendMessage(from, once, video,{viewOnce:true})
}
}
	break
	
case 'reversevid':
case 'reverse-v':
if(!m.quoted) return reply('_Reply Videonya Kak_')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await master.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						master.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: god, caption: scs })
            fs.unlinkSync(ran)
})
				break
				
case 'ttdl':
case 'tiktok':
case 'tiktokdl':
case 'tiktok-dl':
if(!q) return reply('_Linknya Mana Kak?_')
reply(mess.wait)
detikawal = Date.now();
butt = [
    {buttonId: `${q}`, buttonText: {displayText: 'TIKTOK NOWM'}, type: 1},
    {buttonId: `${q}`, buttonText: {displayText: 'TIKTOK MUSIC'}, type: 1}
]
try{
tik1 = await TiktokDownloader(q)
buff = await getBuffer(tik1.result.watermark)
console.log(tik1)
teks = `${shp} TIKTOK DOWNLOADER ${shp}\n𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`
mhan3 = await master.prepareMessage(from, buff, video)
bypasseph(mhan3)
mhan3.message.videoMessage.fileLength = '98999999999'
buttonmes = {
videoMessage: mhan3.message.videoMessage,
contentText: teks,
footerText: "Ada Pilihan Lain Nih Kak~",
buttons: butt,
headerType: 5
}
master.sendMessage(from, buttonmes, MessageType.buttonsMessage, {
quoted: god
})
}catch{
reply(mess.error.api)
}
break
				
case 'tiktoknowm':
if (!q) return reply(`_Example : ${prefix+command} https://vt.tiktok.com/ZSe8YeWBV/_`)
reply(mess.wait)
detikawal = Date.now();
v = await TiktokDownloader(q)
v2 = await getBuffer(v.result.nowatermark)
sendVideo(v2, `𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜\n${shp} 𝙻𝚒𝚗𝚔 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 : ${v.result.nowatermark}`)
break

case 'tiktokmusic':
if (!q) return reply(`_Example : ${prefix+command} https://vt.tiktok.com/ZSe8YeWBV/_`)
reply(mess.wait)
v = await TiktokDownloader(q)
buff = await getBuffer(v.result.nowatermark)
master.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', quoted: god, ptt:true})
break

case 'ig': case 'instagram': case 'igdl':
if (!q) return reply(`Example :\n${prefix+command} https://www.instagram.com/reel/CT2NhOll8TI/?utm_medium=copy_link`)
try {
reply(mess.wait)
detikawal = Date.now();
buffer = await instagramdl(q)
for (let i of buffer ? buffer : buffer.medias){
if(i.url.includes('.mp4')){
buffv = await getBuffer(i.url)
sendVideoFakeSize(buffv)
} else {
buffi = await getBuffer(i.url)
sendImageFakeSize(buffi)
}}
} catch {
reply('_Error, Coba Ulangi Lagi_')
}
break

case 'fsize':
			suko = m.quoted.mtype
			{ let stc = (await master.prepareMessage(from, await m.quoted.download(), `${suko}`))
			bypasseph(stc)
			let taipe = suko
			stc.message[taipe].fileLength = '9'.repeat(q)
			master.relayWAMessage(stc) }
			break
			
case 'setimg1':
		  if (!itsMe && !isOwner) return
	        if ((isMedia && !god.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
			delb = await master.downloadMediaMessage(boij)
			fs.writeFileSync(`./workspace/media/img1.jpeg`, delb)
			reply(scs)
        	} else {
            reply(`_Kirim Gambar Dengan Caption ${prefix+command}_`)
          	}
			break		
			
case 'setimg2':
		  if (!itsMe && !isOwner) return
	        if ((isMedia && !god.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
			delb = await master.downloadMediaMessage(boij)
			fs.writeFileSync(`./workspace/media/img2.jpeg`, delb)
			reply(scs)
        	} else {
            reply(`_Kirim Gambar Dengan Caption ${prefix+command}_`)
          	}
			break	
			
case 'setimg3':
		  if (!itsMe && !isOwner) return
	        if ((isMedia && !god.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
			delb = await master.downloadMediaMessage(boij)
			fs.writeFileSync(`./workspace/media/img3.jpeg`, delb)
			reply(scs)
        	} else {
            reply(`_Kirim Gambar Dengan Caption ${prefix+command}_`)
          	}
			break	
			
case 'setimg4':
		  if (!itsMe && !isOwner) return
	        if ((isMedia && !god.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
			delb = await master.downloadMediaMessage(boij)
			fs.writeFileSync(`./workspace/media/img4.jpeg`, delb)
			reply(scs)
        	} else {
            reply(`_Kirim Gambar Dengan Caption ${prefix+command}_`)
          	}
			break
			
case 'setimg5':
		  if (!itsMe && !isOwner) return
	        if ((isMedia && !god.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(god).replace('quotedM','m')).message.extendedTextMessage.contextInfo : god
			delb = await master.downloadMediaMessage(boij)
			fs.writeFileSync(`./workspace/media/img5.jpeg`, delb)
			reply(scs)
        	} else {
            reply(`_Kirim Gambar Dengan Caption ${prefix+command}_`)
          	}
			break
	
case 'asupan':
reply(mess.wait)
detikawal = Date.now();
asup = fs.readFileSync('./lib/asupan.json').toString()
asupr = JSON.parse(asup)
rendom = acak.sample(asupr)
addr = `http://sansekai.my.id/ptl_repost/${rendom}`
buff = await getBuffer(addr)
mhan2 = await master.prepareMessage(from, buff, video)
bypasseph(mhan2)
gbutsan = [
  {buttonId: `${prefix+command} ${q}`, buttonText: {displayText: `${shp} NEXT`}, type: 1}
]

 gbuttonan = {
videoMessage: mhan2.message.videoMessage,
    contentText: `${shp} _Asupan Nya Kak_\n𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝙿𝚛𝚘𝚌𝚎𝚜𝚜 𝙸𝚗 ${((Date.now()-detikawal)/1000).toFixed(1)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`,
    footerText: `${shp} Silahkah Pilih Next Untuk Pencarian Berikutnya ${shp}`,
    buttons: gbutsan,
    headerType: 5
}
await master.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: 
   god})
break

case 'ppcouple':
  reply(mess.wait)
ppkpl = fs.readFileSync('./lib/ppcouple.js').toString()
ppkplr = JSON.parse(ppkpl)
rendom = acak.sample(ppkplr)
ppmale = await getBuffer(rendom.male)
ppfemale = await getBuffer(rendom.female)
sendImageWithCaption(ppmale, `Male Character`)
sendImageWithCaption(ppfemale, `Female Character`)
break

case 'groupinfo':
case 'ingfogc':
case 'infogc':
case 'gcingfo':
case 'gcinfo':
	master.updatePresence(from, Presence.composing)
	if (!isGroup) return reply(mess.only.group)
	ppUrl = await master.getProfilePicture(from) // leave empty to get your own
	buffer = await getBuffer(ppUrl)
	master.sendMessage(from, buffer, image, {quoted: god, caption: `*Name* : ${groupName}\n*Member* : ${groupMembers.length}\n*Admin* : ${groupAdmins.length}\n*Desc* : ${groupDesc}`})
	break
	
case 'addprem':
if (!god.key.fromMe && !isOwner) return reply('_Khusus Owner_')
if (!q)return reply(`Example : ${prefix + command} @tag|30d`)
expired = q.split("|")[1]
const pnom = {id: `${q.split("|")[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(`_Success_`)
break

case 'delprem':
  if (!god.key.fromMe) return reply('_Khusus Owner_')
if (!q)return reply(`Example : ${prefix + command} @tag`)
usercu = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(usercu.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`Sukses Menghapus premium`)
}
}
break

case 'listprem':
if (!isPremium && !god.key.fromMe) return reply(`_Maaf Fitur Ini Khusus User Premium, Silahkan Hubungi Owner Untuk Menjadi User Premium!_`)
if(!isGroup)return reply(mess.only.group)
master.updatePresence(from, Presence.composing)
let txt = `List Prem\nJumlah : ${premium.length}\n\n`
let menz = [];
for (let i of premium){
menz.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `*ID :* @${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
  }
mentions(txt, menz, true)
break

case 'cekprem': case 'cekpremium':
if (!isPremium) return reply(`_Maaf Fitur Ini Khusus User Premium, Silahkan Hubungi Owner Untuk Menjadi User Premium!_`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
try {
ppimg = await master.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
if(god.key.fromMe){
tagu = master.user.jid.split('@')[0]
mjidu = master.user.jid
}
else{
tagu = sender.split('@')[0]
mjidu = sender
}
teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${tagu}*
 *Premium : ${premiumnya}*`
its = await getBuffer (ppimg)
master.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: true, mentionedJid: [mjidu]},quoted: god, caption: teks
})
break

case 'antilink':
	       if (!isGroupAdmins && !itsMe && !isOwner) return
					if (!isGroup) return reply(mess.OnlyGrup)
					if (args.length < 1) return reply(`_Example : ${prefix+command} on/off_`)
					if (args[0] == 'on') {
						if (anlink.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
						anlink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
						reply('_Sukses mengaktifkan Antilink Whatsapp digroup ini_')
					} else if (args[0] == 'off') {
					  let off = anlink.indexOf(from)
						anlink.splice(off, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
						reply('_Sukses menonaktifkan Antilink Whatsapp digroup ini_')
					} else {
						reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}antilink on`)
					}
					break

case 'antiall':
	       if (!isGroupAdmins && !itsMe && !isOwner) return
					if (!isGroup) return reply(mess.OnlyGrup)
					if (args.length < 1) return reply(`_Example : ${prefix+command} on/off_`)
					if (args[0] == 'on') {
						if (antihttp.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
						antihttp.push(from)
						fs.writeFileSync('./database/antihttp.json', JSON.stringify(antihttp))
						reply('_Sukses mengaktifkan Antilink All digroup ini_')
					} else if (args[0] == 'off') {
					  let off = antihttp.indexOf(from)
						antihttp.splice(off, 1)
						fs.writeFileSync('./database/antihttp.json', JSON.stringify(antihttp))
						reply('_Sukses menonaktifkan Antilink All digroup ini_')
					} else {
						reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}antiall on`)
					}
					break
					
case 'antivirus':
	       if (!isGroupAdmins && !itsMe && !isOwner) return
					if (!isGroup) return reply(mess.OnlyGrup)
					if (args.length < 1) return reply(`_Example : ${prefix+command} on/off_`)
					if (args[0] == 'on') {
						if (antivirus.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
						antivirus.push(from)
						fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
						reply('_Sukses mengaktifkan Antivirus digroup ini_')
					} else if (args[0] == 'off') {
					  let off = antivirus.indexOf(from)
						antivirus.splice(off, 1)
						fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
						reply('_Sukses menonaktifkan Antivirus digroup ini_')
					} else {
						reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}antivirus on`)
					}
					break
					
case 'antihidetag':
	       if (!isGroupAdmins && !itsMe && !isOwner) return
					if (!isGroup) return reply(mess.OnlyGrup)
					if (args.length < 1) return reply(`_Example : ${prefix+command} on/off_`)
					if (args[0] == 'on') {
						if (antihidetag.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
						antihidetag.push(from)
						fs.writeFileSync('./database/antihidetag.json', JSON.stringify(antihidetag))
						reply('_Sukses mengaktifkan Anti Hidetag digroup ini_')
					} else if (args[0] == 'off') {
					  let off = antihidetag.indexOf(from)
						antihidetag.splice(off, 1)
						fs.writeFileSync('./database/antihidetag.json', JSON.stringify(antihidetag))
						reply('_Sukses menonaktifkan Anti Hidetag digroup ini_')
					} else {
						reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}antihidetag on`)
					}
					break
					
case 'antitag':
				if (!itsMe && !isOwner) return
					if (args.length < 1) return reply('_on atau off!_')
					if (args[0] == 'on') {
						if (antitag == true) return reply('*Anti Tag Sudah Aktif!*')
						antitag = true
						reply('*Sukses Mengaktifkan Mode Antitag!*')
					} else if (args[0] == 'off') {
						if (antitag == false) return reply('*Anti Tag Sudah Mati!*')
						antitag = false
						reply('*Sukses Mematikan Mode Antitag!*')
			} else {
				reply('_Pilih on atau off_')
			}
					break
					
case 'addrespon': case 'addfilter':
if (!itsMe && !isOwner && !isGroupAdmins) return reply(mess.only.admin)
if(!q) return reply(`Ketik Perintah ${prefix+command} filter|jawab`)
fltr = q.split('|')[0]
jwb = q.split('|')[1]
if(!jwb) return reply('Format Salah!')
for(let i of filter){
  if(fltr.includes(i.Filter)) return reply(`_Filter ${fltr} Sudah Ada Didatabase_`)
}
const chat = {
Filter : fltr,
Jawaban : jwb
}
filter.push(chat)
fs.writeFileSync('./database/filter.json', JSON.stringify(filter))
reply(`_Sukses Menambahkan Filter ${fltr}_\n_Cek Dengan Cara ${prefix}listrespon_`)
break

case 'delrespon': case 'dellrespon':
case 'delfilter': case 'dellfilter':
if (!itsMe && !isOwner && !isGroupAdmins) return reply(mess.only.admin)
if(!q) return reply(`Ketik Perintah ${prefix+command} namafilter`)
for(let i=0; i<filter.length; i++){
if(q.includes(filter[i].Filter)){
   obj = {
      txt: filter[i].text,
      balesan: filter[i].balesan
   }
   let del = filter.indexOf(filter[i])
   filter.splice(del, 1)
   fs.writeFileSync('./database/filter.json', JSON.stringify(filter))
   reply(`_Sukses Menghapus Respon ${q}_`)
}
}
break

case 'autorespon':
	        if (!itsMe && !isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.OnlyGrup)
					if (args.length < 1) return reply(`_Example : ${prefix+command} on/off_`)
					if (args[0] == 'on') {
						if (sfilter.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
						sfilter.push(from)
						fs.writeFileSync('./database/sfilter.json', JSON.stringify(sfilter))
						reply('_Sukses mengaktifkan Autorespon Chat digroup ini_')
					} else if (args[0] == 'off') {
					  let off = sfilter.indexOf(from)
						sfilter.splice(off, 1)
						fs.writeFileSync('./database/sfilter.json', JSON.stringify(sfilter))
						reply('_Sukses menonaktifkan Autorespon Chat digroup ini_')
					} else {
						reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix + command} on`)
					}
					break
					
case 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `⬡ Filter : ${i.Filter}\n⬡ Jawab : ${i.Jawaban}\n\n---------------------------\n\n`
   }
   teks += `Total : ${filter.length}`
   master.sendMessage(from, teks.trim(), extendedText, {quoted: god})
   break
   
case 'fdeface':
if (!itsMe && !isOwner) return
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					ddatae = await imageToBase64(JSON.stringify('./workspace/media/img2.jpeg').replace(/\"/gi, ''))

					master.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
case 'igstalk':
  if (!q) return reply(`_Masukan Username Instagramnya_`)
  reply(mess.wait)
v = await igstalk(q)
teks = `${shp} *INSTAGRAM STALK* ${shp}\n\n${shp} Username : ${v.username}\n${shp} Full_Name : ${v.full_name}\n${shp} Followers : ${v.followers}\n${shp} Following : ${v.following}\n${shp} Post_Count : ${v.posts_count}\n${shp} Biography : ${v.biography}\n${shp} External_Url : ${v.external_url}\n${shp} IsPrivate : ${v.is_private}\n${shp} IsVerified : ${v.is_verified}`
v2 = await getBuffer(v.profile_url)
master.sendMessage(from, v2, image, {quoted: god, caption: teks})
break

case 'fbdl': case 'fb':
if (!q) return reply(`_Masukan Link Facebooknya_`)
reply(mess.wait)
v = await fbdl(q)
v2 = await getBuffer(v.hasil.link_high)
sendVideoFakeSize(v2)
break

case 'nowa':
if (!itsMe && !isOwner) return
			var teks = q
			if (!teks.includes('x')) return reply('Lah?')
			var numberPattern = /\d+/g;
			var nomer = teks.match(numberPattern)
			var random_length = teks.length - nomer[0].length
			if (random_length == 1) {
			var random = 10
			} else if (random_length == 2) {
			var random = 100
			} else if (random_length == 3) {
			var random = 1000
			} else if (random_length == 4) {
			var random = 10000
			}
			console.log(random)
			var nomerny = `*List Number*\n\nWith Bio/Status/Info\n`
			var no_bio = `\nWithout Bio/Status/Ifon ||\nHey there! I am using WhatsApp.\n`
			var no_watsap = `\nNot Registered\n`
			for (let i = 0; i < random; i++) {
			var nu = ['1','2','3','4','5','6','7','8','9']
			var dom1 = nu[Math.floor(Math.random() * nu.length)]
			var dom2 = nu[Math.floor(Math.random() * nu.length)]
			var dom3 = nu[Math.floor(Math.random() * nu.length)]
			var dom4 = nu[Math.floor(Math.random() * nu.length)]
			if (random_length == 1) {
			var rndm = `${dom1}`
			} else if (random_length == 2) {
			var rndm = `${dom1}${dom2}`
			} else if (random_length == 3) {
			var rndm = `${dom1}${dom2}${dom3}`
			} else if (random_length == 4) {
			var rndm = `${dom1}${dom2}${dom3}${dom4}`
			}
			var anu = await master.isOnWhatsApp(`${nomer[0]}${i}@s.whatsapp.net`);
			var anuu = anu ? anu : false
			try {
			var anu1 = await master.getStatus(anu.jid)
			if (anu1.status == 401 || anu1.status == 'Hey there! I am using WhatsApp.') {
			no_bio += `wa.me/${anu.jid.split("@")[0]}\n`
			console.log(`-${i}) ${nomer[0]}${i}`, color(` [REGISTERED]`, 'green'))
			} else {
			nomerny += `wa.me/${anu.jid.split("@")[0]}\n`
			console.log(`-${i}) ${nomer[0]}${i}`, color(` [REGISTERED]`, 'green'))
			}
			} catch {
			no_watsap += `${nomer[0]}${i}\n`
			console.log(`-${i}) ${nomer[0]}${i}`, color(` [NOT REGISTERED]`, 'red'))
			}
			}
			reply(`${nomerny}${no_bio}${no_watsap}`)
			break
			
case 'exif':
case 'setexif':
	        if (!men.key.fromMe) return
	        if (args.length < 1) return reply(`_Penggunaan ${prefix}exif nama|author_`)
		if (!q.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(q.split('|')[0], q.split('|')[1])
		    reply('_Success Set Exif!_')
	        break

//#>>>> Endinggg <<<<#\\
default:
if (budy.startsWith('<')){
if(!itsMe && !isOwner) return
console.log(color('[EVAL]'), color(moment(god.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V2 :~`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(monospace(pes))
}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(monospace(e))
}
}

if (chats.startsWith('>')){
				if(!itsMe && !isOwner) return
				console.log(color('[EVAL]'), color(moment(god.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 :~`))
				try{
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
}catch(err){
	e = String(err)
	reply(monospace(e))
	}
}

if (budy.startsWith('x')){
try {
  if (!itsMe && !isOwner) return
return master.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: god})
} catch(err) {
e = String(err)
reply(monospace(e))
}
}

			if (budy.startsWith('=>')) {
			  if (!itsMe && !isOwner) return
				console.log(color('[ EVAL ]'), color(moment(god.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`EVAL RETURN :~`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			}

if (budy.startsWith('$')){
if (!itsMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${fake} :~ ${err}`)
if (stdout) {
reply(monospace(stdout))
}
})
}

if(budy.includes('cekprefix')){
cpref = `${shp} *Prefix Active :* ${shp}

${shp2} _Multiprefix :_ _${multi ? 'Yes':'No'}_
${shp2} _Singleprefix :_ _${single ? `Yes , Prefix : ${prefa}`:'No'}_
${shp2} _Noprefix :_ _${nopref ? 'Yes' : 'No'}_`
reply(cpref)
}
if(budy.includes('Cekprefix')){
cpref = `${shp} *Prefix Active :* ${shp}

${shp2} _Multiprefix :_ _${multi ? 'Yes':'No'}_
${shp2} _Singleprefix :_ _${single ? `Yes , Prefix : ${prefa}`:'No'}_
${shp2} _Noprefix :_ _${nopref ? 'Yes' : 'No'}_`
reply(cpref)
}

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'cyan'), 'SELF-MESSAGE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("undefined")){
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
