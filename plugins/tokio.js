let handler = async m => m.reply(`
ā *Terminator :* a whatsapp bot\n\nš *URL :* https://github.com/Tanmay-Tiaricyber/terminator
`.trim()) // repository
handler.help = ['terminator']
handler.tags = ['info']
handler.command = /^terminator|repo$/i

module.exports = handler
