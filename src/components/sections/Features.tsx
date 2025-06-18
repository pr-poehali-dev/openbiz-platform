import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useI18n } from "@/lib/i18n";

const Features = () => {
  const { t } = useI18n();
  const features = [
    {
      icon: "Building2",
      title: t("features.assets"),
      description: t("features.assets.desc"),
    },
    {
      icon: "CreditCard",
      title: t("features.finance"),
      description: t("features.finance.desc"),
    },
    {
      icon: "Users",
      title: t("features.social"),
      description: t("features.social.desc"),
    },
    {
      icon: "FileText",
      title: t("features.reports"),
      description: t("features.reports.desc"),
    },
    {
      icon: "ShoppingCart",
      title: t("features.marketplace"),
      description: t("features.marketplace.desc"),
    },
    {
      icon: "Shield",
      title: t("features.security"),
      description: t("features.security.desc"),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("features.title")}</h2>
          <p className="text-xl text-gray-600">{t("features.subtitle")}</p>
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
