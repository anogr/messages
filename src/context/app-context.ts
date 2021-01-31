import React from "react";
import { MessageContext } from "models/message-context";

export const AppContext = React.createContext<MessageContext | null>(null);
