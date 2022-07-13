module.exports.config = {
	name: " ",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DũngUwU",
	description: "nothing",
	commandCategory: "Dành cho người dùng",
	usages: "",
	cooldowns: 5
};

module.exports.run = async function({ api, event }) {
       let dny = ["𝐗𝐢𝐧 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐁𝐚̣𝐧 𝐇𝐚̃𝐲 𝐍𝐡𝐚̣̂𝐩 𝐋𝐞̣̂𝐧𝐡 !"];
       api.sendMessage('[𝐁𝐀𝐒𝐈𝐋] => ' + dny[Math.floor(Math.random()*dny.length)],event.threadID,event.messageID);
}