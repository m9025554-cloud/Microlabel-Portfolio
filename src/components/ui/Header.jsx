import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Global', href: '#global' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Expertise', href: '#products' },
    { name: 'Contact', href: '#vision' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={`pointer-events-auto transition-all duration-300 backdrop-blur-md border rounded-full px-8 py-3 flex items-center gap-8 ${scrolled
                    ? 'bg-surface/80 border-white/10 shadow-lg'
                    : 'bg-transparent border-transparent'
                    }`}
            >
                <div className="flex items-center gap-3">
                    <div className="lg:hidden w-8 h-8 rounded-full overflow-hidden">
                        <video src="/src/assets/logo-video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xl font-bold tracking-tighter text-white">
                        Micro Labels Pvt Ltd<span className="text-accent">.</span>
                    </div>
                </div>

                <ul className="hidden md:flex gap-6 text-sm font-medium text-secondary">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="hover:text-white transition-colors duration-200"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </header>
    );
};

export default Header;
