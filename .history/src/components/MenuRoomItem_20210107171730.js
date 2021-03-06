import React, {useContext} from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import {
  AllRoomContext
} from '../ContextFile';
import axios from 'axios';


export default function MenuRoomItem({room}) {
   
    let {allRooms, setAllRooms } = useContext(AllRoomContext)
         console.log(room)
        //  console.log(allRooms)

        const handleRoomDetails = () => {
        let pathchedValue = room.patched === false ? true : false;
          let obj = {
         patched: pathchedValue,
       };


       const token = JSON.parse(localStorage.getItem("token"));

       let res = axios
         .patch(`http://localhost:3001/republishroom/${room.id}`, obj, {
           headers: {
             Authorization: `Basic ${token}`,
           },
         })
         .then(
           (response) => {
            
             console.log("success", response.data);
            let tempRequest = [response.data, ...allRooms]
             setAllRooms(tempRequest)
             alert('Room Republished')

           },
           (error) => {
             console.log("Error", error);
           }
         );

       return res;
     };


    return (
         <MenuItem
              key={room.id}
              selected={room[0]}
              onClick={handleRequestDetails}
            >
              {room.name}
        </MenuItem>
    )
}
