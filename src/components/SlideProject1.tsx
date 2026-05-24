/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

/* ── Inline SVG icon components ── */
const IconCheck: React.FC<{ size?: number }> = ({ size = 64 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <path d="M32 4 C20 14 12 14 12 14 V28 C12 45 23 55 32 60 C41 55 52 45 52 28 V14 C52 14 44 14 32 4Z" fill="#C92A2A"/>
    <path d="M25 33 L31 39 L42 24" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTrend: React.FC<{ size?: number }> = ({ size = 64 }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    <polyline points="10,44 22,32 32,40 50,18" fill="none" stroke="#00558B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="42,18 50,18 50,26" fill="none" stroke="#00558B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="8" y="42" width="6" height="14" rx="2" fill="#00558B"/>
    <rect x="22" y="34" width="6" height="22" rx="2" fill="#00558B"/>
    <rect x="36" y="28" width="6" height="28" rx="2" fill="#00558B"/>
  </svg>
);

const IconCompass: React.FC<{ size?: number }> = ({ size = 64 }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    <circle cx="32" cy="32" r="22" fill="none" stroke="#2B8A3E" strokeWidth="7"/>
    <path d="M32 10 L39 18 L28 20Z" fill="#2B8A3E"/>
    <circle cx="32" cy="32" r="6" fill="#2B8A3E"/>
    <line x1="32" y1="32" x2="43" y2="21" stroke="#2B8A3E" strokeWidth="5" strokeLinecap="round"/>
  </svg>
);

const IconDocSvg: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <rect x="18" y="8" width="42" height="58" rx="4" fill="#ffffff" stroke="#00558B" strokeWidth="4"/>
    <rect x="27" y="18" width="20" height="4" rx="2" fill="#00558B"/>
    <rect x="27" y="28" width="24" height="4" rx="2" fill="#00558B"/>
    <rect x="27" y="38" width="18" height="4" rx="2" fill="#00558B"/>
    <polyline points="22,52 30,58 42,46" stroke="#00558B" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="54" cy="58" r="10" stroke="#00558B" strokeWidth="5" fill="none"/>
    <line x1="61" y1="65" x2="70" y2="74" stroke="#00558B" strokeWidth="5" strokeLinecap="round"/>
  </svg>
);

const IconTreeSvg: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <rect x="30" y="10" width="24" height="16" rx="2" stroke="#00558B" strokeWidth="4" fill="none"/>
    <rect x="10" y="48" width="16" height="16" rx="2" stroke="#00558B" strokeWidth="4" fill="none"/>
    <rect x="54" y="48" width="16" height="16" rx="2" stroke="#00558B" strokeWidth="4" fill="none"/>
    <line x1="42" y1="26" x2="42" y2="42" stroke="#00558B" strokeWidth="4"/>
    <line x1="18" y1="42" x2="66" y2="42" stroke="#00558B" strokeWidth="4"/>
    <line x1="18" y1="42" x2="18" y2="48" stroke="#00558B" strokeWidth="4"/>
    <line x1="66" y1="42" x2="66" y2="48" stroke="#00558B" strokeWidth="4"/>
  </svg>
);

const IconChartSvg: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <rect x="12" y="46" width="10" height="18" fill="#00558B"/>
    <rect x="30" y="34" width="10" height="30" fill="#00558B"/>
    <rect x="48" y="20" width="10" height="44" fill="#00558B"/>
    <path d="M12 38L30 24L48 30L66 10" stroke="#00558B" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="58,10 66,10 66,18" stroke="#00558B" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPyramidSvg: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <polygon points="40,12 60,28 20,28" fill="#00558B"/>
    <polygon points="24,36 56,36 48,50 32,50" fill="#00558B"/>
    <polygon points="30,56 50,56 44,66 36,66" fill="#00558B"/>
  </svg>
);

const IconNetworkSvg: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <circle cx="40" cy="16" r="8" stroke="#00558B" strokeWidth="5" fill="none"/>
    <circle cx="18" cy="54" r="8" stroke="#00558B" strokeWidth="5" fill="none"/>
    <circle cx="62" cy="54" r="8" stroke="#00558B" strokeWidth="5" fill="none"/>
    <line x1="40" y1="24" x2="18" y2="46" stroke="#00558B" strokeWidth="5"/>
    <line x1="40" y1="24" x2="62" y2="46" stroke="#00558B" strokeWidth="5"/>
    <line x1="18" y1="54" x2="62" y2="54" stroke="#00558B" strokeWidth="5"/>
  </svg>
);

const IconCheckDoc: React.FC<{ size?: number }> = ({ size = 72 }) => (
  <svg viewBox="0 0 72 72" width={size} height={size}>
    <rect x="18" y="8" width="32" height="42" rx="3" fill="none" stroke="#2B8A3E" strokeWidth="4"/>
    <line x1="26" y1="20" x2="42" y2="20" stroke="#2B8A3E" strokeWidth="4" strokeLinecap="round"/>
    <line x1="26" y1="30" x2="42" y2="30" stroke="#2B8A3E" strokeWidth="4" strokeLinecap="round"/>
    <line x1="26" y1="40" x2="38" y2="40" stroke="#2B8A3E" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="10" fill="none" stroke="#2B8A3E" strokeWidth="4"/>
    <line x1="57" y1="57" x2="66" y2="66" stroke="#2B8A3E" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const IconBars: React.FC<{ size?: number }> = ({ size = 72 }) => (
  <svg viewBox="0 0 72 72" width={size} height={size}>
    <rect x="12" y="42" width="8" height="16" fill="#2B8A3E"/>
    <rect x="28" y="30" width="8" height="28" fill="#2B8A3E"/>
    <rect x="44" y="18" width="8" height="40" fill="#2B8A3E"/>
    <path d="M12 36L28 22L44 28L60 10" stroke="#2B8A3E" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCheckDocPurple: React.FC<{ size?: number }> = ({ size = 72 }) => (
  <svg viewBox="0 0 72 72" width={size} height={size}>
    <rect x="18" y="8" width="32" height="42" rx="3" fill="none" stroke="#003A70" strokeWidth="4"/>
    <line x1="26" y1="20" x2="42" y2="20" stroke="#003A70" strokeWidth="4" strokeLinecap="round"/>
    <line x1="26" y1="30" x2="42" y2="30" stroke="#003A70" strokeWidth="4" strokeLinecap="round"/>
    <line x1="26" y1="40" x2="38" y2="40" stroke="#003A70" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="10" fill="none" stroke="#003A70" strokeWidth="4"/>
    <line x1="57" y1="57" x2="66" y2="66" stroke="#003A70" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const IconBarsPurple: React.FC<{ size?: number }> = ({ size = 72 }) => (
  <svg viewBox="0 0 72 72" width={size} height={size}>
    <rect x="12" y="42" width="8" height="16" fill="#003A70"/>
    <rect x="28" y="30" width="8" height="28" fill="#003A70"/>
    <rect x="44" y="18" width="8" height="40" fill="#003A70"/>
    <path d="M12 36L28 22L44 28L60 10" stroke="#003A70" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloudSvg: React.FC = () => (
  <svg viewBox="0 0 300 160" style={{ position: 'absolute', top: 16, right: 16, width: 180, height: 100, opacity: 0.18 }}>
    <circle cx="110" cy="80" r="52" fill="#a8d5b0"/>
    <circle cx="180" cy="58" r="66" fill="#a8d5b0"/>
    <circle cx="232" cy="95" r="42" fill="#a8d5b0"/>
    <rect x="70" y="90" width="190" height="42" rx="21" fill="#a8d5b0"/>
  </svg>
);

const IconCloudGreen: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <svg viewBox="0 0 120 80" width={size} height={size}>
    <path d="M38 62 H86 C99 62 108 54 108 42 C108 30 99 22 89 22 C85 10 74 2 61 2 C47 2 35 10 31 23 C18 23 8 33 8 46 C8 56 18 62 38 62Z" fill="#2B8A3E"/>
    <path d="M38 44 C44 28 60 24 73 30" stroke="#fff" strokeWidth="10" strokeLinecap="round" fill="none"/>
  </svg>
);

const IconAgentOps: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <svg viewBox="0 0 120 80" width={size} height={size}>
    <rect x="20" y="18" width="70" height="48" rx="16" fill="#003A70"/>
    <rect x="34" y="30" width="42" height="24" rx="10" fill="#fff"/>
    <circle cx="46" cy="42" r="4" fill="#003A70"/>
    <circle cx="64" cy="42" r="4" fill="#003A70"/>
    <line x1="55" y1="6" x2="55" y2="18" stroke="#003A70" strokeWidth="6" strokeLinecap="round"/>
    <circle cx="55" cy="4" r="6" fill="#003A70"/>
  </svg>
);

const CurveArrowGreen: React.FC = () => (
  <svg viewBox="0 0 120 100" width={100} height={80} style={{ marginBottom: 24 }}>
    <path d="M10 20 C10 58 44 76 76 78" stroke="#2B8A3E" strokeWidth="12" fill="none" strokeLinecap="round"/>
    <polygon points="70,60 108,78 84,98" fill="#2B8A3E"/>
  </svg>
);

const CurveArrowPurple: React.FC = () => (
  <svg viewBox="0 0 120 100" width={100} height={80} style={{ marginBottom: 24 }}>
    <path d="M10 20 C10 58 44 76 76 78" stroke="#00558B" strokeWidth="12" fill="none" strokeLinecap="round"/>
    <polygon points="70,60 108,78 84,98" fill="#00558B"/>
  </svg>
);

const RingSvg: React.FC = () => (
  <svg viewBox="0 0 200 200" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transform: 'rotate(-28deg)' }}>
    <defs>
      <linearGradient id="qz-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00558B"/>
        <stop offset="100%" stopColor="#003A70"/>
      </linearGradient>
    </defs>
    <path d="M42 58 A70 70 0 0 1 150 42" fill="none" stroke="url(#qz-grad)" strokeWidth="12" strokeLinecap="round"/>
    <path d="M147 24 L171 43 L142 48" fill="#00558B"/>
    <path d="M160 140 A70 70 0 0 1 52 158" fill="none" stroke="url(#qz-grad)" strokeWidth="12" strokeLinecap="round"/>
    <path d="M55 176 L29 156 L58 151" fill="#003A70"/>
  </svg>
);

