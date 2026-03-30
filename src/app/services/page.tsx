import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
    title: 'Services | Inspire Academy',
    description: 'Explore our premium educational services including Interactive Online Classes, Personalized Home Tuition in Haveli Lakha, and specialized Test Preparation.',
};

export default function ServicesPage() {
    return <ServicesContent />;
}
