import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoVideo from '../../assets/logo-video.mp4';

const FloatingLogo = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show logo when scrolled past the first viewport (approx Home section)
            const showThreshold = window.innerHeight * 0.8;
            setIsVisible(window.scrollY > showThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="hidden lg:block fixed top-8 left-8 z-40 pointer-events-none mix-blend-difference">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -100 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.5, x: -100 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                    >
                        <video
                            src={logoVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-32 h-32 object-contain opacity-90 rounded-full"
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FloatingLogo;
