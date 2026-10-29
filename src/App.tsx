import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioSection } from './components/StudioSection';
import { PracticesSection } from './components/PracticesSection';
import { ScheduleAndPricing } from './components/ScheduleAndPricing';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickMobileBar } from './components/QuickMobileBar';
import { BookingModal } from './components/BookingModal';
import { PriceTier, ScheduleItem } from './data/yogaData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalInitialSelection, setModalInitialSelection] = useState<string>('Cours d’essai (16 €)');
  const [contactPreselection, setContactPreselection] = useState<string>('Cours d’essai (16 €)');

  const handleOpenBooking = (initialChoice?: string) => {
    if (initialChoice) {
      setModalInitialSelection(initialChoice);
    }
    setBookingModalOpen(true);
  };

  const handleSelectPractice = (practiceName: string) => {
    setContactPreselection(practiceName);
    // Smooth scroll to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking(practiceName);
    }
  };

  const handleSelectSlot = (slot: ScheduleItem) => {
    const slotLabel = `${slot.className} (${slot.day} ${slot.time})`;
    setContactPreselection(slotLabel);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking(slotLabel);
    }
  };

  const handleSelectTier = (tier: PriceTier) => {
    const tierLabel = `${tier.title} (${tier.price} €)`;
    setContactPreselection(tierLabel);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking(tierLabel);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242A25] font-sans antialiased selection:bg-[#E3DCD2]">
      {/* Top Bar with Top Bar Contract */}
      <Navbar onOpenBooking={() => handleOpenBooking('Cours d’essai (16 €)')} />

      {/* Main Single-Page Content Flow */}
      <main className="flex-grow">
        {/* Hero Section with refined visual presence and value proposition */}
        <Hero onOpenBooking={() => handleOpenBooking('Cours d’essai (16 €)')} />

        {/* Le Studio: The sanctuary in the historic center */}
        <StudioSection />

        {/* Disciplines: Hatha, Yin, Vinyasa, Pilates, Yogathérapie */}
        <PracticesSection onSelectPracticeForBooking={handleSelectPractice} />

        {/* Planning & Tarifs: Transparent schedule and pricing */}
        <ScheduleAndPricing
          onSelectSlot={handleSelectSlot}
          onSelectTier={handleSelectTier}
        />

        {/* À propos d'Angèle: Journey, values, verified certifications */}
        <AboutSection />

        {/* Authentic Student Experiences */}
        <TestimonialsSection />

        {/* Direct Contact & Booking Form with Access Details */}
        <ContactSection preselectedClassOrTier={contactPreselection} />
      </main>

      {/* Quiet, minimalist footer */}
      <Footer />

      {/* Mobile-only quick action bar (capped < 15% viewport height) */}
      <QuickMobileBar onOpenBooking={() => handleOpenBooking('Cours d’essai (16 €)')} />

      {/* Instant Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialClass={modalInitialSelection}
      />
    </div>
  );
}
