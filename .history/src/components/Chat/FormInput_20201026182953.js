import React, { useRef, useState, useContext, useEffect } from "react";
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
} from "../../ContextFile";
import axios from 'axios';




export default function FormInput({ onRoomSelect, rooms }) {
    const [body, setBody] = useState("");
    
    let { allMessages, setAllMessages } = useContext(AllMessagesContext);
    
    let { userId, setUserId } = useContext(UserIdContext);
    
    let { chatRoomId, setChatRoomId } = useContext(ChatRoomIdContext);
    
    let { selectedRoom, setSelectedRoom } = useContext(SelectedRoomContext);
 
    let { selectedChat, setSelectedChat } = useContext(SelectedChatContext);
    
  useEffect(() => {

  }, [])
  const inputRef = useRef();

  const handleClick = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    let message = {
      body: inputRef.current.value,
      user_id: userId,
      room_id: chatRoomId,
    };
    setBody(inputRef.current.value);

    console.log(message);
    console.log(chatRoomId);

    let tempArray = [...allMessages, message];

    console.log(tempArray);

    e.preventDefault();

      alert(inputRef.current.value);
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
          setBody("");
          setAllMessages(tempArray);
        },
        (error) => {
          console.error("Error", error);
        }
      );

    return res;
  };

    // const getActiveRoom = () => {
    //     console.log(rooms);

    //   const activeRoom = rooms.filter((room) => room.id === chatRoomId);
    //   console.log(activeRoom);
    //   setSelectedRoom(activeRoom);

    //      const allChats = allMessages.filter(message => message.room_id === chatRoomId);
    //     console.log(allChats);
    //      setSelectedChat(allChats);

    //     alert("selectedroom is " + chatRoomId);
    //     onRoomSelect(activeRoom);
        
    // }

    const getActiveRoomAndChat = () =>{
      const allChats = allMessages.filter(
        (message) => message.room_id === chatRoomId
      );
      console.log(allChats);
      alert("select chat");
      setSelectedChat(allChats);
      console.log(selectedChat);

        const activeRoom = rooms.filter((room) => room.id === chatRoomId);
        console.log(activeRoom);
      setSelectedRoom(activeRoom);
      console.log(selectedRoom);
    }

    // getActiveRoom();
  
   
  const handleSubmit = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    let message = {
      body: inputRef.current.value,
      user_id: userId,
      room_id: chatRoomId,
    };
    setBody(inputRef.current.value);

    console.log(message);
    console.log(chatRoomId);

    let tempArray = [...allMessages, message];

    console.log(tempArray);

    e.preventDefault();

    alert(inputRef.current.value);
    inputRef.current.value = "";
    getActiveRoomAndChat();
    console.log(selectedRoom);


    let res = axios
      .post("http://localhost:3001/messages", message, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          console.log("Success", response.data);
          setBody("");
          setAllMessages(tempArray);
        },
        (error) => {
          console.error("Error", error);
        }
      );

    return res;
  };

  return (
    <form className="item--2 inner-three " onSubmit={handleSubmit}>
      <div class="">
        <div class="chat-box-tray">
          <i class="material-icons">sentiment_very_satisfied</i>
          <input
            className="chatbody"
            // onChange={handleChange}
            ref={inputRef}
            // value={body}
            type="text"
            placeholder="Type your message here..."
          />
          <i class="material-icons">mic</i>

          {inputRef.current.value.length > 0 ? (
            <i
              style={{ cursor: "pointer" }}
              onClick={handleClick}
              class="material-icons"
            >
              send
            </i>
          ) : null}
        </div>
      </div>
    </form>
  );
}
