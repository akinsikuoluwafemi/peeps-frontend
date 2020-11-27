import React, {useContext, } from 'react';
import { RoomDataContext } from '../ContextFile';
import axios from 'axios';



export default function RoomShow({cableApp}) {
   console.log(cableApp);
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
    console.log(currentRoom)



      const getRoomData = async (id) => {
        

        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
          
        let res = await axios
          .get(`localhost:3001/rooms/${id}`, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          })
          .then(
            (result) => {
            //   setCurrentRoom({
                console.log(result)
            //   });
            },
            (error) => {
              console.log(error);
            }
          );

        return res;
      };




   
    return (
        <div>
            RoomShow component
        </div>
    )
}
