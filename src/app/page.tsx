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
import { FloatingDockDemo } from "@/app/components/FloatingDockDemo";

export default function Home() {
  return (
    <div className="pb-20">
      <main className="min-h-screen space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Text Hover Effect</h2>
          <TextHoverEffectDemo />
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Draggable Card</h2>
          <DraggableCardDemo />
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Card Spotlight</h2>
          <div className="flex items-center justify-center">
            <CardSpotlightDemo />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Floating Dock</h2>
          <div className="flex justify-center">
            <FloatingDockDemo />
          </div>
        </section>
      </main>
    </div>
  );
}

