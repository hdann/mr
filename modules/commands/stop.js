module.exports.config = {
	name: "stop",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Tao Im Đây OK ",event.threadID, () =>process.exit(1))