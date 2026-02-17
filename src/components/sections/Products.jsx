import { motion } from 'framer-motion';
import Section from '../ui/Section';

const ProductSlide = ({ image }) => (
    <div className="relative w-[240px] md:w-[320px] h-[240px] md:h-[320px] flex-shrink-0 mx-4 md:mx-6 group perspective-1000">
        <div className="w-full h-full p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-500 group-hover:bg-white/10 group-hover:border-accent/40 group-hover:scale-105 shadow-xl">
            <div className="w-full h-full flex items-center justify-center relative z-10">
                <img
                    src={image}
                    alt="Product Dial"
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:rotate-y-12"
                />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>
    </div>
);

const Products = () => {
    // List of uploaded product images
    const productImages = [
        "/images/slide-1.png",
        "/images/slide-2.jpg",
        "/images/slide-3.png",
        "/images/slide-4.png",
        "/images/slide-5.png",
        "/images/dials-1.png",
        "/images/dials-2.png"
    ];

    // List of packing card images
    const packingImages = [
        "/packing-1.jpg",
        "/packing-2.jpg",
        "/packing-3.jpg",
        "/packing-4.jpg"
    ];

    // Duplicate packing images for seamless loop
    const sliderPackingImages = [...packingImages, ...packingImages, ...packingImages, ...packingImages];

    // Duplicate images multiple times to ensure enough content for smooth loop on wide screens
    // and to make the list long enough so the user doesn't see a gap.
    const sliderImages = [...productImages, ...productImages, ...productImages];

    return (
        <Section id="products" className="overflow-hidden">
            <div className="mb-12 text-center">
                <span className="text-accent uppercase tracking-widest text-xs font-bold mb-3 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-bold">Product Showcase</h2>
            </div>

            <div className="relative w-full flex overflow-hidden mask-gradient-x">
                {/* Horizontal Gradient Masks for smooth fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Animated Track */}
                <motion.div
                    className="flex items-center"
                    animate={{ x: ["0%", "-33.33%"] }} // Move by 1/3 since we tripled the list
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    style={{ width: "fit-content" }}
                >
                    {sliderImages.map((img, index) => (
                        <ProductSlide key={`${img}-${index}`} image={img} />
                    ))}
                </motion.div>
            </div>

            {/* Packing Cards Section */}
            <div className="mt-20 mb-8 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">Packing Cards</h3>

                <div className="relative w-full flex overflow-hidden mask-gradient-x">
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex items-center gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                        style={{ width: "fit-content" }}
                    >
                        {sliderPackingImages.map((img, index) => (
                            <div key={`packing-${index}`} className="relative w-[280px] md:w-[350px] flex-shrink-0 group">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-accent/40 shadow-lg">
                                    <img
                                        src={img}
                                        alt={`Packing Card ${index + 1}`}
                                        className="w-full h-auto rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section >
    );
};

export default Products;
