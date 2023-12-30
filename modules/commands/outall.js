module.exports.config = {
	name: "outall",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Tuấn Zin",
	description: "Gửi tin nhắn tới các nhóm thông báo out!",
	commandCategory: "Dành cho admin bot",
	usages: "Dùng để out tắt cả nhóm",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "Đoạn văn bản bạn muốn gửi tới mọi người",
			type: 'Văn bản',
			example: 'Tạm biệtttttt'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
	if (event.senderID != 100047152010637) return api.sendMessage(`outall ư bạn ko đủ tuổi`, event.threadID, event.messageID)
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage(' Đã out toàn bộ nhóm thành công', event.threadID);
	});
}