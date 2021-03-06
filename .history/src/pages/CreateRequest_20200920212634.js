import React, { useState, useContext } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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
import './search.scss';



const CreateRequest = () => {
  const history = useHistory();

    const {userLat, userLng} = useContext(RequestContext)
    const [query, setQuery] = useState(null);
    const [queryLat, setQueryLat] = useState(null);
    const [queryLng, setQueryLng] = useState(null);
    const [requestType, setRequestType] = useState('');
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


    const handleDescription = (e) => {
      setDescription(e.target.value);
    };

   

  const handleSubmit = (e) => {
    //  do stuff
      
      e.preventDefault();
      let request = {
          description,
          requestType,
          query,
          queryLat,
          queryLng,
      }
      console.log(request)
      // <Redirect to="/"/>
      history.push('/')
  };

    // const redirect = () => {
    // history.push("/");
    // };
    

    return (
      <div style={{ display: "flex" }}>
        <CssBaseline />

        <NavigationDrawer />

        <main style={{ flexGrow: "1" }}>
          <div style={{ marginTop: "5rem" }}></div>

          <section style={{ textAlign: "center" }}>
            <Typography style={{ textAlign: "center" }}>
              Create a request. If after 24 hrs, your request has not been
              fulfilled you can republish it, thanks alot.{" "}
              <strong>PS: You have to fill in your location</strong>
            </Typography>
            {/*  */}
            <div class="row">
              <div class="col-lg-4  col-10"></div>
              <div class="col-lg-4 col-10    m-auto">
                <form onSubmit={handleSubmit}>
                  {/* <br /> */}

                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={requestType}
                    onChange={handleType}
                    required
                  >
                    <MenuItem value="One Time Task">One Time Task</MenuItem>
                    <MenuItem value="Material Need">Material Need</MenuItem>
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

                  {/* searchcombobox */}

                  {/* <Search /> */}
                  <div className="search">
                    <Combobox
                      onSelect={async (address) => {
                        console.log(address);
                        setQuery(address);
                        clearSuggestions();

                        try {
                          const results = await getGeocode({ address });
                          const { lat, lng } = await getLatLng(results[0]);
                          setQueryLat(lat);
                          setQueryLng(lng);

                          console.log(lat, lng);
                        } catch (error) {
                          console.log("error");
                        }
                      }}
                    >
                      <ComboboxInput
                        required
                        disabled={!ready}
                        placeholder="Enter a location"
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                      />

                      <ComboboxPopover>
                        {status === "OK" &&
                          data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                          ))}
                      </ComboboxPopover>
                    </Combobox>
                  </div>

                  {/* searchcombobox */}

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
              <div class="col-lg-4  col-10"></div>
            </div>
            {/*  */}
          </section>
        </main>
      </div>
    );
}

export default CreateRequest;
