import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:'Free Cockatail',
                info:'bsmss bdjh mmsahdjahsadjagh jhadsj jhadjh'
            },
            {
                icon:<FaHiking />,
                title:'Free hHinking',
                info:'bsmss bdjh mmsahdjahsadjagh jhadsj jhadjh'
            },
            {
                icon:<FaBeer />,
                title:'Free Beer',
                info:'bsmss bdjh mmsahdjahsadjagh jhadsj jhadjh'
            },
            {
                icon:<FaShuttleVan />,
                title:'Free Shuttlevan',
                info:'bsmss bdjh mmsahdjahsadjagh jhadsj jhadjh'
            }
        ]
    }
    render() {
       
        return (
            <section className="services" >
                <Title title="srevice" />
                <div className="services-center">
                {this.state.services.map((item,index)=>{
                    return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                })}
                </div>
            </section>
        )
    }
}
