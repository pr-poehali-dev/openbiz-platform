import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Header = () => {
  const { language, setLanguage, t } = useI18n();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Icon name="Building2" className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">OpenBiz</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/dashboard"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            {t("header.dashboard")}
          </Link>
          <Link
            to="/business"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            {t("header.business")}
          </Link>
          <Link
            to="/social"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            {t("header.social")}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                {language.toUpperCase()}{" "}
                <Icon name="ChevronDown" className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage("ru")}>
                {t("header.russian")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                {t("header.english")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("zh")}>
                {t("header.chinese")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon name="User" className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/profile">{t("header.profile")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">{t("header.settings")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>{t("header.logout")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
