/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

export default function SlideProject3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="proj-3"
    >
      <style>{`
        /* McKinsey Slide Color Language Scoped Specifically for .proj-3 */
        .proj-3 {
          --mck-navy: #0c2340;         /* Primary McKinsey Deep Navy */
          --mck-blue: #1d70b8;         /* Primary Accent Professional Blue */
          --mck-blue-bg: #ebf4fc;      /* Soft Ice Blue Fills */
          --mck-blue-border: #cbdceb;  /* Crisp Thin Soft Blue Outline */
          
          --mck-terracotta: #be4d38;   /* McKinsey Highlight Accent Terracotta/Rust Coral */
          --mck-terracotta-bg: #fcf4f2;/* Light Terracotta backdrop */
          --mck-terracotta-border: #f0ddd7;
          
          --mck-teal: #127743;         /* McKinsey Soft Success Teal/Green */
          --mck-teal-bg: #edf6f1;      /* Light Cream-Teal backdrop */
          --mck-teal-border: #d4ebd9;
          
          --mck-slate: #4a5568;        /* Body Secondary Label Grey */
          --mck-bg: #f5f7fa;           /* Background canvas */
          --mck-card-bg: #ffffff;
          --mck-border-divider: #d2dce6;
          
          margin: 0;
          background: var(--mck-bg);
          font-family: "PingFang SC", "Microsoft YaHei", "Inter", sans-serif;
          color: var(--mck-navy);
        }

        .proj-3 .page {
          width: 100%;
          max-width: 1920px;
          margin: 0 auto;
          padding: 24px;
          background: radial-gradient(circle at top left, #ffffff 0%, var(--mck-bg) 55%, #e6edf6 100%) !important;
          border-radius: 20px;
        }

        .proj-3 .title {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          border-bottom: 3px solid var(--mck-navy); /* Solid Underline McKinsey Style separator */
          padding-bottom: 16px;
        }

        .proj-3 .title-left h1 {
          font-size: 38px;
          font-weight: 850;
          color: var(--mck-navy) !important;
          letter-spacing: -0.5px;
          line-height: 1.25;
          margin-bottom: 4px;
        }

        .proj-3 .title-left p {
          font-size: 16px;
          color: var(--mck-slate) !important;
          font-weight: 600;
        }

        .proj-3 .top-stats {
          display: flex;
          gap: 14px;
        }

        .proj-3 .top-card {
          width: 190px;
          height: auto;
          min-height: 85px;
          background: var(--mck-card-bg) !important;
          border: 1px solid var(--mck-blue-border) !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 12px rgba(12, 35, 64, 0.03) !important;
          display: flex;
          align-items: center;
          gap: 12px !important;
          padding: 12px 14px !important;
          transition: all 0.2s ease;
        }

        .proj-3 .top-card:hover {
          transform: translateY(-2px);
          border-color: var(--mck-blue);
          box-shadow: 0 6px 16px rgba(12, 35, 64, 0.05);
        }

        .proj-3 .top-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px !important;
          background: var(--mck-blue-bg) !important;
          color: var(--mck-blue) !important;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px !important;
        }

        .proj-3 .top-card .num {
          font-size: 20px;
          font-weight: 850;
          color: var(--mck-navy) !important;
          line-height: 1.1;
        }

        .proj-3 .top-card .label {
          margin-top: 2px;
          font-size: 11px;
          color: var(--mck-slate) !important;
          font-weight: 600;
        }

        .proj-3 .section {
          background: var(--mck-card-bg) !important;
          border-radius: 18px !important;
          border: 1px solid var(--mck-border-divider) !important;
          box-shadow: 0 8px 24px rgba(12, 35, 64, 0.03) !important;
          margin-bottom: 24px;
          overflow: hidden;
          padding: 20px !important;
        }

        .proj-3 .sec-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px !important;
          border-bottom: none !important;
        }

        .proj-3 .sec-index {
          width: 34px;
          height: 34px;
          border-radius: 6px !important;
          background: var(--mck-navy) !important;
          color: #ffffff !important;
          font-size: 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: none !important;
        }

        .proj-3 .sec-title h2 {
          font-size: 24px;
          font-weight: 800;
          color: var(--mck-navy) !important;
          letter-spacing: -0.2px;
          margin: 0;
        }

        .proj-3 .grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1.2fr;
          gap: 20px;
        }

        .proj-3 .card {
          background: var(--mck-card-bg) !important;
          border-radius: 12px !important;
          border: 1px solid var(--mck-border-divider) !important;
          padding: 18px !important;
          box-shadow: none !important;
          display: flex;
          flex-direction: column;
        }

        .proj-3 .card-title {
          font-size: 18px;
          font-weight: 800;
          color: var(--mck-navy) !important;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-left: 4px solid var(--mck-blue) !important;
          padding-left: 10px;
          background: transparent !important;
        }

        .proj-3 .text {
          color: var(--mck-slate) !important;
          font-size: 14px !important;
          line-height: 1.6 !important;
          margin-bottom: 12px;
        }

        .proj-3 .danger-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .proj-3 .danger-item {
          background: var(--mck-terracotta-bg) !important;
          border: 1px solid var(--mck-terracotta-border) !important;
          border-radius: 8px !important;
          padding: 10px 12px !important;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px !important;
          color: var(--mck-navy) !important;
        }

        .proj-3 .danger-item i {
          color: var(--mck-terracotta) !important;
          margin-top: 2px;
        }

        .proj-3 .mini-box {
          background: var(--mck-blue-bg) !important;
          border: 1px solid var(--mck-blue-border) !important;
          border-radius: 12px !important;
          padding: 14px !important;
          margin-bottom: 12px;
        }

        .proj-3 .mini-box .mini-title {
          font-size: 15px !important;
          font-weight: 800 !important;
          color: var(--mck-navy) !important;
          margin-bottom: 6px;
        }

        .proj-3 .mini-box .mini-title i {
          color: var(--mck-blue) !important;
        }

        .proj-3 table {
          width: 100%;
          border-collapse: collapse;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .proj-3 th {
          padding: 8px 6px !important;
          font-size: 12px !important;
          font-weight: 700 !important;
          border-bottom: 2px solid #94a3b8 !important;
          border-right: 1px solid rgba(255,255,255,.15) !important;
          background: var(--mck-navy) !important;
          color: #ffffff !important;
        }

        .proj-3 td {
          padding: 6px !important;
          border: 1px solid #cbd5e1 !important;
          text-align: center !important;
          font-size: 12px !important;
          font-weight: 650 !important;
          color: var(--mck-navy) !important;
          background: #ffffff !important;
        }

        .proj-3 tbody tr:nth-child(even) td {
          background: #f8fafc !important;
        }

        .proj-3 .weight {
          color: var(--mck-blue) !important;
          font-weight: 800 !important;
        }

        .proj-3 .grade-row {
          display: flex;
          gap: 6px;
          margin-top: auto;
        }

        .proj-3 .grade {
          flex: 1;
          padding: 8px 4px !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          text-align: center;
          border-radius: 6px !important;
          box-shadow: none !important;
          color: #ffffff !important;
        }

        .proj-3 .g-a { background: var(--mck-teal) !important; }
        .proj-3 .g-b { background: #16a34a !important; }
        .proj-3 .g-c { background: var(--mck-blue) !important; }
        .proj-3 .g-d { background: #d97706 !important; }
        .proj-3 .g-e { background: #ea580c !important; }
        .proj-3 .g-f { background: var(--mck-terracotta) !important; }

        .proj-3 .stat-boxes {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 320px;
        }

        .proj-3 .stat {
          background: var(--mck-blue-bg) !important;
          border: 1px solid var(--mck-blue-border) !important;
          border-radius: 12px !important;
          padding: 16px !important;
          display: flex;
          flex-direction: column;
          gap: 4px;
          position: relative;
          box-shadow: none !important;
        }

        .proj-3 .stat i {
          position: absolute;
          right: 18px;
          top: 18px;
          font-size: 24px !important;
          color: var(--mck-blue) !important;
          opacity: 0.15;
        }

        .proj-3 .stat .big {
          font-size: 28px !important;
          font-weight: 850 !important;
          color: var(--mck-navy) !important;
        }

        .proj-3 .stat .small {
          font-size: 13px !important;
          font-weight: 600 !important;
          color: var(--mck-slate) !important;
        }

        .proj-3 .chart {
          flex: 1;
          background: #ffffff !important;
          border: 1px solid var(--mck-border-divider) !important;
          border-radius: 14px !important;
          padding: 20px !important;
          display: flex;
          flex-direction: column;
        }

        .proj-3 .chart-title {
          font-size: 16px !important;
          font-weight: 800 !important;
          color: var(--mck-navy) !important;
          margin-bottom: 24px !important;
        }

        .proj-3 .bar-wrap {
          flex: 1;
          height: 180px !important;
          background: #f1f5f9 !important;
          border-radius: 8px !important;
          width: 54px !important;
        }

        .proj-3 .bar {
          border-radius: 6px !important;
          transition: all 0.3s ease;
        }

        .proj-3 .bar.gray {
          background: #94a3b8 !important;  /* Prior Time */
        }

        .proj-3 .bar.blue {
          background: var(--mck-blue) !important; /* AI Time */
        }

        .proj-3 .bar span {
          font-size: 12px !important;
          font-weight: 800 !important;
          color: #ffffff !important;
        }

        .proj-3 .change {
          font-size: 13px !important;
          font-weight: 800 !important;
          padding: 3px 6px !important;
          border-radius: 4px !important;
        }

        .proj-3 .change.down {
          background: var(--mck-teal-bg) !important;
          color: var(--mck-teal) !important;
        }

        .proj-3 .effect {
          background: var(--mck-teal-bg) !important;
          border: 1px solid var(--mck-teal-border) !important;
          border-radius: 12px !important;
          padding: 16px !important;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px !important;
          box-shadow: none !important;
        }

        .proj-3 .effect i {
          font-size: 26px !important;
          color: var(--mck-teal) !important;
        }

        .proj-3 .effect b {
          color: var(--mck-navy) !important;
        }

        .proj-3 .layer {
          background: #ffffff !important;
          border: 1px solid var(--mck-border-divider) !important;
          border-radius: 12px !important;
          padding: 18px !important;
          box-shadow: none !important;
        }

        .proj-3 .layer-title {
          font-size: 17px !important;
          font-weight: 800 !important;
          color: var(--mck-navy) !important;
          border-bottom: 2px solid var(--mck-blue-border) !important;
          padding-bottom: 8px !important;
          margin-bottom: 16px !important;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .proj-3 .layer-title i {
          color: var(--mck-blue) !important;
        }

        .proj-3 .feedback {
          background: #ffffff !important;
          border: 1px solid var(--mck-border-divider) !important;
          border-radius: 12px !important;
          padding: 18px !important;
          box-shadow: none !important;
        }

        .proj-3 .fb {
          border-bottom: 1px solid #e2e8f0 !important;
          padding-bottom: 12px !important;
          margin-bottom: 12px !important;
        }

        .proj-3 .fb:last-child {
          border-bottom: none !important;
          padding-bottom: 0 !important;
          margin-bottom: 0 !important;
        }

        .proj-3 .result {
          background: #ffffff !important;
          border: 1px solid var(--mck-border-divider) !important;
          border-radius: 12px !important;
          padding: 18px !important;
          box-shadow: none !important;
        }

        .proj-3 .result-card {
          border-radius: 10px !important;
          padding: 14px !important;
          border: 1px solid var(--mck-border-divider) !important;
          transition: all 0.2s ease;
        }

        .proj-3 .result-card:hover {
          transform: translateY(-2px);
          border-color: var(--mck-teal-border);
          box-shadow: 0 4px 12px rgba(18, 119, 67, 0.04);
        }

        .proj-3 .result-card:nth-child(1) h4 { color: var(--mck-teal) !important; }
        .proj-3 .result-card:nth-child(1) i { color: var(--mck-teal) !important; }
        .proj-3 .result-card:nth-child(2) h4 { color: var(--mck-blue) !important; }
        .proj-3 .result-card:nth-child(2) i { color: var(--mck-blue) !important; }
        .proj-3 .result-card:nth-child(3) h4 { color: var(--mck-terracotta) !important; }
        .proj-3 .result-card:nth-child(3) i { color: var(--mck-terracotta) !important; }

        .proj-3 .result-card h4 {
          font-size: 15px !important;
          font-weight: 800 !important;
        }

        .proj-3 .result-card p {
          color: var(--mck-slate) !important;
          font-size: 13px !important;
          line-height: 1.5 !important;
          font-weight: 600 !important;
        }

        .proj-3 .bottom {
          background: var(--mck-blue-bg) !important;
          border: 1.5px solid var(--mck-blue-border) !important;
          border-radius: 12px !important;
          padding: 18px !important;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 24px !important;
          box-shadow: none !important;
        }

        .proj-3 .bottom i {
          font-size: 26px !important;
          color: var(--mck-blue) !important;
        }
      `}</style>
      <div className="page active">
        {/* Title area */}
        <div className="title">
          <div className="title-left">
            <h1>项目三：智能跃迁，LIVIS 理想同学 AI 生态建设与多维治理</h1>
            <p>搭建测试 AI 生态底座 + 创设大模型 7 维度治理红线 + AI 强渡计划推进 &amp; 师带徒薪火传承 8 优秀实践</p>
          </div>
          <div className="top-stats">
            <div className="top-card">
              <div className="top-icon"><i className="fa-solid fa-users"></i></div>
              <div>
                <div className="num">45 人</div>
                <div className="label">AI 强渡计划覆盖</div>
              </div>
            </div>
            <div className="top-card">
              <div className="top-icon"><i className="fa-solid fa-handshake-angle"></i></div>
              <div>
                <div className="num">100%</div>
                <div className="label">核心业务线通盖</div>
              </div>
            </div>
            <div className="top-card">
              <div className="top-icon"><i className="fa-solid fa-book-bookmark"></i></div>
              <div>
                <div className="num">1,300+ 份</div>
                <div className="label">提质方案在线通读次</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: AI 生态建设与治理 */}
        <div className="section">
          <div className="sec-title">
            <div className="sec-index">1</div>
            <h2>AI 实战攻防：理想同学 AI 生态建设与大模型 7 维度治理闭环 (P0级防御)</h2>
          </div>
          <div className="grid-3">
            {/* Column 1 */}
            <div className="card">
              <div className="card-title">
                <i className="fa-solid fa-triangle-exclamation"></i> 痛点背景与高危防区
              </div>
              <p className="text">
                随着大模型在智舱业务深度扎根，AI 在进行需求解读、用例翻译等测试工作中，如果大模型发生<b>幻觉、错误推理、语义脱位</b>，会直接引发严重测试漏测，属于最高危质量漏洞防线！传统通过人工通读核验，极其枯燥且单次大版本耗时耗力。
              </p>
              <div className="danger-list">
                <div className="danger-item">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span><b>幻觉逃逸：</b>大模型凭空篡改契约字段，测试依据失准！</span>
                </div>
                <div className="danger-item">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span><b>语义偏失：</b>PRD 更新后，大模型仍输出历史依赖，造成断变漏测。</span>
                </div>
                <div className="danger-item">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span><b>逻辑混乱：</b>车端多重路由下，模型由于关联参数缺失逻辑断线。</span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="card">
              <div className="card-title">
                <i className="fa-solid fa-shield-virus"></i> 生态治理：多维度防御链路
              </div>
              <div className="mini-box">
                <div className="mini-title"><i className="fa-solid fa-scale-balanced"></i> 多模型竞技平台一键拉通</div>
                <p className="text" style={{ fontSize: "14px" }}>
                  通过将一期至三期 <b>11 种自建模模型、开源微调模型</b> 接入竞技，对同段 PRD 一键输入，自动比对大模型语义冲突，找出谁在逃逸幻觉，精确捕获劣汰节点。
                </p>
              </div>
              <div className="mini-box" style={{ borderColor: "#a7e68a", background: "#f4fff0" }}>
                <div className="mini-title" style={{ color: "#15803d" }}><i className="fa-solid fa-shield-halved"></i> 最终防线治理卡边</div>
                <p className="text" style={{ fontSize: "14px", color: "#14532d" }}>
                  沉淀 <b>AI 漏测规避检查 7 维评估矩阵</b>。大模型对测试方案一键通读评审，秒级定位高危漏测因子！
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="card">
              <div className="card-title">
                <i className="fa-solid fa-star-half-stroke"></i> 大模型评价与 7 维分档治理卡规
              </div>
              <table style={{ marginBottom: "18px" }}>
                <thead>
                  <tr>
                    <th>评估特征</th>
                    <th>关注权重</th>
                    <th>检验技术标准</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 800 }}>字段解析一致性</td>
                    <td className="weight">0.25</td>
                    <td style={{ textAlign: "left", fontSize: "13px" }}>契约字段 100% 对齐契约协议</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 800 }}>语义逻辑匹配度</td>
                    <td className="weight">0.20</td>
                    <td style={{ textAlign: "left", fontSize: "13px" }}>判定核心路径、备用分支是否完备</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 800 }}>上下文断变感知</td>
                    <td className="weight">0.20</td>
                    <td style={{ textAlign: "left", fontSize: "13px" }}>微小需求变动能够一秒精确感知</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 800 }}>容错防呆纠偏</td>
                    <td className="weight">0.15</td>
                    <td style={{ textAlign: "left", fontSize: "13px" }}>输入脏假数据大模型拒绝机制</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 800 }}>时效耗时底线</td>
                    <td className="weight">0.10</td>
                    <td style={{ textAlign: "left", fontSize: "13px" }}>单次请求判定时间绝对 &lt; 5s</td>
                  </tr>
                </tbody>
              </table>

              <div className="grade-row">
                <div className="grade g-a">A档 (极优)</div>
                <div className="grade g-b">B档 (推荐)</div>
                <div className="grade g-c">C档 (合格)</div>
                <div className="grade g-d">D档 (警戒)</div>
                <div className="grade g-e">E档 (不良)</div>
                <div className="grade g-f">F档 (熔断)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: AI 强渡计划与提效数据 */}
        <div className="section">
          <div className="sec-title">
            <div className="sec-index">2</div>
            <h2>数字说话：测试人员全员 AI 技能“强渡计划”与提效爆发成果</h2>
          </div>
          <div className="stats-row">
            {/* Left */}
            <div className="stat-boxes">
              <div className="stat">
                <i className="fa-solid fa-sailboat"></i>
                <div className="big">45 名成员</div>
                <div className="small">全员测试不落单，100% 强渡上岸</div>
              </div>
              <div className="stat">
                <i className="fa-solid fa-bullseye"></i>
                <div className="big">98% ↑</div>
                <div className="small">在手业务需求大范围 AI 全覆盖率</div>
              </div>
              <div className="stat" style={{ borderColor: "#86efac" }}>
                <i className="fa-solid fa-bolt-lightning" style={{ color: "#16a34a" }}></i>
                <div className="big" style={{ color: "#16a34a" }}>10+ 典型场景</div>
                <div className="small">测试痛点被 AI 强力推翻拦截</div>
              </div>
            </div>

            {/* Right Group column chart */}
            <div className="chart">
              <div className="chart-title">自建 AI 典型场景改造工时对比 (单次耗时降低/分钟级)</div>
              <div className="bars">
                
                <div className="bar-group">
                  <div className="bar-wrap">
                    <div className="bar gray" style={{ height: "180px" }}><span>120m</span></div>
                    <div className="bar blue" style={{ height: "8px" }}><span>5m</span></div>
                  </div>
                  <div>PRD 澄清分析</div>
                  <div className="change down">省时 -95%</div>
                </div>

                <div className="bar-group">
                  <div className="bar-wrap">
                    <div className="bar gray" style={{ height: "200px" }}><span>180m</span></div>
                    <div className="bar blue" style={{ height: "45px" }}><span>45m</span></div>
                  </div>
                  <div>用例编写设计</div>
                  <div className="change down">省时 -75%</div>
                </div>

                <div className="bar-group">
                  <div className="bar-wrap">
                    <div className="bar gray" style={{ height: "100px" }}><span>90m</span></div>
                    <div className="bar blue" style={{ height: "10px" }}><span>10m</span></div>
                  </div>
                  <div>信息流追查 Trace</div>
                  <div className="change down">省时 -88%</div>
                </div>

                <div className="bar-group">
                  <div className="bar-wrap">
                    <div className="bar gray" style={{ height: "160px" }}><span>150m</span></div>
                    <div className="bar blue" style={{ height: "20px" }}><span>20m</span></div>
                  </div>
                  <div>缺陷定位诊断</div>
                  <div className="change down">省时 -86%</div>
                </div>

              </div>
            </div>
          </div>

          <div className="effect" style={{ marginTop: "18px" }}>
            <i className="fa-solid fa-trophy"></i>
            <div>
              <b>强渡核心成效：</b>测试日常执行时间大额剔去水分，全员彻底甩开无谓的手工重复点点点，将 <b>70% 繁杂机械时间释放</b> 倾注于高质量技术架构研发中，带领团队走入质量技术深水区！
            </div>
          </div>
        </div>

        {/* Section 3: 薪火传承培养 */}
        <div className="section" style={{ marginBottom: "0" }}>
          <div className="sec-title">
            <div className="sec-index">3</div>
            <h2>薪火相传：测试团队“师带徒”良性培养基石与 8 杰出实践战果</h2>
          </div>
          <div className="train-grid">
            {/* Left */}
            <div className="layer bg-white">
              <div className="layer-title"><i className="fa-solid fa-graduation-cap"></i> 阶梯式师带徒良性人才梯队培育体系</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", fontWeight: "bold" }}>
                <div style={{ background: "#fef3c7", border: "1px solid #fde68a", padding: "10px", borderRadius: "10px", color: "#b45309" }}>
                  <b>🏆 高阶种子 (专家带骨干)：</b>聚焦 AI 提质测试前沿技术架构攻关，负责自研能力沉淀输出底座。
                </div>
                <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "10px", borderRadius: "10px", color: "#1d4ed8" }}>
                  <b>🌟 骨干成员 (骨干带基础)：</b>认领核心业务线 Owner 哨岗职责，保障日常需求卡规秩序落地。
                </div>
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "10px", borderRadius: "10px", color: "#15803d" }}>
                  <b>🌱 初阶基础 (普及与跟跑)：</b>熟练熟掌握 10 项以上在手 AI 单兵 Skill 开箱即用，提升日常测试交付基础。
                </div>
              </div>

              <div className="feedback" style={{ marginTop: "18px" }}>
                <div className="fb">
                  <b>🧑‍🎓 徒弟反馈 A (新晋主力)：</b>
                  “以前入职测试两眼一黑，全凭师兄口传绝学和文档海洋，难以沉浸。跟着師父一帮一，1个月直接上手 AI 提效，大声说彻底看清了全景契约！”
                </div>
                <div className="fb">
                  <b>👨‍🏫 师傅反馈 B (核心资深)：</b>
                  “以前每天忙于中转各种研发云端提测试的信息，头晕脑胀、根本没闲心带团队。自从第一、二板斧斩下来，自己不包揽，反而有了足够时间，给徒弟做核心技术指导，大赞良性梯队爆发！”
                </div>
              </div>
            </div>

            {/* Right Column: 8 Outstanding Practices Grid */}
            <div className="card">
              <div className="card-title">
                <i className="fa-solid fa-gem"></i> 测试技术沉淀：8 大标志性优秀实践成果
              </div>
              <div className="result" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                
                <div className="result-card">
                  <i className="fa-solid fa-file-pdf"></i>
                  <h4>① PRD一键澄清</h4>
                  <p>自动检测设计文档逻辑漏洞、边界冲突</p>
                </div>

                <div className="result-card">
                  <i className="fa-solid fa-code-pull-request"></i>
                  <h4>② 分支协议比对</h4>
                  <p>Daily 集成接口变动毫秒捕获告警，阻逃逸</p>
                </div>

                <div className="result-card">
                  <i className="fa-solid fa-database"></i>
                  <h4>③ 虚拟契约建桩</h4>
                  <p>模拟智舱车联复杂路由脱车自闭验证，省硬件</p>
                </div>

                <div className="result-card">
                  <i className="fa-solid fa-gears"></i>
                  <h4>④ 日志秒级自诊</h4>
                  <p>千行 Trace Log 智能提取，诊断率高升</p>
                </div>

                <div className="result-card">
                  <i className="fa-solid fa-chart-column"></i>
                  <h4>⑤ 漏损饱和大屏</h4>
                  <p>工时与系统空跑动态纠偏，高效统包</p>
                </div>

                <div className="result-card">
                  <i className="fa-solid fa-clipboard-check"></i>
                  <h4>⑥ 方案自动通读</h4>
                  <p>自动关联契约模型，生成功能全热图</p>
                </div>

                <div className="result-card">
                  <i className="fa-solid fa-users-viewfinder"></i>
                  <h4>⑦ 缺陷智能降本</h4>
                  <p>提报模版智能纠错，缺陷回流时间降</p>
                </div>

                <div className="result-card">
                  <i className="fa-solid fa-medal"></i>
                  <h4>⑧ 7评大模型卡口</h4>
                  <p>拦截 AI 幻觉，不卡无谓低质量模型登场</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* persistent bottom */}
        <div className="bottom">
          <i className="fa-solid fa-quote-left"></i>
          <span><b>技术带路，质量保驾，薪火传承，久久为功：</b>质量建设没有捷径，我们将继续用 AI 深挖效能上限，用机制坚守质量下限，推动智舱测试工程持续走向自动化、平台化、自成长化的全新未来！</span>
        </div>

        <div className="footer-tip">Quality Engineering &middot; AI Driven Testing PPT Slide Deck - Page 4</div>
      </div>
    </motion.div>
  );
}
