import './home.scss';
import Header from '../Components/Header/Header';
import Navigation from '../Components/Navigation/Navigation';
import { useState } from 'react';

export default function Home() {
    const [open, setOpened] = useState(false);

    return (
        <>
            <Navigation navIsOpen={open} />
            <Header navOpened={setOpened} navIsOpen={open} />
        </>
    );
}
