module.exports.config = {
    name: "adduser",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thêm người bằng cách dán link facebook",
    commandCategory: "Dành cho thành viên",
    usages: "Ví dụ: /adduser + Link facebook",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage({body: `=== 🌸 𝗠𝗲𝗻𝘂 𝗔𝗱𝗱𝘂𝘀𝗲𝗿 🌸 ===\n━━━━━━━━━━━━━━━━\n𝟭. ${global.config.PREFIX}${this.config.name} + 𝗹𝗶𝗻𝗸\n𝟮. ${global.config.PREFIX}${this.config.name} + 𝘂𝗶𝗱\n𝟯.𝗩𝗗: ${global.config.PREFIX}${this.config.name} 𝟭𝟮𝟯𝟰𝟱 (𝗵𝗼𝗮̣̆𝗰 𝗹𝗶𝗻𝗸) 𝘁𝗿𝘂̛𝗼̛̀𝗻𝗴 𝗵𝗼̛̣𝗽 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗻𝘂́𝘁 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗵𝗼𝗮̣̆𝗰 đ𝗮̃ 𝗰𝗵𝗮̣̆𝗻 𝗯𝗼𝘁 𝘁𝗵𝗶̀ 𝗯𝗼𝘁 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗲̂𝗺 𝗹𝗮̣𝗶 !!!`, attachment: (await axios.get((await axios.get(`https://randomlinkapi-1.lucky2000.repl.co/meo`)).data.data, {
                    responseType: 'stream'
                })).data
}, event.threadID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await api.getUID(args[0] || event.messageReply.body);
    var uidUser = res
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`🌸Thành viên đã có mặt trong nhóm🌸`, threadID, messageID);
    if (err) return api.sendMessage(`🌸Không thể thêm thành viên vào nhóm🌸`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`🌸Đã thêm người dùng vào danh sách phê duyệt🌸`, threadID, messageID);
    else return api.sendMessage(`🌸Thêm thành viên vào nhóm thành công🌸`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`🌸Thành viên đã có mặt trong nhóm🌸`, threadID, messageID);
    if (err) return api.sendMessage(`🌸Không thể thêm thành viên vào nhóm🌸`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`🌸Đã thêm người dùng vào danh sách phê duyệt🌸`, threadID, messageID);
    else return api.sendMessage(`🌸Thêm thành viên vào nhóm thành công🌸`, threadID, messageID);
    });
  }
}