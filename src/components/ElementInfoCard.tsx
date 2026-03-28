import { useState } from "react";
import { ElementData, getElectronShells, getNeutrons, SHELL_NAMES } from "@/data/elements";
import { Atom, Zap, CircleDot, Database, Orbit, Flame, Network, FlaskConical, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ElementInfoCardProps {
  element: ElementData;
}

type TabType = "atomic" | "theory" | "properties";

export function ElementInfoCard({ element }: ElementInfoCardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("atomic");
  const shells = getElectronShells(element.number);
  const neutrons = getNeutrons(element);

  // Max value for progress bars (Oganesson is 118)
  const maxParticles = 118;
  const maxNeutrons = 176;

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: "atomic", label: "Atomic", icon: Zap },
    { id: "theory", label: "Physics", icon: GraduationCap },
    { id: "properties", label: "Properties", icon: FlaskConical },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={element.number}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="flex flex-col gap-5"
      >
        {/* Header section */}
        <div className="glass-panel p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-primary/30 bg-primary/10 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] min-w-[70px]">
              <span className="text-xs text-primary/70 font-mono mb-1">{element.number}</span>
              <span className="text-4xl font-bold text-primary glow-text font-display leading-none">{element.symbol}</span>
            </div>
            <div className="flex-1 mt-1">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">{element.name}</h2>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                {element.category.replace("-", " ")}
              </p>
            </div>
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex gap-1 p-1 bg-glass/20 backdrop-blur-md rounded-xl border border-glass-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-[10px] uppercase tracking-tighter transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg shadow-primary/20 font-bold"
                  : "text-muted-foreground hover:bg-glass/40 hover:text-foreground"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "atomic" && (
              <motion.div
                key="atomic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {/* Nucleus Info */}
                <div className="glass-panel p-5 space-y-4 border-l-2 border-l-primary/30">
                  <div className="flex items-center gap-2 border-b border-glass-border pb-2">
                    <Orbit className="w-4 h-4 text-primary" />
                    <span className="data-label text-primary">Internal Structure</span>
                  </div>

                  {/* Protons Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-1.5 text-proton">
                        <CircleDot className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold uppercase">Protons (Z)</span>
                      </div>
                      <span className="text-lg font-mono font-bold text-proton glow-text-secondary">{element.number}</span>
                    </div>
                    <div className="h-1.5 w-full bg-glass-border/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-proton rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(element.number / maxParticles) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Neutrons Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-1.5 text-neutron">
                        <Atom className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold uppercase">Neutrons (N)</span>
                      </div>
                      <span className="text-lg font-mono font-bold text-neutron glow-text-secondary">{neutrons}</span>
                    </div>
                    <div className="h-1.5 w-full bg-glass-border/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-neutron rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(neutrons / maxNeutrons) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-5">
                  <div className="flex items-center justify-between border-b border-glass-border pb-2 mb-4 text-electron">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span className="data-label">Shell Configuration</span>
                    </div>
                    <span className="text-[10px] font-mono bg-electron/10 px-2 py-0.5 rounded border border-electron/20">
                      {shells.join(" • ")}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {shells.map((count, i) => (
                      <div key={i} className="flex flex-col items-center justify-center p-2 rounded-lg bg-glass/20 border border-electron/10">
                        <span className="text-[10px] text-muted-foreground uppercase">{SHELL_NAMES[i]}</span>
                        <span className="text-base font-bold text-foreground font-mono">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "theory" && (
              <motion.div
                key="theory"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="glass-panel p-5 relative overflow-hidden">
                  <div className="data-label text-primary mb-2 flex items-center gap-2 border-b border-glass-border pb-2">
                    <GraduationCap className="w-4 h-4" /> Quantum Mechanics
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground font-mono mt-3 text-justify">
                    As an atom of <span className="text-primary font-bold">{element.name}</span>, its behavior is strictly governed by the Schrödinger wave equation. With an atomic mass of <span className="text-foreground font-bold">{element.mass.toFixed(3)} u</span>, the central nucleus relies on the <span className="text-neutron italic">Strong Nuclear Force</span> to bind {element.number} protons against electrostatic repulsion. The {element.number} electrons occupy quantized orbitals, satisfying the <span className="text-electron italic">Pauli Exclusion Principle</span>.
                  </p>
                </div>
                
                <div className="glass-panel p-5 bg-primary/5">
                  <div className="data-label text-primary mb-3 text-[10px]">Nuclear Metadata</div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[11px] font-mono border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">Stability Factor</span>
                      <span className="text-neutron">{(neutrons / element.number).toFixed(2)} N/Z</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-mono border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">Nuclear Volume</span>
                      <span className="text-foreground">~{ (1.2 * Math.pow(element.mass, 1/3)).toFixed(2) } fm</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-muted-foreground">Binding Energy</span>
                      <span className="text-proton">High Core Density</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "properties" && (
              <motion.div
                key="properties"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="glass-panel p-5 border-l-2 border-l-accent">
                  <div className="data-label text-accent mb-3 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4" /> Professional Profile
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-2 border border-glass-border rounded bg-glass/10">
                      <span className="text-[9px] text-muted-foreground uppercase block mb-1">State</span>
                      <span className="text-xs font-bold font-mono">Solid @ STP</span>
                    </div>
                    <div className="p-2 border border-glass-border rounded bg-glass/10">
                      <span className="text-[9px] text-muted-foreground uppercase block mb-1">Valence</span>
                      <span className="text-xs font-bold font-mono text-electron">{shells[shells.length - 1]} e⁻</span>
                    </div>
                  </div>
                  <p className="text-[11px] leading-relaxed text-muted-foreground font-mono text-justify border-t border-glass-border pt-4">
                    Classified as a <span className="text-accent font-bold capitalize">{element.category.replace("-", " ")}</span>, {element.name} participates in chemical interactions primarily through its {shells[shells.length - 1]} valence electrons. {shells[shells.length - 1] === 8 ? "Its complete valence shell renders it inert." : "It seeks to achieve electronic stability through ionic or covalent bonding mechanics."}
                  </p>
                </div>

                <div className="glass-panel p-5 border-l-2 border-l-secondary relative group overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10 -mr-4 -mt-4 transition-transform group-hover:scale-110">
                    <Database className="w-16 h-16 text-secondary" />
                  </div>
                  <div className="data-label text-secondary mb-2">Experimental Context</div>
                  <p className="text-[11px] leading-relaxed text-foreground/80 font-mono italic">
                    "{element.fact}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
