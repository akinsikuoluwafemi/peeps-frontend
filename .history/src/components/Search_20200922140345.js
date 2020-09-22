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
import A



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

  return (
    <div>
      {/*  */}

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary create"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Create Request
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered "
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Create a request. If after 24 hrs, your request has not been
                fulfilled you can republish it.
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

            <Addrequest/>


            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

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

              <p>Fulfilled: {selectedRequest.fulfilled}</p>
              <button className="btn-sm btn-success">Volunteer</button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};
