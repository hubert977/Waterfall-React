import React from 'react';
import './app-component-header.scss';
class Header extends React.Component {
    render()
    {
        return(
        <header>
            <section className="Logo">
                <p>WATERFALL</p>
            </section>
            <section className="Menu">
            </section>
            <video autoPlay muted loop id="myVideo">
            <source src="src/assets/waterfall.mp4" type="video/mp4"/>
            </video>
        </header>
      
        )
    }
}
export default Header;