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
    const { userLat, userLng, allRquest } = useContext(RequestContext);
  console.log(allRquest);
     const libraries = ["places"];
     const mapContainerStyle = {
       width: "100vw",
       height: "100vh",
     };

    const options = {
      styles: mapStyles,
      // disableDefaultUI: true,
      // zoomControl: true
    };

     const center = {
       lat: userLat,
       lng: userLng,
     };

    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: `AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`,
      libraries,
    });

     const mapRef = useRef();
     const onMapLoad = useCallback((map) => {
       mapRef.current = map;
     }, []);



  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onLoad={onMapLoad}
        >
          {allRquest.map((request) => )}
        </GoogleMap>
      </div>
    );
}


