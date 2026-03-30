import CourseCard from '@/components/CourseCard';
import CTASection from '@/components/CTASection';

export const metadata = {
    title: 'Courses & Programs | Inspire Academy',
    description: 'Explore our comprehensive academic programs including Matriculation (Science), FSC, and ICS classes in Haveli Lakha.',
};

export default function CoursesPage() {
    const allCourses = [
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

    return (
        <div className="flex flex-col min-h-screen pt-24 bg-slate-50">

            {/* Header */}
            <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Programs</span></h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                    Comprehensive tuition programs designed for students in Haveli Lakha and across Pakistan via our online platform.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-6 pb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allCourses.map((course, idx) => (
                        <CourseCard key={idx} {...course} delay={idx * 0.1} />
                    ))}
                </div>
            </div>

            <CTASection />
        </div>
    );
}
