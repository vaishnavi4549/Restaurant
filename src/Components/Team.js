import React from 'react'
import './team.css';
import chef1 from '../images/chef1.jpg';
import chef2 from '../images/chef2.jpg';
import chef3 from '../images/chef3.jpg';
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import twitter from '../images/t2.png';
import contact from '../images/contact.png';
import {Link} from 'react-router-dom';
import Footer from './footer';
import Navbar from './Navbar';
function Team() {
    return (
        <>
        <Navbar/>
        <div className="team_main">     
            <div className="team_title">
                <p>Our Team</p>
            </div>
            <div className="first_para">
                <p className="para_title">Passion brought us here</p>
                <p className="para_text">Cooking is like painting or writing a song. Just as there are only so many notes or colors, 
                    there are only so many flavors - 
                    it's how you combine them that sets you apart.We've got famous chefs and stars—Julia Child, 
                Sophia Loren, Virginia Woolf—to thank for some of the delicious food and Amazing Dishes.</p>
            </div>
            <div className="team">
                <div className="specific">
                    <div className="specific_image">
                        <img src={chef1}/>
                        <p className="name">Vikas Khanna</p>
                    </div>
                    <div className="social_icons">
                        <Link to="/"><img  className='icons' src={fb}/></Link>
                        <Link to="/"><img className='icons' src={insta}/></Link>
                        <Link to="/"><img className='icons' src={twitter}/></Link>
                        <Link to="/"><img className='icons' src={contact}/></Link>
                     </div>
                    <div className="Last_para">
                        <p>Vikas Khanna has certainly made a name for himself,
                        not just in India, but even internationally. He is a 
                        Michelin star chef and his restaurant Junoon has won Michelin stars for 6 consecutive years!
                        he was the host of the MasterChef India Season 2. 
                      </p>
                    </div>
                </div>

                <div className="specific">
                    <div className="specific_image">
                        <img src={chef2}/>
                        <p className="name">Pankaj Bhadouria</p>
                    </div>
                    <div className="social_icons">
                        <Link to="/"><img  className='icons' src={fb}/></Link>
                        <Link to="/"><img className='icons' src={insta}/></Link>
                        <Link to="/"><img className='icons' src={twitter}/></Link>
                        <Link to="/"><img className='icons' src={contact}/></Link>
                     </div>
                    <div className="Last_para">
                        <p>She is the winner of MasterChef India Season 1 and very Successful Chef. 
                            Since then she has been spreading her love for cooking by teaching people recipes through several
                             shows like ‘Chef Pankaj Ka Zayka’ and ‘3 Course with Pankaj’, to name a few.
                      </p>
                    </div>
                </div>

                
                <div className="specific">
                    <div className="specific_image">
                        <img src={chef3}/>
                        <p className="name">Ajay Chopra</p>
                    </div>
                    <div className="social_icons">
                        <Link to="/"><img  className='icons' src={fb}/></Link>
                        <Link to="/"><img className='icons' src={insta}/></Link>
                        <Link to="/"><img className='icons' src={twitter}/></Link>
                        <Link to="/"><img className='icons' src={contact}/></Link>
                     </div>
                    <div className="Last_para">
                        <p>
                        He’s known as the master of progressive Indian cuisines and has also been a judge on
                         the popular cooking show MasterChef India. Did you know he owns the restaurant chain The Yellow Chilli?! We’re totally bowled over by his recipe for Makhani Gravy!
                       </p>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Team
