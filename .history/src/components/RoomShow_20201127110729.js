import React, {useContext} from 'react';
import { RoomDataContext } from '../ContextFile';




export default function RoomShow({cableApp}) {
   console.log(cableApp);
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
    console.log(currentRoom)



      const getAllRooms = async () => {
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