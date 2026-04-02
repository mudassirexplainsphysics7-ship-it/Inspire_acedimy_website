'use client';
import { FaStar, FaTrophy, FaGraduationCap, FaMedal } from 'react-icons/fa';

const results = [
    { icon: <FaTrophy className="text-amber-400" />, student: 'Rana Ahsan', result: 'Cracked ECAT → UET Lahore', subject: 'Physics & Math' },
    { icon: <FaStar className="text-yellow-400" />, student: 'Aneesa Javed', result: 'A+ in Board Exam', subject: 'Class 9' },
    { icon: <FaGraduationCap className="text-primary-400" />, student: 'Ayan Ahmad', result: 'Top Grades — Board Exams', subject: 'Class 10' },
    { icon: <FaMedal className="text-emerald-400" />, student: 'Hira', result: 'Improved All 3 Subjects', subject: 'Class 8' },
    { icon: <FaStar className="text-yellow-400" />, student: 'Muntaha', result: 'Overcame Stage Fear', subject: 'Public Speaking' },
    { icon: <FaTrophy className="text-amber-400" />, student: 'Ali Hasnain', result: 'Professional Handwriting', subject: 'Presentation Mastery' },
    { icon: <FaGraduationCap className="text-primary-400" />, student: '500+ Students', result: 'A Grade Rate: 98%', subject: 'All Programs' },
    { icon: <FaMedal className="text-emerald-400" />, student: 'FSC Batch 2024', result: 'Distinction in Physics', subject: 'FSC / ICS' },
];

// Duplicate for seamless infinite loop
const allResults = [...results, ...results];

export default function ResultsTicker() {
    return (
        <div className="py-5 bg-slate-900 dark:bg-slate-950 border-y border-slate-800 dark:border-slate-900 overflow-hidden transition-colors duration-300">
            <div className="flex items-center gap-3 mb-0">
                {/* Label */}
                <div className="shrink-0 pl-6 pr-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-black uppercase tracking-widest rounded-r-full z-10 relative shadow-lg">
                    🏆 Student Wins
                </div>

                {/* Scrolling track */}
                <div className="flex-1 overflow-hidden relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-marquee gap-8 w-max">
                        {allResults.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 bg-slate-800/60 dark:bg-slate-800/40 border border-slate-700/50 rounded-full px-5 py-2.5 shrink-0 hover:border-primary-600/50 transition-colors cursor-default group"
                            >
                                <span className="text-lg">{item.icon}</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-sm">{item.student}</span>
                                    <span className="text-slate-500 text-xs">•</span>
                                    <span className="text-primary-400 font-semibold text-sm">{item.result}</span>
                                    <span className="text-slate-500 text-xs">•</span>
                                    <span className="text-slate-400 text-xs">{item.subject}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
