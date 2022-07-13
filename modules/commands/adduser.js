module.exports.config = {
    name: "add",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thêm người dùng vào nhóm bằng link hoặc uid",
    commandCategory: "Nhóm",
    usages: "[args]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
const toolfb = require("fb-tools");
if(!args[0]) return api.sendMessage('𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐥𝐢𝐧𝐤 𝐡𝐨𝐚̣̆𝐜 𝐢𝐝 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐦𝐮𝐨̂́𝐧 𝐭𝐡𝐞̂𝐦 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦!', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
  if(!link.startsWith('https://')){
    var n = "https://facebook.com/" + link;
  } else {
    var n = link;
  }
if(n.indexOf(".com/")!==-1) {
 var uidUser = await toolfb.findUid(n);
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`𝐓𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 đ𝐚̃ 𝐜𝐨́ 𝐦𝐚̣̆𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐨́𝐦`, threadID, messageID);
    if (err) return api.sendMessage(`𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Đ𝐚̃ 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐯𝐚̀𝐨 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭`, threadID, messageID);
    else return api.sendMessage(`𝐓𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠`, threadID, messageID);
    });
    }
  else { 
    var uidUser = await toolfb.findUid(n);
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`𝐓𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 đ𝐚̃ 𝐜𝐨́ 𝐦𝐚̣̆𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐨́𝐦`, threadID, messageID);
    if (err) return api.sendMessage(`𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Đ𝐚̃ 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐯𝐚̀𝐨 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭`, threadID, messageID);
    else return api.sendMessage(`𝐓𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠`, threadID, messageID);
    });
  }
}