const fse = require("fs-extra")
const approved = __dirname + "/../commands/cache/approvedThreads.json"
module.exports.config = {
    name: "checkduyet",
    eventType: ["log:subscribe"],
    version: "1.1.1",
    credits: "DC-Nam",
    description: "Noti check duyệt"
};
module.exports.run = async function({
    api,
    event,
    Users
}) {
    const {
        threadID,
        logMessageData
    } = event
    const {
        PREFIX
    } = global.config
    const {
        getCurrentUserID: botID,
        sendMessage: send,
        unsendMessage: unsend
    } = api
    let data = JSON.parse(fse.readFileSync(approved))
    if (logMessageData.addedParticipants.find(el => el.userFbId == botID())) {
        send("𝐜𝐡𝐞𝐜𝐤 𝐭𝐡𝐞 𝐚𝐩𝐩𝐫𝐨𝐯𝐞𝐝 𝐥𝐢𝐬𝐭...", threadID, (error, info) => {
            setTimeout(function() {
                unsend(info.messageID)
                if (!data.includes(threadID)) send("➣ 𝐊𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐡𝐚̂́𝐭 𝐛𝐚̣𝐢, 𝐧𝐡𝐨́𝐦 𝐛𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐝𝐮̛𝐨̛̣𝐜 𝐝𝐮𝐲𝐞̣̂𝐭\nCác admin bot hãy dùng lệnh sau để duyệt nhóm nha '" + PREFIX + "duyệt'", threadID)
                else send(`➣ 𝐊𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐝𝐞̂́𝐧 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠✅`, threadID)
            }, 5000);
        })
    } else return
}