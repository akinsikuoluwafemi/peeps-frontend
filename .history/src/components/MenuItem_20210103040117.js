import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
im

export default function MenuItems({request}) {
    console.log(request)

     const handleRequestDetails = () => {
       // alert("i did it");
         console.log(request)
     };
    
     const requestToFulfil = (id) => {
       let obj = {
         fulfilled: true,
       };

       const token = JSON.parse(localStorage.getItem("token"));

       let res = axios
         .patch(`http://localhost:3001/requests/${id}`, obj, {
           headers: {
             Authorization: `Basic ${token}`,
           },
         })
         .then(
           (response) => {
             console.log("success", response.data);
           },
           (error) => {
             console.log("Error", error);
           }
         );

       return res;
     };


    return (
         <MenuItem
              key={request.id}
              selected={request[0]}
              onClick={handleRequestDetails}
            >
              {request.description}
            </MenuItem>
    )
}
