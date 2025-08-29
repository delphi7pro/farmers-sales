import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Leaf, 
  Recycle, 
  Droplets,
  Sun,
  TreePine,
  Wind,
  Award,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Экологичность и устойчивость</h1>
            <p className="text-xl text-green-100 mb-8">
              Мы заботимся о планете и будущих поколениях, внедряя экологически 
              чистые технологии и поддерживая устойчивое сельское хозяйство
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Leaf className="h-4 w-4 mr-2" />
                100% органика
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Recycle className="h-4 w-4 mr-2" />
                Переработка отходов
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Sun className="h-4 w-4 mr-2" />
                Возобновляемая энергия
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наше влияние на экологию</h2>
            <p className="text-lg text-gray-600">Конкретные результаты нашей экологической деятельности</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">1,250</div>
                <div className="text-gray-600">Деревьев посажено</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                <div className="text-gray-600">Экономия воды</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">-45%</div>
                <div className="text-gray-600">Выбросов CO₂</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Переработка отходов</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши экологические инициативы</h2>
            <p className="text-lg text-gray-600">Программы и проекты для защиты окружающей среды</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>Органическое земледелие</CardTitle>
                    <CardDescription>Выращивание без химикатов</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Все наши фермеры используют только органические методы выращивания, 
                  отказавшись от синтетических удобрений и пестицидов.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Органических ферм</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Водосбережение</CardTitle>
                    <CardDescription>Эффективное использование воды</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Внедряем системы капельного орошения и сбора дождевой воды 
                  для минимизации водопотребления.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Экономия воды</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Sun className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle>Возобновляемая энергия</CardTitle>
                    <CardDescription>Солнечные панели и ветрогенераторы</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Переходим на возобновляемые источники энергии для снижения 
                  углеродного следа наших операций.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Зеленая энергия</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Recycle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>Переработка отходов</CardTitle>
                    <CardDescription>Безотходное производство</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Компостируем органические отходы и используем биоразлагаемую упаковку 
                  для минимизации воздействия на окружающую среду.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Переработка отходов</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Цели устойчивого развития</h2>
            <p className="text-lg text-gray-600">Наши обязательства на ближайшие годы</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                  <div>
                    <CardTitle>2025 год</CardTitle>
                    <CardDescription>Углеродная нейтральность</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Достичь полной углеродной нейтральности всех операций компании.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Прогресс</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>2026 год</CardTitle>
                    <CardDescription>100% органические фермы</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Перевести всех партнеров на органические методы производства.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Прогресс</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div>
                    <CardTitle>2027 год</CardTitle>
                    <CardDescription>Социальная ответственность</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Создать программу поддержки молодых фермеров и развития сельских территорий.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Прогресс</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты и награды</h2>
            <p className="text-lg text-gray-600">Признание нашей экологической деятельности</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Органик сертификат",
                description: "Международный стандарт органического производства",
                icon: Leaf,
                year: "2023"
              },
              {
                title: "Эко-продукт",
                description: "Сертификат экологически чистой продукции",
                icon: Award,
                year: "2023"
              },
              {
                title: "Зеленая компания",
                description: "Награда за вклад в защиту окружающей среды",
                icon: TreePine,
                year: "2022"
              },
              {
                title: "Устойчивое развитие",
                description: "Премия за лучшие практики устойчивого развития",
                icon: Target,
                year: "2022"
              }
            ].map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                  <Badge variant="outline">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Экологические практики</h2>
            <p className="text-lg text-gray-600">Как мы заботимся об окружающей среде</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Органическое земледелие</h3>
                  <p className="text-gray-600">
                    Поддерживаем фермеров, которые используют только натуральные методы выращивания, 
                    отказавшись от химических удобрений и пестицидов.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Водосберегающие технологии</h3>
                  <p className="text-gray-600">
                    Внедряем системы капельного орошения и сбора дождевой воды, 
                    что позволяет сократить потребление воды на 30%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Recycle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Переработка отходов</h3>
                  <p className="text-gray-600">
                    95% органических отходов перерабатывается в компост, 
                    а упаковка изготавливается из биоразлагаемых материалов.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sun className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Возобновляемая энергия</h3>
                  <p className="text-gray-600">
                    Устанавливаем солнечные панели на фермах и используем ветрогенераторы 
                    для обеспечения экологически чистой энергией.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TreePine className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Лесовосстановление</h3>
                  <p className="text-gray-600">
                    Участвуем в программах лесовосстановления и создания защитных лесополос 
                    вокруг сельскохозяйственных угодий.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wind className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Снижение выбросов</h3>
                  <p className="text-gray-600">
                    Оптимизируем логистические маршруты и используем электротранспорт 
                    для сокращения выбросов CO₂ на 45%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к экологическому движению</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Каждая покупка фермерских продуктов — это ваш вклад в защиту окружающей среды 
            и поддержку устойчивого сельского хозяйства
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              Начать покупки
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;