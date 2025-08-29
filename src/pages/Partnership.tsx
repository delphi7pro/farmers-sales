import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Handshake, 
  Users, 
  TrendingUp,
  Award,
  Phone,
  Mail,
  FileText,
  CheckCircle,
  Target,
  Globe,
  Truck,
  Shield
} from 'lucide-react';

const Partnership = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Партнерство с ФермаДом</h1>
            <p className="text-xl text-purple-100 mb-8">
              Присоединяйтесь к нашей сети успешных партнеров и развивайте свой бизнес 
              вместе с лидером рынка фермерских продуктов
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                150+ партнеров
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                +40% роста продаж
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                5 лет на рынке
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Виды партнерства</h2>
            <p className="text-lg text-gray-600">Выберите подходящий формат сотрудничества</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Фермеры-поставщики</CardTitle>
                <CardDescription>Станьте поставщиком продукции</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Гарантированный сбыт продукции</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Справедливые цены</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Помощь в сертификации</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Маркетинговая поддержка</span>
                  </div>
                </div>
                <Button className="w-full">Стать поставщиком</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Региональные представители</CardTitle>
                <CardDescription>Развивайте бизнес в своем регионе</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Эксклюзивная территория</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Обучение и поддержка</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Готовая бизнес-модель</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Высокая маржинальность</span>
                  </div>
                </div>
                <Button className="w-full">Стать представителем</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Логистические партнеры</CardTitle>
                <CardDescription>Обеспечьте доставку в вашем регионе</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Стабильный поток заказов</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Конкурентные тарифы</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Техническая поддержка</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Страхование грузов</span>
                  </div>
                </div>
                <Button className="w-full">Стать партнером</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Требования к партнерам</h2>
            <p className="text-lg text-gray-600">Что мы ожидаем от наших партнеров</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Для фермеров
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Сертификаты качества</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Опыт работы от 2 лет</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Стабильные объемы производства</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Соблюдение стандартов упаковки</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Для представителей
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Опыт в продажах</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Знание местного рынка</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Готовность к инвестициям</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Команда от 3 человек</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Для логистики
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Холодильный транспорт</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Лицензии на перевозку</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Страхование грузов</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Опыт работы с продуктами</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Заявка на партнерство</h2>
              <p className="text-lg text-gray-600">Расскажите о себе, и мы обсудим возможности сотрудничества</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Partnership Type */}
                  <div>
                    <Label htmlFor="partnershipType">Тип партнерства *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип партнерства" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="farmer">Фермер-поставщик</SelectItem>
                        <SelectItem value="representative">Региональный представитель</SelectItem>
                        <SelectItem value="logistics">Логистический партнер</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Company Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyName">Название компании/ИП *</Label>
                      <Input id="companyName" placeholder="ООО Ферма или ИП Иванов" />
                    </div>
                    <div>
                      <Label htmlFor="inn">ИНН *</Label>
                      <Input id="inn" placeholder="1234567890" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Адрес *</Label>
                    <Textarea id="address" placeholder="Полный адрес компании/фермы" />
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="contactName">Контактное лицо *</Label>
                      <Input id="contactName" placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <Label htmlFor="position">Должность *</Label>
                      <Input id="position" placeholder="Директор" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="director@company.ru" />
                    </div>
                  </div>

                  {/* Business Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="experience">Опыт работы (лет) *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите опыт" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 года</SelectItem>
                          <SelectItem value="3-5">3-5 лет</SelectItem>
                          <SelectItem value="6-10">6-10 лет</SelectItem>
                          <SelectItem value="10+">Более 10 лет</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="volume">Месячный объем производства/продаж</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите объем" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">До 100,000₽</SelectItem>
                          <SelectItem value="medium">100,000₽ - 500,000₽</SelectItem>
                          <SelectItem value="large">500,000₽ - 1,000,000₽</SelectItem>
                          <SelectItem value="enterprise">Более 1,000,000₽</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="products">Продукция/услуги *</Label>
                    <Textarea 
                      id="products" 
                      placeholder="Опишите, что вы производите или какие услуги предоставляете..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Почему хотите стать партнером ФермаДом?</Label>
                    <Textarea 
                      id="motivation" 
                      placeholder="Расскажите о ваших целях и ожиданиях от партнерства..."
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button size="lg" className="px-12">
                      <FileText className="h-4 w-4 mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Истории успеха наших партнеров</h2>
            <p className="text-lg text-gray-600">Как партнерство с ФермаДом изменило их бизнес</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Алексей Иванов"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Алексей Иванов</h3>
                    <p className="text-sm text-gray-600">Ферма "Солнечная", партнер с 2020 года</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Благодаря партнерству с ФермаДом мы увеличили продажи на 60% и получили стабильный канал сбыта. 
                  Теперь можем планировать производство на месяцы вперед."
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <Badge className="bg-green-600">+60% продаж</Badge>
                  <Badge variant="outline">4 года партнерства</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Мария Петрова"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Мария Петрова</h3>
                    <p className="text-sm text-gray-600">Региональный представитель, Тула</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Открыла представительство ФермаДом в Туле 2 года назад. За это время построила успешный бизнес 
                  с командой из 8 человек и стабильным доходом."
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <Badge className="bg-blue-600">8 сотрудников</Badge>
                  <Badge variant="outline">2 года работы</Badge>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Готовы обсудить партнерство?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Свяжитесь с нашим отделом развития партнерских отношений
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Позвоните нам</h3>
                  <p className="text-gray-600 mb-2">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-500">доб. 123 (отдел партнерства)</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Напишите нам</h3>
                  <p className="text-gray-600 mb-2">partners@fermadom.ru</p>
                  <p className="text-sm text-gray-500">Ответим в течение 4 часов</p>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="px-12">
              <Handshake className="h-4 w-4 mr-2" />
              Стать партнером
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;