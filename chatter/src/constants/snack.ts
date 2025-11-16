import { makeVar } from "@apollo/client";
import { SnackMessage } from "../interfaces/snack-message.interfaces";

export const snackVar = makeVar<SnackMessage | undefined>(undefined)