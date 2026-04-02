'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    FaAtom, FaSuperscript, FaFlask, FaLanguage,
    FaMicrophone, FaPencilAlt, FaCalculator, FaBook
} from 'react-icons/fa';

const subjects = [
    {
        icon: <FaAtom size={32} />,
        name: 'Physics',
        desc: 'From mechanics to modern physics — concept-first teaching with board exam focus.',
        color: 'from-blue-500 to-indigo-600',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-100 dark:border-blue-800/50',
        tag: 'Class 9 — FSC',
    },
    {
        icon: <FaSuperscript size={32} />,
        name: 'Mathematics',
        desc: 'Step-by-step problem solving for Matric and FSC/ICS math with past paper drills.',
        color: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-50 dark:bg-violet-900/20',
        border: 'border-violet-100 dark:border-violet-800/50',
        tag: 'Class 6 — FSC',
    },
    {
        icon: <FaFlask size={32} />,
        name: 'Science',
        desc: 'General Science and Biology made visual and easy for junior classes.',
        color: 'from-emerald-500 to-teal-600',
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        border: 'border-emerald-100 dark:border-emerald-800/50',
        tag: 'Class 1 — 8',
    },
    {
        icon: <FaLanguage size={32} />,
        name: 'English',
        desc: 'Grammar, comprehension, essays, and spoken English for all classes.',
        color: 'from-sky-500 to-cyan-600',
        bg: 'bg-sky-50 dark:bg-sky-900/20',
        border: 'border-sky-100 dark:border-sky-800/50',
        tag: 'All Classes',
    },
    {
        icon: <FaMicrophone size={32} />,
        name: 'Public Speaking',
        desc: 'Build confidence, clarity and charisma to present in any setting fearlessly.',
        color: 'from-orange-400 to-red-500',
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-100 dark:border-orange-800/50',
        tag: 'All Ages',
    },
    {
        icon: <FaPencilAlt size={32} />,
        name: 'Handwriting',
        desc: 'Neat, board-exam-ready handwriting through structured daily practice sessions.',
        color: 'from-pink-500 to-rose-600',
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-100 dark:border-pink-800/50',
        tag: 'All Ages',
    },
    {
        icon: <FaBook size={32} />,
        name: 'Creative Writing',
        desc: 'Essay structure, storytelling, vocabulary building and descriptive writing skills.',
        color: 'from-amber-500 to-yellow-600',
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        border: 'border-amber-100 dark:border-amber-800/50',
        tag: 'Class 1 — 12',
    },
    {
        icon: <FaCalculator size={32} />,
        name: 'Entry Test Prep',
        desc: 'Focused crash courses for ECAT, MDCAT and university admission test preparation.',
        color: 'from-slate-600 to-slate-800',
        bg: 'bg-slate-50 dark:bg-slate-800/40',
        border: 'border-slate-100 dark:border-slate-700/50',
        tag: 'FSC Students',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }
};

export default function SubjectsSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            {/* Bg blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-100/20 dark:bg-secondary-900/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-widest uppercase mb-5">
                        What We Teach
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
                        Subjects We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Specialize In</span>
                    </h2>
                    <p className="text-slate-500 dark:text-white text-lg">
                        From core academics to life skills — every subject is taught with depth, clarity, and a focus on real results.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {subjects.map((subject, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className={`group rounded-3xl p-6 border ${subject.bg} ${subject.border} hover:shadow-xl transition-all duration-300 flex flex-col gap-4 cursor-default`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${subject.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                {subject.icon}
                            </div>

                            {/* Tag */}
                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                {subject.tag}
                            </span>

                            {/* Text */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{subject.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-white leading-relaxed">{subject.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-14"
                >
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-base hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1 transition-all duration-300"
                    >
                        View All Programs →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
