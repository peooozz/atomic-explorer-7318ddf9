import { ElementData, getElectronShells, getNeutrons, SHELL_NAMES } from "@/data/elements";
import { Atom, Zap, CircleDot } from "lucide-react";

interface ElementInfoCardProps {
  element: ElementData;
}

export function ElementInfoCard({ element }: ElementInfoCardProps) {
  const shells = getElectronShells(element.number);
  const neutrons = getNeutrons(element);

  return (
    <div className="glass-panel p-4 space-y-4">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center glass-panel px-3 py-2">
          <span className="text-xs text-muted-foreground font-mono">{element.number}</span>
          <span className="text-3xl font-bold text-primary glow-text font-mono">{element.symbol}</span>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-foreground">{element.name}</h2>
          <p className="text-sm text-muted-foreground">Mass: {element.mass} u</p>
        </div>
      </div>

      {/* Particle counts */}
      <div className="grid grid-cols-3 gap-2">
        <div className="glass-panel p-2 text-center">
          <CircleDot className="w-3 h-3 text-proton mx-auto mb-1" />
          <div className="text-lg font-bold text-proton font-mono">{element.number}</div>
          <div className="data-label text-[10px]">Protons</div>
        </div>
        <div className="glass-panel p-2 text-center">
          <Atom className="w-3 h-3 text-neutron mx-auto mb-1" />
          <div className="text-lg font-bold text-neutron font-mono">{neutrons}</div>
          <div className="data-label text-[10px]">Neutrons</div>
        </div>
        <div className="glass-panel p-2 text-center">
          <Zap className="w-3 h-3 text-electron mx-auto mb-1" />
          <div className="text-lg font-bold text-electron font-mono">{element.number}</div>
          <div className="data-label text-[10px]">Electrons</div>
        </div>
      </div>

      {/* Electron config */}
      <div>
        <div className="data-label mb-1">Electron Configuration</div>
        <div className="flex gap-1.5 flex-wrap">
          {shells.map((count, i) => (
            <div key={i} className="glass-panel px-2 py-1 text-center">
              <div className="text-[10px] text-muted-foreground">{SHELL_NAMES[i]}</div>
              <div className="text-sm font-bold text-electron font-mono">{count}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-1 font-mono">
          {shells.join(", ")}
        </p>
      </div>

      {/* Fun fact */}
      <div className="glass-panel p-3">
        <div className="data-label mb-1">Fun Fact</div>
        <p className="text-sm text-foreground/80 leading-relaxed">{element.fact}</p>
      </div>
    </div>
  );
}
