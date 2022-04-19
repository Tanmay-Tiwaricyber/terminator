let handler = async m => m.reply(`
☕ *Terminator :* a whatsapp bot\n\n🔗 *URL :* https://github.com/Tanmay-Tiaricyber/terminator
`.trim()) // repository
handler.help = ['terminator']
handler.tags = ['info']
handler.command = /^terminator|repo$/i

module.exports = handler
