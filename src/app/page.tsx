"use client";

import dynamic from "next/dynamic";

const DraggableCardDemo = dynamic(
  () => import("@/app/components/DraggableCardDemo"),
  {
    ssr: false,
  }
);

import { TextHoverEffectDemo } from "@/app/components/TextHoverEffectDemo";
import { CardSpotlightDemo } from "@/app/components/CardSpotlightDemo";

export default function Home() {
  return (
    <div className="pb-20">
      <main className="min-h-screen">
        <TextHoverEffectDemo />
        <DraggableCardDemo />
        <div className="flex items-center justify-center">
          <CardSpotlightDemo />
        </div>
      </main>
    </div>
  );
}
