import React from "react";
import { Map } from "../components/Search";
import '../App.css';
import Footer from '../components/Footer';
import { TransitionAlerts } from './Signup';

function Home(props) {


  return (
    <section>
      <TransitionAlerts>
        <p class="text-center">
          Kindly zoom in and out on the map to see other peepsons request
        </p>
      </TransitionAlerts>
      <div style={{ textAlign: "center", height: "100vh" }}>
        <Map />
      </div>
      <Footer />
    </section>
  );
}

export default Home;
