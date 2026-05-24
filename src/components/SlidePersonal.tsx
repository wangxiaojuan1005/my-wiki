/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import "./SlidePersonal.css";

export default function SlidePersonal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      <div className="sp-page">

          <div className="sp-top-header">

            <div className="sp-top-left">
              <div className="sp-top-title">个人综述</div>

            </div>

          </div>

        <div className="sp-layout">

          <aside className="sp-sidebar">

            <div className="sp-name">王晓娟</div>

            <div className="sp-role">测试研发工程师</div>

            <div className="sp-side-section">
              <div className="sp-side-title">
                <i className="fa-solid fa-bullseye"></i>
                <span>目标职级： 16 级</span>
              </div>
            </div>

            <div className="sp-side-section">
              <div className="sp-side-title">
                <i className="fa-solid fa-layer-group"></i>
                <span>融合云业务<br />AgentOps<br />LIVIS理想同学APP</span>
              </div>
            </div>

            <div className="sp-side-section">
              <div className="sp-side-title">
                <i className="fa-solid fa-trophy"></i>
                <span>          <span className="sp-highlight">25年底获评优秀个人</span></span>
              </div>

            </div>
             <div className="sp-side-section">
              <div className="sp-side-title">        
              </div>

            </div>

          </aside>

          <main className="sp-main">

            <div className="sp-top-row" style={{ marginTop: "30px" }}>

              <section style={{ borderRadius: "12px", background: "#fff", border: "1px solid #CED4DA", padding: "28px 16px", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "14px", boxShadow: "0 2px 8px rgba(0,0,0,.05)" }}>

                <i className="fa-solid fa-bullseye" style={{ fontSize: "46px", color: "#003A70", flexShrink: 0 }}></i>

                <div style={{ fontSize: "32px", fontWeight: 900, color: "#003A70", flexShrink: 0 }}>核心定位</div>

                <div style={{ fontSize: "18px", lineHeight: "1.6", color: "#495057", fontWeight: 700 }}>
                  融合云 & AgentOps业务线的<span style={{ color: "#C92A2A" }}>核心质量 Owner</span>，LIVIS理想汽车App 质量体系<span style={{ color: "#C92A2A" }}>从 0 到 1 的唯一建设者</span>。
                </div>

              </section>

            </div>

            <div className="sp-project-title">
             关键成果
            </div>

            <div className="sp-projects">

              <section className="sp-project-card">

                <div className="sp-project-header">
                  <div className="sp-project-no">01</div>

                  <div className="sp-project-name">
                    效率 × 质量双线并行 — 融合云&AgentOps
                  </div>
                </div>

                <div className="sp-project-body">

                  <div className="sp-module" style={{ padding: "28px 16px" }}>

                    <div className="sp-module-head">
                      <div className="sp-module-icon">
                        <i className="fa-solid fa-lightbulb"></i>
                      </div>

                      <div>
                        <div className="sp-module-title">
                          效率线（释放人力）
                        </div>
                      </div>
                    </div>

                    <div className="sp-metric-grid">

                      <div className="sp-metric">
                        <div className="sp-metric-big">1:8</div>
                        <div className="sp-metric-small">
                          测开比
                        </div>
                      </div>

                      <div className="sp-metric">
                        <div className="sp-metric-big">2天</div>
                        <div className="sp-metric-small">
                          测试窗口
                        </div>
                      </div>

                      <div className="sp-metric">
                        <div className="sp-metric-big">1700+</div>
                        <div className="sp-metric-small">
                          自动化<br />
                        </div>
                      </div>

                      <div className="sp-metric">
                        <div className="sp-metric-big">23</div>
                        <div className="sp-metric-small">
                          AI 改造<br />
                        </div>
                      </div>

                    </div>

                    <div className="sp-highlight-box">

                      <div className="sp-highlight-item">
                        <div className="sp-highlight-num">单次迭代提效 66%</div>

                        <div className="sp-highlight-desc">
                          （2.6 天 → 不到 1 天）
                        </div>
                      </div>

                      <div className="sp-highlight-item">
                        <div className="sp-highlight-num">Skill 辐射 11</div>

                        <div className="sp-highlight-desc">
                          条业务线
                        </div>
                      </div>

                    </div>

                  </div>

                  <div className="sp-module" style={{ padding: "28px 16px" }}>

                    <div className="sp-module-head">
                      <div className="sp-module-icon">
                        <i className="fa-solid fa-shield"></i>
                      </div>

                      <div>
                        <div className="sp-module-title">
                          质量线（全局共建）
                        </div>
                      </div>
                    </div>

                    <div className="sp-highlight-box">

                      <div className="sp-highlight-item">
                        <div className="sp-highlight-num">三大手段+1牵引</div>

                        <div className="sp-highlight-desc">

                        </div>
                      </div>

                      <div className="sp-highlight-item">
                        <div className="sp-highlight-num">逃逸率↓60.8%</div>

                        <div className="sp-highlight-desc">

                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </section>

              <section className="sp-project-card">

                <div className="sp-project-header">
                  <div className="sp-project-no">02</div>

                  <div className="sp-project-name">
                    LIVIS App 从 0 到 1
                  </div>
                </div>

                <div className="sp-project-body">

                  <div className="sp-module" style={{ padding: "28px 16px" }}>

                    <div className="sp-module-head">
                      <div className="sp-module-icon">
                        <i className="fa-solid fa-shield-halved"></i>
                      </div>

                      <div>
                        <div className="sp-module-title">痛点识别</div>
                      </div>
                    </div>

                    <div className="sp-metric-grid">

                      <div className="sp-metric">
                        <div className="sp-metric-big">45个</div>
                        <div className="sp-metric-small">团队问题</div>
                      </div>

                      <div className="sp-metric">
                        <div className="sp-metric-big">3大</div>
                        <div className="sp-metric-small">核心痛点</div>
                      </div>

                      <div className="sp-metric">
                        <div className="sp-metric-big">2个</div>
                        <div className="sp-metric-small">提效方案</div>
                      </div>

                    </div>

                  </div>

                  <div className="sp-module" style={{ padding: "28px 16px" }}>

                    <div className="sp-module-head">
                      <div className="sp-module-icon">
                        <i className="fa-solid fa-chart-simple"></i>
                      </div>

                      <div>
                        <div className="sp-module-title">测试场景升级</div>
                      </div>
                    </div>

                    <div className="sp-pyramid">
                      <div className="sp-p-item sp-p1">L4 bugfix</div>
                      <div className="sp-p-item sp-p2">L3 E2E</div>
                      <div className="sp-p-item sp-p3">L2 集成回归</div>
                      <div className="sp-p-item sp-p4">L1 功能验证</div>
                    </div>

                  </div>

                </div>

              </section>

              <section className="sp-project-card">

                <div className="sp-project-header">
                  <div className="sp-project-no">03</div>

                  <div className="sp-project-name">
                    AI 生态建设 — 治理 + 赋能
                  </div>
                </div>

                <div className="sp-project-body">

                  <div className="sp-module" style={{ padding: "12px 6px", flex: "none" }}>

                    <div className="sp-module-head" style={{ marginBottom: 0 }}>
                      <div className="sp-module-icon">
                        <i className="fa-solid fa-atom"></i>
                      </div>

                      <div>
                        <div className="sp-module-title">
                          Skill质量评估
                        </div>
                      </div>
                    </div>

                    <ul className="sp-govern-list">
                    </ul>

                    <div className="sp-radar">
                      <div className="sp-radar-fill"></div>
                      <div className="sp-radar-center">7 维度</div>
                    </div>

                  </div>

                  <div className="sp-module" style={{ padding: "2px 6px" }}>

                    <div className="sp-module-head">
                      <div className="sp-module-icon">
                        <i className="fa-solid fa-gears"></i>
                      </div>

                      <div>
                        <div className="sp-module-title">
                          AI 团队内赋能
                        </div>
                      </div>
                    </div>

                    <div className="sp-cycle">

                      <div className="sp-cycle-center">
                        赋能<br />团队
                      </div>

                      <div className="sp-cycle-label sp-c1">
                        分享<br />思路
                      </div>

                      <div className="sp-cycle-label sp-c2">
                        沉淀<br />模板
                      </div>

                      <div className="sp-cycle-label sp-c3">
                        赋能<br />团队
                      </div>

                      <div className="sp-cycle-label sp-c4">
                        场景<br />孵化
                      </div>

                    </div>

                  </div>

                    </div>

              </section>

            </div>

          </main>

        </div>

      </div>
    </motion.div>
  );
}
