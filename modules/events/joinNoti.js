module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.4",
    credits: "Mirai Team",
    description: "Thông báo bot hoặc người vào nhóm",
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    const { PREFIX } = global.config;
     if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        return api.sendMessage(`Xin chào\nRất vui khi được gặp mọi người 🥰`, threadID, async() => {
      api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
          	api.sendMessage(`Hiện tại mình đang có ${client.commands.size} lệnh có thể sử dụng được.\nPrefix hiện tại khả dụng là: ${PREFIX}`, threadID);
  });
 }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);

            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `${threadID}.gif`);

            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);

                if (!global.data.allUserID.includes(id)) {
                    await Users.createData(id, { name: userName, data: {} });
                    global.data.userName.set(id, userName);
                    global.data.allUserID.push(id);
                }
            }
            memLength.sort((a, b) => a - b);
            
          	(typeof threadData.customJoin == "undefined") ? msg = "Xin Chào {name}"  : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            if (existsSync(path)) mkdirSync(path, { recursive: true });

            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
            else formPush = { body: msg, mentions }

            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
}