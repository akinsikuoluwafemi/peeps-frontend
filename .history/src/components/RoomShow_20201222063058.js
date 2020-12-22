import React, {useContext, useEffect, useRef} from 'react';
import { RoomDataContext,UserIdContext,ChatRoomIdContext, ReqOwnerFirstNameContext} from '../ContextFile';

import axios from 'axios';
import './Chat.scss';

import {useLocation} from 'react-router-dom';
import ChatMessage from './ChatMessage'



export default function RoomShow({cableApp}) {
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
  let { userId} = useContext(UserIdContext);
  let { chatRoomId } = useContext(ChatRoomIdContext);
  
  let loctaion = useLocation()


  let { reqOwnerFirstName } = useContext(ReqOwnerFirstNameContext);


let roomParam = currentRoom.room.id || parseInt(loctaion.pathname.match(/\d+$/)[0]);

    
    useEffect(() => {
       
      getRoomData(chatRoomId || roomParam);
        
      createWebSocket()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  
  const inputRef = useRef();


      const getRoomData = async (id) => {
        

        const token = JSON.parse(localStorage.getItem("token"));
          
        let res = await axios
          .get(`https://peeps-platform.herokuapp.com/rooms/${id}`, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          })
          .then(
            (result) => {
              // console.log(result.data);

              setCurrentRoom({
                room: result.data,
                messages: result.data.messages,
                // users: [...currentRoom.users]
              });
            },
            (error) => {
              console.log(error);
            }
          );

        return res;
      };

  // console.log(currentRoom.messages.length);

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
      .post("https://peeps-platform.herokuapp.com/messages", message, {
        headers: {
          Authorization: `Basic ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      .then(
        (response) => {
          // console.log("Success", response.data);
          let tempMessage = [{}]
            setCurrentRoom({
              messages: result.data.messages,
              // users: [...currentRoom.users]
            });
        },
        (error) => {
          console.error("Error", error);
        }
      );

    return res;
  };


  const displayMessages = (messages) => {
    return messages.map(message => {
      return <ChatMessage key={message.id} message={message} />
    })
  }



   
    return (
          <div class="messages-wrapper">
        
        <div className="item item--2">
          <div className="item--2 inner-one">
            <div class="">
              <div class="friend-drawer no-gutters friend-drawer--grey d-flex align-items-center ">
                <img class="profile-image mr-3" src="https://images.daznservices.com/di/library/GOAL/6f/10/1920x1080-cristiano-ronaldo-juventus-2020_1we5st5c3uanu1lp1ijx780p1j.jpg?t=-398174363&quality=60&w=1200&h=800" alt="" />
                <div class="text mr-3">
                  <h6 className="text-left">{reqOwnerFirstName}</h6>
                  <p>{ currentRoom.room.name}</p>
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

                    {/* <CancelIcon onClick={closeChat} /> */}
                      {currentRoom.messages.length < 0 ? <h3 className="text-center m-auto">Type your first message</h3> : null}
                  </div>
                </span>
              </div>
            </div>
          </div>
            
          <div className="messages-container">

            {/* roomDetail start */}
            {currentRoom.messages ? (

            displayMessages(currentRoom.messages)
              

            ): (
            <h3 className="text-center">This room has no messages yet - be the first to post!</h3>

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
    )
}
