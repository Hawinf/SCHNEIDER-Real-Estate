import Link from "next/link";
import React from "react";
import './colummenu.css';

const Colummenu = () => {
    return (
        <main className="colummenu-section" data-aos="fade-up">
            <div className="colummenu-item">
                <Link href='/'>BUY &#8690;</Link>
            </div>
            <div className="colummenu-item">
                <Link href='/'>RENT &#8690;</Link>
            </div>
            <div className="colummenu-item">
                <Link href=''>OFFPLAN &#8690;</Link>
            </div>
            <div className="colummenu-item">
                <Link href=''>SERVICE &#8690;</Link>
            </div>
        </main>
    );
};

export default Colummenu;