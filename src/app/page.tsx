"use client";

import dynamic from "next/dynamic";

const DraggableCardDemo = dynamic(() => import("@/app/components/DraggableCardDemo"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen bg-white dark:bg-black">
        <DraggableCardDemo />
      </main>

    </div>
  );
}
