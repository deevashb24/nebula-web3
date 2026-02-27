"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Zap, ChevronDown } from "lucide-react";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const plans = [
    {
        name: "Starter",
        price: { monthly: 0, annual: 0 },
        description: "For individuals and small projects",
        cta: "Get Started",
        ctaStyle: "outline",
        highlighted: false,
        features: [
            "10K requests/month",
            "Community support",
            "Basic analytics",
            "Public endpoints",
        ],
    },
    {
        name: "Pro",
        price: { monthly: 29, annual: 23 },
        description: "For growing teams and production apps",
        cta: "Start Pro Trial",
        ctaStyle: "primary",
        highlighted: true,
        features: [
            "100K requests/month",
            "Priority support",
            "Advanced analytics",
            "Private endpoints",
            "Custom domains",
        ],
    },
    {
        name: "Performance",
        price: { monthly: 129, annual: 103 },
        description: "For enterprise-grade applications",
        cta: "Contact Sales",
        ctaStyle: "outline",
        highlighted: false,
        features: [
            "Unlimited requests",
            "24/7 dedicated support",
            "Real-time monitoring",
            "SLA guarantees",
            "Custom infrastructure",
        ],
    },
];

const comparisonFeatures = [
    {
        category: "Infrastructure",
        rows: [
            { feature: "Monthly requests", starter: "10K", pro: "100K", performance: "Unlimited" },
            { feature: "Private endpoints", starter: false, pro: true, performance: true },
            { feature: "Custom domains", starter: false, pro: true, performance: true },
            { feature: "Custom infrastructure", starter: false, pro: false, performance: true },
        ],
    },
    {
        category: "Security",
        rows: [
            { feature: "SSL/TLS encryption", starter: true, pro: true, performance: true },
            { feature: "DDoS protection", starter: false, pro: true, performance: true },
            { feature: "SLA guarantees", starter: false, pro: false, performance: true },
            { feature: "Audit logs", starter: false, pro: true, performance: true },
        ],
    },
    {
        category: "Support",
        rows: [
            { feature: "Community support", starter: true, pro: true, performance: true },
            { feature: "Priority support", starter: false, pro: true, performance: true },
            { feature: "24/7 dedicated support", starter: false, pro: false, performance: true },
            { feature: "Onboarding assistance", starter: false, pro: true, performance: true },
        ],
    },
];

