"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Database,
  MessagesSquare,
  Ticket,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  GitBranch,
  ArrowRight,
  Clock,
  Send,
  User,
  Search,
  Lock,
  Zap,
  Globe,
  FileText,
  AlertCircle,
  TrendingUp,
  Share2,
} from "lucide-react";

interface ProductFeaturePreviewProps {
  activeModuleIndex: number;
}

export const ProductFeaturePreview: React.FC<ProductFeaturePreviewProps> = ({
  activeModuleIndex,
}) => {
  const windowTitles = [
    "pingo.ai / agent-workflow-engine",
    "pingo.knowledge / index-sync",
    "pingo.inbox / unified-workspace",
    "pingo.helpdesk / ticket-queue",
    "pingo.team / roles-and-access",
    "pingo.analytics / real-time-insights",
    "pingo.integrations / connected-ecosystem",
    "pingo.security / governance-and-compliance",
  ];

  const modulePills = [
    "AI Automation Engine",
    "Knowledge Base Synced",
    "Unified Omnichannel Inbox",
    "Helpdesk & SLA Queue",
    "Team & Access Control",
    "Intelligence & CSAT",
    "6 Channels Connected",
    "Enterprise Security Active",
  ];

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#141126]/90 border border-white/[0.08] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-between">
      {/* Top Window Chrome Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-[#100D1D]/90">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-xs font-mono text-[#D5D0E5]/60">
            {windowTitles[activeModuleIndex] || "pingo.module"}
          </span>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#782BFF]/15 border border-[#782BFF]/30 text-[11px] text-[#D5D0E5] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B5FF45] animate-pulse" />
          <span>{modulePills[activeModuleIndex]}</span>
        </div>
      </div>

      {/* Main Interactive Stage Visualization */}
      <div className="relative p-5 sm:p-7 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* ========================================================= */}
          {/* MODULE 01: AI Automation                                  */}
          {/* ========================================================= */}
          {activeModuleIndex === 0 && (
            <motion.div
              key="feat-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Agent Runtime Bar */}
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-white flex items-center gap-2 font-medium">
                  <Sparkles className="w-4 h-4 text-[#B5FF45] animate-spin" />
                  Autonomous AI Agent Active
                </span>
                <span className="text-[10px] font-mono text-[#B5FF45] bg-[#B5FF45]/10 px-2 py-0.5 rounded border border-[#B5FF45]/20">
                  Latency: 118ms • 98.4% Confidence
                </span>
              </div>

              {/* Chat Simulation */}
              <div className="p-4 rounded-xl bg-[#080711]/70 border border-white/10 space-y-3 text-xs">
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="p-3 rounded-2xl rounded-tr-xs bg-[#782BFF]/25 border border-purple-400/30 text-white max-w-[85%]">
                    Can Pingo automatically escalate urgent billing queries to tier-2 agents?
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white flex-shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-purple-600/30 border border-purple-400/30 text-[#B5FF45] flex items-center justify-center text-[10px] flex-shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-xs bg-white/[0.04] border border-white/10 text-[#D5D0E5] max-w-[88%] space-y-1.5">
                    <p>
                      Yes! Pingo detects billing intents, tags urgency, and triggers an automated handover to your Tier-2 finance support team with full conversation context.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#B5FF45]">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Knowledge source: /docs/escalation-rules#tier2</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow Execution Node */}
              <div className="p-3 rounded-xl bg-[#100D1D] border border-purple-500/20 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-[#D5D0E5]">
                  <GitBranch className="w-3.5 h-3.5 text-[#A855F7]" />
                  <span>Rule: Intent = &quot;Billing Urgent&quot;</span>
                </div>
                <span className="text-[#B5FF45]">Auto-Assign: Tier-2 ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 02: Knowledge Management                           */}
          {/* ========================================================= */}
          {activeModuleIndex === 1 && (
            <motion.div
              key="feat-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Crawler Status */}
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-white flex items-center gap-2 font-medium">
                  <Database className="w-4 h-4 text-[#B5FF45]" />
                  Knowledge Centers & Crawler
                </span>
                <span className="text-[10px] font-mono text-[#D5D0E5]/70">
                  Auto-Sync: Active (1,420 Articles)
                </span>
              </div>

              {/* Ingested Sources List */}
              <div className="p-3.5 rounded-xl bg-[#080711]/70 border border-white/10 space-y-2.5">
                {[
                  {
                    icon: Globe,
                    title: "Website Crawler: yourcompany.com/docs",
                    meta: "342 pages indexed • 100% healthy",
                    status: "Synced",
                  },
                  {
                    icon: FileText,
                    title: "API_Documentation_v3.pdf",
                    meta: "18 pages parsed • Semantic chunks built",
                    status: "Ready",
                  },
                  {
                    icon: Database,
                    title: "Customer Support FAQs",
                    meta: "84 Q&As mapped • Vector embeddings ready",
                    status: "Live",
                  },
                ].map((src, i) => {
                  const SIcon = src.icon;
                  return (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <SIcon className="w-4 h-4 text-[#A855F7]" />
                        <div>
                          <div className="font-semibold text-white text-[11px] sm:text-xs">
                            {src.title}
                          </div>
                          <div className="text-[10px] text-[#D5D0E5]/60 font-mono">
                            {src.meta}
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#B5FF45]/10 text-[#B5FF45] border border-[#B5FF45]/20">
                        {src.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Semantic Query Simulator */}
              <div className="p-2.5 rounded-xl bg-[#100D1D] border border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D5D0E5]/80">
                <span className="flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-[#B5FF45]" />
                  Vector Search: &quot;turnaround SLA&quot;
                </span>
                <span className="text-[#B5FF45]">Match: 0.99 ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 03: Conversation Management                       */}
          {/* ========================================================= */}
          {activeModuleIndex === 2 && (
            <motion.div
              key="feat-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-white flex items-center gap-2 font-medium">
                  <MessagesSquare className="w-4 h-4 text-[#B5FF45]" />
                  Unified Omnichannel Inbox
                </span>
                <span className="text-[10px] font-mono text-[#B5FF45]">
                  3 Active Queues
                </span>
              </div>

              {/* Active Conversations Feed */}
              <div className="p-3.5 rounded-xl bg-[#080711]/70 border border-white/10 space-y-2">
                {[
                  {
                    name: "Sarah Miller (Acme Corp)",
                    msg: "How do we connect our WhatsApp business number?",
                    channel: "Web Chat",
                    time: "2m ago",
                    badge: "AI Handover",
                  },
                  {
                    name: "David Kim (TechFlow)",
                    msg: "Thanks! That resolved the webhook issue.",
                    channel: "WhatsApp",
                    time: "5m ago",
                    badge: "Resolved ✓",
                  },
                  {
                    name: "Elena Rostova",
                    msg: "Looking for an enterprise quote for 50 agents.",
                    channel: "Instagram",
                    time: "12m ago",
                    badge: "High Priority",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-[11px] sm:text-xs">
                          {item.name}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300 font-mono">
                          {item.channel}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#D5D0E5]/70 line-clamp-1 mt-0.5">
                        {item.msg}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#D5D0E5]/50 block">
                        {item.time}
                      </span>
                      <span className="text-[10px] font-mono text-[#B5FF45]">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Routing Macro */}
              <div className="p-2.5 rounded-xl bg-[#100D1D] border border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#D5D0E5]/70">Context Routing:</span>
                <span className="text-white">Smart Skill Handover Enabled ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 04: Helpdesk & Ticketing                           */}
          {/* ========================================================= */}
          {activeModuleIndex === 3 && (
            <motion.div
              key="feat-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-white flex items-center gap-2 font-medium">
                  <Ticket className="w-4 h-4 text-[#B5FF45]" />
                  Helpdesk Ticket Queue
                </span>
                <span className="text-[10px] font-mono text-[#B5FF45]">
                  99.4% SLA Adherence
                </span>
              </div>

              {/* Tickets Table */}
              <div className="p-3.5 rounded-xl bg-[#080711]/70 border border-white/10 space-y-2">
                {[
                  {
                    id: "#PG-1048",
                    title: "API rate limit exceeded on webhook payload",
                    pri: "P1 Urgent",
                    priColor: "text-red-400 bg-red-500/10 border-red-500/20",
                    status: "In Progress",
                    sla: "18m remaining",
                  },
                  {
                    id: "#PG-1049",
                    title: "Custom domain SSL certificate renewal",
                    pri: "P3 Medium",
                    priColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
                    status: "Open",
                    sla: "2h remaining",
                  },
                  {
                    id: "#PG-1047",
                    title: "Billing invoice reconciliation Q1",
                    pri: "P4 Low",
                    priColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
                    status: "Resolved ✓",
                    sla: "Met SLA",
                  },
                ].map((ticket, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-purple-300 font-bold text-[11px]">
                          {ticket.id}
                        </span>
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded border font-mono ${ticket.priColor}`}
                        >
                          {ticket.pri}
                        </span>
                      </div>
                      <p className="text-[11px] text-white mt-0.5">{ticket.title}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#D5D0E5]/60 block">
                        {ticket.sla}
                      </span>
                      <span className="text-[10px] font-mono text-[#B5FF45]">
                        {ticket.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* External Sync Bar */}
              <div className="p-2.5 rounded-xl bg-[#100D1D] border border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#D5D0E5]/70">Integrations:</span>
                <span className="text-[#B5FF45]">Jira & Zendesk 2-Way Sync Active ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 05: Customer & Team Management                     */}
          {/* ========================================================= */}
          {activeModuleIndex === 4 && (
            <motion.div
              key="feat-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-white flex items-center gap-2 font-medium">
                  <Users className="w-4 h-4 text-[#B5FF45]" />
                  Team Roles & Agent Assignment
                </span>
                <span className="text-[10px] font-mono text-purple-300">
                  25 Agents Online
                </span>
              </div>

              {/* Agent Roster */}
              <div className="p-3.5 rounded-xl bg-[#080711]/70 border border-white/10 space-y-2">
                {[
                  {
                    name: "Alex Rivera",
                    role: "Support Admin",
                    chats: "4 Active Chats",
                    csat: "4.9 ★",
                    status: "Active Now",
                  },
                  {
                    name: "Maya Patel",
                    role: "Senior Support Agent",
                    chats: "3 Active Chats",
                    csat: "5.0 ★",
                    status: "Active Now",
                  },
                  {
                    name: "Marcus Chen",
                    role: "Technical Specialist",
                    chats: "5 Tickets In Review",
                    csat: "4.8 ★",
                    status: "In Queue",
                  },
                ].map((agent, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#782BFF] to-[#4C16B8] flex items-center justify-center text-white text-[10px] font-bold">
                        {agent.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-[11px] sm:text-xs">
                          {agent.name}
                        </div>
                        <div className="text-[10px] text-purple-300 font-mono">
                          {agent.role}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#D5D0E5]/70 block">
                        {agent.chats}
                      </span>
                      <span className="text-[10px] font-mono text-[#B5FF45]">
                        CSAT: {agent.csat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* SSO Auth Bar */}
              <div className="p-2.5 rounded-xl bg-[#100D1D] border border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#D5D0E5]/70">Authentication:</span>
                <span className="text-[#B5FF45]">SSO / SAML 2.0 (Okta & Google) ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 06: Analytics & Intelligence                       */}
          {/* ========================================================= */}
          {activeModuleIndex === 5 && (
            <motion.div
              key="feat-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-white flex items-center gap-2 font-medium">
                  <BarChart3 className="w-4 h-4 text-[#B5FF45]" />
                  Analytics & Sentiment Insights
                </span>
                <span className="text-[10px] font-mono text-[#B5FF45]">
                  Live Telemetry
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-[#080711]/70 border border-white/10 text-center">
                  <div className="text-lg font-bold text-white tracking-tight">14,280</div>
                  <div className="text-[10px] text-[#D5D0E5]/60 font-mono mt-0.5">
                    Conversations
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#080711]/70 border border-white/10 text-center">
                  <div className="text-lg font-bold text-[#B5FF45] tracking-tight">86.2%</div>
                  <div className="text-[10px] text-[#D5D0E5]/60 font-mono mt-0.5">
                    AI Resolution
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#080711]/70 border border-white/10 text-center">
                  <div className="text-lg font-bold text-purple-300 tracking-tight">4.92 ★</div>
                  <div className="text-[10px] text-[#D5D0E5]/60 font-mono mt-0.5">
                    Avg CSAT
                  </div>
                </div>
              </div>

              {/* Weekly Volume & Sentiment Graph */}
              <div className="p-3.5 rounded-xl bg-[#080711]/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#D5D0E5]/70">
                  <span>Weekly Interaction Distribution</span>
                  <span className="text-[#B5FF45]">92% Positive Sentiment</span>
                </div>

                <div className="flex items-end justify-between gap-2 h-20 pt-2 px-1">
                  {[
                    { day: "Mon", h: "60%" },
                    { day: "Tue", h: "75%" },
                    { day: "Wed", h: "90%" },
                    { day: "Thu", h: "85%" },
                    { day: "Fri", h: "95%" },
                    { day: "Sat", h: "45%" },
                    { day: "Sun", h: "50%" },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-white/[0.05] rounded-t-sm h-full flex items-end">
                        <div
                          className="w-full rounded-t-sm bg-gradient-to-t from-[#782BFF] to-[#B5FF45] transition-all duration-300"
                          style={{ height: bar.h }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-[#D5D0E5]/50">
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 07: Integrations & Channels                        */}
          {/* ========================================================= */}
          {activeModuleIndex === 6 && (
            <motion.div
              key="feat-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-white flex items-center gap-2 font-medium">
                  <Layers className="w-4 h-4 text-[#B5FF45]" />
                  Omnichannel Integration Ecosystem
                </span>
                <span className="text-[10px] font-mono text-[#B5FF45]">
                  6 Live Channels
                </span>
              </div>

              {/* Channels Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: "JavaScript Web Widget", status: "Active (v2.4)", ok: true },
                  { name: "WhatsApp Business API", status: "Connected", ok: true },
                  { name: "Instagram Direct", status: "Connected", ok: true },
                  { name: "REST API & Webhooks", status: "24k req/day", ok: true },
                  { name: "Zendesk Connector", status: "Sync Active", ok: true },
                  { name: "Jira Service Management", status: "Bi-directional", ok: true },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#080711]/70 border border-white/10 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-semibold text-white text-[11px]">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-[#D5D0E5]/60 font-mono mt-0.5">
                        {item.status}
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#B5FF45] shadow-[0_0_6px_#B5FF45]" />
                  </div>
                ))}
              </div>

              {/* Embed snippet callout */}
              <div className="p-3 rounded-xl bg-[#080711] border border-white/10 font-mono text-[10px] text-[#D5D0E5] flex items-center justify-between">
                <span>&lt;script src=&quot;https://cdn.pingo.ai/v2/embed.js&quot; async&gt;</span>
                <span className="text-[#B5FF45]">Copied ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 08: Security & Administration                      */}
          {/* ========================================================= */}
          {activeModuleIndex === 7 && (
            <motion.div
              key="feat-7"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-white flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#B5FF45]" />
                  Security, Governance & Compliance
                </span>
                <span className="text-[10px] font-mono text-[#B5FF45]">
                  SOC2 Type II Certified
                </span>
              </div>

              {/* Compliance Badges */}
              <div className="grid grid-cols-3 gap-2">
                {["SOC2 Type II", "GDPR Ready", "AES-256 Bit"].map((badge, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-center font-mono text-[11px] text-purple-200"
                  >
                    ✓ {badge}
                  </div>
                ))}
              </div>

              {/* Audit Log Stream */}
              <div className="p-3.5 rounded-xl bg-[#080711]/70 border border-white/10 space-y-2">
                <div className="text-[10px] font-mono text-[#D5D0E5]/60 uppercase tracking-wider mb-1">
                  Live Audit Log Stream
                </div>
                {[
                  {
                    time: "16:42:10",
                    event: "Admin login (MFA verified)",
                    ip: "192.168.1.1",
                    status: "SUCCESS",
                  },
                  {
                    time: "16:38:05",
                    event: "API Key rotated (Production)",
                    ip: "Actor: Maya P.",
                    status: "ENCRYPTED",
                  },
                  {
                    time: "16:20:12",
                    event: "Knowledge base auto-crawled",
                    ip: "internal.docs",
                    status: "COMPLETED",
                  },
                ].map((log, i) => (
                  <div
                    key={i}
                    className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px] font-mono"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#D5D0E5]/50">{log.time}</span>
                      <span className="text-white">{log.event}</span>
                    </div>
                    <span className="text-[#B5FF45] text-[10px]">{log.status}</span>
                  </div>
                ))}
              </div>

              {/* Encryption Banner */}
              <div className="p-2.5 rounded-xl bg-[#100D1D] border border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#D5D0E5]/70">Data Protection:</span>
                <span className="text-[#B5FF45]">TLS 1.3 in Transit • At Rest AES-256 ✓</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductFeaturePreview;

