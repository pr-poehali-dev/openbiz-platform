import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Building2",
      title: "Учёт активов",
      description:
        "Полный контроль над техникой, оборудованием и имуществом компании",
    },
    {
      icon: "CreditCard",
      title: "Финансовая аналитика",
      description:
        "Интеграция с банками, анализ расходов и доходов в реальном времени",
    },
    {
      icon: "Users",
      title: "Социальная сеть",
      description:
        "Взаимодействие с партнёрами и клиентами в едином пространстве",
    },
    {
      icon: "FileText",
      title: "Отчётность",
      description:
        "Автоматическое формирование финансовых и операционных отчётов",
    },
    {
      icon: "ShoppingCart",
      title: "Торговая площадка",
      description: "Продажа товаров и услуг через встроенную платформу",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Надёжная защита данных и многоуровневая система доступа",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Всё для вашего бизнеса</h2>
          <p className="text-xl text-gray-600">
            Комплексное решение для управления и развития компании
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow animate-scale-in"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={feature.icon as any}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
