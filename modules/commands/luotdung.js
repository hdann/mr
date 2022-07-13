module.exports.config = {
  name: "luotdung",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nam",
  description: "Lượt dùng bot",
  usages: "add/del/set || người dùng pay/buy",
  commandCategory: "Tiện ích",
  cooldowns: 5
};

const fs = require("fs");
const path = __dirname + '/../../includes/handle/usages.json';
module.exports.onLoad = () => {
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
}

module.exports.run = async ({ event, api, args, Users, permssion }) => {
  const { threadID, messageID, senderID } = event;
  var usages = JSON.parse(require("fs").readFileSync(__dirname + `/../../includes/handle/usages.json`));
if(event.type == "message_reply") { id = event.messageReply.senderID }
  else id = senderID;
  const moment = require("moment-timezone"); 
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  let name = await Users.getNameUser(id)
  const data = await api.getThreadInfo(threadID);
  var num = parseInt(args[1]);
  let ld = JSON.parse(fs.readFileSync(path));
  const nmdl = this.config.name
  const cre = this.config.credits
  const prefix = config.PREFIX
   if (args.length == 0) {
    return api.sendMessage(`--------- 𝐋𝐮̛𝐨̛̣𝐭 𝐃𝐮̀𝐧𝐠 ---------\n\n${prefix}${nmdl} 𝐩𝐚𝐲 + 𝐬𝐨̂́ => 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐥𝐮̛𝐨̛̣𝐭 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭 𝐜𝐮̉𝐚 𝐦𝐢̀𝐧𝐡 𝐜𝐡𝐨 𝐧𝐠𝐮̛𝐨̛̀𝐢 đ𝐮̛𝐨̛̣𝐜 𝐫𝐞𝐩𝐥𝐲\n\n${prefix}${nmdl} 𝐛𝐮𝐲 => 𝐦𝐮𝐚 𝐥𝐮̛𝐨̛̣𝐭 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭\n\n ${prefix}${nmdl} 𝐜/𝐜𝐡𝐞𝐜𝐤 => 𝐱𝐞𝐦 𝐬𝐨̂́ 𝐥𝐮̛𝐨̛̣𝐭 𝐛𝐚̉𝐧 𝐭𝐡𝐚̂𝐧, 𝐫𝐞𝐩𝐥𝐲 𝐱𝐞𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 đ𝐨́\n\n ${prefix}${nmdl} 𝐜/𝐜𝐡𝐞𝐜𝐤 + 𝐚/𝐚𝐥𝐥 => 𝐱𝐞𝐦 𝐬𝐨̂́ 𝐥𝐮̛𝐨̛̣𝐭 𝐭𝐚̂́𝐭 𝐜𝐚̉ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧\n\n===${cre}===`, threadID, messageID);
  }if("Nam"!=cre)return;
   if (args[0] == "set") {
    if (permssion < 2) {
      return api.sendMessage("Bạn là thành viên", threadID, messageID);
                       }
    if (isNaN(args[1])) {
      return api.sendMessage("Phải là con số", threadID, messageID);
    }
return api.sendMessage(`Đã thay đổi số lượt dùng bot của ${name} thành ${num}`, threadID, async (error, info) => {
         ld[id] = { usages: num }
fs.writeFileSync(path, JSON.stringify(ld));
    }, messageID);
  }
  if (args[0] == "add") {
    if (permssion < 2) {
      return api.sendMessage("Bạn là thành viên", threadID, messageID);
    }
    if (isNaN(args[1])) {
      return api.sendMessage("Phải là con số", threadID, messageID);
    }
    else if (num < 0) {
      return api.sendMessage("Số lượt cần cộng phải lớn hơn 0", threadID, messageID);
    }
return api.sendMessage(`Đã cộng thêm ${num} lượt dùng bot cho ${name}`, threadID, async (error, info) => {
         ld[id] = { usages: parseInt(usages[id].usages) + parseInt(num) }
fs.writeFileSync(path, JSON.stringify(ld));
                }, messageID);
  }
  if (args[0] == "del") {
    if (permssion < 2) {
      return api.sendMessage("Bạn là thành viên", threadID, messageID);
    }
    if (isNaN(args[1])) {
      return api.sendMessage("Phải là con số", threadID, messageID);
    }
    else if (num < 0) {
      return api.sendMessage("Số lượt cần trừ phải lớn hơn 0", threadID, messageID);
    }
return api.sendMessage(`Đã cộng thêm ${num} lượt dùng bot cho ${name}`, threadID, async (error, info) => {
         ld[id] = { usages: parseInt(usages[id].usages) - parseInt(num) }
fs.writeFileSync(path, JSON.stringify(ld));
                }, messageID);
  }
  if (args[0] == "pay") {
    if (event.type == "message_reply") { id = event.messageReply.senderID }
    if (num > usages[senderID].usages || isNaN(args[1])) {
     return api.sendMessage(`Số lượt cần chuyển phải là 1 con số và không được lớn hơn ${usages[senderID].usages}`, threadID, messageID);
    }
    else if (senderID == id) {
      return api.sendMessage(`Bạn phải tag hoặc reply tin nhắn`, threadID, messageID);
    }
    let name = await Users.getNameUser(id)
    ld[id] = { usages: parseInt(usages[id].usages) + parseInt(num) }
fs.writeFileSync(path, JSON.stringify(ld));
 api.sendMessage(`Đã chuyển cho ${name} ${num} lượt dùng bot`, threadID, async () => {
  ld[senderID] = { usages: parseInt(usages[senderID].usages) - parseInt(num) }
fs.writeFileSync(path, JSON.stringify(ld));
    }, messageID);
	}
  if (args[0] == "check" || args[0] == "c") {
     if (args[1] == "all" || args[1] == "a") {
      let storage = [], sl = [];
      for (const value of data.userInfo) storage.push({ "id": value.id, "name": value.name });
      let getDay = require("moment-timezone").tz("Asia/Ho_Chi_Minh").day();
      for (const user of storage) {
        if (!(user.id in usages)) usages[user.id] = {
          usages: 99,
          diemdanh: 0
        }
        sl.push({ "name": user.name, "sl": (typeof usages[user.id].usages == "undefined") ? 0 : usages[user.id].usages, "uid": user.id });
      }
      sl.sort((a, b) => {
        if (a.sl > b.sl) return -1;
        if (a.sl < b.sl) return 1;
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        a.name.localeCompare(b.name, undefined, { numeric: true });
      });
      msg = "===𝐊𝐈𝐄̂̉𝐌 𝐓𝐑𝐀 𝐋𝐔̛𝐎̛̣𝐓 𝐃𝐔̀𝐍𝐆===\n";
      let countsl = 0
      for (let e of sl) {
        msg += `\n${countsl += 1}. ${e.name} - ${e.sl} lượt.`
      }
      msg += `\n\n===${timeNow}===`;
      require("fs").writeFileSync(__dirname + `/../../includes/handle/usages.json`, JSON.stringify(usages, null, 4));
      return api.sendMessage(msg, threadID);
    }
    api.sendMessage(`${name} còn ${usages[id].usages} lượt dùng bot`, threadID, messageID);
    }
  if (args[0] == "buy") {
  	return api.sendMessage(`Nhập số lượt cần mua ( 1tr $ = 100 lượt ) `,threadID, (error, info) => {
        global.client.handleReply.push({
            name: nmdl,
            messageID: info.messageID,
            author: senderID,
            type: "a",
        })
    }, messageID);
  }
}


