import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Mountain" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-primary">Домбай Резорт</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('main')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('houses')} className="text-foreground hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-foreground hover:text-primary transition-colors">
              Бронирование
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О нас
            </button>
          </div>
          <Button onClick={() => scrollToSection('booking')} size="lg">
            Забронировать
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
