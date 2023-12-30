 module.exports.config = {
  name: "stk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trankhuong",
  description: "Số tài khoản của admin AhQuan!",
  commandCategory: "Dành cho thành viên",
  usages: "...",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/tz8oQfM.jpg"
]

var callback = () => api.sendMessage({body:`[ STK  Admin Bảo An ]
──────────────────
⚠️ Khi bank tiền các bạn nhớ xem đúng tên, đúng số tài khoản rồi hãy bank nhé!
🤖 Phí thuê bot là 30k/tháng

👤 CTK: Nguyen Phu Kien
💳 STK MBBank: 0868176076`,attachment: fs.createReadStream(__dirname + "/bot/stk.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/bot/stk.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/bot/stk.jpg")).on("close",() => callback());
   };
