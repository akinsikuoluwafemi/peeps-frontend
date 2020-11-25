// import React, { useContext, useState , useEffect} from "react";
// import "./Chat.scss";
// import chatimg from "../../images/image4.jpg";
// import {
//   ChatContext,
//   UserContext,
//   UserIdContext,
//   FirstNameContext,
//   ReqOwnerFirstNameContext,
//   AllMessagesContext,
// } from "../../ContextFile";
// import Checkbox from "@material-ui/core/Checkbox";
// import { Typography } from "@material-ui/core";
// import CancelIcon from "@material-ui/icons/Cancel";
// import axios from 'axios';
// import MessageList from './MessageList';



// export default function Chat() {
//   let [checked, setChecked] = useState(false);

//   let { showChat, setShowChat } = useContext(ChatContext);

//   let { userData, setUserData } = useContext(UserContext);

//   let { userId, setUserId } = useContext(UserIdContext);

//   let { reqOwnerFirstName } = useContext(ReqOwnerFirstNameContext);
//   let { firstName } = useContext(FirstNameContext)
  
//   console.log(userId);
//   console.log(firstName);
//   console.log(reqOwnerFirstName);



//   const [body, setBody] = useState('');

//   let { allMessages, setAllMessages } = useContext(AllMessagesContext);

//   // console.log(dayjs(userData.user.created_at).fromNow());
 
//   console.log(allMessages);

//   useEffect(() => {
//     getAllMessages();
//   },[])


//   const handleChecked = (event) => {
//     setChecked(event.target.checked);
//     alert(checked);
//     console.log("checked");
//   };

//   const closeChat = () => {
//     setShowChat(false);
//     console.log(showChat);
//   };

//   const handleChange = (e) => {
//     setBody(e.target.value)
//   }

//   const handleClick = (e) => {
//     const token = JSON.parse(localStorage.getItem("token"));
//     console.log(token);

//     let message = {
//       body,
//       user_id: userId,
//     };

//     let tempArray = [...allMessages, message];

//     console.log(message);

//     let res = axios
//       .post("http://localhost:3001/messages", message, {
//         headers: {
//           Authorization: `Basic ${token}`,
//           "Content-Type": "application/json",
//         },
//       })
//       .then(
//         (response) => {
//           console.log("Success", response.data);
//           setBody("");
//           setAllMessages(tempArray);

//         },
//         (error) => {
//           console.error("Error", error);
//         }
//       );

//     return res;

//   };

//   const handleSubmit = (e) => {
//      const token = JSON.parse(localStorage.getItem("token"));
//     console.log(token);
    
//     let message = {
//       body,
//       user_id: userId
//     }
//     console.log(message);
//     let tempArray = [...allMessages, message];
//     e.preventDefault();

//      let res = axios
//       .post("http://localhost:3001/messages", message, {
//         headers: {
//           "Authorization": `Basic ${token}`,
//           "Content-Type": "application/json",
//         },
//       })
//       .then(
//         (response) => {
//           console.log("Success", response.data);
//             setBody("");
//             setAllMessages(tempArray);
//         },
//         (error) => {
//           console.error("Error", error);
//         }
//       );

//     return res;
//   }


//   const getAllMessages = async () => {
//      const token = JSON.parse(localStorage.getItem("token"));
//      console.log(token);

//     let res = await axios.get("http://localhost:3001/messages", {
//       headers: {
//         'Authorization': `Basic ${userData.token}`,
//       },
//     }).then(response => {
//       setAllMessages(response.data);
//       console.log(response.data);
//     }, (error) => {
//         console.log(error);
//     })

//     return res;
//   }

//   console.log(allMessages);





