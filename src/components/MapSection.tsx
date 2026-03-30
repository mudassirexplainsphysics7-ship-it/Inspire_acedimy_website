'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface MapSectionProps {
    className?: string;
    height?: string;
}

const MapSection: React.FC<MapSectionProps> = ({ className = "", height = "450px" }) => {
    // Google Maps Embed URL for Chak Bawa, Haveli Lakha
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55027.74936353342!2d73.7029158!3d30.4370898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917f1b48487e521%3A0x1a2dfe3daa78e134!2sChak%20Bawa%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1711711654321!5m2!1sen!2sus";

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-200/50 bg-white p-2 ${className}`}
        >
            <div className="relative w-full overflow-hidden rounded-[2rem]" style={{ height }}>
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Inspire Academy Location - Chak Bawa, Haveli Lakha"
                    className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                ></iframe>

                {/* Decorative Overlay for premium feel */}
                <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[2rem]"></div>
            </div>
        </motion.section>
    );
};

export default MapSection;
