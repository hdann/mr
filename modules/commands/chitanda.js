module.exports.config = {
  name: "chitanda",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tiadals vแปi api cแปงa Kadeer",
  description: "Vแปฃ tรดi",
  commandCategory: "Random-IMG",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apichitanda.ocvat2810.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `๐ธ๐ฉ๐ผฬฬฃ ๐๐ผฬ๐ถ ๐ป๐ฒฬ ๐บ๐ผฬฃ๐ถ ๐ป๐ด๐ฬ๐ผฬฬ๐ถ ๐ผฬ๐ถ๐ถ๐ถ <3`,
            attachment: fs.createReadStream(__dirname + `/cache/violet.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/violet.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/violet.${ext}`)).on("close", callback);
      })
}