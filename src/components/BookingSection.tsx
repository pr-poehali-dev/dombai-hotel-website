import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface House {
  id: number;
  name: string;
  price: string;
}

interface BookingSectionProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  selectedHouse: string;
  setSelectedHouse: (name: string) => void;
  houses: House[];
}

const BookingSection = ({ date, setDate, selectedHouse, setSelectedHouse, houses }: BookingSectionProps) => {
  return (
    <section id="booking" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Бронирование</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <Card className="animate-scale-in">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (900) 000-00-00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="house">Выберите дом</Label>
                  <Select value={selectedHouse} onValueChange={setSelectedHouse}>
                    <SelectTrigger id="house">
                      <SelectValue placeholder="Выберите дом" />
                    </SelectTrigger>
                    <SelectContent>
                      {houses.map((house) => (
                        <SelectItem key={house.id} value={house.name}>
                          {house.name} — {house.price}/сутки
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Select>
                      <SelectTrigger id="guests">
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 человека</SelectItem>
                        <SelectItem value="4">4 человека</SelectItem>
                        <SelectItem value="6">6 человек</SelectItem>
                        <SelectItem value="8">8 человек</SelectItem>
                        <SelectItem value="10">10 человек</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Дата заезда</Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    placeholder="Дополнительные пожелания или вопросы"
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
