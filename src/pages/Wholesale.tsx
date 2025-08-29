import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Users, 
  Truck,
  Calculator,
  Phone,
  Mail,
  FileText,
  CheckCircle,
  TrendingDown,
  Clock,
  Shield
} from 'lucide-react';

const Wholesale = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Оптовые продажи</h1>
            <p className="text-xl text-blue-100 mb-8">
              Специальные условия для ресторанов, кафе, магазинов и других бизнесов. 
              Качественные фермерские продукты по выгодным ценам
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <TrendingDown className="h-4 w-4 mr-2" />
                Скидки до 30%
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Truck className="h-4 w-4 mr-2" />
                Бесплатная доставка
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                Регулярные поставки
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Преимущества оптового сотрудничества</h2>
            <p className="text-lg text-gray-600">Почему бизнес выбирает ФермаДом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Выгодные цены</h3>
                <p className="text-gray-600 text-sm">
                  Скидки от 15% до 30% в зависимости от объема заказа
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Гарантия качества</h3>
                <p className="text-gray-600 text-sm">
                  Строгий контроль качества и возможность возврата некачественной продукции
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Регулярные поставки</h3>
                <p className="text-gray-600 text-sm">
                  Настройте график поставок под ваши потребности
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Логистика</h3>
                <p className="text-gray-600 text-sm">
                  Собственная служба доставки с соблюдением холодовой цепи
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Документооборот</h3>
                <p className="text-gray-600 text-sm">
                  Полный пакет документов и отчетность для вашей бухгалтерии
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Персональный менеджер</h3>
                <p className="text-gray-600 text-sm">
                  Индивидуальный подход и персональный менеджер для каждого клиента
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Тарифы для бизнеса</h2>
            <p className="text-lg text-gray-600">Выберите подходящий тариф для вашего бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Стартовый</CardTitle>
                <CardDescription className="text-center">Для небольших кафе и ресторанов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
                  <div className="text-gray-600">скидка от розничной цены</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Минимальный заказ: 5,000₽</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Доставка 2-3 раза в неделю</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Отсрочка платежа 7 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Базовая отчетность</span>
                  </div>
                </div>
                <Button className="w-full">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-500 border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-center">Бизнес</CardTitle>
                <CardDescription className="text-center">Для средних предприятий</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                  <div className="text-gray-600">скидка от розничной цены</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Минимальный заказ: 15,000₽</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Ежедневная доставка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Отсрочка платежа 14 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Персональный менеджер</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Расширенная отчетность</span>
                  </div>
                </div>
                <Button className="w-full">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Корпоративный</CardTitle>
                <CardDescription className="text-center">Для крупных сетей и предприятий</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                  <div className="text-gray-600">скидка от розничной цены</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Минимальный заказ: 50,000₽</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Гибкий график доставки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Отсрочка платежа 30 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Выделенный менеджер</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Индивидуальные условия</span>
                  </div>
                </div>
                <Button className="w-full">Обсудить условия</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Заявка на оптовое сотрудничество</h2>
              <p className="text-lg text-gray-600">Заполните форму, и мы свяжемся с вами в течение дня</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Информация о компании</h3>
                    
                    <div>
                      <Label htmlFor="companyName">Название компании *</Label>
                      <Input id="companyName" placeholder="ООО Ресторан" />
                    </div>

                    <div>
                      <Label htmlFor="businessType">Тип бизнеса *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restaurant">Ресторан</SelectItem>
                          <SelectItem value="cafe">Кафе</SelectItem>
                          <SelectItem value="retail">Розничный магазин</SelectItem>
                          <SelectItem value="catering">Кейтеринг</SelectItem>
                          <SelectItem value="hotel">Отель</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="inn">ИНН *</Label>
                      <Input id="inn" placeholder="1234567890" />
                    </div>

                    <div>
                      <Label htmlFor="address">Юридический адрес *</Label>
                      <Textarea id="address" placeholder="Полный адрес компании" />
                    </div>
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Контактное лицо</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Имя *</Label>
                        <Input id="firstName" placeholder="Иван" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Фамилия *</Label>
                        <Input id="lastName" placeholder="Иванов" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="position">Должность *</Label>
                      <Input id="position" placeholder="Директор по закупкам" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="director@company.ru" />
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Дополнительная информация</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="monthlyVolume">Планируемый месячный объем закупок</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите объем" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">До 50,000₽</SelectItem>
                          <SelectItem value="medium">50,000₽ - 200,000₽</SelectItem>
                          <SelectItem value="large">200,000₽ - 500,000₽</SelectItem>
                          <SelectItem value="enterprise">Более 500,000₽</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="deliveryFrequency">Частота поставок</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите частоту" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Ежедневно</SelectItem>
                          <SelectItem value="weekly">2-3 раза в неделю</SelectItem>
                          <SelectItem value="biweekly">1 раз в неделю</SelectItem>
                          <SelectItem value="monthly">По запросу</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="products">Интересующие категории продуктов</Label>
                    <Textarea 
                      id="products" 
                      placeholder="Опишите, какие продукты вас интересуют..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="comments">Дополнительные комментарии</Label>
                    <Textarea 
                      id="comments" 
                      placeholder="Особые требования, пожелания..."
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button size="lg" className="px-12">
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Истории успеха</h2>
            <p className="text-lg text-gray-600">Наши партнеры рассказывают о сотрудничестве</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Building className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Ресторан "Seasons"</h3>
                    <p className="text-sm text-gray-600">Премиальная кухня, Москва</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Сотрудничаем с ФермаДом уже 2 года. Качество продуктов всегда на высоте, 
                  а персональный менеджер помогает подобрать лучшие сезонные ингредиенты для нашего меню."
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Игорь Петров</span>
                  <span className="text-sm text-gray-500">— Шеф-повар</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Building className="h-8 w-8 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Сеть "Здоровое питание"</h3>
                    <p className="text-sm text-gray-600">15 магазинов, Подмосковье</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "ФермаДом стал нашим основным поставщиком органических продуктов. 
                  Клиенты отмечают высокое качество, а мы получаем стабильные поставки по выгодным ценам."
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Мария Смирнова</span>
                  <span className="text-sm text-gray-500">— Директор по закупкам</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Готовы начать сотрудничество?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Свяжитесь с нашим отделом оптовых продаж для обсуждения индивидуальных условий
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Позвоните нам</h3>
                  <p className="text-gray-600 mb-2">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-500">Пн-Пт: 9:00 - 18:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Напишите нам</h3>
                  <p className="text-gray-600 mb-2">wholesale@fermadom.ru</p>
                  <p className="text-sm text-gray-500">Ответим в течение 2 часов</p>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="px-12">
              <Calculator className="h-4 w-4 mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wholesale;