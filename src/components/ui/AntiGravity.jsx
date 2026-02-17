import { motion } from 'framer-motion';

const AntiGravity = ({
    children,
    yDuration = 6,
    yOffset = 20,
    delay = 0,
    className = ""
}) => {
    return (
        <motion.div
            className={className}
            animate={{
                y: [-yOffset, yOffset, -yOffset],
            }}
            transition={{
                duration: yDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
};

export default AntiGravity;
