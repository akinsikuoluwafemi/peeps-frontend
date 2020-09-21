import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import mapStyles from '../mapStyles';
import { RequestContext } from '../context';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";





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

    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: `AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`,
      libraries,
    });

    return (
        <div>
            Map here
        </div>
    )
}


