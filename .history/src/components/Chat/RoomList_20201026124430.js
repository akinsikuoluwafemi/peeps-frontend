import React, {useState, useContext} from 'react';
import RoomItem from './RoomItem';
import {
  SelectedChatContext,
  UserIdContext,
  AllUserIdContext,
  RequestOwnerIdContext,
} from "../../ContextFile";

export default function RoomList({ rooms, onRoomSelect }) {
  



  let { allUserId, setAllUserId } = useContext(AllUserIdContext);

  let { chatReceiverId, setChatReceiverId } = useContext(RequestOwnerIdContext);

  console.log(chatReceiverId);
  console.log(rooms);


  const renderRequiredRoom =

 

  const renderedList = rooms.map((room) => {
    
    return (
      <RoomItem allUserId={allUserId} SelectedChatContext={SelectedChatContext} onRoomSelect={onRoomSelect} room={room} />
    );

  });
  return <div>{renderedList}</div>;
}
