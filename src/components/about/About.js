import React from "react";
import './about.css';

const About = () => {
    return (
        <>
        <main className="about-secton" >
            <nav className="about-left">
                <h1 data-aos="fade-up">SCHNEIDER&reg;</h1>
                <h3 data-aos="slide-right"><i>DRIVEN BY TRUST, DEFINED BY RESULTS</i></h3>
                <p data-aos="slide-left">At Schneider Real Estate, we believe finding the perfect home is more than just a transaction—it’s a journey. Our experienced team is here to guide you every step of the way, helping you discover a place where you feel truly comfortable and at home. Whether you’re buying, renting, or investing, we provide personalized support, expert market insights, and practical advice to make your real estate experience smooth and stress-free. With years of experience in the UAE property market, we are committed to helping you make informed decisions and ensuring that your move is seamless—from the first viewing to settling into your new home. At Schneider Real Estate, your comfort and satisfaction are our top priority.</p>
            </nav>
            <nav className="about-right">
            <div className="sliderContainer">

<input type="radio" id="trigger1" name="slider" />
<label htmlFor="trigger1">
  <span className="sr-only">Slide 1 of 5</span>
</label>
<div className="slide bg1"></div>

<input type="radio" id="trigger2" name="slider" defaultChecked autoFocus />
<label htmlFor="trigger2">
  <span className="sr-only">Slide 2 of 5</span>
</label>
<div className="slide bg2"></div>

<input type="radio" id="trigger3" name="slider" />
<label htmlFor="trigger3">
  <span className="sr-only">Slide 3 of 5</span>
</label>
<div className="slide bg3"></div>

<input type="radio" id="trigger4" name="slider" />
<label htmlFor="trigger4">
  <span className="sr-only">Slide 4 of 5</span>
</label>
<div className="slide bg4"></div>

<input type="radio" id="trigger5" name="slider" />
<label htmlFor="trigger5">
  <span className="sr-only">Slide 5 of 5</span>
</label>
<div className="slide bg5"></div>

</div>
            </nav>
        </main>
        <main className="service-section">
            <h1 className="service-tittle">SERVICES</h1>
            <div className="cards">
            <input type="radio" id="radio-1" name="radio-card" defaultChecked />
            <article className="card" style={{ '--angle': '4deg' }}>
                <img className="card-img" src="/header1.jpg" alt="Alejandro Escamilla" />
                <div className="card-data">
                <span className="card-num">1/7</span>
                <h2>WHAT WE DO &#8658;</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                <footer>
                    <label htmlFor="radio-7" aria-label="Previous">&#10094;</label>
                    <label htmlFor="radio-2" aria-label="Next">&#10095;</label>
                </footer>
                </div>
            </article>

            <input type="radio" id="radio-2" name="radio-card" />
            <article className="card" style={{ '--angle': '-8deg' }}>
                <img className="card-img" src="/header2.jpg" alt="Shyamanta Baruah" />
                <div className="card-data">
                <span className="card-num">2/7</span>
                <h2>BUY A PROPERTY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                <footer>
                    <label htmlFor="radio-1" aria-label="Previous">&#10094;</label>
                    <label htmlFor="radio-3" aria-label="Next">&#10095;</label>
                </footer>
                </div>
            </article>

            <input type="radio" id="radio-3" name="radio-card" />
            <article className="card" style={{ '--angle': '-7deg' }}>
                <img className="card-img" src="/header3.jpg" alt="Luke Chesser" />
                <div className="card-data">
                <span className="card-num">3/7</span>
                <h2>SELL YOUR PROPERTY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                <footer>
                    <label htmlFor="radio-2" aria-label="Previous">&#10094;</label>
                    <label htmlFor="radio-4" aria-label="Next">&#10095;</label>
                </footer>
                </div>
            </article>

            <input type="radio" id="radio-4" name="radio-card" />
            <article className="card" style={{ '--angle': '11deg' }}>
                <img className="card-img" src="/header4.jpg" alt="Ilham Rahmansyah" />
                <div className="card-data">
                <span className="card-num">4/7</span>
                <h2>RENT YOUR PROPERTY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                <footer>
                    <label htmlFor="radio-3" aria-label="Previous">&#10094;</label>
                    <label htmlFor="radio-5" aria-label="Next">&#10095;</label>
                </footer>
                </div>
            </article>

            <input type="radio" id="radio-5" name="radio-card" />
            <article className="card" style={{ '--angle': '13deg' }}>
                <img className="card-img" src="/header1.jpg" alt="petradr" />
                <div className="card-data">
                <span className="card-num">5/7</span>
                <h2>PROPERTY VALUATION</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                <footer>
                    <label htmlFor="radio-4" aria-label="Previous">&#10094;</label>
                    <label htmlFor="radio-6" aria-label="Next">&#10095;</label>
                </footer>
                </div>
            </article>

            <input type="radio" id="radio-6" name="radio-card" />
            <article className="card" style={{ '--angle': '-17deg' }}>
                <img className="card-img" src="/header2.jpg" alt="Caleb George" />
                <div className="card-data">
                <span className="card-num">6/7</span>
                <h2>PROPERTY MANAGEMENT</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                <footer>
                    <label htmlFor="radio-5" aria-label="Previous">&#10094;</label>
                    <label htmlFor="radio-7" aria-label="Next">&#10095;</label>
                </footer>
                </div>
            </article>

            <input type="radio" id="radio-7" name="radio-card" />
            <article className="card" style={{ '--angle': '20deg' }}>
                <img className="card-img" src="https://picsum.photos/id/401/200/300" alt="Austin Ban" />
                <div className="card-data">
                <span className="card-num">7/7</span>
                <h2>GET IN TOUCH &#xf095;</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                <footer>
                    <label htmlFor="radio-6" aria-label="Previous">&#10094;</label>
                    <label htmlFor="radio-1" aria-label="Next">&#10095;</label>
                </footer>
                </div>
            </article>
            </div>
        </main>
        <main className="why-us">
            <h1>WHY US</h1>
            <p>At Schneider Real Estate, we go beyond simply helping you find a property. We guide you every step of the way, ensuring you feel confident and comfortable in your decisions. Our team of experienced professionals knows the UAE real estate market inside out, providing personalized advice, timely support, and transparent communication. Whether you’re buying, renting, or investing, we focus on making the process seamless and stress-free. With Schneider Real Estate, you don’t just find a place—you find a home where you can thrive.</p>
        </main>
        </>
    );
};

export default About;