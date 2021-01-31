import React, { useContext, useState } from "react";
import { Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Add, ArrowDownward, ArrowUpward, Sort, Check } from "@material-ui/icons";
import { MessageContext } from "models/message-context";
import { AppContext } from "context/app-context";
import { AddMessageDialog } from "components/add-message-dialog";

export const MessageToolbar: React.FC = () => {
	const messageContext = useContext<MessageContext | null>(AppContext);
	const [anchorElement, setAnchorElement] = useState<HTMLElement | undefined>();
	const [openDialog, setOpenDialog] = useState<boolean>(false);

	if (messageContext === null) {
		return null;
	}

	const handleSortDirectionClick = () => {
		messageContext.changeSortDirection(messageContext.sortDirection === "asc" ? "desc" : "asc");
	};

	const handleSortColumnClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		setAnchorElement(event.currentTarget);
	};

	const handleSortTitleColumnClick = () => {
		messageContext.changeSortColumn("title");
		setAnchorElement(undefined);
	};

	const handleSortDateColumnClick = () => {
		messageContext.changeSortColumn("date");
		setAnchorElement(undefined);
	};

	const handleAddClick = () => {
		setOpenDialog(true);
	};

	const sortColumnMenu = (
		<Menu anchorEl={anchorElement} open={anchorElement !== undefined} onClose={() => setAnchorElement(undefined)}>
			<MenuItem onClick={handleSortTitleColumnClick}>
				{messageContext.sortColumn === "title" ? (
					<ListItemIcon>
						<Check />
					</ListItemIcon>
				) : null}
				<ListItemText inset={messageContext.sortColumn !== "title"} primary="Ämne" />
			</MenuItem>
			<MenuItem onClick={handleSortDateColumnClick}>
				{messageContext.sortColumn === "date" ? (
					<ListItemIcon>
						<Check />
					</ListItemIcon>
				) : null}
				<ListItemText inset={messageContext.sortColumn !== "date"} primary="Datum" />
			</MenuItem>
		</Menu>
	);

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	return (
		<Toolbar>
			<Grid container alignItems="center" justify="space-between">
				<Grid item>
					<Typography variant="h5">Meddelanden</Typography>
				</Grid>
				<Grid item>
					<IconButton onClick={handleSortDirectionClick}>{messageContext.sortDirection === "asc" ? <ArrowUpward /> : <ArrowDownward />}</IconButton>
					<IconButton onClick={handleSortColumnClick}>
						<Sort />
					</IconButton>
					<IconButton onClick={handleAddClick}>
						<Add />
					</IconButton>
					{sortColumnMenu}
					{openDialog ? <AddMessageDialog openDialog={openDialog} onClose={handleCloseDialog} /> : null}
				</Grid>
			</Grid>
		</Toolbar>
	);
};
