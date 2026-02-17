import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';

const TimelineNode = ({ index, title, subtitle, year, align }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-20%" }} // Re-triggers when scrolling back
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative flex items-center justify-between w-full mb-24 ${align === 'right' ? 'flex-row-reverse' : ''}`}
        >
            {/* Content Card */}
            <div className={`w-[45%] ${align === 'right' ? 'text-left' : 'text-right'}`}>
                <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors duration-500 group">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl font-black text-accent absolute -top-4 select-none font-heading drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                    >
                        {year}
                    </motion.span>
                    <h3 className="text-2xl font-bold text-primary mb-2 relative z-10">{title}</h3>
                    <p className="text-secondary font-light relative z-10">{subtitle}</p>

                    {/* Connector Line */}
                    <div className={`absolute top-1/2 ${align === 'right' ? '-left-12' : '-right-12'} w-12 h-[1px] bg-accent/30`} />
                    <div className={`absolute top-1/2 ${align === 'right' ? '-left-1' : '-right-1'} w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]`} />
                </div>
            </div>

            {/* Center Spacer for Line */}
            <div className="w-[10%]" />

            {/* Empty space for opposite side */}
            <div className="w-[45%]" />
        </motion.div>
    );
};

const Overview = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <Section id="overview" ref={containerRef} className="relative">
            <div className="text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-accent uppercase tracking-widest text-xs font-bold mb-3 block">Milestones</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Growth Journey</h2>
                </motion.div>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Central Laser Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        style={{ height: lineHeight }}
                        className="w-full bg-accent shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                    />
                </div>

                <div className="relative z-10 pt-12">
                    <TimelineNode
                        year="2011"
                        title="Established"
                        subtitle="Impactful beginnings with a core team of 3 visionaries."
                        align="left"
                        index={0}
                    />
                    <TimelineNode
                        year="NOW"
                        title="120+ Team Members"
                        subtitle="A strong team delivering excellent work across all departments."
                        align="right"
                        index={1}
                    />
                    <TimelineNode
                        year="Global"
                        title="Satisfied Customers"
                        subtitle="Trusted by leading automotive brands and Printing Packing cards from globally for On time delivery with accurate quality"
                        align="left"
                        index={2}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Overview;
