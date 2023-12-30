var fs = require('fs');
var pathData = __dirname + '/cache/setname.json';

this.config = {
  name: 'autosetname',
  hasPermssion: 0,
  version: '0.0.1',
  credits: 'Sam',
  description: 'Như tên',
  commandCategory: 'Tiện ích',
  usages: '',
  cooldowns: 0
}

this.onLoad = () => !fs.existsSync(pathData) ? fs.writeFileSync(pathData, '{}') : null;

this.run = async function ({ api, event, args, Threads, Users }) {
  var { threadID, messageID, participantIDs } = event;
  var data = require(pathData);
  var { name } = this.config;
  
  if (args.length == 0) {
    var msg = 
      `=====[ Tự động setname ]====\n` +
      `----------------------\n` +
      '🍀 /autosetname add <name 1> | <name 2> : Tự động đổi tên người mới vào nhóm,\n' +
      '🍁 /autosetname del : Xóa autosetname đã đặt\n' +
      '🌹 /autosetname all <name_1> | <name_2> : Đặt biệt danh cho toàn bộ nhóm,\n' +
      `----------------------\n` +
      `⚠️ Chú ý:\n<name 1>: là kí tự đặt phía trước\n<name 2>: là kí tự đặt phía sau -> Đặt là 0 nếu không đặt gì phía sau`;
      
    return api.sendMessage(msg, threadID, messageID);
  }

  var key = args[0].toLowerCase();
  let out;

  if (key == '++++++') {
    out = 'Danh Sách Những Người Chưa Có Biệt Danh:\n\n';
    var { nicknames } = (await Threads.getData(threadID)).threadInfo;
    var nickArr = Object.keys(nicknames);
    var userAll = participantIDs.filter(it => !nickArr.includes(it));
    let lent = 1;

    for (let userID of userAll) {
      var nameUser = (await Users.getData(userID) || await api.getUserInfo(userID)[userID]).name;
      out += (lent++).toString() + '. ' + nameUser + '\n';
    }
  } else if (key == '+++++') {
    out = 'Danh Sách Biệt Danh:\n\n';
    var { nicknames } = (await Threads.getData(threadID)).threadInfo;
    let lent = 1;

    for (let userID in nicknames) 
      out += (lent++).toString() + '. ' + nicknames[userID] + '\n';
  
  } else if (key == 'del') {
    delete data[threadID];
    fs.writeFileSync(pathData, JSON.stringify(data, null, 2));
    out = 'Success delete';
  } else {
    if (!args[1] && key != 'set') 
      out = 'Bạn nên đọc lại cách dùng để thấu hiểu nhân gian hơn :)';
    else {
      if (key == 'add') {
        let input = args.slice(1).join(' ').split('|');

        if (input[0].includes('0')) input[0] = null;
        if (!input[1] || input[1].includes('0')) input[1] = null;

        if (!input[0] && !input[1]) 
          out = 'Vui lòng xử dụng đúng cách!';
        else {
          data[threadID] = { 
            bef: input[0], 
            aft: input[1] 
          }
          
          fs.writeFileSync(pathData, JSON.stringify(data, null, 2));
          out =
            `Thêm thành công\nDemo: ` + (!input[0] ? '' : input[0]) + 'Bảo an' + (!input[1] ? '' : input[1]);
        }
        
     /* } else if (key == '++++') {
        if (event.type == 'message_reply') {
          var { senderID } = event.messageReply;
          var input = args.slice(1).join(' ');
        
          if (typeof input != 'string')  
            out = 'Vui lòng xử dụng đúng cách!';
          else {
            var nameUser = (await Users.getData(senderID) || await api.getUserInfo(senderID)[senderID]).name;
            await api.changeNickname(input, threadID, senderID);
            out = 
              'Đã đổi tên cho ' + nameUser +
              ' thành ' + (input || 'mặc định');
          }
        } else {
          var isMention = Object.keys(event.mentions || {}).length > 0;
          var senderID = isMention ? Object.keys(event.mentions)[0] : event.senderID;
          var input = args.slice(1).join(' ').replace(isMention ? event.mentions[senderID] : '', '');
        
          if (typeof input != 'string') 
            out = 'Vui lòng xử dụng đúng cách!';
          else {
            var nameUser = isMention ? event.mentions[senderID].replace('@', '') : (await Users.getData(senderID) || await api.getUserInfo(senderID)[senderID]).name;
            await api.changeNickname(input, threadID, senderID);
            out = 
              'Đã đổi tên cho ' + nameUser +
              ' thành ' + (input. ? 'mặc định');
          }
        }*/
      } else if (key == 'all') {
        let input = args.slice(1).join(' ').split('|');

        if (input[0].includes('0')) input[0] = null;
        if (!input[1] || input[1].includes('0')) input[1] = null;

        if (!input[0] && !input[1]) 
          out = 'Vui lòng xử dụng đúng cách!';
        else {
          for (let userID of participantIDs) {
            var nameUser = (await Users.getData(userID) || await api.getUserInfo(userID)[userID]).name;
            var newChange = (!input[0] ? '' : input[0]) + nameUser + (!input[1] ? '' : input[1]);
            await api.changeNickname(newChange, threadID, userID);
          }
      
          out = `Success set all!`;
        }
      } else 
        out = 'Lệnh bạn mới dùng méo tồn tại :)';
    }
  }

  return api.sendMessage(out, threadID, messageID);
}