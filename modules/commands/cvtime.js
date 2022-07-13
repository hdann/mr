const fbname = "Hanaku.user";
const githubname = "HanakuUwU";
module.exports.config = {
  name:"cvtime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai-Team",
  description: "Random ảnh theo api - uptime",
  commandCategory: "Hệ Thống",
  cooldowns: 3,
  dependencies: {
    "pidusage": ""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args }) => {
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
    const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/cache/UTM-Avos.ttf`)) {
        let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1xm8yvHlOBaeWLxKMBR5zF2XIF2s_fX12&export=download`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/cache/UTM-Avos.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/cache/phenomicons.ttf`)) {
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=15-pYOaYRAlz5bbOrP0nQ9w_qVCaz9DBA&export=download`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/cache/phenomicons.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/cache/CaviarDreamss.ttf`)) {
      let getfont3 = (await axios.get(`https://drive.google.com/u/0/uc?id=1UEnH_6zkrvnckiys3AquyH88dwuEYUgV&export=download`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/cache/CaviarDreamss.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   const { loadImage, createCanvas, registerFont } = require("canvas");
  
  let k = args[0];
   if(args[0] == "list"){
    const alime = (await axios.get('https://run.mocky.io/v3/540ed05f-57fc-4b63-ac3d-0d1ceb261297')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
   }
  if(!k){
  var id = Math.floor(Math.random() * 848) +1
  } else {
    var id = k
  }
    const lengthchar = (await axios.get('https://run.mocky.io/v3/540ed05f-57fc-4b63-ac3d-0d1ceb261297')).data
    console.log(lengthchar.length)
  const Canvas = require('canvas');
    let pathImg = __dirname + `/cache/avatar_1111231.png`;
    let pathAva = __dirname + `/cache/avatar_3dsc11.png`;
    let background = (await axios.get(encodeURI(`https://imgur.com/x5JpRYu.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id - 1].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1
  
  
let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id - 1].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(l1, -200, -200, 1200, 1200);
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     registerFont(__dirname + `/cache/phenomicons.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = lengthchar[id - 1].colorBg;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "70px phenomicon";
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillText(global.config.BOTNAME, 900, 340);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/cache/UTM-Avos.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "60px UTM";
    ctx.fillStyle = "#000000";
    ctx.fillText(`${z_1} : ${x_1} : ${y_1} `, 920, 440);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/cache/CaviarDreamss.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "55px time";
    ctx.fillText("• " + "manhmyn.info", 930, 540)
    ctx.fillText("• " + "Nguyễn Mạnh", 930, 610)
    ctx.fillText("• " + "MYNnetwork.info", 930, 690)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
   fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `===「 𝐔𝐏𝐓𝐈𝐌𝐄 𝐑𝐎𝐁𝐎𝐓 」===\n\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐁𝐨𝐭 𝐡𝐢𝐞̣̂𝐧 𝐨𝐧𝐥𝐢𝐧𝐞 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲 👾\n──────────────\n❯ 𝐓𝐨̂̉𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: ${global.data.allUserID.length}\n❯ 𝐓𝐨̂̉𝐧𝐠 𝐍𝐡𝐨́𝐦: ${global.data.allThreadID.length}\n❯ 𝐂𝐩𝐮 𝐡𝐢𝐞̣̂𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${pidusage.cpu.toFixed(1)}%\n❯ 𝐑𝐚𝐦 𝐡𝐢𝐞̣̂𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${byte2mb(pidusage.memory)}\n❯ 𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}𝐦𝐬\n❯ 𝐈𝐃 𝐍𝐡𝐚̂𝐧 𝐕𝐚̣̂𝐭: ${id}`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
}
