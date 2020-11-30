import React, {useContext, useEffect} from 'react';
import { RoomDataContext } from '../ContextFile';
import axios from 'axios';
import FormInput from './Chat/FormInput';
import './Chat/Chat.scss';



export default function RoomShow({cableApp}) {
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
  
  
    useEffect(() => {
        getRoomData(29);
    })


      const getRoomData = async (id) => {
        

        const token = JSON.parse(localStorage.getItem("token"));
          
        let res = await axios
          .get(`http://localhost:3001/rooms/${id}`, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          })
          .then(
            (result) => {
                setCurrentRoom({
                  //   room: result.data,
                  //   users: result.data.attributes.users,
                  //   messages: result.data.attributes.messages
                //   room: result.data,
                //   users: result.data.users,
                //   messages: result.data.messages,
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
              messages: newRoom.messages
          })
      }



   
    return (
        <div>
            <FormInput/>
        </div>
    )
}
