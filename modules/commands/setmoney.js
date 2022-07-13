module.exports.config = {
    name: "setmoney",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "CatalizCS",
    description: "Điều chỉnh thông tin của người dùng",
    commandCategory: "ADMIN",
    usages: "[add/set/clean] [Số tiền] [Tag người dùng]",
    cooldowns: 5
};

module.exports.run = async function ({ event, api, Currencies, args,Users }) {
    const { threadID, messageID, senderID } = event;
   
    const { throwError } = global.utils;
    const { increaseMoney, decreaseMoney, getData } = Currencies;
   const mentionID = Object.keys(event.mentions);
    const money = parseInt(args[1]);
    var message = [];
    var error = [];

    switch (args[0]) {
        case "add": {
            if (mentionID.length != 0) {
                for (singleID of mentionID) {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                    await Currencies.increaseMoney(singleID, money);
                    message.push(singleID);
                } catch (e) { error.push(e); console.log(e) };
                }
                return api.sendMessage(`[Money] Đã cộng thêm ${money}$ cho ${message.length} người`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Không thể thể cộng thêm tiền cho ${error.length} người!`, threadID) }, messageID);
            } else {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                await Currencies.increaseMoney(senderID, money);
                message.push(senderID);
                } catch (e) { error.push(e) };
                return api.sendMessage(`[Money] Đã cộng thêm ${money}$ cho bản thân`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Không thể thể cộng thêm tiền cho bản thân!`, threadID) }, messageID);
            }
        }

        case "set": {
            if (mentionID.length != 0) {
                for (singleID of mentionID) {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                    await Currencies.setData(singleID, { money });
                    message.push(singleID);
                } catch (e) { error.push(e) };
                }
                return api.sendMessage(`[Money] Đã set thành công ${money}$ cho ${message.length} người`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Không thể set tiền cho ${error.length} người!`, threadID) }, messageID);
            } else if (args[2]) {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                await Currencies.setData(args[2], { money });
                message.push(args[2]);
                } catch (e) { error.push(e) };
                return api.sendMessage(`[Money] Đã set thành công ${money}$ cho ${message.length} người`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Không thể set tiền cho ${error.length} người!`, threadID) }, messageID);
            }
            else {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                await Currencies.setData(senderID, { money });
                message.push(senderID);
                } catch (e) { error.push(e) };
                return api.sendMessage(`[Money] Đã set thành công ${money}$ cho bản thân`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Không thể set tiền cho bản thân!`, threadID) }, messageID);
            }
        }

        case "clean": {
            if (mentionID.length != 0) {
                for (singleID of mentionID) {
                try {
                    await Currencies.setData(singleID, { money: 0 });
                    message.push(singleID);
                } catch (e) { error.push(e) };
            }
                return api.sendMessage(`[Money] Đã xóa thành công toàn bộ tiền của ${message.length} người`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Không thể xóa toàn bộ tiền của ${error.length} người!`, threadID) }, messageID);
            } else {
                try {
                await Currencies.setData(senderID, { money: 0 });
                message.push(senderID);
                } catch (e) { error.push(e) };
                return api.sendMessage(`[Money] Đã xóa thành công tiền của cho bản thân`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Không thể xóa toàn bộ tiền của bản thân!`, threadID) }, messageID);
            }
        }
        
        case "all": {
           var name = (await Users.getData(event.senderID)).name
            if(!args[1]) return api.sendMessage("[Money] Chưa nhập số tiền", threadID, messageID);
            if(isNaN(args[1])) return api.sendMessage("[Money] Số tiền phải là số", threadID, messageID);
            if(args[1] > 10000) return api.sendMessage("[Money] Số tiền phải nhỏ hơn 10000", threadID, messageID);
            let { participantIDs } = await api.getThreadInfo(threadID);
            for(let i of participantIDs) {
                try {
                    await increaseMoney(parseInt(i), parseInt(args[1]));
                    message.push(i);
                } catch(e) { error.push(e) }
            }
            return api.sendMessage(`${name} Đã cộng thêm ${args[1]}$ cho ${message.length} người`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Không thể cộng thêm tiền cho ${error.length} người!`, threadID) }, messageID);
        }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
  }