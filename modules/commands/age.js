module.exports.config = {
	name: "age",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Máy tính tuổi có ảnh",
	commandCategory: "Tiện ích",
	usages: "[DD/MM/YYYY]"
	+ "\nChi tiết:"
	+ "\n {p}{n} 12/03/2004 {xem tuổi của bạn}",
	cooldowns: 5
};


module.exports. run = async function({ api, event, args }) {
  const axios = require("axios");
  const date = (args[0] || "").split('/');
  if (date.length < 3) return api.sendMessage('𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐧𝐠𝐚̀𝐲 𝐭𝐡𝐚́𝐧𝐠 𝐧𝐚̆𝐦 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂ 𝐭𝐡𝐞𝐨 đ𝐢̣𝐧𝐡 𝐝𝐚̣𝐧𝐠 𝐃𝐃/𝐌𝐌/𝐘𝐘𝐘𝐘', event.threadID, event.messageID);
  axios.get('https://goatbot.tk/taoanhdep/age', {
    params: {
      day: date[0],
      month: date[1],
      year: date[2],
      apikey: "xksatvansyvahsh"
    },
    responseType: "stream"
  })
  .then(response => {
    api.sendMessage({
      attachment: response.data
    }, event.threadID, event.messageID);
  })
  .catch(error => {
    if ((error).response) error.response.data.on("data", function(e) {
      const err = JSON.parse(e);
      api.sendMessage(`Đã xảy ra lỗi ${err.name}: ${err.message}`, event.threadID, event.messageID);
    });
    else api.sendMessage(`Đã xảy ra lỗi ${error.name}: ${error.message}`, event.threadID, event.messageID);
  });
};