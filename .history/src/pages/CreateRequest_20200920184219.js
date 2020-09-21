import React, { Component } from "react";
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
  constructor(props) {
    
    
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    //  do stuff
    e.preventDefault();
  };

  //   redirect = () => {
  // this.props.history.push("/");
  //   };
    
    static contextType = RequestContext;

  render() {
      const { showChat, userLat, userLng  } = this.context;
      console.log(userLat, userLng)



      


    
  }
}

export default CreateRequest;
