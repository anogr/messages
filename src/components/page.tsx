import React from "react";
import { Box } from "@material-ui/core";
import { MessageToolbar } from "components/message-toolbar";
import { MessageList } from "components/message-list";

export const Page: React.FC = () => {
	return (
		<Box maxWidth={600}>
			<MessageToolbar />
			<MessageList />
		</Box>
	);
};
