"use client";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";

type DocsSection = {
  title: string;
  path: string;
  children?: DocsSection[];
};

export const docsStructure: DocsSection[] = [
  {
    title: "Getting Started",
    path: "/docs/getting-started",
    children: [
      { title: "Installation", path: "/docs/getting-started/installation" },
      { title: "Quickstart", path: "/docs/getting-started/quickstart" },
    ],
  },
  {
    title: "Concepts & Supported Services",
    path: "/docs/concepts",
    children: [
      { title: "Schema Format", path: "/docs/concepts/schema-format" },
      { title: "Types", path: "/docs/concepts/types" },
      {
        title: "Supported Databases",
        path: "/docs/concepts/supported-databases",
      },
      { title: "MongoDB", path: "/docs/concepts/mongodb" },
      { title: "Firebase", path: "/docs/concepts/firebase" },
      { title: "Postgresql", path: "/docs/concepts/postgresql" },
      { title: "Prisma", path: "/docs/concepts/prisma" },
      { title: "SQLite", path: "/docs/concepts/sqlite" },
      { title: "Redis", path: "/docs/concepts/redis" },
    ],
  },

  //{
  //  title: "Usage",
  //  path: "/docs/usage",
  //  children: [
  //    { title: "Running BlazeKit", path: "/docs/usage/running" },
  //    { title: "Customizing Output", path: "/docs/usage/customizing-output" },
  //    { title: "Partial Generation", path: "/docs/usage/partial-generation" },
  //  ],
  //},
  //{
  //  title: "Advanced",
  //  path: "/docs/advanced",
  //  children: [
  //    {
  //      title: "Extending BlazeKit",
  //      path: "/docs/advanced/extending-blazekit",
  //    },
  //    {
  //      title: "Custom Database Support",
  //      path: "/docs/advanced/custom-database-support",
  //    },
  //  ],
  //},
  //{
  //  title: "FAQs",
  //  path: "/docs/faqs",
  //  children: [
  //    { title: "Common Errors", path: "/docs/faqs/common-errors" },
  //    { title: "Troubleshooting", path: "/docs/faqs/troubleshooting" },
  //    { title: "Tips & Tricks", path: "/docs/faqs/tips-tricks" },
  //  ],
  //},
  //{
  //  title: "Contributing",
  //  path: "/docs/contributing",
  //  children: [
  //    {
  //      title: "How to Contribute",
  //      path: "/docs/contributing/how-to-contribute",
  //    },
  //    { title: "Code Structure", path: "/docs/contributing/code-structure" },
  //    {
  //      title: "Development Setup",
  //      path: "/docs/contributing/development-setup",
  //    },
  //  ],
  //},
  //{
  //  title: "Changelog",
  //  path: "/docs/changelog",
  //  children: [
  //    { title: "Releases", path: "/docs/changelog/releases" },
  //    { title: "Migration Guides", path: "/docs/changelog/migration-guides" },
  //  ],
  //},
  //{
  //  title: "About",
  //  path: "/docs/about",
  //  children: [
  //    { title: "Creator", path: "/docs/about/creator" },
  //    { title: "License", path: "/docs/about/license" },
  //  ],
  //},
];

export default function DocsSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const filterDocs = (
    structure: DocsSection[],
    query: string,
  ): DocsSection[] => {
    return structure.reduce<DocsSection[]>((acc, item) => {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        acc.push(item);
      } else if (item.children) {
        const filteredChildren = filterDocs(item.children, query);
        if (filteredChildren.length > 0) {
          acc.push({ ...item, children: filteredChildren });
        }
      }
      return acc;
    }, []);
  };

  const filteredStructure = filterDocs(docsStructure, searchQuery);

  const renderDocs = (structure: DocsSection[]) => {
    return (
      <ul className="flex w-full flex-col gap-1 p-3 md:w-auto">
        {structure.map((item) => {
          const isActive = pathname === item.path;

          if (item.children && item.children.length > 0) {
            return (
              <div key={item.path}>
                <Link href={item.path}>
                  <div
                    className={`font-bold ${isActive ? "text-orange-500" : ""}`}
                  >
                    {item.title}
                  </div>
                </Link>
                {renderDocs(item.children)}
              </div>
            );
          } else {
            return (
              <Link href={item.path} key={item.path}>
                <div
                  className={`ml-3 text-sm ${
                    isActive
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.title}
                </div>
              </Link>
            );
          }
        })}
      </ul>
    );
  };

  const memoizedRender = useMemo(
    () => renderDocs(filteredStructure),
    [filteredStructure, pathname],
  );

  return (
    <div className="sticky top-20 z-30 mx-4">
      <aside className="flex flex-col gap-1 border-b  drop-shadow-2xl drop-shadow-[#FF4F0010]   md:border-none bg-with-noise p-3   md:top-0 md:h-[80vh] md:w-64 md:max-w-xs md:rounded-lg">
        <div className="flex justify-between  md:border-b-1 md:border-amber-300/25 py-1">
          <div className="text-xl font-bold">BlazeKit Docs</div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`md:hidden ${isExpanded ? "rotate-90" : ""} transition-transform`}
          >
            <RiMenu3Fill />
          </button>
        </div>

        <div
          className={`transition-all md:block ${
            isExpanded
              ? "max-h-[40vh] overflow-y-auto opacity-100 md:max-h-[80vh] md:opacity-100"
              : "hidden max-h-0 overflow-y-auto opacity-0 md:max-h-[80vh] md:opacity-100"
          }`}
        >
          <input
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input my-3 w-full md:w-[80%]"
          />
          {memoizedRender}
        </div>
      </aside>
    </div>
  );
}
