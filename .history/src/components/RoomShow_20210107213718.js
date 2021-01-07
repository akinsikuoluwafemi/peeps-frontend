import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  RoomDataContext,
  UserIdContext,
  ChatRoomIdContext,
  ReqOwnerFirstNameContext,
  CurrentVolunteerContext,
  DeactivateContext,
  RepublishingContext,
} from "../ContextFile";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import './Chat.scss';
import Checkbox from "@material-ui/core/Checkbox";
import {useLocation} from 'react-router-dom';
import ChatMessage from './ChatMessage'
import Faker from 'faker';
import { Link } from 'react-router-dom';


export default function RoomShow({cableApp}) {
   
  useEffect(() =>{
    
  },[])
  
  
  let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
  let { userId} = useContext(UserIdContext);
  let { chatRoomId } = useContext(ChatRoomIdContext);
  let { currentVol } = useContext(CurrentVolunteerContext);

  let [ checked, setChecked ] = useState(currentVol.fulfilled || '');
  let loctaion = useLocation();

  let {deactivate, setDeactivate} = useContext(DeactivateContext)

  let { reqOwnerFirstName } = useContext(ReqOwnerFirstNameContext);

  let { requiresRepublishing, setRequiresRepublishing } = useContext(
    RepublishingContext
  );

  // console.log(currentVol);
    // console.log(typeof currentRoom.room)
  console.log(requiresRepublishing)
 

let roomParam = currentRoom.room.id || parseInt(loctaion.pathname.match(/\d+$/)[0]);

    
    useEffect(() => {
       
      getRoomData(chatRoomId || roomParam);
        
      createWebSocket()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  
  // console.log(selectedRequest)
  // console.log(currentVol.fulfilled)
  
  const inputRef = useRef();

  const handleChecked = (e) => {
    if(currentRoom.messages.length > 0){
      // 
    setChecked(prevValue => !prevValue)
    // console.log(e.target.checked);

    alterFulfilled( currentVol.id);

    if (checked) {
      alert(`setting fulfilled to ${e.target.checked}`);
    } else if (!checked) {
      alert(`setting fulfilled to ${e.target.checked}`);
    }
      // 

    }
    else {
      alert('You must send a message before you fulfill this request')
    }
  }

  // console.log(checked)



  const requestToFulfil = (id) => {
    let obj = {
      fulfilled: true
    };

    const token = JSON.parse(localStorage.getItem("token"));

    let res = axios
      .patch(`http://localhost:3001/requests/${id}`, obj, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          // console.log("success", response.data);
        },
        (error) => {
          // console.log("Error", error);
        }
      );

    return res;
  };


const checkActiveRequest = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"));

  let res = await axios
    .get(`http://localhost:3001/deactivate/${id}`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then(
      (response) => {
        // alert(response.data + 'requestToFulfil')
        setDeactivate(response.data)
        if(response.data === true){
          requestToFulfil(currentVol.request_id);
          deactivateRooms(currentVol.request_id)


          alert('This request has been set to fulfilled and the room has been archived')

        }
         
      },
      (error) => {
        // console.log(error);
      }
    );

  return res;

}
console.log(currentVol.request_id)



  const deactivateRooms = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
     
    let res = await axios
      .get(`http://localhost:3001/deactivaterooms/${id}`,
        {
         headers: {
           Authorization: `Basic ${token}`,
         },
       }
       
    )
       .then(
         (response) => {
          //  console.log(response.data);

         },
         (error) => {
          //  console.log(error);
         }
    );
  
     return res;

}

if(deactivate === true){
  deactivateRooms(currentVol.request_id)

}

   const alterFulfilled = (id) => {
     let obj = {
       fulfilled: !checked
     };

    const token = JSON.parse(localStorage.getItem("token"));

     let res = axios
       .patch(`http://localhost:3001/requests_users/${id}`, obj, {
         headers: {
           Authorization: `Basic ${token}`,
         },
       })
       .then(
         (response) => {
          //  console.log("success", response.data);
         },
         (error) => {
          //  console.log("Error", error);
         }
       );

     return res;
   };

  const getRoomData = async (id) => {

        const token = JSON.parse(localStorage.getItem("token"));
          
        let res = await axios
          .get(`http://localhost:3001/rooms/${id}`, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          })
          .then(
            (result) => {
              // console.log(result.data);
              checkActiveRequest(currentVol.request_id)
              setCurrentRoom({
                room: result.data,
                messages: result.data.messages,
                // users: [...currentRoom.users]
              });
            },
            (error) => {
              // console.log(error);
            }
          );

        return res;
      };

  console.log(currentRoom.messages.length);

      const createWebSocket = () => {
        cableApp.room = cableApp.cable.subscriptions.create({
          channel: 'RoomsChannel',
          room: chatRoomId || roomParam
        }, {
          received: (updatedRoom) => {
            updateAppStateRoom(updatedRoom)
          }
        })

      getRoomData(chatRoomId || roomParam);


      }
    
      const updateAppStateRoom = (newRoom) => {
          setCurrentRoom({
              room: newRoom.room,
              // users: newRoom.users,
              messages: newRoom.messages
          })
      }

  // console.log(inputRef.current)

    const handleSubmit = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));

    let message = {
      body: inputRef.current.value,
      user_id: userId,
      room_id: chatRoomId || roomParam,
    };
    

    // console.log(message);
    

    e.preventDefault();

      if(inputRef.current.value.length === 0){
        alert('message can not be empty')
      }

    inputRef.current.value = "";


    let res = axios
      .post("http://localhost:3001/messages", message, {
        headers: {
          Authorization: `Basic ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      .then(
        (response) => {
          // console.log("Success", response.data);
          
        },
        (error) => {
          console.error("Error", error);
        }
      );

    return res;
  };


  const displayMessages = (messages) => {
    return messages.map(message => {
      return <ChatMessage  key={message.id} message={message} />
    })
  }



   
  return (
    <>
      {requiresRepublishing ? (
        <div className="text-center m-auto">
          {" "}
          <p>The Request Owner has to republish this request</div>{" "}
          <Link to="/feed">Go to Feeds</Link>
        </div>
      ) : (
        <div class="messages-wrapper">
          <div className="item item--2">
            <div className="item--2 inner-one">
              <div class="">
                <div class="friend-drawer no-gutters friend-drawer--grey d-flex align-items-center ">
                  <img
                    class="profile-image mr-3"
                    src={Faker.image.people()}
                    alt="faker-pic"
                  />
                  <div class="text mr-3">
                    <h6 className="text-left">{reqOwnerFirstName}</h6>
                    <p>{currentRoom.room.name}</p>
                  </div>
                  <span class="settings-tray--right ">
                    {/* <i class="material-icons">cached</i> */}
                    {/* <i class="material-icons">message</i> */}

                    <div className="d-flex align-items-center">
                      {currentVol.fulfilled === true ? (
                        <span style={{ color: "green" }}>
                          Already Fulfilled
                        </span>
                      ) : (
                        <>
                          <Typography>Set to Fufilled</Typography>
                          <Checkbox
                            // defaultChecked={currentVol.fulfilled}

                            disabled={currentRoom.messages.length === 0}
                            defaultChecked={checked}
                            color="primary"
                            value={checked}
                            onChange={handleChecked}
                          />
                        </>
                      )}

                      {/* <CancelIcon onClick={closeChat} /> */}
                      {currentRoom.messages.length < 0 ? (
                        <h3 className="text-center m-auto">
                          Type your first message
                        </h3>
                      ) : null}
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="messages-container">
              {/* roomDetail start */}
              {currentRoom.messages ? (
                displayMessages(currentRoom.messages)
              ) : (
                <h3 className="text-center">
                  This room has no messages yet - be the first to post!
                </h3>
              )}

              {/* roomDetail end */}
            </div>

            {/* form start */}
            <form className=" footer " onSubmit={handleSubmit}>
              {/* // <form className="item--2 inner-three " > */}
              <div class="chat-box-tray">
                <i class="material-icons">sentiment_very_satisfied</i>
                <input
                  className="chatbody"
                  ref={inputRef}
                  type="text"
                  placeholder="Type your message here..."
                />
                <i class="material-icons">mic</i>
              </div>
            </form>
            {/* form end  */}
          </div>
        </div>
      )}
    </>
  );
}
