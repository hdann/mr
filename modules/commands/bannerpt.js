module.exports.config = {
	name: "bannerpt",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Raiku",
	description: "ID nhân vật | Tên | Chữ Ký | Facebook",
	commandCategory: "Tạo ảnh",
	usages: "",
    cooldowns: 5
};
module.exports.run = async ({ api, event,args }) =>  {
  const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0] || "21";
  const text2 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1] || "";
  const text3 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2] || "";
  const text4 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[3] || "";
    const { loadImage, createCanvas } = require("canvas");
    const fs = require('fs')
    const request = require('request');
    const path = require('path');
    const axios = require('axios');
    const lengthchar = (await axios.get('https://run.mocky.io/v3/540ed05f-57fc-4b63-ac3d-0d1ceb261297')).data
    const Canvas = require('canvas');
    let pathImg = __dirname + `/tad/avatar_1.png`;
    let pathAva = __dirname + `/tad/avatar_2.png`;
    let avtAnime = (
      await axios.get(encodeURI(`${lengthchar[text1 - 1].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
    let background = (await axios.get(encodeURI(`https://imgur.com/Ch778s2.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
     if (!fs.existsSync(__dirname +
      `/tad/UTM Zirkon.ttf`)) {
      let getfon2t = (await axios.get(`https://drive.google.com/u/0/uc?id=1VMny_bN0evCcRHzez8mnZMY1ytGUHzav&export=download`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/UTM Zirkon.ttf`, Buffer.from(getfon2t, "utf-8"));
    };
         if (!fs.existsSync(__dirname +
      `/tad/UTM Alberta Heavy.ttf`)) {
      let getfon3t = (await axios.get(`https://drive.google.com/u/0/uc?id=1gMLv1MEFflLsRGt_hvV1hl_gsp1R4kfZ&export=download`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/UTM Alberta Heavy.ttf`, Buffer.from(getfon3t, "utf-8"));
    };
     let a = await loadImage(pathImg);
    let ab = await loadImage(pathAva);
    let canvas = createCanvas(a.width, a.height);
    let ctx = canvas.getContext("2d");
     ctx.fillStyle = "#e6b030";
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     ctx.drawImage(ab, 1500, -400, 1980, 1980);
     ctx.textAlign = "start";
  Canvas.registerFont(__dirname + `/tad/UTM Zirkon.ttf`, {
    family: "UTM Zirkon"
  });
    ctx.fillStyle = "#33f5f2"
    ctx.font = "370px UTM Zirkon";
    ctx.fillText(text2, 500, 750);
    ctx.textAlign = "start";
  Canvas.registerFont(__dirname + `/tad/UTM Alberta Heavy.ttf`, {
    family: "UTM Alberta Heavy"
  });
    ctx.fillStyle = "#fff"
    ctx.font = "185px UTM Alberta Heavy";
    ctx.fillText(text3, 500, 680);
    ctx.save();
    ctx.textAlign = "end";
    ctx.fillStyle = "#f56236"
    ctx.font = "50px UTM Zirkon";
    ctx.fillText(text4, 2000, 850);
    ctx.textAlign = "start";

    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
     fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `Ảnh Của Bạn Đây`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
 }