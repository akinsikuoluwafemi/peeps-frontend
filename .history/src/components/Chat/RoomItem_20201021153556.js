import React, {useEffect, useContext} from 'react';
import { SelectedReqDescContext, SelectedRoomContext, AllRequestContext, UserContext } from "../../ContextFile";
import axios from axios;
            // <UserContext.Provider value={{ userData, setUserData }}>



export default function RoomItem({ room, onRoomSelect, SelectedChatContext }) {
  let {reqDescription, setReqDescription} = useContext(SelectedReqDescContext)
  let { selectedRoom, setSelectedRoom } = useContext(SelectedRoomContext);
  
  let { allRequest } = useContext(AllRequestContext);

  let {userData, setUserData}

  console.log(reqDescription)

  console.log(room);

  useEffect(() => {
    
  })

  const getRequestOwner = async (id) => {

     if (id) {
       console.log(userData);
       let res = await axios
         .get(`http://localhost:3001/users/${id}`, {
           headers: {
             'Authorization': `Basic ${userData.token}`,
           },
         })
         .then(
           (response) => {
             console.log(response.data);
            //  let ownerRec = Object.values(response.data);
            //  setReqOwnerFirstName(ownerRec[1]);
            //  console.log(reqOwnerFirstName);
           },
           (error) => {
             console.log(error);
           }
         );
       return res;
     }
   };




  const getRoomDetails = () => {
    onRoomSelect(room);
    console.log(reqDescription);
    alert(room.name);
    console.log(allRequest);
    let req =  allRequest.filter((request) => {
      return room.name === request.description;
    });
    
    let receiverId =  req.map(request => request.user_id)

    alert(receiverId);


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
