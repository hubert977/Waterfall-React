import React from 'react';
import './app-component-header.scss';
import logo from '../../../assets/hills.png';
import video from '../../../assets/blue.mp4';
class Header extends React.Component {
    render()
    {
        return(
            <div>
        <header>
            <section className="Logo">
                    <p className="LogoWaterfall">WATERFALL</p>
                    <img src={logo} className="Waterfall-image" />
            </section>
            <nav className="Menu">
                <ul>
                <li>Home</li>   
                <li>Article</li>
                <li>Contact</li>   
                </ul> 
            </nav>
        </header>
         <video autoPlay muted loop id="waterfall" className="waterfall">
         <source src={video} type="video/mp4"/>
         </video>
         </div>
        )
    }
}
export default Header;