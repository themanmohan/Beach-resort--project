import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context';
import StyledHero from '../components/StyledHero'
export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        // console.log(this.props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext
    // componentDidMount(){}
    render() {
        const {getRoom} = this.context;
        const room   = getRoom(this.state.slug);
        if(!room){
          return (<div className="error">
             <Link to='/rooms' className="btn-primary">
                 Back to Home
             </Link>
          </div>);
        }
        const {name ,description, size,capacity,price,extras,
        breakfast,pets,images}=room
        return (
            <li>
            <StyledHero img={images[0]}>
            <Banner title={`${name} room`}>
                <Link to='/rooms' className="btn-primary">
                Back To Room
                </Link>
            </Banner>
               
            </StyledHero>
           <section className="single-room"> 
           <div className="single-room-images">
               {images.map((item,index)=>{
                  return <img key={index} src={item} alt="images"/>
               })}
           </div>
           <div className="single-room-info">
           <article className="desc">
             <h3>detial</h3>
             <p>{description}</p>
           </article>
           <article className="info">
             <h3>info</h3>
             <p>Price:-${price}</p>
             <p>Size:-${size} SQFT</p>
             <h6>
                 max capcity:-{""}
                 {capacity>1?`${capacity} people`:`${capacity} person`}
             </h6>
             <h6>
                 Pets:-{pets?" Allowed":" Not Alloewd"}
             </h6>
             <h6>
                Breakfast:-{breakfast && "Breakfast Included"}
             </h6>
           </article>
           </div>
           </section>
           <section className="room-extras">
             <h6>Extras</h6>
             <ul className="extras">
               {extras.map((item ,index)=>{
                 
               return <li key={index}>-{item}</li>

               })}
             </ul>
           </section>
          </li>
        )
    }
}
