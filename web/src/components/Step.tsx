import React from "react";

export default function Step({ step }: { step: number }) {
  return (
    <span className="w-[10px] mx-3 h-[10px]  dark:text-amber-300/50 p-2 font-sm">
      {step}
    </span>
  );
}
