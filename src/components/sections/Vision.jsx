import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import PartnerFormModal from '../ui/PartnerFormModal';

const Footer = () => (
    <footer className="w-full border-t border-white/10 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-bold tracking-tighter text-white">
                Micro Labels Pvt Ltd<span className="text-accent">.</span>
            </div>
            <p className="text-metallic text-sm">© 2026 Micro Labels Pvt Ltd. All rights reserved.</p>
        </div>
    </footer>
)

const Vision = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Section id="vision" className="min-h-[80vh] flex items-center justify-center text-center relative overflow-hidden">
                {/* Background ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse" />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto px-4"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-8 block"
                    >
                        The Future
                    </motion.span>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 leading-[1.1]">
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="block"
                        >
                            Building
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] animate-gradient block"
                        >
                            Tomorrow's Standard.
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-16 leading-relaxed font-light"
                    >
                        Scalable growth. Advanced manufacturing. Long-term partnerships. <br className="hidden md:block" />
                        We are ready for what's next.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-xl"
                        >
                            Partner With Us
                        </motion.button>
                    </motion.div>
                </motion.div>

                <PartnerFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </Section>
            <Footer />
        </>
    );
};

export default Vision;
