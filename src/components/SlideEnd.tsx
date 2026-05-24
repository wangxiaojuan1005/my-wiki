/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import "./SlideEnd.css";

export default function SlideEnd() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      <div className="se-page">

        <div className="se-top-header">

          <div className="se-top-left">
            {/* <div className="se-top-title">晋升答辩</div> */}
          </div>

        </div>

        <div className="se-main-content">

          <div className="se-thank-icon">
            <i className="fa-solid fa-heart"></i>
          </div>

          <div className="se-thank-title">感谢评委老师！</div>

          <div className="se-thank-sub">期待批评指正 · 持续优化成长 · 共建质量价值</div>

          <div className="se-divider-line"></div>

        </div>

      </div>

    </motion.div>
  );
}
