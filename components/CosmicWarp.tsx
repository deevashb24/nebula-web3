"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

function Stars({ count = 5000 }) {
    const points = useRef<THREE.Points>(null!);

    const [positions, velocities] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 100;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
            vel[i] = Math.random() * 0.5 + 0.1;
        }
        return [pos, vel];
    }, [count]);

    useFrame((state, delta) => {
        const { array } = points.current.geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            array[i * 3 + 2] += velocities[i] * 10; // Speed up
            if (array[i * 3 + 2] > 50) {
                array[i * 3 + 2] = -50;
            }
        }
        points.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                color="#00f2fe"
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

export default function CosmicWarp({ active }: { active: boolean }) {
    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black bg-opacity-90 pointer-events-none"
                >
                    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                        <color attach="background" args={['#000']} />
                        <Stars />
                    </Canvas>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.h2
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                            className="text-4xl font-bold text-primary italic tracking-widest"
                        >
                            WARPING...
                        </motion.h2>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
