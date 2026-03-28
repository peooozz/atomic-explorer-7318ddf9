import { ELEMENTS, ElementData } from "@/data/elements";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PeriodicTableProps {
  selected: ElementData;
  onSelect: (el: ElementData) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  nonmetal: "border-emerald-500/50 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]",
  "noble-gas": "border-violet-500/50 hover:border-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]",
  alkali: "border-orange-500/50 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]",
  alkaline: "border-yellow-500/50 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]",
  metalloid: "border-teal-500/50 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]",
  "post-transition": "border-sky-500/50 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]",
  halogen: "border-rose-500/50 hover:border-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.5)]",
  transition: "border-blue-500/50 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
  lanthanide: "border-pink-500/50 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]",
  actinide: "border-amber-500/50 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]",
};

const CATEGORY_BG: Record<string, string> = {
  nonmetal: "bg-emerald-500/10",
  "noble-gas": "bg-violet-500/10",
  alkali: "bg-orange-500/10",
  alkaline: "bg-yellow-500/10",
  metalloid: "bg-teal-500/10",
  "post-transition": "bg-sky-500/10",
  halogen: "bg-rose-500/10",
  transition: "bg-blue-500/10",
  lanthanide: "bg-pink-500/10",
  actinide: "bg-amber-500/10",
};

// Standard periodic table positions [row, col] (0-indexed)
const POSITIONS: Record<number, [number, number]> = {
  1: [0, 0], 2: [0, 17],
  3: [1, 0], 4: [1, 1], 5: [1, 12], 6: [1, 13], 7: [1, 14], 8: [1, 15], 9: [1, 16], 10: [1, 17],
  11: [2, 0], 12: [2, 1], 13: [2, 12], 14: [2, 13], 15: [2, 14], 16: [2, 15], 17: [2, 16], 18: [2, 17],
  19: [3, 0], 20: [3, 1], 21: [3, 2], 22: [3, 3], 23: [3, 4], 24: [3, 5], 25: [3, 6], 26: [3, 7], 27: [3, 8], 28: [3, 9], 29: [3, 10], 30: [3, 11], 31: [3, 12], 32: [3, 13], 33: [3, 14], 34: [3, 15], 35: [3, 16], 36: [3, 17],
  37: [4, 0], 38: [4, 1], 39: [4, 2], 40: [4, 3], 41: [4, 4], 42: [4, 5], 43: [4, 6], 44: [4, 7], 45: [4, 8], 46: [4, 9], 47: [4, 10], 48: [4, 11], 49: [4, 12], 50: [4, 13], 51: [4, 14], 52: [4, 15], 53: [4, 16], 54: [4, 17],
  55: [5, 0], 56: [5, 1], 72: [5, 3], 73: [5, 4], 74: [5, 5], 75: [5, 6], 76: [5, 7], 77: [5, 8], 78: [5, 9], 79: [5, 10], 80: [5, 11], 81: [5, 12], 82: [5, 13], 83: [5, 14], 84: [5, 15], 85: [5, 16], 86: [5, 17],
  87: [6, 0], 88: [6, 1], 104: [6, 3], 105: [6, 4], 106: [6, 5], 107: [6, 6], 108: [6, 7], 109: [6, 8], 110: [6, 9], 111: [6, 10], 112: [6, 11], 113: [6, 12], 114: [6, 13], 115: [6, 14], 116: [6, 15], 117: [6, 16], 118: [6, 17],
  // Lanthanides (row 8)
  57: [8, 2], 58: [8, 3], 59: [8, 4], 60: [8, 5], 61: [8, 6], 62: [8, 7], 63: [8, 8], 64: [8, 9], 65: [8, 10], 66: [8, 11], 67: [8, 12], 68: [8, 13], 69: [8, 14], 70: [8, 15], 71: [8, 16],
  // Actinides (row 9)
  89: [9, 2], 90: [9, 3], 91: [9, 4], 92: [9, 5], 93: [9, 6], 94: [9, 7], 95: [9, 8], 96: [9, 9], 97: [9, 10], 98: [9, 11], 99: [9, 12], 100: [9, 13], 101: [9, 14], 102: [9, 15], 103: [9, 16],
};

