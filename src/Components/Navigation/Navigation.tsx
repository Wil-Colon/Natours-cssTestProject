import './navigation.scss';

interface navBarProps {
    navIsOpen: any;
}

export default function Navigation({ navIsOpen }: navBarProps) {
    console.log(navIsOpen);
    return (
        <div className="navigation">
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
