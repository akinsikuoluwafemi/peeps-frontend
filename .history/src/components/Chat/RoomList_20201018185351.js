import React, {useState} from 'react';
import RoomItem from './RoomItem';
import {} from '../../Co'

export default function RoomList({ rooms, onRoomSelect }) {
  console.log(rooms);

  const renderedList = rooms.map((room) => {
    return <RoomItem onRoomSelect={onRoomSelect} room={room} />;
  });
  return <div>{renderedList}</div>;
}
