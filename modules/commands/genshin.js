module.exports.config = {
 name: "genshin",
 version: "1.0.0", 
 hasPermssion: 0,
 credits: "JRT",
 description: "Tแป lแป ra nhรขn vแบญt 5 sao trong genshin",
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
						body : `๐๐ก๐ฎฬ๐ ๐ฆ๐ฎฬฬ๐ง๐  ${name} ฤ๐ฬ ๐ซ๐ ๐ง๐ก๐ฬ๐ง ๐ฏ๐ฬฃฬ๐ญ ๐ง๐ฬ๐ฒ\n ๐๐ขฬ ๐ฅ๐ฬฃฬ ๐ซ๐ ๐ง๐ก๐ฬ๐ง ๐ฏ๐ฬฃฬ๐ญ ๐ง๐ฬ๐ฒ ๐๐ฎฬ๐ ๐๐ฬฃ๐ง ๐ฅ๐ฬ: ${tle}%`,attachment: fs.createReadStream(__dirname + '/cache/genshin.mp4')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/genshin.mp4'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/genshin.mp4')).on("close", callback);
			})
}