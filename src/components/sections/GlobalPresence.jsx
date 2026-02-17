import { motion } from 'framer-motion';
import Section from '../ui/Section';
import WorldMap from './WorldMap';

const GlobalPresence = () => {
    return (
        <Section id="global" className="bg-surface/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-accent tracking-widest uppercase text-sm font-semibold mb-2 block">Global Reach</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">International <br /> Presence.</h2>
                    <p className="text-secondary text-lg leading-relaxed max-w-md">
                        Exports to Middle East countries, Egypt, the UK, and South Korea.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded border border-white/5">
                            <h4 className="text-2xl font-bold text-white">20+</h4>
                            <p className="text-sm text-secondary">Countries Served</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded border border-white/5">
                            <h4 className="text-2xl font-bold text-white">HQ</h4>
                            <p className="text-sm text-secondary">Bengaluru, India</p>
                        </div>
                    </div>
                </motion.div>

                <WorldMap />

            </div>
        </Section>
    );
};

export default GlobalPresence;
