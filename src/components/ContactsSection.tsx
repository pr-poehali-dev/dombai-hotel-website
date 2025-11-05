import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground">
            Мы всегда на связи
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
            <CardHeader>
              <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle>Телефон</CardTitle>
              <CardDescription className="text-base">
                +7 (928) 123-45-67<br />
                Ежедневно 9:00 - 21:00
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle>Email</CardTitle>
              <CardDescription className="text-base">
                info@dombay-resort.ru<br />
                Ответим в течение часа
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle>Адрес</CardTitle>
              <CardDescription className="text-base">
                Карачаево-Черкесия<br />
                Домбай, ул. Горная, 15
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
