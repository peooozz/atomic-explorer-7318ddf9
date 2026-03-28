import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NucleusProps {
  protons: number;
  neutrons: number;
}

function randomSpherePoint(radius: number): [number, number, number] {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = radius * Math.cbrt(Math.random());
  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi),
  ];
}

export function Nucleus({ protons, neutrons }: NucleusProps) {
  const groupRef = useRef<THREE.Group>(null);
  const total = protons + neutrons;
  const nucleusRadius = Math.max(0.2, Math.cbrt(total) * 0.15);

  const particles = useMemo(() => {
    const result: { pos: [number, number, number]; isProton: boolean }[] = [];
    for (let i = 0; i < total; i++) {
      result.push({
        pos: randomSpherePoint(nucleusRadius),
        isProton: i < protons,
      });
    }
    return result;
  }, [protons, neutrons, total, nucleusRadius]);

  const oscillationRef = useRef(0);

  useFrame((state, delta) => {
    oscillationRef.current += delta * 2;
    
    if (groupRef.current) {
      groupRef.current.children.forEach((child, idx) => {
        if (idx < particles.length) {
          const p = particles[idx].pos;
          // Smooth sinus-based micro-oscillation
          const phase = idx * 0.5;
          child.position.set(
            p[0] + Math.sin(oscillationRef.current + phase) * 0.03,
            p[1] + Math.cos(oscillationRef.current + phase) * 0.03,
            p[2] + Math.sin(oscillationRef.current * 0.8 + phase) * 0.03
          );
        }
      });
    }
  });

  const particleSize = Math.max(0.08, 0.15 - total * 0.001);

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[particleSize, 16, 16]} />
          <meshPhysicalMaterial
            color={p.isProton ? "#ff4040" : "#4060ff"}
            emissive={p.isProton ? "#ff2020" : "#2040ff"}
            emissiveIntensity={p.isProton ? 1.5 : 1}
            roughness={0.05}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            reflectivity={1}
            toneMapped={false}
          />
        </mesh>
      ))}
      {/* Central volumetric glow */}
      <mesh>
        <sphereGeometry args={[nucleusRadius * 2, 32, 32]} />
        <meshBasicMaterial color={protons > neutrons ? "#ff4040" : "#40d0e0"} transparent opacity={0.08} blending={THREE.AdditiveBlending} />
      </mesh>
      <pointLight 
        intensity={2} 
        distance={nucleusRadius * 4} 
        color={protons > neutrons ? "#ff4040" : "#40d0e0"} 
        decay={2}
      />
    </group>
  );
}
