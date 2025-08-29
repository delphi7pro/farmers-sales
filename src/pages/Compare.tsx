import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  Star, 
  ShoppingCart,
  Heart,
  Plus,
  ArrowRight,
  Scale,
  CheckCircle,
  Minus
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Compare = () => {
  const { dispatch } = useCart();

  const [compareItems, setCompareItems] = useState([
    {
      id: '1',
      name: 'Органические помидоры',
      price: 350,
      originalPrice: 400,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Ферма Солнечная',
      rating: 4.9,
      reviews: 124,
      inStock: true,
      isOrganic: true,
      weight: '1 кг',
      origin: 'Московская область',
      shelfLife: '7-10 дней',
      calories: 18,
      protein: 0.9,
      features: ['Без химикатов', 'Собраны в день отправки', 'Высокое содержание витаминов']
    },
    {
      id: '18',
      name: 'Тепличные помидоры',
      price: 280,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Тепличный комплекс',
      rating: 4.5,
      reviews: 89,
      inStock: true,
      isOrganic: false,
      weight: '1 кг',
      origin: 'Калужская область',
      shelfLife: '5-7 дней',
      calories: 16,
      protein: 0.8,
      features: ['Круглогодично', 'Стабильное качество', 'Доступная цена']
    },
    {
      id: '19',
      name: 'Черри помидоры',
      price: 420,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Мини-ферма',
      rating: 4.7,
      reviews: 67,
      inStock: true,
      isOrganic: true,
      weight: '500 г',
      origin: 'Тульская область',
      shelfLife: '10-14 дней',
      calories: 20,
      protein: 1.1,
      features: ['Сладкий вкус', 'Долго хранятся', 'Идеальны для салатов']
    }
  ]);

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

  const removeFromCompare = (productId: string) => {
    setCompareItems(items => items.filter(item => item.id !== productId));
  };

  const addToCompare = () => {
    // В реальном приложении здесь будет модал для выбора товара
    console.log('Add product to compare');
  };

  if (compareItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <Scale className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Список сравнения пуст</h1>
            <p className="text-gray-600 mb-8">
              Добавьте товары для сравнения их характеристик и выбора лучшего варианта
            </p>
            <Button size="lg" asChild>
              <Link to="/products">
                Перейти к покупкам
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Сравнение товаров</h1>
            <p className="text-lg text-gray-600 mb-8">
              Сравните характеристики товаров и выберите лучший вариант
            </p>
            
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Сравниваете {compareItems.length} товара</p>
              <div className="flex gap-2">
                <Button variant="outline" onClick={addToCompare}>
                  <Plus className="h-4 w-4 mr-2" />
                  Добавить товар
                </Button>
                <Button variant="outline" onClick={() => setCompareItems([])}>
                  Очистить список
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Comparison Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <td className="p-4 w-48 font-medium text-gray-900">Характеристики</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center min-w-[280px]">
                          <div className="relative">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute -top-2 -right-2 h-6 w-6 text-red-500"
                              onClick={() => removeFromCompare(item.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-32 object-cover rounded-lg mb-3"
                            />
                            <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                            <p className="text-sm text-green-600">{item.farmer}</p>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Price */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Цена</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-xl font-bold text-green-600">{item.price}₽</span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">{item.originalPrice}₽</span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Rating */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Рейтинг</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{item.rating}</span>
                            <span className="text-sm text-gray-500">({item.reviews})</span>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Availability */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Наличие</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          {item.inStock ? (
                            <Badge className="bg-green-600">В наличии</Badge>
                          ) : (
                            <Badge variant="destructive">Нет в наличии</Badge>
                          )}
                        </td>
                      ))}
                    </tr>

                    {/* Organic */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Органический</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          {item.isOrganic ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>

                    {/* Weight */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Вес</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <span className="font-medium">{item.weight}</span>
                        </td>
                      ))}
                    </tr>

                    {/* Origin */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Регион</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <span>{item.origin}</span>
                        </td>
                      ))}
                    </tr>

                    {/* Shelf Life */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Срок хранения</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <span>{item.shelfLife}</span>
                        </td>
                      ))}
                    </tr>

                    {/* Calories */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Калории (на 100г)</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <span className="font-medium">{item.calories} ккал</span>
                        </td>
                      ))}
                    </tr>

                    {/* Protein */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Белки (на 100г)</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <span className="font-medium">{item.protein} г</span>
                        </td>
                      ))}
                    </tr>

                    {/* Features */}
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Особенности</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4">
                          <div className="space-y-1">
                            {item.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Actions */}
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Действия</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4">
                          <div className="space-y-2">
                            <Button 
                              className="w-full"
                              onClick={() => addToCart(item)}
                              disabled={!item.inStock}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              В корзину
                            </Button>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex-1">
                                <Heart className="h-4 w-4 mr-1" />
                                В избранное
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <Link to={`/products/${item.id}`}>
                                  Подробнее
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Add More Products */}
          {compareItems.length < 4 && (
            <Card className="mt-8">
              <CardContent className="p-8 text-center">
                <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Добавьте еще товары для сравнения
                </h3>
                <p className="text-gray-600 mb-6">
                  Вы можете сравнить до 4 товаров одновременно
                </p>
                <Button onClick={addToCompare}>
                  Добавить товар
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Similar Products */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  id: '20',
                  name: 'Помидоры Бычье сердце',
                  price: 480,
                  image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
                  farmer: 'Элитные овощи',
                  rating: 4.8
                },
                {
                  id: '21',
                  name: 'Помидоры на ветке',
                  price: 390,
                  image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
                  farmer: 'Ферма Солнечная',
                  rating: 4.6
                },
                {
                  id: '22',
                  name: 'Желтые помидоры',
                  price: 420,
                  image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
                  farmer: 'Цветные овощи',
                  rating: 4.7
                },
                {
                  id: '23',
                  name: 'Помидоры для засолки',
                  price: 320,
                  image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
                  farmer: 'Традиционная ферма',
                  rating: 4.5
                }
              ].map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Link to={`/products/${product.id}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-green-600 mb-2">{product.farmer}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-green-600">{product.price}₽</span>
                      <Button size="sm" variant="outline">
                        <Scale className="h-4 w-4 mr-1" />
                        Сравнить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Compare;