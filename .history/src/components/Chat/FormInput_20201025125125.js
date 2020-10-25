import React from 'react'

export default function FormInput({  }) {
  
  
    
  
  
  
  
  
  
  
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
