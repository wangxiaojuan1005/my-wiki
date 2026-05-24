/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { AlertCircle, Users, Layers, BookOpen, ShieldCheck, FileText } from "lucide-react";
import AICognitionCanvas from "./AICognitionCanvas";

export default function SlideProject1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="proj-1"
    >
      <style>{`
        /* McKinsey Slide Color Language Scoped Specifically for .proj-1 */
        .proj-1 {
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

        .proj-1 .page {
          width: 100%;
          max-width: 1920px;
          margin: 0 auto;
          padding: 24px;
          background: radial-gradient(circle at top left, #ffffff 0%, var(--mck-bg) 55%, #e6edf6 100%) !important;
          border-radius: 20px;
        }

        .proj-1 .top-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          border-bottom: 3px solid #dbe4f1;
          padding-bottom: 16px;
        }

        .proj-1 .main-title {
          font-size: 24px;
          font-weight: 850;
          color: var(--mck-navy);
          letter-spacing: -0.5px;
          line-height: 1.25;
        }

        .proj-1 .top-cards {
          display: flex;
          gap: 14px;
        }

        .proj-1 .top-card {
          width: 250px;
          height: 80px;
          background: var(--mck-card-bg);
          border: 1px solid var(--mck-blue-border) !important;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(12, 35, 64, 0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          transition: all 0.2s ease;
        }

        .proj-1 .top-card:hover {
          transform: translateY(-2px);
          border-color: var(--mck-blue);
          box-shadow: 0 6px 16px rgba(12, 35, 64, 0.05);
        }

        .proj-1 .top-card .num {
          font-size: 18px;
          font-weight: 850;
          color: var(--mck-navy) !important;
          line-height: 1.2;
          text-align: center;
        }

        .proj-1 .top-card .label {
          margin-top: 4px;
          font-size: 13px;
          color: var(--mck-slate) !important;
          font-weight: 600;
          text-align: center;
        }

        .proj-1 .section {
          background: var(--mck-card-bg) !important;
          border-radius: 18px;
          border: 1px solid var(--mck-border-divider) !important;
          box-shadow: 0 8px 24px rgba(12, 35, 64, 0.03);
          margin-bottom: 24px;
          overflow: hidden;
        }

        .proj-1 .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 24px 10px;
          background: transparent !important;
          border-bottom: none !important;
        }

        .proj-1 .section-index {
          width: 34px;
          height: 34px;
          border-radius: 6px;
          background: var(--mck-navy) !important;
          color: #ffffff !important;
          font-size: 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: none !important;
        }

        .proj-1 .section-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--mck-navy) !important;
          letter-spacing: -0.2px;
        }

        .proj-1 .card {
          background: var(--mck-card-bg) !important;
          border-radius: 12px !important;
          border: 1px solid var(--mck-border-divider) !important;
          padding: 20px !important;
          box-shadow: none !important;
        }

        .proj-1 .card-title {
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

        .proj-1 .legacy-diagnose {
          border-color: var(--mck-terracotta-border) !important;
          background: transparent !important;
        }

        .proj-1 .legacy-diagnose .section-index {
          background: var(--mck-navy) !important;
          box-shadow: none !important;
        }

        .proj-1 .legacy-diagnose .section-title {
          color: var(--mck-navy) !important;
        }

        .legacy-diagnose .card {
          background: #ffffff !important;
          border-radius: 12px !important;
          border: 1px solid var(--mck-border-divider) !important;
          padding: 16px 18px 14px;
          box-shadow: none !important;
        }

        .legacy-diagnose .card.blue { border-color: var(--mck-blue-border) !important; }
        .legacy-diagnose .card.green { border-color: var(--mck-teal-border) !important; }
        .legacy-diagnose .card.purple { border-color: var(--mck-blue-border) !important; }
        .legacy-diagnose .card.orange { border-color: var(--mck-terracotta-border) !important; }

        .legacy-diagnose .icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 8px !important;
          font-size: 22px !important;
        }

        .legacy-diagnose .blue-bg { background: var(--mck-blue-bg) !important; color: var(--mck-blue) !important; }
        .legacy-diagnose .green-bg { background: var(--mck-teal-bg) !important; color: var(--mck-teal) !important; }
        .legacy-diagnose .purple-bg { background: #f3e8ff !important; color: #6f42d8 !important; }
        .legacy-diagnose .orange-bg { background: var(--mck-terracotta-bg) !important; color: var(--mck-terracotta) !important; }

        .legacy-diagnose .user {
          border: 1.5px solid var(--mck-navy) !important;
          background: var(--mck-blue) !important;
          box-shadow: none !important;
        }
        .legacy-diagnose .user::after {
          border: 1.5px solid var(--mck-navy) !important;
          background: var(--mck-blue) !important;
        }
        .legacy-diagnose .user.gray {
          background: #cbd5e1 !important;
          border-color: #64748b !important;
        }
        .legacy-diagnose .user.gray::after {
          background: #cbd5e1 !important;
          border-color: #64748b !important;
        }

        .legacy-diagnose .member {
          border: 1.5px solid var(--mck-navy) !important;
          background: var(--mck-blue-bg) !important;
          box-shadow: none !important;
        }
        .legacy-diagnose .member::after {
          border: 1.5px solid var(--mck-navy) !important;
          background: var(--mck-blue-bg) !important;
        }
        .legacy-diagnose .member.orange {
          border-color: var(--mck-terracotta) !important;
          background: var(--mck-terracotta-bg) !important;
        }
        .legacy-diagnose .member.orange::after {
          border-color: var(--mck-terracotta) !important;
          background: var(--mck-terracotta-bg) !important;
        }

        .legacy-diagnose .big-x {
          color: var(--mck-terracotta) !important;
          font-weight: 300 !important;
        }

        .legacy-diagnose .section-title h2 {
          font-size: 18px !important;
          font-weight: 800 !important;
          color: var(--mck-navy) !important;
        }

        .legacy-diagnose .blue-text,
        .legacy-diagnose .green-text,
        .legacy-diagnose .purple-text,
        .legacy-diagnose .orange-text {
          color: var(--mck-navy) !important;
        }

        .proj-1 table {
          width: 100%;
          border-collapse: collapse;
          overflow: hidden;
          border-radius: 8px;
        }

        .proj-1 thead {
          background: var(--mck-blue);
          color: #ffffff;
        }

        .proj-1 th {
          padding: 8px 6px !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          border-bottom: 2px solid #94a3b8 !important;
          border-right: 1px solid rgba(255,255,255,.15) !important;
          background: var(--mck-blue) !important;
          color: #ffffff !important;
        }

        .proj-1 .table-wrap th {
          background: var(--mck-blue-bg) !important;
          color: var(--mck-navy) !important;
          border-bottom: 2px solid var(--mck-blue-border) !important;
          border-right: 2px solid var(--mck-blue-border) !important;
        }

        .proj-1 td {
          padding: 6px !important;
          border: 1px solid #cbd5e1 !important;
          text-align: center !important;
          font-size: 12px !important;
          font-weight: 650 !important;
          color: var(--mck-navy) !important;
          background: #ffffff !important;
        }

        .proj-1 tbody tr:nth-child(even) td {
          background: #f8fafc !important;
        }

        .proj-1 tbody tr:hover td {
          background: var(--mck-blue-bg) !important;
        }

        .proj-1 .table-title {
          font-size: 13px;
          font-weight: 800;
          padding: 4px 8px;
          color: #ffffff !important;
          border-radius: 4px 4px 0 0;
          text-align: center;
        }
        .proj-1 .tb-blue,
        .proj-1 .tb-green,
        .proj-1 .tb-orange,
        .proj-1 .tb-purple {
          background: var(--mck-blue) !important;
        }

        .proj-1 .mini-box {
          background: var(--mck-blue-bg) !important;
          border-radius: 12px !important;
          padding: 16px !important;
          border: 1px solid var(--mck-blue-border) !important;
        }

        .proj-1 .mini-title {
          font-size: 15px !important;
          font-weight: 800 !important;
          color: var(--mck-navy) !important;
        }

        .proj-1 .mini-box li {
          color: var(--mck-slate) !important;
          font-size: 14px !important;
          font-weight: 600 !important;
        }

        .proj-1 .core-title {
          font-size: 18px !important;
          font-weight: 800 !important;
          color: var(--mck-navy) !important;
        }

        .proj-1 .pain-loop-box {
          background: #ffffff !important;
          border: 1px solid var(--mck-border-divider) !important;
          border-radius: 12px !important;
          padding: 20px !important;
          box-shadow: none !important;
        }

        .proj-1 .pain-loop-title {
          font-size: 18px !important;
          font-weight: 800 !important;
          color: var(--mck-navy) !important;
        }

        .proj-1 .pain-circle {
          font-weight: 800 !important;
          box-shadow: none !important;
          border: 1px solid !important;
        }

        .proj-1 .pain-circle.purple-circle {
          background: #f3e8ff !important;
          border-color: #cbdceb !important;
          color: #5a2cf2 !important;
        }

        .proj-1 .pain-circle.orange-circle {
          background: var(--mck-terracotta-bg) !important;
          border-color: var(--mck-terracotta-border) !important;
          color: var(--mck-terracotta) !important;
        }

        .proj-1 .pain-circle.green-circle {
          background: var(--mck-teal-bg) !important;
          border-color: var(--mck-teal-border) !important;
          color: var(--mck-teal) !important;
        }

        .proj-1 .s2-panel-title {
          color: var(--mck-navy) !important;
          font-weight: 800 !important;
          font-size: 18px !important;
          margin-bottom: 20px !important;
          letter-spacing: .5px !important;
          border-left: 4px solid var(--mck-blue) !important;
          padding-left: 10px !important;
        }

        .proj-1 .s2-before {
          background: var(--mck-terracotta-bg) !important;
          border: 2px solid var(--mck-terracotta-border) !important;
          border-radius: 16px !important;
          padding: 20px !important;
          box-shadow: 0 6px 16px rgba(180, 83, 9, 0.03) !important;
          transition: all 0.3s ease !important;
        }

        .proj-1 .s2-before:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(180, 83, 9, 0.06) !important;
        }

        .proj-1 .s2-after {
          background: var(--mck-blue-bg) !important;
          border: 2px solid var(--mck-blue-border) !important;
          border-radius: 16px !important;
          padding: 20px !important;
          box-shadow: 0 6px 16px rgba(12, 35, 64, 0.04) !important;
          transition: all 0.3s ease !important;
        }

        .proj-1 .s2-after:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(12, 35, 64, 0.08) !important;
        }

        .proj-1 .before-tag {
          background: var(--mck-terracotta) !important;
          color: #ffffff !important;
          font-weight: 800 !important;
          font-size: 14px !important;
          padding: 6px 14px !important;
          border-radius: 20px !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          margin-bottom: 20px !important;
          letter-spacing: 0.5px !important;
          box-shadow: 0 2px 8px rgba(227, 114, 34, 0.2) !important;
        }

        .proj-1 .after-tag {
          background: var(--mck-blue) !important;
          color: #ffffff !important;
          font-weight: 800 !important;
          font-size: 14px !important;
          padding: 6px 14px !important;
          border-radius: 20px !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          margin-bottom: 20px !important;
          letter-spacing: 0.5px !important;
          box-shadow: 0 2px 8px rgba(0, 107, 180, 0.2) !important;
        }

        .proj-1 .flow-box-red {
          background: #ffffff !important;
          border: 1.5px solid var(--mck-terracotta-border) !important;
          color: var(--mck-terracotta) !important;
          font-weight: 800 !important;
          border-radius: 10px !important;
          padding: 12px !important;
          font-size: 16px !important;
          box-shadow: 0 2px 6px rgba(180, 83, 9, 0.02) !important;
        }

        .proj-1 .flow-box-green {
          background: #ffffff !important;
          border: 1.5px solid var(--mck-blue-border) !important;
          color: var(--mck-navy) !important;
          font-weight: 800 !important;
          border-radius: 10px !important;
          padding: 12px !important;
          font-size: 16px !important;
          box-shadow: 0 2px 6px rgba(12, 35, 64, 0.02) !important;
        }

        .proj-1 .skill-item {
          background: #ffffff !important;
          border: 1.5px solid var(--mck-blue-border) !important;
          color: var(--mck-blue) !important;
          font-weight: 700 !important;
          border-radius: 8px !important;
          font-size: 13px !important;
        }

        .proj-1 .owner-card {
          background: #ffffff !important;
          border: 1.5px solid var(--mck-blue-border) !important;
          border-radius: 8px !important;
          padding: 8px !important;
          box-shadow: 0 2px 4px rgba(12, 35, 64, 0.02) !important;
        }

        .proj-1 .owner-card .otitle {
          color: var(--mck-blue) !important;
          font-weight: 800 !important;
          font-size: 13px !important;
        }

        .proj-1 .owner-card .odesc {
          color: var(--mck-slate) !important;
          font-weight: 600 !important;
          font-size: 11px !important;
        }

        .proj-1 .green-bottom {
          background: var(--mck-navy) !important;
          color: #ffffff !important;
          font-weight: 800 !important;
          font-size: 13px !important;
          border-radius: 10px !important;
          padding: 10px !important;
          box-shadow: 0 4px 12px rgba(12, 35, 64, 0.15) !important;
        }

        .proj-1 .down-arrow {
          color: var(--mck-slate) !important;
          font-weight: 700 !important;
          font-size: 14px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          gap: 2px !important;
        }

        .proj-1 .down-arrow i {
          color: var(--mck-slate) !important;
          font-size: 18px !important;
        }

        .proj-1 .effect-row {
          background: var(--mck-blue-bg) !important;
          border: 1px solid var(--mck-blue-border) !important;
          border-radius: 10px !important;
        }

        .proj-1 .effect-tag {
          background: var(--mck-blue) !important;
          color: #ffffff !important;
          font-weight: 800 !important;
        }

        .proj-1 .effect-list {
          color: var(--mck-navy) !important;
          font-weight: 400 !important;
        }

        .proj-1 .step-box {
          border: 1px solid var(--mck-border-divider) !important;
          background: #ffffff !important;
          border-radius: 8px !important;
          padding: 10px 14px !important;
        }

        .proj-1 .step-icon {
          border-color: var(--mck-blue) !important;
          color: var(--mck-blue) !important;
        }

        .proj-1 .step-title {
          font-weight: 800 !important;
          color: var(--mck-navy) !important;
        }

        .proj-1 .step-desc {
          color: var(--mck-slate) !important;
          font-weight: 600 !important;
        }

        .proj-1 .s3-level.s3-red {
          background: var(--mck-terracotta-bg) !important;
          border: 1.5px solid var(--mck-terracotta-border) !important;
        }

        .proj-1 .s3-level.s3-orange {
          background: #fffdf5 !important;
          border: 1.5px solid #fde68a !important;
        }

        .proj-1 .s3-level.s3-green {
          background: var(--mck-teal-bg) !important;
          border: 1.5px solid var(--mck-teal-border) !important;
        }

        .proj-1 .s3-level-main h3 {
          font-weight: 800 !important;
        }

        .proj-1 .s3-red h3 { color: var(--mck-terracotta) !important; }
        .proj-1 .s3-orange h3 { color: #b45309 !important; }
        .proj-1 .s3-green h3 { color: var(--mck-teal) !important; }
        
        .proj-1 .s3-level-main p {
          color: var(--mck-navy) !important;
          font-weight: 800 !important;
        }

        .proj-1 .s3-level-side li {
          color: var(--mck-slate) !important;
          font-weight: 600 !important;
        }

        .proj-1 .s3-bottom-box {
          background: var(--mck-blue-bg) !important;
          border: 1px dashed var(--mck-blue-border) !important;
          border-radius: 10px !important;
        }

        .proj-1 .s3-bottom-title {
          color: var(--mck-navy) !important;
          font-weight: 850 !important;
        }

        .proj-1 .s3-bottom-desc {
          color: var(--mck-slate) !important;
          font-weight: 600 !important;
        }

        .proj-1 .s3-flow {
          background: var(--mck-blue) !important;
          color: #ffffff !important;
          font-weight: 800 !important;
        }

        .proj-1 .summary-card {
          border-radius: 12px !important;
          box-shadow: 0 4px 12px rgba(12, 35, 64, 0.03) !important;
        }

        .proj-1 .summary-card:nth-child(1) { border-color: var(--mck-blue-border) !important; background: var(--mck-blue-bg) !important; }
        .proj-1 .summary-card:nth-child(2) { border-color: var(--mck-terracotta-border) !important; background: var(--mck-terracotta-bg) !important; }
        .proj-1 .summary-card:nth-child(3) { border-color: #cbdceb !important; background: #ffffff !important; }
        .proj-1 .summary-card:nth-child(4) { border-color: var(--mck-teal-border) !important; background: var(--mck-teal-bg) !important; }

        .proj-1 .summary-card:nth-child(1) .summary-value { color: var(--mck-blue) !important; }
        .proj-1 .summary-card:nth-child(2) .summary-value { color: var(--mck-terracotta) !important; }
        .proj-1 .summary-card:nth-child(3) .summary-value { color: var(--mck-navy) !important; }
        .proj-1 .summary-card:nth-child(4) .summary-value { color: var(--mck-teal) !important; }

        .proj-1 .summary-card:nth-child(1) .summary-label { color: var(--mck-navy) !important; }
        .proj-1 .summary-card:nth-child(2) .summary-label { color: var(--mck-navy) !important; }
        .proj-1 .summary-card:nth-child(3) .summary-label { color: var(--mck-navy) !important; }
        .proj-1 .summary-card:nth-child(4) .summary-label { color: var(--mck-navy) !important; }

        .proj-1 .flow-area {
          border: 1px solid var(--mck-border-divider) !important;
          background: #ffffff !important;
          border-radius: 12px !important;
          padding: 20px !important;
        }

        .proj-1 .flow-title {
          font-size: 18px !important;
          font-weight: 800 !important;
          color: var(--mck-navy) !important;
        }

        .proj-1 .flow-node-pos {
          box-shadow: none !important;
          font-weight: 800 !important;
          background: #ffffff !important;
          border-radius: 8px !important;
        }

        .proj-1 .phase-card {
          background: #ffffff !important;
          border: 1.5px solid var(--mck-blue-border) !important;
          border-radius: 10px !important;
          box-shadow: none !important;
          padding: 14px !important;
        }

        .proj-1 .phase-title {
          font-size: 15px !important;
          font-weight: 850 !important;
          color: var(--mck-blue) !important;
          border-bottom: 1.5px solid var(--mck-blue-border) !important;
          padding-bottom: 6px !important;
        }

        .proj-1 .phase-card .step {
          font-size: 13px !important;
          font-weight: 650 !important;
          color: var(--mck-slate) !important;
        }
      `}</style>
      <div className="page active">
        {/* Top Banner Wrapper */}
        <div className="top-wrapper">
          <div>
            <div className="main-title">项目一：LIVIS 理想同学 APP 新业务从 0 到 1</div>
          </div>
          <div className="top-cards">
            <div className="top-card">
              <div className="num">测试对象升级</div>
              <div className="label">Web端测试 → 移动端测试</div>
            </div>
            <div className="top-card">
              <div className="num">协作模式升级</div>
              <div className="label">单一组织架构 → 跨一级组织协作</div>
            </div>
            <div className="top-card">
              <div className="num">测试场景升级</div>
              <div className="label">纯云端测试 → 实车测试</div>
            </div>
          </div>
        </div>

        {/* 接手时现状与问题 (legacy-diagnose Section) */}
        <div className="section legacy-diagnose" style={{ padding: 0, overflow: "hidden" }}>
          <div className="section-header">
            <div className="section-index">0</div>
            <div className="section-title">接手时现状与问题</div>
          </div>

          <div className="section-content" style={{ padding: "18px 22px" }}>
            <div className="grid">
            {/* 卡片：人员 */}
            <div className="card blue">
              <div className="section-title">
                <div className="icon-circle blue-bg">
                  <Users size={22} strokeWidth={2} />
                </div>
                <h2 className="blue-text">人员</h2>
              </div>

              {/* <ul className="desc">
                <li>1 名正式员工做统筹组 “业务不清楚、进展不清楚，处于 “放手状态”</li>
                <li>5 名外援执行测试，但其中 1 名专职做统筹转达（不做实际测试）</li>
              </ul> */}

              <div className="inner-row" style={{ alignItems: "flex-start" }}>
                <div className="mini-box" style={{ minHeight: "158px", paddingBottom: "18px", overflow: "visible" }}>
                  <div className="bubble">
                    业务不清楚<br />
                    进展不清楚<br />
                    放手状态
                  </div>

                  <svg className="person-svg" style={{ marginLeft: "54px", width: "90px", height: "100px" }} viewBox="0 0 120 160">
                    <circle cx="60" cy="45" r="20" fill="var(--mck-blue-bg)" stroke="var(--mck-navy)" strokeWidth="2.5" />
                    <path d="M 30,120 C 30,90 40,80 60,80 C 80,80 90,90 90,120 Z" fill="var(--mck-blue-bg)" stroke="var(--mck-navy)" strokeWidth="2.5" />
                    <circle cx="60" cy="95" r="3" fill="var(--mck-terracotta)" />
                    <line x1="60" y1="90" x2="60" y2="105" stroke="var(--mck-terracotta)" strokeWidth="3" strokeLinecap="round" />
                  </svg>

                  <div className="bottom-label" style={{ marginTop: "-4px", marginLeft: "-12px" }}>
                    1 名正式员工（统筹）
                  </div>
                </div>

                <div className="mini-box" style={{ minHeight: "158px", paddingBottom: "18px", overflow: "visible" }}>
                  <h3>5 名外援执行测试</h3>

                  <div className="user-row">
                    <div className="user gray"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px", padding: "0 28px 0 4px", fontSize: "16px", fontWeight: "900" }}>
                    <div style={{ textAlign: "center", position: "relative", left: "22px" }}>
                      统筹转达
                    </div>
                    <div style={{ textAlign: "center", position: "relative", left: "-28px" }}> 
                      实际测试执行 × 4
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片：流程 */}
            <div className="card green">
              <div className="section-title">
                <div className="icon-circle green-bg">
                  <Layers size={22} strokeWidth={2} />
                </div>
                <h2 className="green-text">流程</h2>
              </div>

              {/* <div className="flow-head">
                需求混乱，每个人的工作/工时盘不清楚
              </div> */}

              {/* <ul className="desc" style={{ marginTop: "10px" }}>
                <li>信息散落在产品/项目经理/研发/测试各自维护的表格中，互不对齐</li>
                <li>需求管理混乱、入口割裂、信息不同步</li>
              </ul> */}

              <div className="flow-grid">
                <div className="table-card">
                  <div className="table-title tb-blue">产品</div>
                  <table>
                    <thead>
                      <tr><th>需求</th><th>状态</th><th>负责人</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                    </tbody>
                  </table>
                  <div className="neq">≠</div>
                </div>

                <div className="table-card">
                  <div className="table-title tb-green">项目经理</div>
                  <table>
                    <thead>
                      <tr><th>需求</th><th>进度</th><th>工时</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                    </tbody>
                  </table>
                  <div className="neq">≠</div>
                </div>

                <div className="table-card">
                  <div className="table-title tb-orange">研发</div>
                  <table>
                    <thead>
                      <tr><th>需求</th><th>开发进度</th><th>备注</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                    </tbody>
                  </table>
                  <div className="neq">≠</div>
                </div>

                <div className="table-card">
                  <div className="table-title tb-purple">测试</div>
                  <table>
                    <thead>
                      <tr><th>用例</th><th>执行状态</th><th>缺陷</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                      <tr><td>...</td><td>...</td><td>...</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="warn">
                ⚠ 互不对齐 / 信息不同步 / 入口割裂 / 工时盘不清楚
              </div>
            </div>

            {/* 卡片：知识 */}
            <div className="card purple" style={{ overflow: "visible" }}>
              <div className="section-title">
                <div className="icon-circle blue-bg">
                  <BookOpen size={22} strokeWidth={2} />
                </div>
                <h2 className="purple-text">知识</h2>
              </div>

              <div className="inner-row">
                <div className="mini-box" style={{ borderColor: "var(--mck-blue-border)", minHeight: "228px", paddingBottom: "8px", overflow: "visible" }}>
                  <h3 style={{ color: "var(--mck-navy)", marginTop: "-8px" }}>业务信息（散落各处）</h3>

                  <div className="file-grid">
                    <div className="doc">
                      <div className="doc-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "38px" }}>
                        <FileText size={26} strokeWidth={2} className="text-[#1d70b8]" />
                      </div>
                      <div style={{ marginTop: "-2px", fontSize: "12px", fontWeight: "600" }}>PRD_v1.0</div>
                    </div>

                    <div className="doc">
                      <div className="doc-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "38px" }}>
                        <FileText size={26} strokeWidth={2} className="text-[#1d70b8]" />
                      </div>
                      <div style={{ marginTop: "-2px", fontSize: "12px", fontWeight: "600" }}>PRD_旧版</div>
                    </div>

                    <div className="doc">
                      <div className="doc-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "38px" }}>
                        <FileText size={26} strokeWidth={2} className="text-[#1d70b8]" />
                      </div>
                      <div style={{ marginTop: "-2px", fontSize: "12px", fontWeight: "600" }}>需求说明</div>
                    </div>

                    <div className="doc">
                      <div className="doc-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "38px" }}>
                        <FileText size={26} strokeWidth={2} className="text-[#1d70b8]" />
                      </div>
                      <div style={{ marginTop: "-2px", fontSize: "12px", fontWeight: "600" }}>用例_A</div>
                    </div>

                    <div className="doc">
                      <div className="doc-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "38px" }}>
                        <FileText size={26} strokeWidth={2} className="text-[#1d70b8]" />
                      </div>
                      <div style={{ marginTop: "-2px", fontSize: "12px", fontWeight: "600" }}>用例_B</div>
                    </div>

                    <div className="doc">
                      <div className="doc-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "38px" }}>
                        <FileText size={26} strokeWidth={2} className="text-[#1d70b8]" />
                      </div>
                      <div style={{ marginTop: "-2px", fontSize: "12px", fontWeight: "600" }}>接口文档</div>
                    </div>

                    <div className="doc">
                      <div className="doc-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "38px" }}>
                        <FileText size={26} strokeWidth={2} className="text-[#1d70b8]" />
                      </div>
                      <div style={{ marginTop: "-2px", fontSize: "12px", fontWeight: "600" }}>设计稿</div>
                    </div>

                    <div className="doc">
                      <div className="doc-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "38px", color: "var(--mck-blue-border)", fontWeight: "800", fontSize: "18px" }}>
                        ......
                      </div>
                      <div style={{ marginTop: "-2px", fontSize: "12px", fontWeight: "600" }}></div>
                    </div>
                  </div>
                </div>

                <div className="mini-box" style={{ borderColor: "var(--mck-blue-border)", minHeight: "228px", paddingBottom: "8px", overflow: "visible" }}>
                  <div className="bubble thinking">
                    只有老人知道<br />
                    老人一走<br />
                    全靠猜
                  </div>

                  <svg className="person-svg" style={{ marginLeft: "48px", marginTop: "14px", width: "90px", height: "120px" }} viewBox="0 0 120 160">
                    <circle cx="60" cy="45" r="20" fill="var(--mck-blue-bg)" stroke="var(--mck-navy)" strokeWidth="2.5" />
                    <path d="M 30,120 C 30,90 40,80 60,80 C 80,80 90,90 90,120 Z" fill="var(--mck-blue-bg)" stroke="var(--mck-navy)" strokeWidth="2.5" />
                    <text x="53" y="105" fontSize="24" fontWeight="900" fill="var(--mck-terracotta)">?</text>
                  </svg>

                  <div className="bottom-label" style={{ color: "var(--mck-slate)", marginTop: "2px" }}>
                    无沉淀 / 难传承 / 新人难上手
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片：质量 */}
            <div className="card orange">
              <div className="section-title">
                <div className="icon-circle orange-bg">
                  <ShieldCheck size={22} strokeWidth={2} />
                </div>
                <h2 className="orange-text">质量</h2>
              </div>

              {/* <div className="quality-title">
                理想同学 APP 游离在质量团队之外
              </div> */}

              <div className="quality-row">
                <div className="team-box">
                  <div className="team-title">质量团队</div>

                  <div className="members">
                    <div className="member"></div>
                    <div className="member"></div>
                    <div className="member"></div>
                  </div>

                  <ul>
                    <li>测试策略</li>
                    <li>质量标准</li>
                    <li>测试工具</li>
                    <li>缺陷管理</li>
                    <li>......</li>
                  </ul>
                </div>

                <div className="big-x">×</div>

                <div className="team-box orange-border">
                  <div className="team-title" style={{ color: "var(--mck-terracotta)" }}>理想同学 APP 团队</div>

                  <div className="members">
                    <div className="member orange"></div>
                    <div className="member orange"></div>
                    <div className="member orange"></div>
                  </div>

                  <ul>
                    <li>自行测试</li>
                    <li>自行把控</li>
                    <li>标准不统一</li>
                    <li>缺乏质量协同</li>
                  </ul>
                </div>

                <div className="speech">
                  ☹ 游离在质量团队之外<br /><br />
                  缺乏统一标准<br />
                  与协同机制
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Section 1: 前置诊断 */}
        <div className="section">
          <div className="section-header">
            <div className="section-index">1</div>
            <div className="section-title">前置诊断：深入现场，盘点现状</div>
          </div>
          <div className="section-content">
            <div className="grid-2" style={{ gridTemplateColumns: "1.5fr 1fr" }}>
              <div className="card">
                <div className="card-title">
                  <i className="fa-solid fa-clipboard-question"></i> 前置诊断：我做了两件事
                </div>
                <div className="muti-col">
                  <div className="mini-box">
                    <div className="mini-title">1. 盘清团队分工</div>
                    <ul>
                      <li>谁在做什么</li>
                      <li>时间花在哪里</li>
                      <li>信息是怎么流转</li>
                    </ul>
                  </div>
                  <div className="mini-box">
                    <div className="mini-title">2. 观察记录</div>
                    <ul>
                      <li>深入测试现场，跟听大家痛点</li>
                      <li>与各端侧的协作问题</li>
                      <li>人力、资源的问题</li>
                    </ul>
                  </div>
                </div>

                <div className="core-title">暴露反常现象 (部分)</div>
                <div className="mini-box" style={{ marginTop: "12px", border: "1px solid #ffcccc", background: "#fff9f9" }}>
                  <ul style={{ listStyleType: "none", paddingLeft: "0", margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#111827", fontSize: "15px", lineHeight: "1.6" }}>
                      <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "3px" }} />
                      <div>
                        <b>突然被拉进群，云端XX功能已提测，APP端开始端到端测试</b>
                        <span style={{ color: "#374151", marginLeft: "4px" }}>“纯云端改动，APP端未改动; 且被临时拉群通知……”</span>
                      </div>
                    </li>
                    <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#111827", fontSize: "15px", lineHeight: "1.6" }}>
                      <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "3px" }} />
                      <div>
                        <b>测试同学频繁报风险"没有测试车，Bug无法闭环验证"</b>
                        <span style={{ color: "#374151", marginLeft: "4px" }}>“E2E测试过程中发现的车机问题，但是记录/复现/复测均占用APP资源”</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 第二列 */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="pain-loop-box bg-white" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div className="pain-loop-title">测试资源枯竭</div>
                  <div className="pain-loop-area">
                    <div className="pain-circle purple-circle pc1" style={{ background: "var(--mck-blue-bg)", borderColor: "var(--mck-blue-border)", color: "var(--mck-blue)" }}>组织架构紊乱</div>
                    <div className="pain-circle orange-circle pc2">职责边界模糊</div>
                    <div className="pain-circle orange-circle pc3">全量手工苦熬</div>
                    <div className="pain-circle green-circle pc4">依赖实体硬件</div>
                    <svg className="arrow-svg" viewBox="0 0 380 260">
                      <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                          <path d="M0,0 L0,6 L9,3 z" fill="var(--mck-blue)" />
                        </marker>
                      </defs>
                      {/* Top curve: C1 -> C2 */}
                      <path d="M 142 55 Q 190 30 238 55" fill="none" stroke="var(--mck-blue)" strokeWidth="2.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />
                      {/* Right curve: C2 -> C3 */}
                      <path d="M 295 123 Q 345 135 295 147" fill="none" stroke="var(--mck-blue)" strokeWidth="2.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />
                      {/* Bottom curve: C3 -> C4 */}
                      <path d="M 238 215 Q 190 240 142 215" fill="none" stroke="var(--mck-blue)" strokeWidth="2.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />
                      {/* Left curve: C4 -> C1 */}
                      <path d="M 85 147 Q 25 135 85 123" fill="none" stroke="var(--mck-blue)" strokeWidth="2.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Section 2: 第一板斧 */}
        <div className="section">
          <div className="section-header">
            <div className="section-index">2</div>
            <div className="section-title">第一板斧：扎稳底盘，建立流程规则与需求边界隔离 (破局 L2)</div>
          </div>
          <div className="section-content">
            <div className="s2-content" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
              {/* Column 1 */}
              <div className="s2-panel">
                <div className="s2-panel-title">组织协作模式 Before / After 对比</div>

                <div className="compare-grid">
                  <div className="s2-before">
                    <div className="before-tag">改造前：统筹中转模式</div>

                    <div className="flow-box flow-box-red">产品 / 研发</div>

                    <div className="down-arrow">
                      需求 & 信息
                      <i className="fa-solid fa-arrow-down"></i>
                    </div>

                    <div className="flow-box flow-box-red">
                      统筹转达<br />
                      （1 人兜底）
                    </div>

                    <div className="down-arrow">
                      转达（失真/延迟）
                      <i className="fa-solid fa-arrow-down"></i>
                    </div>

                    <div className="flow-box flow-box-red">
                      一线测试 A / B / C<br />
                      被动提收
                    </div>
                  </div>

                  <div className="s2-after">
                    <div className="after-tag">改造后：Owner 直连模式</div>

                    <div className="flow-box flow-box-green">
                      飞书项目 AR<br />
                      统一管理平台
                    </div>

                    <div className="skill-row">
                      <div className="skill-item">
                        <i className="fa-regular fa-file-lines"></i>
                        <div>文档归档</div>
                      </div>

                      <div className="skill-item">
                        <i className="fa-regular fa-clock"></i>
                        <div>关键时间管理</div>
                      </div>

                      <div className="skill-item">
                        <i className="fa-solid fa-robot"></i>
                        <div>AI Skill 支持</div>
                      </div>
                    </div>

                    <div className="flow-box flow-box-green">产品 / 研发</div>

                    <div className="owner-row">
                      <div className="owner-card">
                        <div className="otitle">测试 Owner A</div>
                        <div className="odesc">需求全生命周期</div>
                      </div>

                      <div className="owner-card">
                        <div className="otitle">测试 Owner B</div>
                        <div className="odesc">需求全生命周期</div>
                      </div>

                      <div className="owner-card">
                        <div className="otitle">测试 Owner C</div>
                        <div className="odesc">需求全生命周期</div>
                      </div>
                    </div>

                    <div className="green-bottom">
                      直接对话 · 信息透明 · 进度清晰 · 节点可控
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="s2-panel" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="s2-panel-title" style={{ textAlign: "center" }}>AI 测试用例矩阵</div>
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AICognitionCanvas />
                </div>
              </div>

            </div>

            <div className="effect-row" style={{ margin: "14px 18px 0" }}>
              <div className="effect-tag">板斧效果</div>
              <div className="effect-list">
                1. <b>一个外援角色</b>的重新定位 + <b>一个平台</b>的统一收口 + <b>2个 AI Skill</b> 的降门槛 + <b>5个问题</b>解决（需求管理混乱、信息入口分散、信息不同步、进展不清晰、时间节点不明确）<br />
                2. 测试策略的优先级有了<b>数据支撑</b>，不再凭经验判断哪些模块重要，而是从用户反馈数据中直接看到哪些模块出问题最多、影响最大。
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: 第二板斧 */}
        <div className="section" style={{ minHeight: "auto", overflow: "visible" }}>
          <div className="section-header">
            <div className="section-index">3</div>
            <div className="section-title">第二板斧：提升效率 — 让测试从"人肉"到"智能"</div>
          </div>

          <div className="section-content" style={{ padding: "18px" }}>
            {/* Top Summaries */}
            <div className="top-summary" style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
              {/* Card 1: 15 天功能测试周期 */}
              <div className="summary-card" style={{
                background: "linear-gradient(135deg, var(--mck-blue-bg) 0%, #ffffff 100%)",
                border: "2.5px solid var(--mck-blue-border)",
                borderRadius: "16px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16.5px",
                boxShadow: "0 4px 12px rgba(12, 35, 64, 0.03)",
                transition: "all 0.3s ease",
              }}>
                <div className="summary-icon" style={{
                  fontSize: "24px",
                  background: "var(--mck-blue-bg)",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>⏱️</div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span className="summary-value" style={{ fontSize: "32px", color: "var(--mck-blue)", fontWeight: "800", fontFamily: "var(--font-mono)" }}>15</span>
                    <span style={{ fontSize: "14px", color: "var(--mck-navy)", fontWeight: "700" }}>天</span>
                  </div>
                  <div className="summary-label" style={{ color: "var(--mck-navy)", fontSize: "13px", fontWeight: "600", marginTop: "2px" }}>无人泊车测试周期</div>
                </div>
              </div>

              {/* Card 2: 33 天/月 */}
              <div className="summary-card" style={{
                background: "linear-gradient(135deg, var(--mck-terracotta-bg) 0%, #ffffff 100%)",
                border: "2.5px solid var(--mck-terracotta-border)",
                borderRadius: "16px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16.5px",
                boxShadow: "0 4px 12px rgba(227, 114, 34, 0.03)",
                transition: "all 0.3s ease",
              }}>
                <div className="summary-icon" style={{
                  fontSize: "24px",
                  background: "var(--mck-terracotta-bg)",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>📅</div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span className="summary-value" style={{ fontSize: "32px", color: "var(--mck-terracotta)", fontWeight: "800", fontFamily: "var(--font-mono)" }}>33</span>
                    <span style={{ fontSize: "14px", color: "var(--mck-navy)", fontWeight: "700" }}>天/月+</span>
                  </div>
                  <div className="summary-label" style={{ color: "var(--mck-navy)", fontSize: "13px", fontWeight: "600", marginTop: "2px" }}>手动回归时间浪费</div>
                </div>
              </div>

              {/* Card 3: 0 台测试车 */}
              <div className="summary-card" style={{
                background: "linear-gradient(135deg, var(--mck-teal-bg) 0%, #ffffff 100%)",
                border: "2.5px solid var(--mck-teal-border)",
                borderRadius: "16px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16.5px",
                boxShadow: "0 4px 12px rgba(0, 163, 166, 0.03)",
                transition: "all 0.3s ease",
              }}>
                <div className="summary-icon" style={{
                  fontSize: "24px",
                  background: "var(--mck-teal-bg)",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>🚗</div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span className="summary-value" style={{ fontSize: "32px", color: "var(--mck-teal)", fontWeight: "800", fontFamily: "var(--font-mono)" }}>0</span>
                    <span style={{ fontSize: "14px", color: "var(--mck-navy)", fontWeight: "700" }}>台</span>
                  </div>
                  <div className="summary-label" style={{ color: "var(--mck-navy)", fontSize: "13px", fontWeight: "600", marginTop: "2px" }}>自有自由测试车</div>
                </div>
              </div>

              {/* Card 4: 5 人团队规模 */}
              <div className="summary-card" style={{
                background: "linear-gradient(135deg, var(--mck-blue-bg) 0%, #ffffff 100%)",
                border: "2.5px solid var(--mck-blue-border)",
                borderRadius: "16px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16.5px",
                boxShadow: "0 4px 12px rgba(12, 35, 64, 0.04)",
                transition: "all 0.3s ease",
              }}>
                <div className="summary-icon" style={{
                  fontSize: "24px",
                  background: "var(--mck-blue-bg)",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>👥</div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span className="summary-value" style={{ fontSize: "32px", color: "var(--mck-navy)", fontWeight: "800", fontFamily: "var(--font-mono)" }}>5</span>
                    <span style={{ fontSize: "14px", color: "var(--mck-navy)", fontWeight: "700" }}>人</span>
                  </div>
                  <div className="summary-label" style={{ color: "var(--mck-navy)", fontSize: "13px", fontWeight: "600", marginTop: "2px" }}>核心测试团队规模</div>
                </div>
              </div>
            </div>



            {/* Root Cause flow diagram */}
            <div className="flow-area" style={{ marginTop: "20px" }}>
              <div className="flow-title" style={{ marginBottom: "16px" }}>问题根因链路</div>

              {/* Top row: cause chain */}
              <div style={{ display: "flex", alignItems: "center", gap: "0", marginBottom: "18px" }}>
                {[
                  { text: "全量手工回归", color: "blue" },
                  { text: "无分层策略", color: "blue" },
                  { text: "端到端硬扛", color: "blue" },
                  { text: "效率锁死", color: "red" },
                  { text: "破局方向", color: "green" },
                ].map((node, i, arr) => (
                  <React.Fragment key={node.text}>
                    <div style={{
                      flex: "1",
                      textAlign: "center",
                      padding: "14px 8px",
                      borderRadius: "10px",
                      fontWeight: 800,
                      fontSize: "16px",
                      border: node.color === "red" ? "2px solid var(--mck-terracotta)" :
                             node.color === "green" ? "2px solid var(--mck-teal)" :
                             "2px solid var(--mck-blue-border)",
                      color: node.color === "red" ? "var(--mck-terracotta)" :
                             node.color === "green" ? "var(--mck-teal)" : "var(--mck-navy)",
                      background: node.color === "red" ? "var(--mck-terracotta-bg)" :
                                  node.color === "green" ? "var(--mck-teal-bg)" :
                                  "var(--mck-blue-bg)",
                    }}>
                      {node.text}
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ flexShrink: 0, width: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className="fa-solid fa-arrow-right" style={{
                          color: node.color === "red" ? "var(--mck-terracotta)" : "var(--mck-blue)",
                          fontSize: "16px",
                        }}></i>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Bottom row: detail nodes */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0" }}>
                {/* Left side: problem details */}
                <div style={{ flex: "2.5", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Dashed connector indicator */}
                  <div style={{ textAlign: "center", color: "var(--mck-blue-border)", fontSize: "12px", fontWeight: 600, marginBottom: "2px" }}>
                    ⋮ 根因拆解 ⋮
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div style={{
                      flex: "1",
                      textAlign: "center",
                      padding: "12px 10px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "13px",
                      border: "1.5px solid var(--mck-blue-border)",
                      color: "var(--mck-navy)",
                      background: "#ffffff",
                    }}>
                      Feature / DailyBuild / 封板<br />三轮测试
                    </div>
                    <div style={{
                      flex: "1",
                      textAlign: "center",
                      padding: "12px 10px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "13px",
                      border: "1.5px solid var(--mck-blue-border)",
                      color: "var(--mck-navy)",
                      background: "#ffffff",
                    }}>
                      依赖实车 ｜ 无 Mock ｜ 无自动化
                    </div>
                  </div>
                </div>

                {/* Arrow from 效率锁死 → 破局方向 transition */}
                <div style={{ flexShrink: 0, width: "28px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "6px" }}></div>

                {/* Right side: solutions */}
                <div style={{ flex: "3", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ textAlign: "center", color: "var(--mck-teal)", fontSize: "12px", fontWeight: 600, marginBottom: "2px" }}>
                    ▼ 解决方案 ▼
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {[
                      { text: "UI 自动化<br/>减少手工" },
                      { text: "Mock<br/>解除硬依赖" },
                      { text: "分层策略<br/>精准投入" },
                    ].map((s) => (
                      <div key={s.text} style={{
                        flex: "1",
                        textAlign: "center",
                        padding: "14px 8px",
                        borderRadius: "10px",
                        fontWeight: 800,
                        fontSize: "13px",
                        border: "2px solid var(--mck-teal)",
                        color: "var(--mck-teal)",
                        background: "var(--mck-teal-bg)",
                      }}
                      dangerouslySetInnerHTML={{ __html: s.text }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-section 2: 解除实车依赖方案 & UI 自动化方案 */}
            <div style={{ marginTop: "32px", borderTop: "2px solid #e2e8f0", paddingTop: "24px" }}>
              <div style={{ fontSize: "20px", fontWeight: 800, color: "#1d4ed8", marginBottom: "14px" }}>
                🎯 解除实车依赖方案 & UI 自动化方案
              </div>

              <div className="grid-2" style={{ gridTemplateColumns: "1.5fr 1fr", gap: "16px", padding: 0 }}>
                
                {/* Right Column: 远程车控交互时序与 Mock 方案流程图 (流程图复刻) */}
                <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "flex-start", background: "#ffffff", padding: "16px", borderRadius: "16px", border: "2px solid #bfdbfe", overflow: "hidden" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div className="card-title" style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "var(--mck-navy)", display: "flex", alignItems: "center", gap: "8px" }}>
                      🌐 远程车控交互时序与 Mock 方案
                    </div>
                  </div>
                  <FlowchartBoard />
                </div>

                {/* Left Column: UI自动化实施路径 */}
                <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                  <div>
                    <div className="card-title" style={{ fontSize: "18px", fontWeight: 800, color: "var(--mck-navy)", display: "flex", alignItems: "center", gap: "8px" }}>
                      🛣️ UI自动化实施路径
                    </div>

                    <div className="implementation-grid" style={{ marginBottom: "14px" }}>
                      <div className="phase-card">
                        <div className="phase-title">阶段1：工具选型</div>
                        <div className="step">候选工具评估</div>
                        <div className="step">团队现状、学习成本</div>
                        <div className="step">AI 集成能力对比</div>
                        <div className="step" style={{ color: "#16a34a", fontWeight: 700 }}>✅ 选定 Maestro</div>
                      </div>

                      <div className="phase-card">
                        <div className="phase-title">阶段2：环境搭建</div>
                        <div className="step">Android Studio 模拟器</div>
                        <div className="step">ADB + Maestro CLI</div>
                        <div className="step" style={{ color: "var(--mck-teal)", fontWeight: 700 }}>完整联调环境</div>
                      </div>

                      <div className="phase-card">
                        <div className="phase-title">阶段3：提效 skill</div>
                        <div className="step">📸 自动抓取元素 ID</div>
                        <div className="step">📝 自然语言描述</div>
                        <div className="step">🔧 自动拆解步骤</div>
                        <div className="step">🔗 匹配元素 ID</div>
                        <div className="step">📄 生成 Maestro YAML</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ border: "2px solid var(--mck-blue-border)", borderRadius: "12px", padding: "12px", textAlign: "center", color: "var(--mck-blue)", fontWeight: 700, fontSize: "16.5px", background: "var(--mck-blue-bg)" }}>
                    🎯 AI 嵌入自动化生产链路
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Split Layout: 50% Table + 50% Timeline */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "2.3fr 1fr",
              gap: "24px",
              marginTop: "24px",
              alignItems: "stretch"
            }}>
              {/* Left Column: Layered Testing Strategy Table */}
              <div className="table-wrap" style={{
                background: "#ffffff",
                border: "2px solid var(--mck-blue-border)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(12,35,64,0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
                {/* 卡片外壳标题 */}
                <div style={{ 
                  padding: "14px 20px", 
                  background: "var(--mck-blue-bg)", 
                  borderBottom: "2px solid var(--mck-blue-border)", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "10px" 
                }}>
                  <div style={{ 
                    width: "28px", 
                    height: "28px", 
                    borderRadius: "6px", 
                    background: "var(--mck-navy)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    boxShadow: "0 3px 8px rgba(12,35,64,0.1)"
                  }}>
                    <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "#ffffff", strokeWidth: 2, fill: "none" }}>
                      <path d="M12 3l8 4-8 4-8-4 8-4z"/>
                      <path d="M4 12l8 4 8-4"/>
                      <path d="M4 17l8 4 8-4"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: "18px", fontWeight: 800, color: "var(--mck-navy)" }}>
                  业务验证链路分层
                  </span>
                </div>

                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={{ width: "15%", height: "48px", background: "var(--mck-blue-bg)", border: "2px solid var(--mck-blue-border)", padding: "0 8px", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}>
                          <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--mck-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "13px", height: "13px", stroke: "#fff", strokeWidth: 2, fill: "none" }}>
                              <path d="M12 3l8 4-8 4-8-4 8-4z"/>
                              <path d="M4 12l8 4 8-4"/>
                              <path d="M4 17l8 4 8-4"/>
                            </svg>
                          </div>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>层级</span>
                        </div>
                      </th>
                      <th style={{ width: "37%", height: "48px", background: "var(--mck-blue-bg)", border: "2px solid var(--mck-blue-border)", padding: "0 8px", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}>
                          <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--mck-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "13px", height: "13px", stroke: "#fff", strokeWidth: 2, fill: "none" }}>
                              <path d="M10 13a5 5 0 0 1 0-7l2-2a5 5 0 1 1 7 7l-2 2"/>
                              <path d="M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 1 1-7-7l2-2"/>
                            </svg>
                          </div>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>链路策略</span>
                        </div>
                      </th>
                      <th style={{ width: "15%", height: "48px", background: "var(--mck-blue-bg)", border: "2px solid var(--mck-blue-border)", padding: "0 8px", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}>
                          <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--mck-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "13px", height: "13px", stroke: "#fff", strokeWidth: 2, fill: "none" }}>
                              <circle cx="12" cy="12" r="9"/>
                              <path d="M12 7v5l3 2"/>
                            </svg>
                          </div>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>使用时机</span>
                        </div>
                      </th>
                      <th style={{ width: "18%", height: "48px", background: "var(--mck-blue-bg)", border: "2px solid var(--mck-blue-border)", padding: "0 8px", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}>
                          <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--mck-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "13px", height: "13px", stroke: "#fff", strokeWidth: 2, fill: "none" }}>
                              <circle cx="12" cy="12" r="8"/>
                              <circle cx="12" cy="12" r="3"/>
                              <path d="M12 12l7-7"/>
                            </svg>
                          </div>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>核心目标</span>
                        </div>
                      </th>
                      <th style={{ width: "15%", height: "48px", background: "var(--mck-blue-bg)", border: "2px solid var(--mck-blue-border)", padding: "0 8px", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}>
                          <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--mck-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "13px", height: "13px", stroke: "#fff", strokeWidth: 2, fill: "none" }}>
                              <path d="M12 3l2.8 5.6 6.2.9-4.5 4.3 1 6.2L12 17l-5.5 3 1-6.2L3 9.5l6.2-.9z"/>
                            </svg>
                          </div>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>特点</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 - L1 */}
                    <tr>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <span style={{ padding: "2px 6px", borderRadius: "4px", fontSize: "11px", fontWeight: 800, border: "1.5px solid var(--mck-blue-border)", background: "var(--mck-blue-bg)", color: "var(--mck-blue)" }}>
                            L1
                          </span>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-blue)" }}>
                            功能验证层
                          </span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-blue)", strokeWidth: 2, fill: "none" }}>
                              <path d="M7 18a4 4 0 1 1 1-7.8A5 5 0 0 1 18 9a4 4 0 0 1 0 8"/>
                            </svg>
                            真实 livis
                          </span>
                          <span style={{ color: "var(--mck-blue-border)", fontSize: "11px" }}>+</span>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-blue)", strokeWidth: 2, fill: "none" }}>
                              <path d="M5 16h14"/>
                              <path d="M7 16l2-5h6l2 5"/>
                              <circle cx="7" cy="18" r="1"/>
                              <circle cx="17" cy="18" r="1"/>
                            </svg>
                            真实车云
                          </span>
                          <span style={{ color: "var(--mck-blue-border)", fontSize: "11px" }}>+</span>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-blue)", strokeWidth: 2, fill: "none" }}>
                              <path d="M12 2l8 4-8 4-8-4z"/>
                              <path d="M4 6v8l8 4 8-4V6"/>
                            </svg>
                            Mock 车机端
                          </span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-blue)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <path d="M5 3v18"/>
                            <path d="M5 4h10l-2 4 2 4H5"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>Feature 分支验证</span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-blue)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="8"/>
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 12l7-7"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>快速验证功能正确性</span>
                        </div>
                      </td>
                      <td style={{ borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-blue)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <path d="M13 2L4 14h6l-1 8 9-12h-6z"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>成本低、反馈快</span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 - L2 */}
                    <tr>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <span style={{ padding: "2px 6px", borderRadius: "4px", fontSize: "11px", fontWeight: 800, border: "1.5px solid var(--mck-teal-border)", background: "var(--mck-teal-bg)", color: "var(--mck-teal)" }}>
                            L2
                          </span>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-teal)" }}>
                            集成回归层
                          </span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-teal)", strokeWidth: 2, fill: "none" }}>
                              <path d="M7 18a4 4 0 1 1 1-7.8A5 5 0 0 1 18 9a4 4 0 0 1 0 8"/>
                            </svg>
                            真实 livis
                          </span>
                          <span style={{ color: "var(--mck-teal-border)", fontSize: "11px" }}>+</span>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-teal)", strokeWidth: 2, fill: "none" }}>
                              <rect x="4" y="4" width="10" height="10"/>
                              <rect x="14" y="10" width="6" height="6"/>
                            </svg>
                            真实车云(prod)
                          </span>
                          <span style={{ color: "var(--mck-teal-border)", fontSize: "11px" }}>+</span>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-teal)", strokeWidth: 2, fill: "none" }}>
                              <path d="M12 2l8 4-8 4-8-4z"/>
                              <path d="M4 6v8l8 4 8-4V6"/>
                            </svg>
                            Mock 车机端
                          </span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-teal)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <rect x="3" y="5" width="18" height="16" rx="2"/>
                            <path d="M8 3v4"/>
                            <path d="M16 3v4"/>
                            <path d="M3 10h18"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>Daily Build 回归</span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-teal)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="8"/>
                            <path d="M12 12l5-5"/>
                            <path d="M12 12h4"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>验证跨服务集成稳定性</span>
                        </div>
                      </td>
                      <td style={{ borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-teal)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>成本低、反馈快、稳定性高</span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 - L3 */}
                    <tr>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <span style={{ padding: "2px 6px", borderRadius: "4px", fontSize: "11px", fontWeight: 800, border: "1.5px solid var(--mck-blue-border)", background: "var(--mck-navy)", color: "#ffffff" }}>
                            L3
                          </span>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>
                            端到端验收层
                          </span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-navy)", strokeWidth: 2, fill: "none" }}>
                              <path d="M7 18a4 4 0 1 1 1-7.8A5 5 0 0 1 18 9a4 4 0 0 1 0 8"/>
                            </svg>
                            真实 livis
                          </span>
                          <span style={{ color: "var(--mck-blue-border)", fontSize: "11px" }}>+</span>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-navy)", strokeWidth: 2, fill: "none" }}>
                              <path d="M7 18a4 4 0 1 1 1-7.8A5 5 0 0 1 18 9a4 4 0 0 1 0 8"/>
                            </svg>
                            真实车云
                          </span>
                          <span style={{ color: "var(--mck-blue-border)", fontSize: "11px" }}>+</span>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-navy)", strokeWidth: 2, fill: "none" }}>
                              <path d="M5 16h14"/>
                              <path d="M7 16l2-5h6l2 5"/>
                              <circle cx="7" cy="18" r="1"/>
                              <circle cx="17" cy="18" r="1"/>
                            </svg>
                            真实车机端
                          </span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-navy)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/>
                            <path d="M9 12l2 2 4-4"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>封板/P0 验收</span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-navy)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="8"/>
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 12l7-7"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>验证真实用户场景</span>
                        </div>
                      </td>
                      <td style={{ borderBottom: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-navy)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <path d="M4 18h16"/>
                            <path d="M6 18V8l6-4 6 4v10"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>最接近线上环境</span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 - L4 */}
                    <tr>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <span style={{ padding: "2px 6px", borderRadius: "4px", fontSize: "11px", fontWeight: 800, border: "1.5px solid var(--mck-terracotta-border)", background: "var(--mck-terracotta-bg)", color: "var(--mck-terracotta)" }}>
                            L4
                          </span>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-terracotta)" }}>
                            端侧紧急 Bugfix
                          </span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-terracotta)", strokeWidth: 2, fill: "none" }}>
                              <path d="M7 18a4 4 0 1 1 1-7.8A5 5 0 0 1 18 9a4 4 0 0 1 0 8"/>
                            </svg>
                            真实 livis
                          </span>
                          <span style={{ color: "var(--mck-terracotta-border)", fontSize: "11px" }}>+</span>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-terracotta)", strokeWidth: 2, fill: "none" }}>
                              <rect x="4" y="4" width="10" height="10"/>
                              <rect x="14" y="10" width="6" height="6"/>
                            </svg>
                            真实车云(prod)
                          </span>
                          <span style={{ color: "var(--mck-terracotta-border)", fontSize: "11px" }}>+</span>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mck-navy)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", stroke: "var(--mck-terracotta)", strokeWidth: 2, fill: "none" }}>
                              <path d="M12 2l8 4-8 4-8-4z"/>
                              <path d="M4 6v8l8 4 8-4V6"/>
                            </svg>
                            Mock 车机(prod)
                          </span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-terracotta)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>灰度/上线后</span>
                        </div>
                      </td>
                      <td style={{ borderRight: "2px solid var(--mck-blue-border)", padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-terracotta)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="8"/>
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 12l7-7"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>快速复测 APP 端侧问题</span>
                        </div>
                      </td>
                      <td style={{ padding: "12px 14px", verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", stroke: "var(--mck-terracotta)", strokeWidth: 2, fill: "none", flexShrink: 0 }}>
                            <path d="M5 19l14-14"/>
                            <path d="M9 5h10v10"/>
                          </svg>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mck-navy)" }}>成本低、效率高</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Right Column: Timeline Flowchart Progress (调研 -> 沟通 -> 5月自动化 -> 6月提效) */}
              <div style={{
                background: "#ffffff",
                border: "2px solid #cfdcff",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(43,89,255,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "100%"
              }}>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--mck-navy)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "18px" }}>📅</span>
                  <span>自动化推进路线与时间线</span>
                </div>

                <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", paddingLeft: "8px" }}>
                  {/* Vertical Timeline Track Line */}
                  <div style={{
                    position: "absolute",
                    left: "15px",
                    top: "14px",
                    bottom: "22px",
                    width: "3px",
                    borderRadius: "1.5px",
                    background: "linear-gradient(to bottom, #10b981 0%, #10b981 38%, #1f63ff 44%, #1f63ff 74%, #cbd5e1 80%, #cbd5e1 100%)"
                  }} />

                  {/* Step 1 */}
                  <div style={{ position: "relative", paddingLeft: "42px", paddingBottom: "12px" }}>
                    {/* Icon Status Indicator Check */}
                    <div style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#e6f4ea",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #10b981",
                      boxShadow: "0 2px 6px rgba(16,185,129,0.15)"
                    }}>
                      <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}>
                        <path d="M20 6L9 17l-5-5" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                      </svg>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                        <span style={{ fontSize: "11px", height: "18px", padding: "0 8px", background: "#e6f4ea", color: "#10b981", borderRadius: "10px", fontWeight: 600, display: "inline-flex", alignItems: "center" }}>已完成</span>
                        <span style={{ fontSize: "11px", color: "gray" }}>5月中旬</span>
                      </div>
                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#08154c", margin: 0 }}>核心痛点与方案调研</h4>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div style={{ position: "relative", paddingLeft: "42px", paddingBottom: "12px" }}>
                    {/* Icon Status Indicator Check */}
                    <div style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#e6f4ea",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #10b981",
                      boxShadow: "0 2px 6px rgba(16,185,129,0.15)"
                    }}>
                      <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}>
                        <path d="M20 6L9 17l-5-5" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                      </svg>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                        <span style={{ fontSize: "11px", height: "18px", padding: "0 8px", background: "#e6f4ea", color: "#10b981", borderRadius: "10px", fontWeight: 600, display: "inline-flex", alignItems: "center" }}>已完成</span>
                        <span style={{ fontSize: "11px", color: "gray" }}>5月下旬</span>
                      </div>
                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#08154c", margin: 0 }}>与研发评审方案可行性与潜在漏洞</h4>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div style={{ position: "relative", paddingLeft: "42px", paddingBottom: "12px" }}>
                    {/* Icon Status Indicator Inner Bullet */}
                    <div style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#e8effe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #1f63ff",
                      boxShadow: "0 2px 6px rgba(31,99,255,0.2)"
                    }}>
                      <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}>
                        <circle cx="12" cy="12" r="8" stroke="#1f63ff" strokeWidth="2.5" fill="none"></circle>
                        <circle cx="12" cy="12" r="4" fill="#1f63ff"></circle>
                      </svg>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                        <span style={{ fontSize: "11px", height: "18px", padding: "0 8px", background: "#e8effe", color: "#1f63ff", borderRadius: "10px", fontWeight: 600, display: "inline-flex", alignItems: "center" }}>推进中</span>
                        <span style={{ fontSize: "11px", color: "#1f63ff", fontWeight: 700 }}>5月底核心</span>
                      </div>
                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#08154c", margin: 0 }}>补齐 P0 核心链路自动化测试用例</h4>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div style={{ position: "relative", paddingLeft: "42px" }}>
                    {/* Icon Status Indicator Circle Outline */}
                    <div style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#f1f3f4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #dadce0"
                    }}>
                      <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}>
                        <circle cx="12" cy="12" r="7" stroke="#9ca3af" strokeWidth="2" fill="none"></circle>
                      </svg>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                        <span style={{ fontSize: "11px", height: "18px", padding: "0 8px", background: "#f1f3f4", color: "#5f6368", borderRadius: "10px", fontWeight: 600, display: "inline-flex", alignItems: "center" }}>规划中</span>
                        <span style={{ fontSize: "11px", color: "gray" }}>6月规划</span>
                      </div>
                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#08154c", margin: 0 }}>投入使用、全面度量及提效数据收集</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-tip">Quality Engineering &middot; AI Driven Testing PPT Slide Deck - Page 2</div>
      </div>
    </motion.div>
  );
}

