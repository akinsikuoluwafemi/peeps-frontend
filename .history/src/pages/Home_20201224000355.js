import React from "react";
import { Map } from "../components/Search";
import '../App.css';
import Footer from '../components/Footer';


function Home(props) {


  return (
    <section>
      <div style={{ textAlign: "center", height: "100vh" }}>
        <Map />
      </div>
      <Footer />
    </section>
  );
}

export default Home;
