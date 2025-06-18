import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Dashboard = () => {
  const { t } = useI18n();
  const stats = [
    {
      title: t("dashboard.assets"),
      value: "24",
      icon: "Building2",
      color: "text-blue-600",
    },
    {
      title: t("dashboard.balance"),
      value: "₽2,450,000",
      icon: "CreditCard",
      color: "text-green-600",
    },
    {
      title: t("dashboard.orders"),
      value: "156",
      icon: "ShoppingCart",
      color: "text-orange-600",
    },
    {
      title: t("dashboard.clients"),
      value: "89",
      icon: "Users",
      color: "text-purple-600",
    },
  ];

  const quickActions = [
    {
      title: t("dashboard.manage.assets"),
      desc: t("dashboard.manage.assets.desc"),
      icon: "Settings",
      link: "/business/assets",
    },
    {
      title: t("dashboard.finance.title"),
      desc: t("dashboard.finance.desc"),
      icon: "BarChart3",
      link: "/business/finance",
    },
    {
      title: t("dashboard.social.title"),
      desc: t("dashboard.social.desc"),
      icon: "MessageSquare",
      link: "/social",
    },
    {
      title: t("dashboard.reports.title"),
      desc: t("dashboard.reports.desc"),
      icon: "FileText",
      link: "/business/reports",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t("dashboard.title")}</h1>
          <p className="text-gray-600">{t("dashboard.welcome")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon
                  name={stat.icon as any}
                  className={`h-4 w-4 ${stat.color}`}
                />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("dashboard.quick.actions")}</CardTitle>
              <CardDescription>
                {t("dashboard.quick.actions.desc")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      name={action.icon as any}
                      className="h-5 w-5 text-primary"
                    />
                    <div>
                      <p className="font-medium">{action.title}</p>
                      <p className="text-sm text-gray-600">{action.desc}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={action.link}>
                      <Icon name="ArrowRight" className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("dashboard.notifications")}</CardTitle>
              <CardDescription>
                {t("dashboard.notifications.desc")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <Icon name="Bell" className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">
                    {t("dashboard.notification.update")}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t("dashboard.notification.update.desc")}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    2 {t("dashboard.time.hours")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <Icon
                  name="AlertCircle"
                  className="h-5 w-5 text-orange-600 mt-0.5"
                />
                <div>
                  <p className="font-medium">
                    {t("dashboard.notification.data")}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t("dashboard.notification.data.desc")}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    1 {t("dashboard.time.days")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