const ArrowUpSvg: React.FC = () => (
  <svg viewBox="0 0 100 100" width={74} height={74} style={{ position: 'absolute', right: -65, top: 6 }}>
    <defs>
      <linearGradient id="arrowGrad" x1="0" x2="1">
        <stop offset="0%" stopColor="#ffb347"/>
        <stop offset="100%" stopColor="#ff7a00"/>
      </linearGradient>
    </defs>
    <path d="M15 78 Q55 78 58 38" fill="none" stroke="url(#arrowGrad)" strokeWidth="8" strokeLinecap="round"/>
    <path d="M48 38 L61 18 L73 39" fill="none" stroke="url(#arrowGrad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function SlideProject1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <style>{`
        .s1-page {
          background: #fff;
          border: 1px solid #dbe4f1;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(15,67,217,0.03);
          font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
          color: #1f2937;
        }
        .s1-main-title { font-size: 24px; font-weight: 900; color: #14276b; line-height: 1.2; letter-spacing: 1px; }
        .s1-top-wrapper { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; padding: 16px 24px 10px; border-bottom: 3px solid #dbe4f1; }
        .s1-top-icons { display: flex; gap: 26px; align-items: flex-start; }
        .s1-top-item { display: flex; align-items: flex-start; gap: 10px; min-width: 120px; border: 1px solid #dbe4f1; border-radius: 12px; padding: 10px 14px; background: #fff; }
        .s1-top-item i { color: #003A70; font-size: 30px; margin-top: 2px; }
        .s1-t1 { font-size: 15px; font-weight: 900; color: #212529; }
        .s1-t2 { margin-top: 2px; font-size: 13px; line-height: 1.4; color: #495057; font-weight: 700; }
        .s1-divider { width: 1px; background: #CED4DA; height: 58px; }
        .s1-section { margin: 14px; border: 1px solid #CED4DA; border-radius: 18px; overflow: hidden; background: #fff; }
        .s1-sec-header { height: 62px; display: flex; align-items: center; gap: 14px; padding-left: 24px; color: #003A70; font-size: 24px; font-weight: 900; letter-spacing: .5px; }
        .s1-sec-idx { width: 40px; height: 36px; border-radius: 50%; background: #003A70; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900; flex-shrink: 0; }
        .s1-sec-body { padding: 16px; }
        .s1-stage { border: 1px solid #e0e8f4; border-radius: 18px; padding: 18px; background: #fbfdff; margin-bottom: 18px; }
        .s1-stage-title { text-align: left; padding-left: 24px; color: #003A70; font-size: 18px; font-weight: 900; margin-bottom: 18px; }
        .s1-card { background: #fff; border: 1px solid #dde6f2; border-radius: 14px; padding: 16px; }
        .s1-card-title { text-align: center; font-size: 16px; font-weight: 900; color: #003A70; margin-bottom: 14px; }
        .s1-item { display: flex; gap: 14px; margin-bottom: 16px; }
        .s1-item:last-child { margin-bottom: 0; }
        .s1-item-icon { width: 56px; flex-shrink: 0; display: flex; justify-content: center; align-items: flex-start; padding-top: 2px; font-size: 36px; }
        .s1-item-title { font-size: 16px; font-weight: 900; margin-bottom: 6px; }
        .s1-item-desc { font-size: 14px; line-height: 1.75; color: #374151; font-weight: 700; }
        .s1-red { color: #ef4444; } .s1-orange { color: #f97316; } .s1-green { color: #0b7a37; } .s1-purple { color: #00558B; }
        .s1-grid-3 { display: grid; grid-template-columns: 1fr 2fr 2fr; gap: 14px; }
        .s1-result-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 12px; }
        .s1-result-box { border: 1px solid #dce5f2; border-radius: 12px; background: #fff; padding: 12px; text-align: center; }
        .s1-result-big { color: #113fd7; font-size: 20px; font-weight: 900; margin-bottom: 8px; }
        .s1-result-small { color: #374151; font-size: 13px; line-height: 1.6; font-weight: 700; }
        .s1-simple-card { border: 1px solid #dce5f2; border-radius: 12px; padding: 14px; background: #fff; margin-top: 10px; font-size: 14px; line-height: 1.8; font-weight: 700; color: #1f2937; }
        .s1-compare { display: grid; grid-template-columns: 1fr 60px 1fr; gap: 10px; align-items: center; }
        .s1-compare-box { border: 1px solid #dce5f2; border-radius: 14px; background: #fff; padding: 16px; min-height: 128px; text-align: center; }
        .s1-compare-box i { font-size: 62px; margin-bottom: 14px; }
        .s1-compare-title { font-size: 15px; font-weight: 900; margin-bottom: 14px; color: #111827; }
        .s1-compare-list { text-align: left; padding-left: 18px; line-height: 2; color: #374151; font-size: 14px; font-weight: 700; }
        .s1-arrow { display: flex; justify-content: center; align-items: center; font-size: 44px; color: #75d2d2; font-weight: 900; }
        .s1-flow { display: flex; align-items: center; justify-content: space-between; margin-top: 6px; }
        .s1-flow-node { width: 18%; text-align: center; font-size: 13px; font-weight: 700; color: #374151; }
        .s1-flow-arrow { color: #8ea8f7; font-size: 20px; }

        .s1-ai2-section { border: 1px solid #CED4DA; border-radius: 18px; padding: 18px; background: #fff; margin-bottom: 18px; }
        .s1-ai2-title { text-align: left; padding-left: 24px; color: #003A70; font-size: 18px; font-weight: 900; letter-spacing: .5px; line-height: 1.25; }
        .s1-ai2-sub { margin-left: 130px; margin-top: 6px; color: #495057; font-size: 18px; font-weight: 700; margin-bottom: 14px; }
        .s1-ai2-content { display: grid; grid-template-columns: 1.02fr 1.18fr; gap: 18px; align-items: start; }
        .s1-ai2-card { background: #fff; border: 1px solid #CED4DA; border-radius: 14px; box-shadow: 0 2px 6px rgba(0,0,0,.03); }
        .s1-ai2-left-top { padding: 10px 14px 14px; }
        .s1-ai2-section-title { text-align: left; color: #003A70; font-size: 16px; font-weight: 900; margin-bottom: 10px; }
        .s1-ai2-pain-item { display: grid; grid-template-columns: 110px 1fr 80px 1fr; align-items: center; padding: 18px 10px; border: 1px solid #CED4DA; border-radius: 12px; margin-bottom: 10px; background: #fff; }
        .s1-ai2-pain-icon { width: 62px; height: 62px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 32px; margin-left: 6px; }
        .s1-ai2-red { color: #C92A2A; border: 3px solid #C92A2A; }
        .s1-ai2-orange { color: #E67700; border: 3px solid #E67700; }
        .s1-ai2-yellow { color: #E67700; border: 3px solid #E67700; }
        .s1-ai2-pain-text h3 { font-size: 15px; font-weight: 900; margin-bottom: 8px; }
        .s1-ai2-pain-text p { color: #212529; font-size: 15px; line-height: 1.7; font-weight: 700; }
        .s1-ai2-pain-red h3 { color: #C92A2A; }
        .s1-ai2-pain-orange h3 { color: #E67700; }
        .s1-ai2-pain-yellow h3 { color: #E67700; }
        .s1-ai2-arr { display: flex; justify-content: center; align-items: center; color: #7A9CAE; font-size: 46px; }
        .s1-ai2-sol-title { color: #003A70; font-size: 15px; font-weight: 900; margin-bottom: 8px; }
        .s1-ai2-sol-desc { color: #212529; font-size: 15px; line-height: 1.7; font-weight: 700; }
        .s1-ai2-bottom { margin-top: 14px; }
        .s1-ai2-road-title { text-align: center; color: #003A70; font-size: 18px; font-weight: 900; margin-bottom: 12px; }
        .s1-ai2-road-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .s1-ai2-road-card { border: 1px solid #CED4DA; border-radius: 14px; background: #fff; padding: 12px 12px 10px; min-height: 160px; position: relative; }
        .s1-ai2-road-card h3 { color: #003A70; font-size: 18px; font-weight: 900; margin-bottom: 10px; }
        .s1-ai2-road-card p { color: #212529; font-size: 15px; line-height: 1.6; font-weight: 700; }
        .s1-ai2-status { position: absolute; bottom: 10px; right: 12px; font-size: 22px; }
        .s1-ai2-bad { color: #C92A2A; } .s1-ai2-good { color: #2B8A3E; }
        .s1-ai2-tips { margin-top: 10px; color: #003A70; font-size: 16px; line-height: 1.8; font-weight: 900; padding-left: 8px; }
        .s1-ai2-table-card { overflow: hidden; }
        .s1-ai2-table-head { background: linear-gradient(90deg, #003A70, #004D8C); color: #fff; text-align: center; padding: 14px 10px; font-size: 18px; font-weight: 900; letter-spacing: .5px; }
        .s1-ai2-table-card table { width: 100%; border-collapse: collapse; table-layout: fixed; background: #fff; font-size: 14px; }
        .s1-ai2-table-card th { background: #fff; color: #003A70; font-size: 14px; font-weight: 900; border: 1px solid #CED4DA; padding: 12px 8px; }
        .s1-ai2-table-card td { border: 1px solid #CED4DA; padding: 10px 8px; color: #212529; font-size: 14px; font-weight: 700; line-height: 1.5; text-align: center; }
        .s1-ai2-check { color: #2B8A3E; font-size: 22px; }
        .s1-ai2-plus { color: #003A70; font-size: 22px; }
        .s1-ai2-bottom-cases { margin-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .s1-ai2-case-card { padding: 18px 22px; min-height: 220px; }
        .s1-ai2-case-wrap { display: flex; gap: 18px; align-items: flex-start; }
        .s1-ai2-case-icon { color: #003A70; font-size: 46px; margin-top: 6px; }
        .s1-ai2-case-title { color: #003A70; font-size: 20px; font-weight: 900; margin-bottom: 10px; }
        .s1-ai2-case-text { color: #212529; font-size: 16px; line-height: 1.9; font-weight: 700; }
        .s1-ai2-source { margin-top: 10px; color: #495057; font-size: 14px; font-weight: 700; }

        .s1-timeline { display: flex; align-items: stretch; gap: 0; flex: 0.9; }
        .s1-tl-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; position: relative; flex: 1; min-width: 0; }
        .s1-tl-v-title { font-size: 14px; font-weight: 900; margin-bottom: 8px; display: inline-block; padding: 2px 10px; border-radius: 6px; }
        .s1-tl-v-blue { background: #dbeafe; color: #1e40af; }
        .s1-tl-v-orange { background: #ffedd5; color: #c2410c; }
        .s1-tl-v4 { border-color: #BE4D38; background: #fff5f3; }
        .s1-cross { position: absolute; top: 8px; right: 10px; font-size: 28px; color: #C92A2A; font-weight: 900; }
        .s1-check { position: absolute; top: 8px; right: 10px; font-size: 20px; background: #2B8A3E; color: #fff; width: 26px; height: 23px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; }
        .s1-tl-tip-box { width: 280px; flex-shrink: 0; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; margin-left: 5%; }
        .s1-tl-tip-title { font-size: 15px; font-weight: 900; color: #003A70; margin-bottom: 12px; }
        .s1-tl-tip { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 10px; font-size: 13px; color: #334155; font-weight: 700; line-height: 1.5; }
        .s1-tl-tip:last-child { margin-bottom: 0; }
        .s1-tl-tip-icon { width: 22px; height: 22px; border-radius: 50%; background: #2B8A3E; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; }


        .s1-qs-timeline { display: flex; align-items: center; gap: 9px; margin-bottom: 18px; justify-content: center; }
        .s1-qs-card { width: 264px; background: #fff; border: 1.5px solid #CED4DA; border-radius: 22px; position: relative; padding: 28px 26px 24px; box-shadow: 0 0 0 1px rgba(0,0,0,0.02); }
        .s1-qs-year { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: #003A70; color: #fff; font-size: 18px; font-weight: 700; padding: 6px 34px; border-radius: 0 0 10px 10px; line-height: 1; min-width: 142px; text-align: center; box-shadow: inset 0 1px 0 rgba(255,255,255,0.25); }
        .s1-qs-title { color: #003A70; font-size: 15px; font-weight: 800; line-height: 1.4; }
        .s1-qs-content { margin-top: 18px; display: flex; gap: 2px; align-items: flex-start; }
        .s1-qs-icon-w { width: 35px; min-width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; }
        .s1-qs-list { flex: 1; padding-top: 2px; }
        .s1-qs-list li { color: #2d2d2d; font-size: 13px; line-height: 1.7; margin-left: 18px; font-weight: 500; }
        .s1-qs-arrow { font-size: 33px; color: #00558B; font-weight: 300; margin-top: -8px; user-select: none; }

        .s1-qz-wrapper { width: 100%; min-height: 219px; position: relative; overflow: visible; }
        .s1-qz-left { display: flex; gap: 30px; width: 70%; }
        .s1-qz-card { flex: 1; min-width: 0; height: 153px; border-radius: 12px; display: flex; align-items: center; padding: 12px 10px; background: rgba(255,255,255,.45); position: relative; }
        .s1-qz-red { border: 1.8px solid #E8D0D0; background: linear-gradient(180deg, #F9F2F2 0%, #F9F2F2 100%); }
        .s1-qz-orange { border: 1.8px solid #CED4DA; background: linear-gradient(180deg, #E8EDF4 0%, #E8EDF4 100%); }
        .s1-qz-green { border: 1.8px solid #C8DDCC; background: linear-gradient(180deg, #EDF2EE 0%, #EDF2EE 100%); }
        .s1-qz-icon-w { width: 48px; height: 48px; margin-right: 14px; flex-shrink: 0; }
        .s1-qz-content { flex: 1; }
        .s1-qz-title { font-size: 18px; font-weight: 800; line-height: 1; margin-bottom: 8px; letter-spacing: .5px; }
        .s1-qz-red .s1-qz-title { color: #C92A2A; }
        .s1-qz-orange .s1-qz-title { color: #00558B; }
        .s1-qz-green .s1-qz-title { color: #2B8A3E; }
        .s1-qz-desc { font-size: 14px; line-height: 1.45; color: #222; font-weight: 700; }
        .s1-qz-circle-area { float: right; width: 230px; height: 303px; display: flex; justify-content: center; align-items: center; margin-top: -210px; margin-right: 167px; }
        .s1-qz-circle-wrap { position: relative; width: 220px; height: 220px; }
        .s1-qz-ring { position: absolute; inset: 0; border-radius: 50%; border: 10px solid rgba(0,58,112,.12); }
        .s1-qz-circle-content { position: absolute; inset: 26px; border-radius: 50%; background: rgba(255,255,255,.5); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .s1-qz-circle-title { color: #d81914; font-size: 22px; font-weight: 900; margin-bottom: 10px; }
        .s1-qz-circle-text { color: #222; font-size: 15px; line-height: 1.6; font-weight: 800; }

        .s1-fx-wrapper { display: flex; gap: 20px; }
        .s1-fx-fusion-card { flex: 1; border: 2px solid #C8DDCC; border-radius: 20px; padding: 18px 18px 20px; position: relative; overflow: hidden; }
        .s1-fx-agent-card { flex: 1; background: #fff; border: 2px solid #CED4DA; border-radius: 20px; padding: 18px 18px 20px; overflow: hidden; position: relative; }
        .s1-fx-header { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; position: relative; z-index: 2; }
        .s1-fx-title { font-size: 18px; font-weight: 900; line-height: 1; letter-spacing: -1px; color: #003A70; }
        .s1-fx-content-row { display: flex; flex-direction: column; gap: 16px; }
        .s1-fx-panel { background: #fff; border-radius: 20px; border: 2px solid #CED4DA; padding: 14px; position: relative; }
        .s1-fx-big-text { font-size: 15px; color: #111; font-weight: 700; line-height: 1.8; margin-top: 10px; }
        .s1-fx-tag { position: absolute; top: 10px; left: 50%; transform: translateX(-50%); background: #00558B; color: #fff; font-size: 18px; font-weight: 800; padding: 8px 30px; border-radius: 10px; letter-spacing: 1px; }
        .s1-fx-chart-area { margin-top: 36px; display: flex; align-items: flex-end; justify-content: center; gap: 24px; position: relative; }
        .s1-fx-bar-group { display: flex; flex-direction: column; align-items: center; }
        .s1-fx-bar-value { font-size: 18px; font-weight: 900; margin-bottom: 8px; }
        .s1-fx-bar { width: 72px; border-radius: 4px 4px 0 0; }
        .s1-fx-bar.fx-one { height: 36px; background: linear-gradient(180deg, #2B8A3E 0%, #1d6b2e 100%); }
        .s1-fx-bar.fx-two { height: 23px; background: linear-gradient(180deg, #2B8A3E 0%, #1d6b2e 100%); }
        .s1-fx-purple-bar { background: linear-gradient(180deg, #00558B 0%, #003A70 100%); }
        .s1-fx-bar-label { margin-top: 14px; font-size: 18px; font-weight: 700; color: #222; }
        .s1-fx-axis { width: 100%; height: 3px; background: #222; position: absolute; bottom: 21px; left: 0; }
        .s1-fx-down-box { display: flex; flex-direction: column; align-items: center; justify-content: center; margin-left: 10px; }
        .s1-fx-down-text { color: #2B8A3E; font-size: 28px; font-weight: 800; }
        .s1-fx-down-number { color: #2B8A3E; font-size: 28px; font-weight: 900; line-height: 1; }
        .s1-fx-purple-text { color: #00558B; }
        .s1-fx-achievement { margin-top: 47px; }
        .s1-fx-achievement-item { display: flex; gap: 14px; margin-bottom: 16px; align-items: flex-start; }
        .s1-fx-achievement-text { font-size: 18px; line-height: 1.7; color: #111; }
        .s1-fx-big-green { color: #2B8A3E; font-size: 18px; }
        .s1-fx-mid-green { color: #2B8A3E; font-size: 18px; }
        .s1-fx-big-purple { color: #00558B; font-size: 18px; }
        .s1-fx-mid-purple { color: #00558B; font-size: 18px; }
        .s1-fx-light-divider { border-top: 2px dashed #CED4DA; margin: 14px 0; }

        .s1-pk-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .s1-pk-card { border: 1px solid #CED4DA; border-radius: 16px; background: #fff; padding: 20px 22px; min-height: 160px; }
        .s1-pk-title { text-align: center; color: #003A70; font-size: 18px; font-weight: 900; margin-bottom: 24px; }
        .s1-pk-metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .s1-pk-metric { display: flex; align-items: flex-start; gap: 14px; }
        .s1-pk-icon-w { width: 40px; height: 36px; border-radius: 14px; background: #E8EDF4; display: flex; align-items: center; justify-content: center; color: #00558B; font-size: 20px; flex-shrink: 0; }
        .s1-pk-num { color: #003A70; font-size: 20px; font-weight: 900; margin-bottom: 4px; line-height: 1; }
        .s1-pk-label { color: #495057; font-size: 14px; line-height: 1.6; font-weight: 700; }
        .s1-footer { text-align: center; padding: 12px 20px 24px; color: #1240d8; font-size: 18px; font-weight: 900; }
        .s1-green-text { color: #2B8A3E; font-weight: 700; }
        .s1-orange-text { color: #E67700; font-weight: 700; }
        .s1-blue-text { color: #2563eb; font-weight: 700; }
      `}</style>

      <div className="s1-page">
        {/* ── Top Header ── */}
        <div className="s1-top-wrapper">
          <div>
            <div className="s1-main-title">融合云/AgentOps测试提效与质量运营</div>
          </div>
          <div className="s1-top-icons">

            <div className="s1-top-item">
              <i className="fa-regular fa-square-check"></i>
              <div>
                <div className="s1-t1">迭代节奏</div>
                <div className="s1-t2">周维度上线</div>
              </div>
            </div>

            <div className="s1-top-item">
              <i className="fa-regular fa-clock"></i>
              <div>
                <div className="s1-t1">测试窗口</div>
                <div className="s1-t2">2天 (test+ontest)</div>
              </div>
            </div>

            <div className="s1-top-item">
              <i className="fa-solid fa-users"></i>
              <div>
                <div className="s1-t1">测开比</div>
                <div className="s1-t2">1:8</div>
              </div>
            </div>

            <div className="s1-top-item">
              <i className="fa-solid fa-share-nodes"></i>
              <div>
                <div className="s1-t1">支撑业务线</div>
                <div className="s1-t2">融合云、AgentOps、抵扣、记忆工程、发布会等多条线</div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Section 1: 效率线 ── */}
        <div className="s1-section">
          <div className="s1-sec-header">
            <div className="s1-sec-idx">1</div>
            效率线：解决"快" — 释放人力，拉高单人吞吐上限
          </div>
          <div className="s1-sec-body">

            {/* Step 1: 自动化建设 */}
            <div className="s1-stage">
              <div className="s1-stage-title">第一步：自动化建设 - 释放手工回归</div>
              <div className="s1-grid-3">
                {/* Left: Pain Points */}
                <div className="s1-card">
                  <div className="s1-card-title s1-red">核心痛点（AI之前）</div>
                  <div className="s1-item">
                    <div className="s1-item-icon"><i className="fa-regular fa-clock s1-red"></i></div>
                    <div>
                      <div className="s1-item-title s1-red">手工回归不可持续</div>
                      <div className="s1-item-desc">回归占据窗口期大部分时间，大量人力被重复占用</div>
                    </div>
                  </div>
                  <div className="s1-item">
                    <div className="s1-item-icon"><i className="fa-regular fa-face-frown-open s1-red"></i></div>
                    <div>
                      <div className="s1-item-title s1-red">测试疲劳导致质量波动</div>
                      <div className="s1-item-desc">重复操作易注意力下降，漏检风险高，一致性难保障</div>
                    </div>
                  </div>
                </div>
                {/* Middle: Results */}
                <div className="s1-card">
                  <div className="s1-card-title">建设成果</div>
                  <div className="s1-result-grid">
                    <div className="s1-result-box"><div className="s1-result-big">1700+</div><div className="s1-result-small">集成回归用例</div></div>
                    <div className="s1-result-box"><div className="s1-result-big">P0 100%</div><div className="s1-result-small">P1 80% 覆盖率</div></div>
                    <div className="s1-result-box"><div className="s1-result-big">每日 2 次</div><div className="s1-result-small">自动化回归</div></div>
                    <div className="s1-result-box"><div className="s1-result-big">&lt;3%</div><div className="s1-result-small">失败率</div></div>
                  </div>
                  <div className="s1-simple-card" style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <i className="fa-solid fa-bug" style={{ color: '#C92A2A', fontSize: 18, marginTop: 2, flexShrink: 0 }}></i>
                    <span>24.01 至今发现 Bug 227 个，占后端缺陷 <span style={{ fontSize: 20, fontWeight: 900, color: '#113fd7' }}>16%</span></span>
                  </div>
                  <div className="s1-simple-card" style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <i className="fa-solid fa-lightbulb" style={{ color: '#E67700', fontSize: 18, marginTop: 2, flexShrink: 0 }}></i>
                    <span>策略亮点：对璇玑、提示词工程等探索性业务采用 "延迟投入"策略，避免沉没成本</span>
                  </div>
                </div>
                {/* Right: Before/After */}
                <div className="s1-card">
                  <div className="s1-card-title">从手工回归到自动化回归</div>
                  <div className="s1-compare">
                    <div className="s1-compare-box">
                      <i className="fa-solid fa-user" style={{ color: '#003A70' }}></i>
                      <div className="s1-compare-list">• 重复劳动多<br/>• 易疲劳 • 漏检风险高</div>
                    </div>
                    <div className="s1-arrow">→</div>
                    <div className="s1-compare-box">
                      <i className="fa-solid fa-robot" style={{ color: '#1042d7' }}></i>
                      <div className="s1-compare-list">• 机器结果稳定一致<br/>• 人专注判断分析</div>
                    </div>
                  </div>
                  <div className="s1-card" style={{ marginTop: 14 }}>
                    <div className="s1-card-title"></div>
                    <div className="s1-flow">
                      <div className="s1-flow-node"><i className="fa-solid fa-user" style={{ color: '#1440d8', fontSize: 28, display: 'block', margin: '0 auto 8px' }}></i>用例管理</div>
                      <div className="s1-flow-arrow">→</div>
                      <div className="s1-flow-node"><i className="fa-regular fa-clock" style={{ color: '#1440d8', fontSize: 28, display: 'block', margin: '0 auto 8px' }}></i>执行调度</div>
                      <div className="s1-flow-arrow">→</div>
                      <div className="s1-flow-node"><i className="fa-solid fa-chart-line" style={{ color: '#1440d8', fontSize: 28, display: 'block', margin: '0 auto 8px' }}></i>结果分析</div>
                      <div className="s1-flow-arrow">→</div>
                      <div className="s1-flow-node"><i className="fa-solid fa-bug" style={{ color: '#1440d8', fontSize: 28, display: 'block', margin: '0 auto 8px' }}></i>缺陷联动</div>
                      <div className="s1-flow-arrow">→</div>
                      <div className="s1-flow-node"><i className="fa-solid fa-chart-pie" style={{ color: '#1440d8', fontSize: 28, display: 'block', margin: '0 auto 8px' }}></i>报表可视化</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: AI 全链路改造 */}
            <div className="s1-ai2-section">
              <div className="s1-ai2-title">第二步： AI 全链路改造 - 多阶段提效</div>
              <div className="s1-ai2-sub"><br/></div>
              <div className="s1-ai2-content">
                {/* Left column */}
                <div>
                  <div className="s1-ai2-card s1-ai2-left-top">
                    <div className="s1-ai2-section-title">
                      <i className="fa-solid fa-bolt" style={{ color: '#E67700', marginRight: 6 }}></i>
                      三类核心痛点（传统手段难以有效解决）
                    </div>
                    {/* Pain 1 */}
                    <div className="s1-ai2-pain-item">
                      <div className="s1-ai2-pain-icon s1-ai2-red"><i className="fa-solid fa-magnifying-glass"></i></div>
                      <div className="s1-ai2-pain-text s1-ai2-pain-red">
                        <h3>源头质量问题</h3>
                        <p>需求/方案评审依赖人工经验，<br/>风险识别不全，提测后才暴露</p>
                      </div>
                      <div className="s1-ai2-arr"><i className="fa-solid fa-arrow-right"></i></div>
                      <div>
                        <div className="s1-ai2-sol-title">AI 理解能力</div>
                        <div className="s1-ai2-sol-desc">阅读理解 + 风险识别<br/>前置把控源头质量</div>
                      </div>
                    </div>
                    {/* Pain 2 */}
                    <div className="s1-ai2-pain-item">
                      <div className="s1-ai2-pain-icon s1-ai2-orange"><i className="fa-solid fa-shuffle"></i></div>
                      <div className="s1-ai2-pain-text s1-ai2-pain-orange">
                        <h3>高重复低价值活动</h3>
                        <p>缺陷创建、回归失败分析等，<br/>手工耗时长，易出错</p>
                      </div>
                      <div className="s1-ai2-arr"><i className="fa-solid fa-arrow-right"></i></div>
                      <div>
                        <div className="s1-ai2-sol-title">AI 理解 + 生成能力</div>
                        <div className="s1-ai2-sol-desc">按模板 + 上下文填充<br/>一键生成 + 人工确认</div>
                      </div>
                    </div>
                    {/* Pain 3 */}
                    <div className="s1-ai2-pain-item">
                      <div className="s1-ai2-pain-icon s1-ai2-yellow"><i className="fa-regular fa-lightbulb"></i></div>
                      <div className="s1-ai2-pain-text s1-ai2-pain-yellow">
                        <h3>高耗时创造性活动</h3>
                        <p>用例设计需要经验多 + 生成场景，<br/>单需求 2-3 小时，耗时最长</p>
                      </div>
                      <div className="s1-ai2-arr"><i className="fa-solid fa-arrow-right"></i></div>
                      <div>
                        <div className="s1-ai2-sol-title">AI 理解 + 生成能力</div>
                        <div className="s1-ai2-sol-desc">理解业务场景 + 结构化输出<br/>天级 → 小时级（用例生成）</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right column */}
                <div>
                  <div className="s1-card">
                    <div className="s1-card-title" style={{ textAlign: 'left' }}>
                      <i className="fa-solid fa-table" style={{ marginRight: 6 }}></i>AI 能力全景图(部分)
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                      <thead>
                        <tr style={{ background: '#003A70', color: '#fff' }}>
                          <th style={{ border: '1px solid #d7e2f1', padding: 9, fontWeight: 800, width: 52 }}>来源</th>
                          <th style={{ border: '1px solid #d7e2f1', padding: 9, fontWeight: 800 }}>AI 能力</th>
                          <th style={{ border: '1px solid #d7e2f1', padding: 9, fontWeight: 800 }}>改造前</th>
                          <th style={{ border: '1px solid #d7e2f1', padding: 9, fontWeight: 800 }}>改造后</th>
                          <th style={{ border: '1px solid #d7e2f1', padding: 9, fontWeight: 800 }}>提效</th>
                          <th style={{ border: '1px solid #d7e2f1', padding: 9, fontWeight: 800 }}>辐射业务线</th>
                          <th style={{ border: '1px solid #d7e2f1', padding: 9, fontWeight: 800 }}>状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['self', 'PRD 澄清', '人工逐段阅读', '5min 快速识别', '70-80%', '10', '✅'],
                          ['self', '缺陷创建', '2-3min/个', '~1min/个', '50-60%', '9', '✅'],
                          ['self', '回归失败分析', '30+min/日', '7-8min/日', '~75%', '2', '✅'],
                          // ['模型上下架标注', '手动逐个check', '批量一键标注', '80%+', '1', '✅'],
                          ['self', '测试用例生成', '2-3h/需求', '0.5-1h/需求', '80%', '11', '✅'],
                          ['other', '技术方案澄清', '人工逐段阅读', '5min 快速识别', '70-80%', '7', '✅'],
                        ].map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} style={{ border: '1px solid #d7e2f1', padding: 9, textAlign: 'center', fontWeight: 700, color: '#374151' }}>
                                {j === 0 ? (
                                  cell === 'self' ? (
                                    <i className="fa-solid fa-user" style={{ color: '#003A70', fontSize: 16 }} title="自主实现"></i>
                                  ) : (
                                    <i className="fa-solid fa-user-group" style={{ color: '#AE2F23', fontSize: 16 }} title="他人实现"></i>
                                  )
                                ) : j === 4 ? <span className="s1-green-text">{cell}</span> : cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ height: 16 }}></div>
                  {/* 单次迭代工时对比 */}
                  <div className="s1-card" style={{ padding: 0, position: 'relative', overflow: 'visible', minHeight: 118 }}>
                    <div style={{ position: 'relative', background: 'linear-gradient(180deg,#ffffff 0%,#f7faff 100%)', borderRadius: 14, padding: 0, minHeight: 118 }}>
                      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', height: 28, lineHeight: '28px', padding: '0 18px', background: '#003A70', color: '#fff', fontSize: 18, fontWeight: 700, borderRadius: '0 0 10px 10px', letterSpacing: 1, boxShadow: '0 2px 6px rgba(0,58,112,.28)', zIndex: 2, whiteSpace: 'nowrap' }}>单次迭代工时对比</div>
                      <div style={{ padding: '42px 28px 20px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <div style={{ width: 230 }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 14 }}>
                            <span style={{ width: 62, fontSize: 16, fontWeight: 700, color: '#333' }}>改造前</span>
                            <span style={{ width: 58, fontSize: 18, fontWeight: 800, color: '#2950ff' }}>2.6 天</span>
                            <span style={{ display: 'inline-block', width: 100, height: 14, borderRadius: 20, background: 'linear-gradient(90deg,#2b57ff 0%,#3b7cff 100%)', boxShadow: 'inset 0 1px 2px rgba(255,255,255,.4),0 1px 3px rgba(41,80,255,.25)' }}></span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: 62, fontSize: 16, fontWeight: 700, color: '#333' }}>改造后</span>
                            <span style={{ width: 58, fontSize: 18, fontWeight: 800, color: '#34b44a' }}>&lt; 1 天</span>
                            <span style={{ display: 'inline-block', width: 54, height: 14, borderRadius: 20, background: 'linear-gradient(90deg,#27b144 0%,#5fd06d 100%)', boxShadow: 'inset 0 1px 2px rgba(255,255,255,.4),0 1px 3px rgba(39,177,68,.22)' }}></span>
                          </div>
                        </div>
                        <div style={{ textAlign: 'center', position: 'relative' }}>
                          <div style={{ fontSize: 16, color: '#333', fontWeight: 700 }}>提效</div>
                          <div style={{ fontSize: 52, lineHeight: 1, fontWeight: 900, color: '#ff7a00', fontStyle: 'italic', fontFamily: 'Arial,Helvetica,sans-serif' }}>66%</div>
                          <ArrowUpSvg />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 典型业务使用反馈 */}
              <div style={{ height: 20 }}></div>
              <div className="s1-card">
                <div className="s1-card-title" style={{ textAlign: 'left' }}>
                  <i className="fa-solid fa-comments" style={{ marginRight: 6 }}></i>典型业务使用反馈（节选）
                </div>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div className="s1-card" style={{ background: '#e8f0fe', borderColor: '#b8d4fe', flex: 1 }}>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: '#003A70', fontWeight: 700 }}>
                      智能网联团队：&ldquo;PRD 澄清 Skill 把需求评审前的文档冲突检测：30min → &lt;1min，提效 ~97%&rdquo;
                    </p>
                  </div>
                  <div className="s1-card" style={{ background: '#e8f0fe', borderColor: '#b8d4fe', flex: 1 }}>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: '#003A70', fontWeight: 700 }}>
                      制造物流项目：&ldquo;缺陷创建 Skill 批量补录时提效明显，一次性都给生成了缺陷&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* 探索之路 */}
              <div style={{ height: 22 }}></div>
              <div className="s1-card" style={{ padding: '16px 8px' }}>
                <div className="s1-card-title">
                  <i className="fa-solid fa-road" style={{ marginRight: 6 }}></i>AI 生成测试用例的探索之路（持续迭代，越来越好）
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div className="s1-timeline">
                    {/* V1 */}
                    <div className="s1-tl-card" style={{ flex: 0.55 }}>
                      <div className="s1-tl-v-title s1-tl-v-blue">V1</div>
                      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: '#003A70', fontWeight: 700 }}>直接写 prompt<br/>AI 生成用例<br/><br/></p>
                    </div>
                    <div className="s1-arrow" style={{ fontSize: 28 }}>➔</div>
                    {/* V2 */}
                    <div className="s1-tl-card" style={{ flex: 1.1 }}>
                      <div className="s1-tl-v-title s1-tl-v-blue">V2</div>
                      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: '#003A70', fontWeight: 700 }}>借助 Speckit 按SDD 研发流程操作<br/>流程过重不适合 ➔ 主动否决</p>
                      <div className="s1-cross">✕</div>
                    </div>
                    <div className="s1-arrow" style={{ fontSize: 28 }}>➔</div>
                    {/* V3 */}
                    <div className="s1-tl-card" style={{ flex: 0.88 }}>
                      <div className="s1-tl-v-title s1-tl-v-blue">V3</div>
                      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: '#003A70', fontWeight: 700 }}>裁剪出适合测试的极简路径<br/>开发 speckit-tools 提效</p>
                      <div className="s1-check">✓</div>
                    </div>
                    <div className="s1-arrow" style={{ fontSize: 28 }}>➔</div>
                    {/* V4 */}
                    <div className="s1-tl-card s1-tl-v4" style={{ flex: 0.97 }}>
                      <div className="s1-tl-v-title s1-tl-v-orange">V4</div>
                      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: '#BE4D38', fontWeight: 900 }}>经验积累，建设测试用例 Skill<br/>能力更成熟、易用、可复用</p>
                      <div className="s1-check" style={{ background: '#BE4D38', boxShadow: '0 2px 6px rgba(190,77,56,0.28)' }}>✓</div>
                    </div>
                  </div>
                  <div className="s1-tl-tip-box">
                    <div className="s1-tl-tip-title">核心启示</div>
                    <div className="s1-tl-tip"><div className="s1-tl-tip-icon" style={{ background: '#BE4D38' }}>✓</div><span>V2 被否决：不是失败，积累判断力</span></div>
                    <div className="s1-tl-tip"><div className="s1-tl-tip-icon" style={{ background: '#495057' }}>✓</div><span>V3 被放弃：不可复用，选择更成熟</span></div>
                    <div className="s1-tl-tip"><div className="s1-tl-tip-icon">✓</div><span>持续迭代：让 AI 能力更贴合测试场景</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 2: 质量线 ── */}
        <div className="s1-section">
          <div className="s1-sec-header">
            <div className="s1-sec-idx">2</div>
            质量线：解决 "好" —— 全局视角质量共建机制
          </div>
          <div className="s1-sec-body">
            <div>
              {/* 质量建设发展阶段 (QS Timeline) */}
              <div className="s1-card" style={{ marginBottom: 18 }}>
                <div className="s1-card-title" style={{ textAlign: 'left' }}>
                  <i className="fa-solid fa-timeline" style={{ marginRight: 6 }}></i>质量建设发展阶段
                </div>
                <div className="s1-qs-timeline">
                  {[
                    { year: '22 年', Icon: IconDocSvg, title: '开始建设研发流程', items: ['建立需求管理流程', '质量管理流程', '线上问题运营流程'] },
                    { year: '23 年', Icon: IconTreeSvg, title: '研发流程基本建设完成', items: ['提测标准(QIO/Showcase)', '上线质量(发布火车)', '隐患排查'] },
                    { year: '24 年', Icon: IconChartSvg, title: '质量运营机制形成', items: ['质量数据定期通晒', '线上问题运营', '自动化建设'] },
                    { year: '25 年', Icon: IconPyramidSvg, title: '方法论沉淀', items: ['三大手段 + 牵引机制', '数据驱动', '周维度复盘'] },
                    { year: '25 年H2', Icon: IconNetworkSvg, title: '方法论完全复制', items: ['在 AgentOps 完全复用', '共识别过程问题 23 个', '主动清零技术债务'] },
                  ].map((q, idx, arr) => (
                    <React.Fragment key={q.year}>
                      <div className="s1-qs-card">
                        <div className="s1-qs-year">{q.year}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 16 }}>
                          <div className="s1-qs-icon-w"><q.Icon size={35} /></div>
                          <div className="s1-qs-title">{q.title}</div>
                        </div>
                        <div className="s1-qs-content">
                          <ul className="s1-qs-list">{q.items.map((li, i) => <li key={i}>{li}</li>)}</ul>
                        </div>
                      </div>
                      {idx < arr.length - 1 && <div className="s1-qs-arrow">→</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* 方法论沉淀 */}
            <div className="s1-card" style={{ marginBottom: 18 }}>
              <div className="s1-card-title" style={{ textAlign: 'left' }}>
                <i className="fa-solid fa-lightbulb" style={{ marginRight: 6 }}></i>方法论沉淀
              </div>
              <div className="s1-qz-wrapper">
                <div className="s1-qz-left">
                  <div className="s1-qz-card s1-qz-red">
                    <div className="s1-qz-icon-w"><IconCheck size={48} /></div>
                    <div className="s1-qz-content">
                      <div className="s1-qz-title">底线：Badcase 机制</div>
                      <div className="s1-qz-desc">有没有踩红线？强化质量底线意识</div>
                    </div>
                  </div>
                  <div className="s1-qz-card s1-qz-orange">
                    <div className="s1-qz-icon-w"><IconTrend size={48} /></div>
                    <div className="s1-qz-content">
                      <div className="s1-qz-title">过程：服务综合质量分</div>
                      <div className="s1-qz-desc">通过冒烟通过率、单测覆盖率、Sonar Bugs等过程指标，防止局部质量退化</div>
                    </div>
                  </div>
                  <div className="s1-qz-card s1-qz-green">
                    <div className="s1-qz-icon-w"><IconCompass size={48} /></div>
                    <div className="s1-qz-content">
                      <div className="s1-qz-title">结果：故障等级 + 逃逸率</div>
                      <div className="s1-qz-desc">验证每一版交付的最终质量结果，趋势对比看改进效果</div>
                    </div>
                  </div>
                </div>
                <div className="s1-qz-circle-area">
                  <div className="s1-qz-circle-wrap">
                    <div className="s1-qz-ring"></div>
                    <RingSvg />
                    <div className="s1-qz-circle-content">
                      <div className="s1-qz-circle-title">牵引机制</div>
                      <div className="s1-qz-circle-text">以过程问题为抓手<br/>周维度复盘<br/>共建团队质量意识</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 效果汇总: Fusion Cloud vs AgentOps */}
            <div className="s1-fx-wrapper">
              {/* 融合云 */}
              <div className="s1-fx-fusion-card">
                <CloudSvg />
                <div className="s1-fx-header">
                  <IconCloudGreen size={40} />
                  <div className="s1-fx-title">融合云业务</div>
                </div>
                <div className="s1-fx-content-row">
                  <div className="s1-fx-panel">
                    <div className="s1-fx-tag">线上逃逸率</div>
                    <div className="s1-fx-chart-area">
                      <div className="s1-fx-axis"></div>
                      <div className="s1-fx-bar-group">
                        <div className="s1-fx-bar-value">17.6%</div>
                        <div className="s1-fx-bar fx-one"></div>
                        <div className="s1-fx-bar-label">2024 年前</div>
                      </div>
                      <CurveArrowGreen />
                      <div className="s1-fx-bar-group">
                        <div className="s1-fx-bar-value">7.0%</div>
                        <div className="s1-fx-bar fx-two"></div>
                        <div className="s1-fx-bar-label">2025 年</div>
                      </div>
                      <div className="s1-fx-down-box">
                        <div className="s1-fx-down-text">下降</div>
                        <div className="s1-fx-down-number">60.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="s1-fx-panel" style={{ marginTop: 16 }}>
                  <div className="s1-fx-tag">质量共建成效</div>
                  <div className="s1-fx-achievement">
                    <div className="s1-fx-achievement-item">
                      <IconCheckDoc size={30} />
                      <div className="s1-fx-achievement-text">共识别过程问题 <span className="s1-fx-big-green">17</span> 个，其中需求管理占比 <span className="s1-fx-mid-green">43%</span> 基础环境占比 <span className="s1-fx-mid-green">29%</span></div>
                    </div>
                    <div className="s1-fx-light-divider" style={{ borderColor: '#C8DDCC' }}></div>
                    <div className="s1-fx-achievement-item">
                      <IconBars size={30} />
                      <div className="s1-fx-achievement-text">服务综合质量分：重点服务 L2 达标率 100%，服务质量稳定</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AgentOps */}
              <div className="s1-fx-agent-card">
                <div className="s1-fx-header">
                  <IconAgentOps size={40} />
                  <div className="s1-fx-title">AgentOps业务</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div className="s1-fx-panel" style={{ border: '2px solid #CED4DA' }}>
                    <div className="s1-fx-tag" style={{ background: '#00558B' }}>线上逃逸率</div>
                    <div className="s1-fx-chart-area" style={{ marginTop: 35 }}>
                      <div className="s1-fx-axis"></div>
                      <div className="s1-fx-bar-group">
                        <div className="s1-fx-bar-value">8.2%</div>
                        <div className="s1-fx-bar s1-fx-purple-bar" style={{ height: 36, width: 72, borderRadius: '4px 4px 0 0' }}></div>
                        <div className="s1-fx-bar-label">25 H1</div>
                      </div>
                      <CurveArrowPurple />
                      <div className="s1-fx-bar-group">
                        <div className="s1-fx-bar-value">5.7%</div>
                        <div className="s1-fx-bar s1-fx-purple-bar" style={{ height: 23, width: 72, borderRadius: '4px 4px 0 0' }}></div>
                        <div className="s1-fx-bar-label">25 H2</div>
                      </div>
                      <div className="s1-fx-down-box">
                        <div className="s1-fx-down-text s1-fx-purple-text">下降</div>
                        <div className="s1-fx-down-number s1-fx-purple-text">30.5%</div>
                      </div>
                    </div>
                  </div>
                  <div className="s1-fx-panel" style={{ border: '2px solid #CED4DA' }}>
                    <div className="s1-fx-tag" style={{ background: '#00558B' }}>质量共建成效</div>
                    <div className="s1-fx-achievement">
                      <div className="s1-fx-achievement-item">
                        <IconCheckDocPurple size={30} />
                        <div className="s1-fx-achievement-text">共识别过程问题 <span className="s1-fx-big-purple">23</span> 个，其中流程执行不到位占比 <span className="s1-fx-mid-purple">43%</span></div>
                      </div>
                      <div className="s1-fx-light-divider"></div>
                      <div className="s1-fx-achievement-item">
                        <IconBarsPurple size={30} />
                        <div className="s1-fx-achievement-text">CR 热度触底反弹：H1 <span className="s1-fx-mid-purple">2.5%</span> → H2 <span className="s1-fx-big-purple">14.8%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 3: 平台化建设 ── */}
        <div className="s1-section">
          <div className="s1-sec-header" style={{ color: '#003A70' }}>
            <div className="s1-sec-idx">3</div>
            <span>平台化建设</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#495057', marginLeft: 4 }}>测试经验可视化 + 成本透明化 + 管理智能化</span>
          </div>
          <div className="s1-sec-body">
            <div className="s1-pk-grid">
              <div className="s1-pk-card">
                <div className="s1-pk-title">质量能力图谱管理平台 <span style={{ color: '#495057', fontSize: 14, fontWeight: 700 }}>（从 0 到 1 全栈自研）</span></div>
                <div className="s1-pk-metrics">
                  <div className="s1-pk-metric">
                    <div className="s1-pk-icon-w"><i className="fa-solid fa-diagram-project"></i></div>
                    <div><div className="s1-pk-num">17</div><div className="s1-pk-label">张能力图谱</div></div>
                  </div>
                  <div className="s1-pk-metric">
                    <div className="s1-pk-icon-w"><i className="fa-solid fa-layer-group"></i></div>
                    <div><div className="s1-pk-num">646</div><div className="s1-pk-label">个能力子集</div></div>
                  </div>
                  <div className="s1-pk-metric">
                    <div className="s1-pk-icon-w"><i className="fa-solid fa-database"></i></div>
                    <div><div className="s1-pk-num">752</div><div className="s1-pk-label">个能力沉淀</div></div>
                  </div>
                  <div className="s1-pk-metric">
                    <div className="s1-pk-icon-w"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
                    <div><div className="s1-pk-label" style={{ lineHeight: 1.45 }}>可检索<br/>可度量<br/>可复用</div></div>
                  </div>
                </div>
              </div>
              <div className="s1-pk-card">
                <div className="s1-pk-title">测试资源损耗管理平台 <span style={{ color: '#495057', fontSize: 14, fontWeight: 700 }}>（从 0 到 1 全栈自研）</span></div>
                <div className="s1-pk-metrics">
                  <div className="s1-pk-metric">
                    <div className="s1-pk-icon-w"><i className="fa-solid fa-file-lines"></i></div>
                    <div><div className="s1-pk-num">385+</div><div className="s1-pk-label">测试报告</div></div>
                  </div>
                  <div className="s1-pk-metric">
                    <div className="s1-pk-icon-w"><i className="fa-solid fa-clipboard-check"></i></div>
                    <div><div className="s1-pk-num">7 项</div><div className="s1-pk-label">校验规则</div></div>
                  </div>
                  <div className="s1-pk-metric">
                    <div className="s1-pk-icon-w"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                    <div><div className="s1-pk-num" style={{ fontSize: 14 }}>AI 智能分析</div><div className="s1-pk-label">过程问题</div></div>
                  </div>
                  <div className="s1-pk-metric">
                    <div className="s1-pk-icon-w"><i className="fa-solid fa-chart-pie"></i></div>
                    <div><div className="s1-pk-num" style={{ fontSize: 14 }}>多维视图</div><div className="s1-pk-label">成本概览</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="s1-footer">🏆 双线驱动，持续迭代，共建高质量交付体系</div> */}
      </div>
    </motion.div>
  );
}
