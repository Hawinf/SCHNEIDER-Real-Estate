import Link from "next/link";
import React from "react";
import './colummenu.css';

const Colummenu = () => {
    return (
        <main className="colummenu-section" data-aos="fade-up">
            <div className="colummenu-item">
                <Link href='/'>BUY</Link>
            </div>
            <div className="colummenu-item">
                <Link href='/'>RENT</Link>
            </div>
            <div className="colummenu-item">
                <Link href=''>OFFPLAN</Link>
            </div>
            <div className="colummenu-item">
                <Link href=''>SERVICE </Link>
            </div>
        </main>
    );
};

export default Colummenu;