function FlowchartBoard() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        // The natural width of the board is 1720px
        setScale(width / 1720);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", overflow: "hidden", position: "relative", height: `${860 * scale}px` }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .f-board {
            position:absolute;
            width:1720px;
            height:860px;
            left:0;
            top:0;
            background: radial-gradient(#cbd5e1 1.2px, transparent 1.2px) !important;
            background-size: 24px 24px !important;
            background-color: #ffffff !important;
            font-family: inherit;
            user-select:none;
            border-radius: 12px;
            border: 2px solid var(--mck-blue-border) !important;
        }

        .f-node {
            position:absolute;
            border-radius:12px;
            border: 1.5px solid var(--mck-blue-border) !important;
            text-align:center;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            font-size:14px;
            line-height:1.55;
            color: var(--mck-navy) !important;
            z-index:2;
            background: #ffffff;
            box-shadow: 0 4px 10px rgba(12, 35, 64, 0.03) !important;
            transition: all 0.2s ease;
            font-weight: 600;
        }

        .f-node:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 14px rgba(12, 35, 64, 0.05) !important;
            border-color: var(--mck-blue) !important;
        }

        .f-start {
            width:120px;
            height:68px;
            left:34px;
            top:520px;
            background: var(--mck-blue-bg) !important;
            border-radius:9999px !important;
            border: 2px solid var(--mck-blue) !important;
            font-weight: 800 !important;
        }

        .f-im {
            width:152px;
            height:92px;
            left:192px;
            top:500px;
            background:#ffffff !important;
            border-color: var(--mck-blue-border) !important;
        }

        .f-app {
            width:190px;
            height:180px;
            left:438px;
            top:430px;
            background: var(--mck-blue-bg) !important;
            border: 2px solid var(--mck-blue) !important;
            font-weight: 800 !important;
        }

        .f-car {
            width:160px;
            height:140px;
            left:442px;
            top:208px;
            background: var(--mck-blue-bg) !important;
            border-color: var(--mck-blue-border) !important;
            color: var(--mck-navy) !important;
        }

        .f-terminal {
            width:126px;
            height:104px;
            left:488px;
            top:42px;
            background: #f8fafc !important;
            border-color: #cbd5e1 !important;
            color: #64748b !important;
        }

        .f-mock {
            width:118px;
            height:78px;
            left:714px;
            top:60px;
            background: var(--mck-terracotta-bg) !important;
            border: 2px solid var(--mck-terracotta) !important;
            color: var(--mck-terracotta) !important;
            box-shadow: 0 4px 14px rgba(190, 77, 56, 0.15) !important;
            font-weight: 800 !important;
        }

        .f-livis {
            width:248px;
            height:166px;
            left:780px;
            top:422px;
            background: var(--mck-blue-bg) !important;
            border: 2px solid var(--mck-blue) !important;
            font-weight: 800 !important;
        }

        .f-task {
            width:246px;
            height:194px;
            left:1226px;
            top:402px;
            background: var(--mck-blue-bg) !important;
            border-color: var(--mck-blue-border) !important;
        }

        .f-plan {
            width:148px;
            height:118px;
            left:1546px;
            top:248px;
            background: var(--mck-blue-bg) !important;
            border-color: var(--mck-blue-border) !important;
        }

        .f-nlg {
            width:150px;
            height:88px;
            left:1554px;
            top:720px;
            background: var(--mck-blue-bg) !important;
            border-color: var(--mck-blue-border) !important;
        }

        .f-mock-tip {
            position:absolute;
            left:860px;
            top:40px;
            font-size:24px;
            font-weight:850;
            color: var(--mck-terracotta) !important;
            border-bottom: 2px dashed var(--mck-terracotta) !important;
            padding-bottom: 4px;
        }

        .f-cand {
            position:absolute;
            border-radius:8px;
            border:1.5px dashed var(--mck-terracotta) !important;
            background: var(--mck-terracotta-bg) !important;
            color: var(--mck-terracotta) !important;
            text-align:center;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:13px;
            font-weight:700;
            width:130px;
            height:42px;
            z-index:2;
            box-shadow: none !important;
        }

        .f-svg {
            position:absolute;
            inset:0;
            z-index:1;
        }

        .f-line {
            fill:none;
            stroke: var(--mck-navy) !important;
            stroke-width:2.4;
            marker-end:url(#arrow);
        }

        .f-line-red {
            fill:none;
            stroke: var(--mck-terracotta) !important;
            stroke-width:3.5;
            marker-end:url(#arrowRed);
        }

        .f-dashed-line {
            fill:none;
            stroke: var(--mck-terracotta) !important;
            stroke-width:2.4;
            stroke-dasharray: 6,4;
            marker-end:url(#arrowAmber);
        }

        .f-txt {
            font-size:13px;
            fill: var(--mck-slate) !important;
            font-weight: 500;
        }

        .f-txt-red {
            font-size:13px;
            fill: var(--mck-terracotta) !important;
            font-weight: 800;
        }

        .f-cross {
            stroke: var(--mck-terracotta) !important;
            stroke-width:4.5;
        }
      ` }} />
      <div 
        className="f-board" 
        style={{ 
          transform: `scale(${scale})`, 
          transformOrigin: "top left" 
        }}
      >
        <div className="f-node f-start">
            开始
        </div>

        <div className="f-node f-im">
            用户从IM页面发<br />
            起远程车控
        </div>

        <div className="f-node f-app">
            理想同学APP<br />
            （发起对话请求）
        </div>

        <div className="f-node f-car">
            车云服务
        </div>

        <div className="f-node f-terminal">
            车机端（负责唤<br />
            醒车辆、执行具<br />
            体的车控指令）
        </div>

        <div className="f-node f-mock">
            Mock车机端
        </div>

        <div className="f-mock-tip">
            最终选定Mock数据着手点
        </div>

        <div className="f-cand" style={{ left: "830px", top: "320px" }}>
            Mock 候选位置1
        </div>

        <div className="f-cand" style={{ left: "230px", top: "250px" }}>
            Mock 候选位置2
        </div>

        <div className="f-node f-livis">
            livis-api-service<br />
            （云端入口，负责语义交互<br />
            和业务处理相关功能）
        </div>

        <div className="f-node f-task">
            taskformer<br />
            （通用对话能力，负责对话流程<br />
            控制和对话核心逻辑处理）
        </div>

        <div className="f-node f-plan">
            规划模型<br />
            （负责远程车控<br />
            指令的完整意图<br />
            理解）
        </div>

        <div className="f-node f-nlg">
            NLG服务<br />
            （负责任务指令回复<br />
            生成）
        </div>

        <svg className="f-svg" viewBox="0 0 1720 860">
            <defs>
                <marker id="arrow"
                        markerWidth={10}
                        markerHeight={10}
                        refX={8}
                        refY={3}
                        orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#222"/>
                </marker>

                <marker id="arrowRed"
                        markerWidth={10}
                        markerHeight={10}
                        refX={8}
                        refY={3}
                        orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#c94a4a"/>
                </marker>

                <marker id="arrowAmber"
                        markerWidth={10}
                        markerHeight={10}
                        refX={8}
                        refY={3}
                        orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#d97706"/>
                </marker>
            </defs>

            {/* Mock Candidates Dashed Lines */}
            <path className="f-dashed-line" d="M 895 362 L 895 416"/>
            <path className="f-dashed-line" d="M 360 271 L 436 275"/>

            {/* 1 */}
            <path className="f-line" d="M154 554 L192 554"/>
            <text x={173} y={548} className="f-txt">1</text>

            {/* 2 */}
            <path className="f-line" d="M344 548 L438 520"/>
            <text x={386} y={523} className="f-txt">2</text>

            {/* 3 */}
            <path className="f-line" d="M628 500 C700 470 720 470 780 470"/>
            <text x={705} y={454} className="f-txt">3 发起对话请求</text>

            {/* 4 */}
            <path className="f-line" d="M1028 470 L1226 470"/>
            <text x={1088} y={455} className="f-txt">4 发起对话请求</text>

            {/* 5 */}
            <path className="f-line" d="M1468 430 C1516 390 1530 360 1546 320"/>
            <text x={1490} y={386} className="f-txt">5 发起对话请求</text>

            {/* 6 */}
            <path className="f-line" d="M1546 352 C1500 372 1465 392 1450 420"/>
            <text x={1395} y={372} className="f-txt">
                6 返回详细的意图理解结果(function call)
            </text>

            {/* 7 */}
            <path className="f-line" d="M1468 510 C1530 515 1532 560 1460 560"/>
            <text x={1490} y={536} className="f-txt">
                7 任务型对话管理
            </text>

            {/* 8 */}
            <path className="f-line" d="M1226 520 L1028 520"/>
            <text x={1082} y={508} className="f-txt">8 下发MCP request</text>

            {/* 9 */}
            <path className="f-line" d="M780 520 L628 520"/>
            <text x={662} y={508} className="f-txt">9 下发MCP request</text>

            {/* 10 */}
            <path className="f-line" d="M520 430 C482 392 470 352 510 350"/>
            <text x={404} y={362} className="f-txt">10 发送车控指令</text>

            {/* 11 */}
            <path className="f-line" d="M520 208 C510 168 520 150 548 150"/>
            <text x={378} y={180} className="f-txt">11 下发远程车控指令</text>

            {/* 12 */}
            <path className="f-line" d="M600 150 C620 170 620 210 570 240"/>
            <text x={598} y={170} className="f-txt">12 上报车控指令执行结果</text>

            {/* 13 */}
            <path className="f-line" d="M590 350 C620 410 600 430 550 430"/>
            <text x={555} y={394} className="f-txt">13 回调车控指令执行结果</text>

            {/* 14 */}
            <path className="f-line" d="M780 560 L628 560"/>
            <text x={648} y={548} className="f-txt">14 返回MCP response</text>

            {/* 15 */}
            <path className="f-line" d="M1226 570 L1028 570"/>
            <text x={1080} y={556} className="f-txt">15 返回MCP response</text>

            {/* 16 */}
            <path className="f-line" d="M1400 596 C1500 648 1520 670 1600 720"/>
            <text x={1332} y={650} className="f-txt">
                16 基于车控指令function call和执行状态
            </text>
            <text x={1360} y={670} className="f-txt">
                码发起回复生成请求
            </text>

            {/* 17 */}
            <path className="f-line" d="M1580 720 C1500 690 1450 640 1410 590"/>
            <text x={1360} y={684} className="f-txt">17 对话回复结果</text>

            {/* 18 */}
            <path className="f-line" d="M1226 590 C1180 620 1080 620 1020 590"/>
            <text x={1084} y={638} className="f-txt">18 下发回复结果</text>

            {/* 19 */}
            <path className="f-line" d="M820 600 C730 650 720 680 810 690"/>
            <text x={690} y={708} className="f-txt">19 下发回复结果</text>

            {/* 红色 mock */}
            <path className="f-line-red" d="M602 260 C700 260 730 200 780 138"/>
            <path className="f-line-red" d="M820 140 C840 230 820 280 602 310"/>

            <text x={650} y={240} className="f-txt-red">
                11 下发远程车控指令
            </text>
            <text x={756} y={286} className="f-txt-red">
                12 模拟车控指令执行结果
            </text>

            {/* 红叉 */}
            <line x1={456} y1={184} x2={520} y2={228} className="f-cross"/>
            <line x1={520} y1={184} x2={456} y2={228} className="f-cross"/>

            <line x1={620} y1={165} x2={690} y2={210} className="f-cross"/>
            <line x1={690} y1={165} x2={620} y2={210} className="f-cross"/>
        </svg>
      </div>
    </div>
  );
}
