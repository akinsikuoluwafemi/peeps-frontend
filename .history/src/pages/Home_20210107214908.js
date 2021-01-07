import React from "react";
import { Map } from "../components/Search";
import '../App.css';
import Footer from '../components/Footer';
import { TransitionAlerts } from './Signup';

function Home(props) {


  return (
    <section>
      <TransitionAlerts>
        <p style={{color className="text-center text-info">
          Kindly zoom in and out or drag on the map to see other peepsons request.
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
