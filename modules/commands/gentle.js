module.exports.config = {
  name: "gentle",
  version: "0.2.7",
  hasPermssion: 0,
  credits: "Viet/Hoang",
  description: "Xem ảnh gái random trên gentle ∆",
  commandCategory: "random-img",
  usages: "gentle",
  cooldowns: 5
};
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api.apidata.repl.co/gentle').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🐬𝐆𝐞𝐧𝐭𝐥𝐞 ∆🐬\n🐬𝐓𝐨̂̉𝐧𝐠 𝐬𝐨̂́ 𝐚̉𝐧𝐡: ${count}`,
            attachment: fs.createReadStream(__dirname + `/cache/gentle.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gentle.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gentle.${ext}`)).on("close", callback);
      })
}