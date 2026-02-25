import React, { useRef, useEffect } from 'react';
import './SpinningPFP.css';

interface SpinningPFPProps {
    src: string;
    alt?: string;
}

const SpinningPFP: React.FC<SpinningPFPProps> = ({ src, alt = 'avatar' }) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const stateRef = useRef({
        angle: 0,
        velocity: 0,
        lastTime: null as number | null
    });

    useEffect(() => {
        const animate = (time: number) => {
            const state = stateRef.current;

            if (state.lastTime === null) state.lastTime = time;
            const dt = (time - state.lastTime) / 1000;

            if (Math.abs(state.velocity) > 0.001) {
                state.angle += state.velocity * dt;
                state.velocity *= 0.991;

                if (imgRef.current) {
                    imgRef.current.style.transform = `rotate(${state.angle}rad)`;
                }
            }

            state.lastTime = time;
            requestAnimationFrame(animate);
        };

        const frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, []);

    const handleClick = () => {
        stateRef.current.velocity += 15;
    };

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            onClick={handleClick}
            className="spinning-pfp"
        />
    );
};

export default SpinningPFP;
