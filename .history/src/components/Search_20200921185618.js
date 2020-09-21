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
  const [selectedRequest, setSelectedRequest] = useState(null);
  
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
          {allRquest.map((request) => (
            <Marker
              key={request.id}
              position={{
                lat: request.lat,
                lng: request.lng,
              }}
              icon={{
                url: `http://maps.google.com/mapfiles/ms/icons/${
                  request.fulfilled === true ? `green-dot` : `pink-dot`
                }.png`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                setSelectedRequest(request);
              }}
            />
          ))}

          {selectedRequest && (
            <InfoWindow
              position={{
                lat: selectedRequest.lat,
                lng: selectedRequest.lng,
              }}
              onCloseClick={() => {
                setSelectedRequest(null);
              }}
            >
              <div>
                <h6>Description: {selectedRequest.description}</h6>
                <p>type: {selectedRequest.request_type}</p>
                <p>
                  lat: {selectedRequest.lat}
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    );
}


