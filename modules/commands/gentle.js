module.exports.config = {
  name: "gentle",
  version: "0.2.7",
  hasPermssion: 0,
  credits: "Viet/Hoang",
  description: "Xem αΊ£nh gΓ‘i random trΓͺn gentle β",
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
            body: `π¬πππ§π­π₯π βπ¬\nπ¬ππ¨ΜΜπ§π  π¬π¨ΜΜ πΜπ§π‘: ${count}`,
            attachment: fs.createReadStream(__dirname + `/cache/gentle.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gentle.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gentle.${ext}`)).on("close", callback);
      })
}