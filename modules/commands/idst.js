module.exports.config = {
  name: "idst",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Sam",
  description: "Lấy id sticker",
  commandCategory: "Dành cho admin bot",
  usages: "[reply]",
  cooldowns: 5   
}

module.exports.run = async function ({ api, event, args }) {
  if (event.type == "message_reply") {
    if (event.messageReply.attachments[0].type == "sticker") {
      return api.sendMessage({
        body: `ID: ${event.messageReply.attachments[0].ID}`
      }, event.threadID)
    }
    else return api.sendMessage("Chỉ reply sticker", event.threadID);
  }
  else if (args[0]) {
    return api.sendMessage({sticker: args[0]}, event.threadID);
  }
  else return api.sendMessage("Chỉ reply sticker", event.threadID);
}