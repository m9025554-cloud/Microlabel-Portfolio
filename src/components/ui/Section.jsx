import { motion } from 'framer-motion';
import clsx from 'clsx';

const Section = ({
    children,
    className = "",
    id = "",
    fullHeight = true
}) => {
    return (
        <section
            id={id}
            className={clsx(
                "relative w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden py-16",
                fullHeight && "min-h-screen",
                className
            )}
        >
            {/* Background/Ambient glow specific to sections could go here */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-br from-transparent via-transparent to-background/50" />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;
