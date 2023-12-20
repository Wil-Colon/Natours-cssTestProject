import './home.scss';
import Navigation from '../Components/Navigation/Navigation';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';

export default function Home() {
    return (
        <>
            <Navigation />
            <Header />
            <About />
        </>
    );
}
