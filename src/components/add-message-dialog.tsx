import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Message } from "models/message";
import dayjs from "dayjs";
import { MessageContext } from "models/message-context";
import { AppContext } from "context/app-context";

export interface AddMessageDialogProps {
	openDialog: boolean;
	onClose: () => void;
}

export const AddMessageDialog: React.FC<AddMessageDialogProps> = ({ openDialog, onClose }) => {
	const messageContext = useContext<MessageContext | null>(AppContext);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [signature, setSignature] = useState("");

	const handleSaveClick = () => {
		const newMessage: Message = {
			id: 0,
			title,
			body,
			signature,
			date: dayjs(),
		};
		messageContext?.addNewMessage(newMessage);
		onClose();
	};

	return (
		<Dialog open={openDialog} onClose={onClose} fullWidth={true} maxWidth="xs">
			<DialogTitle>Nytt meddelande</DialogTitle>
			<DialogContent>
				<Grid container={true} direction="column">
					<Grid item={true}>
						<TextField label="Ämne" value={title} fullWidth={true} margin="normal" onChange={(event) => setTitle(event.target.value)} InputLabelProps={{ shrink: true }} />
					</Grid>
					<Grid item={true}>
						<TextField label="Meddelande" value={body} fullWidth={true} margin="normal" onChange={(event) => setBody(event.target.value)} InputLabelProps={{ shrink: true }} />
					</Grid>
					<Grid item={true}>
						<TextField label="Signatur" value={signature} fullWidth={true} margin="normal" onChange={(event) => setSignature(event.target.value)} InputLabelProps={{ shrink: true }} />
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSaveClick}>Spara</Button>
			</DialogActions>
		</Dialog>
	);
};
