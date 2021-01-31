import { Message } from "models/message";

export const sortMessages = (messages: Message[], sortColumn: "title" | "date", sortDirection: "asc" | "desc") => {
	let sortedMessages: Message[] = [];
	if (sortColumn === "title" && sortDirection === "asc") {
		sortedMessages = [...messages].sort((message1, message2) => (message1.title > message2.title ? 1 : message1.title === message2.title ? 0 : -1));
	} else if (sortColumn === "title" && sortDirection === "desc") {
		sortedMessages = [...messages].sort((message1, message2) => (message1.title < message2.title ? 1 : message1.title === message2.title ? 0 : -1));
	} else if (sortColumn === "date" && sortDirection === "desc") {
		sortedMessages = [...messages].sort((message1, message2) => (message1.date.isAfter(message2.date) ? 1 : message1.date.isSame(message2.date) ? 0 : -1));
	} else if (sortColumn === "date" && sortDirection === "asc") {
		sortedMessages = [...messages].sort((message1, message2) => (message1.date.isBefore(message2.date) ? 1 : message1.date.isSame(message2.date) ? 0 : -1));
	}
	return sortedMessages;
};
