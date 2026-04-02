'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUserGraduate, FaStar, FaCalendarAlt, FaPercentage } from 'react-icons/fa';

interface StatItemProps {
    icon: React.ReactNode;
    end: number;
    suffix: string;
    label: string;
    color: string;
    delay: number;
}

function StatItem({ icon, end, suffix, label, color, delay }: StatItemProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime - delay * 1000;
            if (elapsed < 0) { requestAnimationFrame(animate); return; }
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * end));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
        };
        requestAnimationFrame(animate);
    }, [inView, end, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center text-center group"
        >
            <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <div className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tabular-nums">
                {count}{suffix}
            </div>
            <p className="text-slate-500 dark:text-white font-semibold text-base">{label}</p>
        </motion.div>
    );
}

const stats = [
    {
        icon: <FaUserGraduate size={26} />,
        end: 500,
        suffix: '+',
        label: 'Students Mentored',
        color: 'bg-gradient-to-br from-primary-500 to-primary-700',
        delay: 0,
    },
    {
        icon: <FaCalendarAlt size={26} />,
        end: 5,
        suffix: '+',
        label: 'Years of Excellence',
        color: 'bg-gradient-to-br from-secondary-500 to-secondary-700',
        delay: 0.1,
    },
    {
        icon: <FaStar size={26} />,
        end: 98,
        suffix: '%',
        label: 'A Grade Rate',
        color: 'bg-gradient-to-br from-amber-400 to-orange-600',
        delay: 0.2,
    },
    {
        icon: <FaPercentage size={26} />,
        end: 100,
        suffix: '%',
        label: 'Satisfaction Guarantee',
        color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        delay: 0.3,
    },
];

export default function StatsSection() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Numbers That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Speak For Themselves</span>
                    </h2>
                    <p className="text-slate-500 dark:text-white mt-4 text-lg max-w-xl mx-auto">
                        Proven results that we are proud of — built student by student, year by year.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <StatItem key={idx} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
