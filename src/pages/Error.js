import React, {Component} from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import {Link} from "react-router-dom";

export default class Error extends Component{
    render(){
        return(
            <Hero>
                <Banner title="404" subtitle="page not found">
                    <Link to="/" className="btn-primary">reurn Home</Link>
                </Banner>
            </Hero>
        )
    }
}