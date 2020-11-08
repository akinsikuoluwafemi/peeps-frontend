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



  let { allUserId, setAllUserId } = useContext(AllUserIdContext);

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
      if(message)
    })
    
    return (
      <RoomItem allUserId={allUserId} SelectedChatContext={SelectedChatContext} onRoomSelect={onRoomSelect} room={room} />
    );

  });
  return <div>{renderedList}</div>;
}
