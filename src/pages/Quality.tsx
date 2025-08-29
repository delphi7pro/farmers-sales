import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Award, 
  CheckCircle,
  Microscope,
  Thermometer,
  Clock,
  Users,
  FileCheck,
  AlertTriangle,
  Star
} from 'lucide-react';

const Quality = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Стандарты качества</h1>
            <p className="text-xl text-blue-100 mb-8">
              Мы применяем самые строгие стандарты контроля качества на каждом этапе — 
              от фермы до вашего стола
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                ISO 22000
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                ХАССП
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <FileCheck className="h-4 w-4 mr-2" />
                Росконтроль
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Процесс контроля качества</h2>
            <p className="text-lg text-gray-600">Многоступенчатая система проверки продукции</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Отбор фермеров</h3>
                <p className="text-sm text-gray-600">
                  Тщательный отбор партнеров с проверкой сертификатов и методов производства
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Лабораторные тесты</h3>
                <p className="text-sm text-gray-600">
                  Проверка на содержание нитратов, пестицидов и других вредных веществ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Холодовая цепь</h3>
                <p className="text-sm text-gray-600">
                  Соблюдение температурного режима от сбора до доставки покупателю
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Финальная проверка</h3>
                <p className="text-sm text-gray-600">
                  Контроль качества перед упаковкой и отправкой заказа
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Показатели качества</h2>
            <p className="text-lg text-gray-600">Наши достижения в цифрах</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Удовлетворенность клиентов</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Общая оценка качества</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                  <Progress value={96} className="h-3" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Свежесть продуктов</span>
                    <span className="font-medium">4.9/5</span>
                  </div>
                  <Progress value={98} className="h-3" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Упаковка и доставка</span>
                    <span className="font-medium">4.7/5</span>
                  </div>
                  <Progress value={94} className="h-3" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Соответствие описанию</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                  <Progress value={96} className="h-3" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Операционные показатели</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Доставка в срок</span>
                    <span className="font-medium">99.2%</span>
                  </div>
                  <Progress value={99} className="h-3" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Прохождение контроля качества</span>
                    <span className="font-medium">98.7%</span>
                  </div>
                  <Progress value={99} className="h-3" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Возвраты по качеству</span>
                    <span className="font-medium">0.8%</span>
                  </div>
                  <Progress value={8} className="h-3" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Повторные покупки</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <Progress value={87} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты и стандарты</h2>
            <p className="text-lg text-gray-600">Международные стандарты качества и безопасности</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>ISO 22000</CardTitle>
                    <CardDescription>Система менеджмента безопасности пищевых продуктов</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Международный стандарт, обеспечивающий безопасность пищевых продуктов 
                  на всех этапах производственной цепи.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                  <div>
                    <CardTitle>ХАССП</CardTitle>
                    <CardDescription>Анализ рисков и критические контрольные точки</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Система предупреждения опасностей и контроля критических точек 
                  в производстве пищевых продуктов.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="h-8 w-8 text-purple-600" />
                  <div>
                    <CardTitle>Органик</CardTitle>
                    <CardDescription>Сертификат органического производства</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Подтверждает, что продукция выращена без использования 
                  синтетических удобрений и пестицидов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Команда контроля качества</h2>
            <p className="text-lg text-gray-600">Эксперты, которые следят за качеством продукции</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Мария Петрова",
                position: "Директор по качеству",
                experience: "12 лет в агропромышленности",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "Агроном с многолетним опытом, отвечает за разработку стандартов качества"
              },
              {
                name: "Дмитрий Козлов",
                position: "Главный технолог",
                experience: "15 лет в пищевой промышленности",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "Специалист по пищевым технологиям и безопасности продуктов"
              },
              {
                name: "Елена Смирнова",
                position: "Лаборант-аналитик",
                experience: "8 лет в лабораторной диагностике",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "Проводит химический анализ продукции и контроль безопасности"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Лабораторные исследования</h2>
            <p className="text-lg text-gray-600">Что мы проверяем в наших продуктах</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="h-5 w-5" />
                  Химический анализ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Нитраты</span>
                    <Badge variant="outline" className="text-green-600">Норма</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Пестициды</span>
                    <Badge variant="outline" className="text-green-600">Не обнаружены</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Тяжелые металлы</span>
                    <Badge variant="outline" className="text-green-600">Норма</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Радиация</span>
                    <Badge variant="outline" className="text-green-600">Норма</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Микробиологический контроль
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Патогенные бактерии</span>
                    <Badge variant="outline" className="text-green-600">Не обнаружены</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Кишечная палочка</span>
                    <Badge variant="outline" className="text-green-600">Норма</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Сальмонелла</span>
                    <Badge variant="outline" className="text-green-600">Не обнаружена</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Плесень и дрожжи</span>
                    <Badge variant="outline" className="text-green-600">Норма</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Guarantees */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши гарантии</h2>
            <p className="text-lg text-gray-600">Что мы гарантируем каждому покупателю</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Гарантия свежести</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Если продукт не соответствует стандартам свежести, мы вернем деньги или заменим товар
                </p>
                <Badge className="bg-blue-600">100% гарантия</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Срок годности</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Гарантируем минимум 70% срока годности на момент доставки для всех продуктов
                </p>
                <Badge className="bg-green-600">70% срока</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Качество вкуса</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Если вкус продукта вас не устроил, мы вернем деньги без лишних вопросов
                </p>
                <Badge className="bg-purple-600">Без вопросов</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Статистика качества за 2023 год</h2>
            <p className="text-lg text-gray-600">Результаты нашей работы</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.2%</div>
              <div className="text-gray-600">Продуктов прошли контроль</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">0.8%</div>
              <div className="text-gray-600">Возвратов по качеству</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600">Средняя оценка качества</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24ч</div>
              <div className="text-gray-600">Максимальный срок доставки</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;