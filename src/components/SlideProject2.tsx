/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

export default function SlideProject2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="proj-2"
    >
      <style>{`
        /* McKinsey Slide Color Language Scoped Specifically for .proj-2 */
        .proj-2 {
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

        .proj-2 .page {
          width: 100%;
          max-width: 1920px;
          margin: 0 auto;
          padding: 24px;
          background: radial-gradient(circle at top left, #ffffff 0%, var(--mck-bg) 55%, #e6edf6 100%);
          border-radius: 20px;
        }

        .proj-2 .title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          border-bottom: 3px solid var(--mck-navy); /* Solid Underline McKinsey Style separator */
          padding-bottom: 16px;
        }

        .proj-2 .main-title {
          font-size: 38px;
          font-weight: 850;
          color: var(--mck-navy);
          letter-spacing: -0.5px;
          line-height: 1.25;
        }

        .proj-2 .sub-title {
          margin-top: 10px;
          font-size: 19px;
          color: var(--mck-slate);
          font-weight: 600;
        }

        .proj-2 .top-metrics {
          display: flex;
          gap: 14px;
        }

        .proj-2 .metric-card {
          width: 165px;
          height: 105px;
          background: var(--mck-card-bg);
          border: 1px solid var(--mck-blue-border);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(12, 35, 64, 0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          transition: all 0.2s ease;
        }

        .proj-2 .metric-card:hover {
          transform: translateY(-2px);
          border-color: var(--mck-blue);
          box-shadow: 0 6px 16px rgba(12, 35, 64, 0.05);
        }

        .proj-2 .metric-card i {
          font-size: 24px;
          color: var(--mck-blue);
          margin-bottom: 6px;
        }

        .proj-2 .metric-card .num {
          font-size: 26px;
          font-weight: 800;
          color: var(--mck-navy);
          line-height: 1.1;
        }

        .proj-2 .metric-card .txt {
          margin-top: 4px;
          font-size: 14px;
          color: var(--mck-slate);
          font-weight: 700;
        }

        .proj-2 .section {
          background: var(--mck-card-bg);
          border-radius: 18px;
          border: 1px solid var(--mck-border-divider);
          box-shadow: 0 8px 24px rgba(12, 35, 64, 0.03);
          margin-bottom: 24px;
          overflow: hidden;
        }

        .proj-2 .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 24px 10px;
        }

        .proj-2 .section-index {
          width: 34px;
          height: 34px;
          border-radius: 6px;
          background: var(--mck-navy);
          color: #ffffff;
          font-size: 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .proj-2 .section-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--mck-navy);
          letter-spacing: -0.2px;
        }

        .proj-2 .section-desc {
          font-size: 16px;
          color: var(--mck-slate);
          margin-left: 8px;
          font-weight: 600;
        }

        .proj-2 .section-body {
          padding: 12px 24px 24px;
        }

        .proj-2 .grid-2 {
          display: grid;
          grid-template-columns: 1.25fr 0.9fr;
          gap: 22px;
        }

        .proj-2 .grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }

        .proj-2 .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .proj-2 .card {
          background: var(--mck-card-bg);
          border-radius: 12px;
          border: 1px solid var(--mck-border-divider);
          padding: 20px;
          box-shadow: none; /* Corporate flat presentation cards */
        }

        .proj-2 .card-title {
          font-size: 18px;
          font-weight: 800;
          color: var(--mck-navy);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-left: 4px solid var(--mck-blue); /* Solid Elegant Left accent bar */
          padding-left: 10px;
        }

        .proj-2 .steps {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .proj-2 .step-card {
          flex: 1;
          min-height: 200px;
          border-radius: 12px;
          padding: 20px;
          background: var(--mck-card-bg);
          border: 1px solid var(--mck-border-divider);
          position: relative;
          transition: all 0.2s ease;
        }

        .proj-2 .step-card:hover {
          border-color: var(--mck-blue);
          background: var(--mck-blue-bg);
        }

        .proj-2 .step-card .num {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .proj-2 .blue { background: var(--mck-navy); }
        .proj-2 .green { background: var(--mck-teal); }
        .proj-2 .orange { background: var(--mck-terracotta); }
        .proj-2 .purple { background: #5a2cf2; }

        .proj-2 .step-card h4 {
          font-size: 18px;
          margin: 0 0 10px;
          color: var(--mck-navy);
          font-weight: 800;
        }

        .proj-2 .step-card p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--mck-slate);
          margin: 0;
          font-weight: 600;
        }

        .proj-2 .step-icon {
          position: absolute;
          right: 14px;
          bottom: 14px;
          font-size: 54px;
          opacity: .06;
          color: var(--mck-navy);
        }

        .proj-2 .arrow {
          font-size: 24px;
          color: var(--mck-blue);
          font-weight: 800;
        }

        .proj-2 table {
          width: 100%;
          border-collapse: collapse;
          overflow: hidden;
          border-radius: 8px;
        }

        .proj-2 thead {
          background: var(--mck-navy);
          color: #ffffff;
        }

        .proj-2 th {
          padding: 12px 10px;
          font-size: 15px;
          font-weight: 700;
          border-bottom: 2px solid #94a3b8;
          border-right: 1px solid rgba(255,255,255,.15);
        }

        .proj-2 td {
          padding: 10px;
          border: 1px solid #cbd5e1;
          text-align: center;
          font-size: 14px;
          font-weight: 650;
          color: var(--mck-navy);
        }

        .proj-2 tbody tr:nth-child(even) {
          background: #f8fafc;
        }

        .proj-2 tbody tr:hover {
          background: var(--mck-blue-bg);
        }

        .proj-2 .green-text { color: var(--mck-teal); }
        .proj-2 .orange-text { color: var(--mck-terracotta); }
        .proj-2 .blue-text { color: var(--mck-blue); }

        .proj-2 .skill-map {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 20px;
          align-items: center;
        }

        .proj-2 .center-circle {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          border: 3px dashed var(--mck-blue-border);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--mck-navy);
          font-size: 18px;
          font-weight: 800;
          background: var(--mck-blue-bg);
          padding: 14px;
        }

        .proj-2 .skill-list {
          display: grid;
          gap: 12px;
        }

        .proj-2 .skill-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid var(--mck-border-divider);
          border-radius: 10px;
          padding: 12px 16px;
          background: var(--mck-card-bg);
        }

        .proj-2 .skill-item h5 {
          margin: 0;
          font-size: 15px;
          color: var(--mck-navy);
          font-weight: 800;
        }

        .proj-2 .skill-item span {
          color: var(--mck-slate);
          font-size: 13px;
          font-weight: 600;
        }

        .proj-2 .skill-item .right {
          color: var(--mck-blue);
          font-size: 14px;
          font-weight: 800;
          background: var(--mck-blue-bg);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid var(--mck-blue-border);
        }

        .proj-2 .timeline {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: space-between;
          width: 100%;
        }

        .proj-2 .timeline-card {
          flex: 1;
          height: 120px;
          border-radius: 8px;
          border: 1px solid var(--mck-border-divider);
          background: #ffffff;
          padding: 12px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: none;
        }

        .proj-2 .cross {
          position: absolute;
          right: 10px;
          bottom: 10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--mck-terracotta);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
        }

        .proj-2 .check {
          position: absolute;
          right: 10px;
          bottom: 10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--mck-teal);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
        }

        .proj-2 .tl-v-title {
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 4px;
          line-height: 1.1;
        }

        .proj-2 .tl-v-blue { color: var(--mck-blue); }
        .proj-2 .tl-v-orange { color: var(--mck-terracotta); }

        .proj-2 .tl-v4 {
          background: var(--mck-terracotta-bg);
          border-color: var(--mck-terracotta-border);
        }

        .proj-2 .tl-tip-box {
          width: 270px;
          height: 120px;
          border-radius: 8px;
          border: 1px dashed var(--mck-blue-border);
          background: var(--mck-blue-bg);
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .proj-2 .tl-tip-title {
          text-align: center;
          font-size: 14px;
          font-weight: 855;
          color: var(--mck-navy);
          margin-bottom: 6px;
        }

        .proj-2 .tl-tip {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
        }

        .proj-2 .tl-tip:last-child {
          margin-bottom: 0;
        }

        .proj-2 .tl-tip-icon {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--mck-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .proj-2 .tl-tip-icon i {
          color: #fff;
          font-size: 8px;
        }

        .proj-2 .tl-tip span {
          font-size: 11px;
          line-height: 1.3;
          color: var(--mck-navy);
          font-weight: 700;
        }

        .proj-2 .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 18px;
        }

        .proj-2 .stat {
          background: #ffffff;
          border: 1px solid var(--mck-border-divider);
          border-radius: 10px;
          padding: 16px;
          text-align: center;
        }

        .proj-2 .stat .big {
          font-size: 34px;
          color: var(--mck-navy);
          font-weight: 800;
          line-height: 1.1;
        }

        .proj-2 .stat .label {
          margin-top: 6px;
          color: var(--mck-slate);
          font-size: 14px;
          font-weight: 700;
        }

        .proj-2 .chart-box {
          height: 190px;
          border-radius: 12px;
          background: linear-gradient(180deg, #ffffff 0%, var(--mck-blue-bg) 100%);
          border: 1px solid var(--mck-blue-border);
          position: relative;
          overflow: hidden;
          padding: 16px;
        }

        .proj-2 .line {
          position: absolute;
          left: 60px;
          right: 60px;
          top: 85px;
          height: 3px;
          background: var(--mck-blue);
          transform: rotate(-7deg);
          border-radius: 10px;
        }

        .proj-2 .dot {
          width: 14px;
          height: 14px;
          background: var(--mck-navy);
          border-radius: 50%;
          position: absolute;
          border: 2px solid #ffffff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        }

        .proj-2 .platform-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .proj-2 .mini-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 12px;
        }

        .proj-2 .mini {
          border-radius: 8px;
          background: var(--mck-blue-bg);
          border: 1px solid var(--mck-blue-border);
          padding: 10px;
          text-align: center;
        }

        .proj-2 .mini .n {
          font-size: 18px;
          font-weight: 800;
          color: var(--mck-navy);
        }

        .proj-2 .mini .t {
          font-size: 12px;
          margin-top: 2px;
          color: var(--mck-slate);
          font-weight: 700;
        }

        .proj-2 .dash-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 14px;
        }

        .proj-2 .dash {
          height: 140px;
          border-radius: 10px;
          background: #ffffff;
          border: 1px solid var(--mck-border-divider);
          padding: 12px;
          position: relative;
          overflow: hidden;
        }

        .proj-2 .dash-title {
          font-size: 13px;
          font-weight: 800;
          color: var(--mck-navy);
          margin-bottom: 8px;
        }

        .proj-2 .bar {
          height: 8px;
          background: var(--mck-blue);
          border-radius: 10px;
          margin-bottom: 8px;
        }

        .proj-2 .pie {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: conic-gradient(var(--mck-navy) 0 70%, var(--mck-terracotta) 70% 85%, var(--mck-teal) 85% 100%);
          margin: 4px auto;
        }

        .proj-2 .pk-card {
          min-height: 155px;
          border-radius: 12px;
          border: 1px solid var(--mck-blue-border);
          background: #ffffff;
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          box-shadow: none;
        }

        .proj-2 .pk-card:hover {
          border-color: var(--mck-blue);
        }

        .proj-2 .pk-title {
          text-align: center;
          font-size: 16px;
          font-weight: 800;
          color: var(--mck-navy);
          margin-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 6px;
        }

        .proj-2 .pk-title span {
          font-size: 12px;
          color: var(--mck-slate);
          font-weight: 500;
          margin-left: 4px;
        }

        .proj-2 .pk-metrics {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 10px;
        }

        .proj-2 .pk-metric {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .proj-2 .pk-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: var(--mck-blue-bg);
          border: 1px solid var(--mck-blue-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mck-blue);
          font-size: 14px;
        }

        .proj-2 .pk-num {
          font-size: 16px;
          line-height: 1.1;
          font-weight: 800;
          color: var(--mck-navy);
        }

        .proj-2 .pk-label {
          font-size: 12px;
          line-height: 1.2;
          color: var(--mck-slate);
          font-weight: 700;
          white-space: nowrap;
        }

        .proj-2 .footer-note {
          margin-top: 10px;
          font-size: 14px;
          color: var(--mck-slate);
          line-height: 1.5;
          font-weight: 600;
        }
      `}</style>

      <div className="page active">
        {/* 顶部 */}
        <div className="title-row">
          <div>
            <div className="main-title">
              项目二：融合云 &amp; AgentOps 业务支撑
            </div>
            <div className="sub-title">
              AI 提效 + 自动化体系 + 质量运营 + 经验平台化，构建可复制的测试能力体系
            </div>
          </div>

          <div className="top-metrics">
            <div className="metric-card">
              <i className="fa-solid fa-cubes"></i>
              <div className="num">23+</div>
              <div className="txt">测试活动梳理</div>
            </div>

            <div className="metric-card">
              <i className="fa-solid fa-layer-group"></i>
              <div className="num">1700+</div>
              <div className="txt">自动化用例</div>
            </div>

            <div className="metric-card">
              <i className="fa-solid fa-chart-line"></i>
              <div className="num">385</div>
              <div className="txt">测试报告管理</div>
            </div>

            <div className="metric-card">
              <i className="fa-solid fa-users"></i>
              <div className="num">11+</div>
              <div className="txt">AI Skill辐射业务线</div>
            </div>
          </div>
        </div>

        {/* 第一部分 */}
        <div className="section">
          <div className="section-header">
            <div className="section-index">1</div>
            <div>
              <span className="section-title">AI 全链路测试活动改造</span>
              <span className="section-desc">（可复制的三步法）</span>
            </div>
          </div>

          <div className="section-body">
            <div className="grid-2">
              {/* 左 */}
              <div>
                <div className="steps">
                  <div className="step-card">
                    <div className="num blue">1</div>
                    <h4>先摸清家底</h4>
                    <p>
                      梳理 23 个测试活动<br />
                      量化耗时占比，建立<br />
                      &ldquo;测试活动全集&rdquo;
                    </p>
                    <i className="fa-solid fa-chart-column step-icon"></i>
                  </div>

                  <div className="arrow">➜</div>

                  <div className="step-card">
                    <div className="num green">2</div>
                    <h4>识别聚焦痛点</h4>
                    <p>
                      找出最费人力、最重复、<br />
                      最容易出错的活动，<br />
                      优先用 AI 改造
                    </p>
                    <i className="fa-solid fa-bullseye step-icon"></i>
                  </div>

                  <div className="arrow">➜</div>

                  <div className="step-card">
                    <div className="num orange">3</div>
                    <h4>用数据说话</h4>
                    <p>
                      每项改造都有 before/after<br />
                      数据验证：省时多少、准确率<br />
                      提升多少
                    </p>
                    <i className="fa-solid fa-chart-line step-icon"></i>
                  </div>
                </div>

                <div style={{ height: "20px" }}></div>

                <div className="card">
                  <div className="card-title">
                    <i className="fa-solid fa-table"></i>
                    AI 能力全景图（效果数据汇总 = 单次迭代工时）
                  </div>

                  <table>
                    <thead>
                      <tr>
                        <th>AI 能力</th>
                        <th>改造前</th>
                        <th>改造后</th>
                        <th>提效</th>
                        <th>辐射业务线</th>
                        <th>覆盖活动</th>
                        <th>状态</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PRD 澄清</td>
                        <td>人工逐段阅读</td>
                        <td>5min 快速识别</td>
                        <td className="green-text">70-80%</td>
                        <td>10</td>
                        <td>1</td>
                        <td>✅</td>
                      </tr>
                      <tr>
                        <td>缺陷创建</td>
                        <td>2-3min/个</td>
                        <td>~1min/个</td>
                        <td className="orange-text">50-60%</td>
                        <td>9</td>
                        <td>5</td>
                        <td>✅</td>
                      </tr>
                      <tr>
                        <td>回归失败分析</td>
                        <td>30+min/日</td>
                        <td>7-8min/日</td>
                        <td className="orange-text">~75%</td>
                        <td>2</td>
                        <td>1</td>
                        <td>✅</td>
                      </tr>
                      <tr>
                        <td>模型上下架标注</td>
                        <td>手动逐个check</td>
                        <td>批量一键标注</td>
                        <td className="orange-text">80%+</td>
                        <td>1</td>
                        <td>3</td>
                        <td>✅</td>
                      </tr>
                      <tr>
                        <td>测试用例生成</td>
                        <td>2-3h/需求</td>
                        <td>0.5-1h/需求</td>
                        <td className="green-text">80%</td>
                        <td>11</td>
                        <td>1</td>
                        <td>✅</td>
                      </tr>
                      <tr>
                        <td>技术方案澄清</td>
                        <td>人工逐段阅读</td>
                        <td>5min 快速识别</td>
                        <td className="orange-text">70-80%</td>
                        <td>7</td>
                        <td>1</td>
                        <td>✅</td>
                      </tr>
                      <tr>
                        <td>UI 自动化</td>
                        <td>2-4h/需求手工</td>
                        <td>0.5-1h 人工+自动</td>
                        <td className="blue-text">预期80%</td>
                        <td>—</td>
                        <td>1</td>
                        <td>🔵</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="footer-note">
                    ● 数据口径：人工投入评估，选取 AI 改造前后典型需求进行对比验证
                  </div>
                </div>
              </div>

              {/* 右 */}
              <div>
                <div className="card">
                  <div className="card-title">
                    <i className="fa-solid fa-share-nodes"></i>
                    个人 Skill 贡献的多业务辐射
                  </div>

                  <div className="skill-map">
                    <div className="center-circle">
                      我独立建设 /<br />
                      主导的 Skill
                    </div>

                    <div className="skill-list">
                      <div className="skill-item">
                        <div>
                          <h5>PRD 澄清</h5>
                          <span>（初版 owner）</span>
                        </div>
                        <div className="right">辐射 10 条业务线</div>
                      </div>

                      <div className="skill-item">
                        <div>
                          <h5>测试用例生成</h5>
                          <span>（初版 owner）</span>
                        </div>
                        <div className="right">辐射 11 条业务线</div>
                      </div>

                      <div className="skill-item">
                        <div>
                          <h5>缺陷创建</h5>
                          <span>（独立）</span>
                        </div>
                        <div className="right">辐射 9 条业务线</div>
                      </div>

                      <div className="skill-item">
                        <div>
                          <h5>回归失败分析</h5>
                          <span>（主导开发）</span>
                        </div>
                        <div className="right">辐射 2 条业务线</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ height: "20px" }}></div>

                  <div className="card-title">
                    <i className="fa-solid fa-comments"></i>
                    典型业务使用反馈（节选）
                  </div>

                  <div className="card" style={{ background: "var(--mck-blue-bg)", borderColor: "var(--mck-blue-border)" }}>
                    <p style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--mck-navy)", fontWeight: 700 }}>
                      智能网联团队：<br />
                      &ldquo;PRD 澄清 Skill 把需求评审前的文档冲突检测：30min → &lt;1min，提效 ~97%&rdquo;
                    </p>
                  </div>

                  <div style={{ height: "14px" }}></div>

                  <div className="card" style={{ background: "var(--mck-blue-bg)", borderColor: "var(--mck-blue-border)" }}>
                    <p style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--mck-navy)", fontWeight: 700 }}>
                      制造物流项目：<br />
                      &ldquo;缺陷创建 Skill 批量补录时提效明显，一次性都给生成了缺陷&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 探索之路 */}
            <div style={{ height: "22px" }}></div>

            <div className="card">
              <div className="card-title">
                <i className="fa-solid fa-road"></i>
                AI 生成测试用例的探索之路（持续迭代，越来越好）
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                {/* 时间轴 */}
                <div className="timeline">
                  {/* V1 */}
                  <div className="timeline-card">
                    <div className="tl-v-title tl-v-blue">V1</div>
                    <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.5", color: "var(--mck-navy)", fontWeight: 700 }}>
                      直接写 prompt<br />
                      让 AI 生成用例
                      <br /><br />
                      Speckit 按 SDD 流程照搬<br />
                      ➔ 太重，不适合测试
                    </p>
                  </div>

                  <div className="arrow">➔</div>

                  {/* V2 */}
                  <div className="timeline-card">
                    <div className="tl-v-title tl-v-blue">V2</div>
                    <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.5", color: "var(--mck-navy)", fontWeight: 700 }}>
                      借助 Speckit 按<br />
                      SDD 研发流程操作
                      <br /><br />
                      ➔ 流程过重<br />
                      不适合 ➔ 主动否决
                    </p>
                    <div className="cross">✕</div>
                  </div>

                  <div className="arrow">➔</div>

                  {/* V3 */}
                  <div className="timeline-card">
                    <div className="tl-v-title tl-v-blue">V3</div>
                    <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.5", color: "var(--mck-navy)", fontWeight: 700 }}>
                      裁剪出测试专属<br />
                      专属于 &ldquo;spec → case&rdquo; 极简路径
                      <br />
                      开发 speckit-tools 提效<br />
                      ➔ 80% 用例可直接使用
                    </p>
                    <div className="check">✓</div>
                  </div>

                  <div className="arrow">➔</div>

                  {/* V4 */}
                  <div className="timeline-card tl-v4">
                    <div className="tl-v-title tl-v-orange">V4</div>
                    <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.5", color: "var(--mck-terracotta)", fontWeight: 900 }}>
                      整合经验
                      <br /><br />
                      建设测试用例 Skill
                      <br /><br />
                      ➔ 能力更成熟、易用、可复用
                    </p>
                    <div className="check" style={{ background: "var(--mck-terracotta)", boxShadow: "0 2px 6px rgba(190, 77, 56, 0.28)" }}>✓</div>
                  </div>
                </div>

                {/* 启示 */}
                <div className="tl-tip-box">
                  <div className="tl-tip-title">核心启示</div>

                  <div className="tl-tip">
                    <div className="tl-tip-icon" style={{ background: "var(--mck-terracotta)" }}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span>V2 被否决：不是失败，积累判断力</span>
                  </div>

                  <div className="tl-tip">
                    <div className="tl-tip-icon" style={{ background: "var(--mck-slate)" }}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span>V3 被放弃：不可复用，选择更成熟</span>
                  </div>

                  <div className="tl-tip">
                    <div className="tl-tip-icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span>持续迭代：让 AI 能力更贴合测试场景</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第二部分 */}
        <div className="section">
          <div className="section-header">
            <div className="section-index">2</div>
            <div>
              <span className="section-title">质量共建与自动化体系</span>
            </div>
          </div>

          <div className="section-body">
            <div className="grid-2">
              {/* 左 */}
              <div>
                <div className="card">
                  <div className="card-title">
                    <i className="fa-solid fa-arrows-rotate"></i>
                    质量共建闭环
                  </div>

                  <div className="grid-4" style={{ marginBottom: "20px" }}>
                    <div className="mini">
                      <div className="n"><i className="fa-solid fa-users"></i></div>
                      <div className="t">业务支撑</div>
                    </div>

                    <div className="mini">
                      <div className="n"><i className="fa-solid fa-chart-column"></i></div>
                      <div className="t">质量数据分析</div>
                    </div>

                    <div className="mini">
                      <div className="n"><i className="fa-solid fa-rotate"></i></div>
                      <div className="t">复盘改进</div>
                    </div>

                    <div className="mini">
                      <div className="n"><i className="fa-solid fa-arrow-trend-up"></i></div>
                      <div className="t">质量提升</div>
                    </div>
                  </div>

                  <div className="footer-note" style={{ lineHeight: "1.7", fontSize: "14px", color: "var(--mck-slate)" }}>
                    ● 共识别 40 个过程问题（融合云17 + AgentOps23）<br />
                    ● Badcase 从全年 39 个下降至 H2 仅 12 个<br />
                    ● AgentOps 团队 CR 热度：2.5% → 14.8%
                  </div>
                </div>
              </div>

              {/* 右 */}
              <div>
                <div className="card">
                  <div className="card-title">
                    <i className="fa-solid fa-robot"></i>
                    自动化体系成效
                  </div>

                  <div className="stats-grid">
                    <div className="stat">
                      <div className="big">1700+</div>
                      <div className="label">自动化回归用例</div>
                    </div>

                    <div className="stat">
                      <div className="big">100%</div>
                      <div className="label">P0 覆盖率</div>
                    </div>

                    <div className="stat">
                      <div className="big">~3%</div>
                      <div className="label">失败率控制</div>
                    </div>

                    <div className="stat">
                      <div className="big">227</div>
                      <div className="label">发现 Bug</div>
                    </div>
                  </div>

                  <div className="chart-box">
                    <div style={{ fontSize: "18px", fontWeight: "800", color: "var(--mck-navy)" }}>
                      自动化用例建设趋势
                    </div>

                    <div className="line" style={{ background: "var(--mck-blue)" }}></div>

                    <div className="dot" style={{ left: "140px", top: "125px" }} title="24.01"></div>
                    <div className="dot" style={{ left: "300px", top: "105px" }} title="24.04"></div>
                    <div className="dot" style={{ left: "460px", top: "85px" }} title="24.07"></div>
                    <div className="dot" style={{ left: "620px", top: "60px" }} title="25.01"></div>

                    <div style={{ position: "absolute", left: "120px", bottom: "16px", fontSize: "14px", fontWeight: "700", color: "var(--mck-slate)" }}>24.01</div>
                    <div style={{ position: "absolute", left: "280px", bottom: "16px", fontSize: "14px", fontWeight: "700", color: "var(--mck-slate)" }}>24.04</div>
                    <div style={{ position: "absolute", left: "440px", bottom: "16px", fontSize: "14px", fontWeight: "700", color: "var(--mck-slate)" }}>24.07</div>
                    <div style={{ position: "absolute", left: "600px", bottom: "16px", fontSize: "14px", fontWeight: "700", color: "var(--mck-slate)" }}>25.01</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: "22px" }}></div>

            <div className="card">
              <div className="grid-3">
                <div>
                  <div className="card-title">
                    <i className="fa-solid fa-arrow-down"></i>
                    线上质量持续提升
                  </div>
                  <div style={{ fontSize: "52px", fontWeight: "900", color: "var(--mck-teal)", marginTop: "10px" }}>
                    17.6% → 7%
                  </div>
                  <div style={{ fontSize: "28px", color: "var(--mck-teal)", fontWeight: "800" }}>
                    下降 60.8%
                  </div>
                </div>

                <div>
                  <div className="card-title">
                    <i className="fa-solid fa-lightbulb"></i>
                    策略亮点
                  </div>
                  <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--mck-slate)", fontWeight: "600", marginTop: "10px" }}>
                    对璇玑、发布会等探索性新业务<br />
                    采用&ldquo;延迟投入&rdquo;策略，避免<br />
                    过早自动化投入导致沉没成本
                  </p>
                </div>

                <div>
                  <div className="card-title">
                    <i className="fa-solid fa-chart-pie"></i>
                    质量运营
                  </div>
                  <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--mck-slate)", fontWeight: "600", marginTop: "10px" }}>
                    周维度复盘机制<br />
                    实时透明化质量数据<br />
                    用数据推动质量意识提升
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第三部分 */}
        <div className="section" style={{ marginBottom: 0 }}>
          <div className="section-header">
            <div className="section-index">3</div>
            <div>
              <span className="section-title">平台化建设</span>
              <span className="section-desc">测试能力可视化 + 成本透明化 + 管理智能化</span>
            </div>
          </div>

          <div className="section-body">
            <div className="platform-grid">
              {/* 左：质量能力图谱管理平台 */}
              <div className="pk-card">
                <div className="pk-title">
                  质量能力图谱管理平台
                  <span>（从 0 到 1 全栈自研）</span>
                </div>

                <div className="pk-metrics">
                  <div className="pk-metric">
                    <div className="pk-icon">
                      <i className="fa-solid fa-diagram-project"></i>
                    </div>
                    <div>
                      <div className="pk-num">17</div>
                      <div className="pk-label">张能力图谱</div>
                    </div>
                  </div>

                  <div className="pk-metric">
                    <div className="pk-icon">
                      <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                      <div className="pk-num">646</div>
                      <div className="pk-label">个能力子集</div>
                    </div>
                  </div>

                  <div className="pk-metric">
                    <div className="pk-icon">
                      <i className="fa-solid fa-database"></i>
                    </div>
                    <div>
                      <div className="pk-num">752</div>
                      <div className="pk-label">个能力沉淀</div>
                    </div>
                  </div>

                  <div className="pk-metric">
                    <div className="pk-icon">
                      <i className="fa-solid fa-magnifying-glass-chart"></i>
                    </div>
                    <div className="pk-label" style={{ lineHeight: "1.45" }}>
                      可检索<br />可度量<br />可复用
                    </div>
                  </div>
                </div>
              </div>

              {/* 右：测试资源损耗管理平台 */}
              <div className="pk-card">
                <div className="pk-title">
                  测试资源损耗管理平台
                  <span>（从 0 到 1 全栈自研）</span>
                </div>

                <div className="pk-metrics">
                  <div className="pk-metric">
                    <div className="pk-icon">
                      <i className="fa-solid fa-file-lines"></i>
                    </div>
                    <div>
                      <div className="pk-num">385+</div>
                      <div className="pk-label">测试报告</div>
                    </div>
                  </div>

                  <div className="pk-metric">
                    <div className="pk-icon">
                      <i className="fa-solid fa-clipboard-check"></i>
                    </div>
                    <div>
                      <div className="pk-num">7 项</div>
                      <div className="pk-label">校验规则</div>
                    </div>
                  </div>

                  <div className="pk-metric">
                    <div className="pk-icon">
                      <i className="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <div>
                      <div className="pk-num" style={{ fontSize: "14px" }}>AI 智能分析</div>
                      <div className="pk-label">过程问题 / 遵从度</div>
                    </div>
                  </div>

                  <div className="pk-metric">
                    <div className="pk-icon">
                      <i className="fa-solid fa-chart-pie"></i>
                    </div>
                    <div>
                      <div className="pk-num" style={{ fontSize: "14px" }}>多维视图</div>
                      <div className="pk-label">成本概览 / 对比</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-tip">Quality Engineering &middot; AI Driven Testing PPT Slide Deck - Page 3</div>
      </div>
    </motion.div>
  );
}
