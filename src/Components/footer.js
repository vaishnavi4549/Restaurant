import React from 'react'
import './footer.css';
import img1 from '../images/footer.jpg';
import img2 from '../images/location.jpg';
import img3 from '../images/design2.jpg';
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import twitter from '../images/t2.png';
import contact from '../images/contact.png';
import {Link} from 'react-router-dom'
function footer() {
    return (
        <div className="footer_main">
            <div className="footer_inner">
                <div className="footer_image">
                    <img src={img1}/>
                </div>
                <div className="footer_content">
                    <p className="footer_heading">Magic Meal</p>
                    <p className="footer_text">Gera Serenity Building,
                    CTS No.15, Koregaon Park,
                    Pune – 411 001</p>
                    <p className="footer_heading">Landline</p>
                    <p className="footer_text">020 3049 1155</p>
                    
                    <p className="footer_heading">Mobile</p>
                    <p className="footer_text">+91 91300 95522</p>

                    <p className="footer_heading">Email</p>
                    <p className="footer_text">magic.meal@pune.com</p>
                </div>
                <div className="footer_location">
                    <img src={img2}/>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="upper_side">
                    <p className="title2">Magic Meal</p>
                    <p className="para">Embark on a journey through authentic South Indian 
                    flavours at Savya Rasa. Located in the heart of Pune, the
                     restaurant serves the best cuisine from different regions 
                     of South India to those who appreciate fine dining.</p>
                </div>
                <div className="middle_image">
                    <img src={img3}/>
                </div>
                <div className="bottom_media">
                    <p className="media">Story</p>
                    <p className="media">|</p>
                    <p className="media">Menu</p>
                    <p className="media">|</p>
                    <p className="media">Media</p>
                    <p className="media">|</p>
                    <p className="media">Contact</p>
                </div>
                <div className="media_icons">
                    <Link to="/"><img  className='icons' src={fb}/></Link>
                    <Link to="/"><img className='icons' src={insta}/></Link>
                    <Link to="/"><img className='icons' src={twitter}/></Link>
                    <Link to="/"><img className='icons' src={contact}/></Link>
                </div>
                <div className="ending">
                    <p className="ending_para">The name SAVYA RASA and all related marks
                     are trademarks of V.M Hospitality Limited. ©2016 V.M 
                     Hospitality Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default footer
