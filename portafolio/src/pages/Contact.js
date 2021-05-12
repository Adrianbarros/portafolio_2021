
import React from 'react';
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop';

const Contact = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
            <ScrollTop />
            <h1>Contact</h1>
        </motion.div>
    )
}

export default Contact;