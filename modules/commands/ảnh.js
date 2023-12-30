module.exports.config = {
    name: "ảnh",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "tpk",//tích hợp all api của tpk
    description: "Xem tất cả các ảnh trên bot",
    commandCategory: "Tiện ích",
    usages: "số thứ tự",
    cooldowns: 0,
    envConfig: {
    cooldownTime: 1200000
    }
  };
  module.exports.onLoad = () => {
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "an.mp3")) request("https://files.catbox.moe/8lmo0f.mp3").pipe(fs.createWriteStream(dirMaterial + "an.mp3"));
  }
  module.exports.run = async function ({ event, api , args, Users}){
    const fs = require("fs");
    let name1 = await Users.getNameUser(event.senderID)
    var name = ["Ảnh Gái","Ảnh Trai","Ảnh Meme","Ảnh Mèo","Ảnh Nude","Ảnh Liên Quân","Ảnh Loli","Ảnh Cosplay","Ảnh Anya","Ảnh Dú"]
    var b = name.length;
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 20;
    var numPage = Math.ceil(b / limit);
    var msg = `Hiện tại trong dự án có ${name.length} loại ảnh\n`;
    var x = 1;
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= b) break;
        msg += `[ ${i+1} ] → ${name[i]}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━\n🌸 Bạn ${name1} Hãy reply tin nhắn trên có thể mở thêm trang khi dùng lệnh /ảnh 2 /ảnh 3`;
    return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/noprefix/an.mp3`)}, event.threadID, (error, info) =>
    {
      global.client.handleReply.push(
      {
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "choose"
      });
    }, event.messageID);
  }
  module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
    const axios = require("axios");
    const { body , threadID , messageID } = event;
    const choiceList = body.split(' ');
    var urls = [];
    for ( const i of choiceList ) {
             if(i == "1"){
         urls.push("https://randomlinkapi-1.lucky2000.repl.co/gai");
}
         else if(i == "2"){
         urls.push("https://randomlinkapi-1.lucky2000.repl.co/trai");
}
         else if(i == "3"){
         urls.push("https://randomlinkapi-1.lucky2000.repl.co/meme");
}
          else if(i == "4"){
          urls.push("https://randomlinkapi-1.lucky2000.repl.co/meo");
}
          else if(i == "5"){
          urls.push("https://randomlinkapi-1.lucky2000.repl.co/nude");
}
         else if(i == "6"){
          urls.push("https://randomlinkapi-1.lucky2000.repl.co/lq");
}
         else if(i == "7"){
          urls.push("https://randomlinkapi-1.lucky2000.repl.co/loli");
}
         else if(i == "8"){
          urls.push("https://randomlinkapi-1.lucky2000.repl.co/cosplay");
}
         else if(i == "9"){
         urls.push("https://randomlinkapi-1.lucky2000.repl.co/anya");
}
         else if(i == "10"){
         urls.push("https://randomlinkapi-1.lucky2000.repl.co/gaivuto");
}
         else if(i == "11"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/mong");
}
        else if(i == "12"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/nude");
        }
         else if(i == "13"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/cu");
}
         else if(i == "14"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/nuaodai");
}
         else if(i == "15"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/hocsinh");
}
         else if(i == "16"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/tw");
}
         else if(i == "17"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/lamvlog");
}
         else if(i == "18"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/domixi");
}
         else if(i == "19"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/jack");
}
         else if(i == "20"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/sontung");
}
        else if(i == "21"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/duaconcuatt");
}
       else if(i == "22"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/chitanda");
}
       else if(i == "23"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/nino");
}
       else if(i == "24"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/itsuki");
}
       else if(i == "25"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/loli");
}
       else if(i == "26"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/kana");
}
       else if(i == "27"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/taktopdestiny");
}
       else if(i == "28"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/anya");
}
       else if(i == "29"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/mirai");
}
       else if(i == "30"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/violet");
}
       else if(i == "31"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/rem");
}
       else if(i == "32"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/yuulzumi");
}
       else if(i == "33"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/micchonshikimori");
}
       else if(i == "34"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/phongcanh");
}
       else if(i == "35"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/gura");
}
       else if(i == "36"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/lucy");
}
       else if(i == "37"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/itachi");
}
       else if(i == "38"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/doraemon");
}
        else if(i == "39"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/naruto");
}
        else if(i == "40"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/lufy");
}
        else if(i == "41"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdgai");
}
        else if(i == "42"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdtrai");
}
        else if(i == "43"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdsex");
}
        else if(i == "44"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdgai");
}
        else if(i == "45"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdanime");
}
        else if(i == "46"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdnuaodai");
}
        else if(i == "47"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdmschil");
}
        else if(i == "48"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdbautroi");
}
        else if(i == "49"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vddoraemon");
}
    else if(i == "50"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdlufy");
}
    else if(i == "51"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdnaruto");
}
    else if(i == "52"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdtet");
}
    else if(i == "53"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdnhacchu");
}
    else if(i == "54"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdchil");
}
    else if(i == "55"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdanimev2");
}
    else if(i == "56"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdgoku");
}
    else if(i == "57"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdtamtrang");
  };
};  if (urls.length === 0) return api.sendMessage('→ Vui lòng nhập từ 1 đến 57 để get ảnh!', threadID, messageID);
    var image = [];
    for (const o of urls) {
        try {
            const res = await axios.get(o);
            if (o.includes('TPKTAO')) {
                var url = res.data.url;
            } else {
                var url = res.data.data;
            };
                var tl = ["Bạn có thể reply nhiều số để chọn nhiều ảnh hơn","Reply nhiều số có thể giúp bạn xem được nhiều ảnh hơn"];
var nh = tl[Math.floor(Math.random() * tl.length)];
            const stream = (await axios.get(url,{
                responseType: "stream"
            })).data;
            image.push(stream);
        } catch (e) {
            console.error(e);
        }
    };
    const msg = {
        body: `${nh}`,
        attachment: image
    };
    api.sendMessage(msg, threadID, messageID);
};