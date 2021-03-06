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




class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      const { showChat, userLat, userLng, query, queryLat, query  } = this.context;
      console.log(userLat)


      return (
      <div style={{ display: "flex" }}>
        <CssBaseline />

        <NavigationDrawer />

        <main style={{ flexGrow: "1" }}>
          <div style={{ marginTop: "5rem" }}></div>

          <section style={{ textAlign: "center" }}>
            <p>request</p>
          </section>
        </main>
      </div>
    );
  }
}

export default CreateRequest;
