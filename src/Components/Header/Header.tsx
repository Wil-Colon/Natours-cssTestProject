import './header.scss';
import logo from '../../assets/images/logo-white.png';
import { useState } from 'react';

interface navBarProps {
    navOpened: any;
    navIsOpen: boolean;
}
export default function Header({ navOpened, navIsOpen }: navBarProps) {
    return (
        <>
            <div className="header">
                <img className="logo" src={logo} alt="logo" />
                <button
                    onClick={() => navOpened(!navIsOpen)}
                    className={!navIsOpen ? 'nav-btn' : 'nav-btn btn-animate'}
                >
                    <span></span>
                </button>

                <div className="navigation">
                    <div className="navigation__background">&nbsp;</div>
                </div>

                <div className="text-box">
                    <h1 className="text-box__primary-main">Outdoors</h1>
                    <h2 className="text-box__primary-sub">
                        is where life happens
                    </h2>
                </div>

                <a className="btn" href="#">
                    Discover our Tours
                </a>
            </div>

            <main>
                <section class="section-about">
                    <div class="u-center-text u-margin-bottom-big">
                        <h2 class="heading-secondary">
                            Exciting tours for adventurous people
                        </h2>
                    </div>

                    <div class="row">
                        <div class="col-1-of-2">
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                You're going to fall in love with nature
                            </h3>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aperiam, ipsum sapiente
                                aspernatur libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum
                                qui.
                            </p>

                            <h3 class="heading-tertiary u-margin-bottom-small">
                                Live adventures like you never have before
                            </h3>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores nulla deserunt
                                voluptatum nam.
                            </p>

                            <a href="#" class="btn-text">
                                Learn more &rarr;
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
