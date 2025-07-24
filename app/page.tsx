// app/page.tsx
import MinesMultiplier from "@/components/MinesMultiplier";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <MinesMultiplier />
    </main>
  );
}
