import React from 'react';

export default function RoomItem({ room, onRoomSelect }) {
  console.log(room);
  return (
    
      <div onCli class="friend-drawer friend-drawer--onhover">
        <div class="text">
          <h6>You & jimoh</h6>
          <p class="text-muted"> {room.name}</p>
        </div>
      </div>
    
  );
}