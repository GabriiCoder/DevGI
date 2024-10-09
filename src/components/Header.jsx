"use client";
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Header = () => {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <header
      onMouseMove={handleMouseMove}
      className="fixed top-0 left-0 w-full flex items-center justify-center text-center text-white bg-black z-10"
    >
      {/* Canvas de Three.js para las animaciones */}
      <Canvas className="absolute inset-0">
        <AnimatedGeometry mouse={mouse} />
      </Canvas>

      {/* Contenido del Header */}
      <nav className="absolute top-6 z-10">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="text-neon-green hover:text-green-500 transition-colors duration-300 transform hover:scale-110">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-neon-green hover:text-green-500 transition-colors duration-300 transform hover:scale-110">
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-neon-green hover:text-green-500 transition-colors duration-300 transform hover:scale-110">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/technologies" className="text-neon-green hover:text-green-500 transition-colors duration-300 transform hover:scale-110">
              Tecnologías
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Geometría animada
function AnimatedGeometry({ mouse }) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = elapsedTime * 0.1;
      groupRef.current.rotation.y = elapsedTime * 0.2;
      groupRef.current.rotation.z = mouse.current.x * 0.5;

      // Cambiar escala para efecto de rebote
      groupRef.current.scale.set(1 + Math.sin(elapsedTime) * 0.1, 1 + Math.sin(elapsedTime) * 0.1, 1 + Math.sin(elapsedTime) * 0.1);
    }
  });

  const geometry = new THREE.IcosahedronGeometry(1, 0);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

  return (
    <group ref={groupRef} scale={[10, 10, 10]}>
      <mesh geometry={geometry} material={material} />
    </group>
  );
}

export default Header;