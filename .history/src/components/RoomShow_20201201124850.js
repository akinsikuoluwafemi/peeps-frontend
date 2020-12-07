import React, {useContext, useEffect, useRef, useState} from 'react';
import { RoomDataContext,UserIdContext,ChatRoomIdContext, ReqOwnerFirstNameContext, AllRequestContext} from '../ContextFile';

import axios from 'axios';
import FormInput from './Chat/FormInput';
import './Chat/Chat.scss';

import {useLocation} from 'react-router-dom';
import ChatMessage from './ChatMessage'



export default function RoomShow({cableApp}) {
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
  let { userId, setUserId } = useContext(UserIdContext);
  let { chatRoomId, setChatRoomId } = useContext(ChatRoomIdContext);
  
  let loctaion = useLocation()
  const roomParam =  parseInt(loctaion.pathname.match(/\d+$/)[0]);
  let { reqOwnerFirstName, setReqOwnerFirstName } = useContext(ReqOwnerFirstNameContext);
  let { allRequest, setAllRequest } = useContext(AllRequestContext);

  console.log(allRequest)
  

  console.log(reqOwnerFirstName)
    
    useEffect(() => {
        getRoomData(chatRoomId || roomParam);


      createWebSocket()

    },[])
  const inputRef = useRef();


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
              console.log(result.data)

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
        getRequest(allRequest);

        return res;
      };

      console.log(currentRoom.room.name)
  
  
      const getRequest = (arr) => {
        return arr.find(item => item.description === currentRoom.room.name)
      }


      const createWebSocket = () => {
        cableApp.room = cableApp.cable.subscriptions.create({
          channel: 'RoomsChannel',
          room: chatRoomId || roomParam
        }, {
          received: (updatedRoom) => {
            updateAppStateRoom(updatedRoom)
          }
        })
      }
    
      const updateAppStateRoom = (newRoom) => {
          setCurrentRoom({
              room: newRoom.room,
              // users: newRoom.users,
              messages: newRoom.messages
          })
      }

    const handleSubmit = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));

    let message = {
      body: inputRef.current.value,
      user_id: userId,
      room_id: chatRoomId || roomParam,
    };
    

    console.log(message);
    

    e.preventDefault();



    inputRef.current.value = "";


    let res = axios
      .post("http://localhost:3001/messages", message, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          console.log("Success", response.data);
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
        {/* <div className="item item--1">

          <div class="friend-drawer friend-drawer--onhover">
            <div class="text">
              <p class="text-muted">meet and drink</p>
            </div>
          </div>
          <hr />

        </div> */}
        <div className="item item--2">
          <div className="item--2 inner-one">
            <div class="">
              <div class="friend-drawer no-gutters friend-drawer--grey d-flex align-items-center ">
                <img class="profile-image mr-3" src="https://images.daznservices.com/di/library/GOAL/6f/10/1920x1080-cristiano-ronaldo-juventus-2020_1we5st5c3uanu1lp1ijx780p1j.jpg?t=-398174363&quality=60&w=1200&h=800" alt="" />
                <div class="text mr-3">
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

                    {/* <CancelIcon onClick={closeChat} /> */}
                      {currentRoom.messages.length < 0 ? <h3 className="text-center m-auto">Type your first message</h3> : null}
                  </div>
                </span>
              </div>
            </div>
          </div>
            
          <div>

            {/* roomDetail start */}
           {displayMessages(currentRoom.messages)}

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