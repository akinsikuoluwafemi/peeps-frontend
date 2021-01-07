import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import axios from 'axios';

export default function MenuItems({request}) {

     const handleRequestDetails = () => {
       // alert("i did it");
         console.log(request)
        //  requestToRepublish(request.id)
        let Rtype = request.request_type === "material-need" ? `one-time-task` : `material-need`;
          let obj = {
         request_type: RType,
       };


       const token = JSON.parse(localStorage.getItem("token"));

       let res = axios
         .patch(`http://localhost:3001/requests/${request.id}`, obj, {
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
    
     const requestToRepublish = (id) => {
       let obj = {
         fulfilled: false
        //  updated_at: new Date().toISOString()
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
