module.exports.config = {
	name: "upt",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Vtuan",//mod by ARAXY XD
	description: "Kiểm tra",
	commandCategory: "Tiện ích",
	usages: "[Tag]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Currencies, Users }) {
	const { threadID, messageID, senderID, mentions } = event;
  const fs = require('fs');
const axios = require('axios')
 if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };
   const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
 
  
   var upt = `${hours}:${minutes}:${seconds}`;

   
	 const { loadImage, createCanvas } = require("canvas");
    let path = __dirname + "/cache/atmaraxy.png";
    let bg = (await axios.get(`https://i.imgur.com/jEwmiqy.jpg`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
           let bgBase = await loadImage(path);
    let canvas = createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
        family: "SplineSans-Medium"
    });
    Canvas.registerFont(__dirname+`/cache/SplineSans.ttf`, {
        family: "SplineSans"
    });
    ctx.font = "70px SplineSans-Medium";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText('' + upt.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '', 200, 190);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);

    const moment = require("moment-timezone");
    const Ngay = moment.tz("Asia/Ho_Chi_Minh").format("DD");
    const Thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
    const Nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ 2 '
    if (thu == 'Tuesday') thu = 'Thứ 3'
    if (thu == 'Wednesday') thu = 'Thứ 4'
    if (thu == "Thursday") thu = 'Thứ 5'
    if (thu == 'Friday') thu = 'Thứ 6'
    if (thu == 'Saturday') thu = 'Thứ 7'

  
     const timeStart = Date.now();
     const admin = config.ADMINBOT;

  
       var msg =  {body: `======『 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 』======\n◆━━━━━━━━━━◆\n 🌸 ${thu} ngày ${Ngay} tháng ${Thang} năm ${Nam} \n 『 🌸 』 ➜ Lệnh của hệ thống: ${global.config.PREFIX}\n『 🌸 』 → Tổng số ADMIN BOT: ${admin.length}\n『 🌸 』 ➜ Bot có ${client.commands.size} lệnh có thể sử dụng\n❗ Ping: ${Date.now() - timeStart}ms`, attachment: fs.createReadStream(path)
    }
    
   return api.sendMessage( msg,  threadID, async (error, info) => {
    fs.unlinkSync(path),
        messageID
      })
      }

