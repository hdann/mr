const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "send",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "TruongMini",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];
const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/snoti`+`.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const { threadID, messageID, senderID, body } = event;
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss ▸ D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
	let today = new Date();
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `========= [ 𝐓𝐑𝐀̉ 𝐋𝐎̛̀𝐈 ] =========\n⇨ 𝐓𝐈𝐌𝐄: ${thu} \n ▸${gio}\n⇨ 𝐓𝐔̛̀ 𝐍𝐆𝐔̛𝐎̛̀𝐈 𝐃𝐔̀𝐍𝐆: ${name} \n⇨ 𝐁𝐎𝐗: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n⇨ 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${body}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `========= [ 𝐓𝐑𝐀̉ 𝐋𝐎̛̀𝐈 ] =========\n⇨𝐓𝐈𝐌𝐄: ${thu} \n ▸${gio}\n⇨ 𝐓𝐔̛̀ 𝐍𝐆𝐔̛𝐎̛̀𝐈 𝐃𝐔̀𝐍𝐆: ${name}\n⇨ 𝐁𝐎𝐗:${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n⇨ 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${body}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `========= [ 𝐓𝐑𝐀̉ 𝐋𝐎̛̀𝐈 ] =========\n⇨ 𝐓𝐈𝐌𝐄: ${thu} \n ▸${gio}\n⇨ 𝐓𝐔̛̀ 𝐀𝐃𝐌𝐈𝐍: ${name}\n⇨ 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${body}\n\n『 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐚𝐝𝐦𝐢𝐧 』`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `========= [ 𝐓𝐑𝐀̉ 𝐋𝐎̛̀𝐈 ] ========\n⇨ 𝐓𝐈𝐌𝐄: ${thu} \n ▸${gio}\n⇨ 𝐀𝐃𝐌𝐈𝐍: ${name}\n⇨ 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${body}\n\n『 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐚𝐝𝐦𝐢𝐧 』`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const { threadID, messageID, senderID, messageReply } = event;
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
	let today = new Date();
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `========= [ 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 ] =========\n⇨ 𝐓𝐈𝐌𝐄: ${thu} \n${gio}\n⇨ 𝐀𝐃𝐌𝐈𝐍: ${await Users.getNameUser(senderID)} \n⇨ 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${args.join(" ")}\n\n『 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐚𝐝𝐦𝐢𝐧 』`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `========= [ 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 ] =========\n⇨ 𝐓𝐈𝐌𝐄: ${thu} \n ▸${gio}\n⇨ 𝐓𝐔̛̀ 𝐀𝐃𝐌𝐈𝐍: ${await Users.getNameUser(senderID)}\n⇨ 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${args.join(" ")}\n\n『 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐚𝐝𝐦𝐢𝐧 』`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Send to ${can} thread, not send to ${canNot} thread`, threadID);
}