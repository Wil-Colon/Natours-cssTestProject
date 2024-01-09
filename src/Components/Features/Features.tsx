import './features.scss';
import svgIcons from '../../assets/images/sprite.svg';

export default function Features() {
    return (
        <div className="features">
            <div className="features-container">
                <div className="features-container__card">
                    <svg className="features-container__icon">
                        <use href={`${svgIcons}#icon-sphere`}></use>
                    </svg>
                    <h2>Explore the World</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, ipsum sapiente aspernatur.{' '}
                    </p>
                </div>

                <div className="features-container__card">
                    <svg className="features-container__icon">
                        <use href={`${svgIcons}#icon-compass`}></use>
                    </svg>
                    <h2>Meet Nature</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, ipsum sapiente aspernatur.{' '}
                    </p>
                </div>

                <div className="features-container__card">
                    <svg className="features-container__icon">
                        <use href={`${svgIcons}#icon-map2`}></use>
                    </svg>
                    <h2>Find Your Way</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, ipsum sapiente aspernatur.{' '}
                    </p>
                </div>

                <div className="features-container__card">
                    <svg className="features-container__icon">
                        <use href={`${svgIcons}#icon-heart-outlined`}></use>
                    </svg>
                    <h2>Live a healthier life</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, ipsum sapiente aspernatur.{' '}
                    </p>
                </div>
            </div>
        </div>
    );
}
