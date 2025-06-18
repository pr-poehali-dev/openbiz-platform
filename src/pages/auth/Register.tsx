import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Register = () => {
  const [activeTab, setActiveTab] = useState("business");
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Icon name="Building2" className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">{t("auth.register")}</CardTitle>
          <CardDescription>{t("auth.register.desc")}</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="business">{t("auth.business")}</TabsTrigger>
              <TabsTrigger value="client">{t("auth.client")}</TabsTrigger>
            </TabsList>

            <TabsContent value="business" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">{t("auth.company.name")}</Label>
                <Input id="company-name" placeholder="ООО Ваша компания" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-email">{t("auth.company.email")}</Label>
                <Input
                  id="company-email"
                  type="email"
                  placeholder="info@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-phone">{t("auth.company.phone")}</Label>
                <Input id="company-phone" placeholder="+7 (999) 123-45-67" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-password">
                  {t("auth.company.password")}
                </Label>
                <Input id="company-password" type="password" />
              </div>
              <Button className="w-full">{t("auth.create.business")}</Button>
            </TabsContent>

            <TabsContent value="client" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client-name">{t("auth.client.name")}</Label>
                <Input id="client-name" placeholder="Иван Иванов" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-email">{t("auth.client.email")}</Label>
                <Input
                  id="client-email"
                  type="email"
                  placeholder="ivan@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-phone">{t("auth.client.phone")}</Label>
                <Input id="client-phone" placeholder="+7 (999) 123-45-67" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-password">
                  {t("auth.client.password")}
                </Label>
                <Input id="client-password" type="password" />
              </div>
              <Button className="w-full">{t("auth.create.client")}</Button>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              {t("auth.have.account")}{" "}
              <Link to="/auth/login" className="text-primary hover:underline">
                {t("auth.login.link")}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
