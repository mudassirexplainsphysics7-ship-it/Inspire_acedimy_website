'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
    {
        q: 'Do you offer online classes?',
        a: 'Yes! We offer live interactive online classes via Zoom/Google Meet with full whiteboard support, screen sharing, and recorded sessions for revision. Available across Pakistan and internationally.',
    },
    {
        q: 'What classes and subjects do you teach?',
        a: 'We teach from Class 1 to FSC/ICS — covering Physics, Math, English, Science, and specialty courses like Public Speaking, Handwriting Mastery, and Creative Writing.',
    },
    {
        q: 'Is there a free demo class?',
        a: 'Absolutely! We offer a completely free demo class with no commitment. Simply message us on WhatsApp and we will schedule it at your convenience.',
    },
    {
        q: 'What are your fees?',
        a: 'Fee structure varies by class level, number of subjects, and mode (online/home). Contact us via WhatsApp for a personalized fee plan — we ensure it is affordable for every family.',
    },
    {
        q: 'How are your teaching methods different?',
        a: 'We use concept-first teaching instead of rote learning. Every topic is explained from its core, followed by real-world examples, past paper practice, and weekly tests to ensure solid retention.',
    },
    {
        q: 'How can I enroll my child?',
        a: 'Simply click "Enroll Now" or message us directly on WhatsApp. We will assess your child\'s current level, create a personalized plan, and start sessions within 24–48 hours.',
    },
];

export default function FAQSection() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 dark:bg-primary-900/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-widest uppercase mb-5">
                        Got Questions?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Questions</span>
                    </h2>
                    <p className="text-slate-500 dark:text-white text-lg">
                        Everything you need to know before getting started. Can&apos;t find your answer? Message us on WhatsApp.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                        ? 'border-primary-200 dark:border-primary-800 shadow-lg shadow-primary-500/5'
                                        : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                                    } bg-slate-50 dark:bg-slate-900`}
                            >
                                <button
                                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                                >
                                    <span className={`font-bold text-base md:text-lg transition-colors duration-200 ${isOpen ? 'text-primary-600 dark:text-primary-400' : 'text-slate-800 dark:text-white'}`}>
                                        {faq.q}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-slate-300 dark:group-hover:bg-slate-600'
                                            }`}
                                    >
                                        <FaChevronDown size={12} />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 dark:text-white leading-relaxed text-base border-t border-slate-100 dark:border-slate-800 pt-4">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom nudge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-14"
                >
                    <p className="text-slate-500 dark:text-white mb-4">Still have questions?</p>
                    <a
                        href="https://wa.me/923184055906"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-bold hover:bg-primary-500 hover:text-white transition-all duration-300"
                    >
                        Ask us on WhatsApp →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
