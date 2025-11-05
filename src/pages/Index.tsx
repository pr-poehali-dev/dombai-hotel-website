import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import HousesSection from '@/components/HousesSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import BookingSection from '@/components/BookingSection';
import ContactsSection from '@/components/ContactsSection';
import ReviewsSection from '@/components/ReviewsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedHouse, setSelectedHouse] = useState('');

  const houses = [
    {
      id: 1,
      name: 'Альпийский Дом',
      capacity: '4-6 человек',
      area: '80 м²',
      price: '8 000 ₽',
      image: 'https://cdn.poehali.dev/projects/f0c44fe0-8631-4ef5-a33f-cde25702b094/files/54f0375f-d8e2-4537-8a81-05646454da3e.jpg',
      features: ['Wi-Fi', 'Кухня', 'Камин', 'Балкон']
    },
    {
      id: 2,
      name: 'Горный Коттедж',
      capacity: '6-8 человек',
      area: '120 м²',
      price: '12 000 ₽',
      image: 'https://cdn.poehali.dev/projects/f0c44fe0-8631-4ef5-a33f-cde25702b094/files/54f0375f-d8e2-4537-8a81-05646454da3e.jpg',
      features: ['Wi-Fi', 'Кухня', 'Камин', 'Терраса', 'BBQ']
    },
    {
      id: 3,
      name: 'Семейный Шале',
      capacity: '8-10 человек',
      area: '150 м²',
      price: '15 000 ₽',
      image: 'https://cdn.poehali.dev/projects/f0c44fe0-8631-4ef5-a33f-cde25702b094/files/54f0375f-d8e2-4537-8a81-05646454da3e.jpg',
      features: ['Wi-Fi', 'Кухня', 'Камин', 'Панорамные окна', 'Джакузи']
    },
    {
      id: 4,
      name: 'Уютное Гнёздышко',
      capacity: '2-3 человека',
      area: '50 м²',
      price: '6 000 ₽',
      image: 'https://cdn.poehali.dev/projects/f0c44fe0-8631-4ef5-a33f-cde25702b094/files/dbea8556-bf1f-4a81-8d51-fedc993cf2dc.jpg',
      features: ['Wi-Fi', 'Кухня', 'Романтическая обстановка']
    },
    {
      id: 5,
      name: 'Каменный Дом',
      capacity: '5-7 человек',
      area: '100 м²',
      price: '10 000 ₽',
      image: 'https://cdn.poehali.dev/projects/f0c44fe0-8631-4ef5-a33f-cde25702b094/files/6f009057-e170-4c18-807a-5562cb04ee8e.jpg',
      features: ['Wi-Fi', 'Кухня', 'Камин', 'Каменная печь', 'Терраса']
    },
    {
      id: 6,
      name: 'Премиум Вилла',
      capacity: '10-12 человек',
      area: '200 м²',
      price: '20 000 ₽',
      image: 'https://cdn.poehali.dev/projects/f0c44fe0-8631-4ef5-a33f-cde25702b094/files/1bae3ec8-074f-4a77-a7df-cebbef244ab2.jpg',
      features: ['Wi-Fi', 'Кухня', 'Камин', 'Панорамные окна', 'Джакузи', 'Сауна', 'Бильярд']
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AdvantagesSection />
      <HousesSection 
        houses={houses}
        selectedHouse={selectedHouse}
        setSelectedHouse={setSelectedHouse}
        scrollToSection={scrollToSection}
      />
      <AmenitiesSection />
      <BookingSection
        date={date}
        setDate={setDate}
        selectedHouse={selectedHouse}
        setSelectedHouse={setSelectedHouse}
        houses={houses}
      />
      <ReviewsSection />
      <ContactsSection />
      <AboutSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
