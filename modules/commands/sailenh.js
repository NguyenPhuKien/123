module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nhathoang",
  description: "ramdom ảnh gái khi dùng dấu lệnh",
  commandCategory: "Tự động",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const axios = require('axios');
const request = require('request');
const PREFIX = config.PREFIX
const timeStart = Date.now();
  const time = process.uptime();
		 var h = Math.floor(time / (60 * 60));
		var m = Math.floor((time % (60 * 60)) / 60);
	var s = Math.floor(time % 60);
const fs = require("fs");
module.exports.run = async({api,event,args}) => {
  const { threadID, messageID, senderID, body } = event;
const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
var tl = ["🐾" , "🌬" , "🌸" , "☁️" , "💌" , "🐢" , "🌊" , "🥀" , "🧸" , "🥨" , "❤️‍🩹" , "🍇" , "🫒" , "🍑" , "🎀" , "🚬" , "🐧" , "🦅" , "🐸" , "🐉" , "🦖" , "🐙" , "🦑" , "🏵" , "🌻" , "🍁" , "🌷" , "🍀" , "💮" , "🦋" , "🧀" , "🍤" , "☕️" , "🍕" , "🍒" , "🎊"];
var tle = tl[Math.floor(Math.random() * tl.length)];
const t = Date.parse("January 23, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  if (thu == 'Sunday') thu = 'Chủ nhật'
  if (thu == 'Monday') thu = 'Thứ hai'
  if (thu == 'Tuesday') thu = 'Thứ ba'
  if (thu == 'Wednesday') thu = 'Thứ tư'
  if (thu == "Thursday") thu = 'Thứ năm'
  if (thu == 'Friday') thu = 'Thứ sáu'
  if (thu == 'Saturday') thu = 'Thứ bảy'
const res1 = await axios.get(`https://randomlinkapi.lucky2000.repl.co/gai`);
const res2 = await axios.get(`https://randomlinkapi.lucky2000.repl.co/gai`);
const res3 = await axios.get(`https://randomlinkapi.lucky2000.repl.co/gai`);
const res4 = await axios.get(`https://randomlinkapi.lucky2000.repl.co/gai`) 
const res5 = await axios.get(`https://randomlinkapi.lucky2000.repl.co/gai`);
const res6 = await axios.get(`https://randomlinkapi.lucky2000.repl.co/gai`);
const res7 = await axios.get(`https://randomlinkapi.lucky2000.repl.co/gai`);
const res8 = await axios.get(`https://randomlinkapi.lucky2000.repl.co/gai`);
const res9 = await axios.get(`https://randomlinkapi.lucky2000.repl.co/gai`);
var data1 = res1.data.data;
var array = [];
var data2 = res2.data.data;
var data3 = res3.data.data;
var data4 = res4.data.data;
var data5 = res5.data.data;
var data6 = res6.data.data;
var data7 = res7.data.data;
var data8 = res8.data.data;
var data9 = res9.data.data
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
var downloadfile7 = (await axios.get(data7, {responseType: 'stream'})).data;
var downloadfile8 = (await axios.get(data8, {responseType: 'stream'})).data;
var downloadfile9 = (await axios.get(data9, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    array.push(downloadfile2);    
    array.push(downloadfile3);
    array.push(downloadfile4);
    array.push(downloadfile5);    
    array.push(downloadfile6);
    array.push(downloadfile7);
    array.push(downloadfile8);
    array.push(downloadfile9);
	const res = await axios.get(`https://randomlinkapi-1.khoadang31.repl.co/thinh`);
var thinh = res.data.data;
  api.sendMessage({
                                                body: `💖==== [ BẢO AN ] ====💖\n━━━━━━━━━━━━━━\n⏰️ Thời gian: ${thu} | ${gio}\n⌛️ Thời gian online: ${h}:${m}:${s} 🎀\n◆━━━◆『${tle}』◆━━━◆\n⚙️ Tình trạng: Tuyệt vời\n🌸 Tốc độ xử lý: Ổn định\n🕰 Độ trễ: 5ms\n━━━━━━━━━━━━━\n⚠ Thả cảm xúc "👍" vào tin nhắn này để xem cách sửa các lỗi cơ bản trên bot`, attachment: array},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ CÁC DẠNG LỖI ] ===\n━━━━━━━━━━━━━━━━━━\n1. Lỗi setname mà không được\n2. Lỗi thêm bot vào mà nó không chạy ☎️\n3. Lỗi không thấy tài khoản của admin 🖨️\n4. Lỗi bot không nhận qtv 💻\n5. Lỗi không tự động thêm thành viên vào lại 🐰\n\nReply tin nhắn này để chọn dạng lỗi và cách sửa`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://randomlinkapi.lucky2000.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`Vui lòng chờ\nLoading...`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `Dạng lỗi này bạn hãy tắt liên kết mời thành viên trên mess của mình là có thể setname đc cho người khác nha`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://randomlinkapi.lucky2000.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `Lỗi này nếu bạn thuê file bot trên bot mình , thì hãy kiểm tra /pending all xem có trong tin nhắn chờ không\nXong bạn kiểm tra /dsban thread xem nhóm mình có bị ban hay không thì để mở ban nha\nCòn các bạn thuê bot mình mà lỡ kick thì hãy làm như trên nha\nNếu không được nữa hãy liên hệ facebook mình`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://randomlinkapi.lucky2000.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `Bạn hãy dùng /stk để xem số tài khoản nha`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://randomlinkapi.lucky2000.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `Bạn hãy thử set lại cho người ta rồi dùng /reload ( quyền hạn người thuê bot)`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://randomlinkapi.lucky2000.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
            }
            case "5": {
const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `Hiện tại bot mình sẽ gỡ mời lại người vào lại tránh tình trạng nặng bot xin mọi người thông cảm`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://randomlinkapi.lucky2000.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ Vui lòng nhập 1 con số", event.threadID, event.messageID);
            	if (choose > 4 || choose < 1) return api.sendMessage("→ Lựa chọn không nằm trong danh sánh.", event.threadID, event.messageID); 
    }
    }
}
    }