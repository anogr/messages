import dayjs from "dayjs";
import { sortMessages } from './sort-messages';

it('sorts messages', () => {
	const unsortedMessages = [
		{
			id: 1,
			title: "messageTitle1",
			body: "messageBody1",
			signature: "messageSignature1",
			date: dayjs("2021-01-31T12:00:00.00Z")
		},
		{
			id: 2,
			title: "messageTitle2",
			body: "messageBody2",
			signature: "messageSignature2",
			date: dayjs("2021-01-31T12:00:00.00Z")
		}
	];

	const sortedMessages = sortMessages(unsortedMessages, "title", "desc");

	expect(sortedMessages[0].id).toBe(2);
});
