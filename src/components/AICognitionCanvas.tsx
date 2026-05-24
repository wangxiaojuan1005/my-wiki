import React, { useState, useEffect, useRef } from "react";

export default function AICognitionCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setScale(width / 1365);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="ai-matrix-wrapper"
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .ai-matrix-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 1365px;
          height: 925px;
          background: transparent;
        }

        .ai-matrix-container .node {
          position: absolute;
          background: #ffffff;
          border: 2px solid var(--mck-blue-border, #cbdceb);
          border-radius: 8px;
          color: var(--mck-navy, #0c2340);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.4;
          z-index: 2;
          box-sizing: border-box;
          box-shadow: 0 4px 10px rgba(12, 35, 64, 0.05);
          transition: all 0.3s;
        }

        .ai-matrix-container .node:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(12, 35, 64, 0.12);
        }

        .ai-matrix-container .small {
          font-size: 18px;
          font-weight: 500;
        }

        .ai-matrix-container .center-box {
          background: var(--mck-navy, #0c2340);
          border: 3px solid var(--mck-blue, #1d70b8);
          color: #fff;
          font-size: 24px;
          font-weight: 700;
          box-shadow: 0 6px 12px rgba(12, 35, 64, 0.2);
        }

        .ai-matrix-container .center-box:hover {
          box-shadow: 0 8px 18px rgba(12, 35, 64, 0.3);
        }

        .ai-matrix-container .green {
          background: var(--mck-teal-bg, #edf6f1);
          border: 2px solid var(--mck-teal, #127743);
          color: var(--mck-teal, #127743);
          font-size: 22px;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(18, 119, 67, 0.1);
        }
        
        .ai-matrix-container .green:hover {
          box-shadow: 0 6px 16px rgba(18, 119, 67, 0.18);
        }

        .ai-matrix-container .pink {
          background: var(--mck-terracotta-bg, #fcf4f2);
          border: 2px solid var(--mck-terracotta, #be4d38);
          color: var(--mck-terracotta, #be4d38);
          font-size: 22px;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(190, 77, 56, 0.15);
        }

        .ai-matrix-container .pink:hover {
          box-shadow: 0 6px 16px rgba(190, 77, 56, 0.25);
        }

        .ai-matrix-container .diamond {
          position: absolute;
          width: 150px;
          height: 150px;
          background: var(--mck-blue, #1d70b8);
          border: 4px solid var(--mck-blue-border, #cbdceb);
          transform: rotate(45deg);
          box-shadow: -4px 4px 12px rgba(29, 112, 184, 0.2);
          z-index: 2;
          border-radius: 6px;
          transition: all 0.3s;
        }

        .ai-matrix-container .diamond:hover {
          transform: rotate(45deg) scale(1.03);
          box-shadow: -6px 6px 18px rgba(29, 112, 184, 0.3);
        }

        .ai-matrix-container .diamond-text {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 130px;
          transform: translate(-50%, -50%) rotate(-45deg);
          text-align: center;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.6;
        }

        .ai-matrix-container svg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .ai-matrix-container .solid {
          stroke: var(--mck-blue-border, #cbdceb);
          stroke-width: 2.2;
          fill: none;
        }

        .ai-matrix-container .dashed {
          stroke: var(--mck-blue-border, #cbdceb);
          stroke-width: 2;
          stroke-dasharray: 8 6;
          fill: none;
        }

        .ai-matrix-container .label {
          position: absolute;
          font-size: 15px;
          color: var(--mck-navy, #0c2340);
          font-weight: 700;
          z-index: 3;
          background: rgba(255, 255, 255, 0.95);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid var(--mck-blue-border, #cbdceb);
          box-shadow: 0 2px 5px rgba(12, 35, 64, 0.05);
        }
      ` }} />

      <div
        className="ai-matrix-container"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* 连线 */}
        <svg width="1365" height="925">
          <defs>
            <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
              <path d="M0,0 L12,6 L0,12 z" fill="#777" />
            </marker>
          </defs>

          {/* 左上 */}
          <line x1="123" y1="352" x2="123" y2="505" className="solid" markerEnd="url(#arrow)" />

          {/* 用户反馈 */}
          <line x1="448" y1="352" x2="448" y2="505" className="solid" markerEnd="url(#arrow)" />

          {/* PRD */}
          <line x1="678" y1="95" x2="678" y2="115" className="solid" markerEnd="url(#arrow)" />

          {/* 历史 */}
          <line x1="1014" y1="95" x2="1014" y2="115" className="solid" markerEnd="url(#arrow)" />

          {/* AI 提取到交叉验证 */}
          <path d="M680 180 Q720 230 790 300" className="solid" markerEnd="url(#arrow)" />
          <path d="M1018 180 Q980 230 900 300" className="solid" markerEnd="url(#arrow)" />

          {/* 交叉验证到保留 */}
          <path d="M805 440 Q790 480 790 520" className="solid" markerEnd="url(#arrow)" />

          {/* 交叉验证到补充 */}
          <path d="M925 440 Q950 480 950 520" className="solid" markerEnd="url(#arrow)" />

          {/* AI skill */}
          <path d="M160 590 Q260 620 560 660" className="solid" markerEnd="url(#arrow)" />

          {/* AI 风险 */}
          <path d="M520 590 Q600 620 620 660" className="solid" markerEnd="url(#arrow)" />

          {/* 保留 */}
          <line x1="790" y1="588" x2="790" y2="660" className="solid" markerEnd="url(#arrow)" />

          {/* 补充 */}
          <path d="M950 588 Q930 620 870 660" className="solid" markerEnd="url(#arrow)" />

          {/* 人工评审 */}
          <path d="M1190 590 Q1080 620 905 675" className="dashed" markerEnd="url(#arrow)" />

          {/* 底部 */}
          <path d="M640 758 Q400 780 250 815" className="solid" markerEnd="url(#arrow)" />
          <line x1="680" y1="758" x2="680" y2="815" className="solid" markerEnd="url(#arrow)" />
          <path d="M800 758 Q1010 780 1030 815" className="solid" markerEnd="url(#arrow)" />
        </svg>

        {/* 顶部 */}
        <div className="node" style={{ left: 560, top: 10, width: 230, height: 85 }}>
          📄 PRD 文档<br />
          「应该测试什么」
        </div>

        <div className="node" style={{ left: 888, top: 10, width: 250, height: 85 }}>
          📓 历史测试用例<br />
          「过去测试了什么」
        </div>

        {/* AI 节点 */}
        <div className="node small" style={{ left: 560, top: 115, width: 260, height: 65 }}>
          🧠 AI 提炼提取功能点
        </div>

        <div className="node small" style={{ left: 888, top: 115, width: 260, height: 65 }}>
          🧠 AI 聚合测试场景
        </div>

        {/* 交叉 */}
        <div className="diamond" style={{ left: 773, top: 255 }}>
          <div className="diamond-text">
            🔄 交叉验证<br />
            差异度分析
          </div>
        </div>

        {/* 标签 */}
        <div className="label" style={{ left: 635, top: 455 }}>
          交集 ➔ 有效用例
        </div>

        <div className="label" style={{ left: 875, top: 455 }}>
          差集 ➔ 遗漏场景
        </div>

        {/* 保留 */}
        <div className="node green" style={{ left: 690, top: 520, width: 120, height: 68 }}>
          ✓ 保留
        </div>

        {/* 补充 */}
        <div className="node pink" style={{ left: 908, top: 520, width: 128, height: 68 }}>
          ⚠ 补充
        </div>

        {/* 左侧 */}
        <div className="node" style={{ left: 10, top: 290, width: 238, height: 62 }}>
          💾 前端代码仓库
        </div>

        <div className="node" style={{ left: 310, top: 290, width: 278, height: 62 }}>
          💬 3,538 条用户反馈
        </div>

        <div className="node" style={{ left: 42, top: 505, width: 175, height: 85 }}>
          🧠 AI Skill<br />
          静态代码分析
        </div>

        <div className="node" style={{ left: 318, top: 505, width: 262, height: 85 }}>
          🧠 AI 归类分析<br />
          ➔ 风险模型拐点图
        </div>

        {/* 人工 */}
        <div className="node" style={{ left: 1100, top: 505, width: 232, height: 85 }}>
          👥 人工评审兜底<br />
          避免 AI 幻觉
        </div>

        {/* 中间 */}
        <div className="node center-box" style={{ left: 560, top: 660, width: 350, height: 98 }}>
          🎯 最终测试用例矩阵<br />
          功能覆盖 ⊗ 质量风险<br />
          ⊗ 用户痛点
        </div>

        {/* 底部 */}
        <div className="node" style={{ left: 160, top: 815, width: 295, height: 90 }}>
          📦 测试用例矩阵<br />
          P0/P1/P2 三级<br />
          7 大业务模块全覆盖
        </div>

        <div className="node" style={{ left: 545, top: 815, width: 270, height: 90 }}>
          💾 10 场业务分享会<br />
          反馈验证 + 补充认知<br />
          形成团队共识
        </div>

        <div className="node" style={{ left: 930, top: 815, width: 305, height: 90 }}>
          🔥 风险热力图<br />
          3538 条反馈 ➔ TOP 问题<br />
          数据支撑决策优先级
        </div>
      </div>
      <div style={{ height: (925 * scale) || 925 }} />
    </div>
  );
}
