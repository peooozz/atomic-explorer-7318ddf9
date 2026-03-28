import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text, Billboard, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { Nucleus } from "./Nucleus";
import { ElectronShell } from "./ElectronShell";
import { ElementData, getElectronShells, getNeutrons } from "@/data/elements";
import * as THREE from "three";

interface AtomSceneProps {
  element: ElementData;
  isPlaying: boolean;
}

export function AtomScene({ element, isPlaying }: AtomSceneProps) {
  const shells = getElectronShells(element.number);
  const neutrons = getNeutrons(element);

  return (
    <Canvas
      camera={{ position: [0, 2, 7], fov: 45 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true, logarithmicDepthBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#40d0e0" />
      <pointLight position={[-10, -5, -10]} intensity={1} color="#e05555" />
      <spotLight position={[0, 10, 0]} intensity={2} color="#ffffff" penumbra={1} />

      {/* Ambient Sparkles instead of simple Stars */}
      <Sparkles 
        count={isPlaying ? 100 : 40} 
        scale={20} 
        size={2} 
        speed={0.4} 
        opacity={0.1} 
        color="#40d0e0" 
      />

      <Float speed={isPlaying ? 1.5 : 0.3} rotationIntensity={0.5} floatIntensity={0.5}>
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
      </Float>

      <Billboard position={[0, Math.max(3, shells.length * 1.5), 0]}>
        <Text
          fontSize={1.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
          letterSpacing={0.1}
          material-toneMapped={false}
        >
          {element.name.toUpperCase()}
        </Text>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.4}
          color="#40d0e0"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
          letterSpacing={0.2}
          material-toneMapped={false}
        >
          {`${element.number} P \u2022 ${neutrons} N`}
        </Text>
      </Billboard>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        autoRotate={isPlaying}
        autoRotateSpeed={1.0}
        minDistance={3}
        maxDistance={25}
        makeDefault
      />

      <EffectComposer>
        <Bloom
          luminanceThreshold={1.0}
          luminanceSmoothing={0.1}
          intensity={1.2}
          mipmapBlur
        />
        <ChromaticAberration 
          offset={new THREE.Vector2(0.0005, 0.0005)} 
          radialModulation={false}
          modulationOffset={0}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}
