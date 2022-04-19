// suka susu

const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Looking for what?'
  let res = await fetch(global.API('zeks','/api/unsplash', {
    q : encodeURI(text)
  }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let img = json.result[Math.floor(Math.random() * json.result.length)]
  if (json.status) conn.sendFile(m.chat, img.img_hd, 'unsplash', 'Here Unsplash!', m)
    else throw json
}
handler.help = ['unsplash <keyword>']
handler.tags = ['internet']
handler.command = /^(unsplash)$/i
//
module.exports = handler
