import React, {useEffect, useContext} from 'react';
import {SelectedReqDescContext} from '../../'


export default function RoomItem({ room, onRoomSelect, SelectedChatContext }) {
  let {reqDescription, setReqDescription} = useContext(SelectedReqDescContext)
  

  console.log(room);

  useEffect(() => {
    
  })

  const getRoomDetails = () => {
    onRoomSelect(room)




  }


  return (
    <>
      <div onClick={getRoomDetails} class="friend-drawer friend-drawer--onhover">
        <div class="text">
          <p class="text-muted"> {room.name}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
