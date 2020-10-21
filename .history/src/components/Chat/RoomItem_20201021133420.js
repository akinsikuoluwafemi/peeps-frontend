import React, {useEffect, useContext} from 'react';
import { SelectedReqDescContext } from '../../ContextFile';



export default function RoomItem({ room, onRoomSelect, SelectedChatContext }) {
  let {reqDescription, setReqDescription} = useContext(SelectedReqDescContext)
  
  console.log(reqDescription)

  console.log(room);

  useEffect(() => {
    
  })

  const getRoomDetails = () => {
    onRoomSelect(room)

  console.log(reqDescription);




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
