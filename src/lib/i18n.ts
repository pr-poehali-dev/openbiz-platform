
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ru' | 'en' | 'zh';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

// Переводы
const translations = {
  ru: {
    // Header
    'header.dashboard': 'Панель управления',
    'header.business': 'Бизнес-кабинет',
    'header.social': 'Соцсеть',
    'header.profile': 'Профиль',
    'header.settings': 'Настройки',
    'header.logout': 'Выйти',
    'header.russian': 'Русский',
    'header.english': 'English',
    'header.chinese': '中文',

    // Hero
    'hero.title': 'Управляйте бизнесом с',
    'hero.transparency': 'прозрачностью',
    'hero.trust': 'доверием',
    'hero.subtitle': 'OpenBiz — платформа для управления активами, финансами и взаимодействия с клиентами в едином пространстве',
    'hero.feature1': 'Полная прозрачность',
    'hero.feature2': 'Лёгкое взаимодействие',
    'hero.feature3': 'Полное доверие',
    'hero.cta': 'Начать бесплатно',

    // Features
    'features.title': 'Всё для вашего бизнеса',
    'features.subtitle': 'Комплексное решение для управления и развития компании',
    'features.assets': 'Учёт активов',
    'features.assets.desc': 'Полный контроль над техникой, оборудованием и имуществом компании',
    'features.finance': 'Финансовая аналитика',
    'features.finance.desc': 'Интеграция с банками, анализ расходов и доходов в реальном времени',
    'features.social': 'Социальная сеть',
    'features.social.desc': 'Взаимодействие с партнёрами и клиентами в едином пространстве',
    'features.reports': 'Отчётность',
    'features.reports.desc': 'Автоматическое формирование финансовых и операционных отчётов',
    'features.marketplace': 'Торговая площадка',
    'features.marketplace.desc': 'Продажа товаров и услуг через встроенную платформу',
    'features.security': 'Безопасность',
    'features.security.desc': 'Надёжная защита данных и многоуровневая система доступа',

    // Auth
    'auth.welcome': 'Добро пожаловать в OpenBiz',
    'auth.login': 'Войдите в свой аккаунт',
    'auth.register': 'Регистрация в OpenBiz',
    'auth.register.desc': 'Создайте аккаунт для начала работы',
    'auth.business': 'Бизнес',
    'auth.client': 'Клиент',
    'auth.company.email': 'Email компании',
    'auth.company.name': 'Название компании',
    'auth.company.phone': 'Телефон',
    'auth.company.password': 'Пароль',
    'auth.client.name': 'Имя',
    'auth.client.email': 'Email',
    'auth.client.phone': 'Телефон',
    'auth.client.password': 'Пароль',
    'auth.login.business': 'Войти в бизнес-кабинет',
    'auth.login.client': 'Войти в кабинет клиента',
    'auth.create.business': 'Создать бизнес-аккаунт',
    'auth.create.client': 'Создать аккаунт клиента',
    'auth.no.account': 'Нет аккаунта?',
    'auth.have.account': 'Уже есть аккаунт?',
    'auth.register.link': 'Зарегистрироваться',
    'auth.login.link': 'Войти',

    // Dashboard
    'dashboard.title': 'Панель управления',
    'dashboard.welcome': 'Добро пожаловать в OpenBiz! Вот краткий обзор вашего бизнеса',
    'dashboard.assets': 'Активы',
    'dashboard.balance': 'Баланс',
    'dashboard.orders': 'Заказы',
    'dashboard.clients': 'Клиенты',
    'dashboard.quick.actions': 'Быстрые действия',
    'dashboard.quick.actions.desc': 'Переход к основным разделам',
    'dashboard.manage.assets': 'Управление активами',
    'dashboard.manage.assets.desc': 'Добавить или изменить технику',
    'dashboard.finance.title': 'Финансы',
    'dashboard.finance.desc': 'Просмотр транзакций и отчётов',
    'dashboard.social.title': 'Социальная сеть',
    'dashboard.social.desc': 'Публикации и взаимодействие',
    'dashboard.reports.title': 'Отчёты',
    'dashboard.reports.desc': 'Создать новый отчёт',
    'dashboard.notifications': 'Последние уведомления',
    'dashboard.notifications.desc': 'Важные события и новости',
    'dashboard.notification.update': 'Новое обновление платформы',
    'dashboard.notification.update.desc': 'Добавлены новые функции аналитики',
    'dashboard.notification.data': 'Требуется обновление данных',
    'dashboard.notification.data.desc': 'Проверьте информацию о компании',
    'dashboard.time.hours': 'часа назад',
    'dashboard.time.days': 'день назад',
  },
  en: {
    // Header
    'header.dashboard': 'Dashboard',
    'header.business': 'Business',
    'header.social': 'Social',
    'header.profile': 'Profile',
    'header.settings': 'Settings',
    'header.logout': 'Logout',
    'header.russian': 'Русский',
    'header.english': 'English',
    'header.chinese': '中文',

    // Hero
    'hero.title': 'Manage your business with',
    'hero.transparency': 'transparency',
    'hero.trust': 'trust',
    'hero.subtitle': 'OpenBiz — platform for managing assets, finances and client interactions in a unified space',
    'hero.feature1': 'Full transparency',
    'hero.feature2': 'Easy interaction',
    'hero.feature3': 'Complete trust',
    'hero.cta': 'Start for free',

    // Features
    'features.title': 'Everything for your business',
    'features.subtitle': 'Comprehensive solution for company management and development',
    'features.assets': 'Asset management',
    'features.assets.desc': 'Full control over equipment, machinery and company property',
    'features.finance': 'Financial analytics',
    'features.finance.desc': 'Bank integration, real-time expense and income analysis',
    'features.social': 'Social network',
    'features.social.desc': 'Interaction with partners and clients in a unified space',
    'features.reports': 'Reporting',
    'features.reports.desc': 'Automatic generation of financial and operational reports',
    'features.marketplace': 'Marketplace',
    'features.marketplace.desc': 'Selling goods and services through integrated platform',
    'features.security': 'Security',
    'features.security.desc': 'Reliable data protection and multi-level access system',

    // Auth
    'auth.welcome': 'Welcome to OpenBiz',
    'auth.login': 'Sign in to your account',
    'auth.register': 'Register in OpenBiz',
    'auth.register.desc': 'Create an account to get started',
    'auth.business': 'Business',
    'auth.client': 'Client',
    'auth.company.email': 'Company email',
    'auth.company.name': 'Company name',
    'auth.company.phone': 'Phone',
    'auth.company.password': 'Password',
    'auth.client.name': 'Name',
    'auth.client.email': 'Email',
    'auth.client.phone': 'Phone',
    'auth.client.password': 'Password',
    'auth.login.business': 'Sign in to business account',
    'auth.login.client': 'Sign in to client account',
    'auth.create.business': 'Create business account',
    'auth.create.client': 'Create client account',
    'auth.no.account': 'Don\'t have an account?',
    'auth.have.account': 'Already have an account?',
    'auth.register.link': 'Sign up',
    'auth.login.link': 'Sign in',

    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.welcome': 'Welcome to OpenBiz! Here\'s a quick overview of your business',
    'dashboard.assets': 'Assets',
    'dashboard.balance': 'Balance',
    'dashboard.orders': 'Orders',
    'dashboard.clients': 'Clients',
    'dashboard.quick.actions': 'Quick actions',
    'dashboard.quick.actions.desc': 'Navigate to main sections',
    'dashboard.manage.assets': 'Asset management',
    'dashboard.manage.assets.desc': 'Add or modify equipment',
    'dashboard.finance.title': 'Finance',
    'dashboard.finance.desc': 'View transactions and reports',
    'dashboard.social.title': 'Social network',
    'dashboard.social.desc': 'Posts and interactions',
    'dashboard.reports.title': 'Reports',
    'dashboard.reports.desc': 'Create new report',
    'dashboard.notifications': 'Recent notifications',
    'dashboard.notifications.desc': 'Important events and news',
    'dashboard.notification.update': 'New platform update',
    'dashboard.notification.update.desc': 'New analytics features added',
    'dashboard.notification.data': 'Data update required',
    'dashboard.notification.data.desc': 'Check company information',
    'dashboard.time.hours': 'hours ago',
    'dashboard.time.days': 'day ago',
  },
  zh: {
    // Header
    'header.dashboard': '仪表板',
    'header.business': '商业',
    'header.social': '社交',
    'header.profile': '个人资料',
    'header.settings': '设置',
    'header.logout': '退出',
    'header.russian': 'Русский',
    'header.english': 'English',
    'header.chinese': '中文',

    // Hero
    'hero.title': '通过以下方式管理您的业务',
    'hero.transparency': '透明度',
    'hero.trust': '信任',
    'hero.subtitle': 'OpenBiz — 在统一空间中管理资产、财务和客户互动的平台',
    'hero.feature1': '完全透明',
    'hero.feature2': '轻松互动',
    'hero.feature3': '完全信任',
    'hero.cta': '免费开始',

    // Features
    'features.title': '您业务所需的一切',
    'features.subtitle': '公司管理和发展的综合解决方案',
    'features.assets': '资产管理',
    'features.assets.desc': '全面控制设备、机械和公司财产',
    'features.finance': '财务分析',
    'features.finance.desc': '银行集成，实时费用和收入分析',
    'features.social': '社交网络',
    'features.social.desc': '在统一空间中与合作伙伴和客户互动',
    'features.reports': '报告',
    'features.reports.desc': '自动生成财务和运营报告',
    'features.marketplace': '市场',
    'features.marketplace.desc': '通过集成平台销售商品和服务',
    'features.security': '安全',
    'features.security.desc': '可靠的数据保护和多级访问系统',

    // Auth
    'auth.welcome': '欢迎来到OpenBiz',
    'auth.login': '登录您的账户',
    'auth.register': '在OpenBiz注册',
    'auth.register.desc': '创建账户开始使用',
    'auth.business': '商业',
    'auth.client': '客户',
    'auth.company.email': '公司邮箱',
    'auth.company.name': '公司名称',
    'auth.company.phone': '电话',
    'auth.company.password': '密码',
    'auth.client.name': '姓名',
    'auth.client.email': '邮箱',
    'auth.client.phone': '电话',
    'auth.client.password': '密码',
    'auth.login.business': '登录商业账户',
    'auth.login.client': '登录客户账户',
    'auth.create.business': '创建商业账户',
    'auth.create.client': '创建客户账户',
    'auth.no.account': '没有账户？',
    'auth.have.account': '已有账户？',
    'auth.register.link': '注册',
    'auth.login.link': '登录',

    // Dashboard
    'dashboard.title': '仪表板',
    'dashboard.welcome': '欢迎来到OpenBiz！这是您业务的快速概览',
    'dashboard.assets': '资产',
    'dashboard.balance': '余额',
    'dashboard.orders': '订单',
    'dashboard.clients': '客户',
    'dashboard.quick.actions': '快速操作',
    'dashboard.quick.actions.desc': '导航到主要部分',
    'dashboard.manage.assets': '资产管理',
    'dashboard.manage.assets.desc': '添加或修改设备',
    'dashboard.finance.title': '财务',
    'dashboard.finance.desc': '查看交易和报告',
    'dashboard.social.title': '社交网络',
    'dashboard.social.desc': '发布和互动',
    'dashboard.reports.title': '报告',
    'dashboard.reports.desc': '创建新报告',
    'dashboard.notifications': '最近通知',
    'dashboard.notifications.desc': '重要事件和新闻',
    'dashboard.notification.update': '新平台更新',
    'dashboard.notification.update.desc': '添加了新的分析功能',
    'dashboard.notification.data': '需要数据更新',
    'dashboard.notification.data.desc': '检查公司信息',
    'dashboard.time.hours': '小时前',
    'dashboard.time.days': '天前',
  },
} as const;

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('ru');

  // Загружаем язык из localStorage при инициализации
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['ru', 'en', 'zh'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
