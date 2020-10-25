import React, { useRef} from 'react'

export default function FormInput({  }) {
  
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

          {body.length > 0 ? (
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
