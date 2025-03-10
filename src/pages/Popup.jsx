import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './Popup.css'
// Add this component inside your LandingPage component
const Popup = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        location: "",
        details: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `New Booking Enquiry from :%0aName: ${formData.name}%0aDate: ${formData.date}%0aTime: ${formData.time}%0aLocation: ${formData.location}%0aDetails: ${formData.details}`;
        window.open(`https://wa.me/7592830212?text=${message}`, "_blank");
        onClose();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="popup-overlay"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="popup-close" onClick={onClose}>
                    &times;
                </button>

                <h2 className="popup-h2">Book Our Gig</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date:</label>
                        <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Time:</label>
                        <input
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Program Details:</label>
                        <textarea
                            name="details"
                            required
                            value={formData.details}
                            onChange={handleChange}
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="book-now-button"
                    >
                        Book Now
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};
export default Popup;