import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  Star, 
  ShoppingCart, 
  Minus, 
  Plus,
  Share2,
  Truck,
  Shield,
  Award,
  MapPin,
  Calendar,
  Leaf
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { dispatch } = useCart();

  // Mock product data - в реальном приложении это будет загружаться по ID
  const product = {
    id: '1',
    name: 'Органические помидоры',
    price: 350,
    originalPrice: 400,
    images: [
      'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    farmer: {
      name: 'Ферма Солнечная',
      location: 'Московская область',
      experience: '15 лет',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    rating: 4.9,
    reviews: 124,
    category: 'vegetables',
    inStock: true,
    stockCount: 45,
    isOrganic: true,
    weight: '1 кг',
    harvestDate: '2024-01-15',
    description: 'Сочные красные помидоры, выращенные без использования химических удобрений и пестицидов. Идеально подходят для салатов, соусов и консервирования.',
    features: [
      'Выращены без химикатов',
      'Собраны в день отправки',
      'Высокое содержание витаминов',
      'Экологически чистые'
    ],
    nutritionFacts: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fat: 0.2,
      fiber: 1.2
    },
    storageInstructions: 'Хранить в холодильнике при температуре +2...+8°C. Срок хранения: 7-10 дней.',
    certifications: ['Органик', 'Эко-продукт', 'Без ГМО']
  };

  const reviews = [
    {
      id: 1,
      author: 'Анна Смирнова',
      rating: 5,
      date: '2024-01-10',
      text: 'Отличные помидоры! Очень сочные и ароматные. Заказываю уже не первый раз.',
      verified: true
    },
    {
      id: 2,
      author: 'Михаил Петров',
      rating: 5,
      date: '2024-01-08',
      text: 'Качество на высоте. Помидоры действительно органические, чувствуется разница.',
      verified: true
    },
    {
      id: 3,
      author: 'Елена Козлова',
      rating: 4,
      date: '2024-01-05',
      text: 'Хорошие помидоры, но цена немного высоковата. В целом доволена покупкой.',
      verified: false
    }
  ];

  const relatedProducts = [
    {
      id: '2',
      name: 'Огурцы свежие',
      price: 280,
      image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=300',
      farmer: 'Ферма Солнечная',
      rating: 4.8
    },
    {
      id: '3',
      name: 'Болгарский перец',
      price: 420,
      image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=300',
      farmer: 'Овощная грядка',
      rating: 4.7
    },
    {
      id: '4',
      name: 'Свежая зелень',
      price: 150,
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300',
      farmer: 'Зеленая грядка',
      rating: 4.9
    }
  ];

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        farmer: product.farmer.name
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
          <Link to="/products" className="hover:text-green-600">Продукты</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-white">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.isOrganic && (
                <Badge className="absolute top-4 left-4 bg-green-600">
                  Органик
                </Badge>
              )}
              {product.originalPrice && (
                <Badge variant="destructive" className="absolute top-4 right-4">
                  Скидка {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </Badge>
              )}
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews} отзывов)</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span className="text-sm text-gray-500">Артикул: {product.id}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-green-600 font-medium">{product.farmer.name}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-green-600">{product.price}₽</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}₽</span>
                )}
              </div>
              <span className="text-sm text-gray-600">за {product.weight}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="text-green-600 border-green-600">
                  {cert}
                </Badge>
              ))}
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>Дата сбора: {new Date(product.harvestDate).toLocaleDateString('ru-RU')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>Регион: {product.farmer.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Leaf className="h-4 w-4 text-gray-400" />
                <span>Вес: {product.weight}</span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Количество:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-gray-500">
                  В наличии: {product.stockCount} шт.
                </span>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1" onClick={addToCart}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Добавить в корзину
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Delivery Info */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Доставка сегодня</p>
                      <p className="text-sm text-gray-600">При заказе до 14:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Гарантия свежести</p>
                      <p className="text-sm text-gray-600">Возврат денег, если не понравится</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="nutrition">Состав</TabsTrigger>
            <TabsTrigger value="farmer">О фермере</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({product.reviews})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Описание продукта</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Особенности</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Условия хранения</h3>
                    <p className="text-gray-600">{product.storageInstructions}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Пищевая ценность на 100г</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{product.nutritionFacts.calories}</div>
                    <div className="text-sm text-gray-600">ккал</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{product.nutritionFacts.protein}</div>
                    <div className="text-sm text-gray-600">белки, г</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{product.nutritionFacts.carbs}</div>
                    <div className="text-sm text-gray-600">углеводы, г</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{product.nutritionFacts.fat}</div>
                    <div className="text-sm text-gray-600">жиры, г</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600">{product.nutritionFacts.fiber}</div>
                    <div className="text-sm text-gray-600">клетчатка, г</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="farmer" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <img 
                    src={product.farmer.image} 
                    alt={product.farmer.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{product.farmer.name}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.farmer.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{product.farmer.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Опыт: {product.farmer.experience}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Семейная ферма, специализирующаяся на выращивании органических овощей. 
                      Используем только натуральные удобрения и традиционные методы земледелия.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to={`/farmers/${product.farmer.name}`}>
                        Подробнее о фермере
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              
              <div className="text-center">
                <Button variant="outline">Показать все отзывы</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Похожие продукты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Link to={`/products/${relatedProduct.id}`}>
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                  </div>
                  <CardTitle className="text-lg">
                    <Link to={`/products/${relatedProduct.id}`} className="hover:text-green-600">
                      {relatedProduct.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{relatedProduct.farmer}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-600">{relatedProduct.price}₽</span>
                    <Button size="sm">В корзину</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;