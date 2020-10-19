import React, {useState} from 'react';
import RoomItem from './RoomItem';

export default function RoomList({ rooms, onRoomSelect }) {
  console.log(rooms);

  const renderedList = rooms.map((room) => {
    return <RoomItem room={room} />;
  });
  return <div>{renderedList}</div>;
}
