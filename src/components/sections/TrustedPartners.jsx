import { motion } from 'framer-motion';
import partnerNS from '../../assets/partner-ns.jpg';
import partnerPricol from '../../assets/partner-pricol.png';
import partnerGreenerg from '../../assets/partner-greenerg.png';
import partnerSuprajit from '../../assets/partner-suprajit.png';
import partnerBR from '../../assets/partner-br.png';
import partnerJoy from '../../assets/partner-joy.png';
import partnerMMTC from '../../assets/partner-mmtc.png';
import partnerGRT from '../../assets/partner-grt.png';
import partnerMalabar from '../../assets/partner-malabar.jpg';

const partners = [
    { name: 'NS Instruments', logo: partnerNS },
    { name: 'Pricol', logo: partnerPricol },
    { name: 'Greenerg', logo: partnerGreenerg },
    { name: 'Suprajit', logo: partnerSuprajit },
    { name: 'Bangalore Refinery', logo: partnerBR },
    { name: 'Joyalukkas', logo: partnerJoy },
    { name: 'MMTC-PAMP', logo: partnerMMTC },
    { name: 'GRT Jewellers', logo: partnerGRT },
    { name: 'Malabar Gold', logo: partnerMalabar },
];

const TrustedPartners = () => {
    // Duplicate the partners array for seamless looping
    const doubledPartners = [...partners, ...partners];

    return (
        <section className="py-24 bg-gradient-to-b from-background via-surface/20 to-background overflow-hidden relative">
            <div className="w-full relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 px-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block"
                    >
                        <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                            Our Partners
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent">
                            Trusted By Industry Leaders
                        </h2>
                    </motion.div>
                </motion.div>

                {/* Sliding Marquee Container */}
                <div className="relative flex overflow-hidden">
                    <motion.div
                        className="flex py-12 whitespace-nowrap"
                        animate={{
                            x: [0, "-50%"]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30, // Slow sliding speed
                                ease: "linear",
                            },
                        }}
                    >
                        {doubledPartners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex-shrink-0 mx-8 md:mx-12"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative"
                                >
                                    {/* Card */}
                                    <div className="relative bg-surface/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-24 md:h-32 w-48 md:w-64 flex items-center justify-center transition-all duration-500 hover:bg-surface/60 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-[80%] max-h-[80%] object-contain transition-all duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Company Name - Always Visible */}
                                    <div className="absolute -bottom-10 left-0 right-0 text-center">
                                        <span className="text-[10px] md:text-[11px] text-metallic tracking-[0.2em] font-medium uppercase opacity-80 group-hover:text-accent group-hover:opacity-100 transition-all duration-300">
                                            {partner.name}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto max-w-5xl"
                />
            </div>
        </section>
    );
};

export default TrustedPartners;
