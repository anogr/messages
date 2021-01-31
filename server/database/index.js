const messageList = require('./message-list');

function addMessage(message) {
	const messageIds = messageList.messages.map(message => message.id);
	const currentMaxId = Math.max(...messageIds);
	const nextId = currentMaxId + 1;
	const newMessage = {...message, id: nextId};
	messageList.messages.push(newMessage);
	return nextId;
}

module.exports = {
	messages: messageList.messages,
	addMessage
}
