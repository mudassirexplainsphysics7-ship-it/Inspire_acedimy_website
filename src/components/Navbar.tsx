'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 inset-x-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/95 dark:bg-slate-950/95 py-3 shadow-md border-b border-slate-100 dark:border-slate-800'
                    : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-5'
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5 z-50 group">
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 text-white flex items-center justify-center shadow-[0_4px_10px_rgba(37,99,235,0.3)] group-hover:scale-105 transition-all duration-300">
                            <FaGraduationCap size={22} className="group-hover:-rotate-12 transition-transform duration-300" />
                        </div>
                        <span className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 tracking-tight">
                            Inspire Academy
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (pathname !== '/' && link.href !== '/' && (pathname?.startsWith(link.href) ?? false));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        'text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 relative',
                                        isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300'
                                    )}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                                            transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                        <ThemeToggle />
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium text-sm shadow-lg shadow-primary-500/25 dark:shadow-primary-500/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Enroll Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden z-50">
                        <ThemeToggle />
                        <button
                            className="p-2 text-slate-800 dark:text-slate-200"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl p-4 md:hidden overflow-hidden origin-top"
                    >
                        <div className="flex flex-col gap-2 py-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            'text-base font-medium p-4 rounded-xl transition-all',
                                            isActive ? 'bg-primary-50 dark:bg-slate-800/50 text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium shadow-lg"
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
