"use client";

import React, { useState } from "react";

// Teisinga 24x24 multiplier lentelė (trumpinta dėl vietos, įklijuok visą!)
const multipliers: (number | null)[][] = [
  [1.01, 1.08, 1.12, 1.18, 1.24, 1.31, 1.37, 1.44, 1.52, 1.6, 1.65, 1.7, 1.76, 1.9, 2.06, 2.25, 2.47, 2.75, 3.09, 3.44, 3.92, 4.51, 5.29, 6.37],
  [1.08, 1.19, 1.48, 1.56, 1.64, 1.82, 2.0, 2.2, 2.42, 2.67, 2.83, 3.06, 3.36, 3.76, 4.26, 4.89, 5.68, 6.66, 7.9, 9.48, 11.49, 14.08, 17.49, 21.97],
  [1.16, 1.34, 1.71, 1.85, 1.98, 2.38, 2.64, 2.91, 3.21, 3.53, 3.88, 4.26, 4.68, 5.16, 5.71, 6.36, 7.14, 8.06, 9.17, 10.5, 12.12, 14.12, 16.62, 19.76],
  [1.24, 1.5, 1.95, 2.15, 2.34, 2.84, 3.24, 3.66, 4.13, 4.62, 5.16, 5.75, 6.41, 7.14, 7.96, 8.9, 10.0, 11.28, 12.77, 14.54, 16.64, 19.17, 22.22, 25.92],
  [1.31, 1.64, 2.17, 2.45, 2.73, 3.5, 4.05, 4.66, 5.33, 6.07, 6.9, 7.84, 8.9, 10.12, 11.5, 13.1, 14.94, 17.08, 19.55, 22.44, 25.82, 29.81, 34.54, 40.17],
  [1.39, 1.81, 2.42, 2.78, 3.13, 4.25, 5.06, 6.0, 7.1, 8.38, 9.88, 11.64, 13.7, 16.14, 18.99, 22.36, 26.33, 31.0, 36.52, 43.04, 50.74, 59.8, 70.46, 82.92],
  [1.47, 2.0, 2.72, 3.18, 3.65, 5.12, 6.34, 7.81, 9.57, 11.68, 14.2, 17.28, 21.0, 25.52, 31.01, 37.63, 45.63, 55.26, 66.86, 80.78, 97.44, 117.32, 140.94, 168.87],
  [1.55, 2.2, 3.04, 3.62, 4.21, 6.11, 7.9, 10.2, 13.14, 16.85, 21.51, 27.38, 34.68, 43.66, 54.63, 67.94, 84.02, 103.33, 126.46, 154.11, 187.13, 226.54, 273.62, 329.89],
  // Pridėk likusias 16 eilučių čia...
];

// Funkcija grąžinanti multiplier
function getMultiplier(diamonds: number, mines: number): number | null {
  if (diamonds < 1 || mines < 1 || diamonds > 24 || mines > 24) return null;
  return multipliers[diamonds - 1][mines - 1] ?? null;
}

// Funkcija grąžinanti šansą
function getWinChance(diamonds: number, mines: number): number {
  const total = 25;
  let chance = 1;
  for (let i = 0; i < diamonds; i++) {
    chance *= (total - mines - i) / (total - i);
  }
  return chance * 100;
}

// ✅ Komponentas su UI
export default function MinesMultiplier() {
  const [mines, setMines] = useState(1);
  const [diamonds, setDiamonds] = useState(1);

  const multiplier = getMultiplier(diamonds, mines);
  const winChance = getWinChance(diamonds, mines);

  const getColor = (chance: number) => {
    if (chance > 80) return "text-green-400";
    if (chance > 30) return "text-yellow-400";
    return "text-red-500";
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full shadow-2xl border border-white/20">
      <h1 className="text-2xl font-bold mb-4 text-center">💎 Mines Multiplier Calculator</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Mines</label>
          <input
            type="number"
            min={1}
            max={24}
            value={mines}
            onChange={(e) => setMines(Number(e.target.value))}
            className="w-full p-2 bg-black/40 rounded-lg border border-gray-500 text-white"
          />
        </div>
        <div>
          <label className="block mb-1">Diamonds</label>
          <input
            type="number"
            min={1}
            max={24}
            value={diamonds}
            onChange={(e) => setDiamonds(Number(e.target.value))}
            className="w-full p-2 bg-black/40 rounded-lg border border-gray-500 text-white"
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg">
          🎯 <span className="font-semibold">Multiplier:</span>{" "}
          <span className="text-green-300 font-mono">{multiplier ?? "N/A"}x</span>
        </p>
        <p className="text-lg mt-2">
          📊 <span className="font-semibold">Win Chance:</span>{" "}
          <span className={`font-mono ${getColor(winChance)}`}>{winChance.toFixed(2)}%</span>
        </p>
      </div>
    </div>
  );
}