//   return (
//     <div className="container chat-height">
//       <div className="row no-gutters ">
//         <div class="col ">
//           <div class="settings-tray">
//             <div class="friend-drawer no-gutters friend-drawer--grey d-flex align-items-center ">
//               <img class="profile-image" src={chatimg} alt="" />
//               <div class="text">
//                 <h6 className="text-left">{reqOwnerFirstName}</h6>
//                 <p class="text-muted">
//                   Layin' down the law since like before Christ...
//                 </p>
//               </div>
//               <span class="settings-tray--right">
//                 {/* <i class="material-icons">cached</i> */}
//                 {/* <i class="material-icons">message</i> */}
//                 <div className="d-flex align-items-center">
//                   <Typography>Set to Fufilled</Typography>
//                   <Checkbox
//                     defaultChecked
//                     // defaultChecked={checked}
//                     color="primary"
//                     value={handleChecked}
//                   />

//                   <CancelIcon onClick={closeChat} />
//                 </div>
//               </span>
//             </div>
//           </div>

//           <div class="chat-panel">
//             <div className="hg">

//             {/* <div class="row no-gutters">
//               <div class="col-md-3">
//                 <div class="chat-bubble chat-bubble--left text-left">
//                   Hello dude!
//                 </div>
//               </div>
//             </div>

//             <div class="row no-gutters">
//               <div class="col-md-3 offset-md-9">
//                 <div class="chat-bubble chat-bubble--right text-left">
//                   Hello dude!
//                 </div>
//               </div>
//             </div>

//             <div class="row no-gutters">
//               <div class="col-md-3 offset-md-9">
//                 <div class="chat-bubble chat-bubble--right text-left">
//                   Hello dude!
//                 </div>
//               </div>
//             </div>

//             <div class="row no-gutters">
//               <div class="col-md-3">
//                 <div class="chat-bubble chat-bubble--left text-left">
//                   Hello dude!
//                 </div>
//               </div>
//             </div>

//             <div class="row no-gutters">
//               <div class="col-md-3 offset-md-9">
//                 <div class="chat-bubble chat-bubble--right text-left">
//                   Hello dude!
//                 </div>
//               </div>
//             </div>

//             <div class="row no-gutters">
//               <div class="col-md-3">
//                 <div class="chat-bubble chat-bubble--left text-left">
//                   Hello dude!
//                 </div>
//               </div>
//             </div>

//             <div class="row no-gutters">
//               <div class="col-md-3 offset-md-9">
//                 <div class="chat-bubble chat-bubble--right text-left">
//                   Hello dude!
//                 </div>
//               </div>
//             </div>

//             <div class="row no-gutters">
//               <div class="col-md-3">
//                 <div class="chat-bubble chat-bubble--left text-left">
//                   Hello dude!
//                 </div>
//               </div>
//             </div>

//             <div class="row no-gutters">
//               <div class="col-md-3 offset-md-9">
//                 <div class="chat-bubble chat-bubble--right text-left">
//                   Hello dude!
//                 </div>
//               </div>
//             </div> */}
          
//             </div>

//             <MessageList messages={allMessages} />

//             <form class="row" onSubmit={handleSubmit}>
//               <div class="col-12 footer-chat">
//                 <div class="chat-box-tray">
//                   <i class="material-icons">sentiment_very_satisfied</i>
//                   <input
//                     className="chatbody"
//                     onChange={handleChange}
//                     value={body}
//                     type="text"
//                     placeholder="Type your message here..."
//                   />
//                   <i class="material-icons">mic</i>

//                   {body.length > 0 ? (
//                     <i
//                       style={{ cursor: "pointer" }}
//                       onClick={handleClick}
//                       class="material-icons"
//                     >
//                       send
//                     </i>
//                   ) : null}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useContext, useState, useEffect } from "react";
import "./Chat.scss";
import chatimg from "../../images/image4.jpg";
import {
  ChatContext,
  UserContext,
  UserIdContext,
  FirstNameContext,
  ReqOwnerFirstNameContext,
  AllMessagesContext,
  AllRoomContext,
  SelectedChatContext,
  SelectedRoomContext,
  ChatRoomIdContext,
  RequestOwnerContext,
  CurrentRoomContext
} from "../../ContextFile";


