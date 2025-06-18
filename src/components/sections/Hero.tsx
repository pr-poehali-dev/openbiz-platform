import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-br from-primary to-blue-600 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            {t("hero.title")} <br />
            <span className="text-blue-200">
              {t("hero.transparency")}
            </span> и <span className="text-blue-200">{t("hero.trust")}</span>
          </h1>

          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <Icon name="Shield" className="h-5 w-5" />
              <span>{t("hero.feature1")}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <Icon name="Users" className="h-5 w-5" />
              <span>{t("hero.feature2")}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <Icon name="Heart" className="h-5 w-5" />
              <span>{t("hero.feature3")}</span>
            </div>
          </div>

          <Link to="/auth/register">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
            >
              {t("hero.cta")}
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
