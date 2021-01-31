import { mapApiMessageToMessage } from "api/mappers/map-api-message-to-message";
import { ApiMessage } from "api/models/api-message";
import { Message } from "models/message";

export async function loadMessages(): Promise<Message[]> {
	const init: RequestInit = {
		method: "GET",
	};

	const response = await fetch("/messages", init);
	const apiMessages = (await response.json()) as ApiMessage[];
	const messages = apiMessages.map(mapApiMessageToMessage);
	return messages;
}
