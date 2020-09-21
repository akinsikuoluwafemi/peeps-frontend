import React, { useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
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
import {RequestContext} from '../context'




const CreateRequest = () => {
  
    const {userLat, userLng} = useContext(RequestContext)
    const [query, setQuery] = useState(null);
    const [queryLat, setQueryLat] = useState(null);
    const [queryLng, setQueryLng] = useState(null);
    const [requestType, setRequestType] = useState(null);
    const [statusType, setStatusType] = useState("unfufilled");
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

    const handleStatus = (e) => {
      setStatusType(e.target.value);
    };

    const handleDescription = (e) => {
      setDescription(e.target.value);
    };

   

  const handleSubmit = (e) => {
    //  do stuff
      
    e.preventDefault();
  };

  //   redirect = () => {
  // this.props.history.push("/");
  //   };
    

    return (
      <div style={{ display: "flex" }}>
        <CssBaseline />

        <NavigationDrawer />

        <main style={{ flexGrow: "1" }}>
          <div style={{ marginTop: "5rem" }}></div>

          <section style={{ textAlign: "center" }}>
            
            
            {/*  */}
            
                    /*  */}
                    
          </section>
        </main>
      </div>
    );
}

export default CreateRequest;
