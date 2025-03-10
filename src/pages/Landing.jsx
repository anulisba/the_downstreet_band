import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Landing.css"; // Import the external CSS file
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import logo from '../assets/images/logo.png'
import bg1 from '../assets/images/WhatsApp Image 2025-02-24 at 10.54.09 PM.jpeg';
import bg2 from '../assets/images/bg2.jpeg';
import bg3 from '../assets/images/bg3.jpeg';
import aboutus from '../assets/images/aboutus.jpeg'
import t1 from '../assets/images/drummer.jpeg';
import t2 from '../assets/images/anix.jpeg';
import t3 from '../assets/images/paulwin.jpeg';
import t4 from '../assets/images/abinnath.jpeg';
import t5 from '../assets/images/guitar.jpeg';
import t6 from '../assets/images/guitar2.jpeg'
import g0 from '../assets/images/g0.webp';
import g1 from '../assets/images/g1.webp'
import g2 from '../assets/images/g2.jpeg';
import g3 from '../assets/images/g3.webp';
import g4 from '../assets/images/g4.webp';
import g5 from '../assets/images/g5.webp';
import g6 from '../assets/images/g6.webp';
import g7 from '../assets/images/g7.webp';
import g8 from '../assets/images/g8.webp';
import g9 from '../assets/images/g94.webp';
import g10 from '../assets/images/g10.webp';
import g11 from '../assets/images/g11.webp';
import Popup from "./Popup";
import insta from '../assets/images/instagram.png'
export default function LandingPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const teamImages = [t1, t2, t3, t4, t5, t6];
    const [index, setIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    // Move to the next slide
    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    };

    // Move to the previous slide
    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? teamImages.length - 1 : prevIndex - 1
        );
    };

    const images = [bg1, bg2, bg3];
    const texts = ["A Direction to Vibe", "Live the Music", "Experience the Vibe"];
    // Add state at the top of your component
    const [visibleImages, setVisibleImages] = useState(6);

    // Modify your galleryImages array (fix duplicate IDs first!)
    const galleryImages = [
        { id: 1, width: 1, height: 1, img: g0 },
        { id: 2, width: 1, height: 2, img: g1 },
        { id: 3, width: 2, height: 1, img: g5 },
        { id: 4, width: 1, height: 1, img: g2 },
        { id: 5, width: 1, height: 1, img: g3 },
        { id: 6, width: 1, height: 1, img: g4 },
        { id: 7, width: 1, height: 1, img: g6 },
        { id: 8, width: 1, height: 2, img: g7 },
        { id: 9, width: 2, height: 1, img: g8 },
        { id: 10, width: 1, height: 1, img: g9 },
        { id: 11, width: 1, height: 1, img: g10 },
        { id: 12, width: 1, height: 1, img: g11 },
    ];

    // Update your gallery-grid section


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image and text every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <header className="header">
                <div className="logo"><img src={logo} alt="donwstreetband" /></div>
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
                    <a href="#team" onClick={() => setMenuOpen(false)}>Our Team</a>
                    <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
                </nav>
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </header>
            <section id="home">
                <div className="landing-page">
                    {/* Background Images with fade effect */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="background-image"
                            style={{ backgroundImage: `url(${images[currentIndex]})` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </AnimatePresence>

                    {/* Overlay for better text visibility */}
                    <div className="overlay" />

                    {/* Header with Hamburger Menu */}


                    {/* Band Name and Dynamic Text Animation */}
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 3 }}
                        className="band-name"
                    >
                        <h1>The Down Street Band</h1>
                        <div className="band-name-line"></div>
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {texts[currentIndex]}
                            </motion.h2>
                        </AnimatePresence>
                    </motion.div>

                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="about-us">
                <h2>About Us</h2>
                <div className="title-line"></div>
                <div className="about-content">

                    {/* Image Card with Animation */}
                    <div
                        className="about-image-card"


                    >
                        <div className="image-placeholder">
                            <motion.img
                                src={aboutus}
                                alt="Band Performing"
                                initial={{ x: "50%", opacity: 0 }}
                                whileInView={{ x: "0%", opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />

                        </div>
                    </div>

                    {/* Animated Text */}
                    <motion.div
                        className="about-text"
                        initial={{ x: "50%", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}

                    >
                        <p>
                            The Down Street Band is a group of passionate musicians who bring energy and soul to every performance. With a mix of rock, jazz, and blues, we create unforgettable musical experiences for our audience.
                        </p>
                        <p>
                            Our journey began in small underground gigs, and now we perform at major music festivals, sharing our love for music with the world.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="load-more-button"
                            style={{ marginTop: "30px" }}
                            onClick={() => setShowPopup(true)}
                        >
                            Book Now
                        </motion.button>


                    </motion.div>

                </div>
            </section>
            <section id="team" className="team-section">
                <h2>Our Team</h2>
                <div className="band-name-line"></div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1} // Default for large screens
                    loop={true}
                    speed={2000}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    className="team-slider"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {teamImages.map((img, index) => {
                        const isElevated = index === (activeIndex + 1) % teamImages.length;
                        const artistNames = ["Abhishek Oommen", "Anix Samuel", "Paulwin Seby", "Abhinanth Mohan", "Rahul G Nair", "Sunny Stephan"];
                        const artistRoles = ["Drummer", "Violinist", "Keyboardist", "Singer", "Guitarist", "Guitarist"];
                        const artistInstaLinks = [
                            "https://www.instagram.com/abishekoommen?igsh=eDhmbW9sZnNiMHBr",
                            "https://www.instagram.com/_hoo_lin_?igsh=MWFubTB3bmJybzQ0dQ==",
                            "https://www.instagram.com/paulwin.seby?igsh=MTQ2MmNzc3k5Nzgycw==",
                            "https://www.instagram.com/abhinanthmohan?igsh=MTdoYTB6Mmw5dTloeQ==",
                            "https://www.instagram.com/rahul_g_nair_97?igsh=MWJsOWp1YzBveWc5cw==",
                            "https://www.instagram.com/sunny_the_guitarist?igsh=b3Z6bW90dnF5Y3dl"
                        ];

                        return (
                            <SwiperSlide key={index} style={{ top: "30px" }} className={`team-slide ${isElevated ? "elevated" : ""}`}>
                                <div className="image-container">
                                    <img src={img} alt="Band Performing" />
                                    <div className="image-overlay"></div>
                                    <div className="artist-info">
                                        <div className="artist-name">{artistNames[index]}</div>
                                        <div className="artist-role">
                                            {artistRoles[index]}

                                            <a href={artistInstaLinks[index]} className="social-link">
                                                <svg className="insta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}



                </Swiper>


            </section>
            <section id="gallery" className="gallery-section">
                <div className="container">
                    <div className="gallery-header">
                        <h2 className="gallery-title">GALLERY</h2>
                        <div className="title-line"></div>
                    </div>

                    <div className="gallery-grid">
                        {galleryImages.slice(0, visibleImages).map((image) => (
                            <div
                                key={image.id}
                                className={`gallery-item gallery-item--width-${image.width} gallery-item--height-${image.height}`}
                            >
                                <div className="gallery-item__inner">
                                    <motion.img
                                        src={image.img}
                                        alt={`Gallery ${image.id}`}
                                        initial={{ x: "100%" }}
                                        whileInView={{ x: "0%" }}
                                        transition={{ duration: .5, ease: "easeOut" }}
                                        className="gallery-image"
                                    />

                                    <div className="image-overlay"></div>
                                </div>
                            </div>
                        ))}
                    </div>




                    <div className="load-more-container">
                        {visibleImages < galleryImages.length && (
                            <button
                                className="load-more-button"
                                onClick={() => setVisibleImages(prev => Math.min(prev + 6, galleryImages.length))}
                            >
                                LOAD MORE
                            </button>
                        )}
                    </div>
                </div>
            </section>
            <section id="contact" className="contact-section">
                <div className="contact-overlay">
                    <div className="contact-content">
                        <h2 className="contact-headline">
                            Ready to Bring the Beat to Your Event?
                        </h2>

                        <p className="contact-subtext">
                            Let us transform your stage into an electrifying experience.
                            Whether it's a festival, wedding, or private party - we'll deliver
                            the energy that keeps the crowd moving all night long.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cta-button"
                            onClick={() => setShowPopup(true)} // Replace with your actual click handler
                        >
                            Book Your Musical Experience Now

                        </motion.button>
                    </div>
                </div>
            </section>
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-text"><img src={logo} /></span>
                        </div>
                        <div className="social-icons">
                            <a href="#" className="social-link">
                                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/the_downstreetband?utm_source=qr&igsh=MXc4ZjFvNTRrMzFjeg==" className="social-link">
                                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="social-link">
                                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.4-3.48c-6.627 0-12 5.373-12 12 0 2.52.779 4.86 2.107 6.78L0 24l6.335-1.652a12.001 12.001 0 005.953 1.631h.005c6.627 0 12-5.373 12-12 0-3.188-1.24-6.189-3.495-8.447z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Recent Events</h3>
                        <ul className="events-list">
                            <li className="event-item">
                                <span className="event-date">March 07</span>
                                <span className="event-title">Naipunya Institue of Management and Information Thrissur</span>
                            </li>
                            <li className="event-item">
                                <span className="event-date">March 05</span>
                                <span className="event-title">Chirst College of Engineering Irinjalakkuda</span>
                            </li>
                            <li className="event-item">
                                <span className="event-date">March 01</span>
                                <span className="event-title">Sahrdaya College of Engineering Kodakara</span>
                            </li>


                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Quick Menu</h3>
                        <nav className="footer-nav">
                            <a href="#" className="nav-link">Home</a>
                            <a href="#" className="nav-link">About Us</a>
                            <a href="#" className="nav-link">Our Team</a>
                            <a href="#" className="nav-link">Gallery</a>
                            <a href="#" className="nav-link">Contact</a>
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} The Down Street Band. All rights reserved.</p>


                </div>
            </footer>
            <AnimatePresence>
                {showPopup && <Popup onClose={() => setShowPopup(false)} />}
            </AnimatePresence>
        </div>
    );
}
