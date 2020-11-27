import React, {useContext} from 'react';
import { RoomDataContext } from '../ContextFile';




export default function RoomShow({cableApp}) {
   console.log(cableApp);
    let { currentRoom,setCurrentRoom } = useContext(Room)
   
    return (
        <div>
            RoomShow component
        </div>
    )
}
