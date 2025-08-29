import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Heart, 
  Search, 
  Star,
  ShoppingCart,
  Trash2,
  Share2,
  Filter,
  Grid3X3,
  List,
  ArrowRight
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Wishlist = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('date');
  const { dispatch } = useCart();

  const wishlistItems = [
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
      addedDate: '2024-01-10',
      category: 'Овощи',
      description: 'Сочные красные помидоры, выращенные без химикатов'
    },
    {
      id: '5',
      name: 'Сезонные яблоки',
      price: 200,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Яблоневый сад',
      rating: 4.6,
      reviews: 93,
      inStock: true,
      addedDate: '2024-01-08',
      category: 'Фрукты',
      description: 'Хрустящие сладкие яблоки сорта Антоновка'
    },
    {
      id: '11',
      name: 'Домашний мед',
      price: 680,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Пасека Медовая',
      rating: 4.9,
      reviews: 67,
      inStock: false,
      addedDate: '2024-01-05',
      category: 'Сладости',
      description: 'Натуральный цветочный мед от пчел свободного полета'
    },
    {
      id: '12',
      name: 'Козий сыр',
      price: 520,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Козья ферма',
      rating: 4.8,
      reviews: 45,
      inStock: true,
      addedDate: '2024-01-03',
      category: 'Молочные',
      description: 'Нежный козий сыр с пряными травами'
    },
    {
      id: '13',
      name: 'Перепелиные яйца',
      price: 180,
      image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Перепелиная ферма',
      rating: 4.7,
      reviews: 89,
      inStock: true,
      addedDate: '2024-01-01',
      category: 'Яйца',
      description: 'Диетические перепелиные яйца высшего качества'
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
        farmer: product.farmer
      }
    });
  };

  const removeFromWishlist = (productId: string) => {
    // В реальном приложении здесь будет логика удаления из избранного
    console.log('Remove from wishlist:', productId);
  };

  const filteredItems = wishlistItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.farmer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Избранные товары</h1>
            <p className="text-lg text-gray-600 mb-8">
              Сохраненные товары, которые вы хотите купить позже
            </p>
            
            {/* Search and Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Поиск в избранном..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">По дате добавления</SelectItem>
                    <SelectItem value="name">По названию</SelectItem>
                    <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {filteredItems.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {searchQuery ? 'Ничего не найдено' : 'Список избранного пуст'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery 
                    ? 'Попробуйте изменить поисковый запрос' 
                    : 'Добавляйте товары в избранное, чтобы не потерять их'
                  }
                </p>
                <Button asChild>
                  <Link to="/products">
                    Перейти к покупкам
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Stats */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-600">
                  В избранном {filteredItems.length} товаров
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Поделиться списком
                  </Button>
                  <Button variant="outline" size="sm">
                    Добавить все в корзину
                  </Button>
                </div>
              </div>

              {/* Products Grid/List */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Link to={`/products/${item.id}`}>
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                        {!item.inStock && (
                          <Badge variant="destructive" className="absolute bottom-2 left-2">
                            Нет в наличии
                          </Badge>
                        )}
                        {item.originalPrice && (
                          <Badge className="absolute top-2 left-2 bg-red-600">
                            Скидка
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{item.rating}</span>
                          <span className="text-xs text-gray-500">({item.reviews})</span>
                        </div>
                        <CardTitle className="text-lg">
                          <Link to={`/products/${item.id}`} className="hover:text-green-600">
                            {item.name}
                          </Link>
                        </CardTitle>
                        <CardDescription>{item.farmer}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-green-600">{item.price}₽</span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">{item.originalPrice}₽</span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={() => addToCart(item)}
                            disabled={!item.inStock}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            В корзину
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => removeFromWishlist(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="relative w-32 h-32 flex-shrink-0">
                            <Link to={`/products/${item.id}`}>
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </Link>
                            {!item.inStock && (
                              <Badge variant="destructive" className="absolute top-1 left-1 text-xs">
                                Нет в наличии
                              </Badge>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                  <Link to={`/products/${item.id}`} className="hover:text-green-600">
                                    {item.name}
                                  </Link>
                                </h3>
                                <p className="text-green-600 font-medium">{item.farmer}</p>
                                <Badge variant="outline" className="mt-1">{item.category}</Badge>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFromWishlist(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-gray-600">{item.rating}</span>
                              <span className="text-xs text-gray-500">({item.reviews} отзывов)</span>
                            </div>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-green-600">{item.price}₽</span>
                                {item.originalPrice && (
                                  <span className="text-sm text-gray-500 line-through">{item.originalPrice}₽</span>
                                )}
                              </div>
                              <div className="flex gap-2">
                                <Button 
                                  onClick={() => addToCart(item)}
                                  disabled={!item.inStock}
                                >
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  В корзину
                                </Button>
                                <Button variant="outline">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Recommendations */}
          {filteredItems.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендуем также</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    id: '14',
                    name: 'Свежие огурцы',
                    price: 280,
                    image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=300',
                    farmer: 'Ферма Солнечная'
                  },
                  {
                    id: '15',
                    name: 'Молодая морковь',
                    price: 180,
                    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=300',
                    farmer: 'Овощная грядка'
                  },
                  {
                    id: '16',
                    name: 'Свежий салат',
                    price: 120,
                    image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300',
                    farmer: 'Зеленая грядка'
                  },
                  {
                    id: '17',
                    name: 'Домашний творог',
                    price: 320,
                    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300',
                    farmer: 'Молочная ферма'
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
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-green-600 mb-2">{product.farmer}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-green-600">{product.price}₽</span>
                        <Button size="sm" onClick={() => addToCart(product)}>
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;