const axios = require("axios");

module.exports.config = {
  name: "gpt",
  version: "1.0.0",
  hasPermission: 0,
  usePrefix: false,
  credits: "quất",
  description: "Kết hợp các lệnh trí tuệ nhân tạo",
  commandCategory: "Tiện ích",
  usages: "[hỏi]",
  usePrefix:false,
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
const apiKey = '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';
var query = (event.type === 'message_reply' ? args.join(' ') + ' "' + event.messageReply.body + '"': args.join(' '));
const input = encodeURIComponent(query);
const i = (url) => axios.get(url, { responseType: "stream", }).then((r) => (r.data.path='tmp.jpg',r.data))
var response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: input }],
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            }
        });
        var result = response.data.choices[0].message.content;
axios({
  method: 'post',
  url: 'https://api.openai.com/v1/images/generations',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  },
  data: {
    prompt: input,
    n: 1,
    size: '256x256',
    model: 'image-alpha-001'
  }
})
.then(async response => {
  const imageUrl = response.data.data[0].url;
  api.sendMessage({body:result,attachment: await i(imageUrl)},event.threadID);
})
.catch(error => {
  console.error('Lỗi:', error);
});}