const axios = require('axios');

module.exports.config = {
  name: 'text',
  version: '1.0.1',
  hasPermssion: 0,
  credits: 'Yan Maglinte',
  description: 'Trình chuyển đổi hình ảnh thành văn bản',
  usePrefix: true,
  commandCategory: 'Tiện ích',
  usages: 'Chuyển đổi hình ảnh thành văn bản',
  cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
  const { messageReply, threadID } = event;

  if (!messageReply || !messageReply.attachments || messageReply.attachments.length === 0 || messageReply.attachments[0].type !== 'photo') {
    return api.sendMessage('Hãy chọn ảnh cần chuyển thành văn bản', threadID, event.messageID);
  }

  const imageUrl = messageReply.attachments[0].url;
  axios.get('http://main.yanmaglinte.repl.co/api/ocr', { params: { imageUrl } })
    .then(async (response) => {
      try {
        const { text } = response.data;
        await api.sendMessage(text, threadID);
      } catch (error) {
        console.log("Đã xảy ra sự cố!");
        api.sendMessage(`Có vẻ như văn bản trong ảnh bị trống hoặc không thể nhận dạng được.`, threadID);
      }
    })
};