module.exports.config = {
  name: "art",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Harin",
  description: "chuyển ảnh thường sang ảnh anime",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5,
};
module.exports.run = async function ({ api, event, args }) {
    const axios = require("axios")
  const { threadID, messageID } = event
  const push = []
  push.push(Date.now())
  if (event.type == "message_reply") {
       if(!event.messageReply.attachments[0]){
         var harin = (await axios.get(`https://nams.live/naural-art.json?{"image":"https://graph.facebook.com/${event.messageReply.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662","prompt":""}`)).data
       }
       else {
  var harin = (await axios.get(`https://nams.live/naural-art.json?{"image":"${event.messageReply.attachments[0].url}","prompt":""}`)).data
         }}
  else var harin = (await axios.get(`https://nams.live/naural-art.json?{"image":"${args[0]}","prompt":""}`)).data
    const stream = (await axios.get(harin, { responseType: "stream"})).data
var msg = { body: `📸==『 ẢNH ANIME 』==📸
🔰 Tình trạng: Thành công
😻 Link ảnh: 
${harin}
⏱️ Thời gian xử lý: ${Math.floor((Date.now()- push[0])/1000)} giây`, attachment: stream }
    return api.sendMessage(msg, threadID, messageID)}