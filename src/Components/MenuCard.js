import React from 'react'
import {Link} from 'react-router-dom';
import './menucard.css';
import Navbar from './Navbar';
import design3 from '../images/design3.jpg';
import contact from '../images/contact.png';
import mail from '../images/mail.png'
import Footer from './footer'
function MenuCard() {
    return (
        <>
        <Navbar/>
        <div className="menu_main">
            <div className="menu_header">
                <p className="checkout">Check Out</p>
                <p className="ourmenu">Our Menu</p>
            </div>

            <div className="menu_para">
                <p>
                Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want.
                        Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                </p>
            </div>
            <div className="menu_navbar">
                <div className="links">
                    <Link to="" className="inner_links">ALL</Link>
                    <Link to="" className="inner_links">DRINKS</Link>
                    <Link to="" className="inner_links">SALAD</Link>
                    <Link to="" className="inner_links">MEAL</Link>
                    <Link to="" className="inner_links">PASTA</Link>
                    <Link to="" className="inner_links">BURGERS</Link>
                    <Link to="" className="inner_links">PIZZAS</Link>
                </div>
            </div>
            <div className="menu_dishes">
                <div className="row">
                    <div className="menu_specific">
                        <img src="https://media.istockphoto.com/photos/medu-wada-with-sambar-and-chutney-south-indian-breakfast-or-snack-on-picture-id1205482272?k=20&m=1205482272&s=612x612&w=0&h=-Dmh081Ii0EOWOHF3PvDgX4Mufih7mIKBiweCpcPxUk="/>
                        <p className="dish_name">Vada Sambar</p>
                        <p className="dish_info">Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                        We always try to justify</p>
                        <p className="price">INR 200</p>
                        <Link to="" className="menu_button"><button>ORDER NOW</button></Link>
                    </div>
                    <div className="menu_specific">
                        <img src="https://media.istockphoto.com/photos/shahi-paneer-or-paneer-kadai-picture-id1305517229?k=20&m=1305517229&s=612x612&w=0&h=SizfSjbOvAClTjfle5JXJbg1b11NgLOI9HSqIRh4rG4="/>
                        <p className="dish_name">Shahi Paneer</p>
                        <p className="dish_info">Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                        We always try to justify</p>
                        <p className="price">INR 200</p>
                        <Link to="" className="menu_button"><button>ORDER NOW</button></Link>
                    </div>
                    <div className="menu_specific">
                        <img src="https://sukhis.com/wp-content/uploads/2018/10/shutterstock_620407940-1024x683.jpg"/>
                        <p className="dish_name">Tikki Masala</p>
                        <p className="dish_info">Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                        We always try to justify</p>
                        <p className="price">INR 200</p>
                        <Link to="" className="menu_button"><button>ORDER NOW</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="menu_specific">
                        <img src="https://media.istockphoto.com/photos/fried-momos-dumpling-picture-id1341123015?k=20&m=1341123015&s=612x612&w=0&h=UaJSvzMkYHqyJvJH4wcnofjtwp2GRIX_T6g2BYk1ZJI="/>
                        <p className="dish_name">Veg Momos</p>
                        <p className="dish_info">Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                        We always try to justify</p>
                        <p className="price">INR 200</p>
                        <Link to="" className="menu_button"><button>ORDER NOW</button></Link>
                    </div>
                    <div className="menu_specific">
                        <img src="https://media.istockphoto.com/photos/pav-bhaji-with-a-soft-bread-roll-bun-paav-on-table-setting-indian-picture-id1057140668?k=20&m=1057140668&s=612x612&w=0&h=KTKSiIGhbby-R8okSTpqtdbGtCuu3x-n13D8X-UQ23M="/>
                        <p className="dish_name">Pav Bhaji</p>
                        <p className="dish_info">Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                        We always try to justify</p>
                        <p className="price">INR 200</p>
                        <Link to="" className="menu_button"><button>ORDER NOW</button></Link>
                    </div>
                    <div className="menu_specific">
                        <img src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__480.jpg"/>
                        <p className="dish_name">Pizza</p>
                        <p className="dish_info">Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                        We always try to justify</p>
                        <p className="price">INR 200</p>
                        <Link to="" className="menu_button"><button>ORDER NOW</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="menu_specific">
                        <img src="https://media.istockphoto.com/photos/choco-chips-cake-picture-id1278918978?k=20&m=1278918978&s=612x612&w=0&h=bzhcy6xhkWUu6bpNAmkDez-iFItFZ5WE_CAI9hJpDKA="/>
                        <p className="dish_name">Chocolate Cake</p>
                        <p className="dish_info">Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                        We always try to justify</p>
                        <p className="price">INR 200</p>
                        <Link to="" className="menu_button"><button>ORDER NOW</button></Link>
                    </div>
                    <div className="menu_specific">
                        <img src="https://media.istockphoto.com/photos/gulab-jamun11-picture-id521803129?k=20&m=521803129&s=612x612&w=0&h=rxy4lr0ByQj6PUf-foL7OKf-3Tjb6Nutg9NbmElMH1w="/>
                        <p className="dish_name">Gulab Jamun</p>
                        <p className="dish_info">Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                        We always try to justify</p>
                        <p className="price">INR 200</p>
                        <Link to="" className="menu_button"><button>ORDER NOW</button></Link>
                    </div>
                    <div className="menu_specific">
                        <img src="https://media.istockphoto.com/photos/jilebi-picture-id1159362251?k=20&m=1159362251&s=612x612&w=0&h=uYNdVy8LCa65v5qcClWzOwREHFf4RZH2JJrXB9VbLw8="/>
                        <p className="dish_name">Jilebe</p>
                        <p className="dish_info">Mewad Bistro introduced open kitchen concept first time in Ambajogai. 
                        We invite our guests to visit our kitchen whenever you want. 
                        We always try to justify</p>
                        <p className="price">INR 200</p>
                        <Link to="" className="menu_button"><button>ORDER NOW</button></Link>
                    </div>
                </div>
            </div>
            <div className="feedback">
                <div className="main_feedback">
                    <p className="f_heading">Give Us FeedBack</p>
                    <img src={design3} alt=""/>
                    <div className="f_body">
                        <form>
                            <input name="name" placeholder="Name"/>
                            <input name="Email" placeholder="Email"/>
                            <input name="phone" placeholder="Phone"/>
                            <input className="message" name="Message" placeholder="Message"/>
                            <button className="f_button">Send</button>
                        </form>
                        <div className="f_right">
                            <img src={contact} />
                            <p>+971588951272</p>
                            <img src={mail}/>
                            <p>tresind@passionfandb.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default MenuCard
