import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";


export default function MenuItems({request}) {
    console.log(request)

     const handleRequestDetails = () => {
       // alert("i did it");
         console.lo
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
