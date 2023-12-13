import './navigation.scss';
import { useState } from 'react';

export default function Navigation() {
    const [navIsOpen, setNavIsOpen] = useState(false);
    return (
        <div className="navigation">
            <button
                onClick={() => setNavIsOpen(!navIsOpen)}
                className={
                    !navIsOpen
                        ? 'navigation__btn'
                        : 'navigation__btn btn-animate'
                }
            >
                <span></span>
            </button>
            <div
                className={
                    !navIsOpen
                        ? 'navigation__background'
                        : 'navigation__background nav-open'
                }
            >
                &nbsp;
            </div>
            <div className="navigation__menu">
                <div className="navigation__item">01 About Natours</div>
                <div className="navigation__item">02 your benefits</div>
                <div className="navigation__item">03 popular tours</div>
                <div className="navigation__item">04 stories</div>
                <div className="navigation__item">05 book now</div>
            </div>
        </div>
    );
}
