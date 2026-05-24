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
      <style>{`
        .s5-page {
          width: 100%;
          min-height: 100%;
          padding: 24px 40px 30px;
          background: radial-gradient(circle at top, #ffffff 0%, #F1F3F5 55%, #E8EDF4 100%);
        }

        /* TOP HEADER */
        .s5-top-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px 24px 10px;
          border-bottom: 3px solid #dbe4f1;
          margin-bottom: 13px;
        }

        .s5-top-title {
          font-size: 28px;
          font-weight: 900;
          color: #003A70;
          line-height: 1.2;
        }

        .s5-top-cards {
          display: flex;
          gap: 26px;
          align-items: flex-start;
        }

        .s5-top-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          min-width: 110px;
          border: 1px solid #dbe4f1;
          border-radius: 12px;
          padding: 10px 14px;
          background: #fff;
        }

        .s5-top-card i {
          color: #003A70;
          font-size: 30px;
          margin-top: 6px;
        }

        .s5-tc-label {
          font-size: 15px;
          font-weight: 900;
          color: #212529;
          margin-top: 2px;
        }

        .s5-tc-value {
          margin-top: 1px;
          font-size: 13px;
          line-height: 1.4;
          color: #495057;
          font-weight: 700;
        }

        .s5-top-divider {
          width: 1px;
          background: #CED4DA;
          height: 58px;
        }

        /* CARD */
        .s5-section-card {
          background: rgba(255, 255, 255, .86);
          border: 1px solid #CED4DA;
          border-radius: 28px;
          padding: 30px 28px 24px;
          position: relative;
          box-shadow: 0 4px 12px rgba(12, 35, 64, .03), inset 0 1px 0 rgba(255, 255, 255, .8);
          margin-bottom: 13px;
        }

        .s5-section-tag {
          position: absolute;
          top: 14px;
          left: 12px;
          height: 40px;
          padding: 0 28px;
          border-radius: 999px;
          background: linear-gradient(180deg, #00558B, #003A70);
          display: flex;
          align-items: center;
          color: #fff;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 1px;
          box-shadow: 0 5px 10px rgba(0, 58, 112, .25);
        }

        .s5-section-inner {
          margin-top: 42px;
        }

        /* GOAL BANNER */
        .s5-goal-banner {
          width: 100%;
          margin: 0 auto 28px;
          border-radius: 22px;
          border: 1.5px solid #CED4DA;
          background: linear-gradient(180deg, #ffffff, #E8EDF4);
          min-height: 59px;
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 18px 28px;
        }

        .s5-goal-icon {
          width: 94px;
          height: 94px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00558B;
          font-size: 35px;
          flex-shrink: 0;
        }

        .s5-goal-text {
          flex: 1;
          text-align: left;
          color: #003A70;
          font-size: 24px;
          line-height: 1.8;
          font-weight: 800;
        }

        /* STEPS */
        .s5-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 18px;
        }

        .s5-step-card {
          flex: 1;
          height: 246px;
          background: rgba(255, 255, 255, .92);
          border: 1.5px solid #CED4DA;
          border-radius: 26px;
          position: relative;
          padding: 56px 28px 28px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .8), 0 4px 8px rgba(0, 0, 0, .03);
        }

        .s5-step-number {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(180deg, #00558B, #003A70);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 900;
          box-shadow: 0 6px 10px rgba(0, 0, 0, .12);
        }

        .s5-step-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
        }

        .s5-step-header {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .s5-step-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
          color: #00558B;
          flex-shrink: 0;
        }

        .s5-step-title {
          font-size: 20px;
          color: #003A70;
          font-weight: 900;
          line-height: 1.3;
        }

        .s5-step-content ul {
          margin: 0;
          padding-left: 22px;
        }

        .s5-step-content li {
          font-size: 18px;
          line-height: 1.8;
          color: #003A70;
        }

        .s5-step-content li b {
          color: #C92A2A;
          font-weight: 900;
        }

        .s5-step-content li::marker {
          color: #00558B;
        }

        .s5-arrow {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #495057;
          font-size: 35px;
          margin-top: -12px;
        }

        /* INTRO BOX */
        .s5-intro-box {
          flex: 1;
          min-height: 98px;
          margin-bottom: 13px;
          border: 1.5px solid #CED4DA;
          border-radius: 24px;
          padding: 20px 24px;
          background: rgba(255, 255, 255, .82);
          display: flex;
          align-items: center;
          gap: 22px;
          font-size: 20px;
          line-height: 1.8;
          font-weight: 600;
          color: #003A70;
        }

        .s5-big-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #CED4DA;
          background: radial-gradient(circle at 30% 25%, #ffffff 0%, #E8EDF4 60%, #E8EDF4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00558B;
          font-size: 20px;
          box-shadow: inset 0 3px 6px rgba(255, 255, 255, .8), 0 4px 10px rgba(0, 0, 0, .05);
          flex-shrink: 0;
        }

        /* NOTE BOX */
        .s5-note-box {
          border-radius: 22px;
          border: 1.5px solid #CED4DA;
          background: linear-gradient(180deg, #ffffff, #E8EDF4);
          min-height: 82px;
          margin-bottom: 13px;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 18px 26px;
        }

        .s5-note-icon {
          width: 50px;
          height: 50px;
          border-radius: 20px;
          background: linear-gradient(180deg, #00558B, #003A70);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 20px;
          box-shadow: 0 8px 12px rgba(0, 0, 0, .12);
          flex-shrink: 0;
        }

        .s5-note-text {
          font-size: 18px;
          line-height: 1.8;
          color: #003A70;
        }

        .s5-note-text b {
          color: #00558B;
          font-size: 18px;
        }
      `}</style>

      <div className="s5-page">
        {/* TOP HEADER */}
        <div className="s5-top-header">
          <div className="s5-top-title">未来规划</div>

          <div className="s5-top-cards">
            <div className="s5-top-card">
              <i className="fa-solid fa-medal"></i>
              <div>
                <div className="s5-tc-label">目标职级: 16 级</div>
              </div>
            </div>

            <div className="s5-top-divider"></div>

            <div className="s5-top-card">
              <i className="fa-solid fa-bullseye"></i>
              <div>
                <div className="s5-tc-label">核心方向: 方法论输出·团队赋能</div>
              </div>
            </div>

            <div className="s5-top-divider"></div>

            <div className="s5-top-card">
              <i className="fa-solid fa-layer-group"></i>
              <div>
                <div className="s5-tc-label">覆盖业务: LIVIS APP · 融合云 · AgentOps</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: 个人工作目标与计划 */}
        <div className="s5-section-card">
          <div className="s5-section-tag">个人工作目标与计划</div>

          <div className="s5-section-inner">
            {/* Goal Banner */}
            <div className="s5-goal-banner">
              <div className="s5-goal-icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <div className="s5-goal-text">
                把 3 个业务线的经验提炼为可教学、可复制的方法论，
                将影响半径从"我做"扩展到"团队能用我的方法做"。
              </div>
            </div>

            {/* Steps */}
            <div className="s5-steps">
              {/* Step 1 */}
              <div className="s5-step-card">
                <div className="s5-step-number">1</div>
                <div className="s5-step-content">
                  <div className="s5-step-header">
                    <div className="s5-step-icon">
                      <i className="fa-solid fa-cloud"></i>
                    </div>
                    <div className="s5-step-title">AI测试活动改造辐射</div>
                  </div>
                  <ul>
                    <li>
                      将融合云测试活动梳理、AI改造
                      <br />扩展到<b>LIVIS理想汽车APP</b>新业务上
                    </li>
                  </ul>
                </div>
              </div>

              <div className="s5-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>

              {/* Step 2 */}
              <div className="s5-step-card">
                <div className="s5-step-number">2</div>
                <div className="s5-step-content">
                  <div className="s5-step-header">
                    <div className="s5-step-icon">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="s5-step-title">跨组织协作范式输出</div>
                  </div>
                  <ul>
                    <li>
                      将分析方法（<b>事实→线索→假设排除→事实链闭合</b>）提炼为标准分析框架<br />推广到其他多端协作业务场景（如 APP 与官网团队）
                    </li>
                  </ul>
                </div>
              </div>

              <div className="s5-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>

              {/* Step 3 */}
              <div className="s5-step-card">
                <div className="s5-step-number">3</div>
                <div className="s5-step-content">
                  <div className="s5-step-header">
                    <div className="s5-step-icon">
                      <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <div className="s5-step-title">LIVIS App 质量体系深化</div>
                  </div>
                  <ul>
                    <li>
                      <b>UI自动化</b>覆盖率达到 80%<br />Mock 车机端与实车解耦，<b>测试分层</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: 对目标职级的认知 */}
        <div className="s5-section-card">
          <div className="s5-section-tag">对目标职级的认知</div>

          <div className="s5-section-inner">
            <div className="s5-intro-box">
              <div className="s5-big-icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <div>
                16 级的核心价值，不只是个人交付结果，而是将成功经验抽象为标准方法，持续放大团队与业务影响力。
              </div>
            </div>

            <div className="s5-note-box">
              <div className="s5-note-icon">
                <i className="fa-solid fa-file-lines"></i>
              </div>
              <div className="s5-note-text">
                <b>目前已经在往这个方向走：</b>AI Skill已经在业务团队中落地复用；质量数仓覆盖20个业务团队数据度量
              </div>
            </div>

            <div className="s5-note-box">
              <div className="s5-note-icon">
                <i className="fa-solid fa-circle-exclamation"></i>
              </div>
              <div className="s5-note-text">
                <b>但整体来说，</b>
                个人经验提炼成可教学框架这件事做得还不够，目前更多还是停留在工具层面。
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
