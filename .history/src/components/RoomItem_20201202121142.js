import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext } from "../ContextFile";


export default function RoomItem({room}) {
    let { userId, setUserId } = useContext(UserIdContext);
    
    const [roomReceiver, setRoomReceiver] = useState(0);

    
    console.log(room)
    if(userId === room.sender_id){
        setRoomReceiver(room.receiver_id);
    }else if (userId === room.receiver_id) {
      setRoomReceiver(room.sender_id);
    }

    useEffect(() => {
    }, [])


    




    return (
        <div>
            {room.name}
        </div>
    )
}
