import React, {useEffecrt} from 'react';
import axios from 'axios';

export default function RoomItem({room}) {
    console.log(room)


    const getRoomUsers = async (id) => {
      const token = JSON.parse(localStorage.getItem("token"));

      let res = await axios
        .get(`http://localhost:3001/users/${id}`, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then(
          (response) => {
            console.log(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
      return res;
  };




    return (
        <div>
            {room.name}
        </div>
    )
}
