import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import mapStyles from "../mapStyles";
import { RequestContext } from "../context";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Addrequest from './Addrequest';
import Button from "@material-ui/core/Button";
import { FormRequestContext } from '../ContextFile';


export const Map = () => {
  const { userLat, userLng, allRquest } = useContext(RequestContext);

  const [selectedRequest, setSelectedRequest] = useState(null);


  const { showForm, setShowForm } = useContext(FormRequestContext);

  console.log(allRquest);
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100vw",
    height: "50vh",
  };

  const options = {
    styles: mapStyles,
    // disableDefaultUI: true,
    // zoomControl: true
  };

  //  const center = {
  //    lat: userLat,
  //    lng: userLng,
  //  };
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

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);



  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  const handleClick = () => {
    setShowForm(true)
    console.log(showForm)
  }

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
              <p>Type: {selectedRequest.request_type}</p>
              <p>
                Lat: {selectedRequest.lat}, Lng: {selectedRequest.lng}
              </p>

              <p>Fulfilled: False</p>
              <button className="btn-sm btn-success">Volunteer</button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

    </div>
  );
};
