import { ELEMENTS, ElementData } from "@/data/elements";
import { useState } from "react";

interface PeriodicTableProps {
  selected: ElementData;
  onSelect: (el: ElementData) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  nonmetal: "border-emerald-500/40 hover:border-emerald-400",
  "noble-gas": "border-violet-500/40 hover:border-violet-400",
  alkali: "border-orange-500/40 hover:border-orange-400",
  alkaline: "border-yellow-500/40 hover:border-yellow-400",
  metalloid: "border-teal-500/40 hover:border-teal-400",
  "post-transition": "border-sky-500/40 hover:border-sky-400",
  halogen: "border-rose-500/40 hover:border-rose-400",
  transition: "border-blue-500/40 hover:border-blue-400",
  lanthanide: "border-pink-500/40 hover:border-pink-400",
  actinide: "border-amber-500/40 hover:border-amber-400",
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
  57: [8, 3], 58: [8, 4], 59: [8, 5], 60: [8, 6], 61: [8, 7], 62: [8, 8], 63: [8, 9], 64: [8, 10], 65: [8, 11], 66: [8, 12], 67: [8, 13], 68: [8, 14], 69: [8, 15], 70: [8, 16], 71: [8, 17],
  // Actinides (row 9)
  89: [9, 3], 90: [9, 4], 91: [9, 5], 92: [9, 6], 93: [9, 7], 94: [9, 8], 95: [9, 9], 96: [9, 10], 97: [9, 11], 98: [9, 12], 99: [9, 13], 100: [9, 14], 101: [9, 15], 102: [9, 16], 103: [9, 17],
};

export function PeriodicTable({ selected, onSelect }: PeriodicTableProps) {
  const [hoveredEl, setHoveredEl] = useState<ElementData | null>(null);

  return (
    <div className="glass-panel p-3">
      <div className="flex items-center justify-between mb-2 px-1">
        <h3 className="data-label">Periodic Table</h3>
        {hoveredEl && (
          <span className="text-xs text-muted-foreground font-mono">
            {hoveredEl.number}. {hoveredEl.name}
          </span>
        )}
      </div>
      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: "repeat(18, 1fr)",
          gridTemplateRows: "repeat(10, 1fr)",
        }}
      >
        {ELEMENTS.map((el) => {
          const pos = POSITIONS[el.number];
          if (!pos) return null;
          const [row, col] = pos;
          const isActive = selected.number === el.number;
          const catColor = CATEGORY_COLORS[el.category] || "border-border";
          const catBg = CATEGORY_BG[el.category] || "";

          return (
            <button
              key={el.number}
              onClick={() => onSelect(el)}
              onMouseEnter={() => setHoveredEl(el)}
              onMouseLeave={() => setHoveredEl(null)}
              className={`border p-0 min-w-0 text-center rounded-sm cursor-pointer
                transition-all duration-150 hover:scale-110 hover:z-10
                ${catColor} ${catBg}
                ${isActive ? "element-cell-active !bg-primary/20" : "bg-glass/60"}
              `}
              style={{
                gridRow: row + 1,
                gridColumn: col + 1,
                minHeight: "24px",
              }}
              title={`${el.number}. ${el.name}`}
            >
              <span className={`text-[7px] font-bold leading-none block ${isActive ? "text-primary" : "text-foreground/80"}`}>
                {el.symbol}
              </span>
            </button>
          );
        })}
        {/* Lanthanide/Actinide labels */}
        <div
          className="flex items-center justify-end pr-1"
          style={{ gridRow: 9, gridColumn: "1 / 4" }}
        >
          <span className="text-[7px] text-pink-400/60 font-mono">La-Lu</span>
        </div>
        <div
          className="flex items-center justify-end pr-1"
          style={{ gridRow: 10, gridColumn: "1 / 4" }}
        >
          <span className="text-[7px] text-amber-400/60 font-mono">Ac-Lr</span>
        </div>
      </div>
    </div>
  );
}