import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";
import RoomList from './RoomList';
import RoomDetail from './RoomDetail';
import { ActionCableConsumer } from "react-actioncable-provider";
import FormInput from './FormInput';

export default function Chat() {
  
  
  
  
  // let [checked, setChecked] = useState(false);

  let { showChat, setShowChat } = useContext(ChatContext);

  let { userData, setUserData } = useContext(UserContext);

  let { userId, setUserId } = useContext(UserIdContext);

  let { selectedChat, setSelectedChat } = useContext(SelectedChatContext);

  let { reqOwnerFirstName } = useContext(ReqOwnerFirstNameContext);
  let { firstName } = useContext(FirstNameContext);

  const { requestOwner, setRequestOwner } = useContext(RequestOwnerContext);
  const {currentRoom, setCurrentRoom}

  console.log(userId);
  console.log(firstName);
  console.log(reqOwnerFirstName);


  let { allMessages, setAllMessages } = useContext(AllMessagesContext);

  let { allRooms, setAllRooms } = useContext(AllRoomContext);

  let { selectedRoom, setSelectedRoom } = useContext(SelectedRoomContext);

  let { chatRoomId, setChatRoomId } = useContext(ChatRoomIdContext);


  console.log(allRooms);
  console.log(allMessages);
  console.log(selectedRoom);


  useEffect(() => {
    
    getAllMessages();
  },[]);

  const getchatRoomDetails = () => {
    console.log(selectedRoom);
    // alert(selectedRoom);
    if(selectedRoom) {
      let chatId = Object.values(selectedRoom);
      setChatRoomId(chatId[0]);
      console.log(chatId);
      console.log(chatRoomId);

    }



    
  }
    getchatRoomDetails();


  // const handleChecked = (event) => {
  //   setChecked(event.target.checked);
  //   console.log("checked");
  // };

  const closeChat = () => {
    setShowChat(false);
    console.log(showChat);
  };

  
  

  const getAllMessages = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    let res = await axios
      .get("http://localhost:3001/messages", {
        headers: {
          Authorization: `Basic ${userData.token}`,
        },
      })
      .then(
        (response) => {
          
          setAllMessages(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );

    return res;
  };

  console.log(allMessages);


 const onRoomSelect = (room) => {
   
   console.log("From the App!", room.id);
   setSelectedRoom(room);
   const allChats = allMessages.filter(message => message.room_id === room.id);
   console.log(allChats);
   setSelectedChat(allChats);
   console.log(selectedRoom);
    getAllMessages();


   return allChats;

 };

  
  
  
   console.log(selectedChat);
  

  return (
    <ActionCableConsumer
      channel={{ channel: "RoomsChannel" }}
      onReceived={onRoomSelect}
    >
      <div class="messages-wrapper">
        <div className="item item--1">
          <RoomList onRoomSelect={onRoomSelect} rooms={allRooms} />
        </div>
        <div className="item item--2">
          <div className="item--2 inner-one">
            <div class="settings-tray">
              <div class="friend-drawer no-gutters friend-drawer--grey d-flex align-items-center ">
                <img class="profile-image" src={chatimg} alt="" />
                <div class="text">
                  <h6 className="text-left">{reqOwnerFirstName}</h6>
                </div>
                <span class="settings-tray--right">
                  {/* <i class="material-icons">cached</i> */}
                  {/* <i class="material-icons">message</i> */}
                  <div className="d-flex align-items-center">
                    {/* <Typography>Set to Fufilled</Typography>
                    <Checkbox
                      defaultChecked
                      // defaultChecked={checked}
                      color="primary"
                      value={handleChecked}
                    /> */}

                    <CancelIcon onClick={closeChat} />
                  </div>
                </span>
              </div>
            </div>
          </div>
          <RoomDetail room={setSelectedRoom} selectedChat={selectedChat} />

          {selectedRoom === null ? (
            <div>Select a room</div>
          ) : (
            <FormInput onRoomSelect={onRoomSelect} rooms={allRooms} />
          )}
        </div>
      </div>
    </ActionCableConsumer>
  );
}