export function PeriodicTable({ selected, onSelect }: PeriodicTableProps) {
  const [hoveredEl, setHoveredEl] = useState<ElementData | null>(null);

  return (
    <div className="glass-panel p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-primary/20 backdrop-blur-3xl rounded-t-3xl border-b-0 w-full">
      <div className="flex items-center justify-between mb-4 px-2 border-b border-glass-border pb-3">
        <h3 className="text-sm font-bold tracking-[0.1em] uppercase text-primary glow-text-secondary">Periodic Table of the Elements</h3>
        <div className="flex items-center gap-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={hoveredEl ? hoveredEl.symbol : selected.symbol}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-3 text-right"
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground tracking-tight">
                  {hoveredEl ? hoveredEl.name : selected.name}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  Atomic No. {hoveredEl ? hoveredEl.number : selected.number}
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-glass/50 border border-primary/30 flex items-center justify-center">
                <span className="text-lg font-bold font-display text-primary">{hoveredEl ? hoveredEl.symbol : selected.symbol}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <div
        className="grid gap-[4px] w-full"
        style={{
          gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
          gridAutoRows: "max-content",
        }}
      >
        {/* Group Numbering Headers */}
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={`col-${i}`} className="flex justify-center items-end pb-1" style={{ gridRow: 1, gridColumn: i + 1 }}>
            <span className="text-[10px] text-muted-foreground font-bold">{i + 1}</span>
          </div>
        ))}

        {/* Empty row forcing visually distinct gap between main block and f-block */}
        <div style={{ gridRow: 9, gridColumn: "1 / -1", minHeight: "24px" }} />

        {/* Placeholders for Lanthanides/Actinides in main body */}
        <div
          className={`border w-full aspect-square relative rounded-md flex items-center justify-center p-0.5 bg-pink-500/10 border-pink-500/50 cursor-default`}
          style={{ gridRow: 7, gridColumn: 3 }}
        >
          <span className="text-[8px] xl:text-[11px] font-bold text-pink-500 whitespace-nowrap tracking-tighter">57-71</span>
        </div>
        <div
          className={`border w-full aspect-square relative rounded-md flex items-center justify-center p-0.5 bg-amber-500/10 border-amber-500/50 cursor-default`}
          style={{ gridRow: 8, gridColumn: 3 }}
        >
          <span className="text-[8px] xl:text-[11px] font-bold text-amber-500 whitespace-nowrap tracking-tighter">89-103</span>
        </div>
        {ELEMENTS.map((el) => {
          const pos = POSITIONS[el.number];
          if (!pos) return null;
          const [row, col] = pos;
          const isActive = selected.number === el.number;
          const catColor = CATEGORY_COLORS[el.category] || "border-border";
          const catBg = CATEGORY_BG[el.category] || "";

          return (
            <motion.button
              key={el.number}
              onClick={() => onSelect(el)}
              onMouseEnter={() => setHoveredEl(el)}
              onMouseLeave={() => setHoveredEl(null)}
              whileHover={{ scale: 1.15, zIndex: 30 }}
              whileTap={{ scale: 0.95 }}
              className={`border w-full aspect-square relative rounded-md cursor-pointer
                transition-all duration-200 shadow-sm
                ${catColor} ${catBg}
                ${isActive ? "element-cell-active scale-110 z-20 shadow-primary/30" : "bg-glass/40"}
              `}
              style={{
                gridRow: row + 2,
                gridColumn: col + 1,
              }}
              title={`${el.number}. ${el.name}`}
            >
              <span className={`absolute top-1 left-1 text-[8px] font-mono leading-none ${isActive ? "text-primary glow-text" : "text-foreground/70"}`}>
                {el.number}
              </span>
              <div className="w-full h-full flex items-center justify-center">
                <span className={`text-[14px] xl:text-[18px] font-bold font-display leading-none tracking-tighter ${isActive ? "text-primary glow-text" : "text-foreground/90"}`}>
                  {el.symbol}
                </span>
              </div>
              <span className={`absolute bottom-1 left-0 w-full text-center text-[7px] leading-none truncate px-0.5 ${isActive ? "text-primary/90" : "text-foreground/40"}`}>
                {el.name}
              </span>
            </motion.button>
          );
        })}
        {/* Lanthanide/Actinide labels */}
        <div
          className="flex items-center justify-end pr-3 h-full"
          style={{ gridRow: 10, gridColumn: "1 / 3" }}
        >
          <span className="text-[10px] text-pink-400/60 font-mono tracking-widest font-semibold uppercase hidden md:block">Lanthanides</span>
          <span className="text-[10px] text-pink-400/60 font-mono tracking-widest font-semibold uppercase md:hidden">La-Lu</span>
        </div>
        <div
          className="flex items-center justify-end pr-3 h-full"
          style={{ gridRow: 11, gridColumn: "1 / 3" }}
        >
          <span className="text-[10px] text-amber-400/60 font-mono tracking-widest font-semibold uppercase hidden md:block">Actinides</span>
          <span className="text-[10px] text-amber-400/60 font-mono tracking-widest font-semibold uppercase md:hidden">Ac-Lr</span>
        </div>
      </div>
    </div>
  );
}
