"use client";
import React, { useState } from "react";
import { getMultiplier, getWinChance } from "@/utils/logic";

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
