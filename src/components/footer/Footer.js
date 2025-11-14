import React from "react";
import Link from "next/link";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <h1>SCHNEIDER</h1>
            <p>Real Estate</p>
            <h3>We don’t just find properties — we help you find the place where you truly belong. Your comfort, our commitment.</h3>
            <nav className="footer-menu">
                <div className="each-menu">
                    <Link href=''>HOME</Link>
                </div>
                <div className="each-menu">
                    <Link href=''>BUY</Link>
                </div>
                <div className="each-menu">
                    <Link href=''>RENT</Link>
                </div>
                <div className="each-menu">
                    <Link href=''>OFF PLAN</Link>
                </div>
                <div className="each-menu">
                    <Link href=''>CONTACT</Link>
                </div>
            </nav>
            <main className="policy-section">
                <div className="each-item">
                    <Link href=''>&middot; Privacy policy</Link>
                </div>
                <div className="each-item">
                    <Link href=''>&middot; Terms and Conditions</Link>
                </div>
                <div className="each-item">
                    <Link href=''>&middot; Cookie Preferences</Link>
                </div>
            </main>
        </footer>
    );
};

export default Footer;