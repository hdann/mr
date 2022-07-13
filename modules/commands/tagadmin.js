module.exports.config = {
  name: "tagadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ZyrosGenZ, ManhG Fix",//đụ thêm vào by hanaku -_-
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ", // và chuyển về cho admin hoặc người được tag -_-
  commandCategory: "GỌI ADMIN",
  usages: "[on/off]",
  cooldowns: 3,
  dependencies: {}
};
module.exports.handleEvent = async function ({ api, Users, event, Threads }) {
  try{
  const { senderID, threadID, messageID, mentions, body } = event;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["tagadmin"] !== "undefined" && thread["tagadmin"] == false) return;
const z = (await Users.getData(senderID)).name || "không thể lấy tên";
const a = (await Threads.getInfo(event.threadID)).name || "Không Thể Get Tên"
    if(event.sender == api.getCurrentUserID()) return
  const listAdmin = global.config.ADMINBOT;
  const mention = Object.keys(mentions);
if(listAdmin.includes(`${mention}`)){
  var msg = ["Admin: Chan qua phai lam sao phai lam sao"]; // khúc này tự điền text vào ai rãnh đâu làm chi tiết
         api.sendMessage({ body: msg[Math.floor(Math.random() * msg.length)] }, threadID, messageID);
        api.sendMessage(`User tag: ${z}, \nNội Dung: ${body}, \n Box ${a}`, mention) //dòng này để gửi inb về admin muốn đụ thêm cái gì thì chỉnh ở trong ``
}
} catch(e){}};

module.exports.languages = {
  "vi": { "on": "Bật", "off": "Tắt", "successText": "tagadmin thành công", },
  "en": { "on": "on", "off": "off", "successText": "success!", }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["tagadmin"] == "undefined" || data["tagadmin"] == false) data["tagadmin"] = true;
  else data["tagadmin"] = false;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["tagadmin"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
}