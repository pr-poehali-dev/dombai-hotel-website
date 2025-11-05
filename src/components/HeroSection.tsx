import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="main" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/f0c44fe0-8631-4ef5-a33f-cde25702b094/files/f4e4ac83-196c-46e1-a4bc-e1c636ca9a56.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background"></div>
      </div>
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
          Отдых в горах Домбая
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Комфортабельные гостиничные дома с панорамным видом на заснеженные вершины Кавказа
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection('booking')} className="text-lg px-8 py-6">
            Забронировать дом
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('houses')} className="text-lg px-8 py-6 bg-white/90 hover:bg-white">
            Посмотреть галерею
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
