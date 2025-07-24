"use client";

import React, { useState } from "react";

// Pilna 24x24 multiplikatorių lentelė (0-indexed: diamonds - 1, mines - 1)
const multipliers: (number | null)[][] = [
  [1.03, 1.07, 1.12, 1.17, 1.23, 1.3, 1.37, 1.45, 1.54, 1.65, 1.76, 1.9, 2.06, 2.25, 2.47, 2.75, 3.09, 3.53, 4.12, 4.95, 6.18, 8.25, 12.37, 24.75],
  [1.07, 1.17, 1.28, 1.41, 1.56, 1.73, 1.94, 2.18, 2.47, 2.82, 3.26, 3.8, 4.5, 5.4, 6.6, 8.25, 10.6, 14.14, 19.8, 29.7, 49.51, 99.02, 297.06, null],
  [1.12, 1.28, 1.47, 1.71, 1.99, 2.35, 2.79, 3.34, 4.06, 5.0, 6.25, 7.96, 10.35, 13.8, 18.97, 27.11, 40.66, 65.07, 113.87, 227.74, 569.36, 2277.46, null, null],
  [1.17, 1.41, 1.71, 2.09, 2.58, 3.23, 4.09, 5.26, 6.88, 9.17, 12.51, 17.51, 25.3, 37.95, 59.64, 99.41, 178.94, 357.89, 835.07, 2505.12, 12526.1, null, null, null],
  [1.23, 1.56, 1.99, 2.58, 3.39, 4.52, 6.14, 8.5, 12.04, 17.51, 26.27, 40.87, 66.42, 113.87, 208.76, 417.53, 939.45, 2505.2, 8768.2, 52609.3, null, null, null, null],
  [1.3, 1.73, 2.35, 3.23, 4.52, 6.46, 9.44, 14.16, 21.89, 35.03, 58.39, 102.19, 189.78, 379.57, 835.06, 2087.67, 6263.01, 25052, 175364.4, null, null, null, null, null],
  [1.37, 1.94, 2.79, 4.09, 6.14, 9.44, 14.95, 24.47, 41.6, 73.96, 138.69, 277.38, 601, 1442.4, 3966.58, 13222, 59498, 475989, null, null, null, null, null, null],
  [1.45, 2.18, 3.34, 5.26, 8.5, 14.16, 24.47, 44.05, 83.21, 166.43, 356.63, 832.15, 2163.59, 6490.76, 23799.43, 118997, 1070976, null, null, null, null, null, null, null],
  [1.54, 2.47, 4.06, 6.88, 12.04, 21.89, 41.6, 83.21, 176.83, 404.18, 1010.46, 2829.3, 9195.2, 36781, 202295, 2022954, null, null, null, null, null, null, null, null],
  [1.65, 2.82, 5.0, 9.17, 17.51, 35.03, 73.96, 166.43, 404.18, 1077.83, 3233.49, 11317.2, 49041.3, 294247, 3236727, null, null, null, null, null, null, null, null, null],
  [1.76, 3.26, 6.25, 12.51, 26.27, 58.39, 138.69, 356.63, 1010.46, 3233.49, 12125.58, 56584, 367809, 4413717, null, null, null, null, null, null, null, null, null, null],
  [1.9, 3.8, 7.96, 17.51, 40.87, 102.19, 277.38, 832.14, 2829.3, 11317, 56586, 396100, 5149330, null, null, null, null, null, null, null, null, null, null, null],
  [2.06, 4.5, 10.35, 25.3, 66.42, 189.78, 600.99, 2163.58, 9195.24, 49041, 367809, 5149335, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.25, 5.4, 13.8, 37.95, 113.87, 379.57, 1442.39, 6490.76, 36780.97, 294247.7, 4413717, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.47, 6.6, 18.97, 59.64, 208.76, 835.06, 3966.57, 23799.45, 202295.3, 3236725, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.75, 8.25, 27.11, 99.41, 417.53, 2087.67, 13222, 118997, 2022954, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [3.09, 10.6, 40.66, 178.94, 939.45, 6263, 59498.5, 1070976, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [3.53, 14.14, 65.07, 357.88, 2505.2, 25052, 475989, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [4.12, 19.8, 113.87, 835.06, 8768.22, 175364, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [4.95, 29.7, 227.74, 2505.2, 52609, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [6.18, 49.51, 569.36, 12526, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [8.25, 99.02, 2277.46, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [12.37, 297.06, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [24.75, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
];

function getMultiplier(diamonds: number, mines: number): number | null {
  if (diamonds < 1 || diamonds > 24 || mines < 1 || mines > 24) return null;
  return multipliers[diamonds - 1][mines - 1] ?? null;
}

function getWinChance(diamonds: number, mines: number): number {
  const total = 25;
  let chance = 1;
  for (let i = 0; i < diamonds; i++) {
    chance *= (total - mines - i) / (total - i);
  }
  return chance * 100;
}

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
