import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '../ui/Section';

const advantages = [
    { title: "Quick Product Development", desc: "Rapid prototyping and iteration cycles." },
    { title: "Expert Manufacturing", desc: "State-of-the-art facilities and precision." },
    { title: "Continuous Growth", desc: "Scaling with your business needs." },
    { title: "Automotive Compliance", desc: "Adhering to strict industry standards." },
    { title: "Strong Support", desc: "Dedicated customer service team." },
    { title: "On-Time Delivery", desc: "Reliable logistics and supply chain." },
];

const AdvantageCard = ({ title, desc, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-accent/50 hover:to-accent/10 transition-all duration-500"
        >
            <div className="absolute inset-0 rounded-2xl bg-surface/90 backdrop-blur-xl m-[1px] group-hover:bg-surface/80 transition-all duration-500" />

            <div className="relative p-6 h-full flex flex-col z-10">
                <div className="w-10 h-10 mb-4 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                    <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {desc}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-4 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
        </motion.div>
    )
}

const Advantage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <Section id="advantage" className="relative overflow-hidden">
            {/* Background Elements */}
            <motion.div
                style={{ y }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10"
            />

            <div className="text-center mb-20 max-w-3xl mx-auto" ref={containerRef}>
                <motion.span
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                    className="text-accent uppercase text-sm font-bold block mb-4"
                >
                    Why Us?
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-secondary"
                >
                    Why Choose Micro Labels?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-secondary text-lg"
                >
                    A trusted partner in the automotive supply chain, delivering excellence at every step.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                {advantages.map((adv, i) => (
                    <AdvantageCard key={adv.title} {...adv} index={i} />
                ))}
            </div>
        </Section>
    );
};

export default Advantage;
