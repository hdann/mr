module.exports.config = {
	name: "ảnh",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Xem ảnh réply",
	commandCategory: "Tiện ích",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage(" 💌 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐀̉𝐧𝐡 💌 \n\n𝟏. 𝐀̉𝐧𝐡 𝐆𝐚́𝐢 💞 \n𝟐. 𝐀̉𝐧𝐡 𝐓𝐫𝐚𝐢 💕\n𝟑. 𝐀̉𝐧𝐡 𝐌𝐨̂𝐧𝐠 🍑\n𝟒. 𝐀̉𝐧𝐡 𝟔 𝐌𝐮́𝐢 😽\n𝟓. 𝐀̉𝐧𝐡 𝐍𝐮𝐝𝐞 🌚\n𝟔. 𝐀̉𝐧𝐡 𝐂𝐨𝐬𝐩𝐥𝐚𝐲 😻\n𝟕. 𝐀̉𝐧𝐡 𝐀𝐧𝐢𝐦𝐞 🦄\n𝟖. 𝐀̉𝐧𝐡 𝐒𝐞𝐱𝐲 🔥\n𝟗. 𝐀̉𝐧𝐡 𝐊𝐚𝐧𝐚 🌸\n𝟏𝟎. 𝐀̉𝐧𝐡 𝐃𝐮́ 🎀\n𝟏𝟏. 𝐀̉𝐧𝐡 𝐇𝐞𝐧𝐭𝐚𝐢 💸\n𝟏𝟐. 𝐀̉𝐧𝐡 𝐉𝐢𝐦𝐦𝐲 💊\n𝟏𝟑. 𝐀̉𝐧𝐡 𝐓𝐰𝐢𝐭𝐭𝐞𝐫 💎\n𝟏𝟒. 𝐀̉𝐧𝐡 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 💦\n𝟏𝟓. 𝐀̉𝐧𝐡 𝐖𝐢𝐛𝐮 🌸\n𝟏𝟔. 𝐀̉𝐧𝐡 𝐋𝐨𝐥𝐢 📌\n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐒𝐓𝐓 𝐚̉𝐧𝐡 𝐜𝐚̂̀𝐧 𝐱𝐞𝐦 𝐧𝐡𝐞́ >", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.data;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "[ 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ] - 𝗔̉𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀ ",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://api-vip.ducdz999.repl.co/gai";
        else if ("2" == a.body)
         var   h = "https://api-vip.ducdz999.repl.co/trai";
        else if ("3" == a.body)
         var   h = "https://api-vip.ducdz999.repl.co/gaiditbu";
        else if ("4" == a.body)
          var  h = "https://api-vip.ducdz999.repl.co/saumui";
        else if ("5" == a.body)
          var  h = "https://api-vip.ducdz999.repl.co/nude";
        else if ("6" == a.body)
          var  h = "https://api-vip.ducdz999.repl.co/cosplay";
        else if ("7" == a.body)
          var  h = "https://api-vip.ducdz999.repl.co/anime";
        else if ("8" == a.body)
          var  h = "https://api-vip.ducdz999.repl.co/gaisexy";
        else if ("9" == a.body)
         var   h = "https://apikanna.khoahoang3.repl.co/";
        else if ("10" == a.body)
         var  h = "https://api-vip.ducdz999.repl.co/gaivuto";
        else if ("11" == a.body)
          var  h = "https://api-vip.ducdz999.repl.co/hentai";
        else if ("12" == a.body)
          var  h = "https://jimmy.ocvat2810.repl.co";
        else if ("13" == a.body)
          var  h = "https://jrt-api.nguyenhaidang.ml/twitter";
        else if ("14" == a.body)
         var   h = "https://jrt-api.nguyenhaidang.ml/instagram";
        else if ("15" == a.body)
         var   h = "https://wibu.ocvat2810.repl.co";
        else if ("16" == a.body)
          var  h = "https://jrt-api.nguyenhaidang.ml/loli";
        return { p, h };
    }
};