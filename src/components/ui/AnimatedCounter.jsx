import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 70,
    });
    // Remove "once: true" so it updates every time the element enters/leaves view
    const isInView = useInView(ref, { margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        } else {
            // Reset to 0 when scrolling away
            motionValue.set(0);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
};

export default AnimatedCounter;
