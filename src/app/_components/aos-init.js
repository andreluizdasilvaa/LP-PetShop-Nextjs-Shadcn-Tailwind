'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function AosInit() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 300,
            easing: 'ease-in-sine',
        });
    }, []);


    return null;
}
