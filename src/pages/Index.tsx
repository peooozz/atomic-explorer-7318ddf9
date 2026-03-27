import { useState } from "react";
import { AtomScene } from "@/components/3d/AtomScene";
import { PeriodicTable } from "@/components/PeriodicTable";
import { ElementInfoCard } from "@/components/ElementInfoCard";
import { ELEMENTS } from "@/data/elements";
import { Play, Pause, RotateCcw, Info, Table2, ChevronDown, ChevronUp } from "lucide-react";

const Index = () => {
  const [selected, setSelected] = useState(ELEMENTS[5]); // Carbon
  const [isPlaying, setIsPlaying] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showTable, setShowTable] = useState(true);

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
            <p className="text-xs text-muted-foreground">
              {selected.symbol} — {selected.name} (Z={selected.number})
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className={`glass-panel p-2 transition-colors ${showInfo ? "bg-primary/15 border-primary/40" : "hover:bg-primary/10"}`}
              title={showInfo ? "Hide Info" : "Show Info"}
            >
              <Info className="w-4 h-4 text-primary" />
            </button>
            <button
              onClick={() => setShowTable(!showTable)}
              className={`glass-panel p-2 transition-colors ${showTable ? "bg-primary/15 border-primary/40" : "hover:bg-primary/10"}`}
              title={showTable ? "Hide Table" : "Show Table"}
            >
              <Table2 className="w-4 h-4 text-primary" />
            </button>
            <div className="w-px bg-border" />
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
          {showInfo && (
            <div className="w-72 flex-shrink-0 max-h-[60vh] overflow-y-auto">
              <ElementInfoCard element={selected} />
            </div>
          )}

          {/* Periodic table */}
          {showTable && (
            <div className="flex-1 max-w-3xl">
              <PeriodicTable selected={selected} onSelect={setSelected} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
