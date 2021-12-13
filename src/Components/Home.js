import React from 'react'
import './home.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Footer from './footer';
function Home() {
    return (
        <>
        <Navbar/>
        <div className="home">
            <div className="container">
                <div className="banner_text">
                    <h1 className="big"> Taste & Spicy Food</h1>
                    <p className="small">We welcome our guests to indulge in this unique effort that blends traditional 
                    <br/>South Indian cooking with an ambience that pays homage to the glorious culture of the region.</p> 
                </div>
                <button className="button_click">Click out our Menu</button>
            </div>
        </div>
        <Welcome/>
        <Footer/>
        </>
    )
}

export default Home;
