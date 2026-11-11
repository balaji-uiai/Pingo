"use client";

import React, { useState } from "react";
import {
  Globe,
  FileUp,
  Table,
  HelpCircle,
  Layers,
  CheckCircle2,
  FileText,
  Plus,
  Trash2,
  Edit2,
  RefreshCw,
  ExternalLink,
  Search,
  Sparkles,
} from "lucide-react";
import { knowledgeManagementData, KnowledgeSourceItem } from "@/data/knowledgeManagement";

const iconMap = {
  Globe,
  FileUp,
  Table,
  HelpCircle,
  Layers,
};

export const KnowledgeSources: React.FC = () => {
  const { sources } = knowledgeManagementData;
  const [activeSourceId, setActiveSourceId] = useState<string>(sources.items[0].id);

  const activeSource =
    sources.items.find((item) => item.id === activeSourceId) || sources.items[0];

  return (
    <section
      id="sources"
      aria-label="Knowledge Sources"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#F5F6FF]/70 dark:bg-[#101326]/50 border-t border-[#E5E7F0] dark:border-[#292D45] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#635BFF]/5 dark:bg-[#635BFF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#3984FF]/5 dark:bg-[#3984FF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{sources.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.18]">
            {sources.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed font-normal">
            {sources.description}
          </p>
        </div>

        {/* 5 Knowledge Source Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {sources.items.map((item) => {
            const Icon = iconMap[item.iconName] || Globe;
            const isSelected = item.id === activeSourceId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSourceId(item.id)}
                className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#FFFFFF] dark:bg-[#171A2E] border-[#635BFF] dark:border-[#635BFF] shadow-lg shadow-indigo-900/10 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] scale-[1.02]"
                    : "bg-[#FFFFFF]/60 dark:bg-[#121528] border-[#E5E7F0] dark:border-[#22263F] hover:bg-[#FFFFFF] dark:hover:bg-[#171A2E] hover:border-[#635BFF]/40 text-[#62677D] dark:text-[#B5BAD0]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                    isSelected
                      ? "bg-[#635BFF] text-white shadow-md shadow-[#635BFF]/30"
                      : "bg-[#F5F6FA] dark:bg-[#1B1F38] text-[#62677D] dark:text-[#B5BAD0]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#635BFF] dark:text-[#A5A0FF] mb-0.5">
                  SOURCE {item.number}
                </span>
                <span className={`text-xs sm:text-sm font-semibold leading-tight line-clamp-2 ${
                  isSelected ? "text-[#171B2E] dark:text-white" : "text-[#171B2E] dark:text-[#E2E8F0]"
                }`}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Source Feature Display & Visual Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl p-6 sm:p-8 lg:p-12 bg-[#FFFFFF] dark:bg-[#14172B] border border-[#E5E7F0] dark:border-[#282C48] shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          
          {/* Left Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] border border-[#635BFF]/25">
                {activeSource.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171B2E] dark:text-[#FFFFFF] tracking-tight">
                {activeSource.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#3984FF]">
                {activeSource.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
              {activeSource.description}
            </p>

            {/* Supported Formats if file uploads */}
            {activeSource.supportedFormats && (
              <div className="pt-1">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#62677D] dark:text-[#8E95AF] block mb-2">
                  Supported File Types:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSource.supportedFormats.map((fmt) => (
                    <span
                      key={fmt}
                      className="px-3 py-1 rounded-lg bg-[#3984FF]/10 text-[#3984FF] border border-[#3984FF]/25 text-xs font-mono font-semibold"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Checkpoint points */}
            <div className="space-y-2.5 pt-2 border-t border-[#F0F2F8] dark:border-[#232742]">
              {activeSource.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171B2E] dark:text-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Mockup Column */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8F9FE] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#282C48] shadow-inner space-y-4">
              
              {/* Preview 1: Website Crawler Preview */}
              {activeSource.previewType === "crawler" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E7F0] dark:border-white/10">
                    <span className="font-semibold text-[#171B2E] dark:text-white flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-[#635BFF]" />
                      Connected Website Source
                    </span>
                    <span className="text-[#10B981] text-[11px]">Syncing Every 24h ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#62677D] dark:text-[#8E95AF]">Root Domain:</span>
                      <span className="text-[#171B2E] dark:text-white font-bold">https://acme-saas.com</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#62677D] dark:text-[#8E95AF]">Documentation Path:</span>
                      <span className="text-[#3984FF]">/docs/* and /help/*</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#62677D] dark:text-[#8E95AF]">Indexed Pages:</span>
                      <span className="text-[#10B981] font-semibold">342 Pages Ready</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[11px] text-[#62677D] dark:text-[#8E95AF]">Recent Page Ingestion:</div>
                    {[
                      { path: "/docs/getting-started", status: "Extracted", time: "2m ago" },
                      { path: "/docs/pricing-models", status: "Extracted", time: "14m ago" },
                      { path: "/help/account-sso", status: "Extracted", time: "1h ago" },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white dark:bg-[#14172B] border border-[#E5E7F0] dark:border-white/5 text-[10px]">
                        <span className="text-[#171B2E] dark:text-white">{row.path}</span>
                        <span className="text-[#10B981]">{row.status} • {row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview 2: File Uploads (PDF, DOC, DOCX, TXT) */}
              {activeSource.previewType === "files" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E7F0] dark:border-white/10">
                    <span className="font-semibold text-[#171B2E] dark:text-white flex items-center gap-1.5">
                      <FileUp className="w-4 h-4 text-[#3984FF]" />
                      Ingested Documents
                    </span>
                    <span className="text-[#3984FF] text-[11px]">Semantic Chunking Active</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: "Enterprise_SLA_2026.pdf", type: "PDF", size: "2.4 MB", status: "18 Chunks Indexed" },
                      { name: "Billing_FAQ_Handbook.docx", type: "DOCX", size: "840 KB", status: "12 Chunks Indexed" },
                      { name: "Product_Overview_v2.doc", type: "DOC", size: "1.1 MB", status: "9 Chunks Indexed" },
                      { name: "System_Architecture.txt", type: "TXT", size: "140 KB", status: "4 Chunks Indexed" },
                    ].map((file, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="px-2 py-0.5 rounded bg-[#3984FF]/10 text-[#3984FF] text-[10px] font-bold">
                            {file.type}
                          </span>
                          <div>
                            <div className="text-[11px] font-semibold text-[#171B2E] dark:text-white truncate max-w-[180px]">
                              {file.name}
                            </div>
                            <div className="text-[10px] text-[#62677D] dark:text-[#8E95AF]">
                              {file.size}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] text-[#10B981] font-semibold">
                          {file.status} ✓
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview 3: Custom Tables Editor */}
              {activeSource.previewType === "table" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E7F0] dark:border-white/10">
                    <span className="font-semibold text-[#171B2E] dark:text-white flex items-center gap-1.5">
                      <Table className="w-4 h-4 text-[#20C5D8]" />
                      Custom Table: Pricing_Plans
                    </span>
                    <span className="text-[#20C5D8] text-[11px]">Tabular Storage</span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-[#E5E7F0] dark:border-white/10">
                    <table className="w-full text-[11px] text-left">
                      <thead className="bg-[#FFFFFF] dark:bg-[#171A2E] text-[#62677D] dark:text-[#8E95AF] border-b border-[#E5E7F0] dark:border-white/10">
                        <tr>
                          <th className="p-2">Plan Name</th>
                          <th className="p-2">Price</th>
                          <th className="p-2">Seats</th>
                          <th className="p-2">AI Limit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5E7F0] dark:divide-white/5 bg-white dark:bg-[#14172B]">
                        <tr>
                          <td className="p-2 font-semibold text-[#171B2E] dark:text-white">Starter</td>
                          <td className="p-2 text-[#3984FF]">$29/mo</td>
                          <td className="p-2">3 Seats</td>
                          <td className="p-2">1,000 Chats</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold text-[#171B2E] dark:text-white">Growth</td>
                          <td className="p-2 text-[#635BFF] dark:text-[#A5A0FF]">$79/mo</td>
                          <td className="p-2">10 Seats</td>
                          <td className="p-2">5,000 Chats</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold text-[#171B2E] dark:text-white">Enterprise</td>
                          <td className="p-2 text-[#20C5D8]">$199/mo</td>
                          <td className="p-2">Unlimited</td>
                          <td className="p-2">Custom</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#62677D] dark:text-[#8E95AF]">
                    <span>AI capability: Queries exact row values on demand</span>
                    <span className="text-[#10B981] font-semibold">Row-Level Lookup Active ✓</span>
                  </div>
                </div>
              )}

              {/* Preview 4: Manual FAQ Manager */}
              {activeSource.previewType === "faq" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E7F0] dark:border-white/10">
                    <span className="font-semibold text-[#171B2E] dark:text-white flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-[#635BFF]" />
                      Manual FAQ Directory
                    </span>
                    <span className="text-[#635BFF] dark:text-[#A5A0FF] text-[11px]">Authoritative Priority</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-white dark:bg-[#171A2E] border border-[#635BFF]/30 dark:border-[#635BFF]/50 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-[#171B2E] dark:text-white">Q: What is your refund policy?</span>
                        <div className="flex items-center gap-1.5">
                          <Edit2 className="w-3 h-3 text-[#3984FF] cursor-pointer" />
                          <Trash2 className="w-3 h-3 text-red-400 cursor-pointer" />
                        </div>
                      </div>
                      <p className="text-[10px] text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                        A: We offer a 14-day money-back guarantee for all new accounts without hassle.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-white/5 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-[#171B2E] dark:text-white">Q: How do I invite team members?</span>
                        <div className="flex items-center gap-1.5">
                          <Edit2 className="w-3 h-3 text-[#3984FF] cursor-pointer" />
                          <Trash2 className="w-3 h-3 text-red-400 cursor-pointer" />
                        </div>
                      </div>
                      <p className="text-[10px] text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                        A: Go to Settings → Team → Invite. Enter email addresses and assign agent roles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#62677D] dark:text-[#8E95AF]">
                    <span>Authoritative Q&amp;As override ambiguous documentation</span>
                    <span className="text-[#10B981] font-semibold">Live in Knowledge Base ✓</span>
                  </div>
                </div>
              )}

              {/* Preview 5: Website Content Management */}
              {activeSource.previewType === "content" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E7F0] dark:border-white/10">
                    <span className="font-semibold text-[#171B2E] dark:text-white flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-[#3984FF]" />
                      Collected Website Content Review
                    </span>
                    <span className="text-[#3984FF] text-[11px]">Content Hygiene</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { title: "Authentication Flow v2", url: "/docs/auth", words: "1,240 words", status: "Included" },
                      { title: "Legacy Deprecated API v1", url: "/docs/v1/legacy", words: "3,100 words", status: "Excluded (Stale)" },
                      { title: "Team Roles & Permissions", url: "/docs/roles", words: "850 words", status: "Included" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-[11px]"
                      >
                        <div>
                          <div className="font-semibold text-[#171B2E] dark:text-white truncate max-w-[200px]">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-[#62677D] dark:text-[#8E95AF]">
                            {item.url} • {item.words}
                          </div>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          item.status.startsWith("Included")
                            ? "bg-[#10B981]/15 text-[#10B981]"
                            : "bg-red-500/15 text-red-500"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#62677D] dark:text-[#8E95AF]">
                    <span>Prevent outdated content from ever reaching customers</span>
                    <span className="text-[#10B981] font-semibold">Toggles Applied Instantly ✓</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default KnowledgeSources;

