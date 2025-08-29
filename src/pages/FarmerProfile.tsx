import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Award, 
  Star,
  Calendar,
  Phone,
  Mail,
  Leaf,
  Users,
  ShoppingCart,
  Heart,
  ArrowLeft
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const FarmerProfile = () => {
  const { id } = useParams();
  const { dispatch } = useCart();

  // Mock farmer data
  const farmer = {
    id: '1',
    name: 'Алексей Иванов',
    farmName: 'Ферма Солнечная',
    location: 'Московская область, Подольск',
    experience: 15,
    speciality: 'Органические овощи',
    rating: 4.9,
    reviews: 124,
    products: 23,
    image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
    farmImages: [
      'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Семейная ферма, основанная в 2009 году. Мы специализируемся на выращивании органических овощей без использования химических удобрений и пестицидов. Наша философия — работать в гармонии с природой.',
    certifications: ['Органик', 'Эко-продукт', 'Без ГМО'],
    established: 2009,
    farmSize: '50 га',
    employees: 12,
    phone: '+7 (495) 123-45-67',
    email: 'alexey@solnechnaya-ferma.ru',
    story: 'Алексей начал заниматься сельским хозяйством после работы в IT-сфере. Переехав в деревню, он решил создать ферму, которая будет производить действительно качественные и полезные продукты. Сегодня ферма "Солнечная" — это современное хозяйство, которое сочетает традиционные методы земледелия с инновационными технологиями.',
    achievements: [
      'Лучший органический производитель 2023',
      'Сертификат качества "Экопродукт"',
      'Победитель конкурса "Фермер года"'
    ]
  };

  const farmerProducts = [
    {
      id: '1',
      name: 'Органические помидоры',
      price: 350,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9,
      inStock: true
    },
    {
      id: '7',
      name: 'Свежие огурцы',
      price: 280,
      image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      inStock: true
    },
    {
      id: '8',
      name: 'Болгарский перец',
      price: 420,
      image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      inStock: true
    },
    {
      id: '9',
      name: 'Морковь молодая',
      price: 180,
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9,
      inStock: false
    }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Анна Смирнова',
      rating: 5,
      date: '2024-01-10',
      text: 'Отличные овощи! Всегда свежие и вкусные. Алексей — настоящий профессионал своего дела.',
      verified: true
    },
    {
      id: 2,
      author: 'Михаил Петров',
      rating: 5,
      date: '2024-01-08',
      text: 'Покупаю продукцию этой фермы уже второй год. Качество всегда на высоте!',
      verified: true
    },
    {
      id: 3,
      author: 'Елена Козлова',
      rating: 4,
      date: '2024-01-05',
      text: 'Хорошие овощи, но хотелось бы больше разнообразия в ассортименте.',
      verified: false
    }
  ];

  const addToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        farmer: farmer.farmName
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-green-600">Главная</Link>
          <span>/</span>
          <Link to="/farmers" className="hover:text-green-600">Фермеры</Link>
          <span>/</span>
          <span className="text-gray-900">{farmer.farmName}</span>
        </nav>

        <Button variant="outline" className="mb-6" asChild>
          <Link to="/farmers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Вернуться к фермерам
          </Link>
        </Button>

        {/* Farmer Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-6">
                  <img 
                    src={farmer.image} 
                    alt={farmer.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{farmer.name}</h1>
                    <h2 className="text-xl text-green-600 font-medium mb-4">{farmer.farmName}</h2>
                    
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{farmer.rating}</span>
                        <span className="text-gray-500">({farmer.reviews} отзывов)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-5 w-5 text-gray-400" />
                        <span>{farmer.experience} лет опыта</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {farmer.certifications.map((cert) => (
                        <Badge key={cert} variant="outline" className="text-green-600 border-green-600">
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-gray-600">{farmer.description}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Контакты</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{farmer.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{farmer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{farmer.email}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Статистика</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Размер фермы:</span>
                      <span className="text-sm font-medium">{farmer.farmSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Сотрудников:</span>
                      <span className="text-sm font-medium">{farmer.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Продуктов:</span>
                      <span className="text-sm font-medium">{farmer.products}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Основана:</span>
                      <span className="text-sm font-medium">{farmer.established}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="products" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products">Продукты</TabsTrigger>
            <TabsTrigger value="about">О ферме</TabsTrigger>
            <TabsTrigger value="gallery">Галерея</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {farmerProducts.map((product) => (
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
                    {!product.inStock && (
                      <Badge variant="destructive" className="absolute bottom-2 left-2">
                        Нет в наличии
                      </Badge>
                    )}
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
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">{product.price}₽</span>
                      <Button 
                        size="sm" 
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>История фермы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{farmer.story}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Достижения:</h4>
                    <ul className="space-y-2">
                      {farmer.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Философия и методы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Принципы работы:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Органическое земледелие без химикатов</li>
                        <li>• Севооборот для сохранения плодородия почвы</li>
                        <li>• Использование только натуральных удобрений</li>
                        <li>• Бережное отношение к окружающей среде</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Технологии:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Капельное орошение</li>
                        <li>• Мониторинг почвы</li>
                        <li>• Биологическая защита растений</li>
                        <li>• Современные теплицы</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {farmer.farmImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg group">
                  <img 
                    src={image} 
                    alt={`Ферма ${farmer.farmName}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.author}</span>
                          {review.verified && (
                            <Badge variant="outline" className="text-xs">
                              Проверенная покупка
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FarmerProfile;