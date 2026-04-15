'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    FaAtom, FaSuperscript,
    FaMicrophone, FaPencilAlt, FaBook
} from 'react-icons/fa';

const specializations = [
    {
        icon: <FaAtom size={40} />,
        name: 'Physics',
        desc: 'From mechanics to modern physics — concept-first teaching with deep board exam focus and past paper drills.',
        color: 'from-blue-500 to-indigo-600',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-100 dark:border-blue-800/50',
        tag: 'Class 9 — FSC/ICS',
    },
    {
        icon: <FaSuperscript size={40} />,
        name: 'Mathematics',
        desc: 'Step-by-step problem solving for Matric and FSC/ICS math with intensive past paper practice and conceptual clarity.',
        color: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-50 dark:bg-violet-900/20',
        border: 'border-violet-100 dark:border-violet-800/50',
        tag: 'Class 9 — FSC/ICS',
    }
];

const skills = [
    {
        icon: <FaMicrophone size={28} />,
        name: 'Public Speaking',
        desc: 'Build confidence, clarity and charisma to present fearlessly.',
        color: 'from-orange-400 to-red-500',
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-100 dark:border-orange-800/50',
        tag: 'Skill Building',
    },
    {
        icon: <FaPencilAlt size={28} />,
        name: 'Handwriting',
        desc: 'Neat, board-exam-ready handwriting through structured practice.',
        color: 'from-pink-500 to-rose-600',
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-100 dark:border-pink-800/50',
        tag: 'Skill Building',
    },
    {
        icon: <FaBook size={28} />,
        name: 'Creative Writing',
        desc: 'Essay structure, storytelling, and rich vocabulary building.',
        color: 'from-amber-500 to-yellow-600',
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        border: 'border-amber-100 dark:border-amber-800/50',
        tag: 'Skill Building',
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
        <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
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
                        Core Subjects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Essential Skills</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">
                        We specialize deeply in core sciences while building fundamental life skills for all-round student development.
                    </p>
                </motion.div>

                {/* Core Specializations */}
                <div className="mb-16">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Core Specializations</h3>
                        <div className="w-12 h-[2px] bg-primary-500 hidden md:block rounded-full"></div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {specializations.map((subject, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className={`group rounded-[2rem] p-8 border ${subject.bg} ${subject.border} hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row gap-6 cursor-default items-start`}
                            >
                                {/* Icon */}
                                <div className={`shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br ${subject.color} text-white flex items-center justify-center shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-300`}>
                                    {subject.icon}
                                </div>

                                {/* Text */}
                                <div>
                                    <span className="inline-block px-3 py-1 bg-white/50 dark:bg-slate-900/40 rounded-lg text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 backdrop-blur-sm shadow-sm">
                                        {subject.tag}
                                    </span>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{subject.name}</h3>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">{subject.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Skill Development */}
                <div>
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Skill Development</h3>
                        <div className="w-12 h-[2px] bg-secondary-500 hidden md:block rounded-full"></div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className={`group rounded-3xl p-6 border ${skill.bg} ${skill.border} hover:shadow-xl transition-all duration-300 flex flex-col gap-4 cursor-default`}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                    {skill.icon}
                                </div>

                                {/* Tag */}
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                    {skill.tag}
                                </span>

                                {/* Text */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{skill.name}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{skill.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-16"
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
