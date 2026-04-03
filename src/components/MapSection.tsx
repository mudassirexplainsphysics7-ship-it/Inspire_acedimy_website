'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaLocationArrow, FaBuilding } from 'react-icons/fa';

interface MapSectionProps {
    className?: string;
    height?: string; // Kept for prop compatibility though not used in the new design
}

const MapSection: React.FC<MapSectionProps> = ({ className = "" }) => {
    // Direct Google Maps Link
    const mapLink = "https://www.google.com/maps/search/Chak+Bawa,+Pakistan/@30.4370898,73.7029158,13z";

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`w-full max-w-5xl mx-auto rounded-[2.5rem] bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 shadow-xl dark:shadow-2xl p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-slate-200 dark:border-slate-700/50 transition-colors duration-300 ${className}`}
        >
            {/* Background Effects */}
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary-100 dark:bg-primary-500/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-secondary-100 dark:bg-secondary-500/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-10 pointer-events-none"></div>

            {/* Icon Block */}
            <div className="shrink-0 relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-gradient-to-br from-primary-500 to-secondary-500 flex flex-col items-center justify-center shadow-2xl shadow-primary-500/30 text-white border border-white/50 dark:border-white/10">
                <FaMapMarkerAlt className="text-5xl md:text-6xl mb-3 drop-shadow-lg" />
                <div className="w-12 h-1.5 bg-white/40 rounded-full"></div>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md transition-colors">
                    <FaBuilding />
                    Main Campus
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors">
                    Chak Bawa, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Haveli Lakha</span>
                </h3>

                <p className="text-slate-600 dark:text-white text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 font-light transition-colors">
                    Visit our campus for in-person counseling, admissions, and to experience our modern learning environment.
                </p>

                <div className="flex justify-center md:justify-start">
                    <a
                        href={mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
                    >
                        <FaLocationArrow className="text-primary-400 dark:text-primary-600 group-hover:rotate-12 transition-transform" />
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default MapSection;
