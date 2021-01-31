import { Message } from "models/message";

export async function addMessage(message: Message): Promise<number> {
	const init: RequestInit = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(message),
	};

	const response = await fetch("/messages", init);
	const data = await response.json();
	return data.id;
}
