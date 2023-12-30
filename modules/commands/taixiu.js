module.exports.config = {
  name: "tx",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "khoa - fix Trankhuong",
  description: "Games tài xỉu!",
  commandCategory: "Trò chơi ~ Game",
  usages: '.../hỗ trợ',
  cooldowns: 5
};

module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/cache/`;
  if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "helptaixiu.jpeg")) request("https://i.imgur.com/xsOv2Xo.jpeg").pipe(fs.createWriteStream(dirMaterial + "helptaixiu.jpeg"));
}

module.exports.run = async function ({ api, event, args, Currencies, Users}) {
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + "/cache/bkdia.png";
  let pathXn1 = __dirname + "/cache/xingaum.png";
  let pathXn2 = __dirname + "/cache/xingauh.png";
  let pathXn3 = __dirname + "/cache/xingaub.png";

  var { threadID, messageID, senderID } = event;
  const dataMoney = await Currencies.getData(senderID);
  const money = dataMoney.money;
  if (args.length == 0) return api.sendMessage("[ Cách Chơi Games Tài Xỉu ]\n──────────────────\n/tx tài/xỉu ( tiền cược )\n\n/tx chẵn/lẻ ( tiền cược )\n\n💵 Tiền cược phải trên: 100000$ để chơi!", threadID, messageID);

  if (event.body.indexOf("hỗ trợ") !== -1) {
    var msg = {
      body: "[ Cách Chơi Games Tài Xỉu ]\n──────────────────\n~taixiu tài/xỉu ( tiền cược )\n\n~taixiu chẵn/lẻ ( tiền cược )\n\n💵 Tiền cược phải trên: 100000$ để chơi!",
      attachment: fs.createReadStream(__dirname + `/cache/helptaixiu.jpeg`)
    }
    return api.sendMessage(msg, threadID, messageID);
  }

  var datcuoc = args[0].toLowerCase();
  var tiencuoc = parseInt(args[1]);
  if (datcuoc !== 'tài' && (datcuoc !== 'xỉu' && (datcuoc !== 'chẵn' && (datcuoc !== 'lẻ')))) return api.sendMessage(`⚡ Đặt cược tài/xỉu hoặc chẵn/lẻ thôi, ${datcuoc} làm gì thế!`, threadID, messageID);
  if (tiencuoc < 100000) return api.sendMessage("⚡ Vui lòng cược trên 100000$", threadID, messageID);
  if (isNaN(tiencuoc)) return api.sendMessage("⚡ Tiền cược phải là một con số!", threadID, messageID);
  if (tiencuoc > money) return api.sendMessage(`💵 Bạn không có đủ ${tiencuoc}$ để chơi!`, threadID, messageID);

  //api.sendMessage("⏳ Đang lắc...vui lòng chờ kết quả!", threadID, messageID);

  var xnmot = Math.floor(Math.random() * 6) + 1;
  var xnhai = Math.floor(Math.random() * 6) + 1;
  var xnba = Math.floor(Math.random() * 6) + 1;
  var tong = xnmot + xnhai + xnba;

  if (datcuoc == 'tài' || (datcuoc == 'xỉu')) {
    if (xnmot == xnhai && xnmot == xnba) {
      var ketqua = 'thua'; 
    }
    else {
      if (tong >= 4 && (tong <= 10)) var ketqua = 'xỉu';
    if (tong >= 11 && (tong <= 17)) var ketqua = 'tài';
    }
  };

  if (datcuoc == 'chẵn' || (datcuoc == 'lẻ')) {
    if (tong % 2 == 0) var ketqua = 'chẵn';
    else var ketqua = 'lẻ';
  }; 

if (xnmot == 1) var link1 = `https://i.postimg.cc/c1mGP3CX/x-ng-u-1.png`
  if (xnmot == 2) var link1 = `https://i.postimg.cc/pr2bpWGf/x-ng-u-2.png`
  if (xnmot == 3) var link1 = `https://i.postimg.cc/d0dz6kgR/x-ng-u-3.png`
  if (xnmot == 4) var link1 = `https://i.postimg.cc/52Dh8qKN/x-ng-u-4.png`
  if (xnmot == 5) var link1 = `https://i.postimg.cc/76nj8vHf/x-ng-u-5.png`
  if (xnmot == 6) var link1 = `https://i.postimg.cc/j5bBFqrp/x-ng-u-6.png`

  if (xnhai == 1) var link2 = `https://i.postimg.cc/c1mGP3CX/x-ng-u-1.png`
  if (xnhai == 2) var link2 = `https://i.postimg.cc/pr2bpWGf/x-ng-u-2.png`
  if (xnhai == 3) var link2 = `https://i.postimg.cc/d0dz6kgR/x-ng-u-3.png`
  if (xnhai == 4) var link2 = `https://i.postimg.cc/52Dh8qKN/x-ng-u-4.png`
  if (xnhai == 5) var link2 = `https://i.postimg.cc/76nj8vHf/x-ng-u-5.png`
  if (xnhai == 6) var link2 = `https://i.postimg.cc/j5bBFqrp/x-ng-u-6.png`

  if (xnba == 1) var link3 = `https://i.postimg.cc/c1mGP3CX/x-ng-u-1.png`
  if (xnba == 2) var link3 = `https://i.postimg.cc/pr2bpWGf/x-ng-u-2.png`
  if (xnba == 3) var link3 = `https://i.postimg.cc/d0dz6kgR/x-ng-u-3.png`
  if (xnba == 4) var link3 = `https://i.postimg.cc/52Dh8qKN/x-ng-u-4.png`
  if (xnba == 5) var link3 = `https://i.postimg.cc/76nj8vHf/x-ng-u-5.png`
  if (xnba == 6) var link3 = `https://i.postimg.cc/j5bBFqrp/x-ng-u-6.png`
  
  var color = [   "https://i.imgur.com/EAERpDy.jpeg",
    "https://i.imgur.com/lZD0XTE.jpeg",
    "https://i.imgur.com/o9DIHQJ.jpeg",
    "https://i.imgur.com/rDtTCEJ.jpeg",
    "https://i.imgur.com/HywOwOl.jpeg",
    "https://i.imgur.com/eMa0loo.jpeg",
    "https://i.imgur.com/kQiHSM7.jpeg",
    "https://i.imgur.com/3amwmY3.jpeg",
    "https://i.imgur.com/Po41gGL.jpeg",
    "https://i.imgur.com/VwghMke.jpeg"
 ];
  var background = color[Math.floor(Math.random() * color.length)];

  //Link ảnh trên bị lỗi thì liên hệ fb.me/Trankhuong.2072000 để lấy ảnh.

  let Xingaum = (
    await axios.get(
      `${link1}`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathXn1, Buffer.from(Xingaum, "utf-8"));

  let Xingauh = (
    await axios.get(
      `${link2}`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathXn2, Buffer.from(Xingauh, "utf-8"));

  let Xingaub = (
    await axios.get(
      `${link3}`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathXn3, Buffer.from(Xingaub, "utf-8"));

  let getBkdia = (
    await axios.get(`${background}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getBkdia, "utf-8"));

  let baseImage = await loadImage(pathImg);
  let baseXn1 = await loadImage(pathXn1);
  let baseXn2 = await loadImage(pathXn2);
  let baseXn3 = await loadImage(pathXn3);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseXn1, 200, 150, 100, 100);
  ctx.drawImage(baseXn2, 280, 150, 100, 100);
  ctx.drawImage(baseXn3, 250, 220, 100, 100);
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathXn1);
  fs.removeSync(pathXn2);
  fs.removeSync(pathXn3);

  if (ketqua == 'thua') {
    Currencies.decreaseMoney(senderID, tiencuoc);
    return api.sendMessage({ body: `[ Kết Quả Games Tài Xỉu ]\n──────────────────\n🎲 Xí ngầu ra được: ${xnmot} | ${xnhai} | ${xnba}\n📍 Ba xí ngầu bằng nút nên cả tài và xỉu đều thua!`, attachment: fs.createReadStream(pathImg) },
      threadID,
      () => fs.unlinkSync(pathImg),
      messageID);
  }
  else if (ketqua == datcuoc) {
    Currencies.increaseMoney(senderID, tiencuoc);
    return api.sendMessage({ body: `[ Kết Quả Games Tài Xỉu ]\n──────────────────\n🎲 Xí ngầu ra được: ${xnmot} | ${xnhai} | ${xnba}\n📍 Tổng là ${tong} nút\n🌸 Kết quả là ${ketqua}\n💵 Bạn thắng +${tiencuoc}$ `, attachment: fs.createReadStream(pathImg) },
      threadID,
      () => fs.unlinkSync(pathImg),
      messageID);
  }
  else {
    Currencies.decreaseMoney(senderID, tiencuoc);
    return api.sendMessage({ body: `[ Kết Quả Games Tài Xỉu ]\n──────────────────\n🎲 Xí ngầu ra được: ${xnmot} | ${xnhai} | ${xnba}\n📍 Tổng là ${tong} nút\n🌸 Kết quả là ${ketqua}\n💸 Bạn thua -${tiencuoc}$ `, attachment: fs.createReadStream(pathImg) },
      threadID,
      () => fs.unlinkSync(pathImg),
      messageID);
  };
}