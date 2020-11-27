import React, {useContext} from 'react';
import { RoomDataContext } from '../ContextFile';
import axios from 'axios';



export default function RoomShow({cableApp}) {
   console.log(cableApp);
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
    console.log(currentRoom)



      const getRoomData = async () => {
        

    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
          
        let res = await axios
          .get(`localhost:3001/rooms`, {
            headers: {
              Authorization: `Basic ${userData.token}`,
            },
          })
          .then(
            (response) => {
              setAllRooms(response.data);
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
