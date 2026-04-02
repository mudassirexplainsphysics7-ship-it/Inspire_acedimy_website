'use client';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaUserCheck, FaBookOpen, FaTrophy } from 'react-icons/fa';

const steps = [
    {
        icon: <FaPhoneAlt size={28} />,
        step: "01",
        title: "Book a Free Demo",
        description: "Contact us via WhatsApp or phone. We'll schedule a free demo class at your convenience — online or at our academy.",
        color: "from-blue-500 to-indigo-600",
        glow: "bg-blue-500/20",
    },
    {
        icon: <FaUserCheck size={28} />,
        step: "02",
        title: "Get Assessed",
        description: "Our instructor evaluates your current level to design a personalized learning plan that targets your exact weak points.",
        color: "from-violet-500 to-purple-600",
        glow: "bg-violet-500/20",
    },
    {
        icon: <FaBookOpen size={28} />,
        step: "03",
        title: "Start Learning",
        description: "Begin your personalized sessions — concept-first teaching, past papers, weekly tests and direct WhatsApp support.",
        color: "from-emerald-500 to-teal-600",
        glow: "bg-emerald-500/20",
    },
    {
        icon: <FaTrophy size={28} />,
        step: "04",
        title: "Achieve Excellence",
        description: "Watch your grades soar. Our students consistently score A+ in board exams and crack university entry tests.",
        color: "from-amber-500 to-orange-600",
        glow: "bg-amber-500/20",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 14 } }
};

export default function HowItWorksSection() {
    return (
        <section className="relative py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-widest uppercase mb-6">
                        Your Journey Starts Here
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight font-display leading-tight">
                        How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Works</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-white leading-relaxed">
                        From your first contact to scoring A+ in board exams — our proven 4-step process ensures every student succeeds.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="relative group"
                        >
                            {/* Connector line between steps (desktop) */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-slate-600 to-transparent z-0 -translate-y-1/2 pointer-events-none" style={{ width: 'calc(100% - 4rem)' }} />
                            )}

                            <div className="relative h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 group-hover:shadow-2xl overflow-hidden z-10">
                                {/* Glow blob */}
                                <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${step.glow}`} />

                                {/* Step number badge */}
                                <div className="flex items-center justify-between">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                    <span className="text-5xl font-black text-slate-200 dark:text-slate-800 group-hover:text-slate-300 dark:group-hover:text-slate-700 transition-colors leading-none select-none">
                                        {step.step}
                                    </span>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">{step.title}</h3>
                                    <p className="text-slate-500 dark:text-white text-sm leading-relaxed">{step.description}</p>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA nudge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-400 dark:text-white mb-6 text-base">Ready to begin? It takes less than 2 minutes.</p>
                    <a
                        href="https://wa.me/923184055906"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-lg hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1 transition-all duration-300"
                    >
                        Book Free Demo Class →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
