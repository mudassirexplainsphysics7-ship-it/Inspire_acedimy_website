import { motion } from 'framer-motion';
import { FaGraduationCap, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';
import InstructorSection from '@/components/InstructorSection';
import CTASection from '@/components/CTASection';

export const metadata = {
    title: 'About Us | Inspire Academy',
    description: 'Learn more about Inspire Academy of Sciences & Skills, our mission to inspire young minds, and our student-centered learning approach.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight font-display">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Inspire Academy</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-white leading-relaxed font-medium">
                        Inspire Academy is <span className="text-primary-600 dark:text-primary-400">Your Trusted Academy & Home/Online Tuition Provider</span>. We provide quality education for class 1 to 12 focused on concept clarity, critical thinking, exam preparation, and overall academic excellence.
                    </p>
                </div>

                <InstructorSection />

                {/* Methodology Grid - Simplified */}
            </div>

            <CTASection />
        </div>
    );
}
