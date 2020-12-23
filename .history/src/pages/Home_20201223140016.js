import React from "react";
import { Map } from "../components/Search";
import '../App.css';


function Home(props) {


  return (
    <section style={{ textAlign: "center", height: '100vh' }}>
      <div>
        <Map />
        <p>Footer</p>
      </div>
     
    </section>
  );
}

export default Home;
