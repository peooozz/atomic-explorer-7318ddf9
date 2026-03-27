import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Nucleus } from "./Nucleus";
import { ElectronShell } from "./ElectronShell";
import { ElementData, getElectronShells, getNeutrons } from "@/data/elements";

interface AtomSceneProps {
  element: ElementData;
  isPlaying: boolean;
}

export function AtomScene({ element, isPlaying }: AtomSceneProps) {
  const shells = getElectronShells(element.number);
  const neutrons = getNeutrons(element);

  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#080c18"]} />
      <Stars radius={50} depth={60} count={2000} factor={3} fade speed={0.5} />

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#60f0ff" />
      <pointLight position={[-5, -3, -5]} intensity={0.5} color="#e05555" />

      <group key={element.number}>
        <Nucleus protons={element.number} neutrons={neutrons} />
        {shells.map((count, i) => (
          <ElectronShell
            key={`${element.number}-${i}`}
            shellIndex={i}
            electronCount={count}
            isPlaying={isPlaying}
          />
        ))}
      </group>

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        autoRotate={isPlaying}
        autoRotateSpeed={0.5}
        minDistance={2}
        maxDistance={15}
      />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={1.5}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
