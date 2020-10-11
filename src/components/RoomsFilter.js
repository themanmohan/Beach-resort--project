import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../components/Title';
import RoomContainer from './RoomContainer';
const getUnique = (items, value) =>{
    return[...new Set(items.map(item=>item[value]))];
};
const RoomsFilter=({rooms})=> {
     const context = useContext(RoomContext);
     const {handleChange,minPrice,maxPrice,maxSize,minSize,price,breakfast,pets,type,capacity} = context;
//get  unique
     let types =getUnique(rooms,'type')
     types=['all',...types];

     //map to jsx
     types=types.map((item,index)=>{
          return <option value={item} key={index}>{item}</option>

     })
     let people = getUnique(rooms,'capacity');
     people=people.map((item,index)=>{
       return <option value={item} key={index}>{item}</option>
     })
    return (
       <section className="filter-container">
        <Title title="Search Rooms" />
        <form className="filter-form">
           {/* select type */}
           <div className="form-group">
              <label htmlFor="type">RoomType</label>
              <select name="type" id="type" value={type}
              className="form-control" onChange={handleChange}>
               <option value="single">Single</option>
               {types}
              </select>
           </div>
            {/*end  select type */}
             {/* guest*/}
           <div className="form-group">
              <label htmlFor="capacity">Guest</label>
              <select name="capacity" id="capacity" value={capacity}
              className="form-control" onChange={handleChange}>
               
               {people}
              </select>
           </div>
            {/*end  guest*/}
            {/* room price */}
            <div className="form-group">
            <label htmlFor="price">Room Price:- ${price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price"
                value={price} onChange={handleChange} className="form-control" />
           </div>
            {/* end of room price */}
            {/* room size */}
            <div className="form-group">
            <label htmlFor="size">Room Size</label>
                <input type="number" name="minSize"  id="minSize"
                value={minSize} onChange={handleChange} className="size-input" />
                 <input type="number" name="maxSize"  id="maxSize"
                value={maxSize} onChange={handleChange} className="size-input" />
           </div>

            {/* end  room size */}
            {/* extras */}
            <div className="form-group">
           <div className="single-extra">
             <input type="checkbox" name="breakfast" id="breakfast" value={breakfast} checked={breakfast} onChange={handleChange} />
             <label htmlFor="breakfast" >breakfast </label>
           </div>
           <div className="single-extra">
             <input type="checkbox" name="pets" id="pets" value={pets} checked={pets} onChange={handleChange} />
             <label htmlFor="pets" >pets </label>
           </div>
           </div>
            {/* end of extras */}
        </form>
       </section>
    )
}
export default RoomsFilter