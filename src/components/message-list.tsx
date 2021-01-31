import React, { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { MessageContext } from "models/message-context";
import { AppContext } from "context/app-context";

const useStyles = makeStyles((theme) => ({
	headingItem: {
		width: 150,
	},
}));

export const MessageList: React.FC = () => {
	const messageContext = useContext<MessageContext | null>(AppContext);
	const classes = useStyles();

	if (messageContext === null) {
		return null;
	}

	const messageItems = messageContext.messages.map((message) => (
		<Accordion key={message.id}>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<Grid container>
					<Grid item className={classes.headingItem}>
						<Typography variant="body1">{message.signature}</Typography>
					</Grid>
					<Grid item className={classes.headingItem}>
						<Typography variant="body1">{message.title}</Typography>
					</Grid>
					<Grid item className={classes.headingItem}>
						<Typography variant="body1" align="right">
							{message.date.format("YYYY-MM-DD HH:mm")}
						</Typography>
					</Grid>
				</Grid>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant="body2">{message.body}</Typography>
			</AccordionDetails>
		</Accordion>
	));

	return <>{messageItems}</>;
};
