'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaRegLightbulb, FaRocket } from 'react-icons/fa';

const features = [
    {
        title: "Ignite True Curiosity",
        description: "We don't just teach the syllabus. We ignite a passion for learning by connecting textbook concepts to real-world phenomena. Say goodbye to boring lectures.",
        color: "from-blue-500 to-indigo-600",
        bg: "bg-slate-900 border-slate-800",
        icon: <FaRegLightbulb size={48} className="text-white drop-shadow-lg" />
    },
    {
        title: "Deep Concept Mastery",
        description: "Our 'concept-first' approach ensures that students build a rock-solid foundation, eliminating the need for rote memorization forever.",
        color: "from-violet-500 to-purple-600",
        bg: "bg-slate-900 border-slate-800",
        icon: <FaBrain size={48} className="text-white drop-shadow-lg" />
    },
    {
        title: "Strategic Execution",
        description: "Through rigorous weekly assessments, time-management drills, and past-paper analysis, we transform nervous students into confident high-achievers.",
        color: "from-emerald-500 to-teal-600",
        bg: "bg-slate-900 border-slate-800",
        icon: <FaGraduationCap size={48} className="text-white drop-shadow-lg" />
    },
    {
        title: "Launch Your Future",
        description: "Armed with top board grades and an impregnable conceptual framework, our students breeze through highly competitive entry tests like ECAT & MDCAT.",
        color: "from-amber-500 to-orange-600",
        bg: "bg-slate-900 border-slate-800",
        icon: <FaRocket size={48} className="text-white drop-shadow-lg" />
    }
];

export default function StackingCards() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-200/40 dark:bg-primary-500/10 rounded-full blur-[150px] pointer-events-none transition-colors" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary-200/40 dark:bg-secondary-500/10 rounded-full blur-[150px] pointer-events-none transition-colors" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-30 pointer-events-none mix-blend-overlay transition-opacity duration-300"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md transition-colors"
                    >
                        The Master Plan
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
                    >
                        Our Blueprint for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Success</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 dark:text-slate-400 font-light transition-colors"
                    >
                        A scientifically structured progression that guarantees academic transformation. As you scroll, discover how we build champions from the ground up.
                    </motion.p>
                </div>

                {/* Stacking Cards Container */}
                <div className="w-full max-w-4xl mx-auto flex flex-col relative">
                    {features.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className="sticky w-full"
                                style={{
                                    top: `calc(8rem + ${index * 2}rem)`, // Creates the overlapping stacking effect
                                    marginBottom: '4rem',
                                    zIndex: index + 10
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-full rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 p-8 md:p-12 shadow-xl dark:shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-xl group transition-colors duration-300`}
                                    style={{
                                        boxShadow: "0 -10px 40px -10px rgba(0,0,0,0.1)", // Base shadow overridden conditionally but keeping simple structure here
                                    }}
                                >
                                    {/* Number / Glow Indicator */}
                                    <div className={`shrink-0 relative flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-[2rem] bg-gradient-to-br ${feature.color} shadow-lg overflow-hidden`}>
                                        <div className="absolute inset-0 bg-white/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute -right-4 -bottom-4 text-9xl font-black text-white/30 dark:text-white/10 select-none group-hover:scale-110 transition-transform duration-500">
                                            0{index + 1}
                                        </div>
                                        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                                            {feature.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="text-primary-600 dark:text-primary-400 font-black tracking-widest text-sm uppercase mb-3 drop-shadow-sm transition-colors">
                                            Phase 0{index + 1}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight drop-shadow-sm dark:drop-shadow-md transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light transition-colors">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Glass reflection decorative element */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/20 to-transparent transition-colors duration-300"></div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
