const fs = require("fs");
module.exports.config = {
    name: "boctham",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "β‘D-Jukie mod by Trun", //Code working cα»§a diα»n , trun mod 
    description: "π΄ππ¨ΜΜπ ππ‘πΜπ¦ π―π¨ΜΜπ’ ππΜc π π¨Μπ’ πππ€ πππ€ πππ€ ππππ€ ππππ€ ππππ€π",
    commandCategory: "Game",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 0 
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "baolixi1.png")) request("https://i.imgur.com/luFyD1C.jpg").pipe(fs.createWriteStream(dirMaterial + "baolixi1.png"));
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins khi bα»c thΔm
var a = Math.floor(Math.random() * 8000) + 8000; //random coins khi bα»c gΓ³i 10k
var b = Math.floor(Math.random() * 8000) + 50000; //random coins khi bα»c gΓ³i 20k
var c = Math.floor(Math.random() * 80001) + 20000; //random coins khi bα»c gΓ³i 50k
var d = Math.floor(Math.random() * 8000) + 98000; //random coins khi bα»c gΓ³i 100k
var e = Math.floor(Math.random() * 8000) + 500000; //random coins khi bα»c gΓ³i 200k
var f = Math.floor(Math.random() * 800001) + 200000; //random coins khi bα»c gΓ³i 500k
//random sα» phαΊ§n trΔm may mαΊ―n cα»§a nΔm 2022
var g = ['ππ%', 'ππ%', 'ππ%', 'ππ%', 'ππ%','ππ%','ππ%','ππ%','ππ%','πππ%','πππ%']; //random % may mαΊ―n
var phantram1 = g[Math.floor(Math.random() * g.length)];   

var h = ['ππ%', 'ππ%', 'ππ%', 'ππ%', 'ππ%','ππ%','ππ%','ππ%','ππ%','πππ%','πππ%']; //random % may mαΊ―n
var phantram2 = h[Math.floor(Math.random() * h.length)]; 

var k = ['ππ%', 'ππ%', 'ππ%', 'ππ%', 'ππ%','ππ%','ππ%','ππ%','ππ%','πππ%','πππ%']; //random % may mαΊ―n
var phantram3 = k[Math.floor(Math.random() * k.length)];

var i = ['ππ%', 'ππ%', 'ππ%', 'ππ%', 'ππ%','ππ%','ππ%','ππ%','ππ%','πππ%','πππ%']; //random % may mαΊ―n
var phantram4 = i[Math.floor(Math.random() * i.length)];   

var t = ['ππ%', 'ππ%', 'ππ%', 'ππ%', 'ππ%','ππ%','ππ%','ππ%','ππ%','πππ%','πππ%']; //random % may mαΊ―n
var phantram5 = t[Math.floor(Math.random() * t.length)]; 

