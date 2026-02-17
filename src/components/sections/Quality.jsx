import { motion } from 'framer-motion';
import Section from '../ui/Section';
import certIATF from '../../assets/cert-iatf.jpg';
import certISO from '../../assets/cert-iso.png';

const CertificationCard = ({ title, subtitle, icon, delay }) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="group relative bg-surface/50 border border-white/5 p-8 rounded-2xl hover:bg-surface/80 transition-colors duration-500 overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-accent">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
            <p className="text-secondary text-sm leading-relaxed">{subtitle}</p>
        </div>
    </motion.div>
);

const Quality = () => {
    return (
        <Section id="quality">
            <div className="text-center mb-16 max-w-4xl mx-auto relative">
                <div className="absolute inset-0 bg-accent/5 blur-3xl -z-10 rounded-full animate-pulse" />
                <span className="text-accent uppercase tracking-widest text-xs font-bold mb-3 block">Certified Excellence</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">World-Class Quality Standards</h2>
                <div className="flex justify-center items-center gap-4 mb-6">
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-secondary text-sm font-mono backdrop-blur-sm">
                        IATF 16949 : 2016
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-secondary text-sm font-mono backdrop-blur-sm">
                        ISO 9001 : 2015
                    </span>
                </div>
                <p className="text-secondary text-lg">
                    Comprehensive Quality Management System ensuring accurate and on-time delivery and international safety benchmarks.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
                {/* IATF Certificate */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-surface/50 border border-white/10 p-6 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 flex flex-col items-center text-center">
                        <div className="w-32 h-40 overflow-hidden rounded-lg mb-4 shadow-lg shadow-black/50">
                            <img
                                src={certIATF}
                                alt="IATF 16949:2016 Certificate"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">IATF 16949 : 2016</h3>
                        <p className="text-secondary text-xs">Automotive Quality Management</p>
                    </div>
                </motion.div>

                {/* ISO Certificate */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-surface/50 border border-white/10 p-6 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 flex flex-col items-center text-center">
                        <div className="w-32 h-40 overflow-hidden rounded-lg mb-4 flex items-center justify-center bg-white/5 shadow-lg shadow-black/50">
                            <img
                                src={certISO}
                                alt="ISO 9001:2015 Certificate"
                                className="w-28 h-28 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">ISO 9001 : 2015</h3>
                        <p className="text-secondary text-xs">Quality Management System</p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Quality;
