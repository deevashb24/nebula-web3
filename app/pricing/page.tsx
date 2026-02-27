"use client";

import { Check, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import LandingNavbar from "@/components/LandingNavbar";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        q: "Can I change plans later?",
        a: "Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically.",
    },
    {
        q: "What happens if I exceed my monthly requests?",
        a: "For Starter and Pro plans, we'll notify you when you reach 80% and 100% of your limit. We offer a soft cap, so your service won't be immediately interrupted, but we'll reach out to discuss upgrading your plan.",
    },
    {
        q: "Is there a free trial for the Pro plan?",
        a: "Yes, we offer a 14-day free trial on the Pro plan so you can test all the advanced features before committing.",
    },
    {
        q: "How does annual billing work?",
        a: "Annual billing gives you a 20% discount compared to monthly billing. You are charged upfront for the entire year.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange invoice-based payments via bank transfer.",
    },
];

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="flex flex-col bg-white min-h-screen selection:bg-orange-500/20 selection:text-orange-900 overflow-x-hidden">

            {/* Noise texture — exact reference */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Top radial glow */}
            <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[30%] pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />

            {/* Floating pill navbar */}
            <LandingNavbar />

            <main className="relative z-10 flex flex-col items-center pt-40 md:pt-48 pb-32 max-w-7xl mx-auto w-full px-6">

                {/* Header section */}
                <div className="text-center max-w-3xl mb-16">
                    <div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-sm font-medium mb-8 shadow-sm">
                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Simple, transparent pricing
                    </div>

                    <h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
                        Build without limits
                    </h1>
                    <p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] text-zinc-600 text-base md:text-lg max-w-xl mx-auto mb-10">
                        Choose the perfect plan for your project. Scale as you grow with our flexible infrastructure options.
                    </p>

                    {/* Toggle */}
                    <div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] inline-flex items-center p-1 bg-zinc-100 border border-zinc-200 rounded-full">
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                !isAnnual ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-3",
                                isAnnual ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900"
                            )}
                        >
                            Annual
                            <span className={cn(
                                "text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold",
                                isAnnual ? "bg-orange-100 text-orange-600" : "bg-orange-50 text-orange-400"
                            )}>
                                Save 20%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-32 [animation:fadeSlideIn_1s_ease-out_1.6s_both]">

                    {/* Card 1: Starter */}
                    <div className="relative p-10 rounded-[2.5rem] border border-zinc-200 bg-white flex flex-col gap-8 transition-transform hover:scale-[1.02] duration-300 shadow-sm hover:shadow-md">
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-2">Starter</h3>
                            <p className="text-base text-zinc-500 h-10">For individuals and small projects</p>
                            <div className="my-8">
                                <span className="text-5xl font-bold text-zinc-900">$0</span>
                                <span className="text-base text-zinc-500 font-medium ml-1">/mo</span>
                            </div>
                        </div>

                        <ul className="space-y-4 flex-1">
                            {[
                                "10K requests/month",
                                "Community support",
                                "Basic analytics",
                                "Public endpoints",
                            ].map((feat) => (
                                <li key={feat} className="flex items-center gap-3 text-sm font-medium text-zinc-600">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-orange-500" strokeWidth={3} />
                                    </div>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 mt-8 rounded-full text-base font-semibold transition-all bg-zinc-100 hover:bg-zinc-200 text-zinc-900 tracking-wide">
                            Get Started
                        </button>
                    </div>

                    {/* Card 2: Pro */}
                    <div className="relative p-10 rounded-[2.5rem] border border-orange-200 bg-white flex flex-col gap-8 transition-transform hover:scale-[1.02] duration-300 shadow-[0_8px_30px_-10px_rgba(234,88,12,0.15)] hover:shadow-[0_12px_40px_-10px_rgba(234,88,12,0.2)] md:-rotate-1">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-orange-500 text-xs uppercase font-bold tracking-widest rounded-full shadow-lg text-white">
                            Most Popular
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-2">Pro</h3>
                            <p className="text-base text-zinc-500 h-10">For growing teams and production apps</p>
                            <div className="my-8">
                                <span className="text-5xl font-bold text-zinc-900">${isAnnual ? "29" : "39"}</span>
                                <span className="text-base text-zinc-500 font-medium ml-1">/mo</span>
                            </div>
                        </div>

                        <ul className="space-y-4 flex-1">
                            {[
                                "100K requests/month",
                                "Priority support",
                                "Advanced analytics",
                                "Private endpoints",
                                "Custom domains",
                            ].map((feat) => (
                                <li key={feat} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <button className="relative w-full py-4 mt-8 rounded-full text-base font-bold text-white transition-all shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_6px_30px_rgba(234,88,12,0.4)] hover:-translate-y-1 overflow-hidden group">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-gradient-xy"></span>
                            <span className="relative z-10 tracking-wide uppercase">Start Pro Trial</span>
                        </button>
                    </div>

                    {/* Card 3: Performance */}
                    <div className="relative p-10 rounded-[2.5rem] border border-zinc-200 bg-white flex flex-col gap-8 transition-transform hover:scale-[1.02] duration-300 shadow-sm hover:shadow-md">
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-2">Performance</h3>
                            <p className="text-base text-zinc-500 h-10">For enterprise-grade applications</p>
                            <div className="my-8">
                                <span className="text-5xl font-bold text-zinc-900">${isAnnual ? "129" : "149"}</span>
                                <span className="text-base text-zinc-500 font-medium ml-1">/mo</span>
                            </div>
                        </div>

                        <ul className="space-y-4 flex-1">
                            {[
                                "Unlimited requests",
                                "24/7 dedicated support",
                                "Real-time monitoring",
                                "SLA guarantees",
                                "Custom infrastructure",
                            ].map((feat) => (
                                <li key={feat} className="flex items-center gap-3 text-sm font-medium text-zinc-600">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 mt-8 rounded-full text-base font-semibold transition-all bg-zinc-100 hover:bg-zinc-200 text-zinc-900 tracking-wide">
                            Contact Sales
                        </button>
                    </div>

                </div>

                {/* Feature Comparison Table */}
                <div className="w-full max-w-5xl mb-32 [animation:fadeSlideIn_1s_ease-out_1.8s_both]">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Compare Plans</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-zinc-200">
                                    <th className="py-4 pl-6 text-sm font-medium text-zinc-500">Feature</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-zinc-900 text-center w-32 md:w-40">Starter</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-zinc-900 text-center w-32 md:w-40">Pro</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-zinc-900 text-center w-32 md:w-40">Performance</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {/* Infrastructure */}
                                <tr>
                                    <td colSpan={4} className="py-5 pl-6 text-sm font-bold tracking-widest text-orange-500 uppercase bg-zinc-50">
                                        Infrastructure
                                    </td>
                                </tr>
                                <tr className="border-b border-zinc-100">
                                    <td className="py-5 pl-6 text-zinc-600">Monthly requests</td>
                                    <td className="py-5 text-center text-zinc-500">10K</td>
                                    <td className="py-5 text-center text-zinc-900 font-semibold">100K</td>
                                    <td className="py-5 text-center text-zinc-900 font-semibold">Unlimited</td>
                                </tr>
                                <tr className="border-b border-zinc-100">
                                    <td className="py-5 pl-6 text-zinc-600">Private endpoints</td>
                                    <td className="py-5 text-center"><X className="w-5 h-5 text-zinc-300 mx-auto" strokeWidth={3} /></td>
                                    <td className="py-5 text-center"><Check className="w-5 h-5 text-orange-500 mx-auto" strokeWidth={3} /></td>
                                    <td className="py-5 text-center"><Check className="w-5 h-5 text-orange-500 mx-auto" strokeWidth={3} /></td>
                                </tr>
                                <tr className="border-b border-zinc-100">
                                    <td className="py-5 pl-6 text-zinc-600">Custom domains</td>
                                    <td className="py-5 text-center"><X className="w-5 h-5 text-zinc-300 mx-auto" strokeWidth={3} /></td>
                                    <td className="py-5 text-center text-zinc-900 font-semibold">1</td>
                                    <td className="py-5 text-center text-zinc-900 font-semibold">Unlimited</td>
                                </tr>

                                {/* Support & SLA */}
                                <tr>
                                    <td colSpan={4} className="py-5 pl-6 text-sm font-bold tracking-widest text-orange-500 uppercase bg-zinc-50 mt-6 border-t border-zinc-100">
                                        Support & Security
                                    </td>
                                </tr>
                                <tr className="border-b border-zinc-100">
                                    <td className="py-5 pl-6 text-zinc-600">Support channel</td>
                                    <td className="py-5 text-center text-zinc-500">Community</td>
                                    <td className="py-5 text-center text-zinc-900 font-semibold">Standard</td>
                                    <td className="py-5 text-center text-orange-500 font-bold">24/7 Dedicated</td>
                                </tr>
                                <tr className="border-b border-zinc-100">
                                    <td className="py-5 pl-6 text-zinc-600">Analytics</td>
                                    <td className="py-5 text-center text-zinc-500">Basic</td>
                                    <td className="py-5 text-center text-zinc-900 font-semibold">Advanced</td>
                                    <td className="py-5 text-center text-zinc-900 font-semibold">Real-time</td>
                                </tr>
                                <tr className="border-b border-zinc-100">
                                    <td className="py-5 pl-6 text-zinc-600">SLA guarantee</td>
                                    <td className="py-5 text-center"><X className="w-5 h-5 text-zinc-300 mx-auto" strokeWidth={3} /></td>
                                    <td className="py-5 text-center"><X className="w-5 h-5 text-zinc-300 mx-auto" strokeWidth={3} /></td>
                                    <td className="py-5 text-center"><Check className="w-5 h-5 text-orange-500 mx-auto" strokeWidth={3} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="w-full max-w-4xl mb-16 [animation:fadeSlideIn_1s_ease-out_2s_both]">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Frequently asked questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <div
                                key={i}
                                className="border border-zinc-200 bg-white rounded-2xl overflow-hidden transition-colors hover:bg-zinc-50 shadow-sm"
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-sm font-bold text-zinc-900">{faq.q}</span>
                                    <ChevronDown className={cn("w-5 h-5 text-zinc-400 transition-transform duration-300 flex-shrink-0", openFaqIndex === i ? "rotate-180" : "")} />
                                </button>
                                <div
                                    className={cn(
                                        "px-6 text-sm text-zinc-600 overflow-hidden transition-all duration-300 leading-relaxed max-w-3xl",
                                        openFaqIndex === i ? "max-h-40 pb-7 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-zinc-200/60 bg-zinc-50/50 mt-auto">
                <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-orange-sm">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                </div>
                                <span className="text-base font-bold text-zinc-900 tracking-tight">NebulaNow</span>
                            </div>
                            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                                The unified infrastructure layer for the decentralized web.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-zinc-500">Copyright © NebulaNow</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
