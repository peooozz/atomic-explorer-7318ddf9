import { useState } from "react";
import { AtomScene } from "@/components/3d/AtomScene";
import { PeriodicTable } from "@/components/PeriodicTable";
import { ElementInfoCard } from "@/components/ElementInfoCard";
import { ELEMENTS } from "@/data/elements";
import { Play, Pause, RotateCcw, Table2, PanelLeftClose, PanelLeft, Atom } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [selected, setSelected] = useState(ELEMENTS[5]); // Carbon
  const [isPlaying, setIsPlaying] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showTable, setShowTable] = useState(true);

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-background text-foreground flex">
      {/* 3D Canvas - Background */}
      <div className="absolute inset-0 z-0">
        <AtomScene element={selected} isPlaying={isPlaying} />
      </div>

      {/* Main UI Overlay Container */}
      <div className="relative z-10 flex h-full w-full pointer-events-none">
        
        {/* LEFT SIDEBAR - Floating / Fixed Left */}
        <AnimatePresence mode="wait">
          {showInfo && (
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-80 h-full p-4 flex flex-col gap-4 pointer-events-auto select-none"
            >
              {/* Top Branding / Logo */}
              <div className="glass-panel p-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Atom className="w-5 h-5 text-primary animate-[spin_4s_linear_infinite]" />
                  </div>
                  <div>
                    <h1 className="text-sm font-bold glow-text tracking-wide">
                      ATOMIC EXPLORER
                    </h1>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                      Lab Interface v2.0
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Element Info Card */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden pb-4 custom-scrollbar">
                <ElementInfoCard element={selected} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TOP RIGHT TOOLBAR */}
        <div className="absolute top-4 right-4 pointer-events-auto flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowTable(!showTable)}
            className={`glass-panel p-3 transition-colors ${showTable ? "bg-primary/20 border-primary/50 text-primary" : "hover:bg-primary/10 text-muted-foreground"}`}
            title={showTable ? "Hide Periodic Table" : "Show Periodic Table"}
          >
            <Table2 className="w-4 h-4" />
          </motion.button>

          <div className="w-px h-10 bg-glass-border mx-1" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowInfo(!showInfo)}
            className={`glass-panel p-3 transition-colors ${showInfo ? "bg-primary/20 border-primary/50 text-primary" : "hover:bg-primary/10 text-muted-foreground"}`}
            title={showInfo ? "Hide Sidebar" : "Show Sidebar"}
          >
            {showInfo ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeft className="w-4 h-4" />}
          </motion.button>
          
          <div className="w-px h-10 bg-glass-border mx-1" />
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="glass-panel p-3 hover:bg-primary/20 hover:text-primary transition-colors hover:border-primary/50 text-muted-foreground text-center"
            title={isPlaying ? "Pause Rotation" : "Play Rotation"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(ELEMENTS[5])}
            className="glass-panel p-3 hover:bg-secondary/20 hover:text-secondary hover:border-secondary/50 transition-colors text-muted-foreground"
            title="Reset to Carbon"
          >
            <RotateCcw className="w-4 h-4" />
          </motion.button>
        </div>

        {/* BOTTOM COLLAPSIBLE PERIODIC TABLE */}
        <AnimatePresence>
          {showTable && (
            <motion.div
              initial={{ y: "100%", x: 0, opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{ y: "100%", x: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="absolute bottom-4 right-4 xl:right-8 pointer-events-auto w-[calc(100vw-380px)] xl:w-[calc(100vw-420px)] max-w-[900px] xl:max-w-[1100px]"
            >
              <PeriodicTable selected={selected} onSelect={setSelected} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Index;
