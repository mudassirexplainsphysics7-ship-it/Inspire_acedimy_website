'use client';
import CTASection from '@/components/CTASection';
import { FaLaptopCode, FaHome, FaClipboardCheck, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
    {
        id: "online",
        icon: <FaLaptopCode size={36} />,
        title: "Online Live Classes",
        description: "Interactive real-time online classes available across Pakistan and internationally. We utilize premium digital whiteboards, screen sharing, and dedicated LMS for notes and assignments",
        gradient: "from-blue-500 via-indigo-500 to-purple-500"
    },
    {
        id: "home",
        icon: <FaHome size={36} />,
        title: "Home Tuition",
        description: "Exclusive 1-on-1 and small group onsite tuition in Haveli Lakha. Personalized attention in a comfortable environment eliminating travel time for students.",
        gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
        id: "test",
        icon: <FaClipboardCheck size={36} />,
        title: "Test Preparation & Crash Courses",
        description: "Intensive 2-3 month crash courses geared strictly toward board exams. Focuses on paper attempting techniques, past paper solutions, and time management.",
        gradient: "from-orange-500 via-amber-500 to-yellow-500"
    }
];

export default function ServicesContent() {
    return (
        <div className="relative min-h-screen pt-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]" />

            {/* Header */}
            <div className="container mx-auto px-6 text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white"
                >
                    Our{" "}
                    <span className="bg-gradient-to-r from-primary-500 to-purple-500 text-transparent bg-clip-text">
                        Services
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
                >
                    Bridging the gap between traditional excellence and modern innovation. Whether onsite or online, we  <span className="text-primary-600 dark:text-primary-400 font-bold italic underline decoration-primary-200">Inspire</span> success.
                </motion.p>
            </div>

            {/* Cards */}
            <div className="container mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >

                            {/* Glow Border */}
                            <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 blur-xl transition duration-500`} />

                            {/* Card */}
                            <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-[2rem] p-10 h-full shadow-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition`}>
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-500 transition">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs uppercase tracking-widest text-slate-400 group-hover:text-primary-500 transition">
                                        Learn More
                                    </span>

                                    <motion.div
                                        whileHover={{ x: 6 }}
                                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-primary-500 group-hover:text-white transition"
                                    >
                                        <FaArrowRight />
                                    </motion.div>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 blur-xl" />
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <CTASection />
        </div>
    );
}