const faqs = [
    {
        q: "Can I change my plan at any time?",
        a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
    },
    {
        q: "What happens if I exceed my request limit?",
        a: "Requests beyond your plan limit are charged at a small overage rate. You'll receive alerts before hitting your limit.",
    },
    {
        q: "Is there a free trial for paid plans?",
        a: "Yes, Pro comes with a 14-day free trial. No credit card required to start.",
    },
    {
        q: "How does annual billing work?",
        a: "With annual billing you save 20% compared to monthly. You're billed once for the full year upfront.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, USDC, and ETH payments via our Web3-native checkout flow.",
    },
];

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col bg-[#09090b] min-h-screen text-white font-[Geist,Manrope,Inter,sans-serif] selection:bg-orange-500/30 selection:text-orange-200">

            {/* Noise layer */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Top glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none z-0 opacity-15 bg-[radial-gradient(ellipse_at_top,#f97316_0%,transparent_65%)]" />

            <div className="relative z-50">
                <LandingNavbar />
            </div>

            <main className="relative z-10 flex-1">

                {/* Hero */}
                <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 text-xs font-medium mb-8">
                            <Zap className="w-3.5 h-3.5 text-orange-400" />
                            Simple, transparent pricing
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-5">
                            Build without limits
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                            Choose the perfect plan for your project. Scale as you grow with our flexible infrastructure options.
                        </p>

                        {/* Toggle */}
                        <div className="inline-flex items-center gap-4 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
                            <button
                                onClick={() => setIsAnnual(false)}
                                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${!isAnnual ? "bg-white text-black shadow" : "text-zinc-400 hover:text-white"
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsAnnual(true)}
                                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${isAnnual ? "bg-white text-black shadow" : "text-zinc-400 hover:text-white"
                                    }`}
                            >
                                Annual
                                <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-medium">
                                    Save 20%
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Pricing Cards */}
                <section className="max-w-6xl mx-auto px-6 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan, i) => {
                            const price = isAnnual ? plan.price.annual : plan.price.monthly;
                            return (
                                <motion.div
                                    key={plan.name}
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeUp}
                                    transition={{ duration: 0.6, delay: i * 0.08 }}
                                    className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${plan.highlighted
                                            ? "bg-orange-500/5 border-orange-500/40 shadow-orange"
                                            : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                                        }`}
                                >
                                    {plan.highlighted && (
                                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                            <span className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wide uppercase">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h2 className="text-lg font-bold text-white mb-1">{plan.name}</h2>
                                        <p className="text-sm text-zinc-500 mb-6">{plan.description}</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-bold text-white tracking-tighter">
                                                ${price}
                                            </span>
                                            <span className="text-zinc-500 text-sm font-medium">/mo</span>
                                        </div>
                                        {isAnnual && price > 0 && (
                                            <p className="text-xs text-zinc-600 mt-1">
                                                Billed annually (${price * 12}/yr)
                                            </p>
                                        )}
                                    </div>

                                    <ul className="space-y-3.5 mb-8 flex-1">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                                                <div className="w-5 h-5 rounded-full bg-orange-500/15 border border-orange-500/25 flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-orange-400" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="#"
                                        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-200 ${plan.highlighted
                                                ? "bg-white text-black hover:bg-zinc-100 shadow-lg"
                                                : "border border-zinc-700 text-white bg-transparent hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400"
                                            }`}
                                    >
                                        {plan.cta}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="max-w-5xl mx-auto px-6 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-12">
                            Compare Plans
                        </h2>

                        <div className="rounded-2xl border border-zinc-800 overflow-hidden">
                            {/* Header */}
                            <div className="grid grid-cols-4 bg-zinc-900/80 border-b border-zinc-800 px-6 py-4">
                                <div className="text-sm font-medium text-zinc-500">Feature</div>
                                {plans.map((p) => (
                                    <div key={p.name} className={`text-sm font-bold text-center ${p.highlighted ? "text-orange-400" : "text-white"}`}>
                                        {p.name}
                                    </div>
                                ))}
                            </div>

                            {comparisonFeatures.map((group, gi) => (
                                <div key={group.category}>
                                    {/* Group header */}
                                    <div className="px-6 py-3 bg-zinc-900/40 border-b border-zinc-800">
                                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                                            {group.category}
                                        </span>
                                    </div>

                                    {group.rows.map((row, ri) => (
                                        <div
                                            key={row.feature}
                                            className={`grid grid-cols-4 px-6 py-4 hover:bg-zinc-800/30 transition-colors ${gi < comparisonFeatures.length - 1 || ri < group.rows.length - 1
                                                    ? "border-b border-zinc-800/50"
                                                    : ""
                                                }`}
                                        >
                                            <span className="text-sm text-zinc-400">{row.feature}</span>
                                            {[row.starter, row.pro, row.performance].map((val, j) => (
                                                <div key={j} className="flex items-center justify-center">
                                                    {typeof val === "boolean" ? (
                                                        val ? (
                                                            <Check className="w-4 h-4 text-orange-400" />
                                                        ) : (
                                                            <X className="w-4 h-4 text-zinc-700" />
                                                        )
                                                    ) : (
                                                        <span className={`text-sm font-medium ${j === 1 ? "text-orange-400" : "text-zinc-300"}`}>
                                                            {val}
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto px-6 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-zinc-800/50 transition-colors"
                                    >
                                        <span className="text-sm font-semibold text-white">{faq.q}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 text-zinc-500 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-6 pb-5 border-t border-zinc-800/60">
                                            <p className="text-sm text-zinc-400 leading-relaxed pt-4">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-zinc-800 bg-zinc-950/80">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-bold text-white text-xl tracking-tight">NebulaNow</span>
                            </div>
                            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                                The unified infrastructure layer for the decentralized web.
                            </p>
                        </div>
                        {[
                            { title: "About Us", items: ["Mission", "Team", "Newsletter", "Careers"] },
                            { title: "Support", items: ["Contact", "Refund Policy", "FAQ's", "Status"] },
                            { title: "Social", items: ["Instagram", "LinkedIn", "YouTube", "Twitter"] },
                        ].map((col) => (
                            <div key={col.title}>
                                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{col.title}</h4>
                                <ul className="space-y-3">
                                    {col.items.map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-zinc-600">
                            Copyright © NebulaNow ·{" "}
                            <Link href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
                        </p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
                        >
                            Back to top ↑
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
