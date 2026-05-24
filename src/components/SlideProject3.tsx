/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  Search,
  Users,
  Target,
  RotateCw,
  Lightbulb,
  MessageSquare,
  Settings,
  BarChart4,
  Trophy,
  ArrowRight,
  ArrowDown,
  Zap,
  Tag,
  UserCheck,
} from "lucide-react";

export default function SlideProject3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page active" style={{ padding: "24px" }}>
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", padding: "16px 24px 10px", borderBottom: "3px solid #dbe4f1" }}>
          <div>
            <div style={{ fontSize: "24px", fontWeight: 900, color: "#14276b", lineHeight: 1.2, letterSpacing: "1px" }}>项目三：AI生态建设 — Skill 质量治理体系与团队赋能</div>
          </div>
        </div>

        {/* Section 1 Card */}
        <div className="bg-white border border-[#CED4DA] rounded-[18px] shadow-[0_8px_24px_rgba(12,35,64,0.03)] mb-6">
          {/* Section 1 Header */}
          <div className="flex items-center gap-3 px-5 pt-[14px] pb-2.5">
            <div className="w-[34px] h-[34px] rounded-md bg-[#003A70] text-white text-xl font-extrabold flex items-center justify-center shrink-0">
              1
            </div>
            <h3 className="text-[22px] font-extrabold text-[#003A70] tracking-[-0.2px]">
              AI治理：建设 Skill 质量治理体系
            </h3>
          </div>

          {/* Upper Content Grid: 30/70 */}
          <div className="grid grid-cols-1 lg:grid-cols-[30fr_70fr] gap-2.5 px-2.5">
            {/* Left Column (30%): Pain Points */}
            <div className="border border-[#CED4DA] rounded-[10px] bg-white">
              <div className="p-4 text-[15px] leading-relaxed">
                <div className="flex items-center gap-1.5 mb-2.5 text-[15px] text-[#003A70] font-bold">
                  <Zap className="w-[18px] h-[18px] text-[#C92A2A]" />
                  <span className="underline ml-1.5">痛点</span>
                </div>
                <div className="font-semibold mb-3.5">
                  26年初OpenClaw Skill 市场用户已贡献了几百个 Skill，<br />
                  但是质量、复用性和 token 消耗情况均未知：
                </div>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-2 font-semibold">
                    <AlertTriangle className="w-[18px] h-[18px] text-[#C92A2A] shrink-0 mt-1" />
                    <span>用户面对海量 Skill 无从选择</span>
                  </div>
                  <div className="flex items-start gap-2 font-semibold">
                    <AlertTriangle className="w-[18px] h-[18px] text-[#C92A2A] shrink-0 mt-1" />
                    <span>不同团队各自开发功能重叠的 Skill</span>
                  </div>
                  <div className="flex items-start gap-2 font-semibold">
                    <AlertTriangle className="w-[18px] h-[18px] text-[#C92A2A] shrink-0 mt-1" />
                    <span>低质量 Skill 持续消耗计算资源却不产生对应价值</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (70%): 7-Dimension Derivation */}
            <div className="border border-[#CED4DA] rounded-[10px] bg-white">
              <div className="p-4 pt-[14px]">
                <div className="text-[#003A70] font-extrabold text-[15px] leading-normal mb-2.5">
                  多维度体系不是凭空设计，遵循"先摸清输入、再结合约束、后收敛方案"的推导路径：
                </div>

                {/* Step 1 */}
                <div className="grid grid-cols-[200px_1fr] gap-3 items-center mb-2.5">
                  <div className="border border-[#CED4DA] rounded-lg bg-[#E8EDF4] min-h-[78px] p-2.5 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full border-[3px] border-[#003A70] flex items-center justify-center text-[#003A70] text-[13px] shrink-0">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[#003A70] font-extrabold text-[15px] mb-0.5">输入一</div>
                      <div className="text-[15px] text-[#495057] font-semibold">业内开源方案调研</div>
                    </div>
                  </div>
                  <div className="border border-[#CED4DA] rounded-lg min-h-[78px] bg-white p-3 flex items-center text-[15px] leading-relaxed font-semibold">
                    参考业界已开源的 Skill 质量度量方案，了解社区已有的评估维度和分级标准
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-[200px_1fr] gap-3 items-center mb-2.5">
                  <div className="border border-[#CED4DA] rounded-lg bg-[#E8EDF4] min-h-[98px] p-2.5 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full border-[3px] border-[#003A70] flex items-center justify-center text-[#003A70] text-[13px] shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[#003A70] font-extrabold text-[15px] mb-0.5">输入二</div>
                      <div className="text-[15px] text-[#495057] font-semibold">真实使用场景约束</div>
                    </div>
                  </div>
                  <div className="border border-[#CED4DA] rounded-lg min-h-[98px] bg-white p-3 flex items-center text-[15px] leading-relaxed font-semibold">
                    <div>
                      <div>• Skill 需同时支持 OpenClaw 和 Claude Code两个平台的安装和使用，评估体系须覆盖双平台兼容性</div>
                      <div>• Token 消耗需纳入考量: 一个功能可用但每次调用消耗数万 Token 的 Skill，也不能视为"高质量"</div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-[200px_1fr] gap-3 items-center">
                  <div className="border border-[#CED4DA] rounded-lg bg-[#E8EDF4] min-h-[78px] p-2.5 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full border-[3px] border-[#003A70] flex items-center justify-center text-[#003A70] text-[13px] shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[#003A70] font-extrabold text-[15px] mb-0.5">收敛</div>
                      <div className="text-[15px] text-[#495057] font-semibold">形成体系</div>
                    </div>
                  </div>
                  <div className="border border-[#CED4DA] rounded-lg min-h-[78px] bg-white p-3 flex items-center text-[15px] leading-relaxed font-semibold">
                    将业内方案与团队约束交叉比对，收敛为多维度加权评分体系
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: 50/50 */}
          <div className="mx-2.5 mt-2.5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
              {/* Left 50%: 7-Dimension Table */}
              <div className="border border-[#CED4DA] rounded-[10px] bg-white p-2.5">
                <div className="text-center text-[#003A70] font-black text-[15px] mb-2">
                  多维度加权评分体系（ A–E六级分类 ）
                </div>
                <table className="w-full border-collapse text-[15px]">
                  <thead>
                    <tr className="bg-[#003A70] text-white">
                      <th className="p-2.5 px-1.5 border border-[#CED4DA] font-extrabold text-[15px] w-[149px]">评估维度</th>
                      <th className="p-2.5 px-1.5 border border-[#CED4DA] font-extrabold text-[15px] w-[130px]">检查内容</th>
                      <th className="p-2.5 px-1.5 border border-[#CED4DA] font-extrabold text-[15px] w-[179px]">解决的问题</th>
                    </tr>
                  </thead>
                  <tbody className="font-semibold">
                    <tr>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#003A70] text-white inline-flex items-center justify-center text-[11px] mr-2 font-extrabold">1</span>
                        SKILL.md 质量
                      </td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">元数据完整性、参数定义、使用说明是否清晰</td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">Skill 可发现、可理解</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#003A70] text-white inline-flex items-center justify-center text-[11px] mr-2 font-extrabold">2</span>
                        脚本静态分析
                      </td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">代码规范、潜在错误、安全风险</td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">Skill 代码质量可控</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#003A70] text-white inline-flex items-center justify-center text-[11px] mr-2 font-extrabold">3</span>
                        模拟运行
                      </td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">在沙箱环境实际执行，验证功能可用</td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">发布前"真的能跑"</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#003A70] text-white inline-flex items-center justify-center text-[11px] mr-2 font-extrabold">4</span>
                        文档代码一致性
                      </td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">SKILL.md 描述与实际行为是否一致</td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">避免"说的和做的不一样"</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#003A70] text-white inline-flex items-center justify-center text-[11px] mr-2 font-extrabold">5</span>
                        兼容性检查
                      </td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">依赖版本、平台兼容性</td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">安装即可用，不报错</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#003A70] text-white inline-flex items-center justify-center text-[11px] mr-2 font-extrabold">6</span>
                        Token 预估
                      </td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">预估单次调用消耗的Token 量</td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">成本可控、可预算</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#003A70] text-white inline-flex items-center justify-center text-[11px] mr-2 font-extrabold">7</span>
                        多维度综合评级
                      </td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">上述维度加权评分，输出 A–E 六级分类</td>
                      <td className="p-2 border border-[#CED4DA] align-top leading-relaxed">差异化检查策略，按级管理</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Right 50%: Bar Chart */}
              <div className="bg-white border border-[#CED4DA] rounded-[10px] py-3 px-5 flex flex-col justify-center">
                {/* Legend */}
                <div className="flex justify-center items-center gap-12 mb-1">
                  <div className="flex items-center gap-2.5 text-[15px] font-bold text-black">
                    <div className="w-[18px] h-[18px] rounded-[3px] bg-[#003A70]" />
                    <span>优化前</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[15px] font-bold text-black">
                    <div className="w-[18px] h-[18px] rounded-[3px] bg-[#2B8A3E]" />
                    <span>优化后</span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="relative w-full h-[240px] pl-[60px] pr-6">
                  {/* Grid Lines */}
                  <div className="absolute left-[60px] right-6 border-t-2 border-dashed border-[#D2D7E1]" style={{ top: 20 }} />
                  <div className="absolute left-[60px] right-6 border-t-2 border-dashed border-[#D2D7E1]" style={{ top: 88 }} />
                  <div className="absolute left-[60px] right-6 border-t-2 border-dashed border-[#D2D7E1]" style={{ top: 123 }} />
                  <div className="absolute left-[60px] right-6 border-t-2 border-dashed border-[#D2D7E1]" style={{ top: 157 }} />
                  <div className="absolute left-[60px] right-6 border-t-2 border-dashed border-[#D2D7E1]" style={{ top: 191 }} />
                  <div className="absolute left-[60px] right-6 border-t-2 border-dashed border-[#D2D7E1]" style={{ bottom: 15 }} />

                  {/* Y Axis Labels */}
                  <div className="absolute left-[14px] text-base text-black font-medium" style={{ top: 225 }}>0</div>
                  <div className="absolute left-[14px] text-base text-black font-medium" style={{ top: 191 }}>20</div>
                  <div className="absolute left-[14px] text-base text-black font-medium" style={{ top: 157 }}>40</div>
                  <div className="absolute left-[14px] text-base text-black font-medium" style={{ top: 123 }}>60</div>
                  <div className="absolute left-[14px] text-base text-black font-medium" style={{ top: 88 }}>80</div>
                  <div className="absolute left-[14px] text-base text-black font-medium" style={{ top: 20 }}>120</div>

                  {/* Y Axis */}
                  <div className="absolute left-[60px] top-[20px] bottom-[15px] w-[3px] bg-[#1e1e1e]" />
                  {/* X Axis */}
                  <div className="absolute left-[60px] right-6 bottom-[15px] h-[3px] bg-[#1e1e1e]" />

                  {/* Bar Groups */}
                  <div className="absolute left-[84px] right-9 top-[20px] bottom-[15px] flex justify-between items-end">
                    {/* D (不合格) */}
                    <div className="flex flex-col items-center flex-1 max-w-[63px] h-full justify-end">
                      <div className="flex items-end gap-1 h-full">
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="w-[22px] rounded-t-[3px] bg-[#003A70] relative" style={{ height: 26 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">15</span>
                          </div>
                        </div>
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center font-extrabold text-[#C92A2A]">
                            <span className="text-[15px]">↓7</span>
                          </div>
                          <div className="w-[22px] rounded-t-[3px] bg-[#2B8A3E] relative" style={{ height: 14 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">8</span>
                          </div>
                        </div>
                      </div>
                      <span className="mt-3 text-[15px] font-medium text-black whitespace-nowrap">D（不合格）</span>
                    </div>

                    {/* E (需改进) */}
                    <div className="flex flex-col items-center flex-1 max-w-[63px] h-full justify-end">
                      <div className="flex items-end gap-1 h-full">
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="w-[22px] rounded-t-[3px] bg-[#003A70] relative" style={{ height: 27 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">16</span>
                          </div>
                        </div>
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center font-extrabold text-[#2B8A3E]">
                            <span className="text-[15px]">↑6</span>
                          </div>
                          <div className="w-[22px] rounded-t-[3px] bg-[#2B8A3E] relative" style={{ height: 38 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">22</span>
                          </div>
                        </div>
                      </div>
                      <span className="mt-3 text-[15px] font-medium text-black whitespace-nowrap">E（需改进）</span>
                    </div>

                    {/* C (一般) */}
                    <div className="flex flex-col items-center flex-1 max-w-[63px] h-full justify-end">
                      <div className="flex items-end gap-1 h-full">
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="w-[22px] rounded-t-[3px] bg-[#003A70] relative" style={{ height: 77 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">45</span>
                          </div>
                        </div>
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center font-extrabold text-[#2B8A3E]">
                            <span className="text-[15px]">↑2</span>
                          </div>
                          <div className="w-[22px] rounded-t-[3px] bg-[#2B8A3E] relative" style={{ height: 80 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">47</span>
                          </div>
                        </div>
                      </div>
                      <span className="mt-3 text-[15px] font-medium text-black whitespace-nowrap">C（一般）</span>
                    </div>

                    {/* B (良好) */}
                    <div className="flex flex-col items-center flex-1 max-w-[63px] h-full justify-end">
                      <div className="flex items-end gap-1 h-full">
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="w-[22px] rounded-t-[3px] bg-[#003A70] relative" style={{ height: 145 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">85</span>
                          </div>
                        </div>
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center font-extrabold text-[#C92A2A]">
                            <span className="text-[15px]">↓9</span>
                          </div>
                          <div className="w-[22px] rounded-t-[3px] bg-[#2B8A3E] relative" style={{ height: 130 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">76</span>
                          </div>
                        </div>
                      </div>
                      <span className="mt-3 text-[15px] font-medium text-black whitespace-nowrap">B（良好）</span>
                    </div>

                    {/* A (优秀) */}
                    <div className="flex flex-col items-center flex-1 max-w-[63px] h-full justify-end">
                      <div className="flex items-end gap-1 h-full">
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="w-[22px] rounded-t-[3px] bg-[#003A70] relative" style={{ height: 161 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">94</span>
                          </div>
                        </div>
                        <div className="relative w-[22px] flex justify-center items-end">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center font-extrabold text-[#2B8A3E]">
                            <span className="text-[15px]">↑6</span>
                          </div>
                          <div className="w-[22px] rounded-t-[3px] bg-[#2B8A3E] relative" style={{ height: 171 }}>
                            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-bold text-black whitespace-nowrap">100</span>
                          </div>
                        </div>
                      </div>
                      <span className="mt-3 text-[15px] font-medium text-black whitespace-nowrap">A（优秀）</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mx-2.5 mt-2 mb-2 h-[38px] rounded-lg overflow-hidden border border-[#CED4DA] flex">
            <div className="w-[510px] bg-[#003A70] text-white flex items-center justify-center font-extrabold text-[17px] border-r border-white/25">
              <RotateCw className="w-4 h-4 mr-2" />
              已接入 OpenClaw 市场，评估 Skill 数量 465 个
            </div>
            <div className="flex-1 bg-[#003A70] text-white flex items-center justify-center font-extrabold text-[15px]">
              针对 256 个 Skill 进行跟踪，发现 22 个 Skill 质量在变好，尤其是 D 不合格 → A 优秀的变化
            </div>
          </div>
        </div>

        {/* Section 2 Card */}
        <div className="bg-white border border-[#CED4DA] rounded-[18px] shadow-[0_8px_24px_rgba(12,35,64,0.03)] overflow-hidden">
          {/* Section 2 Header */}
          <div className="flex items-center gap-3 px-5 pt-[14px] pb-2.5">
            <div className="w-[34px] h-[34px] rounded-md bg-[#003A70] text-white text-xl font-extrabold flex items-center justify-center shrink-0">
              2
            </div>
            <h3 className="text-[22px] font-extrabold text-[#003A70] tracking-[-0.2px]">
              AI团队内赋能：把方法交出去，让别人也能做
            </h3>
          </div>

          {/* Intro Section */}
          <div className="mx-2.5 mb-1.5 border border-[#CED4DA] rounded-[10px] bg-white overflow-hidden">
            <div className="py-[22px] px-2.5 flex gap-7 items-start">
              <div className="w-[150px] flex justify-center pt-2">
                <Users className="w-10 h-10 text-[#003A70]" />
              </div>
              <div className="flex-1 text-[#003A70] text-[15px] leading-[2] font-bold">
                AI 提效不能靠单打独斗。很多一线测试同学扎根业务，对外界 AI 感知不明显，仍然采用传统碳基方案做事。<br />
                如果不主动拉齐，意识未跟上的人会被加速淘汰，团队整体能力也会出现断层。
              </div>
            </div>
          </div>

          {/* Middle Grid: 45/55 */}
          <div className="px-2.5 grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-[18px] items-stretch">
            {/* Left Card: Team Sharing */}
            <div className="bg-white/75 border-2 border-[#CED4DA] rounded-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.03)] flex flex-col">
              <div className="p-5 pb-6">
                <div className="flex items-center gap-[18px] mb-[18px]">
                  <div className="w-[62px] h-[62px] rounded-full bg-[#003A70] flex items-center justify-center text-white shrink-0">
                    <Lightbulb className="w-[30px] h-[30px]" />
                  </div>
                  <h4 className="text-[#003A70] text-lg font-black">团队内分享</h4>
                </div>
                <div className="text-[#003A70] text-[15px] leading-[1.8] font-bold">
                  在团队会议上讲解 PRD 澄清、<span className="text-[#003A70] font-black">缺陷创建</span>等 Skill 的设计逻辑:
                  不只是演示功能，而是讲清楚
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3.5">
                  <div className="border-2 border-[#CED4DA] bg-[#E8EDF4] rounded-xl min-h-[92px] p-3 flex gap-3 items-start">
                    <MessageSquare className="w-6 h-6 text-[#003A70] shrink-0 mt-1" />
                    <span className="text-[#003A70] text-[15px] leading-relaxed font-bold">识别业务痛点场景</span>
                  </div>
                  <div className="border-2 border-[#CED4DA] bg-[#E8EDF4] rounded-xl min-h-[92px] p-3 flex gap-3 items-start">
                    <Settings className="w-6 h-6 text-[#003A70] shrink-0 mt-1" />
                    <span className="text-[#003A70] text-[15px] leading-relaxed font-bold">Skill 是怎么设计的</span>
                  </div>
                  <div className="border-2 border-[#CED4DA] bg-[#E8EDF4] rounded-xl min-h-[92px] p-3 flex gap-3 items-start">
                    <BarChart4 className="w-6 h-6 text-[#003A70] shrink-0 mt-1" />
                    <span className="text-[#003A70] text-[15px] leading-relaxed font-bold">Skill在CC和OC上的使用</span>
                  </div>
                </div>
                <div className="text-center text-[#495057] text-[52px] my-1">
                  <ArrowDown className="w-[52px] h-[52px] inline" />
                </div>
                <div className="text-[#003A70] text-[15px] leading-[1.9] font-bold px-5">
                  团队同学从 "知道 AI 能做什么" 升级为 "主动探索识别业务场景，用AI改造"，团队共计涌现出35个AI优秀实践
                </div>
              </div>
            </div>

            {/* Right: Mentoring System */}
            <div className="flex flex-col gap-[18px]">
              <div className="bg-white/75 border-2 border-[#CED4DA] rounded-[18px] flex-1 p-[18px]">
                <div className="flex gap-2.5">
                  <div className="w-10 flex justify-center pt-2">
                    <UserCheck className="w-[35px] h-[35px] text-[#003A70]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#003A70] text-lg font-black mb-[22px] pl-[4%]">
                      带教外援同学
                    </h4>
                    <div className="grid grid-cols-[0.79fr_31px_1.21fr] gap-2 items-center">
                      {/* First Layer */}
                      <div className="border-2 border-[#CED4DA] rounded-2xl bg-white p-4 min-h-[270px]">
                        <span className="inline-flex items-center justify-center bg-[#003A70] text-white rounded-2xl px-[18px] py-1.5 text-base font-black mb-4">
                          第一层
                        </span>
                        <div className="text-[#003A70] text-[17px] leading-[1.8] font-bold mb-[18px]">
                          学会使用团队已有的 Skill，在业务上实践提效。
                        </div>
                        <div className="border-2 border-[#CED4DA] bg-[#E8EDF4] rounded-xl h-[54px] flex items-center justify-center text-[#003A70] text-[17px] font-black mb-3">
                          融合云业务实践反馈
                        </div>
                        <div className="border-2 border-[#CED4DA] bg-[#E8EDF4] rounded-xl h-[54px] flex items-center justify-center text-[#003A70] text-[17px] font-black">
                          AgentOps实践反馈
                        </div>
                      </div>

                      {/* Center Arrow */}
                      <div className="text-[#495057] text-[31px] text-center">
                        <ArrowRight className="w-[31px] h-[31px] inline" />
                      </div>

                      {/* Second Layer */}
                      <div className="border-2 border-[#CED4DA] rounded-2xl bg-white p-4 min-h-[270px]">
                        <span className="inline-flex items-center justify-center bg-[#003A70] text-white rounded-2xl px-[18px] py-1.5 text-base font-black mb-4">
                          第二层
                        </span>
                        <div className="text-[#003A70] text-[17px] leading-[1.8] font-bold mb-[18px]">
                          由我识别痛点、给出建设方案和设计框架，<br />
                          外援同学在框架内独立完成开发：
                        </div>
                        <div className="grid gap-3.5 mt-2 w-[105%] -ml-[2.5%]">
                          <div className="border-2 border-[#CED4DA] rounded-xl bg-white px-3.5 py-2.5 min-h-[48px]">
                            <div className="flex items-center gap-2.5 text-[#003A70] text-base font-black mb-3.5">
                              <Settings className="w-7 h-7" />
                              自动化回归失败用例分析
                            </div>
                            <p className="text-[#003A70] text-base leading-[1.8] font-bold">
                              30+min/日 → 7~8min/日，提效 ~75%
                            </p>
                          </div>
                          <div className="border-2 border-[#CED4DA] rounded-xl bg-white px-3.5 py-2.5 min-h-[48px]">
                            <div className="flex items-center gap-2.5 text-[#003A70] text-base font-black mb-3.5">
                              <Tag className="w-7 h-7" />
                              模型上下架标注
                            </div>
                            <p className="text-[#003A70] text-base leading-[1.8] font-bold">
                              手动逐个 → 批量一键标注，提效 80%+
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Verification Bottom */}
          <div className="mx-2.5 mt-4 mb-4">
            <div className="bg-white/75 border-2 border-[#CED4DA] rounded-[18px] p-[26px]">
              <div className="flex items-center gap-[18px]">
                <div className="w-[62px] h-[62px] rounded-full bg-[#003A70] flex items-center justify-center text-white shrink-0">
                  <Trophy className="w-[30px] h-[30px]" />
                </div>
                <h4 className="text-[#003A70] text-lg font-black">
                  核心验证: 从 "我自己能做" → "别人能在我的框架下能做" → "别人能自己识别场景做"
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[#495057] text-xs font-mono font-bold mt-4">
          Quality Engineering · AI Driven Testing PPT Slide Deck · Slide 3 (AI Ecosystem Design)
        </div>
      </div>
    </motion.div>
  );
}
