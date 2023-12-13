import './home.scss';
import Navigation from '../Components/Navigation/Navigation';
import Header from '../Components/Header/Header';
import { useState } from 'react';

export default function Home() {
    return (
        <>
            <Navigation />
            <Header />
        </>
    );
}
