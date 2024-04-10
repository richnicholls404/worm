"use client";

import { Book } from "@prisma/client";
import HTMLFlipBook from "react-pageflip";

import "./InteractiveBook.css";

const MIN_WIDTH = 300;
const MIN_HEIGHT = 300;

export default function InteractiveBook({ book }: { book: Book }) {
  const pages = 10;
  return (
    <>
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={MIN_WIDTH}
        height={MIN_HEIGHT}
        showCover
        size="stretch"
        minWidth={MIN_WIDTH}
        minHeight={MIN_HEIGHT}
      >
        {Array.from({ length: pages }).map((_, index) => (
          <div
            key={index}
            className="bg-slate-50 text-slate-900 content-center text-center"
          >
            Page {index + 1}
          </div>
        ))}
      </HTMLFlipBook>
    </>
  );
}
