/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

export default function SlideEnd() {
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
              <i className="fa-solid fa-flag-checkered"></i>
            </div>
            <div className="hero-title">感谢聆听</div>
            <div className="hero-sub font-semibold">
              欢迎评委老师提问与探讨，共同探索 AI 时代下的终极质量交付与工程未来！
            </div>
          </div>
        </div>
        <div className="footer-tip">Quality Engineering &middot; AI Driven Testing PPT Slide Deck - Page 6</div>
      </div>
    </motion.div>
  );
}
