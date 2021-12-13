import React from 'react'
import './welcome.css';
import img from '../images/welcome2.png'
import img3 from '../images/design2.jpg'
function Welcome() {
    return (
        <div className="main">
            <div className="welcome">
                <div className="text_welcome">
                    <p className="heading">Welcome To Magic Meal</p>
                    <p className="content">Our commitment to Food Safety is what makes us 
                    the preferred Restaurant for our customers. We take pride in saying that, 
                    we make the food live in front of people to give them the best experience.
                     The taste is suitable for people across all age groups. The Open Kitchen
                      concept is first time being introduced in Ambajogai with a unique taste.
                       All recipes here are prepared with scientific methods and will be served 
                       exclusively.</p>
                </div>
                <div className="image">
                    <img src={img}/>
                </div>
            </div>
            <p className="title">Our Story</p>
            <div className="story_main">
                <div className="story">
                    <div className="para1">
                        <p>Savya Rasa is a first of its kind dining experience that
                            celebrates the epicurean journey of South India. 
                            Created with the intent of offering guests fine dine 
                            with exclusivity, our existence is about the re-creation of
                            traditional cuisines and bringing them to a wider audience.
                        </p>
                    </div>
                    <div className="para2">
                        <p>We at Magic Meal have travelled extensively across the 
                            seven major culinary regions of South India and spent
                            years learning from local sources to make sure that 
                            every dish we serve is authentic. Cultural aspects 
                            and attributes have been incorporated into the dining 
                            experience to help you rediscover the heritage and history
                            that has helped shape South Indian culture.
                        </p>
                    </div>
                    <div className="para3">
                        <p>We welcome our guests to indulge in this unique effort 
                            that blends traditional South Indian cooking with an 
                            ambience that pays homage to the glorious culture of the
                            region</p>
                    </div>
                </div>
                <div className="middle_image">
                    <img src={img3}/>
                </div>
            </div>
            
        </div>
    )
}

export default Welcome
