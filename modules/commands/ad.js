module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "info admin nรจ",
  commandCategory: "Admin",
  usages: "ad",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://imgur.com/H05Cj9y.jpg",
"https://imgur.com/0TtAqEb.jpg",
"https://imgur.com/OBVbTTG.jpg",
"https://imgur.com/jFlvq5J.jpg",
  ];
	  var callback = () => api.sendMessage({body:`ใคใค๐ธ ๐๐๐๐๐ ๐๐๐ ๐ธ\n
๐ ๐๐ฬ๐ง: ๐๐ ๐ฎ๐ฒ๐ฬฬ๐ง ๐๐ข๐ฬ๐ง ๐๐ฬฃ๐ง๐ก
โ ๐๐ฎ๐จฬฬ๐ข: 18+
๐ค ๐๐ข๐จฬฬ๐ข ๐๐ขฬ๐ง๐ก: ๐ก๐ฎ๐บ
๐ซ ๐๐ก๐ข๐ฬฬ๐ฎ ๐๐๐จ ๐๐ฬ๐ง ๐ง๐ฬฃฬ๐ง๐ : ๐ญ๐บ๐ณ ๐ ๐ฑ๐ฎ๐ธ๐ด
๐ ๐๐จฬฬ๐ข ๐ช๐ฎ๐๐ง ๐ก๐ฬฃฬ: ฤ๐ฬ ๐๐จฬ ๐๐จฬฬฃ
๐ ๐๐ฎ๐ฬ ๐ช๐ฎ๐ฬ๐ง: ๐๐ฬ๐ข ๐๐ก๐จฬ๐ง๐ 
๐ซ ๐๐ฎ: ๐๐ถ๐ฒฬฬ๐ ๐ป๐ฎฬฬ๐ ๐ฐ๐ผฬ๐บ, ๐ฑ๐ฎ๐บ๐ฑ๐ฎ๐ป๐ด
๐ธ ๐๐ขฬ๐ง๐ก ๐๐ฬ๐๐ก: ๐๐ต๐ผฬ ๐ฑ๐ฎฬฃ๐ถ
๐ ๐๐จฬฬ ๐ญ๐ก๐ขฬ๐๐ก: ๐๐ต๐ผฬ๐ถ ๐ด๐ฎ๐บ๐ฒ, ๐๐ฒ๐บ ๐ฝ๐ต๐ถ๐บ ๐ญ๐ด+ ๐ฏ๐น๐ฎ๐ฏ๐น๐ฎ, ๐ฎฬ๐ป, ๐ป๐ด๐ฬ
๐ป๐๐จ๐ง๐ญ๐๐๐ญ๐ป
โ ๐ฆ๐๐ง & ๐ญ๐ฎ๐น๐ผ: ๐ฌ๐ฏ๐ฏ๐ด๐ณ.๐ฏ๐ต.๐ต๐ฑ๐ฐ
๐ ๐๐๐๐๐๐จ๐จ๐ค: https://www.facebook.com/MYNnetwork.info/ ๐บ`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };