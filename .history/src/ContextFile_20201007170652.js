import { intervalToDuration } from "date-fns";
import { createContext } from "react";

export const UserLatContext = createContext();

export const UserLngContext = createContext();

export const FormRequestContext = createContext();

export const UserContext = createContext();

export const AllRequestContext = createContext();

export const FirstNameContext = createContext();

export const UserIdContext = createContext();

export const RequestOwnerContext = createContext();

export const AllVolunteerContext = createContext();


// // messages {
//  body: 'text',
//  sender_id: int
// }
// // recipients: {
    // message_id: int,
    // user_id: int
// }
// user: {
//      id: int,
        // first_name: str,
        // last_name: str,
        // password: hash
// }
