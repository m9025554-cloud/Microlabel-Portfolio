import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Assurance = () => {
    return (
        <Section id="assurance" className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="grid grid-cols-1 gap-6">
                    {/* First Image - Close-up inspection */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden bg-surface border border-white/5 group"
                    >
                        <img
                            src="/inspection-1.png"
                            alt="Advanced Inspection Technology - Close-up"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="bg-accent text-white text-xs px-3 py-1.5 rounded-full">Precision Measurement</span>
                        </div>
                    </motion.div>

                    {/* Second Image - Full system */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative rounded-2xl overflow-hidden bg-surface border border-white/5 group"
                    >
                        <img
                            src="/inspection-2.png"
                            alt="Advanced Inspection Technology - Full System"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="bg-accent text-white text-xs px-3 py-1.5 rounded-full">VMS Technology</span>
                        </div>
                    </motion.div>
                </div>

                <div>
                    <span className="text-accent uppercase tracking-widest text-xs font-bold mb-3 block">Zero Defect Policy</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Advanced Inspection Technology</h2>
                    <p className="text-secondary text-lg mb-6 leading-relaxed">
                        Precision is not just a promise; it's a measurable standard. We employ cutting-edge Value Measurement Systems (VMS) to ensure every micron meets speculation.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-accent mt-1">▹</span>
                            <span className="text-primary">Automated Vision Inspection</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-accent mt-1">▹</span>
                            <span className="text-primary">Defect Prevention Protocols</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-accent mt-1">▹</span>
                            <span className="text-primary">Real-time Quality Monitoring</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default Assurance;
