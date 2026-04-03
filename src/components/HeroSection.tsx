'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Extremely Advanced Aurora Background Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] dark:opacity-[0.05] z-0"></div>

                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
                />
                <motion.div
                    animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-secondary-400/20 dark:bg-secondary-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
                />
                <motion.div
                    animate={{ y: [0, -30, 0], x: [0, 40, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-rose-400/20 dark:bg-rose-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Left Column - Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col justify-center"
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Premium Education</span>
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100 } } }}
                            className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6 font-display"
                        >
                            Inspire Academy — Your Trusted <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Academy</span>
                        </motion.h1>

                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-10 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light space-y-4 max-w-xl mx-auto lg:mx-0">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Home/Online Tuition Provider</h2>
                            <p>Providing quality education for class 1 to 12 through academy, home and online tution.</p>
                            <p>Focused on concept clarity, critical thinking, exam preparation, and overall academic excellence.</p>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
                        >
                            <Link href="/contact" className="group relative w-full sm:w-auto sm:min-w-[200px] h-[64px] flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center gap-2">Enroll Now</span>
                            </Link>
                            <Link href="/services" className="w-full sm:w-auto sm:min-w-[200px] h-[64px] flex items-center justify-center rounded-full bg-white dark:bg-slate-900/50 text-slate-800 dark:text-white font-bold border-2 border-slate-200 dark:border-slate-800 backdrop-blur-md hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300">
                                Explore Services
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Premium Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full h-[400px] sm:h-[450px] lg:h-[600px] mt-8 lg:mt-0 lg:ml-auto max-w-[90%] md:max-w-xl mx-auto"
                    >
                        {/* Decorative background blur ring behind the image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full blur-[80px] opacity-20 dark:opacity-30 -z-10"></div>

                        {/* Main Image Frame - Reduced size to prevent overlap container issues and look clean */}
                        <div className="absolute inset-4 md:inset-8 rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900 z-10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent mix-blend-overlay z-10"></div>
                            <Image
                                src="/mudassarr.jpg"
                                alt="Mudassar Aslam - Lead Instructor"
                                fill
                                priority
                                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                            />

                            {/* Inner Shadow for depth */}
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] pointer-events-none z-20"></div>
                        </div>

                        {/* Floating Floating Glass Card 1 (Students) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-2 md:-left-4 top-[15%] z-30 flex items-center gap-3 p-3 md:p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-xl"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-black text-sm md:text-lg shadow-inner">
                                500+
                            </div>
                            <div>
                                <p className="text-slate-900 dark:text-white font-bold text-[10px] md:text-sm tracking-tight">Active Students</p>
                                <p className="text-slate-500 dark:text-slate-400 text-[9px] md:text-xs">Learning currently</p>
                            </div>
                        </motion.div>

                        {/* Floating Glass Card 2 (Grades) */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-2 md:-right-8 bottom-[20%] z-30 flex flex-col gap-1 p-3 md:p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-xl"
                        >
                            <div className="flex gap-[2px] mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-3 h-3 text-amber-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-slate-900 dark:text-white font-bold text-sm md:text-lg tracking-tight leading-none">A+ Grades</p>
                            <p className="text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-medium">Proven Results</p>
                        </motion.div>

                        {/* Floating Glass Card 3 (Experience) */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute left-6 md:left-12 -bottom-2 md:-bottom-4 z-30 flex items-center gap-2 md:gap-3 p-2 md:p-3 lg:p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-xl"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-600 dark:text-primary-400 font-black text-sm md:text-xl">
                                5+
                            </div>
                            <p className="text-slate-800 dark:text-slate-200 font-bold text-[10px] md:text-sm">Years Experience</p>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section >
    );
}
