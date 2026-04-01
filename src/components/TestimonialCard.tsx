'use client';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
    name: string;
    grade: string;
    content: string;
    rating?: number;
    delay?: number;
}

export default function TestimonialCard({ name, grade, content, rating = 5, delay = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.1, delay: delay ? delay / 4 : 0 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-75 relative group"
        >
            <FaQuoteLeft className="absolute top-8 right-8 text-primary-50 text-5xl group-hover:text-primary-100 transition-colors pointer-events-none" />

            <div className="flex items-center gap-1 text-amber-400 mb-6 relative z-10">
                {[...Array(rating)].map((_, i) => <FaStar key={i} size={14} />)}
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 relative z-10 italic">"{content}"</p>

            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                className="flex items-center gap-4 border-t border-slate-100 pt-6 relative z-10"
            >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-extrabold text-lg shadow-inner">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-slate-800">{name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{grade}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}
