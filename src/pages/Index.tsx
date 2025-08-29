import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Leaf, 
  Truck, 
  Shield, 
  Users, 
  Star,
  ArrowRight,
  ShoppingCart,
  Heart,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Index = () => {
  const { dispatch } = useCart();

  const addToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        farmer: product.farmer
      }
    });
  };

  const featuredProducts = [
    {
      id: '1',
      name: 'Органические помидоры',
      price: 350,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Ферма Солнечная',
      rating: 4.9
    },
    {
      id: '2',
      name: 'Домашние яйца',
      price: 120,
      image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Птицеферма Утренняя',
      rating: 4.8
    },
    {
      id: '3',
      name: 'Фермерское молоко',
      price: 80,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Молочная ферма',
      rating: 4.9
    },
    {
      id: '4',
      name: 'Свежая зелень',
      price: 150,
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Зеленая грядка',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Свежие фермерские продукты
              <span className="block text-green-200">прямо к вашему столу</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Натуральные продукты от лучших фермеров России. Доставляем свежесть 
              и качество каждый день.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
                <Link to="/products">
                  Начать покупки
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
                <Link to="/about">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Преимущества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают ФермаДом</h2>
            <p className="text-lg text-gray-600">Преимущества, которые делают нас лучшими</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>100% Экологично</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Все продукты выращены без химикатов и пестицидов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Доставляем в день заказа по Москве и области
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Возврат денег, если продукт не соответствует стандартам
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Поддержка фермеров</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Помогаем местным производителям развивать бизнес
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Популярные продукты */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные продукты</h2>
              <p className="text-lg text-gray-600">Товары, которые покупают чаще всего</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">
                Все продукты
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Link to={`/products/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
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
                  <CardTitle className="text-lg">
                    <Link to={`/products/${product.id}`} className="hover:text-green-600">
                      {product.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{product.farmer}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{product.price}₽</span>
                    <Button size="sm" onClick={() => addToCart(product)}>
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Категории продуктов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Категории продуктов</h2>
            <p className="text-lg text-gray-600">Выберите то, что вам нужно</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Овощи', image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=300', count: 45 },
              { name: 'Фрукты', image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=300', count: 32 },
              { name: 'Молочные', image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300', count: 18 },
              { name: 'Мясо', image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=300', count: 24 },
              { name: 'Зелень', image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300', count: 28 },
              { name: 'Ягоды', image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=300', count: 15 }
            ].map((category, index) => (
              <Link key={index} to="/products" className="group">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} товаров</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Наши фермеры */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши фермеры</h2>
            <p className="text-lg text-gray-600">Знакомьтесь с людьми, которые выращивают для вас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей Иванов",
                farm: "Ферма Солнечная",
                experience: "15 лет",
                speciality: "Органические овощи",
                image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Мария Петрова",
                farm: "Молочная ферма",
                experience: "12 лет",
                speciality: "Молочные продукты",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Дмитрий Сидоров",
                farm: "Птицеферма Утренняя",
                experience: "8 лет",
                speciality: "Домашние яйца",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((farmer, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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
                  <p className="text-sm text-gray-600 mb-1">Опыт: {farmer.experience}</p>
                  <p className="text-sm text-gray-600 mb-4">{farmer.speciality}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/farmers">Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Гарантия качества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Гарантия качества</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Контроль на каждом этапе</h3>
                    <p className="text-gray-600">
                      Проверяем качество от фермы до вашего стола. Многоступенчатый контроль качества.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Сертификация</h3>
                    <p className="text-gray-600">
                      Все наши фермеры имеют необходимые сертификаты качества и безопасности.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Максимальная свежесть</h3>
                    <p className="text-gray-600">
                      Продукты поступают к нам в день сбора урожая и доставляются в течение 24 часов.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Качество продуктов" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Экологичность */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Забота об экологии</h2>
            <p className="text-lg text-gray-600 mb-8">
              Мы поддерживаем устойчивое сельское хозяйство и заботимся о будущем планеты
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">0</div>
                <div className="text-gray-600">Химических удобрений</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Биоразлагаемая упаковка</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">-30%</div>
                <div className="text-gray-600">Углеродный след</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Отзывы покупателей */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы наших покупателей</h2>
            <p className="text-lg text-gray-600">Что говорят о нас клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Смирнова",
                text: "Отличное качество продуктов! Заказываю уже полгода, всегда свежие овощи и быстрая доставка.",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100"
              },
              {
                name: "Михаил Петров",
                text: "Наконец-то нашел место, где можно купить действительно натуральные продукты. Рекомендую!",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
              },
              {
                name: "Елена Козлова",
                text: "Прекрасный сервис! Особенно нравится возможность узнать о фермере, который вырастил продукты.",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=100"
              }
            ].map((review, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-center gap-3">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Подписка на новости */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Будьте в курсе новинок</h2>
            <p className="text-lg text-gray-300 mb-8">
              Подпишитесь на нашу рассылку и получайте информацию о новых продуктах, 
              сезонных предложениях и специальных скидках
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Введите ваш email" 
                className="bg-gray-800 border-gray-700 text-white flex-1"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                Подписаться
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Отписаться можно в любое время. Мы не передаем данные третьим лицам.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Призыв к действию */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Начните питаться правильно уже сегодня</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам семей, которые выбрали здоровое питание 
            с фермерскими продуктами от ФермаДом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
              <Link to="/products">
                Сделать первый заказ
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link to="/contact">
                Связаться с нами
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;