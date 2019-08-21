import React from 'react';
import './app-component-header.scss';
import logo from '../../../assets/hills.png'
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
            <section className="Menu">
            </section>
           
        </header>
         <video autoPlay muted loop id="waterfall" className="waterfall">
         <source src='https://gcs-vimeo.akamaized.net/exp=1566388780~acl=%2A%2F730143150.mp4%2A~hmac=31809767d9757ff33c603bdc9ca34b75e32a9c04cf4f259de2f982ec54ba6ea8/vimeo-prod-skyfire-std-us/01/2513/8/212566447/730143150.mp4' type="video/mp4"/>
         </video>
         </div>
        )
    }
}
export default Header;