let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis Ooredoo [083840600765]
│ • Axis [083856051043]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [083856051043]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
