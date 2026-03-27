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
  { number: 21, symbol: "Sc", name: "Scandium", mass: 45, category: "transition", fact: "Used in aerospace alloys for its light weight and strength." },
  { number: 22, symbol: "Ti", name: "Titanium", mass: 48, category: "transition", fact: "As strong as steel but 45% lighter." },
  { number: 23, symbol: "V", name: "Vanadium", mass: 51, category: "transition", fact: "Named after the Norse goddess of beauty, Vanadís." },
  { number: 24, symbol: "Cr", name: "Chromium", mass: 52, category: "transition", fact: "Gives rubies their red color and emeralds their green." },
  { number: 25, symbol: "Mn", name: "Manganese", mass: 55, category: "transition", fact: "Essential for photosynthesis in plants." },
  { number: 26, symbol: "Fe", name: "Iron", mass: 56, category: "transition", fact: "Most common element on Earth by mass, forming much of the core." },
  { number: 27, symbol: "Co", name: "Cobalt", mass: 59, category: "transition", fact: "Used to create vivid blue pigments for centuries." },
  { number: 28, symbol: "Ni", name: "Nickel", mass: 59, category: "transition", fact: "The US five-cent coin is actually 75% copper." },
  { number: 29, symbol: "Cu", name: "Copper", mass: 64, category: "transition", fact: "One of the few metals with a distinctive non-silver color." },
  { number: 30, symbol: "Zn", name: "Zinc", mass: 65, category: "transition", fact: "Essential trace element for all living organisms." },
  { number: 31, symbol: "Ga", name: "Gallium", mass: 70, category: "post-transition", fact: "Melts in your hand — its melting point is just 29.76°C." },
  { number: 32, symbol: "Ge", name: "Germanium", mass: 73, category: "metalloid", fact: "Used in fiber optics and infrared optics." },
  { number: 33, symbol: "As", name: "Arsenic", mass: 75, category: "metalloid", fact: "Historically known as the 'king of poisons'." },
  { number: 34, symbol: "Se", name: "Selenium", mass: 79, category: "nonmetal", fact: "Named after the Moon (Greek: selene)." },
  { number: 35, symbol: "Br", name: "Bromine", mass: 80, category: "halogen", fact: "One of only two elements that are liquid at room temperature." },
  { number: 36, symbol: "Kr", name: "Krypton", mass: 84, category: "noble-gas", fact: "Superman's home planet was named after this real element." },
  { number: 37, symbol: "Rb", name: "Rubidium", mass: 85, category: "alkali", fact: "Ignites spontaneously in air." },
  { number: 38, symbol: "Sr", name: "Strontium", mass: 88, category: "alkaline", fact: "Produces brilliant red fireworks." },
  { number: 39, symbol: "Y", name: "Yttrium", mass: 89, category: "transition", fact: "Used in LED lights and camera lenses." },
  { number: 40, symbol: "Zr", name: "Zirconium", mass: 91, category: "transition", fact: "Cubic zirconia is used as a diamond substitute." },
  { number: 41, symbol: "Nb", name: "Niobium", mass: 93, category: "transition", fact: "Used in superconducting magnets in MRI scanners." },
  { number: 42, symbol: "Mo", name: "Molybdenum", mass: 96, category: "transition", fact: "Essential trace element for nearly all life forms." },
  { number: 43, symbol: "Tc", name: "Technetium", mass: 98, category: "transition", fact: "First artificially produced element." },
  { number: 44, symbol: "Ru", name: "Ruthenium", mass: 101, category: "transition", fact: "One of the rarest elements in Earth's crust." },
  { number: 45, symbol: "Rh", name: "Rhodium", mass: 103, category: "transition", fact: "Most expensive precious metal, used in catalytic converters." },
  { number: 46, symbol: "Pd", name: "Palladium", mass: 106, category: "transition", fact: "Can absorb up to 900 times its own volume in hydrogen." },
  { number: 47, symbol: "Ag", name: "Silver", mass: 108, category: "transition", fact: "Best electrical conductor of all elements." },
  { number: 48, symbol: "Cd", name: "Cadmium", mass: 112, category: "transition", fact: "Used in rechargeable NiCd batteries." },
  { number: 49, symbol: "In", name: "Indium", mass: 115, category: "post-transition", fact: "Makes a crying sound when bent." },
  { number: 50, symbol: "Sn", name: "Tin", mass: 119, category: "post-transition", fact: "Known since ancient times; used in bronze alloys." },
  { number: 51, symbol: "Sb", name: "Antimony", mass: 122, category: "metalloid", fact: "Used in ancient Egypt as eye makeup (kohl)." },
  { number: 52, symbol: "Te", name: "Tellurium", mass: 128, category: "metalloid", fact: "One of the rarest stable elements on Earth." },
  { number: 53, symbol: "I", name: "Iodine", mass: 127, category: "halogen", fact: "Essential for thyroid hormone production." },
  { number: 54, symbol: "Xe", name: "Xenon", mass: 131, category: "noble-gas", fact: "Used in the brightest headlights and flash photography." },
  { number: 55, symbol: "Cs", name: "Cesium", mass: 133, category: "alkali", fact: "Used in the most accurate atomic clocks." },
  { number: 56, symbol: "Ba", name: "Barium", mass: 137, category: "alkaline", fact: "Barium meals help X-ray the digestive system." },
  { number: 57, symbol: "La", name: "Lanthanum", mass: 139, category: "lanthanide", fact: "Used in hybrid car batteries." },
  { number: 58, symbol: "Ce", name: "Cerium", mass: 140, category: "lanthanide", fact: "Most abundant of the rare earth elements." },
  { number: 59, symbol: "Pr", name: "Praseodymium", mass: 141, category: "lanthanide", fact: "Used in aircraft engines and welding goggles." },
  { number: 60, symbol: "Nd", name: "Neodymium", mass: 144, category: "lanthanide", fact: "Makes the world's strongest permanent magnets." },
  { number: 61, symbol: "Pm", name: "Promethium", mass: 145, category: "lanthanide", fact: "Only radioactive rare earth element." },
  { number: 62, symbol: "Sm", name: "Samarium", mass: 150, category: "lanthanide", fact: "Used in cancer treatment (samarium-153)." },
  { number: 63, symbol: "Eu", name: "Europium", mass: 152, category: "lanthanide", fact: "Used in Euro banknotes as an anti-forgery measure." },
  { number: 64, symbol: "Gd", name: "Gadolinium", mass: 157, category: "lanthanide", fact: "Used as contrast agent in MRI scans." },
  { number: 65, symbol: "Tb", name: "Terbium", mass: 159, category: "lanthanide", fact: "Produces the green color in smartphones and TVs." },
  { number: 66, symbol: "Dy", name: "Dysprosium", mass: 163, category: "lanthanide", fact: "Name means 'hard to get' in Greek." },
  { number: 67, symbol: "Ho", name: "Holmium", mass: 165, category: "lanthanide", fact: "Has the highest magnetic strength of any element." },
  { number: 68, symbol: "Er", name: "Erbium", mass: 167, category: "lanthanide", fact: "Amplifies light in fiber optic cables." },
  { number: 69, symbol: "Tm", name: "Thulium", mass: 169, category: "lanthanide", fact: "Rarest naturally occurring lanthanide." },
  { number: 70, symbol: "Yb", name: "Ytterbium", mass: 173, category: "lanthanide", fact: "Used in the world's most precise atomic clocks." },
  { number: 71, symbol: "Lu", name: "Lutetium", mass: 175, category: "lanthanide", fact: "Most expensive lanthanide; used in PET scan detectors." },
  { number: 72, symbol: "Hf", name: "Hafnium", mass: 178, category: "transition", fact: "Used in nuclear reactor control rods." },
  { number: 73, symbol: "Ta", name: "Tantalum", mass: 181, category: "transition", fact: "Used in every smartphone for capacitors." },
  { number: 74, symbol: "W", name: "Tungsten", mass: 184, category: "transition", fact: "Highest melting point of all elements (3422°C)." },
  { number: 75, symbol: "Re", name: "Rhenium", mass: 186, category: "transition", fact: "Last stable element to be discovered (1925)." },
  { number: 76, symbol: "Os", name: "Osmium", mass: 190, category: "transition", fact: "Densest naturally occurring element." },
  { number: 77, symbol: "Ir", name: "Iridium", mass: 192, category: "transition", fact: "Most corrosion-resistant metal known." },
  { number: 78, symbol: "Pt", name: "Platinum", mass: 195, category: "transition", fact: "Used in catalytic converters and chemotherapy drugs." },
  { number: 79, symbol: "Au", name: "Gold", mass: 197, category: "transition", fact: "All the gold ever mined would fit in a 21m cube." },
  { number: 80, symbol: "Hg", name: "Mercury", mass: 201, category: "transition", fact: "Only metal that is liquid at room temperature." },
  { number: 81, symbol: "Tl", name: "Thallium", mass: 204, category: "post-transition", fact: "Once called 'the poisoner's poison' due to being undetectable." },
  { number: 82, symbol: "Pb", name: "Lead", mass: 207, category: "post-transition", fact: "Romans used lead pipes for plumbing (plumbum = lead)." },
  { number: 83, symbol: "Bi", name: "Bismuth", mass: 209, category: "post-transition", fact: "Forms beautiful rainbow-colored hopper crystals." },
  { number: 84, symbol: "Po", name: "Polonium", mass: 209, category: "post-transition", fact: "Discovered by Marie Curie, named after Poland." },
  { number: 85, symbol: "At", name: "Astatine", mass: 210, category: "halogen", fact: "Rarest naturally occurring element on Earth." },
  { number: 86, symbol: "Rn", name: "Radon", mass: 222, category: "noble-gas", fact: "Radioactive gas that can accumulate in basements." },
  { number: 87, symbol: "Fr", name: "Francium", mass: 223, category: "alkali", fact: "Most unstable of the first 101 elements." },
  { number: 88, symbol: "Ra", name: "Radium", mass: 226, category: "alkaline", fact: "Used to glow-in-the-dark watch dials in the early 1900s." },
  { number: 89, symbol: "Ac", name: "Actinium", mass: 227, category: "actinide", fact: "Glows blue in the dark due to radioactivity." },
  { number: 90, symbol: "Th", name: "Thorium", mass: 232, category: "actinide", fact: "Could power nuclear reactors more safely than uranium." },
  { number: 91, symbol: "Pa", name: "Protactinium", mass: 231, category: "actinide", fact: "One of the rarest and most expensive elements." },
  { number: 92, symbol: "U", name: "Uranium", mass: 238, category: "actinide", fact: "A golf-ball-sized sphere weighs about 1 kg." },
  { number: 93, symbol: "Np", name: "Neptunium", mass: 237, category: "actinide", fact: "First transuranium element ever synthesized." },
  { number: 94, symbol: "Pu", name: "Plutonium", mass: 244, category: "actinide", fact: "Used as fuel in deep-space missions (RTGs)." },
  { number: 95, symbol: "Am", name: "Americium", mass: 243, category: "actinide", fact: "Found in most household smoke detectors." },
  { number: 96, symbol: "Cm", name: "Curium", mass: 247, category: "actinide", fact: "Named after Marie and Pierre Curie." },
  { number: 97, symbol: "Bk", name: "Berkelium", mass: 247, category: "actinide", fact: "Named after Berkeley, California." },
  { number: 98, symbol: "Cf", name: "Californium", mass: 251, category: "actinide", fact: "Used to detect gold and silver ores." },
  { number: 99, symbol: "Es", name: "Einsteinium", mass: 252, category: "actinide", fact: "Discovered in the debris of the first hydrogen bomb." },
  { number: 100, symbol: "Fm", name: "Fermium", mass: 257, category: "actinide", fact: "Named after nuclear physicist Enrico Fermi." },
  { number: 101, symbol: "Md", name: "Mendelevium", mass: 258, category: "actinide", fact: "Named after Dmitri Mendeleev, creator of the periodic table." },
  { number: 102, symbol: "No", name: "Nobelium", mass: 259, category: "actinide", fact: "Named after Alfred Nobel, inventor of dynamite." },
  { number: 103, symbol: "Lr", name: "Lawrencium", mass: 266, category: "actinide", fact: "Named after Ernest Lawrence, inventor of the cyclotron." },
  { number: 104, symbol: "Rf", name: "Rutherfordium", mass: 267, category: "transition", fact: "Named after Ernest Rutherford, father of nuclear physics." },
  { number: 105, symbol: "Db", name: "Dubnium", mass: 268, category: "transition", fact: "Named after Dubna, Russia." },
  { number: 106, symbol: "Sg", name: "Seaborgium", mass: 269, category: "transition", fact: "Named after Glenn T. Seaborg while he was still alive." },
  { number: 107, symbol: "Bh", name: "Bohrium", mass: 270, category: "transition", fact: "Named after Niels Bohr, pioneer of atomic structure." },
  { number: 108, symbol: "Hs", name: "Hassium", mass: 277, category: "transition", fact: "Named after the German state of Hesse." },
  { number: 109, symbol: "Mt", name: "Meitnerium", mass: 278, category: "transition", fact: "Named after Lise Meitner, who discovered nuclear fission." },
  { number: 110, symbol: "Ds", name: "Darmstadtium", mass: 281, category: "transition", fact: "Named after Darmstadt, Germany." },
  { number: 111, symbol: "Rg", name: "Roentgenium", mass: 282, category: "transition", fact: "Named after Wilhelm Röntgen, discoverer of X-rays." },
  { number: 112, symbol: "Cn", name: "Copernicium", mass: 285, category: "transition", fact: "Named after Nicolaus Copernicus." },
  { number: 113, symbol: "Nh", name: "Nihonium", mass: 286, category: "post-transition", fact: "First element discovered in Asia (Japan)." },
  { number: 114, symbol: "Fl", name: "Flerovium", mass: 289, category: "post-transition", fact: "Named after the Flerov Laboratory of Nuclear Reactions." },
  { number: 115, symbol: "Mc", name: "Moscovium", mass: 290, category: "post-transition", fact: "Named after Moscow Oblast, Russia." },
  { number: 116, symbol: "Lv", name: "Livermorium", mass: 293, category: "post-transition", fact: "Named after Lawrence Livermore National Laboratory." },
  { number: 117, symbol: "Ts", name: "Tennessine", mass: 294, category: "halogen", fact: "Named after the state of Tennessee." },
  { number: 118, symbol: "Og", name: "Oganesson", mass: 294, category: "noble-gas", fact: "Heaviest known element; may behave like a solid noble gas." },
];

