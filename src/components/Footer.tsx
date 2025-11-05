import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Mountain" size={28} />
              <span className="text-xl font-bold">Домбай Резорт</span>
            </div>
            <p className="text-sm opacity-90">
              Комфортный отдых в сердце Кавказских гор
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><button onClick={() => scrollToSection('main')}>Главная</button></li>
              <li><button onClick={() => scrollToSection('houses')}>Галерея</button></li>
              <li><button onClick={() => scrollToSection('amenities')}>Услуги</button></li>
              <li><button onClick={() => scrollToSection('booking')}>Бронирование</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>+7 (928) 123-45-67</li>
              <li>info@dombay-resort.ru</li>
              <li>Домбай, ул. Горная, 15</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
              <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
              <Icon name="MessageCircle" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>© 2024 Домбай Резорт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
