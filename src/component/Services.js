import React, {Component} from "react";
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
export default class Services extends Component{
    state={
        services:[{
            icon: <FaCocktail/>,
            title: "freeCocktail",
            info: "Loren ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
        },
        {
            icon: <FaHiking/>,
            title: "Hacking",
            info: "Loren ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
        },
        {
            icon: <FaShuttleVan/>,
            title: "free Shuttlevan",
            info: "Loren ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
        },
        {
            icon: <FaBeer/>,
            title: "Strongest Beer",
            info: "Loren ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
        }
    ]
    }
    render(){
        return(
            <section className="services">
               <Title title="Services"/>
               <div className="services-center">
               {this.state.services.map(function(item, i){
                   return (<article key={i} className="service">
                       <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                   </article>);
               })}
               </div>
            </section>
        )
    }
}