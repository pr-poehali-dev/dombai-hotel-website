import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О нас</h2>
            <p className="text-lg text-muted-foreground">
              Домбай Резорт — ваш дом в горах
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Наша история</h3>
              <p className="text-muted-foreground mb-4">
                Комплекс гостиничных домов «Домбай Резорт» был основан в 2018 году с целью создания уникального 
                пространства для комфортного отдыха в самом сердце Кавказских гор.
              </p>
              <p className="text-muted-foreground mb-4">
                Мы создали место, где современный комфорт гармонично сочетается с первозданной природой. 
                Каждый наш дом спроектирован с учетом особенностей горного климата и традиций местной архитектуры.
              </p>
              <p className="text-muted-foreground">
                За годы работы мы приняли более 5000 гостей и получили множество положительных отзывов. 
                Наша команда постоянно совершенствует сервис, чтобы ваш отдых был незабываемым.
              </p>
            </div>
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">Почему выбирают нас</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Уникальное расположение с панорамным видом на горы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Современные дома с полным набором удобств</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Развитая инфраструктура на территории комплекса</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Близость к горнолыжным трассам и туристическим маршрутам</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Круглосуточная поддержка и консьерж-сервис</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
