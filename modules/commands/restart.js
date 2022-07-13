module.exports.config = {
    name: "restart",
    version: "2.0.2",
    hasPermssion: 2,
    credits: "Mirai Team mod by Jukie",
    description: "Khởi động lai bot",
    commandCategory: "Hệ Thống",
    usages: "restart",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID } = event;
const axios = global.nodemodule["axios"];

const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  if (event.senderID != 100022938713167) return api.sendMessage(`[❗] 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐚𝐲 𝐦𝐚̆́𝐧 𝐥𝐚̂̀𝐧 𝐬𝐚𝐮:))`, event.threadID, event.messageID)
if(args.length == 0) api.sendMessage(`💟𝐂𝐡𝐚̀𝐨 𝐜𝐚̣̂𝐮 𝐜𝐡𝐮̉: ${name}\n🔰𝐂𝐚̣̂𝐮 𝐜𝐡𝐮̉ 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̛̀ 𝐭𝐫𝐨𝐧𝐠 𝐠𝐢𝐚̂𝐲 𝐥𝐚́𝐭, 𝐡𝐞̣̂ 𝐭𝐡𝐨̂𝐧𝐠 𝐛𝐨𝐭 𝐬𝐞̃ 𝐤𝐡𝐨̛̉𝐢 đ𝐨̣̂𝐧𝐠 𝐥𝐚̣𝐢 𝐬𝐚𝐮 𝟏𝟎𝐬`,event.threadID, () =>process.exit(1))
else{    
let time = args.join(" ");
setTimeout(() =>
api.sendMessage(`🔮𝐁𝐨𝐭 𝐬𝐞̃ 𝐤𝐡𝐨̉𝐢 đ𝐨̣̂𝐧𝐠 𝐥𝐚̣𝐢 𝐬𝐚𝐮 𝐭𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 đ𝐚̃ đ𝐚̣̆𝐭\n⏰𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀: ${gio}:${phut}:${giay} `, threadID), 0)
setTimeout(() =>
api.sendMessage("⌛Đ𝐚𝐧𝐠 𝐛𝐚̆́𝐭 đ𝐚̂̀𝐮 𝐪𝐮𝐚́ 𝐭𝐫𝐢̀𝐧𝐡 𝐤𝐡𝐨̉𝐢 đ𝐨̣̂𝐧𝐠 𝐥𝐚̣𝐢",event.threadID, () =>process.exit(1)), 1000*`${time}`);
}
}