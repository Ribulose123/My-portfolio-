import React, { useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import EarthCanvas from './canvas/Earth';
import StarsCanvas from './canvas/Stars';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        emailjs.send(
            'service_u9m8khn',
            'template_s8kprq2',
            {
                from_name: form.name,
                to_name: 'Okposio Kparobor',
                from_email: form.email,
                to_email: 'okposiokparobor@gmail.com',
                message: form.message,
            },
            '42APSZCXEwn47IBRl'
        )
        .then(() => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({
                name: '',
                email: '',
                message: '',
            });
        }, (error) => {
            setLoading(false);
            console.error(error);
            alert('Something went wrong. Please try again.');
        });
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0618] to-[#1a1038]" id='contact'>
            {/* Stars Background */}
            <StarsCanvas />
            
            {/* Content */}
            <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto flex xl:flex-row flex-col-reverse gap-10"
                >
                    <motion.div
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="flex-1 p-8 rounded-2xl bg-[#151030]/90 backdrop-blur-sm border border-[#2a2252] shadow-xl"
                    >
                        <p className="text-[#a78bfa] text-lg font-medium">Get in touch</p>
                        <motion.h3 
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white font-black text-4xl mb-6 mt-2"
                        >
                            Contact.
                        </motion.h3>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="mt-12 flex flex-col gap-8"
                        >
                            <motion.label 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col"
                            >
                                <span className="text-white font-medium mb-4">Your Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="bg-[#1e183f] py-4 px-6 placeholder:text-[#a78bfa]/70 text-white rounded-lg outline-none border border-[#2a2252] font-medium hover:ring-2 hover:ring-[#7e5bef]/50 focus:ring-2 focus:ring-[#7e5bef] transition-all duration-300"
                                    required
                                />
                            </motion.label>
                            
                            <motion.label 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col"
                            >
                                <span className="text-white font-medium mb-4">Your email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What's your web address"
                                    className="bg-[#1e183f] py-4 px-6 placeholder:text-[#a78bfa]/70 text-white rounded-lg outline-none border border-[#2a2252] font-medium hover:ring-2 hover:ring-[#7e5bef]/50 focus:ring-2 focus:ring-[#7e5bef] transition-all duration-300"
                                    required
                                />
                            </motion.label>
                            
                            <motion.label 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col"
                            >
                                <span className="text-white font-medium mb-4">Your Message</span>
                                <textarea
                                    rows={7}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What you want to say?"
                                    className="bg-[#1e183f] py-4 px-6 placeholder:text-[#a78bfa]/70 text-white rounded-lg outline-none border border-[#2a2252] font-medium hover:ring-2 hover:ring-[#7e5bef]/50 focus:ring-2 focus:ring-[#7e5bef] transition-all duration-300"
                                    required
                                />
                            </motion.label>

                            <motion.button
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="bg-gradient-to-r from-[#7e5bef] to-[#a78bfa] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-[#7e5bef]/30 hover:shadow-[#7e5bef]/50 transition-all duration-300 disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <motion.span 
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                            className="inline-block"
                                        >
                                            ↻
                                        </motion.span>
                                        Sending...
                                    </span>
                                ) : (
                                    <span>Send</span>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                    
                    <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative z-10">
                        <EarthCanvas/>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;