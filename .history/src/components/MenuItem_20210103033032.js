import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";


export default function MenuItems({request}) {
    console.log(request)

     const handleRequestDetails = () => {
       // alert("i did it");
     };


    return (
         <MenuItem
              key={request.id}
              selected={item[0]}
              onClick={handleRequestDetails}
            >
              {item.description}
            </MenuItem>
    )
}
