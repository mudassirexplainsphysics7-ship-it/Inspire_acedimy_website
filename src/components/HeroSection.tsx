'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50">
            {/* Background with parallax-like floating elements */}
            <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none overflow-hidden flex items-center justify-center">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-64 h-64 md:w-96 md:h-96 bg-primary-300/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        x: [0, -30, 0],
                        scale: [1, 0.9, 1]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0
                    }}
                    className="absolute top-40 -left-10 md:-left-20 w-56 h-56 md:w-80 md:h-80 bg-secondary-300/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, -50, 0],
                        x: [0, 40, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0
                    }}
                    className="absolute -bottom-20 md:-bottom-40 left-1/4 md:left-1/2 w-64 h-64 md:w-96 md:h-96 bg-pink-300/20 rounded-full blur-3xl"
                />

                {/* Abstract shapes overlay */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute right-[10%] top-[20%] w-20 h-20 rounded-2xl border border-primary-500/20 rotate-12 opacity-50 hidden md:block"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[15%] bottom-[30%] w-16 h-16 rounded-full border border-secondary-500/20 opacity-50 hidden md:block"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start lg:pt-8">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.02
                                }
                            }
                        }}
                        className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                    >
                        {/* <motion.div
                             variants={{
                                 hidden: { opacity: 0, y: 10 },
                                 visible: { opacity: 1, y: 0 }
                             }}
                             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 max-w-max mx-auto lg:mx-0"
                         >
                            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">Admissions Open 2026</span>
                        </motion.div> */}

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        damping: 12,
                                        stiffness: 500
                                    }
                                }
                            }}
                            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6 font-display"
                        >
                            Inspire Academy — Your Trusted Academy <br />
                        </motion.h1>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="mb-10 max-w-2xl mx-auto lg:mx-0"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary-600 mb-6 tracking-tight leading-tight">
                                Home/Online Tuition Provider
                            </h2>
                            <div className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium space-y-2">
                                <p>Providing quality education for class 1 to 12 through academy, home and online tution.</p>
                                <p>Focused on concept clarity, critical thinking, exam preparation, and overall academic excellence.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <Link href="/contact" className="w-full sm:w-auto sm:min-w-[190px] h-[60px] flex items-center justify-center px-8 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center border border-transparent">
                                Enroll Now
                            </Link>
                            <Link href="/services" className="w-full sm:w-auto sm:min-w-[190px] h-[60px] flex items-center justify-center px-8 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 shadow-sm hover:border-primary-400 hover:text-primary-600 hover:shadow-md transition-all duration-300 text-center">
                                Explore Services
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                            className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between md:justify-start gap-2 md:gap-8"
                        >
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <span className="text-2xl md:text-3xl font-bold text-slate-800">500+</span>
                                <span className="text-[10px] md:text-sm text-slate-500 font-semibold uppercase tracking-tight">Students</span>
                            </div>
                            <div className="w-px h-8 bg-slate-200 md:block" />
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <span className="text-2xl md:text-3xl font-bold text-slate-800">5+</span>
                                <span className="text-[10px] md:text-sm text-slate-500 font-semibold uppercase tracking-tight">Years Exp</span>
                            </div>
                            <div className="w-px h-8 bg-slate-200 md:block" />
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <span className="text-2xl md:text-3xl font-bold text-slate-800">A+</span>
                                <span className="text-[10px] md:text-sm text-slate-500 font-semibold uppercase tracking-tight">Grades</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side illustration / card UI */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.1, delay: 0 }}
                        className="relative block w-full h-[300px] sm:h-[400px] lg:h-[500px] mt-10 lg:mt-0"
                    >



                        {/* User Provided Photography */}
                        <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
                            <Image
                                src="/mudassarr.jpg"
                                alt="Mudassar Aslam - Lead Instructor"
                                fill
                                priority
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                        </div>

                    </motion.div>

                </div>
            </div>
        </section >
    );
}
