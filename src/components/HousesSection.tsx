import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface House {
  id: number;
  name: string;
  capacity: string;
  area: string;
  price: string;
  image: string;
  features: string[];
}

interface HousesSectionProps {
  houses: House[];
  selectedHouse: string;
  setSelectedHouse: (name: string) => void;
  scrollToSection: (id: string) => void;
}

const HousesSection = ({ houses, selectedHouse, setSelectedHouse, scrollToSection }: HousesSectionProps) => {
  return (
    <section id="houses" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши дома</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите идеальный вариант для вашего отдыха
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house, index) => (
            <Card
              key={house.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={house.image}
                  alt={house.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                  {house.price}/сутки
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{house.name}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-base">
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    {house.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Maximize" size={16} />
                    {house.area}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {house.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline">{feature}</Badge>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" onClick={() => setSelectedHouse(house.name)}>
                      Подробнее и забронировать
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{house.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img src={house.image} alt={house.name} className="w-full h-64 object-cover rounded-lg" />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Вместимость</p>
                          <p className="font-semibold">{house.capacity}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Площадь</p>
                          <p className="font-semibold">{house.area}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Удобства</p>
                        <div className="flex flex-wrap gap-2">
                          {house.features.map((feature, idx) => (
                            <Badge key={idx}>{feature}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-2xl font-bold text-primary mb-4">{house.price}/сутки</p>
                        <Button className="w-full" size="lg" onClick={() => scrollToSection('booking')}>
                          Перейти к бронированию
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousesSection;
