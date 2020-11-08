import React, {useEffect, useContext} from 'react';
import {
  SelectedReqDescContext,
  SelectedRoomContext,
  AllRequestContext,
  UserContext,
  ReqOwnerFirstNameContext,
  RequestOwnerIdContext,
  UserIdContext,
} from "../../ContextFile";
import axios from "axios";


export default function RoomItem({ room, onRoomSelect, SelectedChatContext, allUserId }) {
  let { reqDescription, setReqDescription } = useContext(SelectedReqDescContext);

  let { selectedRoom, setSelectedRoom } = useContext(SelectedRoomContext);

  let {chatReceiverId, setChatReceiverId } = useContext(RequestOwnerIdContext);

  let { userId, setUserId } = useContext(UserIdContext);

  console.log(allUserId);

  let { allRequest } = useContext(AllRequestContext);

  let { userData, setUserData } = useContext(UserContext);

  let { reqOwnerFirstName, setReqOwnerFirstName } = useContext(
    ReqOwnerFirstNameContext
  );

  console.log(reqDescription);

  console.log(room);

  useEffect(() => {});

  const getRequestOwner = async (id) => {
    if (id) {
      console.log(userData);
      let res = await axios
        .get(`http://localhost:3001/users/${id}`, {
          headers: {
            Authorization: `Basic ${userData.token}`,
          },
        })
        .then(
          (response) => {
            console.log(response.data);
            let ownerRec = Object.values(response.data);
            console.log(ownerRec);
            setReqOwnerFirstName(ownerRec[1]);
            setChatReceiverId(ownerRec[0]);
            console.log(reqOwnerFirstName);
          },
          (error) => {
            console.log(error);
          }
        );
      return res;
    }
  };

  const getRoomDetails = () => {
   if(userId === 3 && chatReceiverId === 6){
    onRoomSelect(room);
     alert
   }


    console.log(reqDescription);
    // alert(room.name);
    console.log(allRequest);
    let req = allRequest.filter((request) => {
      return room.name === request.description;
    });

    let receiverId = req.map((request) => request.user_id);
    
    // alert(receiverId);
    
    setChatReceiverId(receiverId);

    getRequestOwner(receiverId);





  };

  return (
    <>
      {/* style={{pointerEvents:'none'}} */}
      <div
        onClick={getRoomDetails}
        class="friend-drawer friend-drawer--onhover"
      >
        <div class="text">
          <p class="text-muted">{room.name}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
