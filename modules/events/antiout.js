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
        const name = await Users.getNameUser(id) || "Người dùng Facebook";
        if (antiout.hasOwnProperty(threadID) && antiout[threadID] == true) {
            try {
                await api.addUserToGroup(id, threadID);
                return api.sendMessage(`Người rời: ${name}\nTrạng thái: Đã mời lại`, event.threadID);

            }
            catch (e) {
                return api.sendMessage(`Người rời: ${name}\nTrạng thái: Không thể mời lại`, threadID);
            }
        }
    }
    return;
}