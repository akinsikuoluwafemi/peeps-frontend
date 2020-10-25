import React from 'react'

export default function FormInput({ handleChange, body }) {
  return (
    <input
      className="chatbody"
      onChange={handleChange}
      // value={body}
      type="text"
      placeholder="Type your message here..."
    />
  );
}
