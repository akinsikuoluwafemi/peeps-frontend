import React from "react";
import { Map } from "../components/Search";
import '../App.css';
import Footer from '../components/Footer';


function Home(props) {


  return (
    <section style={{ textAlign: "center", height: '100vh' }}>
      <div>
        <Map />
      </div>
        <Footer/>
     
    </section>
  );
}

export default Home;
