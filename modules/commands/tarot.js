module.exports.config = {
  name: "tarot",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Raiku ?",
  description: "",
  commandCategory: "other",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios")
  const c = (await axios.get('https://run.mocky.io/v3/895e7fbe-806f-4c14-95de-44801d207514')).data
if(args[0] > c.length) return api.sendMessage('Không Thể Vượt Quá Số Bài Đang Có Trong Data', event.threađID)
  if(!args[0]){
  var k = Math.floor(Math.random() * c.length)
} else {
    var k = args[0]
}
  const x = c[k]
  const t = (await axios.get(`${x.image}`, {
      responseType: "stream"
    })).data;
  const msg = ({
      body: `▂ ▄ ▅ ▇ █⚌⚌𝐓𝐀𝐑𝐎𝐓⚌⚌█ ▇ ▆ ▄ ▂\n→𝐍𝐀𝐌𝐄: ${x.name}\n→𝐒𝐔𝐈𝐓𝐄: ${x.suite}\n→𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍: ${x.vi.description}\n→𝐈𝐍𝐓𝐄𝐑𝐏𝐑𝐄𝐓𝐀𝐓𝐈𝐎𝐍: ${x.vi.interpretation}\n→𝐑𝐄𝐕𝐄𝐑𝐒𝐄𝐃: ${x.vi.reversed}\n[⚌⚌⚌⚌⚌⚌𝐁𝐀𝐒𝐈𝐋⚌⚌⚌⚌⚌⚌]`,
      attachment: t
  })
  return api.sendMessage(msg, event.threadID, event.messageID)
}