import React, {useContext, useEffect} from 'react';
import { RoomDataContext } from '../ContextFile';
import axios from 'axios';



export default function RoomShow({cableApp}) {
   console.log(cableApp);
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
    console.log(currentRoom)

    useEffect(() => {
        getRoomData(29);
    })


      const getRoomData = async (id) => {
        

        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
          
        let res = await axios
          .get(`http://localhost:3001/rooms/${id}`, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          })
          .then(
            (result) => {
                setCurrentRoom({
                  room: result.data,
                  users: result.data.attributes.users,
                  messages: result.data.attributes.messages
                });
            },
            (error) => {
              console.log(error);
            }
          );

        return res;
      };

    
      const updateAppStateRoom = (newRoom) => {
          setCurrentRoom({
              room: newRoom.room.data,
              users: newRoom.users,
              messa
          })
      }



   
    return (
        <div>
            RoomShow component
        </div>
    )
}
