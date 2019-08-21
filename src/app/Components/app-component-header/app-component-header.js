import React from 'react';
import './app-component-header.scss';
import logo from '../../../assets/hills.png';
import video from '../../../assets/blue.mp4';
class Header extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {ShowMenu: false}
        this.ShowMenu = this.ShowMenu.bind(this);
    }
    ShowMenu()
    {
        this.setState({
            ShowMenu: !this.state.ShowMenu
          });
        console.log(this.state.ShowMenu);
    }
    render()
    {
        const isActive = this.state.ShowMenu ? 'is-active' : '';
        return(
            <div>
        <header>
            <section className="Logo">
                    <p className="LogoWaterfall">WATERFALL</p>
                    <img src={logo} className="Waterfall-image" />
            </section>
            <nav className="Menu">
            <button className={`hamburger hamburger--collapse ${isActive}`} type="button" onClick={this.ShowMenu}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
            </span>
            </button>
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