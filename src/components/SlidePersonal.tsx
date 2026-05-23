/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

export default function SlidePersonal() {
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
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="hero-title">个人综述</div>
            <div className="hero-sub font-semibold">
              聚焦于前沿测试交付工程中 AI 实战赋能、质量体系保障建设与平台化能力沉淀，打通高效协作闭环。
            </div>
          </div>
        </div>
        <div className="footer-tip">Quality Engineering &middot; AI Driven Testing PPT Slide Deck - Page 1</div>
      </div>
    </motion.div>
  );
}