var v = ['ππ%', 'ππ%', 'ππ%', 'ππ%', 'ππ%','ππ%','ππ%','ππ%','ππ%','πππ%','πππ%']; //random % may mαΊ―n
var phamtram6 = v[Math.floor(Math.random() * v.length)]; 
var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `β‘οΈ ππ¨ΜΜπ’ π π¨Μπ’ πππ€ ππΜ£π§ ΔπΜ π§π‘πΜ£Μπ§ Δπ π¬π¨ΜΜ π­π’πΜΜπ§ π₯πΜ  ${a}π―π§π π―πΜ π©π‘πΜΜπ§ π­π«πΜπ¦ π¦ππ² π¦πΜΜπ§ ππ?Μπ π§πΜπ¦ ππππ ππ?Μπ ππΜ£π§ π₯πΜ : ${phantram1}`; Currencies.increaseMoney(event.senderID, a); break;            
                case "2": msg = `β‘οΈππ¨ΜΜπ’ π π¨Μπ’ πππ€ ππΜ£π§ ΔπΜ π§π‘πΜ£Μπ§ Δπ π¬π¨ΜΜ π­π’πΜΜπ§ π₯πΜ ${b}π―π§π π―πΜ π©π‘πΜΜπ§ π­π«πΜπ¦ π¦ππ² π¦πΜΜπ§ ππ?Μπ π§πΜπ¦ ππππ ππ?Μπ ππΜ£π§ π₯πΜ : ${phantram2}`; Currencies.increaseMoney(event.senderID, b); break;
                case "3": msg =`β‘οΈππ¨ΜΜπ’ π π¨Μπ’ πππ€ ππΜ£π§ ΔπΜ π§π‘πΜ£Μπ§ Δπ π¬π¨ΜΜ π­π’πΜΜπ§ π₯πΜ${c}π―π§π π―πΜ π©π‘πΜΜπ§ π­π«πΜπ¦ π¦ππ² π¦πΜΜπ§ ππ?Μπ π§πΜπ¦ ππππ ππ?Μπ ππΜ£π§ π₯πΜ : ${phantram3}`; Currencies.increaseMoney(event.senderID, c); break;
                case "4": msg = `β‘οΈ ππ¨ΜΜπ’ π π¨Μπ’ ππππ€ ππΜ£π§ ΔπΜ π§π‘πΜ£Μπ§ Δπ π¬π¨ΜΜ π­π’πΜΜπ§ π₯πΜ ${d}π―π§π π―πΜ π©π‘πΜΜπ§ π­π«πΜπ¦ π¦ππ² π¦πΜΜπ§ ππ?Μπ π§πΜπ¦ ππππ ππ?Μπ ππΜ£π§ π₯πΜ : ${phantram4}`; Currencies.increaseMoney(event.senderID, d); break;            
                case "5": msg =`β‘οΈ ππ¨ΜΜπ’ π π¨Μπ’ ππππ€ ππΜ£π§ ΔπΜ π§π‘πΜ£Μπ§ Δπ π¬π¨ΜΜ π­π’πΜΜπ§ π₯πΜ ${e}π―π§π π―πΜ π©π‘πΜΜπ§ π­π«πΜπ¦ π¦ππ² π¦πΜΜπ§ ππ?Μπ π§πΜπ¦ ππππ ππ?Μπ ππΜ£π§ π₯πΜ : ${phantram5}`;Currencies.increaseMoney(event.senderID, e); break;
                case "6": msg = `β‘οΈπππ¨ΜΜπ’ π π¨Μπ’ ππππ€ ππΜ£π§ ΔπΜ π§π‘πΜ£Μπ§ Δπ π¬π¨ΜΜ π­π’πΜΜπ§ π₯πΜ ${e}π―π§π π―πΜ π©π‘πΜΜπ§ π­π«πΜπ¦ π¦ππ² π¦πΜΜπ§ ππ?Μπ π§πΜπ¦ ππππ ππ?Μπ ππΜ£π§ π₯πΜ : ${phantram5}`;Currencies.increaseMoney(event.senderID, g); break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("β‘οΈVui lΓ²ng nhαΊ­p 1 con sα»", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("β‘οΈLα»±a chα»n khΓ΄ng nαΊ±m trong danh sΓ‘ch.", event.threadID, event.messageID); //thay sα» case vΓ o sα» 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "β‘οΈChΖ°a update...") {
                msg = "β‘οΈUpdate soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2023") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`πππΜ£π§ ΔπΜ π§π‘πΜ£Μπ§ ππ¨ΜΜπ π­π‘πΜπ¦ π«π¨ΜΜπ’, π―π?π’ π₯π¨Μπ§π  πͺπ?ππ² π₯πΜ£π’ π―πΜπ¨ π§π πΜπ² π¦ππ’π΄.\nπΈ ππΜΜπ­ πΜπ¦ π₯π’Μ£ππ‘ ππ¨Μπ§ Β» ${d} π§π πΜπ² ${h} π π’π¨ΜΜ ${m} π©π‘π?Μπ­`, e.threadID, e.messageID); // ΔoαΊ‘n nΓ y ae cΓ³ thα» Δα» quay lαΊ‘i sau ${housr}giα» ${minutes}phΓΊt ${seconds}giΓ’y
    }
    else {    
        var msg = {
            body: "πππ¨ΜΜπ π­π‘πΜπ¦ π―πΜ π±ππ¦ π©π‘πΜΜπ§ π­π«πΜπ¦ π¦ππ² π¦πΜΜπ§ π§πΜπ¦ πππππ" +
                "\nπ.  ππ¨Μπ’ πππ€ π΄ " +
                "\nπ.   ππ¨Μπ’ πππ€ πΆ " +
                "\nπ.   ππ¨Μπ’ πππ€ π· " +
                "\nπ.   ππ¨Μπ’ ππππ€πΈ " +
                "\nπ.   ππ¨Μπ’ ππππ€π " +
                "\nπ.   ππ¨Μπ’ ππππ€π΅ " +
                `\n\nπ§¨ππΜπ² π«ππ©π₯π² π­π’π§ π§π‘πΜΜπ§ ππ‘π¨Μ£π§ π π¨Μπ’ π­π’πΜΜπ§ Δπ’ π€πΜπ¦ π©π‘πΜΜπ§ π­π«πΜπ¦ π¦ππ² π¦πΜΜπ§ ππ?Μπ π§πΜπ¦ ππππ π¦πΜ ππΜ£π§ π¦π?π¨ΜΜπ§.`,
                attachment: fs.createReadStream(__dirname + `/cache/baolixi1.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}
