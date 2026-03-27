import { ELEMENTS, ElementData } from "@/data/elements";

interface PeriodicTableProps {
  selected: ElementData;
  onSelect: (el: ElementData) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  nonmetal: "border-emerald-500/40",
  "noble-gas": "border-violet-500/40",
  alkali: "border-orange-500/40",
  alkaline: "border-yellow-500/40",
  metalloid: "border-teal-500/40",
  "post-transition": "border-sky-500/40",
  halogen: "border-rose-500/40",
};

// Simple grid layout for first 20 elements - positions [row, col]
const POSITIONS: Record<number, [number, number]> = {
  1: [0, 0], 2: [0, 17],
  3: [1, 0], 4: [1, 1], 5: [1, 12], 6: [1, 13], 7: [1, 14], 8: [1, 15], 9: [1, 16], 10: [1, 17],
  11: [2, 0], 12: [2, 1], 13: [2, 12], 14: [2, 13], 15: [2, 14], 16: [2, 15], 17: [2, 16], 18: [2, 17],
  19: [3, 0], 20: [3, 1],
};

export function PeriodicTable({ selected, onSelect }: PeriodicTableProps) {
  return (
    <div className="glass-panel p-3">
      <h3 className="data-label mb-2 px-1">Periodic Table</h3>
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: "repeat(18, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
        }}
      >
        {ELEMENTS.map((el) => {
          const [row, col] = POSITIONS[el.number];
          const isActive = selected.number === el.number;
          const catColor = CATEGORY_COLORS[el.category] || "border-border";

          return (
            <button
              key={el.number}
              onClick={() => onSelect(el)}
              className={`element-cell border p-0.5 min-w-0 text-center ${catColor} ${
                isActive ? "element-cell-active" : ""
              }`}
              style={{
                gridRow: row + 1,
                gridColumn: col + 1,
              }}
              title={el.name}
            >
              <span className="text-[8px] text-muted-foreground leading-none">{el.number}</span>
              <span className={`text-xs font-bold leading-none ${isActive ? "text-primary" : "text-foreground"}`}>
                {el.symbol}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
