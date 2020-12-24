import React from "react";
import { Map } from "../components/Search";
import '../App.css';
import Footer from '../components/Footer';


function Home(props) {


  return (
    <section >
      <div>
        <Map />
      </div>
      <Footer />
    </section>
  );
}

export default Home;
