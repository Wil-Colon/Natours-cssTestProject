import './about.scss';
import img1 from '../../assets/images/nat-1-large.jpg';
import img2 from '../../assets/images/nat-2-large.jpg';
import img3 from '../../assets/images/nat-3-large.jpg';

export default function About() {
    return (
        <div className="section-about">
            <h2 className="section-about__header">
                Exciting Tours for Adventurous People
            </h2>

            <div className="section-about__row">
                <div className="section-about__row__heading-tertiary">
                    <h3>You're going to fall in love with nature</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, ipsum sapiente aspernatur libero repellat quis
                        consequatur ducimus quam nisi exercitationem omnis earum
                        qui.
                    </p>
                </div>

                <div className="section-about__row__heading-tertiary">
                    <h3>Live adventures like you never have before</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores nulla deserunt voluptatum nam.
                    </p>
                </div>
            </div>

            <div className="section-about__composition">
                <img
                    src={img1}
                    alt="photo1"
                    className="section-about__composition__photo"
                />
                <img
                    src={img2}
                    alt="photo2"
                    className="section-about__composition__photo"
                />
                <img
                    src={img3}
                    alt="photo3"
                    className="section-about__composition__photo"
                />
            </div>

            <a href="about" className="section-about__btn-link">
                Learn more
            </a>
        </div>
    );
}
