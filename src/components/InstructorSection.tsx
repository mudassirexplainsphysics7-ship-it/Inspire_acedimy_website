'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaAward, FaUniversity, FaQuoteLeft } from 'react-icons/fa';

export default function InstructorSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-50 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 opacity-60" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-[40%] relative"
                    >
                        <div className="relative max-w-sm mx-auto lg:mx-0">
                            {/* Image Container */}
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                                <Image
                                    src="/mudassar.jpg"
                                    alt="Mudassar Aslam - Lead Instructor"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-bounce-slow">
                                <div className="flex flex-col items-center">
                                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">5+</span>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Exp</span>
                                </div>
                            </div>

                            {/* Decorative Frames */}
                            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary-100 rounded-[3rem] -z-10 translate-x-3 translate-y-3" />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-[60%]">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block"
                            >
                                Meet Your Instructor
                            </motion.span>

                            <motion.h2
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight font-display"
                            >
                                Dedicated Mentorship by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Mudassar Aslam</span>
                            </motion.h2>

                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="text-slate-600 mb-8 leading-relaxed"
                            >
                                At <span className="font-bold">Inspire Academy of Sciences & Skills</span>, we focus on concept clarity, critical thinking, and SLO-based learning. We prepare students not just for exams but for life through personalized guidance and character building.
                            </motion.p>

                            <div className="space-y-6 mb-10">
                                {[
                                    {
                                        icon: <FaUniversity size={24} />,
                                        color: "primary",
                                        title: "Academic Excellence",
                                        text: "Bs hons Physics from GC University Lahore, Lahore. Specialized in Physics."
                                    },
                                    {
                                        icon: <FaAward size={24} />,
                                        color: "secondary",
                                        title: "Proven Track Record",
                                        text: "Successfully mentored over 500+ students across Lahore and Haveli Lakha with consistent A+ results."
                                    }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 shrink-0`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl overflow-hidden group"
                            >
                                <FaQuoteLeft className="absolute -top-2 -left-2 text-white/10 text-8xl group-hover:scale-110 transition-transform" />
                                <p className="relative z-10 text-lg italic leading-relaxed text-slate-100 mb-4">
                                    "Education is not just about memorizing facts; it's about training the mind to think. I believe in building concepts that last a lifetime."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-1 bg-primary-500 rounded-full" />
                                    <span className="font-bold tracking-wide uppercase text-xs text-primary-400">Owner & Lead Instructor</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
