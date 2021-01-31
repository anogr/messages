import { ApiMessage } from "api/models/api-message";
import dayjs from "dayjs";
import { Message } from "models/message";

export function mapApiMessageToMessage(apiMessage: ApiMessage): Message {
	const message = {
		...apiMessage,
		date: dayjs(apiMessage.date)
	};
	return message;
}
