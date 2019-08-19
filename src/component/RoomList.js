import React from "react";
import Room from "./Room";
export default function RoomList({rooms}){
if(rooms.lenghth === 0){
    return(
        <div className="empty-search">
            <h3>unfortunaly rooms not match</h3>
        </div>
    )
}

    return(
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item=>{
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
        </section>
    )

}