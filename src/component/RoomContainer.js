import React, {Component} from "react";
import {withRoomConsumer} from "../context";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import Loading from "./Loading";

function RoomContainer({context}){
    const {Loading, sortedRooms, rooms} = context;
    if(Loading){
        return <Loading/>
    }
    return(
     <>
     
 <RoomFilter rooms={rooms}/>
 <RoomList rooms={sortedRooms}/>
 </>)
}

export default withRoomConsumer(RoomContainer);





/* import React, {Component} from "react";
import {RoomConsumer} from "../context";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import Loading from "./Loading";
export default class RoomContainer extends Component{
    render(){
        return(
           <RoomConsumer>
               {value =>{
                   const {Loading, sortedRooms, rooms} = value;
                   if(Loading){
                       return <Loading/>
                   }
                   return(
                    <div>
                    Hello Room RoomsContainer
                <RoomFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
                </div>
                   )
               }}
           </RoomConsumer>
        )
    }
} */