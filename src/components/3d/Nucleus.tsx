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
  const nucleusRadius = Math.max(0.3, Math.cbrt(total) * 0.25);

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

  const jitterOffsets = useRef<Float32Array>(new Float32Array(total * 3));

  useFrame((_, delta) => {
    const arr = jitterOffsets.current;
    for (let i = 0; i < total * 3; i++) {
      arr[i] += (Math.random() - 0.5) * delta * 2;
      arr[i] *= 0.95;
    }
    if (groupRef.current) {
      groupRef.current.children.forEach((child, idx) => {
        if (idx < particles.length) {
          const p = particles[idx].pos;
          child.position.set(
            p[0] + arr[idx * 3],
            p[1] + arr[idx * 3 + 1],
            p[2] + arr[idx * 3 + 2]
          );
        }
      });
    }
  });

  const particleSize = Math.max(0.06, 0.15 - total * 0.002);

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[particleSize, 16, 16]} />
          <meshStandardMaterial
            color={p.isProton ? "#e05555" : "#5580e0"}
            emissive={p.isProton ? "#e05555" : "#5580e0"}
            emissiveIntensity={0.8}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
      ))}
      {/* Central glow */}
      <mesh>
        <sphereGeometry args={[nucleusRadius * 1.2, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}
