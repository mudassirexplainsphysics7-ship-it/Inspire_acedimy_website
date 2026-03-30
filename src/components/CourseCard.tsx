'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBookOpen, FaUserGraduate } from 'react-icons/fa';

interface CourseCardProps {
    title: string;
    grades: string;
    subjects: string[];
    description: string;
    delay?: number;
}

export default function CourseCard({ title, grades, subjects, description, delay = 0 }: CourseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay }}
            whileHover={{ y: -5 }}
            className="flex flex-col h-full bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-100 transition-colors pointer-events-none" />

            <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary-50 text-secondary-600 text-xs font-semibold mb-2 shadow-sm">
                        {grades}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm">
                    <FaUserGraduate size={16} />
                </div>
            </div>

            <p className="text-sm text-slate-500 mb-6 relative z-10 leading-relaxed min-h-[60px]">{description}</p>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.05
                        }
                    }
                }}
                className="space-y-3 mb-8 relative z-10 min-h-[70px]"
            >
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Subjects</h4>
                <div className="flex flex-wrap gap-2">
                    {subjects.map(subject => (
                        <motion.span
                            key={subject}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                            className="flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 shadow-sm"
                        >
                            <FaBookOpen className="text-primary-400" size={10} />
                            {subject}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            <Link href="/contact" className="mt-auto block w-full text-center py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 focus:ring-4 focus:ring-primary-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative z-10">
                Enroll Now
            </Link>
        </motion.div>
    );
}
