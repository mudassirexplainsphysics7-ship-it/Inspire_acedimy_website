'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import InstructorSection from '@/components/InstructorSection';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import { FaGraduationCap, FaChalkboardTeacher, FaClock } from 'react-icons/fa';

export default function Home() {
  const featuredCourses = [
    {
      title: "Early & Primary Education",
      grades: "Class 1 to 5",
      subjects: ["Creativity", "Critical Thinking", "Core Foundation"],
      description: "Our Early and Primary education program provide a strong foundation in core subjects to foster creativity, critical thinking and love for learning from the very first years.",
    },
    {
      title: "Middle & Matriculation",
      grades: "Class 8, 9 & 10",
      subjects: ["Physics", "Math"],
      description: "Our Middle and Matriculation programs are fully aligned with the board syllabus, equipping students with strong subject knowledge, exam strategies, and skills to achieve top grades in their final board exams.",
    },
    {
      title: "Intermediate Programs",
      grades: "FSC / ICS",
      subjects: ["Physics", "Math"],
      description: "Our intermediate programs strengthen conceptual understanding to excel in final exams and build a solid foundation for university entry tests.",
    },
    {
      title: "Public Speaking Course",
      grades: "All Ages",
      subjects: ["Confidence Building", "Body Language", "Presentation Skills"],
      description: "Our public speaking course helps students develop confidence, clarity and charisma in their speech. It equips them to deliver effective presentations and make impactful communication in both academic and professional settings.",
    },
    {
      title: "Handwriting & Presentation Mastery",
      grades: "All Ages",
      subjects: ["Penmanship", "Speed Writing", "Board Presentation"],
      description: "This course is designed to help students develop neat handwriting and polished presentation skills for board exams. This course also includes a practice book with reusable sheets, allowing students to practice their handwriting skills regularly.",
    },
    {
      title: "Creative Writing and Essay Writing",
      grades: "Class 1 to 12",
      subjects: ["Essay Structure", "Storybuilding", "Descriptive Writing", "Vocabulary Building"],
      description: "In this course, students will be able to develop strong writing skills and structured thinking. It equips them with the ability to write engaging essays and imaginative pieces with clarity and style.",
    }
  ];

  const testimonials = [
    {
      name: "Aneesa Javed",
      grade: "Class 9",
      content: "I used to struggle with math, but the teaching methods and step-by-step explanations at Inspire Academy made every concept simple and clear. Now learning has become easy and enjoyable!",
      rating: 5,
    },
    {
      name: "Ayan Ahmad",
      grade: "Class 10",
      content: "Physics and Math used to be tough for me, but at Inspire Academy, concept clarity and exam-focused preparation helped me understand everything clearly and achieve good grades in my board exams.",
      rating: 5,
    },
    {
      name: "Rana Ahsan",
      grade: "Class 12",
      content: "At Inspire Academy, the conceptual understanding developed through effective teaching and exam-oriented coaching helped me score high marks in board exams and enabled me to crack the ECAT for admission to UET Lahore.",
      rating: 5,
    },
    {
      name: "Hira",
      grade: "Class 8",
      content: "Math, English, and Science used to be challenging for me, but at Inspire Academy, the teaching methods, weekly tests, and regular revision made everything much easier to understand. Now I feel confident in all three subjects.",
      rating: 5,
    },
    {
      name: "Ali Hasnain",
      grade: "Handwriting & Presentation Mastery",
      content: "The Handwriting and Presentation Mastery Course at Inspire Academy really improved my handwriting and overall presentation. Now my handwriting looks neat, clear, and more professional. The structured practice and guidance made a noticeable difference.",
      rating: 5,
    },
    {
      name: "Muntaha",
      grade: "Public Speaking Course",
      content: "I used to feel nervous speaking in front of others, but the Public Speaking Course at Inspire Academy helped me overcome my fear of public speaking. I gained confidence and learned how to communicate clearly and effectively.",
      rating: 5,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Features/Why Choose Us Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-600 font-semibold tracking-wider uppercase text-lg">Why Choose Inspire Academy?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">A Modern Learning Experience</h2>
            <p className="text-slate-600 text-lg">We focus on concept clarity, critical thinking, exam-oriented preparation, Activity-Based learning, career counseling, character building & personalized guidance.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.01
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FaChalkboardTeacher size={28} />,
                title: "Expert Mentorship",
                text: "Learn from Qualified and experienced mentors who focus on deep understanding and concept clarity to help students achieve their full potential.",
                accent: "primary"
              },
              {
                icon: <FaClock size={28} />,
                title: "Weekly Tests",
                text: "Regular assessments to track progress, strengthen concepts and boost confidence for final exams.",
                accent: "secondary"
              },
              {
                icon: <FaGraduationCap size={28} />,
                title: "Proven Results",
                text: "With a history of outstanding academic performance, our students achieve top grades in board exams and show real progress by building strong conceptual understanding in every subject.",
                accent: "pink"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${feature.accent}-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-${feature.accent}-200 transition-colors`} />
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm text-${feature.accent === 'pink' ? 'pink' : feature.accent + '-600'} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <InstructorSection />

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-64 h-64 md:w-[400px] md:h-[400px] bg-secondary-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Our Academic Programs</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">Classes We Offer</h2>
            </div>
            <Link href="/courses" className="px-8 py-4 rounded-xl border border-slate-300 bg-white shadow-sm text-slate-700 font-bold hover:border-primary-500 hover:text-primary-600 hover:shadow-md transition-all">
              View All Courses
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, idx) => (
              <CourseCard key={idx} {...course} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Success Stories</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight mb-6">What Our Students Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Find Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">Our Location</h2>
            <p className="text-slate-600 mt-4 text-lg">We are conveniently located in Chak Bawa, Haveli Lakha. Visit us today to start your academic success journey!</p>
          </div>
          <MapSection height="500px" />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
