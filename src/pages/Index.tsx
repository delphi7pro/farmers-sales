import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  Truck, 
  Shield, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  Heart,
  Award,
  Clock
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Свежие фермерские продукты
                <span className="block text-green-200">прямо к вашему столу</span>
              </h1>
              <p className="text-xl text-green-100">
                Натуральные продукты от проверенных фермеров. 
                Быстрая доставка, гарантия качества, забота о природе.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-800 hover:bg-green-50" asChild>
                  <Link to="/products">
                    Смотреть продукты
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800" asChild>
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Свежие овощи и фрукты" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-green-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">100% натурально</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы заботимся о качестве продуктов, удобстве покупателей и поддержке местных фермеров
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Экологично</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Продукты выращены без химикатов и пестицидов, с заботой о природе
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Доставляем в день заказа по Москве и области
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Проверяем каждый продукт перед отправкой покупателю
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Поддержка фермеров</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Работаем напрямую с фермерами, обеспечивая им справедливую цену
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные продукты</h2>
              <p className="text-lg text-gray-600">Самые любимые продукты наших покупателей</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">
                Все продукты
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                name: "Органические помидоры",
                price: 350,
                image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400",
                farmer: "Ферма Солнечная",
                rating: 4.9
              },
              {
                id: 2,
                name: "Домашние яйца",
                price: 120,
                image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400",
                farmer: "Птицеферма Утренняя",
                rating: 4.8
              },
              {
                id: 3,
                name: "Фермерское молоко",
                price: 80,
                image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
                farmer: "Молочная ферма",
                rating: 4.9
              },
              {
                id: 4,
                name: "Свежая зелень",
                price: 150,
                image: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400",
                farmer: "Зеленая грядка",
                rating: 4.7
              }
            ].map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.farmer}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{product.price}₽</span>
                    <Button size="sm">В корзину</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Категории продуктов</h2>
            <p className="text-lg text-gray-600">Выберите категорию, которая вас интересует</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Овощи", image: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=300", count: 45 },
              { name: "Фрукты", image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=300", count: 32 },
              { name: "Молочные", image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300", count: 18 },
              { name: "Мясо", image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=300", count: 24 },
              { name: "Зелень", image: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300", count: 28 },
              { name: "Яйца", image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=300", count: 8 }
            ].map((category, index) => (
              <Link key={index} to="/products" className="group">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} товаров</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Farmers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши фермеры</h2>
            <p className="text-lg text-gray-600">Познакомьтесь с людьми, которые выращивают для вас лучшие продукты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Иван Петров",
                farm: "Ферма Солнечная",
                specialty: "Овощи и зелень",
                experience: "15 лет",
                image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Мария Сидорова",
                farm: "Молочная ферма",
                specialty: "Молочные продукты",
                experience: "12 лет",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Алексей Козлов",
                farm: "Птицеферма Утренняя",
                specialty: "Яйца и птица",
                experience: "8 лет",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((farmer, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img 
                      src={farmer.image} 
                      alt={farmer.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{farmer.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{farmer.farm}</p>
                  <p className="text-gray-600 mb-1">{farmer.specialty}</p>
                  <p className="text-sm text-gray-500">Опыт: {farmer.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/farmers">
                Все фермеры
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Гарантия качества</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Строгий отбор</h3>
                    <p className="text-gray-600">Каждый фермер проходит тщательную проверку и сертификацию</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Сертификаты качества</h3>
                    <p className="text-gray-600">Все продукты имеют необходимые сертификаты и документы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Свежесть</h3>
                    <p className="text-gray-600">Продукты доставляются в день сбора урожая</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6" asChild>
                <Link to="/quality">Узнать больше о качестве</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Контроль качества" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Забота об экологии</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Мы поддерживаем устойчивое сельское хозяйство и заботимся о будущем нашей планеты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Органическое земледелие</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Поддерживаем фермеров, использующих экологически чистые методы выращивания
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <CardTitle>Упаковка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Используем биоразлагаемую и перерабатываемую упаковку для доставки
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <CardTitle>Местное производство</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Работаем с местными фермерами, сокращая углеродный след от транспортировки
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/sustainability">
                Узнать больше об экологии
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы покупателей</h2>
            <p className="text-lg text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Смирнова",
                rating: 5,
                text: "Отличное качество продуктов! Овощи всегда свежие, доставка быстрая. Рекомендую всем!",
                avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
              },
              {
                name: "Михаил Волков",
                rating: 5,
                text: "Заказываю уже полгода. Молоко и яйца просто превосходные! Чувствуется разница с магазинными.",
                avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
              },
              {
                name: "Елена Кузнецова",
                rating: 5,
                text: "Очень удобно заказывать онлайн. Продукты всегда качественные, упаковка экологичная.",
                avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100"
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-900">{review.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/reviews">
                Все отзывы
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Получайте информацию о новых продуктах, сезонных предложениях и полезных рецептах
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-green-600 hover:bg-green-50 px-8">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Готовы попробовать?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Начните покупать свежие фермерские продукты уже сегодня. 
            Первая доставка со скидкой 15%!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/products">
                Начать покупки
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

      </div>
    </div>
  );
};

export default Index;
