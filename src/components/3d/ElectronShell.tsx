import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ElectronShellProps {
  shellIndex: number;
  electronCount: number;
  isPlaying: boolean;
}

export function ElectronShell({ shellIndex, electronCount, isPlaying }: ElectronShellProps) {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 1.2 + shellIndex * 1.1;
  const speed = (1.5 - shellIndex * 0.3) * 0.8;

  const electronRefs = useRef<THREE.Mesh[]>([]);
  const trailRefs = useRef<THREE.Mesh[][]>([]);

  const initialAngles = useMemo(() => {
    return Array.from({ length: electronCount }, (_, i) =>
      (i / electronCount) * Math.PI * 2
    );
  }, [electronCount]);

  // Orbit tilt for visual variety
  const tilt = useMemo(() => {
    const axis = new THREE.Vector3(
      Math.sin(shellIndex * 1.2) * 0.3,
      1,
      Math.cos(shellIndex * 0.8) * 0.3
    ).normalize();
    return new THREE.Quaternion().setFromAxisAngle(
      axis,
      shellIndex * 0.4 + 0.1
    );
  }, [shellIndex]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = isPlaying ? state.clock.elapsedTime : 0;

    electronRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const angle = initialAngles[i] + t * speed;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.15,
        Math.sin(angle) * radius
      );
    });

    // Update trails
    trailRefs.current.forEach((trails, i) => {
      trails?.forEach((trail, ti) => {
        if (!trail) return;
        const trailAngle = initialAngles[i] + (t - (ti + 1) * 0.04) * speed;
        trail.position.set(
          Math.cos(trailAngle) * radius,
          Math.sin(trailAngle) * radius * 0.15,
          Math.sin(trailAngle) * radius
        );
      });
    });
  });

  return (
    <group ref={groupRef} quaternion={tilt}>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
        <meshBasicMaterial
          color="#40d0e0"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Electrons */}
      {initialAngles.map((_, i) => (
        <group key={i}>
          <mesh
            ref={(el) => {
              if (el) electronRefs.current[i] = el;
            }}
          >
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshStandardMaterial
              color="#60f0ff"
              emissive="#60f0ff"
              emissiveIntensity={2}
            />
          </mesh>
          {/* Motion trail */}
          {[0, 1, 2, 3].map((ti) => (
            <mesh
              key={ti}
              ref={(el) => {
                if (el) {
                  if (!trailRefs.current[i]) trailRefs.current[i] = [];
                  trailRefs.current[i][ti] = el;
                }
              }}
            >
              <sphereGeometry args={[0.03 - ti * 0.005, 8, 8]} />
              <meshBasicMaterial
                color="#60f0ff"
                transparent
                opacity={0.4 - ti * 0.1}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}
