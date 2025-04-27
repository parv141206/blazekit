import DocsSidebar from "@/components/Docs/DocsSidebar";
import React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-white container mx-auto flex flex-col gap-5 md:flex-row md:p-5">
      <div className="relative md:min-h-screen">
        <DocsSidebar />
      </div>

      <div className="p-5 py-10 flex-1">{children}</div>
    </div>
  );
}
