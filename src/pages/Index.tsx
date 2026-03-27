import { useState } from "react";
import { AtomScene } from "@/components/3d/AtomScene";
import { PeriodicTable } from "@/components/PeriodicTable";
import { ElementInfoCard } from "@/components/ElementInfoCard";
import { ELEMENTS } from "@/data/elements";
import { Play, Pause, RotateCcw } from "lucide-react";

const Index = () => {
  const [selected, setSelected] = useState(ELEMENTS[5]); // Carbon
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden relative">
      {/* 3D Canvas - full background */}
      <div className="absolute inset-0">
        <AtomScene element={selected} isPlaying={isPlaying} />
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        {/* Top bar */}
        <header className="flex items-center justify-between p-4 pointer-events-auto">
          <div>
            <h1 className="text-lg font-bold text-foreground glow-text font-display">
              Atomic Structure Lab
            </h1>
            <p className="text-xs text-muted-foreground">Interactive 3D Simulation</p>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="glass-panel p-2 hover:bg-primary/10 transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-primary" />
              ) : (
                <Play className="w-4 h-4 text-primary" />
              )}
            </button>
            <button
              onClick={() => setSelected(ELEMENTS[5])}
              className="glass-panel p-2 hover:bg-primary/10 transition-colors"
              title="Reset to Carbon"
            >
              <RotateCcw className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </header>

        {/* Main content area */}
        <div className="flex-1" />

        {/* Bottom panel */}
        <div className="p-4 flex gap-4 items-end pointer-events-auto">
          {/* Info card */}
          <div className="w-72 flex-shrink-0">
            <ElementInfoCard element={selected} />
          </div>

          {/* Periodic table */}
          <div className="flex-1 max-w-2xl">
            <PeriodicTable selected={selected} onSelect={setSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
