"use client";

import HTMLFlipBook from "react-pageflip";

export default function InteractiveBook() {
  return (
    <div>
      <HTMLFlipBook width={100} height={100} showCover size="stretch">
        <div className="demoPage bg-slate-300">Page 1</div>
        <div className="demoPage bg-slate-400">Page 2</div>
        <div className="demoPage bg-slate-500">Page 3</div>
        <div className="demoPage bg-slate-600">Page 4</div>
        <div className="demoPage bg-slate-700">Page 5</div>
        <div className="demoPage bg-slate-800">Page 6</div>
        <div className="demoPage bg-slate-300">Page 1</div>
        <div className="demoPage bg-slate-400">Page 2</div>
        <div className="demoPage bg-slate-500">Page 3</div>
        <div className="demoPage bg-slate-600">Page 4</div>
        <div className="demoPage bg-slate-700">Page 5</div>
        <div className="demoPage bg-slate-800">Page 6</div>
      </HTMLFlipBook>
    </div>
  );
}
