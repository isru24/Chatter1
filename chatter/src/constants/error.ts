import { SnackMessage } from "../interfaces/snack-message.interfaces";

const UNKOWN_ERROR_MESSAGE = "An unkown error has occured. Try again later";
const UNKOWN_ERROR_SNACK_MESSAGE: SnackMessage={
    message:UNKOWN_ERROR_MESSAGE,
    type:"error"
}

export {UNKOWN_ERROR_MESSAGE,UNKOWN_ERROR_SNACK_MESSAGE}