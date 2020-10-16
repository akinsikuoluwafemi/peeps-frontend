import React, {useEffect, useContext } from 'react';
import dayjs from "dayjs";
import './Chat.scss';
import { UserIdContext } from '../../ContextFile';




import relativeTime from "dayjs/plugin/relativeTime";



export default function MessageItem({message}) {
  
  let { userId, setUserId } = useContext(UserIdContext);
  console.log(userId)

  console.log(message);
  // console.log(dayjs(message.created_at).fromNow());

    
    useEffect(() => {
  
        dayjs.extend(relativeTime);
        
    })
    

  return (
    <div>
      {message.map((message) => {
        
      } 
      
      )
}
    </div>
  );
}
