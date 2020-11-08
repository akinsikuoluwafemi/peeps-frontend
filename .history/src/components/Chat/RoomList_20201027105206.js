import React, { useState, useEffect, useContext } from 'react';

import RoomItem from './RoomItem';

import {
  SelectedChatContext,
  UserIdContext,
  AllUserIdContext,
  RequestOwnerIdContext,
} from "../../ContextFile";

export default function RoomList({ rooms, onRoomSelect }) {
  

  useEffect(() => {
    
  },[])



  let { userId, setUserId } = useContext(UserIdContext);

  let { chatReceiverId, setChatReceiverId } = useContext(RequestOwnerIdContext);

  // let { allUserId, setAllUserId } = useContext(AllUserIdContext);

  console.log(chatReceiverId);
  console.log(rooms);



  // const renderRequiredRoom = rooms.map(room => {
  //   console.log(room.messages)
  // })

  // renderRequiredRoom();


  const uniqueUserRoom = () => {
    let allRooms = rooms.map(room => {
      console.log(room.messages)
    })
    return allRooms;

  }

  

 

  const renderedList = rooms.map((room) => {
    
    console.log(room);
    console.log(room.messages);

      return (
          <RoomItem
            // allUserId={allUserId}
            SelectedChatContext={SelectedChatContext}
            onRoomSelect={onRoomSelect}
            room={room}
          />
        );

      //   if(room){

      //     let renderRoom = room.messages.map((message) => {

      //   if(message.user_id === chatReceiverId && message.user_id === userId ){
      //   return (
      //     <RoomItem
      //       SelectedChatContext={SelectedChatContext}
      //       onRoomSelect={onRoomSelect}
      //       room={room}
      //     />
      //   );
      // }

      // else {
      //   return (
      //     <RoomItem
      //       SelectedChatContext={SelectedChatContext}
      //       onRoomSelect={onRoomSelect}
      //       room={room}
      //     />
      //   );
      // }





    // })


    // return renderRoom;

    //     }

    

  
    

  });
  return <div>{renderedList}</div>;
}
