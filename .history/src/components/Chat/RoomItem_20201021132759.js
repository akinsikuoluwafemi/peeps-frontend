import React from 'react';

export default function RoomItem({ room, onRoomSelect, SelectedChatContext }) {
  console.log(room);

  const getRoomDetails = () => {
    
  }


  return (
    <>
      <div onClick={() => } class="friend-drawer friend-drawer--onhover">
        <div class="text">
          <p class="text-muted"> {room.name}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