// Accurate electron shell distributions (by principal quantum number n=1..7)
// Based on real Aufbau filling order with known exceptions (Cr, Cu, Nb, Mo, Ru, Rh, Pd, Ag, etc.)
const ELECTRON_SHELLS: number[][] = [
  [],              // 0 placeholder
  [1],             // 1  H
  [2],             // 2  He
  [2,1],           // 3  Li
  [2,2],           // 4  Be
  [2,3],           // 5  B
  [2,4],           // 6  C
  [2,5],           // 7  N
  [2,6],           // 8  O
  [2,7],           // 9  F
  [2,8],           // 10 Ne
  [2,8,1],         // 11 Na
  [2,8,2],         // 12 Mg
  [2,8,3],         // 13 Al
  [2,8,4],         // 14 Si
  [2,8,5],         // 15 P
  [2,8,6],         // 16 S
  [2,8,7],         // 17 Cl
  [2,8,8],         // 18 Ar
  [2,8,8,1],       // 19 K
  [2,8,8,2],       // 20 Ca
  [2,8,9,2],       // 21 Sc
  [2,8,10,2],      // 22 Ti
  [2,8,11,2],      // 23 V
  [2,8,13,1],      // 24 Cr  (exception)
  [2,8,13,2],      // 25 Mn
  [2,8,14,2],      // 26 Fe
  [2,8,15,2],      // 27 Co
  [2,8,16,2],      // 28 Ni
  [2,8,18,1],      // 29 Cu  (exception)
  [2,8,18,2],      // 30 Zn
  [2,8,18,3],      // 31 Ga
  [2,8,18,4],      // 32 Ge
  [2,8,18,5],      // 33 As
  [2,8,18,6],      // 34 Se
  [2,8,18,7],      // 35 Br
  [2,8,18,8],      // 36 Kr
  [2,8,18,8,1],    // 37 Rb
  [2,8,18,8,2],    // 38 Sr
  [2,8,18,9,2],    // 39 Y
  [2,8,18,10,2],   // 40 Zr
  [2,8,18,12,1],   // 41 Nb  (exception)
  [2,8,18,13,1],   // 42 Mo  (exception)
  [2,8,18,13,2],   // 43 Tc
  [2,8,18,15,1],   // 44 Ru  (exception)
  [2,8,18,16,1],   // 45 Rh  (exception)
  [2,8,18,18,0],   // 46 Pd  (exception)
  [2,8,18,18,1],   // 47 Ag  (exception)
  [2,8,18,18,2],   // 48 Cd
  [2,8,18,18,3],   // 49 In
  [2,8,18,18,4],   // 50 Sn
  [2,8,18,18,5],   // 51 Sb
  [2,8,18,18,6],   // 52 Te
  [2,8,18,18,7],   // 53 I
  [2,8,18,18,8],   // 54 Xe
  [2,8,18,18,8,1], // 55 Cs
  [2,8,18,18,8,2], // 56 Ba
  [2,8,18,18,9,2], // 57 La
  [2,8,18,19,9,2], // 58 Ce
  [2,8,18,21,8,2], // 59 Pr
  [2,8,18,22,8,2], // 60 Nd
  [2,8,18,23,8,2], // 61 Pm
  [2,8,18,24,8,2], // 62 Sm
  [2,8,18,25,8,2], // 63 Eu
  [2,8,18,25,9,2], // 64 Gd  (exception)
  [2,8,18,27,8,2], // 65 Tb
  [2,8,18,28,8,2], // 66 Dy
  [2,8,18,29,8,2], // 67 Ho
  [2,8,18,30,8,2], // 68 Er
  [2,8,18,31,8,2], // 69 Tm
  [2,8,18,32,8,2], // 70 Yb
  [2,8,18,32,9,2], // 71 Lu
  [2,8,18,32,10,2],// 72 Hf
  [2,8,18,32,11,2],// 73 Ta
  [2,8,18,32,12,2],// 74 W
  [2,8,18,32,13,2],// 75 Re
  [2,8,18,32,14,2],// 76 Os
  [2,8,18,32,15,2],// 77 Ir
  [2,8,18,32,17,1],// 78 Pt  (exception)
  [2,8,18,32,18,1],// 79 Au  (exception)
  [2,8,18,32,18,2],// 80 Hg
  [2,8,18,32,18,3],// 81 Tl
  [2,8,18,32,18,4],// 82 Pb
  [2,8,18,32,18,5],// 83 Bi
  [2,8,18,32,18,6],// 84 Po
  [2,8,18,32,18,7],// 85 At
  [2,8,18,32,18,8],// 86 Rn
  [2,8,18,32,18,8,1], // 87 Fr
  [2,8,18,32,18,8,2], // 88 Ra
  [2,8,18,32,18,9,2], // 89 Ac
  [2,8,18,32,18,10,2],// 90 Th
  [2,8,18,32,20,9,2], // 91 Pa
  [2,8,18,32,21,9,2], // 92 U
  [2,8,18,32,22,9,2], // 93 Np
  [2,8,18,32,24,8,2], // 94 Pu
  [2,8,18,32,25,8,2], // 95 Am
  [2,8,18,32,25,9,2], // 96 Cm
  [2,8,18,32,27,8,2], // 97 Bk
  [2,8,18,32,28,8,2], // 98 Cf
  [2,8,18,32,29,8,2], // 99 Es
  [2,8,18,32,30,8,2], // 100 Fm
  [2,8,18,32,31,8,2], // 101 Md
  [2,8,18,32,32,8,2], // 102 No
  [2,8,18,32,32,8,3], // 103 Lr
  [2,8,18,32,32,10,2],// 104 Rf
  [2,8,18,32,32,11,2],// 105 Db
  [2,8,18,32,32,12,2],// 106 Sg
  [2,8,18,32,32,13,2],// 107 Bh
  [2,8,18,32,32,14,2],// 108 Hs
  [2,8,18,32,32,15,2],// 109 Mt
  [2,8,18,32,32,17,1],// 110 Ds
  [2,8,18,32,32,18,1],// 111 Rg
  [2,8,18,32,32,18,2],// 112 Cn
  [2,8,18,32,32,18,3],// 113 Nh
  [2,8,18,32,32,18,4],// 114 Fl
  [2,8,18,32,32,18,5],// 115 Mc
  [2,8,18,32,32,18,6],// 116 Lv
  [2,8,18,32,32,18,7],// 117 Ts
  [2,8,18,32,32,18,8],// 118 Og
];

export function getElectronShells(atomicNumber: number): number[] {
  if (atomicNumber >= 1 && atomicNumber <= 118) {
    return [...ELECTRON_SHELLS[atomicNumber]].filter(n => n > 0);
  }
  return [];
}

export function getNeutrons(element: ElementData): number {
  return element.mass - element.number;
}

export const SHELL_NAMES = ["K", "L", "M", "N", "O", "P", "Q"];
