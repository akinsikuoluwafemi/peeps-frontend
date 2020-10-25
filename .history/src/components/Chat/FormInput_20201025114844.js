import React from 'react'

export default function FormInput({ handleChange }) {
  return (
    <input
      className="chatbody"
      // onChange={handleChange}
      // value={body}
      type="text"
      placeholder="Type your message here..."
    />
  );
}
