import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import mapStyles from '../mapStyles';
import { RequestContext } from '../context';




export const Map = () => {
    const { userLat, userLng } = useContext(RequestContext);
    
     const libraries = ["places"];
     const mapContainerStyle = {
       width: "100vw",
       height: "100vh",
     };

     const center = {
       lat: userLat,
       lng: userLng,
     };

    return (
        <div>
            Map here
        </div>
    )
}


