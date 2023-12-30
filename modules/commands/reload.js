module.exports.config = {
	name: "reload",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Khánh Milo",
	description: "Khởi động lại bot",
	commandCategory: "Dành cho admin bot",
	cooldowns: 5,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    var tl = ["5","4","6","7"];
var tle = tl[Math.floor(Math.random() * tl.length)];
    const eval = require("eval");
    return api.sendMessage(`Loading...\nHệ thống sẽ làm mới sau ${tle}s nữa`, event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

   }
