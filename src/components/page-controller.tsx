import React, { useState } from "react";
import { addMessage } from "api/add-message";
import { loadMessages } from "api/load-messages";
import { AppContext } from "context/app-context";
import { Message } from "models/message";
import { Page } from "components/page";
import { sortMessages } from "helpers/sort-messages";

export const PageController: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [sortColumn, setSortColumn] = useState<"title" | "date">("date");
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

	React.useEffect(() => {
		async function fetchData() {
			const messages = await loadMessages();
			setMessages(messages);
		}
		fetchData();
	}, []);

	const addNewMessage = async (message: Message): Promise<void> => {
		const id = await addMessage(message);
		const newMessage = { ...message, id };
		setMessages([...messages, newMessage]);
	};

	const changeSortColumn = (sortColumn: "title" | "date") => {
		setSortColumn(sortColumn);
		const sortedMessages = sortMessages(messages, sortColumn, sortDirection);
		setMessages(sortedMessages);
	};

	const changeSortDirection = (sortDirection: "asc" | "desc") => {
		setSortDirection(sortDirection);
		const sortedMessages = sortMessages(messages, sortColumn, sortDirection);
		setMessages(sortedMessages);
	};

	const sortedMessages = sortMessages(messages, sortColumn, sortDirection);

	const contextValue = {
		messages: sortedMessages,
		sortColumn,
		sortDirection,
		addNewMessage,
		changeSortColumn,
		changeSortDirection,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<Page />
		</AppContext.Provider>
	);
};
