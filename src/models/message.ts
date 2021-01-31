import dayjs from "dayjs";

export interface Message {
	id: number;
	title: string;
	body: string;
	signature: string;
	date: dayjs.Dayjs;
}
