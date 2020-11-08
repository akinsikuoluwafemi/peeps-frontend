import React, {useState,useEffect, useContext} from 'react';
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

  console.log(chatReceiverId);
  console.log(rooms);



  // const renderRequiredRoom = rooms.map(room => {
  //   console.log(room.messages)
  // })

  // renderRequiredRoom();


 

  const renderedList = rooms.map((room) => {
    console.log(room.messages);

    const renderRoom = room.messages.map(message => {
      if(message.user_id === chatReceiverId && message.user_id === userId ){
        return (
          <RoomItem
            SelectedChatContext={SelectedChatContext}
            onRoomSelect={onRoomSelect}
            room={room}
          />
        );
      }else {
        
      }
    })
    
    return renderRoom;

  });
  return <div>{renderedList}</div>;
}
