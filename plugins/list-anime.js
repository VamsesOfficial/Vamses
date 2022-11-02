import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs} WIB`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let wibb = `${wktuwib}`
let info = `
*Hai* %tag 👋

Berikut List Animenya 🤗
`
const sections = [{
title: `⟥⟝⟢⟨🌸 ANIME LIST ⟩⟣⟞⟤`,
rows: [
        {title: "🌸 • AKIRA", rowId: "akira"},
      	{title: "🌸 • AKIYAMA", rowId: ".akiyama"},
        {title: "🌸 • ASUNA", rowId: ".asuna"},
        {title: "🌸 • AYUZAWA", rowId: ".ayuzawa"},
        {title: "🌸 • BORUTO", rowId: ".boruto"},
        {title: "🌸 • CHIHO", rowId: ".chiho"},
        {title: "🌸 • CHITOGE", rowId: ".chitoge"},
        {title: "🌸 • DEIDARA", rowId: ".deidara"},
        {title: "🌸 • ERZA", rowId: ".erza"},
        {title: "🌸 • ELAINA", rowId: ".elaina"},
        {title: "🌸 • EBA", rowId: ".eba"},
        {title: "🌸 • EMILIA", rowId: ".emilia"},
        {title: "🌸 • HESTIA", rowId: ".hestia"},
        {title: "🌸 • HINATA", rowId: ".hinata"},
        {title: "🌸 • INORI", rowId: ".inori"},       
        {title: "🌸 • ISUZU", rowId: ".isuzu"},
        {title: "🌸 • ITACHI", rowId: ".itachi"},    
        {title: "🌸 • ITORI", rowId: ".itori"},
      	{title: "🌸 • KAGA", rowId: ".kaga"},
        {title: "🌸 • KAGURA", rowId: ".kagura"},
        {title: "☠️ • KAORI", rowId: ".kaori"},   
        {title: "🌸 • KANEKI", rowId: ".kaneki"},
        {title: "🌸 • KATORI", rowId: ".katori"},
        {title: "🌸 • KURUMI", rowId: ".kurumi"},       
        {title: "🌸 • MADARA", rowId: ".madara"},
        {title: "🌸 • MIKASA", rowId: ".mikasa"},    
        {title: "🌸 • MIKU", rowId: ".miku"},
      	{title: "🌸 • MINATO", rowId: ".minato"},
        {title: "🌸 • NEZUKO", rowId: ".nezuko"},
        {title: "🌸 • SAGIRI", rowId: ".sagiri"},       
        {title: "🌸 • SASUKE", rowId: ".sasuke"},   
        {title: "🌸 • SAKURA", rowId: ".sakura"},    
        {title: "🌸 • COSPLAY", rowId: ".cosplay"},     
]},
]

const listMessage = {
  text: info,
  footer:  `Hai kak ${name}\n⌚ : ${wibb}\n📆 : ${week} ${date}`,
  title: '⬒ ───⟢⟨ *ANIME LIST* ⟩⟣─── ⬒',
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'sewabottt': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   /* m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
   m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
}

handler.help = ['listanime']
handler.tags = ['wibu']
handler.command = /^(listanime)/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
