import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import mapStyles from "../mapStyles";
// import { RequestContext } from "../context";
import {
  UserLatContext,
  UserLngContext,
  AllRequestContext,
  UserContext,
  UserIdContext,
  FirstNameContext
} from "../ContextFile";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Button from "@material-ui/core/Button";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import '../pages/search.scss';
import axios from 'axios';

export const Map = () => {

  const {userLat, setUserLat} = useContext(UserLatContext)
  const { userLng, setUserLng } = useContext(UserLngContext);
  const { allRequest, setAllRequest } = useContext(AllRequestContext);
  const { userId, setUserId } = useContext(UserIdContext);
  const { firstName, setFirstName } = useContext(FirstNameContext);
  
  useEffect(() => {
    getRequestOwner()
  },[])

  const [selectedRequest, setSelectedRequest] = useState(null);


  console.log(allRequest);

  const getRequestOwner = (id) => {
    let res = axios.get('http://localhost:3001/users/')
      .then(response => {
        console.log(response.data + 'from search')
      }, (error) => {
          console.log(error);
      })
    return res;
  }




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

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  },[]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";



  return (
    <div>

      <AddRequest panTo={panTo}/>


      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {allRequest.map((request) => (

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
          {/* <p>UserId: {selectedRequest.user_id}</p> */}
              <button className="btn-sm btn-success">Volunteer</button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};



function AddRequest ({panTo}) {
  
  // const { userLat, userLng } = useContext(RequestContext);
  const { userLat, setUserLat } = useContext(UserLatContext);
  const { userLng, setUserLng } = useContext(UserLngContext);
  const { allRequest, setAllRequest } = useContext(AllRequestContext);
  const { userData, setUserData } = useContext(UserContext);

  const { userId, setUserId } = useContext(UserIdContext);
  console.log(userId);

  let [query, setQuery] = useState(null);
  let [queryLat, setQueryLat] = useState(null);
  let [queryLng, setQueryLng] = useState(null);
  const [requestType, setRequestType] = useState("");
  const [description, setDescription] = useState("");

  
   const {
     ready,
     value,
     suggestions: { status, data },
     setValue,
     clearSuggestions,
   } = usePlacesAutocomplete({
     requestOptions: {
       location: { lat: () => userLat, lng: () => userLng },
       radius: 200 * 1000,
     },
   });
  
  
  const handleType = (e) => {
    setRequestType(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    //  do stuff
    e.preventDefault();
    let request = {
      description,
      request_type: requestType,
      // query,
      lat: queryLat,
      lng: queryLng,
      user_id: userId
    };

  let res = await  fetch("http://localhost:3001/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    console.log(request);
      return res
  };
  
  return (
    <div className="center">
      <form className="search border" onSubmit={handleSubmit}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={requestType}
          onChange={handleType}
          required
        >
          <MenuItem value="one-time-task">One Time Task</MenuItem>
          <MenuItem value="material-need">Material Need</MenuItem>
        </Select>

        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="Description"
          type="description"
          required
          fullWidth
          onChange={handleDescription}
          value={description}
        />

        <Combobox
          onSelect={async (address) => {
            console.log(address);
            setQuery(address);
            setValue(address, false)
            clearSuggestions();

            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);

              setQueryLat(lat);
              setQueryLng(lng);
              panTo({lat,lng});
              console.log(lat, lng);
            } catch (error) {
              console.log("error");
            }
          }}
        >
          <ComboboxInput
            className="combo"
            required
            disabled={!ready}
            placeholder="Enter a location"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <ComboboxPopover style={{ zIndex: 400 }}>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxPopover>
        </Combobox>

        <Button
          variant="contained"
          color="primary"
          // className={classes.button}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}