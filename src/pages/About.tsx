import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  Leaf,
  Truck,
  Shield,
  Clock
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">О компании ФермаДом</h1>
            <p className="text-xl text-green-100 mb-8">
              Мы объединяем лучших фермеров России, чтобы доставить вам самые свежие 
              и качественные продукты прямо к столу
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                150+ фермеров
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                5 лет на рынке
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Heart className="h-4 w-4 mr-2" />
                10000+ довольных клиентов
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ФермаДом был основан в 2019 году группой энтузиастов, которые верили в силу 
                  натуральных продуктов и поддержку местных производителей. Мы начали с небольшой 
                  команды и пяти фермерских хозяйств в Подмосковье.
                </p>
                <p>
                  Сегодня мы работаем с более чем 150 фермерами по всей России, доставляем 
                  продукты в 50 городов и гордимся тем, что помогаем людям питаться здоровой 
                  и вкусной едой.
                </p>
                <p>
                  Наша миссия остается неизменной: сделать качественные фермерские продукты 
                  доступными каждой семье, поддерживая при этом местных производителей и 
                  заботясь об экологии.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Наша история" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2019</div>
                  <div className="text-sm text-gray-600">Год основания</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Принципы, которыми мы руководствуемся в работе каждый день
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Экологичность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Поддерживаем устойчивое сельское хозяйство и заботимся о природе
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Строго контролируем качество каждого продукта от фермы до стола
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Забота</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Заботимся о здоровье наших клиентов и благополучии фермеров
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Честность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Прозрачно работаем с клиентами и справедливо с партнерами
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-lg text-gray-600">Люди, которые делают ФермаДом лучше каждый день</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей Иванов",
                position: "Основатель и CEO",
                description: "15 лет опыта в агробизнесе. Верит в силу натуральных продуктов.",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Мария Петрова",
                position: "Директор по качеству",
                description: "Агроном с 12-летним стажем. Отвечает за контроль качества продукции.",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Дмитрий Сидоров",
                position: "Руководитель логистики",
                description: "Эксперт в области холодовой цепи. Обеспечивает свежесть при доставке.",
                image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-lg text-gray-600">Цифры, которыми мы гордимся</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Фермеров-партнеров</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50</div>
              <div className="text-gray-600">Городов доставки</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-gray-600">Преимущества работы с ФермаДом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">
                  Доставляем продукты в день заказа. Собственная логистическая сеть 
                  с холодильными автомобилями.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Гарантия качества</h3>
                <p className="text-gray-600">
                  Многоступенчатый контроль качества. Возврат денег, если продукт 
                  не соответствует стандартам.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Максимальная свежесть</h3>
                <p className="text-gray-600">
                  Продукты поступают к нам в день сбора урожая. Соблюдаем холодовую 
                  цепь на всех этапах.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Поддержка 24/7</h3>
                <p className="text-gray-600">
                  Наша служба поддержки всегда готова помочь с выбором продуктов 
                  и решением любых вопросов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нам</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Станьте частью сообщества людей, которые выбирают качественные 
            и натуральные продукты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
              <Link to="/products">Начать покупки</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link to="/contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;