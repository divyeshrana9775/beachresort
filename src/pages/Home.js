import React, {Component} from 'react';
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import {Link} from "react-router-dom";


import Services from "../component/Services";
import FeaturedRooms from "../component/FeaturedRooms";

export default class Home extends Component{
    render(){
  return (
    <>
    <Hero>
      <Banner title="Luxurios Rooms" subtitle="deluxe rooms starting at $299">
      
      <Link to="/Rooms" className="btn-primary">our rooms</Link>  
      </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    
    </>
  );
}
}

