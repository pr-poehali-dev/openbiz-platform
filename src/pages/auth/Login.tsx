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

const Login = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Icon name="Building2" className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Добро пожаловать в OpenBiz</CardTitle>
          <CardDescription>Войдите в свой аккаунт</CardDescription>
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
                <Label htmlFor="business-email">Email компании</Label>
                <Input
                  id="business-email"
                  type="email"
                  placeholder="company@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-password">Пароль</Label>
                <Input id="business-password" type="password" />
              </div>
              <Button className="w-full" asChild>
                <Link to="/dashboard">Войти в бизнес-кабинет</Link>
              </Button>
            </TabsContent>

            <TabsContent value="client" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client-email">Email</Label>
                <Input
                  id="client-email"
                  type="email"
                  placeholder="user@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-password">Пароль</Label>
                <Input id="client-password" type="password" />
              </div>
              <Button className="w-full" asChild>
                <Link to="/client">Войти в кабинет клиента</Link>
              </Button>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Нет аккаунта?{" "}
              <Link
                to="/auth/register"
                className="text-primary hover:underline"
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
