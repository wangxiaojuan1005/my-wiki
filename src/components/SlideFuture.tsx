/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

export default function SlideFuture() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page active">
        <div className="hero">
          <div className="hero-inner">
            <div className="hero-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <div className="hero-title">未来规划</div>
            <div className="hero-sub font-semibold">
              深耕 AI 与测试交付工程纵深融合，建设自治平台；演进自愈用例与自诊断 Agent能力。
            </div>
          </div>
        </div>
        <div className="footer-tip">Quality Engineering &middot; AI Driven Testing PPT Slide Deck - Page 5</div>
      </div>
    </motion.div>
  );
}
