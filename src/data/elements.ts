export interface ElementData {
  number: number;
  symbol: string;
  name: string;
  mass: number;
  category: string;
  fact: string;
}

export const ELEMENTS: ElementData[] = [
  { number: 1, symbol: "H", name: "Hydrogen", mass: 1, category: "nonmetal", fact: "Makes up ~75% of all normal matter by mass in the universe." },
  { number: 2, symbol: "He", name: "Helium", mass: 4, category: "noble-gas", fact: "Second most abundant element in the observable universe." },
  { number: 3, symbol: "Li", name: "Lithium", mass: 7, category: "alkali", fact: "Lightest metal and least dense solid element." },
  { number: 4, symbol: "Be", name: "Beryllium", mass: 9, category: "alkaline", fact: "Transparent to X-rays, used in X-ray tube windows." },
  { number: 5, symbol: "B", name: "Boron", mass: 11, category: "metalloid", fact: "Essential micronutrient for plants." },
  { number: 6, symbol: "C", name: "Carbon", mass: 12, category: "nonmetal", fact: "Basis of all known life. Forms more compounds than any other element." },
  { number: 7, symbol: "N", name: "Nitrogen", mass: 14, category: "nonmetal", fact: "Makes up 78% of Earth's atmosphere." },
  { number: 8, symbol: "O", name: "Oxygen", mass: 16, category: "nonmetal", fact: "Most abundant element in Earth's crust by mass." },
  { number: 9, symbol: "F", name: "Fluorine", mass: 19, category: "halogen", fact: "Most electronegative and reactive of all elements." },
  { number: 10, symbol: "Ne", name: "Neon", mass: 20, category: "noble-gas", fact: "Produces the iconic reddish-orange glow in neon signs." },
  { number: 11, symbol: "Na", name: "Sodium", mass: 23, category: "alkali", fact: "Explodes violently when dropped in water." },
  { number: 12, symbol: "Mg", name: "Magnesium", mass: 24, category: "alkaline", fact: "Burns with a brilliant white flame." },
  { number: 13, symbol: "Al", name: "Aluminium", mass: 27, category: "post-transition", fact: "Most abundant metal in Earth's crust." },
  { number: 14, symbol: "Si", name: "Silicon", mass: 28, category: "metalloid", fact: "Foundation of modern electronics and computer chips." },
  { number: 15, symbol: "P", name: "Phosphorus", mass: 31, category: "nonmetal", fact: "White phosphorus glows in the dark (chemiluminescence)." },
  { number: 16, symbol: "S", name: "Sulfur", mass: 32, category: "nonmetal", fact: "Known since ancient times as 'brimstone'." },
  { number: 17, symbol: "Cl", name: "Chlorine", mass: 35, category: "halogen", fact: "Used to purify drinking water worldwide." },
  { number: 18, symbol: "Ar", name: "Argon", mass: 40, category: "noble-gas", fact: "Third most abundant gas in Earth's atmosphere." },
  { number: 19, symbol: "K", name: "Potassium", mass: 39, category: "alkali", fact: "Essential for nerve signal transmission in the body." },
  { number: 20, symbol: "Ca", name: "Calcium", mass: 40, category: "alkaline", fact: "Most abundant metal in the human body." },
];

export function getElectronShells(atomicNumber: number): number[] {
  const shells: number[] = [];
  let remaining = atomicNumber;
  let n = 1;
  while (remaining > 0) {
    const max = 2 * n * n;
    const inShell = Math.min(remaining, max);
    shells.push(inShell);
    remaining -= inShell;
    n++;
  }
  return shells;
}

export function getNeutrons(element: ElementData): number {
  return element.mass - element.number;
}

export const SHELL_NAMES = ["K", "L", "M", "N"];
