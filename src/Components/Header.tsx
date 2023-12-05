import './header.scss';
import logo from '../assets/images/logo-white.png';

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            <button className="nav-btn">
                <span></span>
            </button>

            <div className="text-box">
                <h1 className="text-box__primary-main">Outdoors</h1>
                <h2 className="text-box__primary-sub">is where life happens</h2>
            </div>

            <a className="btn" href="#">
                Discover our Tours
            </a>
        </div>
    );
}
