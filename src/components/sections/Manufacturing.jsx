import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import AnimatedCounter from '../ui/AnimatedCounter';

const StatItem = ({ number, label, icon, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay }}
            className="flex gap-4 md:gap-6 items-start"
        >
            {/* Icon */}
            <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: delay + 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent border border-accent/20 backdrop-blur-sm hover:bg-accent/20 hover:border-accent/40 transition-colors duration-300"
            >
                {icon}
            </motion.div>

            {/* Content */}
            <div className="flex flex-col gap-1 md:gap-2 flex-1 min-w-0">
                <h3 className="text-4xl sm:text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter tabular-nums break-words">
                    {number}
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-primary">{label}</h4>
                <p className="text-secondary text-sm md:text-base max-w-xs">{description}</p>
            </div>
        </motion.div>
    )
}

const Manufacturing = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <Section id="manufacturing" ref={ref}>
            <motion.div
                style={{ scale, opacity }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
                <div>
                    <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
                        Scale & Capacity
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
                        Manufacturing <br /> Strength
                    </h2>
                    <p className="text-lg text-secondary/80 leading-relaxed mb-8">
                        Our state-of-the-art facility in Bengaluru is equipped to handle massive volumes while maintaining automotive-grade precision. We are scaling up to meet the future.
                    </p>
                </div>

                <div className="grid gap-12">
                    <StatItem
                        number={<AnimatedCounter value={7000000} suffix="+" />}
                        label="Annual Production"
                        delay={0}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                <polyline points="16 7 22 7 22 13" />
                            </svg>
                        }
                        description="Printed dials & packing cards delivered every year with accurate delivery."
                    />
                    <div className="w-full h-[1px] bg-white/10" />
                    <StatItem
                        number={<AnimatedCounter value={21000} suffix="" />}
                        label="Sq. Ft. Facility"
                        delay={0.15}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                                <path d="M10 6h4" />
                                <path d="M10 10h4" />
                                <path d="M10 14h4" />
                                <path d="M10 18h4" />
                            </svg>
                        }
                        description="Current manufacturing footprint in Bengaluru, India."
                    />
                    <div className="w-full h-[1px] bg-white/10" />
                    <StatItem
                        number={<AnimatedCounter value={50000} suffix="" />}
                        label="Planned Expansion"
                        delay={0.3}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 3v18h18" />
                                <path d="m19 9-5 5-4-4-3 3" />
                            </svg>
                        }
                        description="Expanding largely within 1 year to accommodate growing global demand."
                    />
                </div>
            </motion.div>
        </Section>
    );
};

export default Manufacturing;
