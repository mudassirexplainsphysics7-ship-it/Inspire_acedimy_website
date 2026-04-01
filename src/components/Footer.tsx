import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-slate-900 dark:bg-slate-950 pt-20 pb-8 border-t border-slate-800 dark:border-slate-900 text-slate-300 transition-colors duration-300 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    <div className="space-y-6 lg:col-span-4">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-extrabold text-white tracking-tight">
                                Inspire Academy
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Your Trusted Academy & Home/Online Tuition Provider. Providing quality education for class 1 to 12 focused on concept clarity and academic excellence.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a
                                href="https://www.facebook.com/share/1868mFbS4M/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors duration-300 shadow-sm border border-slate-700/50 dark:border-slate-800/50"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/mudassaraslam339?igsh=MWE0YnlybWswZXg3Zw=="
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors duration-300 shadow-sm border border-slate-700/50 dark:border-slate-800/50"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300 shadow-sm border border-slate-700/50 dark:border-slate-800/50" aria-label="Twitter">
                                <FaTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3 lg:col-start-6">
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Courses', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm hover:text-primary-400 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h3 className="text-white font-semibold text-lg mb-6">Contact & Location</h3>
                        <ul className="space-y-4">
                            <li className="text-sm flex gap-3">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                                </div>
                                <span className="text-slate-400">Chak Bawa, Haveli Lakha,<br />Okara, Pakistan</span>
                            </li>
                            <li className="text-sm flex gap-3">
                                <div className="mt-1 w-6 h-6 rounded-full bg-secondary-500/20 flex items-center justify-center shrink-0">
                                    <FaWhatsapp className="text-secondary-500" size={12} />
                                </div>
                                <span className="text-slate-400">+92 318 4055906<br />+92 309 2613347</span>
                            </li>
                            <li className="text-sm flex gap-3">
                                <div className="mt-1 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                </div>
                                <span className="text-slate-400">mudassaraslam339@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 dark:border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500 dark:text-slate-600">
                        © {new Date().getFullYear()} Inspire Academy of Sciences & Skills. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-xs text-slate-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
