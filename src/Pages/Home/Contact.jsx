import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_swihvjp', 'template_f8udk3t', form.current, 'LPQyFuunl5HdKET4r')
            .then((result) => {
                toast.success('Message sent successfully!');
                form.current.reset(); // Clear the input fields
                setFeedbackMessage('Message sent successfully!');
                console.log(result.text);
            }, (error) => {
                toast.error('Failed to send message: ' + error.text);
                setFeedbackMessage('Failed to send message. Please try again later.');
                console.log(error.text);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section className="flex flex-col items-center justify-center p-8 bg-gray-900 sm:mt-10 mt-[0%]">
            <motion.form 
                ref={form}
                onSubmit={sendEmail}
                className="z-10 backdrop-blur-lg bg-white/10 p-8 rounded-lg shadow-lg max-w-md w-full"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.5 }} 
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-white mb-6"
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-center text-white mb-8"
                >
                    We would love to hear from you! Fill out the form below.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="mb-4 p-2 border rounded bg-transparent text-white border-gray-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="mb-4 p-2 border rounded bg-transparent text-white border-gray-500"
                        required
                    />
                    <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        className="mb-4 p-2 border rounded bg-transparent text-white border-gray-500"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className={`cssbuttons-io text-black py-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                        
                    >
                        <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                    </button>
                    {feedbackMessage && (
                        <p className="mt-4 text-center text-green-500">{feedbackMessage}</p>
                    )}
                </motion.div>
                <ToastContainer />
            </motion.form>
            <div className="mt-10 w-full max-w-5xl">
    <div className="bg-white rounded-lg shadow-lg p-4"> {/* Increased padding and shadow for more prominence */}
        <motion.iframe
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            src="https://maps.google.com/maps?width=100%&height=300&hl=en&q=49/1,%20Dr%20Subbarayan%20Rd,%20I%20Agraharam,%20Salem,%20Tamil%20Nadu%20636001,%20India+(KN%20GLOBAL%20INFOTECH)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="rounded-lg shadow-md transition-transform transform hover:scale-105" // Added hover effect for brightness
        ></motion.iframe>
    </div>
</div>

        </section>
    );
};

export default Contact;
