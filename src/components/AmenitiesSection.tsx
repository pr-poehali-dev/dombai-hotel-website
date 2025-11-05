import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const amenities = [
  {
    icon: 'Flame',
    title: 'Русская баня',
    description: 'Традиционная баня на дровах с парной и комнатой отдыха'
  },
  {
    icon: 'Waves',
    title: 'Купели',
    description: 'Открытые купели с горячей и холодной водой'
  },
  {
    icon: 'Home',
    title: 'Беседки',
    description: 'Уютные беседки с мангальными зонами'
  },
  {
    icon: 'Baby',
    title: 'Детская площадка',
    description: 'Безопасная игровая зона для детей'
  },
  {
    icon: 'Car',
    title: 'Парковка',
    description: 'Охраняемая парковка на 20 мест'
  },
  {
    icon: 'Wifi',
    title: 'Wi-Fi',
    description: 'Высокоскоростной интернет на всей территории'
  }
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Инфраструктура</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Всё необходимое для комфортного отдыха
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <Icon name={amenity.icon} size={48} className="text-primary mb-4" />
                <CardTitle>{amenity.title}</CardTitle>
                <CardDescription className="text-base">{amenity.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/f0c44fe0-8631-4ef5-a33f-cde25702b094/files/9a51d530-ac01-40a0-b227-717f16b7f0a3.jpg"
            alt="Баня и купели"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Баня и купели</h3>
              <p className="text-lg">Расслабьтесь после активного дня в горах</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