module.exports.handleReply = async function ({ event, api, Currencies, handleReply }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    var usages = JSON.parse(require("fs").readFileSync(__dirname + `/../../includes/handle/usages.json`));
    const userMoney = (await Currencies.getData(senderID)).money;
    const input = parseInt(body);
    const money = parseInt(body) * 10000;
    let ld = JSON.parse(fs.readFileSync(path));
  switch (type) {
        case "a": {
            switch (body) {
                case body: { // tính làm thêm case mua bằng xp nữa :D
                  if (input > userMoney || isNaN(body) || userMoney < money) {
     return api.sendMessage(
       `Bạn không đủ money để giao dịch hoặc số lượt không phải là con số`, threadID, messageID);
      }
                  else if (input <= 0) {
     return api.sendMessage(
       `Số lượt cần mua phải lớn hơn 0`, threadID, messageID);
      }
                 else { await Currencies.decreaseMoney(senderID, parseInt(money));
ld[senderID] = { usages: parseInt(usages[senderID].usages) + parseInt(input) }
fs.writeFileSync(path, JSON.stringify(ld));
                    return api.sendMessage(
                        `Mua thành công ${(input.toLocaleString(`en-US`))} lượt dùng\n - ${(money.toLocaleString(`en-US`))} $`
                  , threadID, messageID);
                }
              }
            }
        }
     }
   }