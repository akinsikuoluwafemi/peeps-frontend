import React, {useEffect, useContext} from 'react';
import { SelectedReqDescContext, SelectedRoomContext, AllRequestContext } from "../../ContextFile";



export default function RoomItem({ room, onRoomSelect, SelectedChatContext }) {
  let {reqDescription, setReqDescription} = useContext(SelectedReqDescContext)
  let { selectedRoom, setSelectedRoom } = useContext(SelectedRoomContext);
  
  let { allRequest } = useContext(AllRequestContext);


  console.log(reqDescription)

  console.log(room);

  useEffect(() => {
    
  })

  const getRoomDetails = () => {
    onRoomSelect(room);
    console.log(reqDescription);
    alert(room.name);
    console.log(allRequest);
  con  allRequest.filter((request) => {
      return room.name === request.description;
    });
    





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
