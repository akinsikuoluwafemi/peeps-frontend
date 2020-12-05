import React, {useEffect, useContext} from 'react'
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import {UserIdContext, ReqOwnerFirstNameContext, FirstNameContext, RoomDataContext, ReqOwnerFirstNameContext} from '../ContextFile';


export default function ChatMessage({message}) {
    
    useEffect(() => {
      getRecipient()
    });
      dayjs.extend(relativeTime);


  let { userId, setUserId } = useContext(UserIdContext);
  let {firstName, setFirstName} = useContext(FirstNameContext);

  let { reqOwnerFirstName, setReqOwnerFirstName } = useContext(ReqOwnerFirstNameContext);
  console.log(firstName, reqOwnerFirstName)
  let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
let {reqOwnerFirstName, setReqOwnerFirstName} = useContext(RequestOwn)
  console.log(currentRoom.room.users)

  const getRecipient = () => {
    let recipient = currentRoom.room.users.filter(user => user.id !== userId)
    let recipientName = recipient.map(item => item.first_name)
    console.log(recipientName[0])
  }
  
    return (
            <div class={message.user_id === userId ? `col-md-3 offset-md-9` : `col-md-3`}>
                <div class={message.user_id === userId ? `chat-bubble chat-bubble--right text-left` : `chat-bubble chat-bubble--left`}>
                <small style={{ color: "#777" }}>{message.user_id === userId ? `You`: reqOwnerFirstName }</small> <br/>
                {message.body} <br />
                <small style={{ color: "#777" }}>
                  {dayjs(message.created_at).fromNow()}
                </small>
                </div>
            </div>
    )
}
