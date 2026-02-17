import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import AntiGravity from '../ui/AntiGravity';
import WaveLines from '../ui/WaveLines';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center bg-background">
            {/* Full Screen Background Elements */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
            <WaveLines />

            {/* dynamic glow */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-0"
            />

            <Section id="hero" className="relative z-10 justify-center items-center text-center !min-h-0 bg-transparent">
                <div className="flex flex-col items-center gap-6">
                    <AntiGravity yOffset={15} yDuration={8}>
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        >
                            <span className="text-secondary tracking-widest md:tracking-[0.2em] text-[10px] md:text-sm font-medium mb-6 block uppercase border border-white/10 w-fit mx-auto px-4 py-1 rounded-full backdrop-blur-sm bg-white/5">
                                Industrial Printing Solutions Leader in India
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
                                Micro Labels <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-metallic">Pvt Ltd</span>
                            </h1>
                        </motion.div>
                    </AntiGravity>

                    <AntiGravity yOffset={-20} yDuration={10} delay={1}>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="text-lg md:text-2xl text-metallic max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            Leading the automotive industry with absolute precision. <br />
                            From India's hub to the Global Stage.
                        </motion.p>
                    </AntiGravity>
                </div>
            </Section>
        </div>
    );
};

export default Hero;
