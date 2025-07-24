// utils/logic.ts

// Pilna 24x24 multiplier lentelė
export const multipliers: (number | null)[][] = [
  [1.01, 1.08, 1.12, 1.18, 1.24, 1.31, 1.37, 1.44, 1.52, 1.6, 1.65, 1.7, 1.9, 2.06, 2.25, 2.47, 2.73, 3.04, 3.41, 3.86, 4.39, 5.02, 5.77, 6.65],
  [1.08, 1.19, 1.48, 1.56, 1.64, 1.82, 2.0, 2.2, 2.42, 2.67, 2.83, 3.0, 3.26, 3.57, 3.91, 4.31, 4.75, 5.25, 5.83, 6.5, 7.28, 8.18, 9.23, null],
  [1.16, 1.34, 1.71, 1.85, 1.98, 2.38, 2.64, 2.91, 3.21, 3.53, 3.88, 4.26, 4.67, 5.13, 5.63, 6.19, 6.81, 7.5, 8.27, 9.13, 10.1, 11.19, null, null],
  [1.24, 1.5, 1.95, 2.15, 2.34, 2.84, 3.24, 3.66, 4.13, 4.62, 5.16, 5.75, 6.4, 7.13, 7.93, 8.84, 9.86, 11.01, 12.31, 13.77, 15.42, null, null, null],
  [1.31, 1.64, 2.17, 2.45, 2.73, 3.5, 4.05, 4.66, 5.33, 6.07, 6.9, 7.84, 8.9, 10.1, 11.46, 13.0, 14.75, 16.73, 19.0, 21.6, null, null, null, null],
  [1.39, 1.81, 2.42, 2.78, 3.13, 4.25, 5.06, 6.0, 7.1, 8.38, 9.88, 11.63, 13.67, 16.04, 18.79, 22.0, 25.75, 30.13, 35.25, null, null, null, null, null],
  [1.47, 2.0, 2.72, 3.18, 3.65, 5.12, 6.34, 7.81, 9.57, 11.68, 14.2, 17.21, 20.8, 25.1, 30.23, 36.36, 43.69, 52.38, null, null, null, null, null, null],
  [1.55, 2.2, 3.04, 3.62, 4.21, 6.11, 7.9, 10.2, 13.14, 16.85, 21.51, 27.3, 34.47, 43.26, 54.0, 67.0, 82.71, null, null, null, null, null, null, null],
  [1.63, 2.42, 3.39, 4.1, 4.84, 7.23, 9.72, 13.16, 17.83, 24.13, 32.45, 43.41, 57.69, 75.99, 99.39, 128.91, null, null, null, null, null, null, null, null],
  [1.71, 2.65, 3.77, 4.62, 5.52, 8.49, 11.86, 16.61, 23.09, 31.86, 43.6, 59.7, 80.74, 107.37, 141.13, null, null, null, null, null, null, null, null, null],
  [1.79, 2.9, 4.18, 5.2, 6.3, 10.0, 14.43, 21.02, 30.65, 44.2, 62.8, 87.18, 118.79, 159.67, null, null, null, null, null, null, null, null, null, null],
  [1.88, 3.17, 4.62, 5.83, 7.21, 11.74, 17.47, 26.77, 41.63, 64.83, 99.39, 148.51, 214.55, null, null, null, null, null, null, null, null, null, null, null],
  [1.96, 3.45, 5.1, 6.5, 8.28, 13.8, 21.15, 34.03, 56.86, 97.73, 158.75, 244.18, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.04, 3.75, 5.63, 7.24, 9.57, 16.13, 25.67, 43.01, 75.0, 134.64, 236.02, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.12, 4.07, 6.2, 8.07, 11.04, 18.83, 31.14, 54.45, 100.77, 190.61, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.2, 4.41, 6.81, 9.0, 12.83, 22.04, 37.98, 69.63, 134.88, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.29, 4.76, 7.46, 10.03, 14.88, 25.79, 46.17, 88.16, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.38, 5.13, 8.15, 11.19, 17.25, 30.2, 56.67, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.47, 5.51, 8.88, 12.5, 19.99, 35.45, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.56, 5.91, 9.65, 14.0, 23.17, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.65, 6.33, 10.46, 15.62, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.74, 6.76, 11.31, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.83, 7.21, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2.92, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
];

// Gauti multiplier'į pagal diamonds ir mines
export function getMultiplier(diamonds: number, mines: number): number | null {
  const d = diamonds - 1;
  const m = mines - 1;
  if (multipliers[d] && multipliers[d][m] !== undefined) {
    return multipliers[d][m];
  }
  return null;
}

// Gauti win chance procentais pagal kombinatoriką
export function getWinChance(diamonds: number, mines: number): number {
  const total = 25;
  if (diamonds + mines > total) return 0;

  const combinations = (n: number, k: number): number => {
    if (k > n || k < 0) return 0;
    let res = 1;
    for (let i = 1; i <= k; i++) {
      res *= (n - (i - 1)) / i;
    }
    return res;
  };

  const good = combinations(total - mines, diamonds);
  const all = combinations(total, diamonds);
  return (good / all) * 100;
}
