import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "./Landing";
import "./SplashScreen.css"; // Import the external CSS file

import logo from "../assets/images/logo.png"; // Update with your actual logo path

export default function SplashScreen() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 5000); // Show splash screen for 5 seconds
    }, []);

    return (
        <AnimatePresence mode="wait">
            {showSplash ? (
                <motion.div
                    className="splash-screen"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -100, transition: { duration: 1 } }}
                >
                    <motion.img
                        src={logo}
                        alt="Band Logo"
                        className="splash-logo"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.5 }}
                        transition={{ duration: 5, ease: "easeInOut" }}
                    />
                </motion.div>
            ) : (
                <LandingPage />
            )}
        </AnimatePresence>
    );
}