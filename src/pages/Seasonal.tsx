import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Snowflake, 
  Sun, 
  Flower,
  Leaf,
  Star,
  ShoppingCart,
  Heart,
  Clock,
  TrendingUp
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Seasonal = () => {
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

  const seasonalProducts = {
    winter: [
      {
        id: '1',
        name: 'Тепличные помидоры',
        price: 450,
        image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Ферма Солнечная',
        rating: 4.8,
        description: 'Сочные помидоры, выращенные в отапливаемых теплицах',
        available: true,
        peak: true
      },
      {
        id: '2',
        name: 'Зимняя капуста',
        price: 120,
        image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Овощная грядка',
        rating: 4.9,
        description: 'Хрустящая белокочанная капуста позднего сорта',
        available: true,
        peak: true
      },
      {
        id: '3',
        name: 'Корневой сельдерей',
        price: 280,
        image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Корнеплоды+',
        rating: 4.6,
        description: 'Ароматный корневой сельдерей для зимних супов',
        available: true,
        peak: false
      },
      {
        id: '4',
        name: 'Замороженные ягоды',
        price: 380,
        image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Ягодная поляна',
        rating: 4.7,
        description: 'Микс замороженных ягод: клубника, малина, черника',
        available: true,
        peak: false
      }
    ],
    spring: [
      {
        id: '5',
        name: 'Молодая зелень',
        price: 180,
        image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Зеленая грядка',
        rating: 4.9,
        description: 'Первая весенняя зелень: укроп, петрушка, салат',
        available: false,
        peak: true
      },
      {
        id: '6',
        name: 'Редис',
        price: 150,
        image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Весенний огород',
        rating: 4.8,
        description: 'Хрустящий весенний редис с грядки',
        available: false,
        peak: true
      }
    ],
    summer: [
      {
        id: '7',
        name: 'Летние помидоры',
        price: 250,
        image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Ферма Солнечная',
        rating: 4.9,
        description: 'Ароматные грунтовые помидоры',
        available: false,
        peak: true
      },
      {
        id: '8',
        name: 'Свежие ягоды',
        price: 420,
        image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Ягодная поляна',
        rating: 4.8,
        description: 'Клубника, малина, смородина с куста',
        available: false,
        peak: true
      }
    ],
    autumn: [
      {
        id: '9',
        name: 'Тыква',
        price: 180,
        image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Осенний урожай',
        rating: 4.7,
        description: 'Сладкая мускатная тыква',
        available: false,
        peak: true
      },
      {
        id: '10',
        name: 'Яблоки',
        price: 220,
        image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
        farmer: 'Яблоневый сад',
        rating: 4.8,
        description: 'Сочные осенние яблоки разных сортов',
        available: false,
        peak: true
      }
    ]
  };

  const currentSeason = 'winter';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Сезонные продукты</h1>
            <p className="text-xl text-orange-100 mb-8">
              Наслаждайтесь лучшими продуктами каждого сезона. Свежесть, вкус и максимум пользы 
              в нужное время года
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-3">
                <Snowflake className="h-5 w-5 mr-2" />
                Сейчас зима — время корнеплодов и тепличных овощей
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Current Season Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Хиты зимнего сезона</h2>
            <p className="text-lg text-gray-600">Самые популярные продукты этого времени года</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalProducts[currentSeason].filter(product => product.peak).map((product) => (
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
                  <Badge className="absolute top-2 left-2 bg-orange-600">
                    Сезонный хит
                  </Badge>
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
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-600">{product.price}₽</span>
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

      {/* Seasonal Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Календарь сезонности</h2>
            <p className="text-lg text-gray-600">Узнайте, когда какие продукты наиболее вкусны и полезны</p>
          </div>

          <Tabs defaultValue="winter" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="winter" className="flex items-center gap-2">
                <Snowflake className="h-4 w-4" />
                Зима
              </TabsTrigger>
              <TabsTrigger value="spring" className="flex items-center gap-2">
                <Flower className="h-4 w-4" />
                Весна
              </TabsTrigger>
              <TabsTrigger value="summer" className="flex items-center gap-2">
                <Sun className="h-4 w-4" />
                Лето
              </TabsTrigger>
              <TabsTrigger value="autumn" className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                Осень
              </TabsTrigger>
            </TabsList>

            <TabsContent value="winter" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seasonalProducts.winter.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {!product.available && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="secondary">Скоро в продаже</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-green-600 mb-2">{product.farmer}</p>
                      <p className="text-xs text-gray-600 mb-3">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-green-600">{product.price}₽</span>
                        {product.available ? (
                          <Button size="sm" onClick={() => addToCart(product)}>
                            В корзину
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled>
                            Недоступно
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="spring" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seasonalProducts.spring.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow opacity-75">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary">Весной 2024</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-green-600 mb-2">{product.farmer}</p>
                      <p className="text-xs text-gray-600 mb-3">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-400">{product.price}₽</span>
                        <Button size="sm" variant="outline" disabled>
                          <Clock className="h-4 w-4 mr-1" />
                          Скоро
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="summer" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seasonalProducts.summer.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow opacity-75">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary">Летом 2024</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-green-600 mb-2">{product.farmer}</p>
                      <p className="text-xs text-gray-600 mb-3">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-400">{product.price}₽</span>
                        <Button size="sm" variant="outline" disabled>
                          <Clock className="h-4 w-4 mr-1" />
                          Скоро
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="autumn" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seasonalProducts.autumn.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow opacity-75">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary">Осенью 2024</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-green-600 mb-2">{product.farmer}</p>
                      <p className="text-xs text-gray-600 mb-3">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-400">{product.price}₽</span>
                        <Button size="sm" variant="outline" disabled>
                          <Clock className="h-4 w-4 mr-1" />
                          Скоро
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits of Seasonal Eating */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Преимущества сезонного питания</h2>
            <p className="text-lg text-gray-600">Почему важно есть продукты по сезону</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Максимум пользы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Сезонные продукты содержат максимальное количество витаминов и минералов, 
                  так как созревают в естественных условиях.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Лучший вкус</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Продукты, собранные в сезон, имеют более насыщенный вкус и аромат 
                  по сравнению с тепличными аналогами.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Экологичность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Сезонное потребление снижает углеродный след и поддерживает 
                  естественные циклы природы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Calendar Info */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на сезонный календарь</h2>
            <p className="text-xl text-green-100 mb-8">
              Получайте уведомления о появлении новых сезонных продуктов и специальных предложениях
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              Подписаться на уведомления
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seasonal;