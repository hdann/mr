//https://imgur.com/lBahSpC.jpg
module.exports.config = {
  name: "autods",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "siu siu",
  description: "phọt mẹ cứt :v",
  commandCategory: "edit-img",
  usages: "[TEAM1] | [TEAM 2]",
  cooldowns: 10
};
module.exports.wrapText = (ctx, text, maxWidth) => {
  return new Promise((resolve) => {
    if (ctx.measureText(text).width < maxWidth) return resolve([text]);
    if (ctx.measureText("W").width > maxWidth) return resolve(null);
    const words = text.split(" ");
    const lines = [];
    let line = "";
    while (words.length > 0) {
      let split = false;
      while (ctx.measureText(words[0]).width >= maxWidth) {
        const temp = words[0];
        words[0] = temp.slice(0, -1);
        if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
        else {
          split = true;
          words.splice(1, 0, temp.slice(-1));
        }
      }
      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
        line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = "";
      }
      if (words.length === 0) lines.push(line.trim());
    }
    return resolve(lines);
  });
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const Canvas = global.nodemodule["canvas"];
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + `/cache/hehuoc.png`;
  const text = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g, "|").replace(/\|\s+/g,"|").replace(/\|\s+/g, "|").split("|");
  let getImage = (
    await axios.get(encodeURI(`https://imgur.com/lBahSpC.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getImage, "utf-8"));
if(!fs.existsSync(__dirname+'/cache/UTUTM Azuki.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1-1hjk62bbZY2d22qAadxIUpqOBE2umrF&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/UTUTM Azuki.ttf", Buffer.from(getfont, "utf-8"));
    };
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  Canvas.registerFont(__dirname+`/cache/UTUTM Azuki.ttf`, {
        family: "UTUTM Azuki"
    });
  ctx.font = "30px UTUTM Azuki";
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  const line = await this.wrapText(ctx, text[0], 500);
  const lines = await this.wrapText(ctx, text[1], 500);
  const line1 = await this.wrapText(ctx, text[2], 500);
  const line1s = await this.wrapText(ctx, text[3], 500);
  const line2= await this.wrapText(ctx, text[4], 500);
  const line2s = await this.wrapText(ctx, text[5], 500);
  const line3 = await this.wrapText(ctx, text[6], 500);
  const line3s = await this.wrapText(ctx, text[7], 500);
  const line4 = await this.wrapText(ctx, text[8], 500);
  const line4s = await this.wrapText(ctx, text[9], 500);
  const line5 = await this.wrapText(ctx, text[10], 500);
  const line5s = await this.wrapText(ctx, text[11], 500);
  const line6 = await this.wrapText(ctx, text[12], 500);
  const line6s = await this.wrapText(ctx, text[13], 500);
  const line7 = await this.wrapText(ctx, text[14], 500);
  const line7s = await this.wrapText(ctx, text[15], 500);
  const line8 = await this.wrapText(ctx, text[16], 500);
  const line8s = await this.wrapText(ctx, text[17], 500);
  const line9 = await this.wrapText(ctx, text[18], 500);
  const line9s = await this.wrapText(ctx, text[19], 500);
  const line10 = await this.wrapText(ctx, text[20], 500);
  const line10s = await this.wrapText(ctx, text[21], 500);
  const line11 = await this.wrapText(ctx, text[22], 500);
  const line11s = await this.wrapText(ctx, text[23], 500);
  ctx.fillText(line.join("\n"), 1090, 315)
  ctx.fillText(lines.join("\n"), 1090, 370)
  ctx.fillText(line1.join("\n"), 1090, 425)
  ctx.fillText(line1s.join("\n"), 1090, 475)
  ctx.fillText(line2.join("\n"), 1090, 530)
  ctx.fillText(line2s.join("\n"), 1090, 580)
  ctx.fillText(line3.join("\n"), 1090, 635)
  ctx.fillText(line3s.join("\n"), 1090, 690)
  ctx.fillText(line4.join("\n"), 1090, 740)
  ctx.fillText(line4s.join("\n"), 1090, 795)
  ctx.fillText(line5.join("\n"), 1090, 850)
  ctx.fillText(line5s.join("\n"), 1090, 900)
  ctx.fillText(line6.join("\n"), 1620, 315)
  ctx.fillText(line6s.join("\n"), 1620, 370)
  ctx.fillText(line7.join("\n"), 1620, 425)
  ctx.fillText(line7s.join("\n"), 1620, 475)
  ctx.fillText(line8.join("\n"), 1620, 530)
  ctx.fillText(line8s.join("\n"), 1620, 580)
  ctx.fillText(line9.join("\n"), 1620, 635)
  ctx.fillText(line9s.join("\n"), 1620, 690)
  ctx.fillText(line10.join("\n"), 1620, 740)
  ctx.fillText(line10s.join("\n"), 1620, 790)
  ctx.fillText(line11.join("\n"), 1620, 850)
  ctx.fillText(line11s.join("\n"), 1620, 900)
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};