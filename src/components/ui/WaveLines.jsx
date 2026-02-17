import { useRef, useEffect } from 'react';

const WaveLines = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;
        let t = 0;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const drawWave = (yOffset, amplitude, period, speed, color, thickness) => {
            ctx.beginPath();
            ctx.lineWidth = thickness;
            ctx.strokeStyle = color;

            for (let x = 0; x <= width; x += 5) {
                // Calculate y using sine wave formula: y = A * sin(kx + wt)
                // A = amplitude, k = period (frequency), w = angular frequency (speed), t = time

                // We mix two sine waves for more "organic" feel
                const y = yOffset +
                    Math.sin((x * period) + (t * speed)) * amplitude +
                    Math.sin((x * period * 0.5) + (t * speed * 0.5)) * (amplitude * 0.5);

                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Time step
            t += 0.02;

            // Draw multiple waves
            // Center High-Energy White Wave
            drawWave(height * 0.5, 40, 0.003, 2, 'rgba(255, 255, 255, 0.15)', 2);

            // Offset Cyan Waves
            drawWave(height * 0.55, 50, 0.002, 1.5, 'rgba(59, 130, 246, 0.2)', 1.5); // Accenty Blue

            // Smoother Background Waves
            drawWave(height * 0.45, 60, 0.004, 1.2, 'rgba(255, 255, 255, 0.05)', 1);
            drawWave(height * 0.6, 30, 0.005, 2.5, 'rgba(59, 130, 246, 0.1)', 1);

            // Large flowing curve
            drawWave(height * 0.5, 100, 0.001, 0.5, 'rgba(255, 255, 255, 0.03)', 30); // Thick faint glow

            animationFrameId = window.requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default WaveLines;
