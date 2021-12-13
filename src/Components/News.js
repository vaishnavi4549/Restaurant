import React from 'react'
import './news.css';
import Footer from './footer'
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
function News() {
    return (
        <>
        <Navbar/>
        <div className="main_news">
            <div className="news_heading">
                <p>News</p>
            </div>
            <div className="news_container">
                <div className="news_row">
                    <div className="one_news">
                        <p className="news_title">Visit Dubai | Trèsind | Elevated Indian 
                        cuisine with a dash of theatrics</p>
                        <p className="news_body">Take everything you know about Indian food and mix it
                         with your wildest culinary imaginations to begin to understand the philosophy of Trèsind. This fine</p>
                        <Link to="" className="readmore">READ MORE</Link>
                    </div>

                    <div className="one_news">
                        <p className="news_title">Visit Dubai | Trèsind | Elevated Indian 
                        cuisine with a dash of theatrics</p>
                        <p className="news_body">Take everything you know about Indian food and mix it
                         with your wildest culinary imaginations to begin to understand the philosophy of Trèsind. This fine</p>
                        <Link to="" className="readmore">READ MORE</Link>
                    </div>

                    <div className="one_news">
                        <p className="news_title">Visit Dubai | Trèsind | Elevated Indian 
                        cuisine with a dash of theatrics</p>
                        <p className="news_body">Take everything you know about Indian food and mix it
                         with your wildest culinary imaginations to begin to understand the philosophy of Trèsind. This fine</p>
                        <Link to="" className="readmore">READ MORE</Link>
                    </div>
                </div>

                <div className="news_row">
                    <div className="one_news">
                        <p className="news_title">Visit Dubai | Trèsind | Elevated Indian 
                        cuisine with a dash of theatrics</p>
                        <p className="news_body">Take everything you know about Indian food and mix it
                         with your wildest culinary imaginations to begin to understand the philosophy of Trèsind. This fine</p>
                        <Link to="" className="readmore">READ MORE</Link>
                    </div>

                    <div className="one_news">
                        <p className="news_title">Visit Dubai | Trèsind | Elevated Indian 
                        cuisine with a dash of theatrics</p>
                        <p className="news_body">Take everything you know about Indian food and mix it
                         with your wildest culinary imaginations to begin to understand the philosophy of Trèsind. This fine</p>
                        <Link to="" className="readmore">READ MORE</Link>
                    </div>

                    <div className="one_news">
                        <p className="news_title">Visit Dubai | Trèsind | Elevated Indian 
                        cuisine with a dash of theatrics</p>
                        <p className="news_body">Take everything you know about Indian food and mix it
                         with your wildest culinary imaginations to begin to understand the philosophy of Trèsind. This fine</p>
                        <Link to="" className="readmore">READ MORE</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default News
