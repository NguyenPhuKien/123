var fs = require('fs');
var pathData = __dirname + '/../commands/cache/setname.json';

this.config = {
  name: 'setname',
  eventType: ['log:subscribe'],
  version: '0.0.1',
  credits: 'Sam',
  description: 'Tự động đổi tên người mới tham gia'
}

this.run = async function ({ api, event, Users, Threads }) {
  var { threadID, logMessageData } = event;
  var data = require(pathData)[threadID];
  var newMem = logMessageData.addedParticipants.map(item => item.userFbId);

  if (!data || !data.bef && !data.aft) return;

  for (let memID of newMem) {
    var userData = await Users.getData(memID);
    var { name } = !userData ? (await api.getUserInfo(memID))[memID] : userData;
    var input = (!data.bef ? '' : data.bef) + name + (!data.aft ? '' : data.aft);
    await api.changeNickname(input, threadID, memID);
  }

  return api.sendMessage('Đã tự động đặt biệt danh cho người mới!', threadID);
}