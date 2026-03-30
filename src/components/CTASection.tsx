'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-slate-900 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">

                    {/* Photographic Background */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <Image
                            src="/schoolchildren-reading-library_1098-4048.avif"
                            alt="Students reading and learning together"
                            fill
                            className="object-cover opacity-40 mix-blend-luminosity hover:opacity-50 hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/95 via-slate-900/80 to-primary-900/50" />
                    </div>

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
                        className="relative z-10 max-w-3xl mx-auto text-center"
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight px-2"
                        >
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Transform</span> Your Journey?
                        </motion.h2>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium"
                        >
                            Join <span className="font-bold text-white">Inspire Academy of Sciences & Skills</span><br />Your success story starts here.
                            <br />Hundreds of students have unlocked their potential with us.
                            Take the first step — book your free demo class now and see the change yourself.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                                Enroll Now
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a href="tel:+923184055906" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/10 hover:border-white/30 text-center">
                                Call Us Now
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
