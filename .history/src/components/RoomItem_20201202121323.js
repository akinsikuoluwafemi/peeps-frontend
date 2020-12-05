import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext } from "../ContextFile";
import { Link } from 'react-router-dom';


export default function RoomItem({room}) {
    let { userId, setUserId } = useContext(UserIdContext);
    

    
    console.log(room)
   

    useEffect(() => {
    }, [])


    




    return (
        <div>

            {room.name}

        </div>
    )
}
