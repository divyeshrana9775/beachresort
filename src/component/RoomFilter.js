import React from "react";
import {useContext} from "react";
import {RoomContext} from "../context";
import Title from "../component/Title";
const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomFilter({rooms}){
    const context=useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    }=context;
    //get unique types
    let types = getUnique(rooms, "type");
    // add all
    types= ["all", ...types];
    //map to jsx
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    let people = getUnique(rooms, "capacity");
    people = people.map((item, index)=>{
           return <option key={index} value={item}>{item}</option>
    })
    return(
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/*selecttype*/}
                
                <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types}
                    
                </select>
                </div>
                {/*selecttype*/}
                 {/*guest*/}
                
                <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                    {people}
                    
                </select>
                </div>
                {/*guest*/}
                {/*price*/}
                
                <div className="form-group">
                <label htmlFor="price">room price ${price}</label>
                <input type="range" id="price" name="price" value={price} min={minPrice} max={maxPrice} className="form-control" onChange={handleChange}/>
                {price}
                    
                
                </div>
                {/*price*/}
                {/*size*/}
                
                <div className="form-group">
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                </div>
                </div>
                    {/*size*/}
                    {/*extras*/}
                    <div className="form-group">
                        <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" value="breakfast" checked={breakfast} onChange={handleChange}/>
                        <labe htmlFor="breakfast">breakfast</labe>
                        </div>
                        {/*pets*/}
                        <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" value="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                        </div>
                        {/*pets*/}
                    </div>
                    
                    
                    
                        
                
                    
                    
                </form>
        </section>
    )
}