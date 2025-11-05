import Icon from '@/components/ui/icon';

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

const AdvantagesSection = () => {
  return (
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
  );
};

export default AdvantagesSection;
