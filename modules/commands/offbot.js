module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "HTHB",
	description: "Tแบฏt Bot.",
	commandCategory: "Hแป Thแปng",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("๐ง๐ต๐ฬฬฃ๐ฐ ๐๐ถ๐ฒฬฃฬ๐ป ๐ง๐ฎฬฬ๐ ๐๐ผ๐ ๐ง๐ต๐ฎฬ๐ป๐ต ๐๐ผฬ๐ป๐ด โ",event.threadID, () =>process.exit(0))