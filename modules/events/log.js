module.exports.config = {
  name: "log",
  eventType: ["log:unsubscribe", "log:subscribe", "log:thread-name"],
  version: "1.0.0",
  credits: "Mirai Team",
  description: "Ghi lại thông báo các hoạt đông của bot!",
  envConfig: {
    enable: true
  }
};

module.exports.run = async function ({ api, event, Users, Threads }) {
 const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
   var fullTime = global.client.getTime("fullTime");
  var { threadID, author, logMessageData, logMessageType } = event;
   let threadInfo = await api.getThreadInfo(event.threadID);
  var info = await Threads.getData(threadID);
  let threadName = threadInfo.threadName;
   var { name } = await Users.getData(author);
  const nameUser = global.data.userName.get(event.author) || await Users.getNameUser(event.author);
    var formReport =  `=====「 Nhật Ký Bot 」=====` +
      
                         "\n\n╔{task}" +
                         "\n║Tên Nhóm: " + threadName +
       "\n║Tên người dùng: " + nameUser +
      "\n║UserID: " + event.author +
                         `\n╚ID Nhóm: ${threadID}` +
                        `\n\n    「 ${fullTime} 」`,
        task = "";
    switch (event.logMessageType) {
        
        case "log:subscribe": {
           var { name } = await Users.getData(author);
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = `${name}\n║Đã thêm bot vào một nhóm mới!`;
            break;
        }
        case "log:unsubscribe": {
           var { name } = await Users.getData(author);
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = `${name}\n║Đã kick bot ra khỏi nhóm!`
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}