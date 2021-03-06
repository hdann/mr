/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "1.0.7",
    credits: "ProCoderMew",
    description: "Listen events",
    dependencies: {
        "path": ""
    }
};

module.exports.run = async function ({ api, event, Users }) {
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'meewmeew.json');
    const { antiout } = require(path);
    const { logMessageData, author, threadID } = event;
    const id = logMessageData.leftParticipantFbId;
  const moment = require("moment-timezone");
     var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  var fullYear = global.client.getTime("fullYear");
    if (author == id && id != api.getCurrentUserID()) {
        const name = await Users.getNameUser(id) || "Ngฦฐแปi dรนng Facebook";
        if (antiout.hasOwnProperty(threadID) && antiout[threadID] == true) {
            try {
                await api.addUserToGroup(id, threadID);
                return api.sendMessage(`[ ๐๐๐๐ ] ๐๐ขฬ๐๐ก ๐๐จ๐ฬฃ๐ญ ๐๐ง๐ญ๐ข๐จ๐ฎ๐ญ ๐๐ก๐ฬ๐ง๐ก ๐๐จฬ๐ง๐  ๐๐จ๐ญ ฤ๐ฬ ๐๐ก๐ฬ๐ฆ ๐๐ ๐ฎฬ๐จฬฬ๐ข ๐๐ฎฬ๐ง๐  => ${name}\n๐๐ก๐จฬฬ๐ข ๐๐ข๐๐ง ๐๐ก๐ฬ๐ฆ ๐๐ฬฃ๐ข ๐๐ ๐ฎฬ๐จฬฬ๐ข ๐๐ฎฬ๐ง๐  ๐๐ฬ๐จ ๐๐จ๐ฑ : ${timeNow} - ${fullYear}`, event.threadID);

            }
            catch (e) {
                return api.sendMessage(`๐๐ก๐จฬ๐ง๐  ๐ญ๐ก๐ฬฬ ๐ญ๐ก๐ฬ๐ฆ ${name} ๐ฏ๐ฎฬฬ๐ ๐จ๐ฎ๐ญ ๐ฏ๐ฬ๐จ ๐ฅ๐ฬฃ๐ข ๐ง๐ก๐จฬ๐ฆ.`, threadID);
            }
        }
    }
    return;
}