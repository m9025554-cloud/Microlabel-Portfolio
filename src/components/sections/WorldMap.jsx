import { motion } from 'framer-motion';

const WorldMap = () => {
    // Locations adjusted for the provided reference image (Approximate Mercator projection)
    const locations = [
        { name: "Bengaluru (HQ)", x: 685, y: 285, type: "hub", labelPos: "bottom" },
        { name: "UK", x: 495, y: 155, type: "client", labelPos: "top" },
        { name: "Egypt", x: 550, y: 225, type: "client", labelPos: "-left-4" }, // Left alignment
        { name: "Middle East", x: 610, y: 240, type: "client", labelPos: "-right-4" }, // Right alignment
        { name: "South Korea", x: 840, y: 195, type: "client", labelPos: "top" }
    ];

    const hub = locations.find(l => l.type === "hub");

    const getLabelPosition = (pos) => {
        switch (pos) {
            case 'bottom': return 'top-full mt-2';
            case '-left-4': return 'right-full mr-3'; // Label to the left
            case '-right-4': return 'left-full ml-3'; // Label to the right
            default: return 'bottom-full mb-2'; // Top default
        }
    };

    return (
        <div className="relative w-full aspect-[4/3] md:aspect-[2/1] bg-blue-900/10 rounded-xl overflow-hidden border border-white/5 shadow-2xl backdrop-blur-sm group">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Simulated Digital Map - The 'Jumping' Animation Effect */}
            <div className="absolute inset-0 opacity-20">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white/10 rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 50 + 20,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Radar Scan Effect */}
            <motion.div
                animate={{ left: ["-10%", "110%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-64 bg-gradient-to-r from-transparent via-accent/5 to-transparent z-10 pointer-events-none"
            />

            {/* Arcs Layer */}
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none z-20">
                {locations.filter(l => l.type !== 'hub').map((loc, i) => (
                    <g key={loc.name}>
                        <motion.path
                            d={`M${hub.x},${hub.y} Q${(hub.x + loc.x) / 2},${Math.min(hub.y, loc.y) - 80} ${loc.x},${loc.y}`}
                            fill="none"
                            stroke="url(#gradientStroke)"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.8 }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                        />
                    </g>
                ))}
                <defs>
                    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Markers & Labels */}
            {locations.map((loc, i) => (
                <div
                    key={loc.name}
                    className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 z-30"
                    style={{ left: `${(loc.x / 1000) * 100}%`, top: `${(loc.y / 500) * 100}%` }}
                >
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + (i * 0.1) }}
                        className={`absolute whitespace-nowrap text-[10px] md:text-[12px] font-bold tracking-wider uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ${loc.type === 'hub' ? 'text-accent' : 'text-white'} ${getLabelPosition(loc.labelPos)}`}
                    >
                        {loc.name}
                    </motion.div>

                    {/* Marker Dot */}
                    <div className="relative">
                        <div className={`absolute -inset-2 rounded-full ${loc.type === 'hub' ? 'bg-accent/40' : 'bg-cyan-400/30'} animate-ping`} />
                        <div className={`relative w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${loc.type === 'hub' ? 'bg-accent shadow-[0_0_15px_#3b82f6]' : 'bg-cyan-200 shadow-[0_0_10px_cyan]'}`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorldMap;
