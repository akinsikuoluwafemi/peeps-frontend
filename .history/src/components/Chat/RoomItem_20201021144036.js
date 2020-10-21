import React, {useEffect, useContext} from 'react';
import { SelectedReqDescContext, SelectedRoomContext } from "../../ContextFile";



export default function RoomItem({ room, onRoomSelect, SelectedChatContext }) {
  let {reqDescription, setReqDescription} = useContext(SelectedReqDescContext)
  let { selectedRoom, setSelectedRoom } = useContext(SelectedRoomContext);
  
  console.log(reqDescription)

  console.log(room);

  useEffect(() => {
    
  })

  const getRoomDetails = () => {
    onRoomSelect(room)
    console.log(reqDescription);
    alert(  console.log(room);
)





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
