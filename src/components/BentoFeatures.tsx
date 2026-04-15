'use client';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaChartLine, FaFlask, FaRegClock } from 'react-icons/fa';

export default function BentoFeatures() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-secondary-500/10 dark:bg-secondary-500/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-widest uppercase mb-4">
                        The Inspire Edge
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Excellence</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                    {/* Bento Box 1: Large Box (2 cols, 2 rows on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between group overflow-hidden relative shadow-xl hover:shadow-2xl transition-all"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                                <FaChartLine size={24} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">98% Board Success Rate</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
                                Our rigorous testing and conceptual framework have consistently produced top-tier grades in Matric & FSC exams year over year.
                            </p>
                            
                            <div className="mt-6 flex gap-4 text-sm font-bold">
                                <div className="flex items-center gap-1.5 text-emerald-600">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    Matric: 99%
                                </div>
                                <div className="flex items-center gap-1.5 text-primary-600">
                                    <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                                    FSC: 97%
                                </div>
                            </div>
                        </div>
                        {/* Interactive UI Element Mockup */}
                        <div className="mt-8 relative z-10 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                            {/* Grid Lines Background */}
                            <div className="absolute inset-0 px-6 py-8 flex flex-col justify-between pointer-events-none opacity-20">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-full h-px bg-slate-300 dark:bg-slate-700"></div>
                                ))}
                            </div>

                            <div className="flex items-end gap-3 h-32 w-full justify-around relative z-10">
                                {[30, 45, 65, 85, 98].map((height, i) => (
                                    <div key={i} className="flex-1 max-w-[45px] bg-slate-200/50 dark:bg-slate-800/50 rounded-t-xl relative h-full">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${height}%` }}
                                            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute bottom-0 w-full bg-gradient-to-t from-primary-600 via-primary-500 to-primary-400 rounded-t-xl shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-shadow duration-500"
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-black text-primary-600 dark:text-primary-400 whitespace-nowrap bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded-md shadow-sm border border-slate-100 dark:border-slate-800">
                                                {height}%
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-6 flex justify-between px-2 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 dark:text-slate-500">
                                <span>2020</span>
                                <span>2021</span>
                                <span>2022</span>
                                <span>2023</span>
                                <span className="text-primary-500 animate-pulse">Current</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento Box 2: Single Square */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 lg:col-span-2 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 group relative overflow-hidden shadow-xl"
                    >
                        <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:scale-125 transition-transform duration-700">
                            <FaFlask size={200} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-3">Concept-First Learning</h3>
                            <p className="text-slate-300">We replace rote memorization with deep conceptual clarity, ensuring complete mastery over complex subjects.</p>
                        </div>
                    </motion.div>

                    {/* Bento Box 3: Test Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl hover:shadow-2xl transition-all group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-secondary-100 dark:bg-secondary-900/50 text-secondary-600 dark:text-secondary-400 flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform">
                            <FaRegClock size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Weekly Assessments</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Constant progress tracking through rigorous weekly drills and mock exams.</p>
                    </motion.div>

                    {/* Bento Box 4: Mentorship */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-center items-center text-center group"
                    >
                        <div className="relative w-20 h-20 mb-5">
                            <div className="absolute inset-0 bg-primary-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
                            <div className="relative w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 z-10">
                                <FaUserGraduate size={32} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">1-on-1 Mentorship</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Personalized attention for every single student.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
