const API = "https://api.lolhuman.xyz/api/photooxy1/smoke?apikey=0a637f457396bf3dcc21243b&text="

module.exports.config = {
    name: "smoke",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "...", 
    description: "tiki",
    commandCategory: "game",
    usages: "TEXT",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("๐ธฤ๐๐ง๐  ๐ค๐ก๐จฬฬ๐ข ๐ญ๐ฬฃ๐จ ๐ก๐ขฬ๐ง๐ก ๐ฬ๐ง๐ก, ๐ฏ๐ฎ๐ข ๐ฅ๐จฬ๐ง๐  ๐๐ก๐จฬฬ ฤ๐จฬฬฃ๐ข๐ธ", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `๐ธ๐๐๐๐'๐ ๐๐๐๐๐๐๐ธ`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`ฤรฃ xแบฃy ra lแปi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};