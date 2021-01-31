import { Message } from "./message";

export interface MessageContext {
	messages: Message[];
	sortDirection: "asc" | "desc";
	sortColumn: "date" | "title";
	addNewMessage: (message: Message) => void;
	changeSortColumn: (sortColumn: "title" | "date") => void;
	changeSortDirection: (sortDirection: "asc" | "desc") => void;
}
