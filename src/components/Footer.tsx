import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold">ФермаДом</h3>
                <p className="text-sm text-gray-400">Натуральные продукты</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Мы доставляем самые свежие и качественные фермерские продукты 
              прямо к вашему столу. Поддерживаем местных производителей и 
              заботимся об экологии.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Быстрые ссылки</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                О нас
              </Link>
              <Link to="/products" className="block text-gray-300 hover:text-white transition-colors">
                Продукты
              </Link>
              <Link to="/farmers" className="block text-gray-300 hover:text-white transition-colors">
                Наши фермеры
              </Link>
              <Link to="/recipes" className="block text-gray-300 hover:text-white transition-colors">
                Рецепты
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors">
                Блог
              </Link>
              <Link to="/sustainability" className="block text-gray-300 hover:text-white transition-colors">
                Экологичность
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Обслуживание</h4>
            <div className="space-y-2">
              <Link to="/delivery" className="block text-gray-300 hover:text-white transition-colors">
                Доставка
              </Link>
              <Link to="/faq" className="block text-gray-300 hover:text-white transition-colors">
                Вопросы и ответы
              </Link>
              <Link to="/reviews" className="block text-gray-300 hover:text-white transition-colors">
                Отзывы
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Контакты
              </Link>
              <Link to="/wholesale" className="block text-gray-300 hover:text-white transition-colors">
                Оптовые продажи
              </Link>
              <Link to="/partnership" className="block text-gray-300 hover:text-white transition-colors">
                Партнерство
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@fermadom.ru</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Москва, ул. Фермерская, 123</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h5 className="font-medium">Подписка на новости</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Ваш email" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-green-600 hover:bg-green-700">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 ФермаДом. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Файлы cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;