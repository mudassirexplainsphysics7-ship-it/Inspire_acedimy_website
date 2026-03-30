import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export const metadata = {
    title: 'Contact Us | Inspire Academy',
    description: 'Get in touch with Inspire Academy of Sciences & Skills for home and online tuition in Haveli Lakha.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24 bg-slate-50">

            <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20 lg:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    <div className="space-y-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Touch</span></h1>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Have questions about our courses, timings, or fee structure? Reach out to us directly or fill the form.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Visit Us</h4>
                                    <p className="text-slate-600">Chak Bawa, Haveli Lakha,<br />Okara, Pakistan</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-secondary-50 text-secondary-600 flex items-center justify-center shrink-0 group-hover:bg-secondary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <FaPhoneAlt size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Call Us</h4>
                                    <p className="text-slate-600">+92 318 4055906<br />+92 309 2613347</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <FaEnvelope size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Email Us</h4>
                                    <p className="text-slate-600">mudassaraslam339@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="https://wa.me/923184055906"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaWhatsapp size={24} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div id="contact" className="relative lg:-top-10">
                        <ContactForm />
                    </div>

                </div>

                {/* Map Section */}
                <div className="mt-24">
                    <MapSection height="500px" />
                </div>

            </div>
        </div>
    );
}
