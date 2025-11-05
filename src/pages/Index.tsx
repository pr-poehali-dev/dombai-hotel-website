import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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

  const advantages = [
    {
      icon: 'Mountain',
      title: 'Панорамный вид',
      description: 'Захватывающий вид на горные вершины Домбая'
    },
    {
      icon: 'Trees',
      title: 'Хвойный лес',
      description: 'Окружены соснами и чистейшим горным воздухом'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Охраняемая территория и круглосуточная поддержка'
    },
    {
      icon: 'Sparkles',
      title: 'Комфорт',
      description: 'Современные удобства в каждом доме'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={advantage.icon} size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;