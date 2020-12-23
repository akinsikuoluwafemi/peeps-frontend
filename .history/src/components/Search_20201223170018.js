import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import mapStyles from "../mapStyles";
import {
  UserLatContext,
  UserLngContext,
  AllRequestContext,
  UserIdContext,
  RequestOwnerContext,
  ReqOwnerFirstNameContext,
  SelectedReqDescContext,
  AllRoomContext,
  RequestOwnerIdContext,
  ChatRoomIdContext,
  ErrorContext,
  PannedMapContext,
  RequestFormContext,
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
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import '../pages/search.scss';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

export const Map = () =>{
  

  useEffect(() => {
    
  }, []);
  
  const { userLat } = useContext(UserLatContext);
  const { userLng} = useContext(UserLngContext);
  const { allRequest } = useContext(AllRequestContext);
  const { userId } = useContext(UserIdContext);






  let history = useHistory();

  const [selectedRequest, setSelectedRequest] = useState(null);

  const { requestOwner, setRequestOwner } = useContext(RequestOwnerContext);
  const { reqOwnerFirstName, setReqOwnerFirstName } = useContext(
    ReqOwnerFirstNameContext
  );


  let [sameUserClick, setSameUserClick] = useState(null);
  let [fulfilled, setFulfiled] = useState(null)


  const [requestId, setRequestId] = useState(null);


  let { reqDescription, setReqDescription } = useContext(SelectedReqDescContext);
  let { allRooms, setAllRooms } = useContext(AllRoomContext);
  
  let {  setChatReceiverId } = useContext(RequestOwnerIdContext);

  let {  setChatRoomId } = useContext(ChatRoomIdContext);
  let [panned, setPanned] = useState(true)


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
    setPanned(false);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  
  const onCreateRoom = async () => {
    let roomObj = {
      name: reqDescription,
      sender_id: userId,
      receiver_id: requestOwner
    };



    let tempArray = [roomObj, ...allRooms];


    const token = JSON.parse(localStorage.getItem("token"));

    let res = axios
      .post("https://peeps-platform.herokuapp.com/rooms", roomObj, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          console.log("success", response.data);
          setChatRoomId(response.data.id);
          history.push(`rooms/${response.data.id}`);

          setAllRooms(tempArray);
        },
        (error) => {
          console.log("Error", error);
        }
      );
    

    return res;
  };



  const onVolunteerClick = async () => {
    // alert(
    //   "I just volunteered for request" +
    //     requestId +
    //     "the owner is " +
    //     requestOwner
    // );
    setChatReceiverId(requestOwner);

    const data = {
      request_id: requestId,
      user_id: userId,
    };

    

    const token = JSON.parse(localStorage.getItem("token"));

    const res = await axios
      .post("https://peeps-platform.herokuapp.com/requests_users", data, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    // alert(`create a room for you and ${reqOwnerFirstName}`);

    onCreateRoom();

      // setCurrentRoom({
      //   users: [userRequest, ...currentRoom.users],
      // });

    return res;
  };


const checkSameUserClick = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
     
    let res = await axios
      .get(`https://peeps-platform.herokuapp.com/samevolunteer/${id}`
      
      ,
        
        {
         headers: {
           Authorization: `Basic ${token}`,
         },
       }
       
    )
       .then(
         (response) => {
           setSameUserClick(response.data);
         },
         (error) => {
           console.log(error);
         }
    );
   getRequestOwner(requestOwner);
  
  checkFulfilledRequest(requestId);
     return res;

}


const checkFulfilledRequest = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"));

  let res = await axios
    .get(`https://peeps-platform.herokuapp.com/fulfilrequest/${id}`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then(
      (response) => {
        if (response.data === true) {
          setFulfiled(response.data);
          fulfilRequest(requestId);
        }
      },
      (error) => {
        console.log(error);
      }
    );

  return res;

}
  
  const fulfilRequest = (id) => {
    let obj = {
      fulfilled: fulfilled,
    };


    const token = JSON.parse(localStorage.getItem("token"));

    let res = axios
      .patch(`https://peeps-platform.herokuapp.com/requests/${id}`, obj, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          // console.log("success", response.data);
          // alert('changed request of id:' + requestId + `to fulfilled`)
        },
        (error) => {
          console.log("Error", error);
        }
      );

    return res;

  }


  const getRequestOwner = async (id) => {
    if (id) {
      const token = JSON.parse(localStorage.getItem("token"));

      let res = await axios
        .get(`https://peeps-platform.herokuapp.com/users/${id}`, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then(
          (response) => {
            let ownerRec = Object.values(response.data);
            setChatReceiverId(ownerRec[0]);
            setReqOwnerFirstName(ownerRec[1]);
          },
          (error) => {
            console.log(error);
          }
        );
      return res;
    }
  };



const renderButton = () => {
    if(userId === requestOwner){
        return  <p className="badge h3 badge-info">You own this request</p>;
    }else if(sameUserClick === true){
      return <p className="badge h3 badge-info mr-3">Already Volunteered</p>
      

      
    }else {
      return (
        <button onClick={onVolunteerClick} className="btn-sm btn-success">
          Volunteer
        </button>
      );
    }
  }

 

  return (
    <PannedMapContext.Provider value={{ panned, setPanned }}>
      <div>
        <AddRequest panTo={panTo} />

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
                  request.request_type === `material-need`
                    ? `green-dot`
                    : `pink-dot`
                }.png`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                setSelectedRequest(request);
                setRequestId(request.id);

                setRequestOwner(request.user_id);
                setReqDescription(request.description);
                // alert(request.id + "," + request.user_id);
              }}
            />
          ))}

          {selectedRequest && (
            <InfoWindow
              onDomReady={checkSameUserClick(selectedRequest.id)}
              position={{
                lat: selectedRequest.lat,
                lng: selectedRequest.lng,
              }}
              onCloseClick={() => {
                setSelectedRequest(null);
                setRequestId(null);
                setRequestOwner(null);
                setReqOwnerFirstName("");
              }}
            >
              <div>
                <p>Description: {selectedRequest.description}</p>
                <p>Name: {reqOwnerFirstName}</p>
                <p>Type: {selectedRequest.request_type}</p>
                <p>
                  Lat: {selectedRequest.lat}, Lng: {selectedRequest.lng}
                </p>

                {renderButton()}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </PannedMapContext.Provider>
  );
  
};





function AddRequest({ panTo })
{
  
  let { error, setError } = useContext(ErrorContext);

  const { userLat } = useContext(UserLatContext);
  const { userLng } = useContext(UserLngContext);
  const { allRequest, setAllRequest } = useContext(AllRequestContext);

  const { userId } = useContext(UserIdContext);

  let {panned} = useContext(PannedMapContext);

  // let [ setQuery] = useState(null);
  let [queryLat, setQueryLat] = useState(null);
  let [queryLng, setQueryLng] = useState(null);
  const [requestType, setRequestType] = useState("");
  const [description, setDescription] = useState("");

  const [descriptionErr, setDescriptionErr] = useState([]);

  const showAllErrors = (arr) => {
    let descriptionErr = arr.filter((item) => item.includes("Description"));
    setDescriptionErr(descriptionErr);
  }

  const displayDescriptionError = (arr) => {
    if(description.length > 300) {
        return arr[0];
      
    }
  }

  const {showRequestForm, setShowRequestForm} = useContext(RequestFormContext)

   const [open, setOpen] = React.useState(false);

   const handleClick = () => {
     setOpen(true);
   };

   const handleClose = (event, reason) => {
     if (reason === "clickaway") {
       return;
     }

     setOpen(false);
   };


  
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
 

    const token = JSON.parse(localStorage.getItem("token"))
    

    let res = axios.post("https://peeps-platform.herokuapp.com/requests", request, {
      headers: {
      "Authorization": `Basic ${token}`,
      "Content-Type": "application/json",
    },
   }).then((response) => {
     let tempRequest = [response, ...allRequest]
        setAllRequest(tempRequest)
        setDescription("");
         setRequestType("");
         setQueryLat(null);
         setQueryLng(null);
        setValue("");
     handleClick();
     setTimeout(() => {
      window.location.reload();
     }, 1500)
     
   }, (error) => {
          setError(true);
         showAllErrors(error.response.data);
       
   })

    return res;
    
  };


  // const [openModal, setOpenModal] = useState(false);

  // const handleModalOpen = () => {
  //   setOpenModal(true)
  // }

  // const handleCloseModal = () => {
  //   setOpenModal(false);
    
  // }

  
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
          helperText={error ? displayDescriptionError(descriptionErr) : null}
          error={error}
        />

        <Combobox
          onSelect={async (address) => {
            console.log(address);
            // setQuery(address);
            setValue(address, false);
            clearSuggestions();

            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);

              setQueryLat(lat);
              setQueryLng(lng);
              panTo({ lat, lng });
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
          disabled={panned}
        >
          Submit
        </Button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Created Successfully
          </Alert>
        </Snackbar>
      </form>
    
    </div>
  );
}