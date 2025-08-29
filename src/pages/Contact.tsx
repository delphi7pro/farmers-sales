import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Users,
  Truck,
  HelpCircle
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h1>
            <p className="text-lg text-gray-600">
              Мы всегда готовы помочь и ответить на ваши вопросы
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Напишите нам
                </CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input id="firstName" placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input id="lastName" placeholder="Введите вашу фамилию" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Тема обращения</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тему" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">Вопрос по заказу</SelectItem>
                      <SelectItem value="delivery">Доставка</SelectItem>
                      <SelectItem value="quality">Качество продукции</SelectItem>
                      <SelectItem value="partnership">Партнерство</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваш вопрос или предложение..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-500">Ежедневно 8:00 - 22:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@fermadom.ru</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Фермерская, 123</p>
                    <p className="text-sm text-gray-500">Офис и склад</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-gray-600">Пн-Вс: 8:00 - 22:00</p>
                    <p className="text-sm text-gray-500">Без выходных</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Специализированные отделы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Служба поддержки</p>
                    <p className="text-sm text-gray-600">support@fermadom.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Служба доставки</p>
                    <p className="text-sm text-gray-600">delivery@fermadom.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Партнерство</p>
                    <p className="text-sm text-gray-600">partners@fermadom.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Быстрые действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Заказать обратный звонок
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Онлайн-чат
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Часто задаваемые вопросы
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Как нас найти</CardTitle>
              <CardDescription>
                Наш офис и склад находятся в центре Москвы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Схема проезда</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>На автомобиле:</strong> Парковка бесплатная, 50 мест</p>
                    <p><strong>На метро:</strong> Станция "Фермерская", выход №3</p>
                    <p><strong>На автобусе:</strong> Остановка "Фермерская улица"</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Важно:</strong> Для посещения склада необходимо предварительно 
                      записаться по телефону +7 (495) 123-45-67
                    </p>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Интерактивная карта</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;