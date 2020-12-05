import React from 'react'

export default function RoomItem({room}) {
    console.log(room)


    const getRequestOwner = async (id) => {
    if (id) {
      const token = JSON.parse(localStorage.getItem("token"));

      let res = await axios
        .get(`http://localhost:3001/users/${id}`, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then(
          (response) => {
            // sresponse.data);
          },
          (error) => {
            console.log(error);
          }
        );
      return res;
    }
  };




    return (
        <div>
            {room.name}
        </div>
    )
}
