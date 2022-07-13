module.exports.config = {
  name: "instagram",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thiệu Trung Kiên",
  description: "Xem thông tin instagram || Thiệu Trung Kiên",
  commandCategory: "Tiện Ích",
  usages: "[username]",
  cooldowns: 5
};

module.exports.run = async ({
  api,
  event,
  args
}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var tip = args.join(" ");
  if (!tip) return api.sendMessage(`Nhập username`, event.threadID, event.messageID);
  else {
    axios.get(`https://api.popcat.xyz/instagram?user=${encodeURIComponent(tip)}`).then(res => {
      let username = res.data.username,
        full_name = res.data.full_name,
        biography = res.data.biography,
        posts = res.data.posts,
        reels = res.data.reels,
        followers = res.data.followers,
        following = res.data.following,
        private = res.data.private ? `${res.data.private}` : "Không"
        verified = res.data.verified ? `${res.data.verified}` : "Không"
      var profile_pic = res.data.profile_pic;
      let callback = function () {
        api.sendMessage({
          body: `===「 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 」===\n\n» 𝗧𝗲̂𝗻: ${full_name}\n» 𝗕𝗶𝗼: ${biography}\n» 𝗦𝗼̂́ 𝗯𝗮̀𝗶 𝘃𝗶𝗲̂́𝘁: ${posts}\n» 𝗩𝗶𝗱𝗲𝗼 𝘀𝘁𝗼𝗿𝘆: ${reels}\n» 𝗙𝗼𝗹𝗹𝗼𝘄: ${followers}\n» 𝗛𝗶𝗲̣̂𝗻 𝘁𝗵𝗲𝗼 𝗱𝗼̃𝗶: ${following}\n» 𝗥𝗶𝗲̂𝗻𝗴 𝘁𝘂̛: ${private}\n» 𝗫𝗮́𝗰 𝗺𝗶𝗻𝗵: ${verified}`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(profile_pic)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}