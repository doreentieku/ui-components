import { CardSpotlight } from "@/app/components/ui/card-spotlight";

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-200 w-400">
      <p className="text-neutral-300 mt-1 relative z-20 text-center">
        Move cursor here
      </p>
    </CardSpotlight>
  );
}

