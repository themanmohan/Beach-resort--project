import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturredRoom from '../components/FeaturedRoom';
export default function Home() {
    return (
      <React.Fragment>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="Delux Room Starting at $299">
                <button>
                    <Link to="/" className="btn-primary" >
                        Our Rooms
                    </Link>
                </button>
            </Banner>
        </Hero>
        <Services />
        <FeaturredRoom />
     
        </React.Fragment>

       
    )
}
