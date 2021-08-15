import logo from './images/weather-cast_logo.svg';

import './TopBar.css'

const TopBar = () => {

    return (
        <header className="top-bar">
            <img src={logo} alt={logo} className="app-logo"/>
        </header>
    );

}

export default TopBar;