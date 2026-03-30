'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const className = formData.get('class') as string;
        const subject = formData.get('subject') as string;

        const message = `*Enrollment Request - Inspire Academy*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Program:* ${className}%0A*Subjects:* ${subject}`;
        const whatsappUrl = `https://wa.me/923184055906?text=${message}`;

        setTimeout(() => {
            setStatus('success');
            // Redirect to WhatsApp immediately
            window.location.href = whatsappUrl;
            // Reset after 3s
            setTimeout(() => setStatus('idle'), 3000);
        }, 1200);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
        >
            {/* Decorative gradient blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">Enroll Now</h3>
            <p className="text-slate-500 mb-8 relative z-10 text-sm">Fill out the registration form below and I will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Student/Parent Name</label>
                        <input required name="name" type="text" id="name" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium text-slate-800 placeholder-slate-400" placeholder="Ali Khan" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                        <input required name="phone" type="tel" id="phone" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium text-slate-800 placeholder-slate-400" placeholder="0300 1234567" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="class" className="text-sm font-semibold text-slate-700">Class/Grade</label>
                        <select required name="class" id="class" defaultValue="" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium text-slate-700 cursor-pointer">
                            <option value="" disabled>Select Class</option>
                            <option value="Early & Primary Education">Early & Primary Education</option>
                            <option value="Middle & Matriculation">Middle & Matriculation</option>
                            <option value="Intermediate Programs">Intermediate Programs</option>
                            <option value="Public Speaking Course">Public Speaking Course</option>
                            <option value="Handwriting Mastery">Handwriting & Presentation Mastery</option>
                            <option value="Creative Writing">Creative Writing and Essay Writing</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Interested Subjects</label>
                        <input required name="subject" type="text" id="subject" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium text-slate-800 placeholder-slate-400" placeholder="Math, Physics, Chemistry..." />
                    </div>
                </div>

                <button
                    disabled={status !== 'idle'}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold tracking-wide hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 focus:ring-4 focus:ring-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 mt-2 flex items-center justify-center gap-2 group disabled:opacity-90 disabled:cursor-not-allowed overflow-hidden relative"
                >
                    <AnimatePresence mode="wait">
                        {status === 'idle' && (
                            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                                Submit Request <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.div>
                        )}
                        {status === 'submitting' && (
                            <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                            </motion.div>
                        )}
                        {status === 'success' && (
                            <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2 text-green-300">
                                <FaCheckCircle size={20} /> Request Sent!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </form>
        </motion.div>
    );
}
