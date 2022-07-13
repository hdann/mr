const moneydown = 1000; // Số tiền mỗi lần quay
module.exports.config = {
  name: "vongquay",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khoa",
  description: "Vòng quay may mắn :>",
  commandCategory: "Game",
  usages: "",
  cooldowns: 0
};

module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/cache/`;
  if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "vongquay.jpg")) request("https://i.postimg.cc/JnVSNRtm/begin.jpg").pipe(fs.createWriteStream(dirMaterial + "vongquay.jpg"));
}

module.exports.handleReply = async function ({
  event,
  Users,
  api,
  handleReply,
  Currencies }) {
  if (handleReply.type == "reply" && event.body.toLowerCase() == "quay") {
    const axios = require('axios');
    const request = require('request');
    const fs = global.nodemodule["fs-extra"];
    var data = await Currencies.getData(event.senderID);
    var money = data.money;
    if(money < moneydown) return api.sendMessage(`𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ đ𝐮̉ ${moneydown}$ đ𝐞̂̉ 𝐪𝐮𝐚𝐲, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐞𝐨 𝐭𝐡𝐚̂̀𝐲 𝐇𝐮𝐚̂́𝐧 𝐛𝐮̛𝐨̛𝐧 𝐜𝐡𝐚̉𝐢!`, event.threadID, event.messageID);
    var name = await Users.getNameUser(event.senderID);
    var num = Math.floor(Math.random() * 100) + 1;

	axios.get(`https://api-vong-quay-may-man.fudgohdgfh43.repl.co/?number=${num}`).then(res => {
	  let moneyup = res.data.moneyup;
	  if (moneyup !== 0) {
      var item = `${moneyup}$`;
    } else {
		  var allColor = ["vàng", "xanh", "đỏ", "hồng"];
		  var color = allColor[Math.floor(Math.random() * allColor.length)];
		  var item = `cái nịt màu ${color}!`
	  }
	  let callback = function () {
	  Currencies.decreaseMoney(event.senderID, moneydown);
	  Currencies.increaseMoney(event.senderID, moneyup);
	  api.sendMessage({
        body: `Chúc mừng ${name} đã quay được ${item}`,
        attachment: fs.createReadStream(__dirname + `/cache/vongquay2.jpg`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vongquay2.jpg`), event.messageID);
      };
	  request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vongquay2.jpg`)).on("close", callback);
	  });
   };
}

module.exports.run = async function ({
  api,
  event
}) {
  const fs = global.nodemodule["fs-extra"];
  var msg = {
    body: `𝐂𝐡𝐚̀𝐨 𝐦𝐮̛̀𝐧𝐠 đ𝐞̂́𝐧 𝐯𝐨̛́𝐢 𝐯𝐨̀𝐧𝐠 𝐪𝐮𝐚𝐲 𝐦𝐚𝐲 𝐦𝐚̆́𝐧!\n𝐑𝐞𝐩𝐥𝐲 "𝐪𝐮𝐚𝐲" đ𝐞̂̉ 𝐪𝐮𝐚𝐲, 𝐭𝐨̂́𝐧 ${moneydown} 𝐜𝐡𝐨 𝐦𝐨̂̃𝐢 𝐥𝐚̂̀𝐧 𝐪𝐮𝐚𝐲`,
    attachment: fs.createReadStream(__dirname + `/cache/vongquay.jpg`)
  };
  return api.sendMessage(msg, event.threadID, (error, info) => {
    global.client.handleReply.push({
    type: "reply",
    name: this.config.name,
    author: event.senderID,
    messageID: info.messageID
    })
  }) 
}