'use client';
import CTASection from '@/components/CTASection';
import { FaLaptopCode, FaHome, FaClipboardCheck, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
    {
        id: "online",
        icon: <FaLaptopCode size={38} />,
        title: "Online Live Classes",
        description: "Interactive real-time online classes available across Pakistan and internationally. We utilize premium digital whiteboards, screen sharing, and dedicated LMS for notes and assignments.",
        color: "from-blue-600 to-indigo-600",
        bg: "bg-blue-50/50",
        gradient: "group-hover:from-blue-500 group-hover:to-indigo-500"
    },
    {
        id: "home",
        icon: <FaHome size={38} />,
        title: "Home Tuition (Haveli Lakha)",
        description: "Exclusive 1-on-1 and small group onsite tuition in Haveli Lakha. Personalized attention in a comfortable environment eliminating travel time for students.",
        color: "from-emerald-600 to-teal-600",
        bg: "bg-emerald-50/50",
        gradient: "group-hover:from-emerald-500 group-hover:to-teal-500"
    },
    {
        id: "test",
        icon: <FaClipboardCheck size={38} />,
        title: "Test Preparation & Crash Courses",
        description: "Intensive 2-3 month crash courses geared strictly toward board exams. Focuses on paper attempting techniques, past paper solutions, and time management.",
        color: "from-amber-500 to-orange-600",
        bg: "bg-amber-50/50",
        gradient: "group-hover:from-amber-400 group-hover:to-orange-500"
    }
];

export default function ServicesContent() {
    return (
        <div className="flex flex-col min-h-screen pt-24 bg-slate-50 relative overflow-hidden">
            {/* Background Aesthetic Elements */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary-50/30 via-white to-transparent pointer-events-none" />

            {/* Animated shapes */}
            <div className="absolute top-40 -left-20 w-96 h-96 bg-primary-100/30 rounded-full blur-[100px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-secondary-100/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight font-display">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600">Services</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed opacity-90">
                        Bridging the gap between traditional excellence and modern innovation. Whether onsite or online, we <span className="text-primary-600 font-bold italic underline decoration-primary-200">Inspire</span> success.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 md:px-6 pb-32 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                            }}
                            whileHover={{ y: -15, transition: { duration: 0.4, ease: "easeOut" } }}
                            className="group relative h-full"
                        >
                            <div className="h-full bg-white/80 backdrop-blur-2xl rounded-[3rem] p-12 shadow-[0_30px_70px_rgba(0,0,0,0.04)] border border-white/80 hover:border-primary-100 hover:shadow-primary-500/10 transition-all duration-500 relative overflow-hidden flex flex-col cursor-default">
                                {/* Service Ambient Glow */}
                                <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-20 ${service.bg} group-hover:opacity-40 transition-opacity duration-700`} />

                                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-12 shadow-[0_15px_30px_rgba(37,99,235,0.2)] relative z-10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                                    {service.icon}
                                </div>

                                <div className="space-y-6 flex-grow relative z-10">
                                    <h3 className="text-3xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors duration-300 tracking-tight">{service.title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{service.description}</p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-slate-100/80 flex items-center justify-between relative z-10">
                                    <span className="text-xs font-black uppercase tracking-widest text-primary-500/40 group-hover:text-primary-500 transition-colors">Academic Excellence</span>
                                    <motion.div
                                        whileHover={{ x: 8 }}
                                        className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300"
                                    >
                                        <FaArrowRight size={18} />
                                    </motion.div>
                                </div>

                                {/* Modern Bottom Accent */}
                                <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-primary-500/0 to-transparent group-hover:via-primary-500 transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <CTASection />
        </div>
    );
}
