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

const Register = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Icon name="Building2" className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Регистрация в OpenBiz</CardTitle>
          <CardDescription>Создайте аккаунт для начала работы</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="business">Бизнес</TabsTrigger>
              <TabsTrigger value="client">Клиент</TabsTrigger>
            </TabsList>

            <TabsContent value="business" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Название компании</Label>
                <Input id="company-name" placeholder="ООО Ваша компания" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-email">Email компании</Label>
                <Input
                  id="company-email"
                  type="email"
                  placeholder="info@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-phone">Телефон</Label>
                <Input id="company-phone" placeholder="+7 (999) 123-45-67" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-password">Пароль</Label>
                <Input id="company-password" type="password" />
              </div>
              <Button className="w-full">Создать бизнес-аккаунт</Button>
            </TabsContent>

            <TabsContent value="client" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client-name">Имя</Label>
                <Input id="client-name" placeholder="Иван Иванов" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-email">Email</Label>
                <Input
                  id="client-email"
                  type="email"
                  placeholder="ivan@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-phone">Телефон</Label>
                <Input id="client-phone" placeholder="+7 (999) 123-45-67" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-password">Пароль</Label>
                <Input id="client-password" type="password" />
              </div>
              <Button className="w-full">Создать аккаунт клиента</Button>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Уже есть аккаунт?{" "}
              <Link to="/auth/login" className="text-primary hover:underline">
                Войти
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
