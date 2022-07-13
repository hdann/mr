module.exports.config = {
 name: "genshin",
 version: "1.0.0", 
 hasPermssion: 0,
 credits: "JRT",
 description: "Tỉ lệ ra nhân vật 5 sao trong genshin",
 commandCategory: "Game", 
 usages: "genshin", 
 cooldowns: 0
};
module.exports.run = async function({ api, event, Users }) {
    var tle = Math.floor(Math.random() * 101);
    var name = (await Users.getData(event.senderID)).name
    const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    axios.get('https://jrt-api.jrt-official.repl.co/genshin').then(res => {
		let callback = function () {
					api.sendMessage({
						body : `𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 ${name} đ𝐚̃ 𝐫𝐚 𝐧𝐡𝐚̂𝐧 𝐯𝐚̣̂𝐭 𝐧𝐚̀𝐲\n 𝐓𝐢̉ 𝐥𝐞̣̂ 𝐫𝐚 𝐧𝐡𝐚̂𝐧 𝐯𝐚̣̂𝐭 𝐧𝐚̀𝐲 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐥𝐚̀: ${tle}%`,attachment: fs.createReadStream(__dirname + '/cache/genshin.mp4')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/genshin.mp4'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/genshin.mp4')).on("close", callback);
			})
}