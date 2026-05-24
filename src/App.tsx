/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

import SlidePersonal from "./components/SlidePersonal";
import SlideProject1 from "./components/SlideProject1";
import SlideProject2 from "./components/SlideProject2";
import SlideProject3 from "./components/SlideProject3";
import SlideFuture from "./components/SlideFuture";
import SlideEnd from "./components/SlideEnd";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe gesture detection refs
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const slides = [
    { id: "personal", label: "个人综述", component: SlidePersonal },
    { id: "proj1", label: "项目一：融合云&AgentOps业务", component: SlideProject1 },
    { id: "proj2", label: "项目二：LIVIS新业务", component: SlideProject2 },
    { id: "proj3", label: "项目三：AI生态", component: SlideProject3 },
    { id: "future", label: "未来规划", component: SlideFuture },
    { id: "end", label: "结束页", component: SlideEnd },
  ];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((p) => p - 1);
    }
  };

  // Keyboard arrow key navigation listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Swipe handlers for touchscreen & mobile drag
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    solveSwipe();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    touchEndX.current = e.clientX;
    solveSwipe();
  };

  const solveSwipe = () => {
    const diff = touchEndX.current - touchStartX.current;
    if (Math.abs(diff) > 85) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const ActiveComponent = slides[currentIndex].component;

  return (
    <div
      className="ppt select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* 顶部导航 (Top-Nav Bar matching index.css exactly) */}
      <div className="top-nav">
        <div className="logo">
          <h1>王晓娟晋升答辩</h1>
          {/* <p>LIVIS 理想同学 Quality Engineering &middot; AI Driven Testing</p> */}
        </div>

        {/* Dynamic Presentation Slide Tabs */}
        <div className="tabs">
          {slides.map((s, idx) => {
            const isActive = currentIndex === idx;
            return (
              <div
                key={s.id}
                className={`tab ${isActive ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              >
                <div className="num">{idx + 1}</div>
                <span>{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Content Window Area */}
      <div className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -22 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Action Controls for Presentation navigation */}
      <div
        className="fixed bottom-6 right-6 flex items-center justify-center gap-2 bg-white/90 backdrop-blur border border-indigo-100 p-2.5 rounded-2xl shadow-xl z-50 text-xs font-bold text-slate-700"
        style={{ pointerEvents: "auto" }}
      >
        <span className="px-2 font-mono" style={{ color: "#2d63ff" }}>
          P. {currentIndex + 1} / {slides.length}
        </span>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-slate-600 transition"
          title="上一页 [←]"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === slides.length - 1}
          className="w-8 h-8 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition"
          title="下一页 [→]"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

      {/* Keyboard support tip bar at bottom center */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/40 backdrop-blur-xs text-white/90 px-4 py-2 rounded-full text-xs font-semibold z-40 shadow-sm hidden md:flex items-center gap-1.5"
        style={{ pointerEvents: "none" }}
      >
        <i className="fa-solid fa-keyboard text-amber-300 animate-pulse" />
        <span>提示：支持键盘左右方向键（← / →）或滑标、触屏滑动切换PPT！</span>
      </div>
    </div>
  );
}

